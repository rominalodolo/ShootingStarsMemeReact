import React, { useRef, useState } from 'react';

const VideoPlayer = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [videoError, setVideoError] = useState(false);

    // Constant for the video path
    const videoPath = 'assets/background.mp4'; // Path relative to the public folder

    const handlePlayVideo = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    const handleVideoError = () => {
        console.error('Error loading video file.');
        setVideoError(true);
    };

    if (videoError) {
        return <div>Error loading video. Please check the file path.</div>;
    }

    return (
        <div>
            <video 
                ref={videoRef} 
                id="video#video" 
                controls
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                onError={handleVideoError}
            >
                <source src={videoPath} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {!isPlaying && (
                <button onClick={handlePlayVideo} id='#tap-to-play'>Click Me! </button>
            )}
        </div>
    );
};

export default VideoPlayer;