$(document).ready(function() {
    var todoItems = new TodoItems();
    todoItems.fetch();
    
     var todoItemsView = new TodoItemsView({model: todoItems});

    $('body').append(todoItemsView.render().$el);
    // //test to see if the model works
    // var todoItem = new TodoItem ({description: 'TodoItem 1'});
    // var todoItemView = new TodoItemView({model: todoItem});
    // $('body').append(todoItemView.render().$el);
});