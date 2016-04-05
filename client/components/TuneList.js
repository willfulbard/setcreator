class TuneList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.selectedFigure) {
      return (<div>Please select a figure first</div>);
    } else if (this.props.loadingData) {
      return (<div><img src="/loading.gif" /></div>);
    } else {
      console.log('tuneList: ', this.props.tunes.length);
      console.log('tunesForFigures: ', this.props.tunesForFigures);
      return (<div>
          <div className="tune-list">
          <h3>Tunes:</h3>
          {this.props.tunes
            .filter(function(tune, index) {
              return this.props.selectedTunes.filter(function(selectedTune) {
                return selectedTune.id === tune.id;
              }).length < 1;
            }, this)
            .map(function(tune, index) { 
              return (<Tune key={index} tune={tune} />); 
            }, this)}

          </div>
          <div className="tunes-selected">
          <h3>Your Set:</h3>
          {this.props.tunesForFigures[this.props.selectedFigure._id]
            .map(function(tune, index) { 
              return (<TuneSelected key={index} tuneSelected={tune} />); 
            }, this)}
          </div>
        </div>);
    }
  }
}

window.TuneList = TuneList;

