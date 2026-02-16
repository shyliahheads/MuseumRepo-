# Shop-Html-
<!-- ITEM 1 — COLLECTION ARTIFACT -->
<div class="collection-item">

    <img src="images/starbone-totem.jpg"
         alt="Starbone Totem carved fossil replica"
         class="open-modal"
         data-modal-target="#modal-text-starbone">

    <h3>Starbone Totem</h3>

    <p>
        Collection: Fossil Relics<br>
        Material: Fossilized Bone & Resin<br>
        Location Found: Abyssal Ridge<br>
        Function: Ceremonial Marker
    </p>

</div>


<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Museum Souvenir Shop</title>

<style>
/* ===== Global Styles ===== */
body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(135deg, #0c1b2a, #1e3c58);
    color: #ffffff;
}

h1 {
    text-align: center;
    padding: 20px;
}

/* ===== Navigation ===== */
nav {
    background: #06121c;
    padding: 15px;
    text-align: center;
}

nav a {
    color: white;
    text-decoration: none;
    margin: 0 15px;
    font-weight: bold;
}

nav a:hover {
    text-decoration: underline;
}

/* ===== Shop Layout ===== */
.shop-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 25px;
    padding: 30px;
    max-width: 1200px;
    margin: auto;
}

.souvenir-item {
    background: #ffffff;
    color: #000000;
    border-radius: 12px;
    padding: 15px;
    text-align: center;
    box-shadow: 0 8px 18px rgba(0,0,0,0.4);
    transition: transform 0.2s;
}

.souvenir-item:hover {
    transform: scale(1.03);
}

.souvenir-item img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 10px;
    cursor: pointer;
}

.price {
    font-weight: bold;
    color: #0a5c91;
    margin: 10px 0;
}

button {
    background: #0a5c91;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
}

button:hover {
    background: #063d63;
}

/* ===== Modal ===== */
.modal {
    display: none;
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
}

.modal-content {
    display: block;
    margin: 5% auto;
    max-width: 600px;
    width: 90%;
    border-radius: 12px;
}

.close {
    position: absolute;
    top: 20px;
    right: 35px;
    font-size: 40px;
    color: white;
    cursor: pointer;
}

</style>
</head>

<body>

<!-- ===== Navigation ===== -->
<nav>
    <a href="#">Home</a>
    <a href="#">Collections</a>
    <a href="#">Museum</a>
    <a href="#">Souvenir Shop</a>
</nav>

<h1>Museum Souvenir Shop</h1>

<!-- ===== Shop Items ===== -->
<div class="shop-container">

    <!-- ITEM 1 -->
    <div class="souvenir-item" data-id="item001">
        <img src="images/starbone-totem.jpg"
             alt="Starbone Totem Replica"
             title="Replica of the Starbone Fossil"
             onclick="openModal(this.src)">

        <h3>Starbone Totem</h3>

        <p>
            Collection: Fossil Relics<br>
            Material: Carved Resin<br>
            Location Found: Abyssal Ridge<br>
            Purpose: Ceremonial Marker
        </p>

        <div class="price">$24.99</div>

        <button onclick="addToCart('item001','Starbone Totem',24.99)">
            Add Starbone Totem to Cart
        </button>
    </div>


    <!-- ITEM 2 -->
    <div class="souvenir-item" data-id="item002">
        <img src="images/coral-incense.jpg"
             alt="Coral Queen Incense"
             title="Scent of the Coral Queen"
             onclick="openModal(this.src)">

        <h3>Coral Queen Incense</h3>

        <p>
            Collection: Deep Ur Rituals<br>
            Material: Coral Resin Blend<br>
            Location Found: Sunken Temple
            <br>Purpose: Sacred Offerings
        </p>

        <div class="price">$14.50</div>

        <button onclick="addToCart('item002','Coral Queen Incense',14.50)">
            Add Coral Queen Incense to Cart
        </button>
    </div>


    <!-- ITEM 3 -->
    <div class="souvenir-item" data-id="item003">
        <img src="images/tidecompass.jpg"
             alt="Ancient Tide Compass"
             title="Guided by the Forgotten Tides"
             onclick="openModal(this.src)">

        <h3>Ancient Tide Compass</h3>

        <p>
            Collection: Navigator Tools<br>
            Material: Brass & Glass<br>
            Location Found: Mariner’s Trench<br>
            Purpose: Ocean Navigation
        </p>

        <div class="price">$39.00</div>

        <button onclick="addToCart('item003','Ancient Tide Compass',39.00)">
            Add Ancient Tide Compass to Cart
        </button>
    </div>


    <!-- ITEM 4 -->
    <div class="souvenir-item" data-id="item004">
        <img src="images/abyss-mask.jpg"
             alt="Abyss Ritual Mask"
             title="Worn by Priests of the Deep"
             onclick="openModal(this.src)">

        <h3>Abyss Ritual Mask</h3>

        <p>
            Collection: Ceremonial Artifacts<br>
            Material: Lacquered Wood<br>
            Location Found: Drowned Sanctum<br>
            Purpose: Ritual Ceremony
        </p>

        <div class="price">$52.75</div>

        <button onclick="addToCart('item004','Abyss Ritual Mask',52.75)">
            Add Abyss Ritual Mask to Cart
        </button>
    </div>

</div>


<!-- ===== Modal Container ===== -->
<div id="imgModal" class="modal">
    <span class="close" onclick="closeModal()">&times;</span>
    <img class="modal-content" id="modalImg">
</div>


<script>
/* ===== Modal Logic ===== */
function openModal(src) {
    document.getElementById("imgModal").style.display = "block";
    document.getElementById("modalImg").src = src;
}

function closeModal() {
    document.getElementById("imgModal").style.display = "none";
}

    <!DOCTYPE html>

<html lang="en">
<head>
<meta charset="UTF-8">
<title>Museum Souvenir Shop</title>

<style>
body {
  margin:0;
  font-family:Arial, Helvetica, sans-serif;
  background:linear-gradient(135deg,#0c1b2a,#1e3c58);
  color:white;
}

h1 { text-align:center; padding:20px; }

nav {
  background:#06121c;
  padding:15px;
  text-align:center;
}

nav a {
  color:white;
  text-decoration:none;
  margin:0 15px;
  font-weight:bold;
}

.shop-container {
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
  gap:25px;
  padding:30px;
  max-width:1200px;
  margin:auto;
}

.souvenir-item {
  background:white;
  color:black;
  border-radius:12px;
  padding:15px;
  text-align:center;
}

.souvenir-item img {
  width:100%;
  height:180px;
  object-fit:cover;
  border-radius:10px;
}

.price {
  font-weight:bold;
  margin:10px 0;
}

button {
  background:#0a5c91;
  color:white;
  border:none;
  padding:10px;
  border-radius:8px;
  cursor:pointer;
}

.qty-badge {
  display:block;
  margin-bottom:8px;
  font-weight:bold;
}
</style>

</head>

<body>

<nav>
  <a href="index.html">Home</a>
  <a href="collections.html">Collections</a>
  <a href="shop.html">Shop</a>
</nav>

<h1>Museum Souvenir Shop</h1>

<button onclick="location.href='cart.html'">
View Cart
</button>

<div class="shop-container">

<!-- ITEM 1 -->

<div class="souvenir-item">

<img src="../images/starbone-totem.jpg">

<h3>Starbone Totem</h3>

<div class="price">$24.99</div>

<span class="qty-badge"></span>

<button
onclick="addToCart(this)"
data-id="item001"
data-name="Starbone Totem"
data-price="24.99"
data-image="../images/starbone-totem.jpg">
Add to Cart </button>

</div>

</div>

<script>

const CART_KEY='museumCartV1';

function readCart(){
 try{
  return JSON.parse(localStorage.getItem(CART_KEY))||[];
 }catch{
  return[];
 }
}

function writeCart(cart){
 localStorage.setItem(CART_KEY,JSON.stringify(cart));
}

function addToCart(btn){

 const id=btn.dataset.id;
 const name=btn.dataset.name;
 const unitPrice=Number(btn.dataset.price);
 const image=btn.dataset.image;

 let cart=readCart();

 const idx=cart.findIndex(it=>it.id===id);

 if(idx>=0){
  cart[idx].qty+=1;
 }else{
  cart.push({id,name,unitPrice,qty:1,image});
 }

 writeCart(cart);

 alert(name+" added to cart");
}

</script>

</body>
</html>

