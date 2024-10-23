// Fill this in
let restaurantData = [
    {
        "name": "The Food Place",
        "phone": "(415) 123-4567",
        "address": "123 Main St, San Francisco, CA 94132",
        "photo": "https://picsum.photos/150/150"
    },
    {
        "name": "Pizza Heaven",
        "phone": "(415) 234-5678",
        "address": "456 Elm St, San Francisco, CA 94132",
        "photo": "https://picsum.photos/150/150"
    },
    {
        "name": "Sushi Express",
        "phone": "(415) 345-6789",
        "address": "789 Pine St, San Francisco, CA 94132",
        "photo": "https://picsum.photos/150/150"
    }
];

export default { restaurantData };

let lastId = restaurantData.length;

const getNextId = () => {
    lastId += 1;
    return lastId;
}

// Get a list of restaurants
const getRestaurants = () => {
};


// Get a restaurant by id
const getRestaurant = (id) => {
};

// Create a new restaurant entry
const createRestaurant = (newRestaurant) => {
};

// Delete a restaurant by id
const deleteRestaurant = (id) => {
};

export { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant };