import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      
      {/* Left Title */}
      <div style={styles.logo}>
        Intern Verification System
      </div>

      {/* Right Tabs */}
      <div style={styles.links}>
        
        <NavLink
          to="/generate"
          style={({ isActive }) =>
            isActive ? styles.activeBtn : styles.btn
          }
        >
          Generate
        </NavLink>

        <NavLink
          to="/verify"
          style={({ isActive }) =>
            isActive ? styles.activeBtn : styles.btn
          }
        >
          Verify
        </NavLink>

        <NavLink
          to="/dashboard"
          style={({ isActive }) =>
            isActive ? styles.activeBtn : styles.btn
          }
        >
          Dashboard
        </NavLink>

      </div>
    </nav>
  );
}
const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 20px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    position: "sticky",
    top: 0
  },

  logo: {
    fontWeight: "bold",
    fontSize: "18px",
    color: "#333"
  },

  links: {
    display: "flex",
    gap: "10px"
  },

  btn: {
    padding: "8px 14px",
    borderRadius: "8px",
    textDecoration: "none",
    color: "#333",
    backgroundColor: "#f3f4f6",
    fontWeight: "500"
  },

  activeBtn: {
    padding: "8px 14px",
    borderRadius: "8px",
    textDecoration: "none",
    color: "white",
    backgroundColor: "#2563eb",
    fontWeight: "500"
  }
};