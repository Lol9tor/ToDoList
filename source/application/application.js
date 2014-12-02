;RAD.application({
    start: function () {
        var options = {
            container_id: '#screen',
            content: "view.registration",
            animation: 'none'
        };
        RAD.core.publish('navigation.show', options);
    },
    logOut: function () {
        RAD.core.publish('navigation.show', {
            container_id: '#screen',
            content: 'view.registration'
        });
        Parse.User.logOut();
        RAD.model('itemCollection').reset();
    },
    showError: function (title, msg) {
        var options = {
            content: "view.error",
            animation: 'fade',
            extras: {
                title: title,
                msg: msg
            }
        };
        RAD.core.publish('navigation.dialog.show', options);
    }
});
