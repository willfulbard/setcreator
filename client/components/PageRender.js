class PageRender extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    switch(this.props.page) {
      case 'figurelist':
        return (<FigureList figures={this.props.figures} selectedDance={this.props.selectedDance} />);
      case 'tunelist':
        return (<TuneList tunesForFigures={this.props.tunesForFigures} tunes={this.props.tunes} selectedFigure={this.props.selectedFigure} selectedTunes={this.props.selectedTunes} loadingData={this.props.loadingData} />);
      default:
        return (<DanceList dances={this.props.dances} />);
    }
  }
}

window.PageRender = PageRender;

