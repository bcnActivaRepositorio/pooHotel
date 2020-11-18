// hotal class
"use strict";
var Hotel = /** @class */ (function () {
    // constructor
    function Hotel(nameHotel, numRooms, numFloors, totalSurf) {
        this.nameHotel = nameHotel;
        this.numRooms = numRooms;
        this.numFloors = numFloors;
        this.totalSurf = totalSurf;
    }
    Object.defineProperty(Hotel.prototype, "myName", {
        //setters i getters
        get: function () {
            return this.nameHotel;
        },
        set: function (nameHotel) {
            this.nameHotel = nameHotel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hotel.prototype, "myRooms", {
        get: function () {
            return this.numRooms;
        },
        set: function (numRooms) {
            this.numRooms = numRooms;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hotel.prototype, "myNumFloors", {
        get: function () {
            return this.numFloors;
        },
        set: function (numFloors) {
            this.numFloors = numFloors;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hotel.prototype, "myTotalSurf", {
        get: function () {
            return this.totalSurf;
        },
        set: function (totalSurf) {
            this.totalSurf = totalSurf;
        },
        enumerable: false,
        configurable: true
    });
    //print me
    Hotel.prototype.toString = function () {
        var text;
        text = "The " + this.nameHotel + " Hotel has been added to the database: \n Number of rooms: " + this.numRooms + " \n Floors: " + this.numFloors + " \n Square meters: " + this.totalSurf + " m2  ";
        return text;
    };
    //updated me
    Hotel.prototype.toUpdate = function () {
        var text;
        text = "The " + this.nameHotel + " Hotel has been updated in the database: \n Number of rooms: " + this.numRooms + " \n Floors: " + this.numFloors + " \n Square meters: " + this.totalSurf + " m2  ";
        return text;
    };
    return Hotel;
}());
