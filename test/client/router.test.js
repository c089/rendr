var App, Backbone, BaseView, Router, should, routerConfig;

Backbone = require('backbone');
should = require('chai').should();

App = require('../../shared/app');
BaseView = require('../../shared/base/view');
Router = require('../../client/router');

routerConfig = {
  app: new App,
  paths: {
    entryPath: __dirname + "/../fixtures"
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
