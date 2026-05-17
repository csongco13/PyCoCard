function Rules() {
  return (
    <main className="rules-page">
      <section className="moon-rules-card">
        <div className="orbit-ring orbit-ring-one"></div>
        <div className="orbit-ring orbit-ring-two"></div>
        <div className="orbit-dot orbit-dot-one"></div>
        <div className="orbit-dot orbit-dot-two"></div>
        <div className="moon-row">
          <div className="moon-shape moon-left"></div>
          <div className="center-moon">
            <p className="moon-small-title">PyCoCard</p>
            <h1 className="moon-title">RULES</h1>
          </div>
          <div className="moon-shape moon-right"></div>
        </div>
        <section className="rules-list">
          <p className="rules-text">Normal cards are worth 2 points.</p>
          <p className="rules-text">Lucky cards have a 1 out of 10 chance and are worth 3 points.</p>
          <p className="rules-text">Dark Knight cards have a 1 out of 6 chance.</p>
          <p className="rules-text">If you answer a Dark Knight card correctly, choose +2 for yourself or -2 from your opponent.</p>
          <p className="rules-text">First player to 10 points wins.</p>
        </section>
      </section>
    </main>
  );
}

export default Rules;