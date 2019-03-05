import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
// import VideoListEntry from './VideoListEntry.js'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: exampleVideoData,
      video: exampleVideoData[0]
    };
    this.onTitleClick = this.onTitleClick.bind(this);
  }
  // Unable to get this jerk working. Props path is in VideoList {App line 37}
  onTitleClick(event) {
    let newVideo = this.state.list.filter(vid => vid.id.videoId === event.target.id)[0]; //filter data trom id
    this.setState({
      video: newVideo
    });
    // onsole.log(newVideo);
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em><VideoPlayer video={this.state.video}/></em></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em><VideoList videos={this.state.list} click={this.onTitleClick}/></em></h5></div>
          </div>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
