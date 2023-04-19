
{/* <div>
  <h2>Item Name</h2>
  <p>Item description</p>
  <p>$19.99</p>
  <button onclick="addToCart()">Add to Cart</button>
</div> */}


  function addToCart() {
    // Get the item details from the HTML
    const Name = document.querySelector('h2').textContent;
    const Des = document.querySelector('p:nth-of-type(2)').textContent;
    const price = document.querySelector('p:last-of-type').textContent;

    // Send an HTTP request to the server to add the item to the cart
    fetch('/add-to-cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        itemName: itemName,
        itemDescription: itemDescription,
        itemPrice: itemPrice
      })
    })
    .then(function(response) {
      // Redirect the user to the cart page
      window.location.href = '/cart';
    })
    .catch(function(error) {
      console.error(error);
    });
  }

