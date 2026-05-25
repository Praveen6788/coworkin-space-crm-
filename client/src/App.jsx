import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import MainLayout from "./layouts/MainLayout";
import Home from  "./pages/public/Home"
import Login from "./pages/public/Login"
import Dashboard from "./pages/admin/Dashboard";
import AdminHome from "./pages/admin/AdminHome";

import ClientHome from "./pages/client/ClientHome";
import FinanceOverview from "./pages/admin/FinanceOverview";
import BranchAnalytics from "./pages/admin/BranchAnalytics";
import BranchAdminHome from "./pages/Branch admin/BranchAdminHome";
import Pipeline from "./pages/Branch admin/Pipeline";
import FloorMap from "./pages/Branch admin/FloorMap";
import BranchAdminDashboard from "./pages/Branch admin/BranchAdminDashboard";
import BranchBookingPage from "./components/clients/BranchBookingPage";
import Bookings from "./components/clients/Bookings";
import Loc from "./components/clients/Locations"



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "login",
        element: <Login />,
      },

      {
        path:"dashboard",
        element : <Dashboard/>
      },
      {
        path:"global-admin/home",
        element : <AdminHome/>
      },
      {
        path:"client/home",
        element : <ClientHome/>
      },
      {
        path:"global-admin/dashboard",
        element : <Dashboard/>
      },
      {
        path :"global-admin/finance",
        element : <FinanceOverview/>
      },
      {
        path :"/global-admin/branch-analytics",
        element : <BranchAnalytics/>
      },
      {
        path : "branch-admin/home",
        element : <BranchAdminHome/>
      },
      {
        path : "branch-admin/dashboard",
        element : <BranchAdminDashboard/>
      },
      {
        path : "branch-admin/pipeline",
        element : <Pipeline/>
      },{
        path : "branch-admin/floor-map",
        element : <FloorMap/>
      },
      {
        path : "client/Home",
        element : <ClientHome/>

      },
      {path:"/bookings/:slug",
  element:<BranchBookingPage/>}
     ,{
      path:"/Client/Locations",
      element :<Loc/>
     },
     {path:"client/bookings",
  element:<Bookings/>}
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;