import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Layout.scss";

function Layout() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/showcase/buttons">Buttons</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
