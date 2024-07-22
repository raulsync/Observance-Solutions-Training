const url = 'https://fakestoreapi.com/products?limit=10';

//initially cart is empty
const cart = {};
const tableBody = document.querySelector('.product-table-content');

const getData = async () => {
  try {
    const res = await fetch(url);
    const products = await res.json();

    products.map((product) => {
      const row = document.createElement('tr');
      row.innerHTML = `
      <td><img src="${product.image}" alt="${product.title}" class="product-image"></td>
      <td>${product.title}</td>
        <td>$${product.price}</td>
        <td>
        <button class="add-to-cart-btn"
           data-id="${product.id}
           data-title="${product.title}"
            data-image="${product.image}"
            data-price="${product.price}">Add to Cart
        </button>
            </td>
      `;
      tableBody.appendChild(row);
    });

    // Add event listener for Add to Cart buttons
    tableBody.addEventListener('click', (event) => {
      if (event.target.classList.contains('add-to-cart-btn')) {
        console.log(event.target.dataset);
        const productId = event.target.dataset.id;
        const productImage = event.target.dataset.image;
        const productTitle = event.target.dataset.title;
        const productPrice = parseFloat(event.target.dataset.price);
        if (cart[productId]) {
          cart[productId].quantity += 1;
        } else {
          cart[productId] = {
            title: productTitle,
            price: productPrice,
            image: productImage,
            quantity: 1,
          };
        }

        updateCartList();
      }
    });
  } catch (error) {
    console.log(error);
  }
};
getData();

const modal = document.querySelector('.modal');
const cartLink = document.querySelector('.cart-link');
const closeBtn = document.querySelector('.close-btn');
const cartData = document.querySelector('.cart-data');
const totalAmount = document.querySelector('.total-amount');

//on click cart open modal
cartLink.addEventListener('click', (event) => {
  event.preventDefault();
  modal.style.display = 'block';
  updateCartList();
});

//Close button Functionality
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

//when clicking outside of modal then it will close the modal

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

const updateCartList = () => {
  cartData.innerHTML = '';
  let totalPrice = 0;
  for (const id in cart) {
    if (cart.hasOwnProperty(id)) {
      const product = cart[id];
      const total = (product.price * product.quantity).toFixed(2);
      totalPrice += parseFloat(total);

      const listProduct = document.createElement('li');
      listProduct.innerHTML = `
           <img src="${product.image}" alt="${
        product.title
      }" class="cart-product-image">
            <div class="cart-product-details">
              <div class="cart-product-title">${product.title}</div>
              <div class="cart-product-price">$${product.price.toFixed(2)}</div>
              <div class="cart-product-quantity">
                <button class="decrease-qty" data-id="${id}">-</button>
                ${product.quantity}
                <button class="increase-qty" data-id="${id}">+</button>
              </div>
              <div class="cart-product-total">Total: $${total}</div>
              <button class="remove-item" data-id="${id}">Remove</button>
            </div>
            `;
      cartData.appendChild(listProduct);
    }
  }
  console.log(cartData);
  totalAmount.textContent = totalPrice.toFixed(2);
};
