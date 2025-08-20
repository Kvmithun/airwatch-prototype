import React from 'react';
import '../styles/about.css';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="about">
      <header className="about-header">
        <h1>About Airwatch</h1>
      </header>

      <main className="about-main">
        <section className="project-info">[Project Description Placeholder]</section>
        <section className="team-info">[Team Info Placeholder]</section>
        <section className="extra-info">[Extra Info Placeholder]</section>
      </main>
       <Footer />
    </div>
  );
}
