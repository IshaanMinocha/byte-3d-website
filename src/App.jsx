import Home from './views/Home';
import About from './views/About';
import Achievements from './views/Achievements';
import Projects from './views/Projects';
import Team from './views/Team';
import Contact from './views/Contact';
import Error404 from './views/Error404';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import LoadingBar from 'react-top-loading-bar'
import { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {

  const [progress, setProgress] = useState(0);

  return (
    <>
    <BrowserRouter>
        <Navbar />
        <LoadingBar
          color='#D00858'
          progress={progress}
          height={3}
          onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route path="/" element={<Home setProgress={setProgress} />} />
          <Route path="/about" element={<About setProgress={setProgress} />} />
          <Route path="/achievements" element={<Achievements setProgress={setProgress} />} />
          <Route path="/projects" element={<Projects setProgress={setProgress} />} />
          <Route path="/contact" element={<Contact setProgress={setProgress} />} />
          <Route path="/team" element={<Team setProgress={setProgress} />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <BackToTop />
        <Footer />
      </BrowserRouter>
    </>
  )
}