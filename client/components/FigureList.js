class FigureList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('Render Figures', this.props);
    if (!this.props.selectedDance) {
      return (<div>Please select a dance first</div>);
    } else {
      return (<div className="figure-list">
        {this.props.figures
          .filter(function(figure) {
            return figure._dance === this.props.selectedDance._id;
          }, this)
          .map(function(figure, index) { 
            return (<Figure key={index} figure={figure} />); 
          }, this)}
        </div>);
    }
  }
}

window.FigureList = FigureList;

