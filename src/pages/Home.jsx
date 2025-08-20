import '../styles/home.css';

export default function Home() {
  return (
    <div className="home">
      <header className="header">Airwatch Header</header>

      <main className="main">
        <section className="aqi-graph">[AQI Graph Placeholder]</section>
        <section className="pollution-form">[Pollution Form Placeholder]</section>
        <section className="leaderboard">[Leaderboard Placeholder]</section>
      </main>

      <footer className="footer">Footer Info</footer>
    </div>
  );
}
