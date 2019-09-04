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
    deliveries() {
        return store.deliveries.filter(
            function(delivery) {
                return delivery.neighborhoodId === this.id;
            }.bind(this)
        );
    }
    customers() {
      return store.customers.filter(
          function(customer) {
              return customer.neighborhoodId === this.id;
          }.bind(this)
      );
    }
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
    meal () {
        return store.meals.find(
            function(meal) {
                return meal.id === this.mealId;
            }.bind(this)
        );
    }
    customer () {
        return store.customers.find(
            function(customer) {
                return customer.id === this.customerId;
            }.bind(this)
        );
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
