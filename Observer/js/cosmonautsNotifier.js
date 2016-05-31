var CosmonautsNotifier = function () {
    this.cosmonauts = [];

    this.add = function (cosmonaut) {
        this.cosmonauts.push(cosmonaut);
    };
    this.remove = function (cosmonaut) {
        this.cosmonauts.splice(this.indexOf(cosmonaut), 1);
    };
    this.indexOf = function (cosmonaut) {
        var len = this.cosmonauts.length,
            index = 0;
        for(; index < len; index++) {
            if(this.cosmonauts[index].name === cosmonaut.name && this.cosmonauts[index].surname === cosmonaut.surname) {
                return index;
            }
        }
        return -1;
    };

    this.notify = function (data) {
        this.cosmonauts.forEach(function (item) {
            item.update(data);
        })
    };
};
CosmonautsNotifier.prototype = new IObservable();