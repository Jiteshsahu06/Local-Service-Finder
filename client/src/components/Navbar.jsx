import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#2563eb",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h2 style={{ color: "white" }}>Local Service Finder</h2>

      <div>
        <Link to="/" style={{ color: "white", marginRight: 20 }}>
          Home
        </Link>

        <Link to="/services" style={{ color: "white", marginRight: 20 }}>
          Services
        </Link>

        <Link to="/login" style={{ color: "white", marginRight: 20 }}>
          Login
        </Link>

        <Link to="/signup" style={{ color: "white" }}>
          Signup
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;