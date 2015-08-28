Librarian.Book = DS.Model.extend({
	title: DS.attr(),
	description: DS.attr(),
	publishDate: DS.attr('date'),
	category: DS.attr('string'),
	isbn: DS.attr('string'),
	author: DS.belongsTo('author')
});