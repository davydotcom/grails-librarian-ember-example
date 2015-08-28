package grails.librarian.ember.example

class Author {
	String firstName
	String lastName
	String middleName

	Date birthDate

	String biography

    Set<Book> books

	static hasMany = [books: Book]

    static constraints = {
    	middleName nullable:true
    	birthDate nullable:true
    	biography nullable:true
    }

    static mapping = {
    	biography type: 'text'
    }
}
