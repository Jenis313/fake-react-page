import React from 'react'
import reactLogo from "../images/react-icon-small.png";
export default function Nav() {
    return (
        <nav>
            <div className='container'>
                <img src= {reactLogo}/>
                <h1>ReactFacts</h1>
                <a href='#' >React Course - Project 1</a>
            </div>
        </nav>
    )
}
