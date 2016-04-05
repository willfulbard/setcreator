class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'index'
    };
  }

  render() {
    return (<div>
        <Nav />
        <PageRender page={this.state.page} />
      </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

