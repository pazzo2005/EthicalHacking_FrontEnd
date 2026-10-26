import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <header className="home-header">
        <nav className="home-nav" aria-label="Main navigation">
          <a className="home-brand" href="#home" aria-label="CyberLab home">
            <span className="home-brand-icon" aria-hidden="true">⌘</span>
            <span>CyberLab<span className="home-brand-dot">.</span></span>
          </a>
          <span className="home-nav-note"><span className="home-live-dot" /> Local practice environment</span>
        </nav>
      </header>

      <main>
        <section className="home-hero" id="home" aria-labelledby="home-title">
          <div className="home-hero-inner">
            <div className="home-hero-copy">
              <p className="home-eyebrow"><span className="home-eyebrow-mark" /> ETHICAL HACKING PRACTICE PLATFORM</p>
              <h1 id="home-title">CyberLab</h1>
              <p className="home-lead">Practice ethical hacking in a safe, controlled environment.</p>
              <div className="home-actions">
                <button className="home-button home-button-primary" onClick={() => navigate("/login")}>
                  Login <span aria-hidden="true">↗</span>
                </button>
                <button className="home-button home-button-secondary" onClick={() => navigate("/dashboard")}>
                  Dashboard <span aria-hidden="true">→</span>
                </button>
              </div>
              <div className="home-trust-note"><span className="home-check" aria-hidden="true">✓</span> Built for responsible, hands-on learning</div>
            </div>

            <div className="home-visual" aria-label="Decorative terminal preview" role="img">
              <div className="terminal-window">
                <div className="terminal-titlebar">
                  <div className="terminal-controls" aria-hidden="true"><i /><i /><i /></div>
                  <span>cyberlab <span className="terminal-path">/ practice-session</span></span>
                  <span className="terminal-lock" aria-hidden="true">◇</span>
                </div>
                <div className="terminal-content" aria-hidden="true">
                  <p><span className="terminal-prompt">$</span> environment status</p>
                  <p className="terminal-response"><span className="terminal-ok">●</span> isolated lab ready</p>
                  <p><span className="terminal-prompt">$</span> available modules</p>
                  <p className="terminal-response">01&nbsp; password security</p>
                  <p className="terminal-response">02&nbsp; authentication testing</p>
                  <p className="terminal-response terminal-dim">03&nbsp; more labs in progress</p>
                  <p className="terminal-last"><span className="terminal-prompt">$</span> <span className="terminal-cursor" /></p>
                </div>
                <div className="terminal-footer"><span><span className="terminal-ok">●</span> SESSION LOCAL</span><span>SAFE MODE</span></div>
              </div>
              <div className="visual-orbit visual-orbit-one" />
              <div className="visual-orbit visual-orbit-two" />
              <span className="visual-cross visual-cross-one" aria-hidden="true">＋</span>
              <span className="visual-cross visual-cross-two" aria-hidden="true">＋</span>
            </div>
          </div>
          <div className="home-scroll-cue"><span /> Hands-on learning, at your pace</div>
        </section>

        <section className="home-section home-features" aria-labelledby="features-title">
          <div className="home-section-heading">
            <div><p className="home-eyebrow">PRACTICE WITH PURPOSE</p><h2 id="features-title">Explore the lab</h2></div>
            <p>Build practical security skills with focused, guided modules.</p>
          </div>
          <div className="feature-grid">
            <article className="feature-card">
              <div className="feature-card-top"><span className="feature-icon" aria-hidden="true">⌘</span><span className="feature-level">Beginner</span></div>
              <h3>Brute Force Simulation</h3>
              <p>Understand password guessing through a controlled local simulation.</p>
              <span className="feature-index">MODULE 01</span>
            </article>
            <article className="feature-card">
              <div className="feature-card-top"><span className="feature-icon" aria-hidden="true">◈</span><span className="feature-level">Beginner</span></div>
              <h3>Password Security</h3>
              <p>Analyze password strength, hashing, and secure storage.</p>
              <span className="feature-index">MODULE 02</span>
            </article>
            <article className="feature-card feature-card-coming">
              <div className="feature-card-top"><span className="feature-icon" aria-hidden="true">⌁</span><span className="feature-level feature-level-intermediate">Intermediate</span></div>
              <h3>Authentication Testing</h3>
              <p>Explore login validation and authentication defenses.</p>
              <span className="feature-index">COMING SOON</span>
            </article>
          </div>
        </section>

        <section className="home-section home-process" aria-labelledby="process-title">
          <div className="home-section-heading">
            <div><p className="home-eyebrow">A CLEAR PATH FORWARD</p><h2 id="process-title">Learn by doing</h2></div>
            <p>Move from understanding concepts to practicing them in your own lab.</p>
          </div>
          <div className="process-grid">
            <article className="process-step"><span className="process-number">01</span><div><h3>Learn</h3><p>Start with the core ideas behind each security topic.</p></div></article>
            <article className="process-step"><span className="process-number">02</span><div><h3>Practice</h3><p>Work through hands-on exercises in a controlled environment.</p></div></article>
            <article className="process-step"><span className="process-number">03</span><div><h3>Track progress</h3><p>Build consistency as you explore more learning modules.</p></div></article>
          </div>
        </section>

        <aside className="home-safety" aria-label="Safe practice reminder">
          <span className="safety-icon" aria-hidden="true">盾</span>
          <div><p className="safety-title">Practice safely. Learn confidently.</p><p>Use these exercises only in controlled, authorized environments.</p></div>
          <span className="safety-status"><span className="home-live-dot" /> LOCAL LAB</span>
        </aside>
      </main>

      <footer className="home-footer"><span>CyberLab © 2026</span><span>Practice responsibly. Test only authorized environments.</span></footer>
    </div>
  );
}

export default Home;
