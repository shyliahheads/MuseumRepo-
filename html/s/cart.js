:::writing{variant="standard" id="11029"}}
const CART_KEY='museumCartV1';

const TAX_RATE=0.102;
const MEMBER_DISCOUNT_RATE=0.15;
const SHIPPING_RATE=25.00;

const VOLUME_DISCOUNT_TIERS=[
{min:0,max:49.99,rate:0},
{min:50,max:99.99,rate:0.05},
{min:100,max:199.99,rate:0.10},
{min:200,max:Infinity,rate:0.15}
];

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

function removeItem(id){
let cart=readCart();
cart=cart.filter(item=>item.id!==id);
writeCart(cart);
render();
}

function clearCart(){
localStorage.removeItem(CART_KEY);
render();
}

function money(n){
if(n<0){return ($${Math.abs(n).toFixed(2)});}
return $${n.toFixed(2)};
}

function render(){

let cart=readCart();
let html="";

if(cart.length===0){
html="<h2>Your cart is empty</h2>";
document.getElementById("cartContainer").innerHTML=html;
return;
}

let itemTotal=0;

cart.forEach(item=>{
itemTotal+=item.unitPrice*item.qty;
});

let volumeDiscount=0;

for(let tier of VOLUME_DISCOUNT_TIERS){
if(itemTotal>=tier.min && itemTotal<=tier.max){
volumeDiscount=itemTotal*tier.rate;
}
}

let memberDiscount=0;
let memberBox=document.getElementById("memberCheck");

if(memberBox && memberBox.checked){
memberDiscount=itemTotal*MEMBER_DISCOUNT_RATE;
}

if(volumeDiscount>0 && memberDiscount>0){
let choice=prompt("M for Member, V for Volume");

if(choice && choice.toUpperCase()==="M"){
volumeDiscount=0;
}else{
memberDiscount=0;
}
}

let subTotal=itemTotal-volumeDiscount-memberDiscount+SHIPPING_RATE;
let taxAmount=subTotal*TAX_RATE;
let invoiceTotal=subTotal+taxAmount;

html+=<table border="1" width="100%">;
html+=<tr><th>Item</th><th>Name</th><th>Qty</th><th>Amount</th><th>Remove</th></tr>;

cart.forEach(item=>{
let line=item.unitPrice*item.qty;

html+=`

<tr> <td><img src="${item.image}" width="50"></td> <td>${item.name}</td> <td>${item.qty}</td> <td align="right">${money(line)}</td> <td><button onclick="removeItem('${item.id}')">Remove</button></td> </tr>`; });

html+=</table>;

html+=`

<h3>Summary</h3> <table width="300"> <tr><td>ItemTotals</td><td align="right">${money(itemTotal)}</td></tr> <tr><td>Volume Discount</td><td align="right">${money(-volumeDiscount)}</td></tr> <tr><td>Member Discount</td><td align="right">${money(-memberDiscount)}</td></tr> <tr><td>Shipping</td><td align="right">${money(SHIPPING_RATE)}</td></tr> <tr><td>Subtotal</td><td align="right">${money(subTotal)}</td></tr> <tr><td>Tax</td><td align="right">${money(taxAmount)}</td></tr> <tr><td><b>Total</b></td><td align="right"><b>${money(invoiceTotal)}</b></td></tr> </table> `;

document.getElementById("cartContainer").innerHTML=html;
}

window.onload=render;
:::
