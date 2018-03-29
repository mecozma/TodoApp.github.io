var TodoItemsView = Backbone.View.extend({
    // the tagName and the id are specified in render instead
    // tagName: 'ul',
    // id: 'todoItems',
    id: 'todoItemsContainer',
    initialize: function (options) {
        if (!(options && options.model)) {
            throw new Error('Model not specfied');
        }
        this.model.on('add', this.onAddTodoItem, this);
        this.model.on('remove', this.onRemoveTodoItem, this);
    },
    onAddTodoItem: function (todoItem) {
        var view = new TodoItemView({ model: todoItem });
        // this.$el.append(view.render().$el);
        this.$('#todoItems').append(view.render().$el);
        console.log("Added");
    },
    onRemoveTodoItem: function (todoItem) {
        this.$('li#' + todoItem.id).remove();
    },
    events: {
        //This event is no needed anymore ad the Add button has been removed
        // 'click #add': 'onClickAdd',
        'keypress #newTodoItem': 'onKeyPress'
    },
    onKeyPress: function (e) {
        if (e.keyCode == 13) {
            //The below call is no needed anymore as the onClickAdd method
            // has been deleted and the code has been transfered in this method
            // this.onClickAdd();
            var $textBox = this.$('#newTodoItem');

            if ($textBox.val()) {
                var todoItem = new TodoItem({ title: $textBox.val() });
                // The Create method combines the functons commented below
                this.model.create(todoItem);

                // todoItem.save();
                // this.model.add(todoItem);

                $textBox.val('');

            }
            console.log('Enter pressed');
        }
    },
    // onClickAdd: function () {
    //     var $textBox = this.$('#newTodoItem');
    //     if ($textBox.val()) {
    //         var todoItem = new TodoItem({ title: $textBox.val() });
    //         // The Create method combines the functons commented below
    //         this.model.create(todoItem);

    //         // todoItem.save();
    //         // this.model.add(todoItem);

    //         $textBox.val('');
    //         console.log('Click');
    //     }
    // },
    render: function () {

        //The code below has been replaced by a template
        // this.$el.append('<input type="text" autofocus id="newTodoItem"></input>');
        // this.$el.append('<button id="add">Add</button>');
        // this.$el.append('<ul id="todoItems"></ul>');


        // This code is no needed anymore as I am using an API. The below code is usefull 
        //only when a static collection is used
        // this.model.each(function (todoItem) {
        //     var view = new TodoItemView({ model: todoItem });
        //     this.$el.append(view.render().$el);
        // }, this);

        var template = _.template($('#todoItemsTemplate').html());
        var html = template(this.model.toJSON());
        this.$el.html(html);

        return this;

    }
}); 