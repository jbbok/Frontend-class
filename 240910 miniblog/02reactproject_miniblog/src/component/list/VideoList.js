import React, { useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 168px;
  height: 108px;
  border: 1px solid pink;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
`;

const VideoContent = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;

const ImageContent = styled.img`
  width: 100%;
  height: 100%;
`;

const VideoList = ({ onClick, videoUrl, thumbnailUrl }) => {
  const VideoRef = useRef();
  // console.log(VideoRef);

  const handleMouseEnter = () => {
    if (VideoRef.current) {
      VideoRef.current.style.opacity = 1;
      VideoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (VideoRef.current) {
      VideoRef.current.style.opacity = 0;
      VideoRef.current.pause();
      VideoRef.current.currentTime = 0;
    }
  };

  return (
    <Wrapper
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <VideoContent ref={VideoRef} src={videoUrl} muted />
      <ImageContent src={thumbnailUrl} alt="Thumbnail" />
    </Wrapper>
  );
};

export default VideoList;
