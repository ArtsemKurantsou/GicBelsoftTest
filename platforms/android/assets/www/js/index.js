var goToAutorAbout = function () {
    window.location.href = "autor_about.html";
}

var app = {
    WEB_CLIENT_ID: "1044746968761-if6ugqtu5roh2lvmjvlddilmfahqafir.apps.googleusercontent.com",
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function () {
        document.getElementById("btn-login").addEventListener("click", this.login);
    },
    login: function () {
        window.plugins.googleplus.login({
                'scopes': 'profile',
                'webClientId': this.WEB_CLIENT_ID,
                'offline': true
            },
            function (obj) {
                //alert("OK");
                goToAutorAbout();
            }
        );
    }
};

app.initialize();
