// src/App.jsx
import React, { useEffect, useState } from "react";
import { getPublishedTours, submitLead } from "./firebase";

export default function App(){
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ email:"", name:"", message:"", tourId:"" });
  const [status, setStatus] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const data = await getPublishedTours();
        setTours(data);
      } catch(e) {
        console.error(e);
        setTours([]);
      }
      setLoading(false);
    })();
  }, []);

  async function handleSubmit(e){
    e.preventDefault();
    setStatus("sending");
    try {
      await submitLead(form);
      setStatus("sent");
      setForm({ email:"", name:"", message:"", tourId:"" });
    } catch(err){
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <div style={{fontFamily:"Inter, system-ui, Arial", padding:20, maxWidth:1000, margin:"0 auto"}}>
      <header style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <h1 style={{margin:0}}>Monastery360</h1>
        <a href="mailto:you@yourdomain.com" style={{padding:"8px 14px",borderRadius:8,textDecoration:"none",border:"2px solid #111"}}>Request demo</a>
      </header>

      <main style={{marginTop:24}}>
        <h2>Immersive tours</h2>
        {loading && <p>Loading tours…</p>}
        {!loading && tours.length===0 && <div style={{padding:12,border:"1px dashed #ccc"}}>No tours found. Check Firestore.</div>}

        <div style={{display:"grid",gap:16}}>
          {tours.map(t => (
            <div key={t.id} style={{padding:12,border:"1px solid #eee",borderRadius:8}}>
              <h3 style={{margin:"0 0 8px"}}>{t.title}</h3>
              <p style={{margin:"0 0 8px"}}>{t.description}</p>
              <div style={{width:"100%",height:360,borderRadius:8,overflow:"hidden"}}>
                {t.viewerUrl.endsWith(".jpg") || t.viewerUrl.endsWith(".png") ? (
                  <img src={t.viewerUrl} alt={t.title} style={{width:"100%",height:"100%",objectFit:"cover"}} />
                ) : (
                  <iframe src={t.viewerUrl} title={t.title} style={{width:"100%",height:"100%",border:0}} allowFullScreen />
                )}
              </div>
            </div>
          ))}
        </div>

        <section style={{marginTop:26}}>
          <h3>Request a demo / Contact</h3>
          <form onSubmit={handleSubmit} style={{display:"grid",gap:8,maxWidth:520}}>
            <input required placeholder="Your email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/>
            <input placeholder="Name (optional)" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
            <textarea placeholder="Message" value={form.message} onChange={e=>setForm({...form,message:e.target.value})}/>
            <select value={form.tourId} onChange={e=>setForm({...form,tourId:e.target.value})}>
              <option value="">Interested in (choose a tour)</option>
              {tours.map(t => <option key={t.id} value={t.id}>{t.title}</option>)}
            </select>
            <button type="submit">{status==="sending" ? "Sending..." : "Send"}</button>
            {status==="sent" && <p style={{color:"green"}}>Thanks — we got your request!</p>}
            {status==="error" && <p style={{color:"red"}}>Error, please try again.</p>}
          </form>
        </section>
      </main>
    </div>
  );
}