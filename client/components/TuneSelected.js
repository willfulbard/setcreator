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
    return (<div onClick={this.selectTuneSelected.bind(this)}>{this.props.tuneSelected.name}</div>);
  }
}

window.TuneSelected = TuneSelected;
