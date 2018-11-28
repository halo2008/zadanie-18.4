var movies = [ 
  {
    id: 1,
    title: 'Król Lew',
    descr: 'Lorem ipsum dolor sit amet.',
    src: 'https://e.allegroimg.com/s512/065d6d/2a5dd82c455b9361e0142e3a115e'
  },
  {
    id: 2,
    title: 'Gra o Tron',
    descr: 'Lorem ipsum dolor sit amet.',
    src: 'https://static.audioteka.com/pl/images/products/george-r-r-martin/gra-o-tron-duze.jpg'
  },
  {
    id: 3,
    title: 'Za wscielki',
    descr: 'Lorem ipsum dolor sit amet.',
    src: 'https://image.ceneostatic.pl/data/products/37366022/i-szybcy-i-wscielki-6-blu-ray.jpg'
  }
];


var Movies = React.createClass ({
  propTypes: {
    items: React.PropTypes.array.isRequired,
  },
  render: function() {
    var movies = this.props.items.map(function(movie) {
        return React.createElement(Movie, {item: movie, key: movie.id});
    });
    return (
      React.createElement('ul', {className: 'moviesList'}, movies)
    );
  }
})

var Movie = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function(){
    return (
      React.createElement('li', {className: 'movieItem'},
        React.createElement(MovieTitle, {title: this.props.item.title}),
        React.createElement(MovieDescription, {descr: this.props.item.descr}),
        React.createElement(MovieImage, {image: this.props.item.src})
      )
    )
  },
})

var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },
  render: function(){
    return (
      React.createElement('h2',{className: 'header'}, this.props.title)
    )
  },
})

var MovieDescription = React.createClass({
  propTypes:{
    descr: React.PropTypes.string.isRequired,
  },
  render: function(){
    return(
      React.createElement('p', {className: 'paragraph'}, this.props.descr)
    )
  },
})

var MovieImage = React.createClass({
  propTypes:{
    image: React.PropTypes.string.isRequired,
  },
  render: function(){
    return(
       React.createElement('img',{src: this.props.image},)
    )
  },
})

var App = React.createClass({
  render: function(){
    return (
      React.createElement('div', {className: 'app'},
        React.createElement(Movies, {items: movies}, {})
      )
    );
  }
})

var app = React.createElement(App);
ReactDOM.render(app, document.getElementById('app'));