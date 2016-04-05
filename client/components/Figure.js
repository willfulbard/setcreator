class Figure extends React.Component {
  constructor(props) {
    super(props);
  }

  selectFigure(e) {
    console.log('figure selected', e);
    e.data = {};
    e.data.figure = this.props.figure;
    e.data.event = 'selectFigure';
  }

  render() {
    return (<div className="clickable" onClick={this.selectFigure.bind(this)}>{this.props.figure.name}</div>);
  }
}

window.Figure = Figure;

