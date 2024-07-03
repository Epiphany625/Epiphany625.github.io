import React from 'react';
import './Introduction.css';
import MyPhoto from './my-photo.JPG'; // Replace with the actual path to your photo
import {Link} from 'react-router-dom';
import Dream from './dream.jpg';

const Introduction = () => {
  return (
    <div style={{padding: "5%", backgroundImage: `url(${Dream})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat'}}>
      <div className="introduction-container">
        <img src={MyPhoto} alt="Personal Display" className="introduction-photo" />
        <div className="introduction-text">
          <h1>Hello, nice to meet you!</h1>
          <p>My name is Xinyang Xu, but you can also call me Leo. I am currently in Los Angeles, pursuing a major in Computer Science at USC as a sophomore. I love coding and am excited to share more about myself on this website.</p>        
          <h3>How about starting with these?</h3>
          <p>Check out the game Leo coded: <a href="https://Epiphany625.github.io/blocks"><b style={{color: "#00aaff"}}>Gomoku! (External Link)</b></a></p>
          <p>Leo's most fascinating hobby: <Link to="/hobbies"><b style={{color: "#00aaff"}}>Drone Photography!</b></Link></p>
        </div>
      </div>
    </div>
  );
};


export default Introduction;
