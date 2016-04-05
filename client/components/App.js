class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'index',
      dance: {name: 'selected dance'},
      figure: {name: 'selected figure'},
      selectedTunes: [], //For tunes that have been selected so they are filtered
      tunesForFigures: {} //Mapping of tune selections to figures
    };
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
        <PageRender page={this.state.page} />
      </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

