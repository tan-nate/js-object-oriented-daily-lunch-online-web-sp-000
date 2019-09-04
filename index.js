// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let neighborhoodId = 0;

class Neighborhood {
    constructor(name) {
        this.id = ++neighborhoodId;
        this.name = name;

        // insert in the user to the store
        store.neighborhoods.push(this);
    }
    // deliveries() {
    //     return store.trips.filter(
    //         function(trip) {
    //             return trip.driverId === this.id;
    //         }.bind(this)
    //     );
    // }
    // passengers() {
    //     return store.trips.map(trip => trip.passenger());
    // }
}

let customerId = 0;

class Customer {
    constructor(name, neighborhoodId) {
        this.id = ++customerId;
        this.name = name;
        this.neighborhoodId = neighborhoodId;

        // insert in the item to the store
        store.customers.push(this);
    }
}

let mealId = 0;

class Meal {
    constructor(title, price) {
        this.id = ++mealId;
        this.title = title;
        this.price = price;

        // insert in the item to the store
        store.meals.push(this);
    }
}

let deliveryId = 0;

class Delivery {
    constructor(mealId, neighborhoodId, customerId) {
        this.id = ++deliveryId;
        this.mealId = mealId;
        this.neighborhoodId = neighborhoodId;
        this.customerId = customerId;

        // insert in the item to the store
        store.deliveries.push(this);
    }
    // passenger() {
    //     return store.passengers.find(
    //         function(passenger) {
    //             return passenger.id === this.passengerId;
    //         }.bind(this)
    //     );
    // }
    // driver() {
    //     return store.drivers.find(
    //         function(driver) {
    //             return driver.id === this.driverId;
    //         }.bind(this)
    //     );
    // }
}
