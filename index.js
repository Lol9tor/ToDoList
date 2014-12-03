;(function (document, window) {
    'use strict';
    Parse.initialize("A0A7449lb8CjjR9u8trUqp7OGOeDInAGiTqZ8jcD", "doqV11X4JzNbmeCh3vCyZQdkJINkFKy43AyY0W9s");
    var scripts = [
        "source/application/application.js",
        "source/models/itemModel.js",
        "source/collections/itemCollection.js",

        "source/views/registration/registration.js",
        "source/views/toDoList/toDoList.js",
        "source/views/error/error.js"
    ];

    function onEndLoad() {

        var core = window.RAD.core,
            application = window.RAD.application,
            coreOptions = {
                defaultBackstack: false,
                defaultAnimation: 'slide',
                animationTimeout: 3000,
                debug: false
            };
        //initialize core by new application object
        core.initialize(application, coreOptions);
        //start
        application.start();
    }

    window.RAD.scriptLoader.loadScripts(scripts, onEndLoad);
}(document, window));
