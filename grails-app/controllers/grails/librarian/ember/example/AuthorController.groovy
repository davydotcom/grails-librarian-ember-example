package grails.librarian.ember.example

import grails.converters.JSON

class AuthorController {

    def index() { 
    	def authors = Author.withCriteria {
    		order('lastName','asc')
    		order('firstName','asc')
    	}

    	render view: 'index', model: [authors: authors]
    }

    def show( Author author ) {
    	respond author
    }

    def save() {
    	def authorData = request.JSON.author
    	def author = new Author()
    	bindData(author,authorData)

    	if(!author.save(flush:true)) {
    		response.status = 400
    	}

        respond author, view:'show'
    }


    def delete() {
		def author = Author.get(params.long('id'))

		if(!author) {
			response.status = 404
			render([success:false] as JSON)
			return
		}
		render([success:true] as JSON)
    }
}
