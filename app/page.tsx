import Link from "next/link";
import HeroDemo from "./hero-demo";

export default function Home() {
  return <main className="minutes magazine-home">
    <header className="site-nav">
      <Link className="brand" href="/" aria-label="Minute to Action home"><span className="brand-icon">m/</span><span>Minute to Action</span></Link>
      <nav aria-label="Main"><a href="#method">How it works</a><a href="#principles">The thinking</a><Link className="button dark" href="/workspace">Open the workspace <span aria-hidden="true">↗</span></Link></nav>
    </header>

    <section className="editorial-hero" aria-labelledby="hero-title">
      <div className="editorial-copy">
        <p className="eyebrow"><span className="edition-dot" /> THE WORK STARTS AFTER THE MEETING</p>
        <h1 id="hero-title">Talk is<br />the beginning.<br /><em>Action is</em><br />the point<span className="hero-period">.</span></h1>
        <div className="hero-bottom"><p>Turn messy meeting notes into clear decisions, named actions and open questions. Then keep the work moving in one journal.</p><div><Link className="button accent" href="/workspace">Turn notes into action <span aria-hidden="true">↗</span></Link><span>Use your own notes · Review every draft</span></div></div>
      </div>
      <HeroDemo />
      <span className="hero-side-note" aria-hidden="true">AN IDEA IS ONLY AS GOOD AS ITS NEXT STEP. / 2026</span>
    </section>

    <div className="editorial-strip" aria-label="From notes to action"><span>01 / CAPTURE THE MESS</span><span aria-hidden="true">→</span><span>02 / FIND THE SIGNAL</span><span aria-hidden="true">→</span><span>03 / MOVE THE WORK</span></div>

    <section className="editorial-method" id="method"><div className="method-heading"><p className="eyebrow">THE METHOD / NOT ANOTHER MEETING BOT</p><h2>Less <em>“what did we decide?”</em><br />More “here’s what’s next.”</h2><p>No recording, calendar access or automatic sending. You bring the notes; the product helps make them useful.</p></div><div className="method-list"><div><span>01</span><h3>Bring the rough notes.</h3><p>Paste the scraps, shorthand and half-finished thoughts from a real conversation.</p></div><div><span>02</span><h3>Make the meaning explicit.</h3><p>Review editable decisions, actions, owners, dates and questions. Missing details stay missing.</p></div><div><span>03</span><h3>Give the work a home.</h3><p>Save the meeting, move tasks across statuses and export a useful handoff.</p></div></div></section>

    <section className="principles" id="principles"><div className="principles-number">M/02</div><div><p className="eyebrow">A BETTER KIND OF CLARITY</p><h2>It should feel like a<br /><em>well-kept notebook.</em><br />Not another inbox.</h2></div><div className="principles-foot"><p>Meetings live in a dated journal. Actions have their own cross-meeting board. You can return to the context or move straight to the work.</p><Link href="/workspace">Explore the working journal <span aria-hidden="true">↗</span></Link></div></section>

    <section className="editorial-details"><div><span className="detail-index">A /</span><h3>Drafts you can change.</h3><p>AI makes a first pass. Every decision and action remains editable before you save.</p></div><div><span className="detail-index">B /</span><h3>Loose ends stay visible.</h3><p>Unknown owners and dates stay unassigned. Open questions are not quietly turned into facts.</p></div><div><span className="detail-index">C /</span><h3>Your work leaves with you.</h3><p>Export a Markdown handoff or CSV action list. Guest work lasts up to 30 days in this browser.</p></div></section>

    <footer className="editorial-footer"><div className="footer-call"><p className="eyebrow">READY TO MAKE THE NEXT STEP VISIBLE?</p><Link href="/workspace">Let’s get<br /><em>to work.</em><span aria-hidden="true">↗</span></Link></div><div className="footer-meta"><Link className="brand" href="/"><span className="brand-icon">m/</span>Minute to Action</Link><p>A working journal by Noel Perland.<br />Use fictional or non-sensitive notes in this public demo.</p><div><a href="#method">The method ↗</a><Link href="/workspace">Open workspace ↗</Link><a href="https://github.com/NoelPerland/minute-to-action" target="_blank" rel="noreferrer">Source & engineering notes ↗</a></div></div></footer>
  </main>;
}
