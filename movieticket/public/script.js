document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const movie = document.getElementById('movie').value;
    const seats = document.getElementById('seats').value;
  
    if (seats < 1) {
      alert('Please select at least one seat.');
      return;
    }
  
    const confirmationMessage = `You have successfully booked ${seats} seat(s) for the movie "${movie}".`;
    document.getElementById('confirmation').textContent = confirmationMessage;
  });
  