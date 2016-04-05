class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'index',
      selectedDance: {name: 'selected dance'},
      selectedFigure: {name: 'selected figure'},
      selectedTunes: [], //For tunes that have been selected so they are filtered
      tunesForFigures: {}, //Mapping of tune selections to figures
      dances: []
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

  render() {
    return (<div onClick={this.changePage.bind(this)}>
        <Nav />
        <PageRender page={this.state.page} dances={this.state.dances} />
      </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

