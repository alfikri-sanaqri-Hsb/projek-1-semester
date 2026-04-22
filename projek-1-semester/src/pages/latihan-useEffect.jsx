import { useState, useEffect } from "react";

export default function LatihanUseEffect() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [toast, setToast] = useState(null);

  // EFFECT 1: Monitor status online/offline
  useEffect(() => {
    const handleStatus = () => {
      setIsOnline(navigator.onLine);
      if (navigator.onLine) {
        setToast("Back Online");
        const timer = setTimeout(() => setToast(null), 3000);
        return () => clearTimeout(timer);
      }
    };

    window.addEventListener("online", handleStatus);
    window.addEventListener("offline", handleStatus);

    return () => {
      window.removeEventListener("online", handleStatus);
      window.removeEventListener("offline", handleStatus);
    };
  }, []);

  // EFFECT 2: Fetch data GitHub dengan AbortController
  useEffect(() => {
    if (!username) return;
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${username}`, {
          signal: controller.signal,
        });
        const data = await res.json();
        setUser(data);

        if (data.name) {
          document.title = `Viewing: ${data.name}`;
        }
      } catch (err) {
        if (err.name !== "AbortError") console.error(err);
      }
    };

    fetchData();

    return () => {
      controller.abort();
      document.title = "GitHub Finder";
    };
  }, [username]);

  return (
    <div style={{ padding: "20px", color: "white", backgroundColor: "#1e293b", minHeight: "100vh" }}>
      {/* Indikator koneksi */}
      <div
        style={{
          width: "100%",
          height: "8px",
          marginBottom: "10px",
          backgroundColor: isOnline ? "green" : "red",
          opacity: isOnline ? 0.5 : 1,
          transition: "all 0.3s",
        }}
      ></div>

      <h1>Latihan useEffect</h1>

      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Masukkan username GitHub..."
        style={{ padding: "8px", marginTop: "10px" }}
      />

      {user && (
        <div style={{ marginTop: "20px", backgroundColor: "#334155", padding: "15px", borderRadius: "8px" }}>
          <h2>{user.name || "No Name"}</h2>
          <p>{user.bio || "No Bio"}</p>
          <p>Followers: {user.followers}</p>
          <p>Following: {user.following}</p>
        </div>
      )}

      {toast && (
        <div style={{ marginTop: "20px", backgroundColor: "green", padding: "10px", borderRadius: "5px" }}>
          {toast}
        </div>
      )}
    </div>
  );
}
