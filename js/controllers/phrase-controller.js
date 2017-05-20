app.controller('PhraseController', ['$rootScope', function($rootScope){
    $rootScope.session = 'active';

    var self = this;

    self.title = "Phrase";
    $rootScope.title = self.title;
    console.log("Phrase Title = "+self.title);

    console.log("Phrase Session = "+$rootScope.session);
}]);