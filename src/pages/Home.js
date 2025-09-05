// src/pages/Home.js
import { Link } from "react-router-dom";
import monasteries from "../data/monasteries";

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Monastery360</h1>
      <p>Pick a monastery to explore in 360°.</p>

      <div
        style={{
          display: "grid",
          gap: 16,
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          marginTop: 16,
        }}
      >
        {monasteries.map((m) => (
          <Link
            key={m.id}
            to={`/tour/${m.id}`}
            style={{
              display: "block",
              textDecoration: "none",
              color: "inherit",
              border: "1px solid #eee",   // ✅ fixed here
              borderRadius: 12,
              padding: 12,
            }}
          >
            <img
              src={m.thumbnail || "/favicon.ico"}
              alt={m.name}
              style={{
                width: "100%",
                height: 140,
                objectFit: "cover",
                borderRadius: 8,
              }}
            />
            <h3 style={{ marginTop: 10 }}>{m.name}</h3>
            <p style={{ fontSize: 14, opacity: 0.7 }}>View details →</p>
          </Link>
        ))}
      </div>
    </div>
  );
}