import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {

  const base = import.meta.env.BASE_URL;

  return (
    <header className="py-4 bg-dark text-white mb-4 sticky-top">
      <div className="container">
        <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">

          <div className="d-flex align-items-center gap-3">

            <NavLink
              to="/"
              className="text-white text-decoration-none d-flex align-items-center gap-2"
            >
              <img
                src={`${base}img/logo.jpg`}
                alt="Logo"
                width="40"
                height="40"
                className="rounded-circle"
              />

              <h1 className="fw-bold fs-4 mb-0">Distri Urban</h1>
            </NavLink>

            <NavLink
              to="/props"
              className="text-white text-decoration-none"
            >
              Props
            </NavLink>

          </div>

          <form className="w-50" role="search" id="searchForm">
            <div className="input-group">

              <span className="input-group-text bg-secondary text-white">
                <i className="bi bi-search"></i>
              </span>

              <input
                type="search"
                id="searchInput"
                className="form-control"
                placeholder="Buscar productos..."
                aria-label="Buscar productos"
              />

              <button type="submit" className="btn btn-primary">
                <i className="bi bi-filter"></i> Buscar
              </button>

              <button className="btn btn-primary position-relative">
                <i className="bi bi-person fs-4"></i>
              </button>

            </div>
          </form>

        </div>
      </div>
    </header>
  );
};