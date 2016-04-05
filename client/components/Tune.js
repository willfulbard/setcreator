class Tune extends React.Component {
  constructor(props) {
    super(props);
  }

  selectTune(e) {
    console.log('tune selected', e);
    e.data = {};
    e.data.tune = this.props.tune;
    e.data.event = 'selectTune';
  }

  render() {
    return (<div className="clickable" onClick={this.selectTune.bind(this)}>{this.props.tune.name}</div>);
  }
}

window.Tune = Tune;

