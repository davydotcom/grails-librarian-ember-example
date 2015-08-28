class UrlMappings {

    static mappings = {
        "/books"(resources: 'book')
        "/authors"(resources: 'author')

        "/"(view:"/index")
        "500"(view:'/error')
        "404"(view:'/notFound')
    }
}
