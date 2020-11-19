//one ring to rule them all
"use strict";
document.getElementById('boton1').addEventListener('click', buildHotel);
document.getElementById('boton2').addEventListener('click', lookUp);
document.getElementById('boton3').addEventListener('click', modifyMe);
document.getElementById('boton4').addEventListener('click', nuriaKasparov);
document.getElementById('boton5').addEventListener('click', clearMe);
// write me
var writeMe = document.querySelector('#answerMe');
// I repeated you way too many times
var nameHotel;
// same as car
var hotel;
var hotel2;
var hotel3;
var hotel4;
var hotel5;
//array
var arrHotel = [];
//you won't lie!
var ruler;
//some for me
var hotel2 = new Hotel("Hilton", 25, 2, 650);
var hotel3 = new Hotel("Vela", 25, 2, 650);
var hotel4 = new Hotel("H5", 25, 2, 650);
var hotel5 = new Hotel("Mandarin", 25, 2, 650);
(arrHotel).push(hotel2);
(arrHotel).push(hotel3);
(arrHotel).push(hotel4);
(arrHotel).push(hotel5);
console.log(arrHotel);
//check my array
function checkHotels(str) {
    //you'll tell me the true
    var noCheat = false;
    //iterate over me
    for (var _i = 0, arrHotel_1 = arrHotel; _i < arrHotel_1.length; _i++) {
        var hostel = arrHotel_1[_i];
        //if you find me
        if (hostel.nameHotel == str) {
            // you won't lie to me
            noCheat = true;
        }
        // don't be shy
        console.log("%c" + noCheat, "color: #b30000");
    }
    //come back to me
    return noCheat;
}
// N of A
//sin duda implementaré Nuria Kasparov check por su versatilidad, pero esto es lo que he hecho SIN mirar
// a comparar con lo hecho en Junio pls
/* function nuriaCheck(str: string){
    // a true friend
    let found: boolean = false;
    // the runner
    let i: number = 0;
    // you really need to learn THIS
    while( found == false && i < arrHotel.length){
        // iterate with index as referee
        (arrHotel[i].nameHotel == str) ? found = true : i++;
    }
    console.log(arrHotel[i]);
    return arrHotel[i];
} */
// CREATE
function buildHotel() {
    // clean
    clearMe();
    // give me data
    nameHotel = myName();
    var numRooms = parseInt(document.getElementById('hotelRooms').value);
    var numFloors = parseInt(document.getElementById('hotelFloors').value);
    var totalSurf = parseInt(document.getElementById('hotelSurf').value);
    //check me
    ruler = checkHotels(nameHotel);
    // push me if true if not tell me the true
    (ruler == true) ? writeMe.innerText = (nameHotel + " Hotel already in Database") : arrHotel.push(hotel = new Hotel(nameHotel, numRooms, numFloors, totalSurf));
    //print me
    if (ruler == false) {
        // alert( ` ${hotel.nameHotel}'s hotel: \n ${hotel.numRooms} rooms \n ${hotel.numFloors} floors \n ${hotel.totalSurf}m2 \n`);
        writeMe.innerText = hotel.toString();
    }
}
// DELETE
function nuriaKasparov() {
    // clean
    clearMe();
    // get the name
    var str = myName();
    // a true friend
    var found = false;
    // breadcrums to follow
    var i = 0;
    // you really need to learn THIS
    while (!found && i < arrHotel.length) {
        // iterate with index as referee
        if (arrHotel[i].nameHotel === str) {
            //we change the true teller to make it jump out the iteration
            found = true;
            //katana time
            arrHotel.splice(i, 1);
            //write me
            writeMe.innerText = "The " + str + " Hotel is not longer in the database";
        }
        // you keep the count
        i++;
    }
    // if not
    if (found == false) {
        // I want to see it
        writeMe.innerText = str + " is not one of our Hotels";
    }
}
// CHECK ME
function lookUp() {
    //clean 
    clearMe();
    //get me the name
    nameHotel = myName();
    //check me
    ruler = checkHotels(nameHotel);
    //do something you fool
    (ruler == true) ? writeMe.innerText = (nameHotel + " already in Database") :
        writeMe.innerText = nameHotel + " is not one of our Hotels";
}
// MODIFY
function modifyMe() {
    // clean
    clearMe();
    //get me the name
    nameHotel = myName();
    // really George?
    var myCheck = firstCheck();
    // a true friend
    var found = false;
    // and my lighthouse
    var i = 0;
    // and my swiss companion
    var choice = 0;
    // container
    var container;
    //so you are the one
    if (myCheck === 1) {
        //let's do this
        (console.log("modify really works"));
        // nasdrovia kasparov Nuria
        while (!found && i < arrHotel.length) {
            //iterate
            if (arrHotel[i].nameHotel === nameHotel) {
                // a real tale
                found = true;
                // I need you conatined
                container = arrHotel[i];
                // and again, show me your real numbers
                choice = parseInt(prompt("The " + nameHotel + " Hotel has been found: What would you like to change? \n Name: PRESS 1 \n Rooms: PRESS 2 \n Floors: PRESS 3 \n m2 surface: PRESS 4"));
            }
            //I'll follow you til the end of days
            i++;
        }
        // I welcome you old friend
        switch (choice) {
            case 1:
                container.nameHotel = prompt(" What name would you like for your hotel?");
                container.nameHotel = polishName(container.nameHotel);
                break;
            case 2:
                container.numRooms = parseInt(prompt("Number of rooms?"));
                break;
            case 3:
                container.numFloors = parseInt(prompt("Number of floors?"));
                break;
            case 4:
                container.totalSurf = parseInt(prompt("m2?"));
                break;
            default:
                alert("Something went really wrong you fool");
                break;
        }
    }
    // you and your weird election of conditionals
    (choice <= 4) ? writeMe.innerText = "" + container.toUpdate() : writeMe.innerText = "This is all wrong you fool!";
}
// AUX FUNCTIONS
//clear
function clearMe() {
    writeMe.innerText = "";
    // Joan will hate me for this
    document.querySelector(".form-control").innerText = "";
}
//get me name
function myName() {
    // where should we meet?
    nameHotel = document.getElementById('hotelName').value;
    //you watch their behaviour
    var counter = 0;
    //first check
    while (nameHotel == "" && counter < 3) {
        nameHotel = prompt("Emptyness is not a name. You have " + (2 - counter) + " more tries");
        counter++;
    }
    // work later in checks!
    //you don't like white, do you?
    nameHotel = nameHotel.replace(/\s/g, "");
    // all working class
    nameHotel = nameHotel.toLowerCase();
    // and now you get bourgouise
    nameHotel = nameHotel.substring(0, 1).toUpperCase() + nameHotel.substring(1);
    // go and fly by yourself
    return nameHotel;
}
//First check
function firstCheck() {
    console.log('first works');
    // container
    var flag;
    //tell me 
    flag = parseInt(prompt(nameHotel + " is the one you want to modify? \n \"YES\" press 1 \n \"NO\" press 2"));
    // show me your numbers
    if (flag === 1) {
        return flag;
    }
    else {
        alert("Thank you for trusting us!");
    }
}
function polishName(str) {
    //you don't like white, do you?
    str = str.replace(/\s/g, "");
    // all working class
    str = str.toLowerCase();
    // and now you get bourgouise
    str = str.substring(0, 1).toUpperCase() + str.substring(1);
    // go and fly by yourself
    return str;
}
