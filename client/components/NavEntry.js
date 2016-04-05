class NavEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  changePage(e) {
    console.log('Change Page NavEntry');
    e.data = this.props.page;
  }

  render() {
    return (<a onClick={this.changePage.bind(this)}>{this.props.page.name}</a>);
  }
}

window.NavEntry = NavEntry;

