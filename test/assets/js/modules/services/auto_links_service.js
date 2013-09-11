define(['jquery', 'services/auto_links_service'], function ($, links) {

  describe('Auto Links service', function(){

    beforeEach(function(){
      $('body').append('<a href="/test" id="test-link">Link</a>');
      $('body').append('<a href="/test" id="bypass-link" data-bypass>Link</a>');
    });

    it('hijacks the click and triggers the navigate', function(done){
      var stub = {navigate: function (path) {
        assert.equal(path, '/test');
        done();
      }};
      links.enable(stub);
      $('#test-link').click();
    });

    it('bypass links with data-bypass', function(){
      links.enable();
      $('#bypass-link').click();
      assert(true);
    });

  });

});
