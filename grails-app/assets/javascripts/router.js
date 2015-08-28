Librarian.Router.extend({
  rootURL: '/'
});

Librarian.Router.map(function() {
	this.route('books', {path:'/'}, function() {
		this.route('new', {path: '/new'});
	});
	this.route('authors', {path:'/authors'}, function() {
		this.route('new', {path: '/new'});
	});
});