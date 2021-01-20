import SearchBar from './SearchBar'
import React from 'react'
import youtube from '../apis/youtube-api'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

class App extends React.Component {
    state = { videos: [], selectedVideo: null }

    //set default search term
    componentDidMount() {
        this.onSubmit('cat');
    }

    onSubmit = async text => {
        const response = await youtube.get('/search', {
            params: {
                q: text
            }
        });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '15px' }}>
                <SearchBar onFormSubmit={this.onSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className=" five wide column">
                            <VideoList
                                onVideoSelect={this.onVideoSelect}
                                videos={this.state.videos}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;