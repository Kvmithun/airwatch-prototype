import React from 'react';
import AQIGraph from '../components/AQIGraph';
import Leaderboard from '../components/Leaderboard';
import Footer from '../components/Footer';

import '../styles/dashboard.css';

export default function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Airwatch Dashboard</h1>
      </header>

      <main className="dashboard-main">
        <section className="heatmap">[Heatmap Placeholder]</section>
        <section className="forecast">
          <AQIGraph />
        </section>
        <section className="leaderboard">
          <Leaderboard />
        </section>
      </main>
         <Footer />
    </div>
  );
}
