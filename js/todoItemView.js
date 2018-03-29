var TodoItemView = Backbone.View.extend({
    tagName: 'li',
    initialize: function(options) {
        if(!(options && options.model)) {
            throw new Error('Model is not specified');

        }
        this.model.on('change', this.render, this);
    },
    events: {
        'click #toggle': 'onClickToggle',
        'click #delete': 'onClickDelete'
    },
    onClickToggle: function() {
        // if (this.model.get('isCompleted')) {
        //     this.model.set('isCompleted', false);
        // } else {
        //     this.model.set('isCompleted', true);
        // }
        this.model.toggle();
        this.model.save();
        console.log(this.model.toJSON());
    },
    onClickDelete() {
        this.model.destroy();
    },
    render: function() {
        this.$el.attr('id', this.model.id);
        this.$el.toggleClass('completed', this.model.get('completed'));

        var checked = this.model.get('completed') ? 'checked' : "";
        this.$el.html('<input id="toggle" type="checkbox"' + checked + '></input>' + this.model.escape('title') + '<button id="delete">Delete</button>');
        return this;
    }
});