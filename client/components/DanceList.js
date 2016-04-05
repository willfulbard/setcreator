class DanceList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="dance-list">
        {this.props.dances.map(function(dance, index) { return (<Dance key={index} dance={dance} />); }.bind(this))}
      </div>);
  }
}

window.DanceList = DanceList;

