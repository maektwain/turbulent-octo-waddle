define(['Q', 'underscore', 'mifosX'], function (Q) {
    var components = {
        models: [
            'models.2e43e416'
        ],
        services: [
            'ResourceFactoryProvider',
            'HttpServiceProvider',
            'AuthenticationService',
            'SessionManager',
            'Paginator',
            'UIConfigService'
        ],
        controllers: [
            'controllers.6fdda96f'
        ],
        filters: [
            'filters.fa2ac2a1'
        ],
        directives: [
            'directives.db66a5b7'
        ]
    };

    return function() {
        var defer = Q.defer();
        require(_.reduce(_.keys(components), function (list, group) {
            return list.concat(_.map(components[group], function (name) {
                return group + "/" + name;
            }));
        }, [
            'routes-initialTasks-webstorage-configuration.629d0bcd'
        ]), function(){
            defer.resolve();
        });
        return defer.promise;
    }
});
