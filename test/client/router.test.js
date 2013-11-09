var Backbone, Router, should, routerConfig;

Backbone = require('backbone');
should = require('chai').should();
Router = require('../../client/router');

routerConfig = {
  app: new Backbone.Model(),
  paths: {
    entryPath: "./test/fixtures"
  }

};

describe("client/router", function() {

  beforeEach(function() {
    this.router = new Router(routerConfig);
  });

  describe('getRenderCallback', function(){
    it("should trigger a router:error on the application", function(done) {
      this.router.on("action:error", function(err, route){
        err.should.have.property('status', 401);
        route.should.equal("myRoute")
        done();
      });

      var routeCallback = this.router.getRenderCallback("myRoute");
      routeCallback({status: 401}, null, null);
    });
  });

});
