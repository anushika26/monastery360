import React, { useState, useRef, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import monasteries from "../data/monasteries";

export default function Tour() {
  const { id } = useParams();
  const monastery = monasteries.find((m) => m.id === id);
  const [lang, setLang] = useState("en");
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
    }
  }, [lang]);

  if (!monastery) return <h2>Monastery not found</h2>;

  return (
    <div style={{ padding: 20 }}>
      <Link to="/" style={{ marginBottom: 20, display: "inline-block" }}>
        ← Back
      </Link>

      <h2>{monastery.name}</h2>

      {/* 360° / Map Embed */}
      <div style={{ margin: "20px 0" }}>
        <iframe
          src={monastery.embedUrl}
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title={monastery.name}
        ></iframe>
      </div>

      {/* Narration */}
      <div style={{ margin: "20px 0" }}>
        <strong>
          Narration (
          {lang === "en" ? "English" : lang === "hi" ? "Hindi" : "Nepali"})
        </strong>
        <audio
          key={monastery.narrations[lang]}
          ref={audioRef}
          controls
          src={monastery.narrations[lang]}
          style={{ display: "block", marginTop: 10, width: "100%" }}
        >
          Your browser does not support audio playback.
        </audio>

        {/* 👇 THIS WAS MISSING A PROPER CLOSING TAG */}
        <div style={{ marginTop: 10 }}>
          <button onClick={() => setLang("en")}>English</button>
          <button onClick={() => setLang("hi")} style={{ marginLeft: 8 }}>
            Hindi
          </button>
          <button onClick={() => setLang("ne")} style={{ marginLeft: 8 }}>
            Nepali
          </button>
        </div>
      </div>

      {/* Info Panels */}
      <div style={{ marginTop: 20 }}>
        {monastery.infoPanels.map((panel, i) => (
          <div
            key={i}
            style={{
              marginBottom: 15,
              padding: 12,
              border: "1px solid #ddd",
              borderRadius: 8,
              background: "#fafafa",
            }}
          >
            <h3>{panel.title}</h3>
            <p>{panel.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}