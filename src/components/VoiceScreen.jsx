export default function VoiceScreen({ onDemoSearch }) {
  return (
    <section className="screen shell">
      <div className="brand-top">Ordo</div>

      <div className="mic-stack">
        <div className="mic-icon">🎙</div>
        <div className="pulse-ring" />
        <div className="mic-core">🎙</div>
        <div className="glow-line" />
      </div>

      <div className="status-block">
        <div className="status-title">Listening...</div>
        <div className="status-subtitle">Finding best option...</div>
      </div>

      <button className="primary-button" onClick={onDemoSearch}>
        Start demo search
      </button>
    </section>
  )
}
