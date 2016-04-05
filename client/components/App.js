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
    this.getFigures();
  }

  getDances() {
    $.get('/api/dances', function(data) {
      console.log('got dances', data);
      this.setState({
        dances: data
      });
    }.bind(this));
  }

  getFigures() {
    $.get('/api/figures', function(data) {
      console.log('got figures', data);
      this.setState({
        figures: data
      });
    }.bind(this));
  }

  changePage(e) {
    this.setState({
      page: e.data.page
    });
  }

  clickEvent(e) {
    console.log('Click Event', e.data);
    if (e.data.event === 'selectDance') {
      console.log('select dance', e.data);
      this.setState({
        page: 'figurelist',
        selectedDance: e.data.dance,
        selectedFigure: false
      });
    } else if (e.data.event === 'selectFigure') {
      this.setState({
        page: 'tunelist',
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
          <PageRender selectedDance={this.state.selectedDance} selectedFigure={this.state.selectFigure} page={this.state.page} figures={this.state.figures} dances={this.state.dances} tunes={this.state.tunes} />
        </div>
      </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

