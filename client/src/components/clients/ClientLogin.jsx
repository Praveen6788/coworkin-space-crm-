import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createClient, fetchClients } from "../../Api/clientApi";
import { auth, isFirebaseConfigured } from "../../lib/firebase";

const workspaceTypes = [
  "Private Cabin",
  "Dedicated Desk",
  "Hot Desk",
  "Meeting Room",
  "Day Pass",
];

const getFirebaseAuthError = (error) => {
  if (
    error.code === "auth/configuration-not-found" ||
    error.code === "auth/operation-not-allowed"
  ) {
    return "Firebase Authentication is not enabled correctly. In Firebase Console, enable Authentication and turn on Email/Password sign-in.";
  }

  if (error.code === "auth/unauthorized-domain") {
    return "This domain is not authorized in Firebase. Add localhost and your deployed domain under Authentication settings.";
  }

  if (error.code === "auth/network-request-failed") {
    return "Firebase could not be reached. Check your internet connection and try again.";
  }

  if (
    error.code === "auth/invalid-credential" ||
    error.code === "auth/user-not-found" ||
    error.code === "auth/wrong-password"
  ) {
    return "Invalid email or password.";
  }

  if (error.code === "auth/email-already-in-use") {
    return "This email already has a Firebase account. Please log in.";
  }

  return error.message || "Authentication failed";
};

function ClientLogin() {

  const [mode, setMode] =
    useState("login");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState("");

  const [registerData, setRegisterData] =
    useState({
      companyName: "",
      contactPerson: "",
      phone: "",
      branch: "",
      workspaceType: "Hot Desk",
      seatsAllocated: 1,
      monthlyRent: 0,
    });

  const [loading, setLoading] =
    useState(false);

  const navigate =
    useNavigate();

  const saveClientSession = (client, firebaseUser) => {
    localStorage.setItem(
      "role",
      "CLIENT"
    );

    localStorage.setItem(
      "firebaseUid",
      firebaseUser.uid
    );

    localStorage.setItem(
      "clientId",
      client._id
    );

    localStorage.setItem(
      "clientName",
      client.companyName
    );

    localStorage.setItem(
      "clientEmail",
      client.email
    );
  };

  const handleLogin =
    async (e) => {

      e.preventDefault();

      if (!isFirebaseConfigured || !auth) {
        setError(
          "Firebase is not configured. Add your Firebase Vite env values first."
        );
        return;
      }

      try {

        setLoading(true);
        setError("");

        const credential =
          await signInWithEmailAndPassword(
            auth,
            email.trim(),
            password
          );

        const clients = await fetchClients();

        const client =
          clients.find(
            (c) =>
              c.email
                ?.toLowerCase()
                .trim() ===
              email
                .toLowerCase()
                .trim()
          );

        if (!client) {

          await signOut(auth);

          setError(
            "Firebase login succeeded, but no client profile exists for this email."
          );

          return;

        }

        saveClientSession(client, credential.user);

        navigate(
          "/client/home"
        );

      }

      catch (error) {

        setError(getFirebaseAuthError(error));

      }

      finally {

        setLoading(false);

      }

    };

  const handleRegister =
    async (e) => {
      e.preventDefault();

      if (!isFirebaseConfigured || !auth) {
        setError(
          "Firebase is not configured. Add your Firebase Vite env values first."
        );
        return;
      }

      if (password.length < 6) {
        setError("Password must be at least 6 characters.");
        return;
      }

      let createdUser = null;

      try {
        setLoading(true);
        setError("");

        const existingClients = await fetchClients();
        const existingClient = existingClients.find(
          (client) =>
            client.email?.toLowerCase().trim() ===
            email.toLowerCase().trim()
        );

        if (existingClient) {
          setError("A client profile already exists for this email. Please log in.");
          return;
        }

        const credential =
          await createUserWithEmailAndPassword(
            auth,
            email.trim(),
            password
          );

        createdUser = credential.user;

        const client = await createClient({
          companyName:
            registerData.companyName.trim(),
          contactPerson:
            registerData.contactPerson.trim(),
          email: email.trim(),
          phone:
            registerData.phone.trim(),
          branch:
            registerData.branch.trim(),
          workspaceType:
            registerData.workspaceType,
          seatsAllocated:
            Number(registerData.seatsAllocated) || 1,
          monthlyRent:
            Number(registerData.monthlyRent) || 0,
          status: "PENDING",
        });

        saveClientSession(client, credential.user);
        navigate("/client/home");
      } catch (registerError) {
        if (createdUser) {
          try {
            await deleteUser(createdUser);
          } catch (deleteError) {
            console.error("Firebase user cleanup failed:", deleteError);
          }
        }

        if (auth) {
          await signOut(auth).catch(() => {});
        }

        setError(
          getFirebaseAuthError(registerError)
        );
      } finally {
        setLoading(false);
      }
    };

  const handlePasswordReset =
    async () => {
      if (!email.trim()) {
        setError("Enter your email first, then request a reset link.");
        return;
      }

      if (!isFirebaseConfigured || !auth) {
        setError("Firebase is not configured.");
        return;
      }

      try {
        setError("");
        await sendPasswordResetEmail(auth, email.trim());
        setError("Password reset email sent.");
      } catch (resetError) {
        setError(resetError.message || "Unable to send reset email.");
      }
    };

  return (

    <div className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-slate-100
      px-4
    ">

      <div className="
        w-full
        max-w-md
        bg-white
        rounded-3xl
        shadow-lg
        p-8
      ">

        <div className="
          text-center
          mb-8
        ">

          <h1 className="
            text-3xl
            font-bold
            text-slate-800
          ">
            Client Login
          </h1>

          <p className="
            text-slate-500
            mt-2
          ">
            Access your bookings,
            invoices and payments
          </p>

          <div className="
            grid
            grid-cols-2
            gap-2
            mt-6
            rounded-xl
            bg-slate-100
            p-1
          ">
            {["login", "register"].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setMode(item);
                  setError("");
                }}
                className={`
                  h-10
                  rounded-lg
                  text-sm
                  font-semibold
                  capitalize
                  ${
                    mode === item
                      ? "bg-white text-sky-600 shadow-sm"
                      : "text-slate-500"
                  }
                `}
              >
                {item}
              </button>
            ))}
          </div>

        </div>

        <form
          onSubmit={
            mode === "login"
              ? handleLogin
              : handleRegister
          }
          className="
            space-y-5
          "
        >

          <div>

            <label className="
              block
              text-sm
              font-medium
              text-slate-700
              mb-2
            ">
              Email Address
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
              placeholder="Enter registered email"
              className="
                w-full
                h-12
                px-4
                border
                border-slate-300
                rounded-xl
                outline-none
                focus:ring-2
                focus:ring-sky-400
              "
              required
            />

          </div>

          {mode === "register" && (
            <>
              <div>
                <label className="
                  block
                  text-sm
                  font-medium
                  text-slate-700
                  mb-2
                ">
                  Company Name
                </label>
                <input
                  type="text"
                  value={registerData.companyName}
                  onChange={(e) =>
                    setRegisterData((current) => ({
                      ...current,
                      companyName: e.target.value,
                    }))
                  }
                  placeholder="Enter company name"
                  className="
                    w-full
                    h-12
                    px-4
                    border
                    border-slate-300
                    rounded-xl
                    outline-none
                    focus:ring-2
                    focus:ring-sky-400
                  "
                  required
                />
              </div>

              <div>
                <label className="
                  block
                  text-sm
                  font-medium
                  text-slate-700
                  mb-2
                ">
                  Contact Person
                </label>
                <input
                  type="text"
                  value={registerData.contactPerson}
                  onChange={(e) =>
                    setRegisterData((current) => ({
                      ...current,
                      contactPerson: e.target.value,
                    }))
                  }
                  placeholder="Enter contact person"
                  className="
                    w-full
                    h-12
                    px-4
                    border
                    border-slate-300
                    rounded-xl
                    outline-none
                    focus:ring-2
                    focus:ring-sky-400
                  "
                  required
                />
              </div>

              <div>
                <label className="
                  block
                  text-sm
                  font-medium
                  text-slate-700
                  mb-2
                ">
                  Phone
                </label>
                <input
                  type="tel"
                  value={registerData.phone}
                  onChange={(e) =>
                    setRegisterData((current) => ({
                      ...current,
                      phone: e.target.value,
                    }))
                  }
                  placeholder="Enter phone number"
                  className="
                    w-full
                    h-12
                    px-4
                    border
                    border-slate-300
                    rounded-xl
                    outline-none
                    focus:ring-2
                    focus:ring-sky-400
                  "
                  required
                />
              </div>

              <div>
                <label className="
                  block
                  text-sm
                  font-medium
                  text-slate-700
                  mb-2
                ">
                  Preferred Branch
                </label>
                <input
                  type="text"
                  value={registerData.branch}
                  onChange={(e) =>
                    setRegisterData((current) => ({
                      ...current,
                      branch: e.target.value,
                    }))
                  }
                  placeholder="Example: Madhapur"
                  className="
                    w-full
                    h-12
                    px-4
                    border
                    border-slate-300
                    rounded-xl
                    outline-none
                    focus:ring-2
                    focus:ring-sky-400
                  "
                  required
                />
              </div>

              <div>
                <label className="
                  block
                  text-sm
                  font-medium
                  text-slate-700
                  mb-2
                ">
                  Workspace Type
                </label>
                <select
                  value={registerData.workspaceType}
                  onChange={(e) =>
                    setRegisterData((current) => ({
                      ...current,
                      workspaceType: e.target.value,
                    }))
                  }
                  className="
                    w-full
                    h-12
                    px-4
                    border
                    border-slate-300
                    rounded-xl
                    outline-none
                    focus:ring-2
                    focus:ring-sky-400
                  "
                  required
                >
                  {workspaceTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="
                    block
                    text-sm
                    font-medium
                    text-slate-700
                    mb-2
                  ">
                    Seats
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={registerData.seatsAllocated}
                    onChange={(e) =>
                      setRegisterData((current) => ({
                        ...current,
                        seatsAllocated: e.target.value,
                      }))
                    }
                    className="
                      w-full
                      h-12
                      px-4
                      border
                      border-slate-300
                      rounded-xl
                      outline-none
                      focus:ring-2
                      focus:ring-sky-400
                    "
                    required
                  />
                </div>

                <div>
                  <label className="
                    block
                    text-sm
                    font-medium
                    text-slate-700
                    mb-2
                  ">
                    Monthly Rent
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={registerData.monthlyRent}
                    onChange={(e) =>
                      setRegisterData((current) => ({
                        ...current,
                        monthlyRent: e.target.value,
                      }))
                    }
                    className="
                      w-full
                      h-12
                      px-4
                      border
                      border-slate-300
                      rounded-xl
                      outline-none
                      focus:ring-2
                      focus:ring-sky-400
                    "
                  />
                </div>
              </div>
            </>
          )}

          <div>

            <label className="
              block
              text-sm
              font-medium
              text-slate-700
              mb-2
            ">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
              placeholder="Enter Firebase password"
              className="
                w-full
                h-12
                px-4
                border
                border-slate-300
                rounded-xl
                outline-none
                focus:ring-2
                focus:ring-sky-400
              "
              required
            />

          </div>

          {error && (
            <div className="
              rounded-xl
              border
              border-sky-200
              bg-sky-50
              p-3
              text-sm
              text-sky-700
            ">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              h-12
              bg-sky-500
              hover:bg-sky-600
              text-white
              rounded-xl
              font-semibold
              transition-all
            "
          >

            {
              loading
                ? mode === "login"
                  ? "Logging In..."
                  : "Creating Account..."
                : mode === "login"
                  ? "Login"
                  : "Create Client Account"
            }

          </button>

          {mode === "login" && (
            <button
              type="button"
              onClick={handlePasswordReset}
              className="
                w-full
                text-sm
                text-sky-600
                hover:text-sky-700
              "
            >
              Forgot password?
            </button>
          )}

        </form>

        <div className="
          mt-8
          p-4
          rounded-xl
          bg-slate-50
          border
        ">

          <h3 className="
            font-semibold
            text-slate-700
            mb-2
          ">
            Demo Client
          </h3>

          <p className="
            text-sm
            text-slate-600
          ">
            Email:
            <br />
            rahul@startupx.com
          </p>

        </div>

      </div>

    </div>

  );

}

export default ClientLogin;
