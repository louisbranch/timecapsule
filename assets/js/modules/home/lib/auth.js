define([
  "jquery"
], function (
  $
) {

  return function (mediator) {

    navigator.id.watch({
      onlogin: function (assertion) {
        var req = $.ajax({
          type: "POST",
          url: "/auth/login",
          data: {assertion: assertion}
        });

        req.done(function () {
          mediator.navigate("/letters");
        });

        req.fail(function (xhr, status, err) {
          navigator.id.logout();
          console.log("Login failure: " + err);
        });
      },

      onlogout: function () {

        var req = $.ajax({
          type: "POST",
          url: "/auth/logout"
        });

        req.done(function () {
          mediator.navigate("/");
        });

        req.fail(function (xhr, status, err) {
          console.log("Logout failure: " + err);
        });
      }
    });

    $("#browserid-login").click(function () {
      navigator.id.request();
    });

  };

});
