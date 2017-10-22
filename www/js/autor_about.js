var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function () {
        document.getElementById("btn-logout").addEventListener("click", this.onBtnLogoutClick);
    },

    onBtnLogoutClick: function () {
        window.plugins.googleplus.logout(
            function(obj) {
                document.location.href = "index.html";
            }
        );
    }
};

app.initialize();
