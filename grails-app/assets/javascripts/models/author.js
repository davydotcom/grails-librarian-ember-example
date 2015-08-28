Librarian.Author = DS.Model.extend({
	firstName: DS.attr(),
	lastName: DS.attr(),
	middleName: DS.attr(),
	biography: DS.attr(),
	birthDate: DS.attr('date'),
	books: DS.hasMany('book')
});