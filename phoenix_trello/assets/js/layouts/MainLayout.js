import React from "react";

// This component wraps your whole app and can include headers, footers, etc.
export default function MainLayout({ children }) {
  return (
    <div>
      <header>
        <h2>Phoenix Trello</h2>
      </header>
      <section>
        {children}
      </section>
    </div>
  );
}