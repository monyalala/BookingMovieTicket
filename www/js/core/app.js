var App = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        MovieModel.set();
        MovieController.get();        
        MovieTicketModel.set();
    }
};

App.initialize();