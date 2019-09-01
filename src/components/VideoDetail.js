import React from 'react';

const VideoDetail = ({video}) =>{
    //Alert user that video is loading while video is not yet received
    if(!video){
        return (
        <div className="ui active dimmer">
            <div className="ui large text loader">
                Loading Video...
            </div>
        </div>
        );
    }

    //identifying search query
    const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`;

    return(
        <div>
            <div className="ui embed">
                <iframe title="video player" src={videoSrc} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <h5 className="ui header">Created By: {video.snippet.channelTitle} </h5>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoDetail;