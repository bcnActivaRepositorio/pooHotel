// hotal class
"use strict"
class Hotel {
    public nameHotel: string;
    public numRooms: number;
    public numFloors: number;
    public totalSurf: number;

    // constructor
    constructor(nameHotel: string, numRooms: number, numFloors: number, totalSurf: number){
       this.nameHotel      = nameHotel;
       this.numRooms  = numRooms;
       this.numFloors = numFloors;
       this.totalSurf = totalSurf; 
    }

    //setters i getters
    get myName(){
        return this.nameHotel;
    }
    get myRooms(){
        return this.numRooms;
    }
    get myNumFloors(){
        return this.numFloors 
    }
    get myTotalSurf(){
        return this.totalSurf; 
    }
    set myName(nameHotel: string){
        this.nameHotel = nameHotel;
    }
    set myRooms(numRooms: number){
        this.numRooms = numRooms;
    }
    set myNumFloors(numFloors: number){
        this.numFloors = numFloors;
    }
    set myTotalSurf(totalSurf: number){
        this.totalSurf = totalSurf;
    }

    //print me
    toString(){
        let text: string;
        text = `The ${this.nameHotel} Hotel has been added to the database: \n Number of rooms: ${this.numRooms} \n Floors: ${this.numFloors} \n Square meters: ${this.totalSurf} m2  `;
        return text;
    }
    //updated me
    toUpdate(){
        let text: string;
        text = `The ${this.nameHotel} Hotel has been updated in the database: \n Number of rooms: ${this.numRooms} \n Floors: ${this.numFloors} \n Square meters: ${this.totalSurf} m2  `;
        return text; 
    }
}