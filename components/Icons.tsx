import React from "react";

interface SvgIconProps {
  size: number;
  stroke?: string;
  fill?: string;
  sw?: number;
  children: React.ReactNode;
}

function SvgIcon({ size, stroke, fill, sw, children }: SvgIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill || "none"} stroke={stroke} strokeWidth={sw || 1.5} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, display: "block" }}>
      {children}
    </svg>
  );
}

export function IcoBrain({ size = 18, color }: { size?: number; color: string }) {
  return <SvgIcon size={size} stroke={color}><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></SvgIcon>;
}

export function IcoGithub({ size = 15, color }: { size?: number; color: string }) {
  return <SvgIcon size={size} stroke={color}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></SvgIcon>;
}

export function IcoLinkedIn({ size = 15, color }: { size?: number; color: string }) {
  return <SvgIcon size={size} stroke={color}><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><path d="M2 9h4v12H2z"/><path d="M4 6a2 2 0 100-4 2 2 0 000 4z"/></SvgIcon>;
}

export function IcoUpwork({ size = 15, color }: { size?: number; color: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, display: "block" }}><path d="M18.5 7c-2.3 0-4.1 1.5-4.8 3.6l-1.3-6.1H10v8.3c0 1.5-1.2 2.7-2.7 2.7S4.6 14.3 4.6 12.8V4.5H2v8.3C2 15.7 4.3 18 7.3 18s5.3-2.3 5.3-5.2v-1.4c.6 2.1 2.5 3.6 4.9 3.6 2.8 0 5-2.3 5-5.2C22.5 9.3 20.7 7 18.5 7zm0 8c-1.5 0-2.7-1.3-2.7-2.8 0-1.5 1.2-2.8 2.7-2.8s2.7 1.3 2.7 2.8C21.2 14.7 20 16 18.5 16z" fill={color}/></svg>;
}

export function IcoFile({ size = 14, color }: { size?: number; color: string }) {
  return <SvgIcon size={size} stroke={color}><path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"/><path d="M13 2v7h7"/></SvgIcon>;
}

export function IcoMail({ size = 15, color }: { size?: number; color: string }) {
  return <SvgIcon size={size} stroke={color}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></SvgIcon>;
}

export function IcoHome({ size = 18, color }: { size?: number; color: string }) {
  return <SvgIcon size={size} stroke={color}><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path d="M9 22V12h6v10"/></SvgIcon>;
}

export function IcoUser({ size = 18, color }: { size?: number; color: string }) {
  return <SvgIcon size={size} stroke={color}><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><path d="M12 3a4 4 0 100 8 4 4 0 000-8z"/></SvgIcon>;
}

export function IcoBriefcase({ size = 18, color }: { size?: number; color: string }) {
  return <SvgIcon size={size} stroke={color}><path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></SvgIcon>;
}

export function IcoSwap({ size = 16, color }: { size?: number; color: string }) {
  return <SvgIcon size={size} stroke={color}><path d="M16 3l4 4-4 4M20 7H4M8 21l-4-4 4-4M4 17h16"/></SvgIcon>;
}

export function IcoClose({ size = 10, color }: { size?: number; color: string }) {
  return <SvgIcon size={size} stroke={color}><path d="M18 6L6 18"/><path d="M6 6l12 12"/></SvgIcon>;
}

export function Dot({ color }: { color: string }) {
  return <span style={{ display: "inline-block", width: "7px", height: "7px", borderRadius: "50%", background: color, boxShadow: `0 0 5px ${color}80`, flexShrink: 0 }} />;
}
