import React from 'react'
import './Home.css'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { LoremIpsum } from 'react-lorem-ipsum'; // Use the LoremIpsum component
import { assets } from '../../assets/asstes';

const Home = () => {

  const navigate = useNavigate();

  return (
    <div>
      <nav>
        <img src="" alt="logo" />
        <div>
          <NavLink>About Us</NavLink>
          <NavLink>Products</NavLink>
          <NavLink>Contact Us</NavLink>
        </div>

        <div>
          <button>Login</button>
          <button>Guest Mode</button>
        </div>
      </nav>

      <div>
        <div>
          <h2>School Management System</h2>
          <div>
            {/* Use the LoremIpsum component to generate paragraphs */}
            <LoremIpsum p={1} />
          </div>
        </div>

        <img src={assets.teacherBg} alt="" />
      </div>
    </div>
  )
}

export default Home;
