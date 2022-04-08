import React, {useEffect, useRef} from "react";
import './Menu.css';
import video from '../assets/puntos.mp4'

function Menu({state}){


    const videoRef= useRef();
  
    const setPlayBack = () => {
        videoRef.current.playbackRate = 0.8;
    };

    let menu = useRef(null);

    useEffect(() =>{
        if(state.clicked === false){
            menu.style.display = "none";
        } else if(state.clicked === true){
            menu.style.display = "flex";
        }
    })

    return (
        <div ref={el => (menu = el)} className="w-full h-full text-white absolute  left-0 flex justify-center text-center z-20">
            <video
                className="object-cover h-[100vh] w-full absolute z-05"
                ref ={videoRef}
                onCanPlay={() => setPlayBack()}
                src={video}
                autoPlay
                loop
                muted
            /> 
            <div className="Menu">
                <ul className="Menu-list" data-offset="10">
                    <li className="Menu-list-item" data-offset="20" >
                        Home
                        <span className="Mask"><span>Home</span></span>
                        <span className="Mask"><span>Home</span></span>
                    </li>
                    <li className="Menu-list-item" data-offset="16" >
                        Portfolio
                        <span className="Mask"><span>Portfolio</span></span>
                        <span className="Mask"><span>Portfolio</span></span>
                    </li>
                    <li className="Menu-list-item" data-offset="12" >
                        <a href="https://github.com/Jaimegcaam/gallery-neon" target="blank">
                            Code
                            <span className="Mask"><span>Code</span></span>
                            <span className="Mask"><span>Code</span></span>
                        </a>
                    </li>
                    <li className="Menu-list-item" data-offset="8">
                        Contact
                        <span className="Mask"><span>Contact</span></span>
                        <span className="Mask"><span>Contact</span></span>
                    </li>
                </ul>
            </div>
        </div>
    )

}

export default Menu;