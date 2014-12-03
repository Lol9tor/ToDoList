;RAD.view("view.toDoList", RAD.Blanks.View.extend({
    url: 'source/views/toDoList/toDoList.html',
    events : {
        'click #back': 'returnBack',
        'click #addItem': 'addItem',
        'click .delete': 'deleteItem',
        'change input[type="checkbox"]': 'changeStatusItem'
    },
    onInitialize: function () {
        "use strict";
        this.model = RAD.model('itemCollection');
    },
    onEndDetach: function () {

    },
    returnBack: function () {
        this.application.logOut();
    },
    addItem: function () {
        var textItem = this.getItem(),
            currUser = Parse.User.current();
        this.model.create({
            content: textItem,
            solved: false,
            user: currUser,
            ACL: new Parse.ACL(currUser)
        });
        this.$('#nameItem').val('');
    },
    deleteItem: function (e) {
        var i = $(e.currentTarget).parents('li').index();
        this.model.at(i).destroy();
    },
    changeStatusItem: function (e) {
        var i = e.currentTarget.getAttribute('data-index');
        var checkedItem = this.model.at(i);
        checkedItem.set({solved: !checkedItem.get('solved')});
        checkedItem.save();
    },
    getItem: function () {
        return this.$('#nameItem').val()
    }
}));

