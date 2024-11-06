import React from 'react';


const HomePage = () => {
    return (
        <div className="video-container">

            <iframe width="560"
                height="315"
                src="https://www.youtube.com/embed/aR-KAldshAE?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen>
            </iframe>
            Votre navigateur ne prend pas en charge les vidéos.

            <div className="overlay">

            </div>
        </div>
    );
};

export default HomePage;
