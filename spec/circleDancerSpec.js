describe("circleDancer", function() {

  var spinDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    circleDancer = new CircleDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(circleDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(circleDancer.$node, 'addClass');
    circleDancer.step();
    expect(circleDancer.$node.addClass.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(circleDancer, "step");
      expect(circleDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(circleDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(circleDancer.step.callCount).to.be.equal(2);
    });
  });
});
