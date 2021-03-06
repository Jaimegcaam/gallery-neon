import React,{useState} from "react";
import {AiOutlineMenu, AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail, AiOutlineClose} from 'react-icons/ai'
import Menu from "./Menu";
import { Link } from "react-router-dom";

function Navbar(){

    const [state, setState] = useState({
        clicked: false,
        menuName: "Menu"
    });

    function menuHandler() {
        if(state.clicked === true){
            setState({
                clicked: false,
                menuName: "Menu"
            });
            console.log(state.clicked);
        } else if(state.clicked === false){
            setState({
                clicked: true,
                menuName: "Close"
            });
            console.log(state.clicked);
        }
    }


    return (
        <div className="w-full h-[10vh] text-white">
            <div className="max-w-[1240px] mx-auto flex justify-between h-full">

                {/* Botones Links */}
                <div className="m-8 flex space-x-4">
                    <a  className="z-10 text-base sm:text-lg" href="https://www.linkedin.com/in/jaime-garcia-caamano" target="blank">
                        <AiOutlineLinkedin/>
                    </a>
                    <a  className="z-10 text-base sm:text-lg" href="https://github.com/Jaimegcaam" target="blank">
                        <AiOutlineGithub/>
                    </a>
                    <Link to="/contact"  className="z-10 text-base sm:text-lg">
                        <AiOutlineMail />
                    </Link>
                </div>

                {/* Logo Navbar */}
                <h1 className="m-7 text-[#ecbb1b] font-bold text-base z-20 sm:text-3xl">NEON</h1>

                <button onClick={menuHandler} className='cursor-pointer'>
                    {state.clicked ? (
                        <div className="m-7 flex space-x-4">
                            <h3 className="text-base z-30 sm:text-lg" >MENU</h3>
                            <AiOutlineClose className="mt-1 z-30 text-base sm:text-lg"/>
                        </div>
                    ) : (
                        <div className="m-7 flex space-x-4 ">
                            <h3 className="text-base z-30 sm:text-lg" >MENU</h3>
                            <AiOutlineMenu className="mt-1 z-30 text-base sm:text-lg"/>
                        </div>
                    )}
                </button>

                <Menu state={state}/>
                
            </div>
        </div>
    )
}

export default Navbar;