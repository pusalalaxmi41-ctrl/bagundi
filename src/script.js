const whatsappNumber = "919989958282";

const signatures = [
  ["Biryani", "Godavari-style bowls with bold aroma and generous portions.", "assets/food-biryani.png"],
  ["Starters", "Crispy, spicy, and made for sharing at the table.", "assets/food-starter-paneer.png"],
  ["Chinese", "Restaurant favourites with a Bagundhi comfort twist.", ""],
  ["Mocktails", "Bright sips, aqua freshness, and family-friendly sparkle.", ""],
  ["Desserts", "Sweet endings from gulab jamun to ice cream bliss.", ""],
  ["Sandwiches", "Grilled comfort plates for quick cravings.", ""],
  ["Pasta", "Creamy, cheesy, and playful modern plates.", ""],
  ["Fried Rice", "Wok-tossed rice with familiar spice and crunch.", ""],
  ["Noodles", "Saucy, springy, and full of colour.", ""],
  ["Chicken dishes", "Spiced, fried, saucy, and full of flavour.", ""],
  ["Paneer dishes", "Soft paneer with crisp edges and punchy masala.", ""],
  ["Prawns", "Coastal-style bites for seafood lovers.", ""],
  ["Ice Cream", "Cool scoops for the perfect finish.", ""],
];

const menu = [
  { category: "Veg Starters", name: "Corn 65", desc: "Crispy corn tossed with curry leaves, garlic, and house spice.", price: 129, type: "veg", img: "assets/food-starter-corn.png" },
  { category: "Veg Starters", name: "Paneer 65", desc: "Golden paneer bites finished with chilli, garlic, and herbs.", price: 159, type: "veg", img: "assets/food-starter-paneer.png" },
  { category: "Veg Starters", name: "Baby Corn Majestic", desc: "Crunchy baby corn with creamy-spicy Bagundhi seasoning.", price: 159, type: "veg", img: "" },
  { category: "Veg Starters", name: "Mushroom 65", desc: "Juicy mushrooms fried crisp and tossed with green chilli.", price: 159, type: "veg", img: "" },
  { category: "Non-Veg Starters", name: "Chicken 65", desc: "Classic spicy chicken starter with curry leaves and garlic.", price: 169, type: "nonveg", img: "assets/food-starter-paneer.png" },
  { category: "Non-Veg Starters", name: "Chicken Majestic", desc: "Soft chicken strips in a creamy, tangy, peppery finish.", price: 179, type: "nonveg", img: "" },
  { category: "Non-Veg Starters", name: "Chicken Lollipop", desc: "Crisp fried lollipops with a punchy Indo-Chinese coating.", price: 199, type: "nonveg", img: "" },
  { category: "Non-Veg Starters", name: "Butter Garlic Prawns", desc: "Prawns tossed in buttery garlic heat and fresh herbs.", price: 279, type: "nonveg", img: "" },
  { category: "Fried Rice", name: "Veg Fried Rice", desc: "Wok-fried rice with vegetables, spring onion, and light seasoning.", price: 109, type: "veg", img: "" },
  { category: "Fried Rice", name: "Paneer Fried Rice", desc: "Vegetable fried rice upgraded with soft paneer cubes.", price: 129, type: "veg", img: "" },
  { category: "Fried Rice", name: "Chicken Fried Rice", desc: "Comforting fried rice with chicken, egg, and classic sauces.", price: 129, type: "nonveg", img: "" },
  { category: "Fried Rice", name: "Bagundhi Spl Fried Rice", desc: "A loaded house special rice for bigger cravings.", price: 229, type: "nonveg", img: "" },
  { category: "Noodles", name: "Veg Noodles", desc: "Springy noodles tossed with vegetables and house sauce.", price: 89, type: "veg", img: "" },
  { category: "Noodles", name: "Paneer Noodles", desc: "Veg noodles with soft paneer and chilli-garlic notes.", price: 129, type: "veg", img: "" },
  { category: "Noodles", name: "Chicken Noodles", desc: "Wok-tossed noodles with chicken and savoury seasoning.", price: 129, type: "nonveg", img: "" },
  { category: "Noodles", name: "Egg Schezwan Noodles", desc: "A spicy noodle favourite with egg and Schezwan heat.", price: 109, type: "nonveg", img: "" },
  { category: "Biryani", name: "Veg Biryani", desc: "Fragrant rice layered with vegetables and Godavari-style spice.", price: 99, type: "veg", img: "" },
  { category: "Biryani", name: "Chicken Dum Biryani", desc: "Aromatic dum biryani with tender chicken and deep masala.", price: 179, type: "nonveg", img: "assets/food-biryani.png" },
  { category: "Biryani", name: "Fry Piece Chicken Biryani", desc: "Rich biryani topped with spicy fried chicken pieces.", price: 199, type: "nonveg", img: "assets/food-biryani.png" },
  { category: "Biryani", name: "Prawns Biryani", desc: "Seafood biryani with prawns, rice, and coastal spice.", price: 249, type: "nonveg", img: "" },
  { category: "Sandwiches", name: "Veg Grilled Sandwich", desc: "Warm grilled sandwich with vegetables and cheese.", price: 89, type: "veg", img: "" },
  { category: "Sandwiches", name: "Veg Cheese Sandwich", desc: "Creamy cheese filling grilled until golden.", price: 109, type: "veg", img: "" },
  { category: "Sandwiches", name: "Chicken Sandwich", desc: "Toasted sandwich with seasoned chicken filling.", price: 119, type: "nonveg", img: "" },
  { category: "Pasta", name: "Garden Cream", desc: "Creamy veg pasta with a smooth, comforting sauce.", price: 149, type: "veg", img: "" },
  { category: "Pasta", name: "Tuscan Tomato Harvest", desc: "Tangy tomato pasta with herbs and vegetables.", price: 149, type: "veg", img: "" },
  { category: "Pasta", name: "The Creamy Crunch", desc: "Chicken pasta in a creamy sauce with a crisp finish.", price: 179, type: "nonveg", img: "" },
  { category: "Mocktails", name: "Virgin Mojito", desc: "Mint, lime, and fizz for a bright refreshing sip.", price: 109, type: "veg", img: "" },
  { category: "Mocktails", name: "Green Apple", desc: "Crisp apple freshness with a sparkling finish.", price: 109, type: "veg", img: "" },
  { category: "Mocktails", name: "Blue Breeze", desc: "A cool aqua-blue mocktail with citrusy freshness.", price: 129, type: "veg", img: "" },
  { category: "Mocktails", name: "Cranberry", desc: "Tart cranberry sparkle for a lively table drink.", price: 129, type: "veg", img: "" },
  { category: "Beverages", name: "Water Bottle 1L", desc: "Packaged drinking water.", price: 20, type: "veg", img: "" },
  { category: "Beverages", name: "Fresh Lime Soda", desc: "Salt or sweet lime soda, made fresh.", price: 60, type: "veg", img: "" },
  { category: "Desserts", name: "Classic Gulab Jamun 4 pcs", desc: "Warm, soft gulab jamun for a classic finish.", price: 99, type: "veg", img: "" },
  { category: "Desserts", name: "Jamun Icecream Bliss", desc: "Gulab jamun paired with cool ice cream comfort.", price: 149, type: "veg", img: "" },
  { category: "Desserts", name: "Vanilla Ice Cream", desc: "Simple, smooth vanilla scoop.", price: 40, type: "veg", img: "" },
  { category: "Desserts", name: "Chocolate Ice Cream", desc: "Creamy chocolate scoop for sweet cravings.", price: 50, type: "veg", img: "" },
];

let activeCategory = "All";
let cart = [];

const signatureGrid = document.querySelector("#signatureGrid");
const categoryPills = document.querySelector("#categoryPills");
const menuGrid = document.querySelector("#menuGrid");
const cartDrawer = document.querySelector("#cartDrawer");
const cartItems = document.querySelector("#cartItems");
const cartCount = document.querySelector("#cartCount");
const cartTotal = document.querySelector("#cartTotal");

function money(value) {
  return `₹${value}`;
}

function placeholderLabel(name) {
  return `${name}<br>photo placeholder`;
}

function renderSignatures() {
  signatureGrid.innerHTML = signatures
    .map(([name, desc, img]) => {
      const photo = img ? `style="background-image:url('${img}')"` : "";
      const hasPhoto = img ? "has-photo" : "";
      return `
        <article class="signature-card reveal ${hasPhoto}">
          <div class="signature-image" ${photo}><span>${placeholderLabel(name)}</span></div>
          <h3>${name}</h3>
          <p>${desc}</p>
        </article>
      `;
    })
    .join("");
}

function renderCategories() {
  const categories = ["All", ...new Set(menu.map((item) => item.category))];
  categoryPills.innerHTML = categories
    .map((category) => `<button type="button" class="${category === activeCategory ? "is-active" : ""}" data-category="${category}">${category}</button>`)
    .join("");
}

function renderMenu() {
  const items = activeCategory === "All" ? menu : menu.filter((item) => item.category === activeCategory);
  menuGrid.innerHTML = items
    .map((item, index) => {
      const photo = item.img ? `style="background-image:url('${item.img}')"` : "";
      const hasPhoto = item.img ? "has-photo" : "";
      return `
        <article class="menu-card reveal ${hasPhoto}">
          <div class="menu-image" ${photo}><span>${placeholderLabel(item.name)}</span></div>
          <div class="menu-card-content">
            <div class="menu-meta">
              <span class="food-icon ${item.type}">${item.type === "veg" ? "Veg" : "Non-Veg"}</span>
              <span class="price">${money(item.price)}</span>
            </div>
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
            <button class="btn btn-primary ripple add-btn" type="button" data-index="${menu.indexOf(item)}">Add to Cart</button>
          </div>
        </article>
      `;
    })
    .join("");
  observeReveals();
}

function updateCart() {
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.qty * item.price, 0);
  cartCount.textContent = totalQty;
  cartTotal.textContent = money(totalPrice);

  if (!cart.length) {
    cartItems.innerHTML = `<div class="empty-cart">Your cart is ready for Bagundhi favourites.</div>`;
    return;
  }

  cartItems.innerHTML = cart
    .map((item) => {
      const photo = item.img ? `style="background-image:url('${item.img}')"` : "";
      const hasPhoto = item.img ? "has-photo" : "";
      return `
        <div class="cart-line">
          <div class="cart-image ${hasPhoto}" ${photo}><span>${item.name}</span></div>
          <div>
            <h4>${item.name}</h4>
            <div class="cart-row">
              <span>${money(item.price)}</span>
              <span class="qty-controls">
                <button type="button" data-qty="-1" data-name="${item.name}">-</button>
                <strong>${item.qty}</strong>
                <button type="button" data-qty="1" data-name="${item.name}">+</button>
              </span>
            </div>
          </div>
          <button class="close-cart-item" type="button" data-remove="${item.name}" aria-label="Remove ${item.name}">×</button>
        </div>
      `;
    })
    .join("");
}

function addToCart(item) {
  const existing = cart.find((cartItem) => cartItem.name === item.name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  updateCart();
  openCart();
}

function openCart() {
  cartDrawer.classList.add("is-open");
  cartDrawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("cart-open");
}

function closeCart() {
  cartDrawer.classList.remove("is-open");
  cartDrawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("cart-open");
}

function checkout(event) {
  event.preventDefault();
  if (!cart.length) {
    alert("Please add at least one item to cart.");
    return;
  }

  const name = document.querySelector("#customerName").value.trim();
  const phone = document.querySelector("#customerPhone").value.trim();
  const address = document.querySelector("#customerAddress").value.trim();
  const orderType = document.querySelector("#orderType").value;
  const totalPrice = cart.reduce((sum, item) => sum + item.qty * item.price, 0);
  const lines = cart.map((item) => `- ${item.name} x ${item.qty} = ${money(item.qty * item.price)}`).join("\n");
  const message = [
    "Hello Bagundhi, I would like to place an order.",
    "",
    `Customer name: ${name}`,
    `Phone: ${phone}`,
    `Order type: ${orderType}`,
    `Address/Pickup note: ${address}`,
    "",
    "Items:",
    lines,
    "",
    `Total: ${money(totalPrice)}`,
  ].join("\n");

  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
}

function observeReveals() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal:not(.is-visible)").forEach((item) => observer.observe(item));
}

function bindRipple() {
  document.addEventListener("click", (event) => {
    const target = event.target.closest(".ripple");
    if (!target) return;
    const rect = target.getBoundingClientRect();
    const ink = document.createElement("span");
    const size = Math.max(rect.width, rect.height);
    ink.className = "ink";
    ink.style.width = `${size}px`;
    ink.style.height = `${size}px`;
    ink.style.left = `${event.clientX - rect.left - size / 2}px`;
    ink.style.top = `${event.clientY - rect.top - size / 2}px`;
    target.appendChild(ink);
    ink.addEventListener("animationend", () => ink.remove());
  });
}

function initHeroVideos() {
  const clips = [...document.querySelectorAll(".hero-clip")];
  const dots = [...document.querySelectorAll(".scene-dot")];
  if (!clips.length || !dots.length) return;
  if (window.heroVideoTimer) clearInterval(window.heroVideoTimer);

  clips.forEach((clip, index) => {
    clip.preload = index === 0 ? "auto" : "metadata";
    const seekClip = () => {
      if (Number.isFinite(clip.duration) && clip.duration > index * 4) {
        clip.currentTime = index * 4;
      }
    };
    if (clip.readyState >= 1) {
      seekClip();
    } else {
      clip.addEventListener("loadedmetadata", seekClip, { once: true });
    }
    if (index === 0) clip.play().catch(() => {});
  });

  let current = 0;
  const activate = (index) => {
    if (!clips[index] || index === current) return;
    clips[current].classList.remove("is-active");
    dots[current].classList.remove("is-active");
    clips[current].pause();
    current = index;
    clips[current].classList.add("is-active");
    dots[current].classList.add("is-active");
    clips[current].play().catch(() => {});
  };

  dots.forEach((dot) => dot.addEventListener("click", () => activate(Number(dot.dataset.scene))));
  window.heroVideoTimer = setInterval(() => activate((current + 1) % clips.length), 5600);
}

function initLightbox() {
  const lightbox = document.querySelector("#lightbox");
  const img = document.querySelector("#lightboxImg");
  const title = document.querySelector("#lightboxTitle");

  document.querySelectorAll(".gallery-item").forEach((item) => {
    item.addEventListener("click", () => {
      img.src = item.dataset.img;
      img.alt = item.dataset.title;
      title.textContent = item.dataset.title;
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
    });
  });

  document.querySelector("#closeLightbox").addEventListener("click", () => {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
  });
}

function initEvents() {
  const header = document.querySelector("#siteHeader");
  const navToggle = document.querySelector("#navToggle");
  const navLinks = document.querySelector("#navLinks");

  window.addEventListener("scroll", () => {
    header.classList.toggle("is-scrolled", window.scrollY > 20);
  });

  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  categoryPills.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    activeCategory = button.dataset.category;
    renderCategories();
    renderMenu();
  });

  menuGrid.addEventListener("click", (event) => {
    const button = event.target.closest(".add-btn");
    if (!button) return;
    addToCart(menu[Number(button.dataset.index)]);
  });

  cartItems.addEventListener("click", (event) => {
    const qtyButton = event.target.closest("[data-qty]");
    const removeButton = event.target.closest("[data-remove]");
    if (qtyButton) {
      const item = cart.find((cartItem) => cartItem.name === qtyButton.dataset.name);
      item.qty += Number(qtyButton.dataset.qty);
      cart = cart.filter((cartItem) => cartItem.qty > 0);
      updateCart();
    }
    if (removeButton) {
      cart = cart.filter((cartItem) => cartItem.name !== removeButton.dataset.remove);
      updateCart();
    }
  });

  document.querySelector("#openCart").addEventListener("click", openCart);
  document.querySelector("#closeCart").addEventListener("click", closeCart);
  cartDrawer.addEventListener("click", (event) => {
    if (event.target === cartDrawer) closeCart();
  });
  document.querySelector("#checkoutForm").addEventListener("submit", checkout);
  document.querySelector("#floatingWhatsApp").addEventListener("click", openCart);
}

renderSignatures();
renderCategories();
renderMenu();
updateCart();
bindRipple();
initHeroVideos();
initLightbox();
initEvents();
observeReveals();
