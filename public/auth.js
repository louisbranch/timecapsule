;(function () {

  navigator.id.watch({
    onlogin: function (assertion) { },
    onlogout: function () { }
  });

  var login = document.getElementById("browserid-login");
  if (login) {
    login.addEventListener("click", function () {
      console.log("clicked");
      navigator.id.request();
    });
  }

  var logout = document.getElementById("browserid-logout");
  if (logout) {
    logout.addEventListener("click", function () {
      navigator.id.logout();
    });
  }

}());
