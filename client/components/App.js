class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'index',
      selectedDance: false,
      selectedFigure: false,
      selectedTunes: [], //For tunes that have been selected so they are filtered
      tunesForFigures: {}, //Mapping of tune selections to figures
      dances: [],
      figures: []
    };
    this.getDances();
  }

  getDances() {
    $.get('/api/dances', function(data) {
      console.log('got dances', data);
      this.setState({
        dances: data
      });
    }.bind(this));
  }

  changePage(e) {
    console.log('Change Page AppLevel', e.data);
    this.setState({
      page: e.data.page
    });
  }

  clickEvent(e) {
    console.log('Click Event', e.data);
    if (e.data.event === 'selectDance') {
      this.setState({
        selectedDance: e.data.dance,
        selectedFigure: false
      });
    } else if (e.data.event === 'selectFigure') {
      this.setState({
        selectedFigure: e.data.figure
      });
    } else if (e.data.event === 'selectTune') {
      this.setState({
        selectedTunes: this.state.selectedTunes.concat([e.data.tune])
      });
    }
  }

  render() {
    return (<div>
        <div onClick={this.changePage.bind(this)}>
          <Nav />
        </div>
        <div onClick={this.clickEvent.bind(this)}>
          <PageRender selectDance={this.state.selectedDance} selectedFigure={this.state.selectFigure} page={this.state.page} dances={this.state.dances} />
        </div>
      </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

