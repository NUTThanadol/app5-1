import React from 'react'
import { BrowserRouter, NavLink, Routes, Route, Navigate } from 'react-router-dom'
import './navLink.css'
import Home from './home'
import Products from './products'     
import Error from './error'   
import { userContext } from './context'  
import About from './about'       
import Contact from './contact'                                    

export default function Route1() {
    let activeClassname = "active_menu"
    let inActiveClassname = "menu"
    let user = React.useContext(userContext)
  return (
    <BrowserRouter>
        <nav className='nav'>
                <NavLink to="/" className={({isActive}) => isActive ? activeClassname:inActiveClassname}> HOME </NavLink> - &nbsp;
                <NavLink to="/product" className={({isActive}) => isActive ? activeClassname:inActiveClassname}> Product </NavLink> - &nbsp;
                <NavLink to="/dashboard" className={({isActive}) => isActive ? activeClassname:inActiveClassname}> Dashboard </NavLink> - &nbsp;
                <NavLink to="/about" className={({isActive}) => isActive ? activeClassname:inActiveClassname}> About </NavLink> - &nbsp;
                <NavLink to="/contact" className={({isActive}) => isActive ? activeClassname:inActiveClassname}> Contact </NavLink> - &nbsp;

                [{user}]
        </nav>
        <div style={{margin:'20px'}}>
            <Routes>
                <Route path="/" element = {<Home />}/>
                <Route path="/product" element = {<Products />}/>
                <Route path="/dashboard" element = {<Navigate to="/" />}/>
                <Route path="*" element = {<Error />}/>
                <Route path="/about" element = {<About />}/>
                <Route path="/contact" element = {<Contact />}/>


            </Routes>
        </div>

    </BrowserRouter>
  )
}