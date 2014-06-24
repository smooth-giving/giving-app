(function() {
    require.config({
        baseUrl: "js/libs",

        shim: {
            angular: {
                exports: "angular"
            },
            angularRoute: {
                deps: ["angular"],
                exports: "angular"
            },
            ngResource: {
                deps: ["angular"],
                exports: "angular"
            }
        },

        map: {},

        paths: {
            "hbs":"hbs/hbs",

            "app":"../app"
        },

        require(["app"], function(app) {
            app.init();
        });
    });


}());