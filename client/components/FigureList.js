class FigureList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.selectedDance) {
      return (<div>Please select a dance first</div>);
    } else {
      return (<div className="figure-list">
        {this.props.figures.map(function(figure, index) { return (<Figure key={index} figure={figure} />); }.bind(this))}
        </div>);
    }
  }
}

window.FigureList = FigureList;

