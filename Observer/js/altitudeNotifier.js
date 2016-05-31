var AltitudeNotifier = function (speed, airResistance, container) {
    this.cosmonauts = [];
    this.speed = speed;
    this.airResistance = airResistance;
    this.altitude = 0;
    this.currentAltitude = 0;

    this.STATUS_UPDATE_INTERVAL_MS = 500;
    this.STEP_TO_NOTIFY = 500;

    this.step = this.speed / this.airResistance;
    
    this.start = function () {
        var _self = this;
        setInterval(function () {
            _self.altitude += _self.step;
            _self.currentAltitude += _self.step;
            _self.updateView();

            if(_self.currentAltitude > _self.STEP_TO_NOTIFY) {
                _self.currentAltitude = 0;
                console.log("---------------------------------------------------");
                _self.notify(_self.altitude);
                console.log("---------------------------------------------------\n");

            }
        }, _self.STATUS_UPDATE_INTERVAL_MS);
    };

    this.updateView = function () {
        document.querySelector(container).style.left = this.altitude + "px";
    };
};
AltitudeNotifier.prototype = new CosmonautsNotifier();
