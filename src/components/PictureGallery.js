import React, { useState, useEffect } from 'react';
import '../App.css';

const PictureGallery = () => {
    const nbPictures = 6;
    const defaultImagePath = 'assets/TiredElaine.png';
    const [pictures, setPictures] = useState([]);

    useEffect(() => {
        // Generate an array of picture objects
        const newPictures = Array.from({ length: nbPictures }, (_, i) => ({
            id: `pict${i + 1}`,
            src: defaultImagePath,
            className: 'hide'  // Initially hiding the pictures
        }));

        setPictures(newPictures);
    }, []);

    // Function to update picture classes based on animations or interactions
    const updatePictureClasses = (newClasses) => {
        setPictures(pictures.map((picture, index) => ({
            ...picture,
            className: newClasses[index] || 'hide'
        })));
    };

    // Example of how you might update classes (adapt based on your animation logic)
    const animatePictures = () => {
        // Define your animation logic here
        // This is just a placeholder logic
        const newClasses = ['show', 'show', 'hide', 'hide', 'hide', 'hide'];
        updatePictureClasses(newClasses);
    };

    return (
        <div id="pictures-container">
            {pictures.map(picture => (
                <img
                    key={picture.id}
                    id={picture.id}
                    src={picture.src}
                    className={`animate-picture ${picture.className}`} // Add the animate-picture class
                    alt=""
                />
            ))}
        </div>
    );
};

export default PictureGallery;