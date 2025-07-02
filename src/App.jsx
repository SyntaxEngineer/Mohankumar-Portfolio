import styles from './App.module.css';
import { About } from './components/About/About';
import { Contacts } from './components/Contacts/Contacts';
import { Experience } from './components/Experience/Experience';
import { Hero } from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import { Projects } from './components/Projects/Projects';
import { Certification } from './components/Certification/Certification';
import {EndorsementSection} from './components/Endorsement/EndorsementSection';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Certification />
      <EndorsementSection/>
      <Contacts />

    </div>
  );
}

export default App;
