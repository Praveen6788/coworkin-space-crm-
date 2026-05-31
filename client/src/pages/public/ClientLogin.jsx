import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AnimatedContent from "../../../reactbits/Animate";
import { fetchClients } from "../../Api/clientApi";

function ClientLogin() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      
      const clients = await fetchClients();
      const matchedClient = clients.find(
        (c) => c.email.toLowerCase() === email.trim().toLowerCase()
      );

      if (matchedClient) {
        localStorage.setItem("role", "CLIENT");
        localStorage.setItem("clientId", matchedClient._id);
        localStorage.setItem("clientName", matchedClient.contactPerson);
        localStorage.setItem("clientEmail", matchedClient.email);
        
        navigate("/client/home");
      } else {
        setError("Email address not found. Please contact support.");
      }
    } catch (err) {
      console.error(err);
      setError("Unable to connect to the login service. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="
      relative
      min-h-screen
      bg-[#0B0F19]
      overflow-hidden
      flex items-center justify-center
      px-4 py-10
      text-white
     
    ">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-500/10 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 blur-[140px] rounded-full"></div>

      <div className="relative z-10 w-full max-w-md  mt-15">
        <AnimatedContent distance={40} duration={1} blur>
          <div className="
            bg-white/[0.03]
            border border-white/10
            rounded-3xl
            p-8
            backdrop-blur-2xl
            shadow-[0_20px_60px_rgba(0,0,0,0.35)]
          ">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="
                inline-flex items-center justify-center
                w-16 h-16
                rounded-2xl
                bg-purple-500/10
                border border-purple-500/20
                text-3xl
                mb-4
              ">
                👤
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Client Portal</h2>
              <p className="text-gray-400 text-sm mt-2">
                Enter your registered email address to access your workspace.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="
                    w-full
                    h-12
                    px-4
                    rounded-xl
                    bg-white/[0.04]
                    border border-white/10
                    outline-none
                    text-sm
                    text-white
                    placeholder:text-gray-500
                    focus:border-purple-500/50
                    focus:bg-white/[0.06]
                    transition-all duration-300
                  "
                />
              </div>

              {error && (
                <div className="
                  bg-red-500/10
                  border border-red-500/20
                  text-red-400
                  text-xs
                  rounded-xl
                  p-3
                  text-center
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
                  rounded-xl
                  bg-purple-600
                  hover:bg-purple-700
                  disabled:bg-purple-800/50
                  disabled:text-white/50
                  font-semibold
                  text-sm
                  transition-all duration-300
                  shadow-[0_10px_20px_rgba(124,58,237,0.3)]
                "
              >
                {loading ? "Verifying..." : "Log In"}
              </button>
            </form>

            {/* Footer / Back */}
            <div className="text-center mt-6">
              <button
                onClick={() => navigate("/login")}
                className="text-xs text-gray-500 hover:text-white transition duration-300"
              >
                ← Back to role selection
              </button>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </div>
  );
}

export default ClientLogin;
