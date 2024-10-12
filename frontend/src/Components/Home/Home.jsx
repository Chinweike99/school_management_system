import React from 'react'
import './Home.css'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { LoremIpsum } from 'react-lorem-ipsum'; // Use the LoremIpsum component
import { assets } from '../../assets/asstes';

const Home = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/chooseuser')
  }

  return (
    <div className='home'>
      <nav>
        <img src={assets.schoolLogo} alt="logo" />
        <div className='navLink' >
          <NavLink className="navStyle">About us</NavLink>
          <NavLink className="navStyle">Products</NavLink>
          <NavLink className="navStyle">Contact us</NavLink>
        </div>

        <div className='button'>
          <button onClick={handleClick}>Login</button>
          <button onClick={handleClick}>Guest Mode</button>
        </div>
      </nav>

      <div className='content'>
        <div className='schoolContent'>
          <p className='heading'>School Management System</p>
          <div className='loremIpsum'>
            {/* Use the LoremIpsum component to generate paragraphs */}
            <p className="lorem" >
             <LoremIpsum p={1} />
            </p>

            <div>Admin Register</div>
          </div>
        </div>

        <img src={assets.teacherBg} alt="background" />
      </div>
    </div>
  )
}

export default Home;
