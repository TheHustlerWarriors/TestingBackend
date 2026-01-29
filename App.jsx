import { useState } from "react";

function App() {
  const [msg, setMsg] = useState("Click the button to call backend");

  const callBackend = async () => {
    try {
      const res = await fetch("/api/message");
      const data = await res.json();
      setMsg(`${data.message} — ${data.time}`);
    } catch (err) {
      setMsg("Backend not reachable ❌");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        background: "#111",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <h1>React + Node Demo (Single URL)</h1>

      <button
        onClick={callBackend}
        style={{
          padding: "12px 24px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "6px",
          border: "none"
        }}
      >
        Call Backend
      </button>

      <p style={{ marginTop: 20, color: "#00ffcc" }}>{msg}</p>
    </div>
  );
}

export default App;
