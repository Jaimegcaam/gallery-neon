import React from "react";
import Landing from "./components/Landing";
import Contact from "./components/Contact";
import { Route , Routes} from "react-router-dom";
import heroVid from './assets/fire.mp4';


function App() {  

  return (
    <div className="bg-black flex-wrap flex">
      <video
          className="object-cover h-[100vh] w-full absolute z-05"
          src={heroVid}
          autoPlay
          loop
          muted
      />
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
