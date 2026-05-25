import { Link, useNavigate } from "react-router-dom";

const Header = () => {

  const role = localStorage.getItem("role");

  const navigate = useNavigate();


  const logout = () => {

    localStorage.removeItem("role");

    navigate("/");
  };


  /* =========================
     ROLE NAVIGATION
  ========================== */

  const globalAdminNav = [
    {
      name: "Dashboard",
      path: "/global-admin/dashboard"
    },
    {
      name: "Branch Analytics",
      path: "/global-admin/branch-analytics"
    },
    {
      name: "Finance",
      path: "/global-admin/finance"
    }
  ];


  const branchAdminNav = [
    {
      name: "Dashboard",
      path: "/branch-admin/dashboard"
    },
    {
      name: "Floor Map",
      path: "/branch-admin/floor-map"
    },
    {
      name: "Pipeline",
      path: "/branch-admin/pipeline"
    }
  ];


const clientNav = [

  {
    name: "Home",
    path: "client/Home"
  },

  {
    name: "Locations",
    path: "client/locations",
    dropdown: [
      "Madhapur",
      "Gachibowli",
      "KPHB",
      "Kondapur",
      "Himayathnagar"
    ]
  },

  {
    name: "Bookings",
    path: "/client/bookings",
    dropdown: [
      "Meeting Rooms",
      "Private Offices",
      "Dedicated Desks",
      "Day Pass"
    ]
  },

  {
    name: "Photos",
    path: "/gallery"
  },

  {
    name: "Events",
    path: "/events"
  },

  {
    name: "Login",
    path: "/login"
  },
  {
    name:"membership",
    path:"/membership"
  }

];

  let currentNav = [];

  if (role === "GLOBAL_ADMIN") {
    currentNav = globalAdminNav;
  }

  if (role === "BRANCH_ADMIN") {
    currentNav = branchAdminNav;
  }

  if (role === "CLIENT") {
    currentNav = clientNav;
  }


  return (

    <header className="bg-[#0B0F19]/80 backdrop-blur-xl border-b border-white/10 text-white sticky top-0 z-50 bg-black">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between">

        {/* LOGO */}

        <Link
  to={
    role === "GLOBAL_ADMIN"
      ? "/global-admin/home"
      : role === "BRANCH_ADMIN"
      ? "/branch-admin/home"
      : role === "CLIENT"
      ? "/client/home"
      : "/"
  }
  className="flex items-center gap-3"
>

  <div className="w-10 h-10 rounded-2xl bg-blue-500/20 border border-blue-500/20 flex items-center justify-center">

    🏢

  </div>


  <div>

    <h1 className="text-2xl font-bold tracking-wide">
      CoworkOS
    </h1>

    <p className="text-xs text-gray-400">
      CRM + ERP Platform
    </p>

  </div>

</Link>


        {/* NAVIGATION */}

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">

          {/* PUBLIC NAV */}

          {!role && (

            <>

              <a
                href="#about"
                className="hover:text-blue-400 transition"
              >
                About
              </a>


              <a
                href="#problem"
                className="hover:text-blue-400 transition"
              >
                Problem
              </a>


              <a
                href="#solution"
                className="hover:text-blue-400 transition"
              >
                Solution
              </a>


              <a
                href="#workflow"
                className="hover:text-blue-400 transition"
              >
                Workflow
              </a>


              <a
                href="#features"
                className="hover:text-blue-400 transition"
              >
                Features
              </a>


              <Link
                to="/demo-manual"
                className="hover:text-blue-400 transition"
              >
                Demo Manual
              </Link>

            </>

          )}


          {/* ROLE NAV */}

          {role && currentNav.map((item) => (

            <Link
              key={item.name}
              to={item.path}
              className="hover:text-blue-400 transition"
            >
              {item.name}
            </Link>

          ))}

        </nav>



        {/* RIGHT SIDE */}

        <div className="flex items-center gap-4">

          {/* PUBLIC BUTTONS */}

          {!role ? (

            <>

              <Link
                to="/login"
                className="border border-white/10 bg-white/5 px-5 py-2 rounded-xl hover:bg-white hover:text-black transition text-sm"
              >

                Login

              </Link>


              <Link
                to="/login"
                className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-xl transition text-sm font-medium"
              >

                Launch Demo

              </Link>

            </>

          ) : (

            <>
              
              {/* ROLE BADGE */}

              <div className="hidden sm:flex px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-sm text-blue-400">

                {role.replace("_", " ")}

              </div>


              {/* HOME BUTTON */}


              {/* LOGOUT */}

              <button
                onClick={logout}
                className="border border-red-500/20 bg-red-500/10 text-red-400 hover:bg-red-500/20 px-5 py-2 rounded-xl transition text-sm"
              >

                Logout

              </button>

            </>

          )}

        </div>

      </div>

    </header>
  );
};

export default Header;