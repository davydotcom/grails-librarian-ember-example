// This is a manifest file that'll be compiled into application.js.
//
// Any JavaScript file within this directory can be referenced here using a relative path.
//
// You're free to add application-wide JavaScript to this file, but it's generally better 
// to create separate JavaScript files as needed.
//
//= require jquery-2.1.3.js
//= require handlebars-runtime
//= require ember
//= require ember-data
//= require_self
//= require_tree .


Librarian = Ember.Application.create();

// Override the default adapter with the `DS.ActiveModelAdapter` which

// Librarian.ApplicationAdapter = DS.ActiveModelAdapter.extend({
// });
Librarian.ApplicationAdapter = DS.RESTAdapter.extend({});

// Librarian.ApplicationSerializer = DS.ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {});