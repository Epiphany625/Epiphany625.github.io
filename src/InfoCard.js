import React from 'react';
import './InfoCard.css';

const InfoCard = ({image, title, sub, description1, description2, link = "none"}) => {
  const photo = image;

  let anchor = []
  if(link !== "none"){
    anchor.push(<div style={{fontSize:"1.1em", margin:"1.2em"}}><b>External Link: <a href={link}>{title}</a></b></div>)
  }

  return (
    <>
    <div className="card-container">
      <img src={require(`./assets/${photo}`)} alt="displays personal" className="info-photo" />
      <div className="info-text">
        <h1>{title}</h1>
        <h3>{sub}</h3>
        <p>{description1}</p>
        <p>{description2}</p>
        {anchor}
      </div>
    </div>
    </>
  );
};

export default InfoCard;
