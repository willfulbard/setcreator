class TuneSelected extends React.Component {
  constructor(props) {
    super(props);
  }

  selectTuneSelected(e) {
    console.log('tune selected', e);
    e.data = {};
    e.data.tuneSelected = this.props.tuneSelected;
    e.data.event = 'selectTuneSelected';
  }

  render() {
    return (<div className="clickable" onClick={this.selectTuneSelected.bind(this)}>{this.props.tuneSelected.name.replace(/&#039;/g, "'")}</div>);
  }
}

window.TuneSelected = TuneSelected;

