class DanceList extends React.Component {
  constructor(props) {
    super(props);
  }

  selectDance(e) {
    console.log('dance selected');
    e.data = this.props.dances;
  }

  render() {
    return (<ul className="dance-list">
        {this.props.dances.map(function(dance, index) { return (<li key={index} onClick={this.selectDance.bind(this)}>{dance.name}</li>); }.bind(this))}
      </ul>);
  }
}

window.DanceList = DanceList;

