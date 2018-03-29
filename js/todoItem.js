var TodoItem = Backbone.Model.extend({
    defaults: {
        isCompleted: false
    },
    urlRoot: "http://jsonplaceholder.typicode.com/todos",
    validate: function(attrs) {
        if(!attrs.description) {
            return 'Description is required';
        }
    },
    toggle: function() {
        this.set('isCompleted', !this.get('isCompleted'));
    }
});