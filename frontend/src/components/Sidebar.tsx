import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div style={styles.sidebar}>
      <h2 style={styles.logo}>AuthFlow</h2>

      <nav style={styles.nav}>
        <button style={styles.link} onClick={() => navigate("/")}>
          Dashboard
        </button>
      </nav>

      <button style={styles.logout} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

const styles = {
  sidebar: {
    width: "220px",
    height: "100vh",
    background: "#0b0f1a",
    color: "#e5e7eb",
    padding: "20px",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "space-between",
    borderRight: "1px solid #1f2937",
  },
  logo: {
    fontSize: "22px",
    fontWeight: "bold",
  },
  nav: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "12px",
  },
  link: {
    background: "transparent",
    border: "none",
    color: "#9ca3af",
    fontSize: "16px",
    cursor: "pointer",
    textAlign: "left" as const,
  },
  logout: {
    background: "#1f2937",
    border: "none",
    padding: "10px",
    borderRadius: "6px",
    color: "#f87171",
    cursor: "pointer",
  },
};

export default Sidebar;
