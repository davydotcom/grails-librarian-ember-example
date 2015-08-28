package grails.librarian.ember.example

class Book {
	static belongsTo = [author: Author]

	String title
	String description
	Date publishDate
	String category
	String isbn

    static constraints = {
    	isbn nullable:true
    	category nullable:true
    	publishDate nullable:true
    }
}
