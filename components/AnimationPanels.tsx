import React, { useRef, useEffect, useState } from "react";
import { ColorScheme } from "../types";
import { mono, sans } from "../lib/config";
import { Dot } from "./Icons";

interface AINetworkPanelProps {
  C: ColorScheme;
}

export function AINetworkPanel({ C }: AINetworkPanelProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeTab, setActiveTab] = useState("neural");

  useEffect(() => {
    if (activeTab !== "neural") return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const nodes: any[] = [];
    const numNodes = 40;
    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(167, 139, 250, 0.8)";
        ctx.shadowBlur = 0;
        ctx.shadowColor = "transparent";
        ctx.fill();
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(167, 139, 250, ${0.5 * (1 - dist / 120)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animate);
    }
    animate();
  }, [activeTab]);

  const tabs = [{ id: "neural", label: "neural_net" }, { id: "models", label: "llm_stack" }, { id: "apis", label: "apis" }];

  return (
    <div className="fade-r" style={{ width: "100%", height: "100%", maxHeight: "600px", display: "flex", flexDirection: "column", background: C.surface, border: `1px solid ${C.border}`, borderRadius: "10px", overflow: "hidden" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", background: C.elevated, borderBottom: `1px solid ${C.border}`, flexShrink: 0 }}>
        <div style={{ display: "flex", gap: "7px" }}>
          {[C.red, C.orange, C.green].map((color, i) => (
            <span key={i} style={{ width: "11px", height: "11px", borderRadius: "50%", background: color, display: "block" }} />
          ))}
        </div>
        <div style={{ display: "flex", gap: "2px" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)} className="cursor" style={{ ...mono, fontSize: "10px", padding: "3px 10px", borderRadius: "4px", cursor: "pointer", color: activeTab === t.id ? C.textBright : C.textDim, background: activeTab === t.id ? C.border : "transparent", border: "none", transition: "all 0.12s" }}>
              {t.label}
            </button>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <Dot color={C.accent} />
          <span style={{ ...mono, fontSize: "10px", color: C.textDim }}>active</span>
        </div>
      </div>

      <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>
        {activeTab === "neural" && (
          <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block", background: C.panel }} />
        )}

        {activeTab === "models" && (
          <div style={{ padding: "14px", overflowY: "auto", height: "100%" }}>
            <div style={{ ...mono, fontSize: "10px", color: C.textDim, marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.08em" }}>LLM & AI Stack</div>
            {[
              { label: "claude-sonnet-4", status: "primary", color: C.accent },
              { label: "gpt-4-turbo", status: "active", color: C.green },
              { label: "anthropic-sdk", status: "integrated", color: C.accent },
              { label: "openai-api", status: "integrated", color: C.green },
              { label: "langchain", status: "active", color: C.purple },
              { label: "vector-db", status: "pinecone", color: C.orange },
            ].map((m, i) => (
              <div key={m.label} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", borderBottom: `1px solid ${C.border}`, animation: `fadeIn 0.3s ease ${i * 0.06}s both` }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: m.color, flexShrink: 0, animation: "pulse 2s ease-in-out infinite" }} />
                <span style={{ ...mono, fontSize: "11px", color: C.text, flex: 1 }}>{m.label}</span>
                <span style={{ ...mono, fontSize: "9px", color: m.color, background: m.color + "15", padding: "2px 7px", borderRadius: "3px" }}>{m.status}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === "apis" && (
          <div style={{ padding: "14px", overflowY: "auto", height: "100%" }}>
            <div style={{ ...mono, fontSize: "10px", color: C.textDim, marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.08em" }}>API Endpoints · RAG Systems</div>
            {[
              { method: "POST", endpoint: "/api/chat/stream", desc: "Claude streaming chat" },
              { method: "POST", endpoint: "/api/embeddings", desc: "Vector embeddings" },
              { method: "GET", endpoint: "/api/search/semantic", desc: "RAG similarity search" },
              { method: "POST", endpoint: "/api/completions", desc: "GPT-4 completions" },
            ].map((api, i) => (
              <div key={api.endpoint} style={{ padding: "10px 0", borderBottom: `1px solid ${C.border}`, animation: `fadeIn 0.3s ease ${i * 0.08}s both` }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "3px" }}>
                  <span style={{ ...mono, fontSize: "9px", color: api.method === "GET" ? C.green : C.accent, background: (api.method === "GET" ? C.green : C.accent) + "15", padding: "2px 6px", borderRadius: "3px", fontWeight: 600 }}>{api.method}</span>
                  <span style={{ ...mono, fontSize: "11px", color: C.synStr }}>{api.endpoint}</span>
                </div>
                <div style={{ ...sans, fontSize: "10px", color: C.textDim, paddingLeft: "46px" }}>{api.desc}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

interface TerminalPanelProps {
  C: ColorScheme;
}

export function TerminalPanel({ C }: TerminalPanelProps) {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const TERMINAL_LINES = [
    { delay: 0, text: "$ node --version", color: C.textMid },
    { delay: 400, text: "v20.11.0", color: C.green },
    { delay: 900, text: "$ aws ecs list-services --cluster prod", color: C.textMid },
    { delay: 1400, text: "✔  api-gateway        RUNNING  (3/3 tasks)", color: C.green },
    { delay: 1600, text: "✔  worker-queue       RUNNING  (2/2 tasks)", color: C.green },
    { delay: 1800, text: "✔  websocket-hub      RUNNING  (4/4 tasks)", color: C.green },
    { delay: 2400, text: "$ git log --oneline -3", color: C.textMid },
    { delay: 2900, text: "a3f92c1 feat: WebSocket clustering", color: C.synStr },
    { delay: 3100, text: "b7e14d8 perf: MongoDB aggregation 3x", color: C.synStr },
    { delay: 3300, text: "c9a03f2 chore: Lambda ARM64 migration", color: C.synStr },
    { delay: 3900, text: "$ whoami", color: C.textMid },
    { delay: 4300, text: "santosh · full-stack · freelancer · builder", color: C.accent },
  ];

  useEffect(() => {
    setVisibleLines([]);
    const timers = TERMINAL_LINES.map((line, i) =>
      setTimeout(() => {
        setVisibleLines(prev => [...prev, i]);
        if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }, line.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="fade-r" style={{ width: "100%", height: "100%", maxHeight: "600px", display: "flex", flexDirection: "column", background: C.surface, border: `1px solid ${C.border}`, borderRadius: "10px", overflow: "hidden" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", background: C.elevated, borderBottom: `1px solid ${C.border}`, flexShrink: 0 }}>
        <div style={{ display: "flex", gap: "7px" }}>
          {[C.red, C.orange, C.green].map((color, i) => (
            <span key={i} style={{ width: "11px", height: "11px", borderRadius: "50%", background: color, display: "block" }} />
          ))}
        </div>
        <div style={{ ...mono, fontSize: "10px", color: C.textDim }}>terminal</div>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <Dot color={C.green} />
          <span style={{ ...mono, fontSize: "10px", color: C.textDim }}>online</span>
        </div>
      </div>
      <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "14px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
          {TERMINAL_LINES.map((line, i) =>
            visibleLines.includes(i) ? (
              <div key={i} style={{ ...mono, fontSize: "11.5px", color: line.color, lineHeight: "1.8", animation: "fadeIn 0.3s ease both" }}>
                {line.text}
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}
