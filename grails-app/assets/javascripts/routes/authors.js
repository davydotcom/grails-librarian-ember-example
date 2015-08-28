Librarian.AuthorsIndexRoute = Ember.Route.extend({
	model: function() {
		return this.store.findAll('author');
	}
})

Librarian.AuthorsNewRoute = Ember.Route.extend({
	model: function() {
		return this.store.createRecord('author')
	},

	actions: {
		save: function(model) {
			model.save();
			this.transitionTo('authors.index');
			return false;
		}
	}
})