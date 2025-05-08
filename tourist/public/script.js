const places = {
  tajmahal: {
    name: "Taj Mahal",
    image: "images/tajmahal.jpg",
    description: "The Taj Mahal is a white marble mausoleum in Agra, India. It is one of the most famous monuments in the world and a symbol of love, built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal."
  },
  gatewayofindia: {
    name: "Gateway of India",
    image: "images/gatewayofindia.jpg",
    description: "The Gateway of India is a historic monument in Mumbai, India. It was built in 1911 to commemorate the visit of King George V and Queen Mary to India and is an iconic symbol of the city."
  },
  redfort: {
    name: "Red Fort",
    image: "images/redfort.jpg",
    description: "The Red Fort is a historic fortification in the city of Delhi, India. It served as the main residence of the Mughal emperors for around 200 years, and is now a UNESCO World Heritage Site."
  },
  hawa_mahal: {
    name: "Hawa Mahal",
    image: "images/hawa_mahal.jpg",
    description: "Hawa Mahal is a palace in Jaipur, India, built by Maharaja Sawai Pratap Singh. It is known for its unique five-story façade with 953 small windows, or 'jharokhas', which allow cool air to pass through, giving it its name 'Palace of Winds'."
  }
};

function showDetails(place) {
  // Get the details section
  const detailsSection = document.getElementById('details');

  // Check if the place exists in our data
  if (!places[place]) {
    console.error(`No data found for place: ${place}`);
    return;
  }

  const placeData = places[place];

  // Populate the details section with the selected place's data
  document.getElementById('place-name').textContent = placeData.name;
  document.getElementById('place-image').src = placeData.image;
  document.getElementById('place-description').textContent = placeData.description;

  // Make the details section visible
  detailsSection.classList.remove('hidden');
}

function goBack() {
  // Hide the details section and show the gallery again
  const detailsSection = document.getElementById('details');
  detailsSection.classList.add('hidden');
}
