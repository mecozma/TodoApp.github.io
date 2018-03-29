var TodoItemsView = Backbone.View.extend({
    tagName: 'ul',
    id: 'todoItems',
    initialize: function (options) {
        if (!(options && options.model)) {
            throw new Error('Model not specfied');
        }
        this.model.on('add', this.onAddTodoItem, this);
        this.model.on('remove', this.onRemoveTodoItem, this);
    },
    onAddTodoItem: function (todoItem) {
        var view = new TodoItemView({ model: todoItem });
        this.$el.append(view.render().$el);
        console.log("Added");
    },
    onRemoveTodoItem: function(todoItem) {
        this.$('li#' + todoItem.id).remove();
    },
    events: {
        'click #add': 'onClickAdd',
        'keypress #newTodoItem': 'onKeyPress'
    },
    onKeyPress: function (e) {
        if (e.keyCode == 13) {
            this.onClickAdd();
            console.log('Enter pressed');
        }
    },
    onClickAdd: function () {
        var $textBox = this.$('#newTodoItem');
        if ($textBox.val()) {
            var todoItem = new TodoItem({ title: $textBox.val() });
            // The Create method combines the functons commented below
            this.model.create(todoItem);

            // todoItem.save();
            // this.model.add(todoItem);

            $textBox.val('');
            console.log('Click');
        }
    },
    render: function () {

        this.$el.append('<input type="text" autofocus id="newTodoItem"></input>');
        this.$el.append('<button id="add">Add</button>');

        this.model.each(function (todoItem) {
            var view = new TodoItemView({ model: todoItem });
            this.$el.append(view.render().$el);
        }, this);
        return this;
    }
}); 