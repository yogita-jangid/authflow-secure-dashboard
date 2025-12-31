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

  useEffect(() => {
    fetchProfile();
    fetchTasks();
  }, []);

  const fetchProfile = async () => {
    const res = await api.get("/profile/me");
    setEmail(res.data.email);
  };

  const fetchTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  const createTask = async () => {
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

  return (
    <div>
      <h1 style={styles.title}>Dashboard</h1>
      <p style={styles.subtitle}>Logged in as: {email}</p>

      {/* Stats */}
      <div style={styles.cards}>
        <StatCard label="Total Tasks" value={total} />
        <StatCard label="Completed" value={completed} />
        <StatCard label="Pending" value={pending} />
      </div>

      {/* Create Task */}
      <div style={styles.createTask}>
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={styles.input}
        />
        <button onClick={createTask} style={styles.addBtn}>
          Add
        </button>
      </div>

      {/* Task List */}
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
  title: {
    fontSize: "28px",
    color: "#e5e7eb",
  },
  subtitle: {
    color: "#9ca3af",
    marginBottom: "24px",
  },
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "16px",
  },
  card: {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "8px",
    padding: "20px",
  },
  cardLabel: {
    color: "#9ca3af",
    fontSize: "14px",
  },
  cardValue: {
    color: "#38bdf8",
    fontSize: "32px",
    marginTop: "8px",
  },
  createTask: {
    display: "flex",
    gap: "10px",
    marginTop: "32px",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #1e293b",
    background: "#020617",
    color: "#e5e7eb",
  },
  addBtn: {
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "6px",
    padding: "10px 16px",
    cursor: "pointer",
  },
  task: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px",
    border: "1px solid #1e293b",
    borderRadius: "6px",
    marginTop: "10px",
    background: "#020617",
  },
  completeBtn: {
    marginRight: "8px",
    background: "#22c55e",
    border: "none",
    borderRadius: "4px",
    color: "white",
    padding: "4px 8px",
    cursor: "pointer",
  },
  deleteBtn: {
    background: "#ef4444",
    border: "none",
    borderRadius: "4px",
    color: "white",
    padding: "4px 8px",
    cursor: "pointer",
  },
};

export default Dashboard;
