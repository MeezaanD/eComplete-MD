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
// product.js
// Get the product ID from the query parameter
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

// Find the product with the matching ID
const product = products.find(item => item.id.toString() === productId);

// Display the product details
if (product) {
  const productDetailsContainer = document.getElementById("productDetailsContainer");
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");
  productCard.innerHTML = `
  <div class="container">
  <div class="row align-items-start">
      <div class="col-12 col-sm-6 col-md-6 col-lg-4">
      <img style="width: 20rem;" src="${product.productImage}" alt="${product.productName}" />
      <h4>Available Colors:</h4>
      <ul class="mini-img">
      <li>
      <img style="width: 8rem;" src="${product.prodImg1}" alt="${product.productName}" />
      </li>
      <li>
      <img style="width: 8rem;" src="${product.prodImg2}" alt="${product.productName}" />
      </li>
      </ul>
      

  
      </div>
      <div class="col-12 col-sm-6 col-md-6 col-lg-8 pt-5">
      <h3 class="pb-3">${product.productName}</h3>
      <div class="pt-3">
      <p>${product.productDesc}</p>
      <p>Price: R${product.prodPrice}</p>
      </div>  
      <button class="add" onclick="addToCart(${JSON.stringify(product)})">Add to Cart</button>
      </div>
  </div>
</div>
  

  `;
  productDetailsContainer.appendChild(productCard);
} else {
  // Handle the case where the product is not found
  const productDetailsContainer = document.getElementById("productDetailsContainer");
  productDetailsContainer.innerHTML = "<p>No product Selected. Too see click on view Product on Store Page</p>";
}

// Add product to cart
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
}
