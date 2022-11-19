import React, { useState } from 'react'

const Navbar = () => {
    const [isActive, setIsActive] = useState(false)
    const handleClick = () =>{
        setIsActive(!isActive);
    }  
    return (
        <nav>
        <label className='logo'>Team<span style={{color:'#6247aa'}}> Z+</span></label>
        <ul className={isActive ? 'show':''}>
            <CustomLink href='/'>Home</CustomLink>
            <CustomLink href='/jobs'>My Jobs</CustomLink>
            <CustomLink href='/payment'>My Payment</CustomLink>
            <CustomLink href='/offerletter'>My Offerletter</CustomLink>
            <CustomLink href='/certificate'>My Certificate</CustomLink>
        </ul>
        <label className='icon' onClick={handleClick}>
            <i className='fas fa-bars'></i>
        </label>
        </nav>
    )
}

function CustomLink({ href, children, ...props }){
    const path = window.location.pathname
    return(
        <li>
            <a className={path === href ? 'active':''} href={href} {...props}>{children}</a>
        </li>
    )
}
export default Navbar
