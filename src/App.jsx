import Home from './views/Home';
import About from './views/About';
import Achievements from './views/Achievements';
import Projects from './views/Projects';
import Team from './views/Team';
import Error404 from './views/Error404';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import LoadingBar from 'react-top-loading-bar'
import { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Easter from './components/Easter';
import NavbarTop from './components/NavbarTop';
import Bootloader from './components/Bootloader';

export default function App() {

  const [progress, setProgress] = useState(0);

  return (
    <>
      <BrowserRouter>
        <NavbarTop />
        <Bootloader>
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
            {/* <Route path="/tasks" element={<Tasks />} /> */}
            <Route path="/team" element={<Team setProgress={setProgress} />} />
            <Route path="*" element={<Navigate to="/404" />} />
            <Route path="/404" element={<Error404 />} />
          </Routes>

          <Easter />
          <BackToTop />
          <Footer />
        </Bootloader>
      </BrowserRouter>

    </>
  )
}