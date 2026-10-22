import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Login</Link> |{" "}
      <Link to="/fleet">Fleet</Link> |{" "}
      <Link to="/my-bookings">Bookings</Link> |{" "}
      <Link to="/admin">Admin</Link>
    </nav>
  );
}

export default Navbar;