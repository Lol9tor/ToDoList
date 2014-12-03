RAD.model('itemCollection', Parse.Collection.extend({
    model : RAD.model('itemModel'),
    query : new Parse.Query(RAD.model('itemModel')),
    initialize : function (){
        this.refresh();
    },
    refreshQuery : function () {
        this.query = new Parse.Query(RAD.model('itemModel'));
        this.query.equalTo('user', Parse.User.current());
    },
    refresh: function () {
        this.refreshQuery();
        this.fetch();
    },
    getSolved: function () {
        //this.refreshQuery();
        var query = new Parse.Query(RAD.model('itemModel'));
        query.equalTo('user', Parse.User.current());
        query.equalTo('solved', true);
        query.find({
            success: function(results) {
                console.log(results);
            },
            error: function(error) {
                alert("Error: " + error.code + " " + error.message);
            }
        });
    },
    getItemsFromDate: function (someDate) {
        //this.refreshQuery();
        var query = new Parse.Query(RAD.model('itemModel'));
        query.equalTo('user', Parse.User.current());
        if (someDate){
            var date = new Date(someDate);
        } else {
            date = new Date();
        }
        date.setHours(0);
        console.log(date);
        query.greaterThan('createdAt', date);
        date.setHours(24);
        console.log(date);
        query.lessThan('createdAt', date);
        query.find({
            success: function(results) {
                console.log(results);
            },
            error: function(error) {
                alert("Error: " + error.code + " " + error.message);
            }
        })
    }
}), true);
