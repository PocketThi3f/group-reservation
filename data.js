
// Table Reservations (DATA)
// =============================================================
var reservations = [{
  name: "test",
  phone: "555-5555",
  email: "jesseharold@gmail.com",
  uniqueID: "jesseharold"
}, {
  name: "test",
  phone: "555-5555",
  email: "jesseharold@gmail.com",
  uniqueID: "jesseharold"
}, {
  name: "test",
  phone: "555-5555",
  email: "jesseharold@gmail.com",
  uniqueID: "jesseharold"
}, {
  name: "test",
  phone: "555-5555",
  email: "jesseharold@gmail.com",
  uniqueID: "jesseharold"
}, {
  name: "test",
  phone: "555-5555",
  email: "jesseharold@gmail.com",
  uniqueID: "jesseharold"
}];

var waitlist = [{
  name: "test",
  phone: "555-5555",
  email: "jesseharold@gmail.com",
  uniqueID: "jesseharold"
}];

function addReservation(object){
    if (reservations.length < 5) {
        reservations.push(object);
    } else {
        waitlist.push(object);
    }
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