const Topbar = () => {
  return (
    <div style={styles.topbar}>
      <h3 style={styles.title}>Dashboard</h3>
    </div>
  );
};

const styles = {
  topbar: {
    height: "60px",
    background: "#111827",
    borderBottom: "1px solid #1f2937",
    display: "flex",
    alignItems: "center",
    padding: "0 20px",
    color: "#e5e7eb",
  },
  title: {
    fontSize: "18px",
    fontWeight: 500,
  },
};

export default Topbar;
