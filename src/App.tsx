import './App.css';
import './index.css';
import Navbar from './Nav';
import Title from './Title';
import Skill from './Skill';
import Project from './Project';
import Experience from './Experience';
import Footer from './Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-[110px] md:pt-[100px]">
        <Title />
        <Project />
        <Skill />
        <Experience />
        <Footer />
      </div>
    </>
  );
}

export default App
