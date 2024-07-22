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
        const productTitle = event.target.dataset.title;
        const productImage = event.target.dataset.image;
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

const createCart = (product, id) => {
  const totalPrice = (product.price * product.quantity).toFixed(2);
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
              <div class="cart-product-total">Total: $${totalPrice}</div>
              <button class="remove-item" data-id="${id}">Remove</button>
            </div>
  `;
  return listProduct;
};

const updateTotalAmount = () => {
  let totalAmount = 0;

  Object.values(cart).forEach((product) => {
    totalAmount += product.price * product.quantity;
  });

  totalAmount.textContent = totalAmount.toFixed(2);
};

const handleButtons = () => {
  cartData.querySelectorAll('.increase-qty').forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.id;
      cart[productId].quantity += 1;
      updateCartList();
    });
  });

  cartData.querySelectorAll('.decrease-qty').forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.id;
      if (cart[productId].quantity > 1) {
        cart[productId].quantity -= 1;
      } else {
        delete cart[productId];
      }
      updateCartList();
    });
  });

  cartData.querySelectorAll('.remove-item').forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.id;
      delete cart[productId];
      updateCartList();
    });
  });
};

const updateCartList = () => {
  cartData.innerHTML = '';

  Object.keys(cart).forEach((id) => {
    const product = cart[id];
    const listItem = createCart(product, id);
    cartData.appendChild(listItem);
  });

  updateTotalAmount();
  handleButtons();
};
