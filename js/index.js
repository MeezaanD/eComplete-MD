// Sample array of 12 products
let products = [
    {
      id: 1,
      productName: "iPhone 12",
      productImage: "https://i.postimg.cc/Bt9Fv9S4/iphone12.webp",
      productDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum animi similique rerum rem iusto omnis repellat odio.",
      prodPrice: 1000,
      category: "phone"
    },
    {
      id: 2,
      productName: "iPhone 13",
      productImage: "https://i.postimg.cc/DftpGSmy/iphone13.webp",
      productDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum animi similique rerum rem iusto omnis repellat odio.",
      prodPrice: 1000,
      category: "phone"
    },
    {
      id: 3,
      productName: "iPhone 13",
      productImage: "https://i.postimg.cc/SQXtj6Sv/iphone14.webp",
      productDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum animi similique rerum rem iusto omnis repellat odio.",
      prodPrice: 1000,
      category: "phone"
    },
    {
      id: 4,
      productName: "Macbook Air 13-inch",
      productImage: "https://i.postimg.cc/T3xkkBrz/macbookair13inch.webp",
      productDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum animi similique rerum rem iusto omnis repellat odio.",
      prodPrice: 1000,
      category: "macbook"
    },
    {
      id: 5,
      productName: "Macbook Pro 14-inch",
      productImage: "https://i.postimg.cc/sD7643ZP/macbook-pro-silver-1-1-4.webp",
      productDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum animi similique rerum rem iusto omnis repellat odio.",
      prodPrice: 1000,
      category: "macbook"
    },
    {
      id: 6,
      productName: "Macbook Pro 16-inch",
      productImage: "https://i.postimg.cc/8zbZxw4j/macbook-pro-space-grey-1-6.webp",
      productDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum animi similique rerum rem iusto omnis repellat odio.",
      prodPrice: 1000,
      category: "macbook"
    },
    {
      id: 7,
      productName: "Apple Watch Series SE",
      productImage: "https://i.postimg.cc/XqTfyB8M/silver-png.webp",
      productDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum animi similique rerum rem iusto omnis repellat odio.",
      prodPrice: 1000,
      category: "watch"
    },
    {
      id: 8,
      productName: "Apple Watch Ultra Lite",
      productImage: "https://i.postimg.cc/s2VpSrp2/apple-watch-ultra-lte-49mm-titanium-beige-yellow-trail-loop-1.webp",
      productDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum animi similique rerum rem iusto omnis repellat odio.",
      prodPrice: 1000,
      category: "watch"
    },
    {
      id: 9,
      productName: "Apple Watch Series 8",
      productImage: "https://i.postimg.cc/rmsxnNZX/apple-watch-series-8-gps-41mm-starlight-alum1-1.webp",
      productDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum animi similique rerum rem iusto omnis repellat odio.",
      prodPrice: 1000,
      category: "watch"
    },
    {
      id: 10,
      productName: "Apple Airpods 2nd Gen",
      productImage: "https://i.postimg.cc/FKD0VBZV/c5044-w-npi-airpods-images-resize-for-online-store-3.webp",
      productDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum animi similique rerum rem iusto omnis repellat odio.",
      prodPrice: 1000,
      category: "headphone"
    },
    {
      id: 11,
      productName: "Apple Airpods 3rd Gen",
      productImage: "https://i.postimg.cc/5NCqWp4f/airpods-pdp-image-position-4-wwen-jpg.webp",
      productDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum animi similique rerum rem iusto omnis repellat odio.",
      prodPrice: 1000,
      category: "headphone"
    },
    {
      id: 12,
      productName: "Apple Airpods Max",
      productImage: "https://i.postimg.cc/qBYXFWdm/mgyj3zea.webp",
      productDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum animi similique rerum rem iusto omnis repellat odio.",
      prodPrice: 1000,
      category: "headphone"
    }
  ];
  


  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartContainer = document.getElementById("cart");

  function updateCartDisplay() {
    cartContainer.innerHTML = "";

    cart.forEach(function(item) {
      let cartItemElement = document.createElement("div");
      cartItemElement.classList.add("cart-item");
      cartItemElement.innerHTML = `
        <p>${item.productName} - R${item.prodPrice}</p>
      `;
      cartContainer.appendChild(cartItemElement);
    });
  }

  function addToCart(product) {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
  }

  updateCartDisplay();

// ---------------------------------------------------------------------------------------------
// CATEGORY METHOD
  let productsContainer = document.getElementById("productsContainer");

  function displayProducts() {
    productsContainer.innerHTML = "";
  
    // Add a wrapper div for the row layout
    let rowContainer = document.createElement("div");
    rowContainer.classList.add("product-row");
  
    products.forEach(function(product) {
      let productCard = document.createElement("div");
      productCard.classList.add("product-card");
      productCard.innerHTML = `
        <h4>${product.productName}</h4>
        <img style="width: 15rem;" src="${product.productImage}" alt="${product.productName}" />
        <p>${product.productDesc}</p>
        <p>Price: R${product.prodPrice}</p>
        <button onclick="addToCart(${JSON.stringify(product)})">Add to Cart</button>
      `;
      rowContainer.appendChild(productCard);
    });
  
    // Append the row container to the products container
    productsContainer.appendChild(rowContainer);
  }
  

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
        <button onclick="addToCart(${JSON.stringify(product)})">Add to Cart</button>
      `;
      rowContainer.appendChild(productCard);
    });
  
    // Append the row container to the products container
    productsContainer.appendChild(rowContainer);
  }
  

  displayProducts();

  // ---------------------------------------------------------------------------------------------


function sortProductsByName() {
  // Toggle the sorting flag
  isAscendingSort = !isAscendingSort;

  // Create a copy of the products array to avoid modifying the original array
  let sortedProducts = products.slice();

  // Sort the products by name
  sortedProducts.sort(function (a, b) {
    let nameA = a.productName.toLowerCase();
    let nameB = b.productName.toLowerCase();

    if (nameA < nameB) return isAscendingSort ? -1 : 1;
    if (nameA > nameB) return isAscendingSort ? 1 : -1;
    return 0;
  });

  // Display the sorted products
  displayProducts(sortedProducts);
}

displayProducts(products);


  
  

