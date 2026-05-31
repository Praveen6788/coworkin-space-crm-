// src/components/ProtectedRoute.jsx

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { auth } from "../lib/firebase";

function ProtectedRoute({
  children,
}) {
  const [checkingAuth, setCheckingAuth] =
    useState(true);
  const [firebaseUser, setFirebaseUser] =
    useState(null);

  useEffect(() => {
    if (!auth) {
      setCheckingAuth(false);
      return undefined;
    }

    const unsubscribe =
      onAuthStateChanged(auth, (user) => {
        setFirebaseUser(user);
        setCheckingAuth(false);
      });

    return unsubscribe;
  }, []);

  const clientId =
    localStorage.getItem(
      "clientId"
    );
  const firebaseUid =
    localStorage.getItem(
      "firebaseUid"
    );
  const role =
    localStorage.getItem(
      "role"
    );

  if (checkingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-500">
        Checking client session...
      </div>
    );
  }

  if (
    role !== "CLIENT" ||
    !clientId ||
    !firebaseUid ||
    !firebaseUser ||
    firebaseUser.uid !== firebaseUid
  ) {

    localStorage.removeItem("role");
    localStorage.removeItem("clientId");
    localStorage.removeItem("clientName");
    localStorage.removeItem("clientEmail");
    localStorage.removeItem("firebaseUid");

    return (
      <Navigate
        to="/client/login"
        replace
      />
    );

  }

  return children;
}

export default ProtectedRoute;
