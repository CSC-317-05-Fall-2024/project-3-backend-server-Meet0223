/* This file should contain definitions for deleteRestaurantCard,
    and js to attach it as a handler per card.
*/

document.addEventListener('DOMContentLoaded', () => {
    const deleteButtons = document.querySelectorAll('.delete-btn');
    
    deleteButtons.forEach(button => {
        button.addEventListener('click', deleteRestaurantCard);
    });
});

function deleteRestaurantCard(event) {
    const card = event.target.closest('.restaurant-card'); 
    if (card) {
        card.remove(); 
    }
}