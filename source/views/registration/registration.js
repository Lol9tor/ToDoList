;RAD.view("view.registration", RAD.Blanks.View.extend({
    url: 'source/views/registration/registration.html',
    events : {
        'click #auth': 'signIn',
        'click #create': 'signUp'
    },
    onInitialize: function () {
        "use strict";
        this.user = new Parse.User();
    },
    onEndDetach: function () {
        this.renderRequest = true;
    },
    signIn: function () {
        var self = this;
        Parse.User.logIn(this.getLogin(),this.getPassword(), {
            success: function (user) {
                var options = {
                    container_id: '#screen',
                    content: "view.toDoList",
                    animation: 'slide',
                    extras: {
                    }
                };
                self.publish('navigation.show', options);
                RAD.model('itemCollection').refresh();
            },
            error: function (user, error) {
                console.log(error, 'ERROR!!!');
            }
        })
    },
    signUp: function () {
        var self = this;
        this.user.set("username", this.getLogin());
        this.user.set("password", this.getPassword());
        this.user.signUp(null, {
            success: function(user) {

                var options = {
                    container_id: '#screen',
                    content: "view.toDoList",
                    animation: 'slide',
                    extras: {

                    }
                };
                self.publish('navigation.show', options)

            },
            error: function(user, error) {
                console.log(error, 'ERROR!!!');
            }
        });
    },
    getLogin: function () {
        return $('#login').val();
    },
    getPassword: function () {
        return $('#password').val();
    }

}));
