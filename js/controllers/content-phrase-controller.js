app.controller('ContentPhraseController', ['$rootScope', function($rootScope){
    $rootScope.session = 'active';
    console.log("Phrase Session = "+$rootScope.session);

    var self = this;
    self.contentType = "phrase";
    self.title = "Content Phrase";
    self.askCaption = "Phrase Ask:";
    self.answerCaption = "Phrase Answer:";
    self.hrefAddContent = "/content/topics/phrase/register";
    self.hrefListContent = "/content/topics/phrase/list";
    self.hrefRegisterCancel = "/content/topics";

    self.submitContent = function(content){
        console.log(content);
    }

}]);