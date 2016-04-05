class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'index'
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

