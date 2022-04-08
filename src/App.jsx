import React from "react";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import heroVid from './assets/fire.mp4';


function App() {  

  return (
    <div>
      <video
                className="object-cover h-[100vh] w-full absolute z-05"
                src={heroVid}
                autoPlay
                loop
                muted
            />
      <Navbar/>
      <Landing />
    </div>
  );
}

export default App;
