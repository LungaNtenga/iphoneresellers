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
