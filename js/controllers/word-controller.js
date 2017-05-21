app.controller('WordController', ['$rootScope', function($rootScope){
    $rootScope.session = 'active';
    console.log("Word Session = "+$rootScope.session);

    var self = this;
    self.contentType = "word";
    self.title = "Word";

    self.submitContent = function(content){
        console.log(content);
    }

}]);