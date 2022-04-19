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
        <div ref={el => (menu = el)} className="w-full h-full bg-[#ecbb1b] text-white absolute  left-0 flex justify-center text-center z-10">
            <div className="Menu">
                <ul className="Menu-list" data-offset="10">
                    <li className="Menu-list-item" data-offset="12" >
                        Portfolio
                        <span className="Mask"><span>Portfolio</span></span>
                        <span className="Mask"><span>Portfolio</span></span>
                    </li>
                    <a href="https://github.com/Jaimegcaam/gallery-neon" target="blank">
                        <li className="Menu-list-item" data-offset="12" >
                            Code
                            <span className="Mask"><span>Code</span></span>
                            <span className="Mask"><span>Code</span></span>
                        </li>
                    </a>
                    <a href="https://github.com/Jaimegcaam" target="blank">
                        <li className="Menu-list-item" data-offset="12" >
                            Github
                            <span className="Mask"><span>Github</span></span>
                            <span className="Mask"><span>Github</span></span>
                        </li>
                    </a>
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