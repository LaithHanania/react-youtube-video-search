//importing react library
import React from 'react';

//importing local components
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{
    //state definition, manages found videos and user selected video
    state = {videos: [], selectedVideo: null};

    //Initializing the component with a default search
    componentDidMount(){
        this.onTermSubmit('classical music');
    }

    //Actives asynchronous request to retrieve videos in relation to user entry or 'term'
    onTermSubmit=async term=>{
        const response = await youtube.get('/search', {
            params:{
                q: term
            }
        });
        //updating state once response received
        this.setState({videos: response.data.items, selectedVideo:response.data.items[0]});
    };

    //Updates the user selected video
    onVideoSelect = (video) =>{
        this.setState({selectedVideo: video });
    }

    render(){
        return(
            <div className= "ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;