
function doLogin() {
    var loginButton = document.getElementById("login_button");
    var e = document.createEvent('MouseEvent');
    e.initEvent('click', false, false);
    loginButton.dispatchEvent(e);
}

doLogin();
