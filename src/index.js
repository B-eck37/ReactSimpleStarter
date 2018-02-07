 // Create New Component. This Component should produce some HTML.
import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/Search_bar';
import VideoList from './components/Video_list';
import VideoDetail from './components/Video_detail';


const API_KEY = 'AIzaSyBNgtsI3_FrVggDfdcsE97D5zteUZ3iCAk';

//Components are classes. This code below is a class.
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null,
        };
       this.videoSearch('Moto the movie');
    }

    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0] 
            });
            //Similar to this.setState({ videos: videos }) (ES6)
        })
    }

    //JSX within a class is a class or component instance. Wrapping your class in JSX is also an instance.
    render(){
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
        return <div> 
            <SearchBar onSearchTermChange={videoSearch}/>
            <div className='videos'>
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList 
            onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
            videos={this.state.videos}/> 
            </div>
        </div>;
    }   
}


// Take this Component's HTML and put on the page (in the DOM).
ReactDOM.render(<App/>, document.querySelector('.container'));
