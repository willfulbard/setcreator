class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'index'
    };
  }

  render() {
    return (<div>This is something</div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

