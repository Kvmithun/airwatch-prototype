import React from 'react';
import AQIGraph from '../components/AQIGraph';
import Leaderboard from '../components/Leaderboard';
import PollutionForm from '../components/PollutionForm';
import Footer from '../components/Footer';

import '../styles/home.css';

export default function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to Airwatch</h1>
        <p>Track, report, and forecast air quality</p>
      </header>

      <main className="home-main">
        <section>
          <AQIGraph />
        </section>
        <section>
          <Leaderboard />
        </section>
        <section>
          <PollutionForm />
        </section>
      </main>
        <Footer />
    </div>


  );
}
