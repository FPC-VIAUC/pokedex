import { Outlet, Link } from "react-router";

function Root() {
  return (
    <>
      <nav className="navbar navbar-expand navbar-dark bg-dark sticky-top mb-2 ps-3">
        <Link to={"/"} className="navbar-brand">
          Home
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to={"/page/1"} className="nav-link">
              Pages
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Root;
