import React from 'react';

const VideoPlayer = () => {
  return (
    <div className="iframe-container">
        <iframe
            width="640"
            height="360"
            src="https://www.youtube.com/embed/ixLlGRK2dlI"
            title="Real Estate Rules for Beginners - Robert Kiyosaki, Kim Kiyosaki, @GrantCardone"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
        </iframe>
    </div>
  );
};

export default VideoPlayer;
