import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-page">
      <section className="star-home">
        <div className="star-field"></div>
        <div className="shooting-star shooting-star-one"></div>
        <div className="shooting-star shooting-star-two"></div>
        <div className="shooting-star shooting-star-three"></div>
        <div className="shooting-star shooting-star-four"></div>
        <div className="blink-star blink-star-six"></div>
        <div className="blink-star blink-star-seven"></div>
        <div className="blink-star blink-star-eight"></div>
        <div className="blink-star blink-star-nine"></div>
        <div className="blink-star blink-star-ten"></div>   
        <div className="cloud cloud-one"></div>
        <div className="cloud cloud-two"></div>
        <div className="cloud cloud-three"></div>
        <section className="home-content">
          <p className="home-label">PYTHON CARD BATTLE</p>
          <h1 className="home-title">PyCoCard</h1>
          <p className="home-text">
            Pick a card, trace the Python code, and race your opponent to 10 points!
          </p>
          <Link className="start-link" to="/game">START GAME</Link>
        </section>
      </section>
    </main>
  );
}

export default Home;