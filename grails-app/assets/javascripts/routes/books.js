Librarian.BooksIndexRoute = Ember.Route.extend({
	model: function() {
		return this.store.findAll('book');
	}
})

Librarian.BooksNewRoute = Ember.Route.extend({
	model: function() {
		return this.store.createRecord('book')
	},

	actions: {
		save: function(model) {
			model.save();
			this.transitionTo('books.index');
			return false;
		}
	}
})