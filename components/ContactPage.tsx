import React, { useState } from "react";
import { PortfolioVersion, ColorScheme } from "../types";
import { mono, sans } from "../lib/config";
import { useWidth } from "../lib/hooks";
import { IcoMail, IcoBrain, Dot, IcoGithub, IcoLinkedIn, IcoUpwork } from "./Icons";

interface ContactPageProps {
  version: PortfolioVersion;
  C: ColorScheme;
}

const SOCIALS = [
  { key: "github", label: "santoshkumar-in", href: "https://github.com/santoshkumar-in", Icon: IcoGithub },
  { key: "linkedin", label: "santoshkumar-in", href: "https://www.linkedin.com/in/santoshkumar-in/", Icon: IcoLinkedIn },
  { key: "upwork", label: "santoshkumar", href: "https://www.upwork.com/freelancers/santoshkumar", Icon: IcoUpwork },
];

export function ContactPage({ version, C }: ContactPageProps) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [focused, setFocused] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const w = useWidth();
  const isMobile = w < 768;
  const isTablet = w < 1080;

  const valid = {
    name: form.name.trim().length >= 2,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email),
    message: form.message.trim().length >= 10,
  };
  const allValid = valid.name && valid.email && valid.message;

  function handleSubmit() {
    setTouched({ name: true, email: true, message: true });
    if (!allValid || status !== "idle") return;
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1400);
  }

  function fieldStyle(f: string) {
    let border = `1px solid ${C.border}`;
    if (focused === f) border = `1px solid ${C.accent}`;
    else if (touched[f] && !valid[f as keyof typeof valid]) border = `1px solid ${C.red}`;
    else if (touched[f] && valid[f as keyof typeof valid]) border = `1px solid ${C.green}`;
    return {
      width: "100%",
      background: C.surface,
      color: C.textBright,
      ...mono,
      fontSize: "13px",
      padding: "10px 14px",
      borderRadius: "5px",
      border,
      boxShadow: focused === f ? `0 0 0 3px ${C.accentDim}` : "none",
      outline: "none",
      transition: "border-color 0.15s, box-shadow 0.15s",
      resize: "vertical" as const,
    };
  }

  function HDivider() {
    return <div style={{ height: "1px", background: C.border, flexShrink: 0 }} />;
  }

  const infoPanel = (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "14px" }}>
      <div style={{ background: C.elevated, border: `1px solid ${C.border}`, borderRadius: "8px", padding: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
          <div style={{ width: "40px", height: "40px", borderRadius: "8px", background: `linear-gradient(135deg, ${C.accent}, ${C.purple})`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            {version === "genai" ? <IcoBrain size={18} color={C.bg} /> : <span style={{ ...mono, fontSize: "13px", fontWeight: 700, color: C.bg }}>SK</span>}
          </div>
          <div>
            <div style={{ ...sans, fontSize: "14px", fontWeight: 500, color: C.textBright }}>Santosh Kumar</div>
            <div style={{ ...mono, fontSize: "11px", color: C.accent }}>
              {version === "genai" ? "Gen AI Engineer · Freelancer" : "Full-Stack Engineer · Freelancer"}
            </div>
          </div>
        </div>
        <HDivider />
        <div style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "7px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Dot color={version === "genai" ? C.accent : C.green} />
            <span style={{ ...mono, fontSize: "11px", color: C.textMid }}>
              {version === "genai" ? "Open to AI projects & senior roles" : "Open to freelance & senior roles"}
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "12px" }}>⏱</span>
            <span style={{ ...mono, fontSize: "11px", color: C.textMid }}>Responds within 24–48 hrs</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "12px" }}>🌍</span>
            <span style={{ ...mono, fontSize: "11px", color: C.textMid }}>Remote & hybrid welcome</span>
          </div>
        </div>
      </div>

      <div style={{ background: C.elevated, border: `1px solid ${C.border}`, borderRadius: "8px", padding: "14px" }}>
        <div style={{ ...mono, fontSize: "10px", color: C.textDim, marginBottom: "10px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Find me on</div>
        {SOCIALS.map(s => (
          <a key={s.key} href={s.href} target="_blank" rel="noreferrer" className="lhover"
            style={{ display: "flex", alignItems: "center", gap: "8px", padding: "7px 4px", borderRadius: "4px", ...mono, fontSize: "12px", color: C.textMid }}>
            <s.Icon size={14} color={C.textMid} />
            {s.key}/{s.label}
          </a>
        ))}
      </div>

      <div style={{ background: C.elevated, border: `1px solid ${C.border}`, borderRadius: "8px", padding: "14px" }}>
        <div style={{ ...mono, fontSize: "10px", color: C.textDim, marginBottom: "10px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
          {version === "genai" ? "AI Stack" : "Core Stack"}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
          {(version === "genai"
            ? ["Claude API", "OpenAI", "LangChain", "RAG", "Python", "Vector DB"]
            : ["Node.js", "PHP", "React", "Vue.js", "TypeScript", "AWS", "Docker", "MongoDB", "Laravel"]
          ).map(s => (
            <span key={s} style={{ display: "inline-flex", alignItems: "center", padding: "2px 8px", borderRadius: "4px", fontSize: "11px", ...mono, color: C.accent, background: C.accent + "15", border: `1px solid ${C.accent}35`, whiteSpace: "nowrap" }}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const formEl = (
    <div style={{ padding: isMobile ? "20px" : "32px 40px", maxWidth: "580px" }}>
      <h2 style={{ ...sans, fontSize: "22px", fontWeight: 400, color: C.textBright, marginBottom: "4px" }}>
        {version === "genai" ? "Let's build AI together" : "Get in touch"}
      </h2>
      <p style={{ ...mono, fontSize: "12px", color: C.synComment, marginBottom: "28px" }}>
        {version === "genai"
          ? "// Freelance AI projects · Gen AI consulting · Senior roles"
          : "// Freelance contracts, consulting, or senior engineering roles."}
      </p>
      {status === "sent" ? (
        <div style={{ background: C.accentDim, border: `1px solid ${C.accent}40`, borderRadius: "8px", padding: "28px", textAlign: "center" }}>
          <div style={{ fontSize: "24px", marginBottom: "8px" }}>✓</div>
          <div style={{ ...sans, fontSize: "16px", fontWeight: 500, color: C.textBright, marginBottom: "4px" }}>Message sent!</div>
          <div style={{ ...mono, fontSize: "12px", color: C.textMid, marginBottom: "16px" }}>I'll respond within 24–48 hours.</div>
          <button
            onClick={() => {
              setForm({ name: "", email: "", message: "" });
              setTouched({});
              setStatus("idle");
            }}
            className="cursor"
            style={{ ...mono, fontSize: "12px", color: C.accent, background: "none", border: `1px solid ${C.borderMd}`, borderRadius: "5px", padding: "7px 16px", cursor: "pointer" }}>
            Send another
          </button>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          {[
            { key: "name", type: "text", label: "Name", ph: "Your name" },
            { key: "email", type: "email", label: "Email", ph: "you@company.com" },
          ].map(f => (
            <div key={f.key}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                <label style={{ ...mono, fontSize: "12px", color: C.textMid }}>{f.label}</label>
                {touched[f.key] && !valid[f.key as keyof typeof valid] && <span style={{ ...mono, fontSize: "10px", color: C.red }}>Required</span>}
                {touched[f.key] && valid[f.key as keyof typeof valid] && <span style={{ ...mono, fontSize: "10px", color: C.green }}>✓</span>}
              </div>
              <input
                type={f.type}
                placeholder={f.ph}
                value={form[f.key as keyof typeof form]}
                onChange={e => {
                  const v = e.target.value;
                  setForm(p => ({ ...p, [f.key]: v }));
                }}
                onFocus={() => setFocused(f.key)}
                onBlur={() => {
                  setFocused(null);
                  setTouched(t => ({ ...t, [f.key]: true }));
                }}
                style={fieldStyle(f.key)}
              />
            </div>
          ))}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
              <label style={{ ...mono, fontSize: "12px", color: C.textMid }}>Message</label>
              {touched.message && !valid.message && <span style={{ ...mono, fontSize: "10px", color: C.red }}>Min 10 chars</span>}
              {touched.message && valid.message && <span style={{ ...mono, fontSize: "10px", color: C.green }}>✓</span>}
            </div>
            <textarea
              rows={5}
              placeholder={version === "genai" ? "Tell me about your AI project..." : "Tell me about your project or role."}
              value={form.message}
              onChange={e => {
                const v = e.target.value;
                setForm(p => ({ ...p, message: v }));
              }}
              onFocus={() => setFocused("message")}
              onBlur={() => {
                setFocused(null);
                setTouched(t => ({ ...t, message: true }));
              }}
              style={fieldStyle("message")}
            />
          </div>
          <button
            onClick={handleSubmit}
            disabled={status === "sending"}
            className={allValid ? "cursor" : ""}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "11px", borderRadius: "6px", cursor: allValid ? "pointer" : "default", background: allValid ? C.accent : C.elevated, color: allValid ? C.bg : C.textDim, border: `1px solid ${allValid ? C.accent : C.border}`, ...mono, fontSize: "13px", fontWeight: 500, opacity: status === "sending" ? 0.6 : 1, transition: "all 0.15s" }}>
            <IcoMail size={15} color={allValid ? C.bg : C.textDim} />
            {status === "sending" ? "Sending..." : "Send message"}
          </button>
        </div>
      )}
    </div>
  );

  if (isMobile) {
    return (
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", background: C.panel }}>
        <div style={{ display: "flex", alignItems: "center", height: "38px", minHeight: "38px", background: C.sidebar, borderBottom: `1px solid ${C.border}`, overflowX: "auto", flexShrink: 0 }}>
          <button className="thover" style={{ display: "flex", alignItems: "center", gap: "6px", height: "100%", padding: "0 14px", ...mono, fontSize: "12px", color: C.textBright, background: C.panel, borderRight: `1px solid ${C.border}`, borderBottom: `2px solid ${C.accent}`, cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0, transition: "all 0.15s" }}>
            <IcoMail size={13} color={C.accent} />
            <span>contact.tsx</span>
          </button>
        </div>
        <div style={{ flex: 1, overflowY: "auto" }}>
          {formEl}
          <div style={{ borderTop: `1px solid ${C.border}` }}>{infoPanel}</div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", background: C.panel }}>
        <div style={{ display: "flex", alignItems: "center", height: "38px", minHeight: "38px", background: C.sidebar, borderBottom: `1px solid ${C.border}`, overflowX: "auto", flexShrink: 0 }}>
          <button className="thover" style={{ display: "flex", alignItems: "center", gap: "6px", height: "100%", padding: "0 14px", ...mono, fontSize: "12px", color: C.textBright, background: C.panel, borderRight: `1px solid ${C.border}`, borderBottom: `2px solid ${C.accent}`, cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0, transition: "all 0.15s" }}>
            <IcoMail size={13} color={C.accent} />
            <span>contact.tsx</span>
          </button>
        </div>
        <div style={{ flex: 1, overflowY: "auto" }}>{formEl}</div>
      </div>
      {!isTablet && (
        <>
          <div style={{ width: "1px", background: C.border, flexShrink: 0 }} />
          <div style={{ width: "300px", flexShrink: 0, background: C.panel, overflowY: "auto", display: "flex", flexDirection: "column" }}>
            <div style={{ height: "38px", minHeight: "38px", display: "flex", alignItems: "center", padding: "0 14px", background: C.sidebar, borderBottom: `1px solid ${C.border}` }}>
              <span style={{ ...mono, fontSize: "11px", color: C.textDim }}>contact_info.json</span>
            </div>
            {infoPanel}
          </div>
        </>
      )}
    </div>
  );
}
