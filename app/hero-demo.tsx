"use client";

import { useState } from "react";

const results = [
  { label: "Decision", text: "Publish the landing page first.", detail: "Agreed in the notes", mark: "01" },
  { label: "Action", text: "Finish mobile navigation.", detail: "Maya · Friday", mark: "02" },
  { label: "Open question", text: "When should the blog launch?", detail: "No owner or date agreed", mark: "03" },
];

export default function HeroDemo() {
  const [active, setActive] = useState(0);
  return <div className="transform-demo" aria-label="Interactive example of notes becoming a plan">
    <div className="demo-topline"><span>THE TRANSFORMATION / 001</span><span>EXAMPLE, NOT LIVE AI</span></div>
    <div className="demo-source"><span className="demo-label">THE ROUGH NOTES</span><p>“Let’s <mark data-active={active === 0}>publish the landing page first</mark>. <mark data-active={active === 1}>Maya can finish navigation by Friday</mark>. We still need <mark data-active={active === 2}>a decision on the blog</mark>.”</p></div>
    <div className="demo-arrow" aria-hidden="true">↓ <span>MAKE THE WORK VISIBLE</span></div>
    <div className="demo-result"><div className="demo-tabs" aria-label="Explore structured output">{results.map((item, index) => <button type="button" key={item.mark} aria-pressed={active === index} onClick={() => setActive(index)}><span>{item.mark}</span>{item.label}</button>)}</div><div className="demo-result-body" key={active} aria-live="polite"><span>{results[active].label.toUpperCase()}</span><strong>{results[active].text}</strong><p>{results[active].detail}</p></div></div>
    <p className="demo-disclaimer">A hand-written example of the output format. Your own notes are processed in the workspace, where you review every draft.</p>
  </div>;
}
