import React, {useEffect, useRef} from "react";
import './Menu.css';

function Menu({state}){
  
    let menu = useRef(null);

    useEffect(() =>{
        if(state.clicked === false){
            menu.style.display = "none";
        } else if(state.clicked === true){
            menu.style.display = "flex";
        }
    })

    return (
        <div ref={el => (menu = el)} className="w-full h-full text-[white] absolute  left-0 flex justify-center text-center z-20 bg-[#A83236]">
            <div className="Menu">
                <ul className="Menu-list" data-offset="10">
                    <a target="blank">
                        <li className="Menu-list-item" data-offset="12" >
                            Home
                            <span className="Mask"><span>Home</span></span>
                            <span className="Mask"><span>Home</span></span>
                        </li>
                    </a>
                    <a target="blank">
                        <li className="Menu-list-item" data-offset="12" >
                            Portfolio
                            <span className="Mask"><span>Portfolio</span></span>
                            <span className="Mask"><span>Portfolio</span></span>
                        </li>
                    </a>
                    <a href="https://github.com/Jaimegcaam/gallery-neon" target="blank">
                        <li className="Menu-list-item" data-offset="12" >
                            Github
                            <span className="Mask"><span>Github</span></span>
                            <span className="Mask"><span>Github</span></span>
                        </li>
                    </a>
                    <a target="blank">
                        <li className="Menu-list-item" data-offset="12" >
                            Contact
                            <span className="Mask"><span>Contact</span></span>
                            <span className="Mask"><span>Contact</span></span>
                        </li>
                    </a>
                </ul>
            </div>
        </div>
    )

}

export default Menu;