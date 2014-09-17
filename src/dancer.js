// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>'); // span node
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
  this.step();
};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function(offset) {
  this.setPosition(offset * 50 + 100 + 'px','50px');
};

Dancer.prototype.findNearestNeighbor = function () {

  var minDistance = undefined,
      index = 0;

  var mousedDancer = {
    top: this.$node.css('top'),
    left: this.$node.css('left')
  }

  var computeDistance = function(a,b) {
    var height = Math.abs(parseInt(a.top) - parseInt(b.top));
    var width = Math.abs(parseInt(a.left) - parseInt(b.left));
    var distance = Math.sqrt( Math.pow(height, 2) + Math.pow(width, 2) );

    return parseInt(distance);
  };

  for ( var i = 0, len = window.dancers.length; i < len; i++ ) {
    var current = window.dancers[i];
    var currentDancer = { top: current.$node.css('top'), left: current.$node.css('left') };

    // skip if current points to the source dancer object
    if (current === this) { continue; }

    var distance = computeDistance(mousedDancer, currentDancer);

    if (minDistance === undefined || minDistance > distance) {
      minDistance = distance;
      index = i;
    }
  }

  return index;
};
