import Sidebar from "./Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={styles.layout}>
      <Sidebar />
      <main style={styles.main}>{children}</main>
    </div>
  );
};

const styles = {
  layout: {
    display: "flex",
    height: "100vh",
    width: "100vw",
    background: "#020617",
    overflow: "hidden",
  },
  main: {
    flex: 1,
    padding: "32px",
    background: "#020617",
    overflowY: "auto",
  },
};

export default Layout;
