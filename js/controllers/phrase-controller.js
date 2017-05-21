app.controller('PhraseController', ['$rootScope', function($rootScope){
    $rootScope.session = 'active';
    console.log("Phrase Session = "+$rootScope.session);

    var self = this;
    self.contentType = "phrase";
    self.title = "Phrase";

    self.submitContent = function(content){
        console.log(content);
    }

}]);