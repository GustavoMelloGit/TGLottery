import React from "react";

export default function Home() {
  return (
    <div>
      <p>Home</p>
      <button
        onClick={() => {
          localStorage.removeItem("isAuthenticated");
        }}
      >
        Logout
      </button>
    </div>
  );
}
