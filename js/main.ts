//one ring to rule them all
document.getElementById('boton1').addEventListener('click', buildHotel);
document.getElementById('boton2').addEventListener('click', lookUp);
document.getElementById('boton4').addEventListener('click', nuriaKasparov);
document.getElementById('boton5').addEventListener('click', clearMe);
"use strict"
console.log('main works');

// write me
var writeMe = ( document.querySelector('#answerMe') as HTMLInputElement);

// same as car
var hotel: Hotel;
var hotel2: Hotel;
var hotel3: Hotel;
var hotel4: Hotel;
var hotel5: Hotel;
//array
var arrHotel: any = []

//you won't lie!
var ruler: boolean;
//some for me
var hotel2 = new Hotel ("Hilton", 25, 2, 650);
var hotel3 = new Hotel ("Vela", 25, 2, 650);
var hotel4 = new Hotel ("H5", 25, 2, 650);
var hotel5 = new Hotel ("Mandarin", 25, 2, 650);

(arrHotel).push(hotel2);
(arrHotel).push(hotel3);
(arrHotel).push(hotel4);
(arrHotel).push(hotel5);
console.log(arrHotel);

//check my array
function checkHotels(str: string) {
    //you'll tell me the true
    let noCheat: boolean = false;
       //iterate over me
       for (let hostel of arrHotel) {  
           //if you find me
       if (hostel.nameHotel == str) {
           // you won't lie to me
           noCheat = true;
       } 
       // don't be shy
       console.log(`%c${noCheat}`, "color: #b30000");
   }
           //come back to me
           return noCheat; 
   }
   // N of A
   //sin duda implementaré Nuria Kasparov check por su versatilidad, pero esto es lo que he hecho SIN mirar
   // a comparar con lo hecho en Junio pls
   /* function nuriaKasparov(str: string){
       // a true friend
       let found: boolean = false;
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
function buildHotel(): void{

        // give me data
        var nameHotel: string = myName();
        var numRooms: number  = parseInt((document.getElementById('hotelRooms') as HTMLInputElement).value);
        var numFloors: number = parseInt((document.getElementById('hotelFloors') as HTMLInputElement).value);
        var totalSurf: number = parseInt((document.getElementById('hotelSurf') as HTMLInputElement).value);
    
    //check me
    ruler = checkHotels(nameHotel);

    (ruler == true) ?  console.log(`${nameHotel} already in Database`) : arrHotel.push(hotel = new Hotel(nameHotel, numRooms, numFloors, totalSurf));
    //show me
    console.log(arrHotel);    
    console.log(hotel);
    //print me
    if (ruler == false){
        alert( ` ${hotel.nameHotel}'s hotel: \n ${hotel.numRooms} rooms \n ${hotel.numFloors} floors \n ${hotel.totalSurf}m2 \n`);
        writeMe.innerText = hotel.toString();
    } else {
       writeMe.innerText = `The ${nameHotel} Hotel is already in our database.`
    }
}

// DELETE
function nuriaKasparov(): void{
    // get the name
    let str: string = myName();
    // a true friend
    let found: boolean = false;
    // breadcrums to follow
    let i: number = 0;
    // you really need to learn THIS
    while( !found && i < arrHotel.length){
        // iterate with index as referee
        if (arrHotel[i].nameHotel === str) {
            //we change the true teller to make it jump out the iteration
            found = true; 
            //katana time
            arrHotel.splice(i, 1);
            //write me
            writeMe.innerText = `The ${str} Hotel is not longer in the database`;
        }
        // you keep the count
        i++;
    }
    // if not
    if (found == false) {
        // I want to see it
        writeMe.innerText = `${str} is not one of our Hotels`;
    }
    console.log(arrHotel);
}
// CHECK ME
function lookUp(): void {
    //get me the name
    var nameHotel: string = myName();
     //check me
     ruler = checkHotels(nameHotel);
     //do something you fool
     (ruler == true) ? writeMe.innerText = (`${nameHotel} already in Database`) :
                       writeMe.innerText = `${nameHotel} is not one of our Hotels`;

}
// MODIFIE
function modifyMe() {
    console.log('modify works');
}
// AUX FUNCTIONS
//clear
function clearMe(): void {
    writeMe.innerText = "";
    (document.querySelector<HTMLInputElement>('.form-control')).innerHTML = "";
    
}

//get me name
function myName() {
    let nameHotel: string = (document.getElementById('hotelName') as HTMLInputElement).value;
    //you watch their behaviour
    let counter: number = 0;

    //first check
    while(nameHotel == "" && counter < 3) {
        nameHotel = prompt(`Emptyness is not a name. You have ${2 - counter} more tries`);
        counter++;
    }
    // work later in checks!
    //prettier
    nameHotel = nameHotel.toLowerCase().substring(0, 1).toUpperCase() + nameHotel.substring(1);
        // go and fly by yourself
        return nameHotel;
}