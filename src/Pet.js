import React from "react";

class Pet extends React.Component {
  render() {
    const { name, animal, breed, media, location } = this.props;

    let photos = [];

    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
    }

    let imgReplacement = "http://placecorgi.com/300/300";
    if (photos[0] && photos[0].value) {
      imgReplacement = photos[0].value;
    }

    return (
      <div className="pet">
        <div className="image-container">
          <img src={imgReplacement} alt={name} />
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {location}
          </h2>
        </div>
      </div>
    );
  }
}

export default Pet;
