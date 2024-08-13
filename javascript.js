document.addEventListener('DOMContentLoaded', function () {
    const filterSelect = document.getElementById('filterSelect');
    const iphones = document.querySelectorAll('.iphone');

    filterSelect.addEventListener('change', function () {
        const selectedValue = this.value;
        iphones.forEach(function (iphone) {
            if (selectedValue === 'all' || iphone.classList.contains(selectedValue)) {
                iphone.style.display = 'block';
            } else {
                iphone.style.display = 'none';
            }
        });
    });

    // Optionally, you can trigger a change event to show all items by default
    filterSelect.dispatchEvent(new Event('change'));
});

function redirectToStripe() {
    window.location.href = 'https://buy.stripe.com/test_9AQ4hBaVF9diecwcMM';
}

document.getElementById('buyNowButton1').onclick = redirectToStripe;
document.getElementById('buyNowButton2').onclick = redirectToStripe;
document.getElementById('buyNowButton3').onclick = redirectToStripe;
document.getElementById('buyNowButton4').onclick = redirectToStripe;
document.getElementById('buyNowButton5').onclick = redirectToStripe;
document.getElementById('buyNowButton6').onclick = redirectToStripe;
document.getElementById('buyNowButton7').onclick = redirectToStripe;
document.getElementById('buyNowButton8').onclick = redirectToStripe;
document.getElementById('buyNowButton9').onclick = redirectToStripe;
document.getElementById('buyNowButton10').onclick = redirectToStripe;
document.getElementById('buyNowButton11').onclick = redirectToStripe;
document.getElementById('buyNowButton12').onclick = redirectToStripe;
document.getElementById('buyNowButton13').onclick = redirectToStripe;
document.getElementById('buyNowButton14').onclick = redirectToStripe;
document.getElementById('buyNowButton15').onclick = redirectToStripe;
document.getElementById('buyNowButton16').onclick = redirectToStripe;
document.getElementById('buyNowButton17').onclick = redirectToStripe;
document.getElementById('buyNowButton18').onclick = redirectToStripe;
document.getElementById('buyNowButton19').onclick = redirectToStripe;
document.getElementById('buyNowButton20').onclick = redirectToStripe;
document.getElementById('buyNowButton21').onclick = redirectToStripe;




 // Apps script embedding
 const scriptURL = 'https://script.google.com/macros/s/AKfycbyC1QCPOF1JNwULCIqQiyxtMHrkv_N2mhBAHX6viwoIy--e0P6C-7s1WJzBd-9Fuc1N/exec';
 const form = document.getElementById('emailForm');
 
 form.addEventListener('submit', e => {
     e.preventDefault(); // Prevent the default form submission behavior
     
     const submitButton = form.querySelector('button[type="submit"]');
     const originalButtonText = submitButton.textContent;
     submitButton.disabled = true; // Disable the submit button to prevent multiple submissions
     submitButton.textContent = 'Sending...'; // Change button text to indicate submission
     
     fetch(scriptURL, {
         method: 'POST',
         body: new FormData(form) // Send form data as FormData
     })
     .then(response => {
         if (!response.ok) {
             throw new Error('Network response was not ok'); // Check if the response is OK
         }
         return response.json(); // Parse JSON from the response
     })
     .then(data => {
         if (data.result === 'success') {
             showMessage('Thank you! Your email has been submitted successfully.', 'success');
             form.reset(); // Reset the form fields after successful submission
         } else {
             throw new Error(data.error || 'Unknown error occurred'); // Handle errors from the server
         }
     })
     .catch(error => {
         console.error('Error!', error.message);
         showMessage('There was an error submitting your email. Please try again.', 'error'); // Show error message
     })
     .finally(() => {
         submitButton.disabled = false; // Re-enable the submit button
         submitButton.textContent = originalButtonText; // Restore the original button text
     });
 });
 
 // Function to display messages
 function showMessage(message, type) {
     const messageDiv = document.createElement('div');
     messageDiv.textContent = message;
     messageDiv.className = `message ${type}`; // Add a class based on the message type
     form.parentNode.insertBefore(messageDiv, form.nextSibling);
     
     setTimeout(() => {
         messageDiv.remove(); // Remove the message after 5 seconds
     }, 5000);
 }
 
