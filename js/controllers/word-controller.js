app.controller('WordController', ['$rootScope', function($rootScope){
    $rootScope.session = 'active';

    var self = this;

    self.title = "Word";
    $rootScope.title = self.title;
    console.log("Word Title = "+self.title);    

    console.log("Word Session = "+$rootScope.session);
}]);