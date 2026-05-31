import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchClients } from "../../Api/clientApi";

function ClientLogin() {

  const [email, setEmail] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const navigate =
    useNavigate();

  const handleLogin =
    async (e) => {

      e.preventDefault();

      try {

        setLoading(true);

        const clients =
          await fetchClients();

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

          alert(
            "Client not found"
          );

          return;

        }

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

        alert(
          `Welcome ${client.companyName}`
        );

        navigate(
          "/client/home"
        );

      }

      catch (error) {

        console.log(error);

        alert(
          "Login failed"
        );

      }

      finally {

        setLoading(false);

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

        </div>

        <form
          onSubmit={
            handleLogin
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
                ? "Logging In..."
                : "Login"
            }

          </button>

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