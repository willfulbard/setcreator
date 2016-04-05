class PageRender extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    switch(this.props.page) {
      case 'figurelist':
        return (<FigureList />);
      case 'tunelist':
        return (<TuneList />);
      default:
        return (<DanceList />);
    }
  }
}

window.PageRender = PageRender;

