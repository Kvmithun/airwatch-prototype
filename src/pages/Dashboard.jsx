import '../styles/dashboard.css';

export default function Dashboard() {
  return (
    <div className="dashboard">
      <header className="header">Airwatch Dashboard</header>

      <main className="main">
        <section className="heatmap">[Heatmap Placeholder]</section>
        <section className="forecast">[AQI Forecast Placeholder]</section>
        <section className="leaderboard">[Leaderboard Placeholder]</section>
      </main>

      <footer className="footer">Footer Info</footer>
    </div>
  );
}
