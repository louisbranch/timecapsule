define(['services/services'], function (services) {

  describe('Services loader', function(){

    it('serves every service to mediator', function(){
      var served = {};
      var stub = {serve: function (name, service) {
        served[name] = service;
      }};
      services.load(stub);
      assert.deepEqual(Object.keys(served),
                       ['color', 'dates', 'autoLinks']);
    });

  });

});
