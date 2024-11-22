"use client";

import React, { useActionState } from "react";
import { logout } from "@/utils/server/logout";

export function LogoutForm() {
  const [logoutState, logoutAction] = useActionState(logout, null);
  return (
    <form className="flex justify-center" action={logoutAction}>
      {logoutState == null ? null : <span className="error">{logoutState}</span>}
      <button type="submit">
        Logout
      </button>
    </form>
  );
}