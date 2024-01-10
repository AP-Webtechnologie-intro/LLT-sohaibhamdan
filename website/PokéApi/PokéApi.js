
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const searchTerm = document.querySelector('input[type="search"]').value.toLowerCase();
        performPokemonSearch(searchTerm);
    });
});

function performPokemonSearch(query) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokemon not found');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            if (data.name === 'charizard') {
                window.location.href = 'charizard.html';
            } else {
                // Display a specific message for other Pokémon
                alert(`Sorry, ${data.name} is not Charizard.`);
            }
        })
        .catch(error => {
            console.error('Error:', error.message);
            // Display a general "Pokemon not found" message
            alert('Pokemon not found. Please try again.');
        });
}


