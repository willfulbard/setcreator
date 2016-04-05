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

  getTunes(count, max, type) {
    if (count === max) {
      this.setState({
        loadingData: false
      });
      return;
    } 

    var apiCall = 'https://thesession.org/tunes/popular/' + type + '?format=json&perpage=50&page=' + count;
    console.log('checking the session.org at: ', apiCall);

    $.get(apiCall, function(tunes) {
        console.log('got', tunes);
        this.setState({
          tunes: this.state.tunes.concat(tunes.tunes),
          pagesFetched: count
        });
        this.getTunes(count+1, max, type);
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
      //Could have used Object.assign
      var tunesForFigures = $.extend({}, this.state.tunesForFigures);
      if (!this.state.tunesForFigures[e.data.figure._id]) {
        tunesForFigures[e.data.figure._id] = [];
      }
      this.setState({
        loadingData: true,
        tunes: [],
        tunesForFigures: tunesForFigures,
        page: 'tunelist',
        selectedFigure: e.data.figure
      });
      this.getTunes(1, 5, e.data.figure.type);
    } else if (e.data.event === 'selectTune') {
      var tunesForFigures = $.extend({}, this.state.tunesForFigures);
      tunesForFigures[this.state.selectedFigure._id].push(e.data.tune);
      this.setState({
        selectedTunes: this.state.selectedTunes.concat([e.data.tune]),
        tunesForFigures: tunesForFigures
      });
    }
  }

  render() {
    return (<div>
        <div onClick={this.changePage.bind(this)}>
          <Nav />
        </div>
        <div onClick={this.clickEvent.bind(this)}>
          <PageRender 
            tunesForFigures={this.state.tunesForFigures} 
            loadingData={this.state.loadingData} 
            selectedTunes={this.state.selectedTunes} 
            selectedDance={this.state.selectedDance} 
            selectedFigure={this.state.selectedFigure} 
            page={this.state.page} 
            figures={this.state.figures} 
            dances={this.state.dances} 
            tunes={this.state.tunes} 
          />
        </div>
      </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

