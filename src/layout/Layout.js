import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import "./Layout.scss";
import { LinkRoute } from "../ui";

function Layout() {
  const location = useLocation();
  return (
    <div className="layout">
      <aside className="sidebar">
        <nav>
          <ul>
            <li>
              <LinkRoute
                to="/"
                variant="primary"
                size="md"
                className={location.pathname === "/" ? "active" : ""}
              >
                Home
              </LinkRoute>
            </li>
            <li>
              <LinkRoute
                to="/showcase/buttons"
                variant="primary"
                size="md"
                className={
                  location.pathname === "/showcase/buttons" ? "active" : ""
                }
              >
                Buttons
              </LinkRoute>
            </li>
            <li>
              <LinkRoute
                to="/showcase/textbox"
                variant="primary"
                size="md"
                className={
                  location.pathname === "/showcase/textbox" ? "active" : ""
                }
              >
                Textbox
              </LinkRoute>
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
