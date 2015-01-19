function MyMovie (Name, duration) {
    this.attributes = {
        title: (Name || 'Unknow'),
        duration: (duration || 0)
    };
    this.observers = new ObserverList();
            
    function play() {
    };

    function stop() {
    };

    function set(strName, duration) {
    };

    // Reveal public pointers to
    // private functions and properties
    return {
        playing: play,
        stopped: stop,
        addMovie: set
    };
}
      
MyMovie.prototype = {

    play: function() {
        console.log("Watching " + this.attributes.title);
        myMovie.prototype.addObserver = function (observer) {
            this.observers.add(observer);
        };
    },

    stop: function() {
        console.log("stopping " + this.attributes.title);
        myMovie.prototype.removeObsever = function (observer) {
            this.observers.removeAt(observer);
        };
    },

    set: function(strName, duration) {
        this.attributes.title = strName;
        this.attributes.duration = duration;
        console.log("setting movie " + this.attributes.title);
    },

    get: function (strName) {
        console.log("getting movie " + this.attributes.title);
    }

};


var ironman = new MyMovie('Ironman', 128);
ironman.playing();
ironman.stopped();

var smurf = new MyMovie();
smurf.addMovie('The Smurf', 156);
smurf.playing();
smurf.stopped();



function ObserverList() {
    this.observerList = [];
}

ObserverList.prototype.add = function (obj) {
    return this.observerList.push(obj);
};

ObserverList.prototype.count = function () {
    return this.observerList.length;
};

ObserverList.prototype.get = function (index) {
    if (index > -1 && index < this.observerList.length) {
        return this.observerList[index];
    }
};

ObserverList.prototype.indexOf = function (obj, startIndex) {
    var i = startIndex;

    while (i < this.observerList.length) {
        if (this.observerList[i] === obj) {
            return i;
        }
        i++;
    }

    return -1;
};

ObserverList.prototype.removeAt = function (index) {
    this.observerList.splice(index, 1);
};