import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <aside style={styles.sidebar}>
      {/* SCROLLABLE CONTENT */}
      <div style={styles.top}>
        <h2 style={styles.logo}>AuthFlow</h2>

        <button style={styles.activeLink}>Dashboard</button>

        <div style={styles.divider} />

        <div style={styles.infoBox}>
          <p style={styles.infoTitle}>Quick Stats</p>

          <div style={styles.infoItem}>
            <span>Total Tasks</span>
            <strong>4</strong>
          </div>
          <div style={styles.infoItem}>
            <span>Completed</span>
            <strong style={{ color: "#22c55e" }}>2</strong>
          </div>
          <div style={styles.infoItem}>
            <span>Pending</span>
            <strong style={{ color: "#38bdf8" }}>2</strong>
          </div>
        </div>
      </div>

      {/* FIXED BOTTOM */}
      <div style={styles.bottom}>
        <div style={styles.userBox}>
          <p style={styles.userName}>test@example.com</p>
          <p style={styles.userRole}>Authenticated User</p>
        </div>

        <button onClick={logout} style={styles.logout}>
          Logout
        </button>
      </div>
    </aside>
  );
};

const styles = {
  sidebar: {
    width: "260px",
    height: "100vh", 
    background: "#020617",
    borderRight: "1px solid #1e293b",
    display: "flex",
    flexDirection: "column" as const,
  },

  top: {
    flex: 1,
    padding: "24px",
    overflowY: "auto", 
  },

  bottom: {
    padding: "16px 24px",
    borderTop: "1px solid #1e293b",
    background: "#020617",
  },

  logo: {
    color: "#e5e7eb",
    fontSize: "22px",
    fontWeight: 600,
    marginBottom: "24px",
  },

  activeLink: {
    width: "100%",
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "6px",
    padding: "10px",
    color: "#38bdf8",
    cursor: "pointer",
    textAlign: "left" as const,
    marginBottom: "24px",
  },

  divider: {
    height: "1px",
    background: "#1e293b",
    marginBottom: "24px",
  },

  infoBox: {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "8px",
    padding: "14px",
  },

  infoTitle: {
    color: "#9ca3af",
    fontSize: "13px",
    marginBottom: "12px",
  },

  infoItem: {
    display: "flex",
    justifyContent: "space-between",
    color: "#e5e7eb",
    fontSize: "14px",
    marginBottom: "8px",
  },

  userBox: {
    marginBottom: "12px",
  },

  userName: {
    color: "#e5e7eb",
    fontSize: "14px",
  },

  userRole: {
    color: "#9ca3af",
    fontSize: "12px",
  },

  logout: {
    width: "100%",
    background: "#ef4444",
    border: "none",
    borderRadius: "8px",
    padding: "12px",
    color: "white",
    fontSize: "15px",
    cursor: "pointer",
  },
};

export default Sidebar;
