// Sample array of 12 products
let products = [
  {
    id: 1,
    productName: "iPhone 12",
    productImage: "https://i.postimg.cc/Bt9Fv9S4/iphone12.webp",
    productDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum animi similique rerum rem iusto omnis repellat odio.",
    prodPrice: 10000,
    category: "phone",
    prodImg1: "https://i.postimg.cc/QxGJTf2C/i12-gold.webp",
    prodImg2: "https://i.postimg.cc/mZFSkv6K/i12-blue.webp"
  },
  {
    id: 2,
    productName: "iPhone 13",
    productImage: "https://i.postimg.cc/DftpGSmy/iphone13.webp",
    productDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum animi similique rerum rem iusto omnis repellat odio.",
    prodPrice: 12000,
    category: "phone",
    prodImg1: "https://i.postimg.cc/mgVYKBt1/i13-pink.webp",
    prodImg2: "https://i.postimg.cc/Dyrddqhg/i13-blue.webp"
  },
  {
    id: 3,
    productName: "iPhone 14",
    productImage: "https://i.postimg.cc/SQXtj6Sv/iphone14.webp",
    productDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum animi similique rerum rem iusto omnis repellat odio.",
    prodPrice: 14000,
    category: "phone",
    prodImg1: "https://i.postimg.cc/FHhbP7sQ/i14-red.webp",
    prodImg2: "https://i.postimg.cc/6qRVPZvB/i14-yellow.webp"
  },
  {
    id: 4,
    productName: "Macbook Air 13-inch",
    productImage: "https://i.postimg.cc/T3xkkBrz/macbookair13inch.webp",
    productDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum animi similique rerum rem iusto omnis repellat odio.",
    prodPrice: 20000,
    category: "macbook",
    prodImg1: "https://i.postimg.cc/T3xkkBrz/macbookair13inch.webp",
    prodImg2: "https://i.postimg.cc/T3xkkBrz/macbookair13inch.webp"
  },
  {
    id: 5,
    productName: "Macbook Pro 14-inch",
    productImage: "https://i.postimg.cc/sD7643ZP/macbook-pro-silver-1-1-4.webp",
    productDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum animi similique rerum rem iusto omnis repellat odio.",
    prodPrice: 23000,
    category: "macbook",
    prodImg1: "https://i.postimg.cc/sD7643ZP/macbook-pro-silver-1-1-4.webp",
    prodImg2: "https://i.postimg.cc/sD7643ZP/macbook-pro-silver-1-1-4.webp"
  },
  {
    id: 6,
    productName: "Macbook Pro 16-inch",
    productImage: "https://i.postimg.cc/8zbZxw4j/macbook-pro-space-grey-1-6.webp",
    productDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum animi similique rerum rem iusto omnis repellat odio.",
    prodPrice: 25000,
    category: "macbook",
    prodImg1: "https://i.postimg.cc/8zbZxw4j/macbook-pro-space-grey-1-6.webp",
    prodImg2: "https://i.postimg.cc/8zbZxw4j/macbook-pro-space-grey-1-6.webp"
  },
  {
    id: 7,
    productName: "Apple Watch Series SE",
    productImage: "https://i.postimg.cc/XqTfyB8M/silver-png.webp",
    productDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum animi similique rerum rem iusto omnis repellat odio.",
    prodPrice: 4000,
    category: "watch",
    prodImg1: "https://i.postimg.cc/XqTfyB8M/silver-png.webp",
    prodImg2: "https://i.postimg.cc/XqTfyB8M/silver-png.webp"
  },
  {
    id: 8,
    productName: "Apple Watch Ultra Lite",
    productImage: "https://i.postimg.cc/s2VpSrp2/apple-watch-ultra-lte-49mm-titanium-beige-yellow-trail-loop-1.webp",
    productDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum animi similique rerum rem iusto omnis repellat odio.",
    prodPrice: 5000,
    category: "watch",
    prodImg1: "https://i.postimg.cc/s2VpSrp2/apple-watch-ultra-lte-49mm-titanium-beige-yellow-trail-loop-1.webp",
    prodImg2: "https://i.postimg.cc/s2VpSrp2/apple-watch-ultra-lte-49mm-titanium-beige-yellow-trail-loop-1.webp"
  },
  {
    id: 9,
    productName: "Apple Watch Series 8",
    productImage: "https://i.postimg.cc/rmsxnNZX/apple-watch-series-8-gps-41mm-starlight-alum1-1.webp",
    productDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum animi similique rerum rem iusto omnis repellat odio.",
    prodPrice: 6000,
    category: "watch",
    prodImg1: "https://i.postimg.cc/rmsxnNZX/apple-watch-series-8-gps-41mm-starlight-alum1-1.webp",
    prodImg2: "https://i.postimg.cc/rmsxnNZX/apple-watch-series-8-gps-41mm-starlight-alum1-1.webp"
  },
  {
    id: 10,
    productName: "Apple Airpods 2nd Gen",
    productImage: "https://i.postimg.cc/FKD0VBZV/c5044-w-npi-airpods-images-resize-for-online-store-3.webp",
    productDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum animi similique rerum rem iusto omnis repellat odio.",
    prodPrice: 750,
    category: "headphone",
    prodImg1: "https://i.postimg.cc/FKD0VBZV/c5044-w-npi-airpods-images-resize-for-online-store-3.webp",
    prodImg2: "https://i.postimg.cc/FKD0VBZV/c5044-w-npi-airpods-images-resize-for-online-store-3.webp"
  },
  {
    id: 11,
    productName: "Apple Airpods 3rd Gen",
    productImage: "https://i.postimg.cc/5NCqWp4f/airpods-pdp-image-position-4-wwen-jpg.webp",
    productDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum animi similique rerum rem iusto omnis repellat odio.",
    prodPrice: 900,
    category: "headphone",
    prodImg1: "https://i.postimg.cc/5NCqWp4f/airpods-pdp-image-position-4-wwen-jpg.webp",
    prodImg2: "https://i.postimg.cc/5NCqWp4f/airpods-pdp-image-position-4-wwen-jpg.webp"
  },
  {
    id: 12,
    productName: "Apple Airpods Max",
    productImage: "https://i.postimg.cc/qBYXFWdm/mgyj3zea.webp",
    productDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum animi similique rerum rem iusto omnis repellat odio.",
    prodPrice: 1000,
    category: "headphone",
    prodImg1: "https://i.postimg.cc/qBYXFWdm/mgyj3zea.webp",
    prodImg2: "https://i.postimg.cc/qBYXFWdm/mgyj3zea.webp"
  }
];

// ---------------------------------------------------------------------------------------------
  
// Storing the products array in localStorage
localStorage.setItem("products", JSON.stringify(products));


// ---------------------------------------------------------------------------------------------
// CATEGORY METHOD
// Retrieving the products array from localStorage
let storedProducts = JSON.parse(localStorage.getItem("products"));

// Displaying the stored products
function displayStoredProducts() {
  productsContainer.innerHTML = "";

  let rowContainer = document.createElement("div");
  rowContainer.classList.add("product-row");

  storedProducts.forEach(function(product) {
    let productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
      <h4>${product.productName}</h4>
      <img style="width: 15rem;" src="${product.productImage}" alt="${product.productName}" />
      <p>${product.productDesc}</p>
      <p>Price: R${product.prodPrice}</p>
      <ul class="shop-list">
      <li><button onclick="addToCart(${product.id})">Add to Cart</button></li>
      <li><a class="view" href="./products.html?id=${product.id}">View Product</a></li>
      </ul>
    `;
    rowContainer.appendChild(productCard);
  });

  productsContainer.appendChild(rowContainer);
}

displayStoredProducts();

  // ---------------------------------------------------------------------------------------------
  
  function filterProducts() {
    let categoryFilter = document.getElementById("categoryFilter").value;
    let filteredProducts;
  
    if (categoryFilter) {
      filteredProducts = products.filter(function(product) {
        return product.category === categoryFilter;
      });
    } else {
      filteredProducts = products;
    }
  
    displayFilteredProducts(filteredProducts);
  }
  
// ---------------------------------------------------------------------------------------------
  function displayFilteredProducts(filteredProducts) {
    productsContainer.innerHTML = "";
  
    // Add a wrapper div for the row layout
    let rowContainer = document.createElement("div");
    rowContainer.classList.add("product-row");
  
    filteredProducts.forEach(function(product) {
      let productCard = document.createElement("div");
      productCard.classList.add("product-card");
      productCard.innerHTML = `
        <h4>${product.productName}</h4>
        <img style="width: 15rem;" src="${product.productImage}" alt="${product.productName}" />
        <p>${product.productDesc}</p>
        <p>Price: R${product.prodPrice}</p>
        <ul class="shop-list">
        <li><button class="btn add" onclick="addToCart(${product.id})">Add to Cart</button></li>
        <li><a class="btn view" href="./products.html?id=${product.id}">View Product</a></li>
      </ul>
      `;
      rowContainer.appendChild(productCard);
    });
  
    // Append the row container to the products container
    productsContainer.appendChild(rowContainer);
  }
  

  displayProducts();

// ---------------------------------------------------------------------------------------------
// SORT PRICING METHOD

// Sorting method to sort products by highest to lowest product price
function sortProductsByPriceDescending() {
  let sortedProducts = products.slice().sort(function(a, b) {
    return b.prodPrice - a.prodPrice;
  });
  displayFilteredProducts(sortedProducts);
}

// Sorting method to sort products by lowest to highest product price
function sortProductsByPriceAscending() {
  let sortedProducts = products.slice().sort(function(a, b) {
    return a.prodPrice - b.prodPrice;
  });
  displayFilteredProducts(sortedProducts);
}

// Display the filtered products
function displayFilteredProducts(filteredProducts) {
  productsContainer.innerHTML = "";

  let rowContainer = document.createElement("div");
  rowContainer.classList.add("product-row");

  filteredProducts.forEach(function(product) {
    let productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
      <h4>${product.productName}</h4>
      <img style="width: 15rem;" src="${product.productImage}" alt="${product.productName}" />
      <p>${product.productDesc}</p>
      <p>Price: R${product.prodPrice}</p>
      <ul class="shop-list">
        <li><button class="add" onclick="addToCart(${product.id})">Add to Cart</button></li>
        <li><a class="view" href="./products.html?id=${product.id}">View Product</a></li>
      </ul>
    `;
    rowContainer.appendChild(productCard);
  });

  productsContainer.appendChild(rowContainer);
}


// Display the products
function displayProducts() {
  displayFilteredProducts(products);
}

displayProducts();


// ---------------------------------------------------------------------------------------------


// Add this event listener to the document
document.addEventListener("click", function(event) {
  if (event.target.classList.contains("view")) {
    event.preventDefault(); // Prevent the default behavior of the link
    let productId = event.target.getAttribute("href").split("=")[1]; // Get the product ID from the query parameter
    window.location.href = `./products.html?id=${productId}`; // Redirect to the product.html page with the product ID
  }
});

// ---------------------------------------------------------------------------------------------

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCart() {
  let cartContainer = document.getElementById('shopping-cart');
  localStorage.setItem("cart", JSON.stringify(cart));
  cartContainer.innerHTML = "";
  cart.forEach((product, index) => {
    let cartItem = document.createElement("div");
    cartItem.innerHTML = `
    <ul class="cart-list">
    <li><img style="width: 5rem;" src="${product.productImage}" alt="${product.productName}" /></li>
    <li class="cart-item"><p>Product Name: ${product.productName}</p></li>
    <li class="cart-item"><p>Product Price: R${product.prodPrice}</p></li>
    </ul>

    <ul class="cart-btns">
    <li><input type="number" placeholder="1" min="1" width="50px" height="40px" onchange="updateQuantity(${index}, this.value)"></li>
    <li><button onclick="removeFromCart(${index})" class="remove">Remove</button></li>
    </ul>
      <p><b>Total:</b> R ${product.prodPrice}</p>
      
      
    `;
    cartContainer.appendChild(cartItem);
  });
}

function updateQuantity(index, quantity) {
  cart[index].quantity = Number(quantity);
  updateCart();
}

function addToCart(productId) {
  let product = products.find((product) => Number(product.id) === productId);
  if (product) {
    product.quantity = 1; // Set the default quantity to 1
    cart.push(product);
    alert('Product added');
    updateCart();
  }
}

function removeFromCart(index) {
  let removedProduct = cart.splice(index, 1)[0];
  removedProduct.quantity++;
  updateCart();
}

function calculateTotalPrice() {
  let totalPrice = 0;
  cart.forEach((product) => {
    totalPrice += product.prodPrice * product.quantity;
  });
  return totalPrice;
}

// Display the cart in the checkout
document.getElementById('shopping-cart').addEventListener('click', updateCart());

// ---------------------------------------------------------------------------------------------



