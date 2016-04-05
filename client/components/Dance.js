class Dance extends React.Component {
  constructor(props) {
    super(props);
  }

  selectDance(e) {
    console.log('dance selected', e);
    e.data = {};
    e.data.dance = this.props.dance;
    e.data.event = 'selectDance';
  }

  render() {
    return (<div className="clickable" onClick={this.selectDance.bind(this)}>{this.props.dance.name}</div>);
  }
}

window.Dance = Dance;

