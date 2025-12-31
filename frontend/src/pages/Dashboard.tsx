import { useEffect, useState } from "react";
import api from "../api/axios";

type Task = {
  _id: string;
  title: string;
  status: "pending" | "completed";
};

const Dashboard = () => {
  const [email, setEmail] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([fetchProfile(), fetchTasks()]).finally(() =>
      setLoading(false)
    );
  }, []);

  const fetchProfile = async () => {
    const res = await api.get("/profile/me");
    setEmail(res.data.email);
  };

  const fetchTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  const addTask = async () => {
    if (!newTask.trim()) return;
    await api.post("/tasks", { title: newTask });
    setNewTask("");
    fetchTasks();
  };

  const completeTask = async (id: string) => {
    await api.put(`/tasks/${id}`, { status: "completed" });
    fetchTasks();
  };

  const deleteTask = async (id: string) => {
    await api.delete(`/tasks/${id}`);
    fetchTasks();
  };

  const total = tasks.length;
  const completed = tasks.filter(t => t.status === "completed").length;
  const pending = total - completed;
  const progress = total === 0 ? 0 : Math.round((completed / total) * 100);

  if (loading) {
    return <p style={{ color: "#9ca3af" }}>Loading dashboard...</p>;
  }

  return (
    <div style={{ width: "100%" }}>
      <h1 style={styles.title}>Dashboard</h1>
      <p style={styles.subtitle}>Logged in as: {email}</p>

      {/* STATS */}
      <div style={styles.cards}>
        <StatCard label="Total Tasks" value={total} />
        <StatCard label="Completed" value={completed} />
        <StatCard label="Pending" value={pending} />
      </div>

      {/* PROGRESS */}
      <div style={styles.chartCard}>
        <p style={styles.chartTitle}>Task Completion</p>
        <div style={styles.progressBar}>
          <div
            style={{
              ...styles.progressFill,
              width: `${progress}%`,
            }}
          />
        </div>
        <p style={styles.chartText}>{progress}% completed</p>
      </div>

      {/* ADD TASK */}
      <div style={styles.addTaskBox}>
        <input
          type="text"
          placeholder="Enter new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={styles.input}
        />
        <button style={styles.addBtn} onClick={addTask}>
          Add
        </button>
      </div>

      {/* TASK LIST */}
      <div style={{ marginTop: "24px" }}>
        <h2 style={{ color: "#e5e7eb" }}>Your Tasks</h2>

        {tasks.length === 0 && (
          <p style={{ color: "#9ca3af" }}>No tasks yet</p>
        )}

        {tasks.map(task => (
          <div key={task._id} style={styles.task}>
            <span
              style={{
                textDecoration:
                  task.status === "completed" ? "line-through" : "none",
                color:
                  task.status === "completed" ? "#9ca3af" : "#e5e7eb",
              }}
            >
              {task.title}
            </span>

            <div>
              {task.status !== "completed" && (
                <button
                  style={styles.completeBtn}
                  onClick={() => completeTask(task._id)}
                >
                  ✓
                </button>
              )}
              <button
                style={styles.deleteBtn}
                onClick={() => deleteTask(task._id)}
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const StatCard = ({ label, value }: { label: string; value: number }) => (
  <div style={styles.card}>
    <p style={styles.cardLabel}>{label}</p>
    <h2 style={styles.cardValue}>{value}</h2>
  </div>
);

const styles = {
  title: { fontSize: "28px", color: "#e5e7eb" },
  subtitle: { color: "#9ca3af", marginBottom: "24px" },

  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
  },
  card: {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "10px",
    padding: "20px",
  },
  cardLabel: { color: "#9ca3af", fontSize: "14px" },
  cardValue: { color: "#38bdf8", fontSize: "32px", marginTop: "8px" },

  chartCard: {
    marginTop: "32px",
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "10px",
    padding: "20px",
  },
  chartTitle: { color: "#e5e7eb", marginBottom: "12px" },
  progressBar: {
    height: "10px",
    background: "#1e293b",
    borderRadius: "5px",
    overflow: "hidden",
  },
  progressFill: { height: "100%", background: "#38bdf8" },
  chartText: { marginTop: "8px", color: "#9ca3af", fontSize: "14px" },

  addTaskBox: {
    marginTop: "32px",
    display: "flex",
    gap: "10px",
  },
  input: {
    flex: 1,
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #1e293b",
    background: "#020617",
    color: "#e5e7eb",
  },
  addBtn: {
    padding: "12px 20px",
    borderRadius: "8px",
    background: "#38bdf8",
    border: "none",
    color: "#020617",
    cursor: "pointer",
    fontWeight: 600,
  },

  task: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px",
    border: "1px solid #1e293b",
    borderRadius: "8px",
    marginTop: "10px",
    background: "#020617",
  },
  completeBtn: {
    marginRight: "8px",
    background: "#22c55e",
    border: "none",
    borderRadius: "4px",
    color: "white",
    padding: "6px 10px",
    cursor: "pointer",
  },
  deleteBtn: {
    background: "#ef4444",
    border: "none",
    borderRadius: "4px",
    color: "white",
    padding: "6px 10px",
    cursor: "pointer",
  },
};

export default Dashboard;
