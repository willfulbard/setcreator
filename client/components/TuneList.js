class TuneList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.selectedFigure) {
      return (<div>Please select a figure first</div>);
    } else {
      return (<div className="tune-list">
        {this.props.tunes.map(function(tune, index) { return (<Tune key={index} tune={tune} />); }.bind(this))}
        </div>);
    }
  }
}

window.TuneList = TuneList;

