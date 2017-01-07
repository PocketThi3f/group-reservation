
// Table Reservations (DATA)
// =============================================================
var reservations = [];

function addReservation(object){
    // tells whether or not you got a table
    var gotTable = true;
    if (reservations.length < 5) {
        reservations.push(object);
    } else {
        waitlist.push(object);
        gotTable = false;
    }
    return gotTable;
}

function getReservations(){
    return reservations;
}

function getWaitlist(){
    return waitlist;
}

function allData(){
    var fullData = reservations.concat(waitlist);
    return fullData;
}

module.exports = {
    getWaitlist: getWaitlist,
    getReservation: getReservations,
    allData: allData,
    addReservation: addReservation
};