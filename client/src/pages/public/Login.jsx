import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();


  const loginAs = (role) => {

    localStorage.setItem("role", role);

    if (role === "GLOBAL_ADMIN") {
      navigate("/global-admin/home");
    }

    if (role === "BRANCH_ADMIN") {
      navigate("/branch-admin/home");
    }

    if (role === "CLIENT") {
      navigate("/client/home");
    }
  };


  return (

    <div className="min-h-screen bg-[#0B0F19] relative overflow-hidden flex items-center justify-center px-4">

      {/* Gradient Glow */}

      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-500/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 blur-[140px] rounded-full"></div>


      {/* LOGIN BOX */}

      <div className="relative z-10 w-full max-w-lg">

        {/* HEADING */}

        <div className="text-center mb-10">

          <div className="w-20 h-20 rounded-[28px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center mx-auto mb-6 text-4xl backdrop-blur-xl">

            🏢

          </div>


          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">

            Launch Demo

          </h1>


          <p className="text-gray-400 max-w-lg mx-auto leading-relaxed">

            Select a role to explore CoworkOS workflows
            across business analytics, branch operations,
            and client experiences.

          </p>

        </div>


        {/* ROLE CARDS */}

        <div className="space-y-5">

          {/* GLOBAL ADMIN */}

          <button
            onClick={() => loginAs("GLOBAL_ADMIN")}
            className="w-full bg-gradient-to-r from-[#111827] to-[#172554] border border-blue-500/20 hover:border-blue-400/40 transition-all rounded-[32px] p-6 text-left"
          >

            <div className="flex items-center gap-5">

              <div className="w-16 h-16 rounded-3xl bg-blue-500/10 flex items-center justify-center text-3xl">

                🌍

              </div>


              <div>

                <h2 className="text-2xl font-semibold text-white mb-1">

                  Global Admin

                </h2>

                <p className="text-gray-400 text-sm">

                  Business growth, analytics & revenue monitoring

                </p>

              </div>

            </div>

          </button>


          {/* BRANCH ADMIN */}

          <button
            onClick={() => loginAs("BRANCH_ADMIN")}
            className="w-full bg-gradient-to-r from-[#111827] to-[#052E16] border border-green-500/20 hover:border-green-400/40 transition-all rounded-[32px] p-6 text-left"
          >

            <div className="flex items-center gap-5">

              <div className="w-16 h-16 rounded-3xl bg-green-500/10 flex items-center justify-center text-3xl">

                🏢

              </div>


              <div>

                <h2 className="text-2xl font-semibold text-white mb-1">

                  Branch Admin

                </h2>

                <p className="text-gray-400 text-sm">

                  Workspace onboarding & operational workflows

                </p>

              </div>

            </div>

          </button>


          {/* CLIENT */}

          <button
            onClick={() => loginAs("CLIENT")}
            className="w-full bg-gradient-to-r from-[#111827] to-[#3B0764] border border-purple-500/20 hover:border-purple-400/40 transition-all rounded-[32px] p-6 text-left"
          >

            <div className="flex items-center gap-5">

              <div className="w-16 h-16 rounded-3xl bg-purple-500/10 flex items-center justify-center text-3xl">

                👤

              </div>


              <div>

                <h2 className="text-2xl font-semibold text-white mb-1">

                  Client Portal

                </h2>

                <p className="text-gray-400 text-sm">

                  Workspace details, renewals & invoices

                </p>

              </div>

            </div>

          </button>

        </div>

      </div>

    </div>
  );
}

export default Login;