$(document).ready(function(){
  window.dancers = [];

  $('.lineUpButton').on('click', function () {

    for ( var i = 0, len = window.dancers.length; i < len; i++ ) {

      window.dancers[i].lineUp(i);
    }
  });

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    $('body').append(dancer.$node);
    window.dancers.push(dancer);

    dancer.$node.on('mouseover', function () {
      var index = Dancer.prototype.findNearestNeighbor.call(dancer);
      var theDancer = window.dancers[index];
      var temp = { top: dancer.$node.css('top'), left: dancer.$node.css('left') };
      theDancer.$node.animate(temp);
      dancer.$node.animate({ top: theDancer.$node.css('top'), left: theDancer.$node.css('left') });
    });
  });
});

