class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.pages = [
      {name: 'Dances', page: 'dancelist'},
      {name: 'Figures', page: 'figurelist'},
      {name: 'Tunes', page: 'tunelist'}
    ];
  }

  render() {
    return (
        <div className="nav">
          <ul>
          {this.pages.map(function (page, index) { return (<li key={index}><NavEntry page={page} /></li>); })}
          </ul>
        </div>);
  }
}

window.Nav = Nav;
