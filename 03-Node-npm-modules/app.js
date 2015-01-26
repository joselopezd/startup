(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function MyMovie(Name, duration) {
    this.attributes = {
        title: (Name || 'Unknow'),
        duration: (duration || 0)
    };
    this.observers = new ObserverList();
    this.actors = [];

    function play() {
    };

    function stop() {
    };

    function set(strName, duration) {
    };

    function download(strName) {
    };

    // Reveal public pointers to
    // private functions and properties
    return {
        playing: play,
        stopped: stop,
        addMovie: set,
        downloading: download
    };
};
      
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
    },

    DownloadableMovie: function (strName) {
        MyMovie.prototype.download(strName);
        console.log("downloading " + this.attributes.title);
    },

    addActor: function (actor) {
        this.actors.push(actor);
        console.log("adding actor");
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


var Social = function () { };

Social.prototype = {

    share: function (friendName) {
        console.log("Sharing with " + friendName);
    },

    like: function () {
        console.log("I like it");
    }
};

function Actor(name) {
    this.name = name;
}
},{}],2:[function(require,module,exports){
// Load modules
var Movie = require('./Movie.js');
},{"./Movie.js":1}]},{},[2]);
