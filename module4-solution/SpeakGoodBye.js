(function (window) {

  var byeSpeaker = {};

  var speakWord = "Goodbye";

  byeSpeaker.speak =  function (name) {
    console.log(speakWord + " " + name);
  }

  this.byeSpeaker = byeSpeaker;

})(window);
