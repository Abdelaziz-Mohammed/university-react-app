import Navbar from "./Components/Navbar/Navbar";
import Hero from './Components/Hero/Hero';
import Title from "./Components/Title/Title";
import Programs from './Components/Programs/Programs';
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from './Components/Contact/Contact';
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import { useState } from "react";

const App = () => {
  const [hideVideoPlayer, setHideVideoPlayer] = useState(true);
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title title="Our Program" description="What We Offer"/>
        <Programs />
        <About setHideVideoPlayer={setHideVideoPlayer} />
        <Title title="Gallery" description="Campus Photos"/>
        <Campus />
        <Title title="Testimonials" description="What Student Says"/>
        <Testimonials />
        <Title title="Contact Us" description="Get in Touch"/>
        <Contact />
        <Footer />
      </div>
      {!hideVideoPlayer && <VideoPlayer setHideVideoPlayer={setHideVideoPlayer} />}
    </>
  )
}

export default App