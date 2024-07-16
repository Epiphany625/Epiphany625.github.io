import React from 'react';
import './InfoCard.css';

const InfoCard = ({image, title, sub, description1, description2, repoLink = "none", webLink="none", location="none"}) => {
  const photo = image;

  let repository = []
  if(repoLink !== "none"){
    repository.push(<div style={{fontSize:"1.1em", margin:"1.2em"}}><b><i className="fab fa-github info-icon"></i><a href={repoLink}>{title}</a></b></div>)
  }

  let website = [];

  if(webLink !== "none"){
    website.push(<div style={{fontSize:"1.1em", margin:"1.2em"}}><b><i className="fas fa-square-up-right info-icon"></i><a href={webLink}>{title}</a></b></div>)
  }

  let loc = [];
  if(location !== "none"){
    loc.push(<h4 style={{marginTop:"5px", marginBottom:"5px"}}><i className="fas fa-location-dot info-icon"></i>{location}</h4>)
  }

  return (
    <>
    <div className="card-container">
      <div className="info-image-container"><img src={require(`./assets/${photo}`)} alt="displays personal" className="info-photo" /></div>
      <div className="info-text">
        <h1 className="card-title">{title}</h1>
        <h3 className="card-subtitle">{sub}</h3>
        {loc}
        <p>{description1}</p>
        <p>{description2}</p>
        {repository}
        {website}
      </div>
    </div>
    </>
  );
};

export default InfoCard;
