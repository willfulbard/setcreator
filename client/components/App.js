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
      figures: [],
      tunes: [],
      loadingData: false,
      pagesFetched: 0
    };
    this.getDances();
    this.getFigures();
  }

  getTunes(count, max) {
    count = count || 1;
    max = max || 5;
    if (count === max) {
      this.setState({
        loadingData: false
      });
      return;
    } 
    $.get('https://thesession.org/tunes/popular/' + this.state.selectedFigure.type + '?format=json&perpage=50&page=' + count,
        function(tunes) {
          console.log('got', tunes);
          this.setState({
            tunes: this.state.tunes.concat(tunes.tunes),
            pagesFetched: count
          });
          this.getTunes(count+1);
        }.bind(this));
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
        loadingData: true,
        tunes: []
      });
      this.getTunes();
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
          <PageRender loadingData={this.state.loadingData} selectedTunes={this.state.selectedTunes} selectedDance={this.state.selectedDance} selectedFigure={this.state.selectedFigure} page={this.state.page} figures={this.state.figures} dances={this.state.dances} tunes={this.state.tunes} />
        </div>
      </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

