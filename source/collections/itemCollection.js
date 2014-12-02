RAD.model('itemCollection', Parse.Collection.extend({
    model : RAD.model('itemModel'),
    query : new Parse.Query(RAD.model('itemModel')),
    initialize : function (){
        this.refresh();
    },
    refresh: function () {
        this.query.equalTo('user', Parse.User.current());
        this.fetch();
    },
    getSolved: function () {

    }
}), true);
