// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let neighborhoodId = 0;

let tripId = 0;

class Trip {
    constructor(driver, passenger) {
        this.id = ++tripId;
        this.driverId = driver.id;
        this.passengerId = passenger.id;

        // insert in the item to the store
        store.trips.push(this);
    }
    passenger() {
        return store.passengers.find(
            function(passenger) {
                return passenger.id === this.passengerId;
            }.bind(this)
        );
    }
    driver() {
        return store.drivers.find(
            function(driver) {
                return driver.id === this.driverId;
            }.bind(this)
        );
    }
}

class Neighborhood {
    constructor(name) {
        this.id = ++neighborhoodId;
        this.name = name;

        // insert in the user to the store
        store.neighborhoods.push(this);
    }
    deliveries() {
        return store.trips.filter(
            function(trip) {
                return trip.driverId === this.id;
            }.bind(this)
        );
    }
    passengers() {
        return store.trips.map(trip => trip.passenger());
    }
}
