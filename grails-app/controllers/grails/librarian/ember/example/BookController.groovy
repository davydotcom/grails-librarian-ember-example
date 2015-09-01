package grails.librarian.ember.example

import grails.converters.JSON

class BookController {

    def index() { 
    	def books = Book.withCriteria {
    		order('title','asc')
    	}

    	render view: 'index', model: [books: books]
    }

    def show(Book book) {
        respond book
    }

    def save() {
    	def bookData = request.JSON.book
    	def book = new Book()
    	bindData(book,bookData)

    	if(!book.save(flush:true)) {
    		response.status = 400
    	}
        respond book, view:'show'
    }


    def delete() {
		def book = Book.get(params.long('id'))

		if(!book) {
			response.status = 404
			render([success:false] as JSON)
			return
		}
		render([success:true] as JSON)
    }
}
