
const map = L.map('map').setView(
    [21.1702, 72.8311],
    14
);

L.tileLayer(
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: '&copy; OpenStreetMap contributors'
    }
).addTo(map);

const marker = L.marker([21.1702, 72.8311])
    .addTo(map);

marker.bindPopup(
    '<b>Our Restaurant</b><br>Welcome! Visit us today.'
);

const faqItems = document.querySelectorAll('.faqitems');
faqItems.forEach((item) => {
    let answer = item.querySelector(".ans");
    let arrowIcon = item.querySelector("i");
    item.addEventListener("click", (e) => {
        getAns(answer, arrowIcon);
    });
});

function getAns(ans, icon) {
    ans.classList.toggle("max-h-0");
    ans.classList.toggle("max-h-40");
    ans.classList.toggle("opacity-0");
    ans.classList.toggle("opacity-100");
    icon.classList.toggle("fa-angle-down");
    icon.classList.toggle("fa-angle-up");
}
const barsBtn = document.querySelector("#barBtn");
const mobileMenu = document.querySelector("#mobilemenu");
const closeBtn = document.querySelector("#closebtn");
const overlay = document.querySelector("#overlay");
const overlay2 = document.querySelector("#overlay2");

function openSidebar() {
    mobileMenu.classList.remove("translate-x-full");
    overlay.classList.remove("hidden");
}
function closeSidebar() {
    mobileMenu.classList.add("translate-x-full");
    overlay.classList.add("hidden");
}
barsBtn.addEventListener("click", openSidebar);
closeBtn.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);

const anchorElement = mobileMenu.querySelectorAll("a");
anchorElement.forEach((item) => {
    item.addEventListener("click", closeSidebar);
});

const cartBtn = document.querySelector("#cartBtn");
const cardSidebar = document.querySelector(".cartSideBar");
function cartOpenSideBar() {
    overlay2.classList.remove("hidden");
    cardSidebar.classList.remove("translate-x-full");

}
function cardCloseSideBar() {
    overlay2.classList.add("hidden");
    cardSidebar.classList.add("translate-x-full");

}
cartBtn.addEventListener("click", cartOpenSideBar);
overlay2.addEventListener("click", cardCloseSideBar);

const foodCont = document.querySelectorAll(".foodCont")
const cartItems = document.querySelector(".cartItems");
const itemsCount = document.querySelector("#items");
const seeFullMenuBtn = document.querySelectorAll(".seeFullMenu");
const otherCards = document.querySelector(".otherCards");

seeFullMenuBtn.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.add("hidden", "md:hidden");
        otherCards.classList.remove("hidden");
        otherCards.classList.add("flex");
    });
});
ScrollReveal().reveal('.card,#popularCate,#recommend,#review,#about,#location,#unknown,#faq,#contact', {
    origin: "bottom",
    distance: "50px",
    reset: false,
    duration: 500,
    opacity: 0.2,
    viewFactor: 0.01
});


const products = [
    { id: 1, name: "Veggie Crunch Burger", price: 199, img: "assets/Veggie_Crunch_Burger.webp" },
    { id: 2, name: "Paneer Zinger Burger", price: 249, img: "assets/burger1.webp" },
    { id: 3, name: "Cheese Jalpeno Fries", price: 179, img: "assets/CheeseFries.webp" },
    { id: 4, name: "Peri Peri Fries", price: 149, img: "assets/Peri_Peri_Fries.webp" },
    { id: 5, name: "Paneer Butter Masala", price: 329, img: "assets/Paneer_Butter_Masala.webp" },
    { id: 6, name: "Dal Tadka and Jeera Rice", price: 249, img: "assets/Dal_Tadka_Jeera_Rice.webp" },
    { id: 7, name: "Shahi Paneer Handi", price: 349, img: "assets/Shahi_Paneer_Handi.webp" },
    { id: 8, name: "Kadhai Mushroom and Roti", price: 299, img: "assets/Kadhai_Mushroom_Roti.webp" },
    { id: 9, name: "Paneer Tikka Roll", price: 249, img: "assets/Paneer_Tikka_Roll.webp" },
    { id: 10, name: "Noodles Manchurian", price: 279, img: "assets/Noodles_Manchurian.webp" },
    { id: 11, name: "White Sauce Creamy Pasta", price: 299, img: "assets/White_Sauce_Creamy_Pasta.webp" },
    { id: 12, name: "Chole Bhature Combo", price: 229, img: "assets/Chole_Bhature_Combo.webp" },
];
let cart = [];
const addBtn = document.querySelectorAll(".addBtn");
addBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        const id = Number(btn.dataset.id)
        let selectedProducts = products.find(item => item.id === id)
        const existingProduct = cart.find(item => item.id === id);
        if (existingProduct) {
            existingProduct.quantity++;
            const row = cartItems.querySelector(`[data-id="${id}"]`);
            const qty = row.querySelector(".quantityNumber");
            const price = row.querySelector(".price");

            qty.textContent = existingProduct.quantity
            price.textContent = `₹${existingProduct.price * existingProduct.quantity}`

        } else {
            cart.push({
                ...selectedProducts,
                quantity: 1
            });
            itemsCount.textContent = cart.length;
            const div = document.createElement("div");
            div.dataset.id = id;
            div.className = `flex flex-col md:flex-row gap-2 border-b border-amber-700 text-black mt-5`;
            div.innerHTML = `
            <div class="food-info flex flex-col md:flex-row gap-3 pb-5 justify-center"> 
                <img src="${selectedProducts.img}" class="h-40 w-72 object-cover md:h-24 md:w-24 rounded-lg"> 
                <div class="flex flex-col">
                    <span class="font-medium text-center md:text-start mt-3">${selectedProducts.name}</span>
                    <div class="flex flex-row justify-center gap-4 items-center mt-3 pb-3">
                        <button class="minusBtn h-10 w-10 border border-whiteborder rounded-full cursor-pointer active:bg-[#e7e2d7]">
                        <i class="fa-solid fa-minus text-sm"></i>
                        </button>
                        <span class="quantityNumber">1</span>
                        <button class="plusBtn h-10 w-10 border border-whiteborder rounded-full cursor-pointer active:bg-[#e7e2d7]">
                        <i class="fa-solid fa-plus text-sm"></i>
                        </button>
                        <span class="font-medium price mx-auto price">₹${selectedProducts.price}</span>
                    </div>
                </div>
            </div>`;
            const price = div.querySelector(".price")
            const qty = div.querySelector(".quantityNumber");
            const minusBtn = div.querySelector(".minusBtn");
            const plusBtn = div.querySelector(".plusBtn");
            plusBtn.addEventListener('click', () => {
                const item = cart.find(item => item.id === id);
                item.quantity++;
                qty.innerHTML = item.quantity;
                price.textContent = `₹${item.price * item.quantity}`

            });
            minusBtn.addEventListener('click', () => {
                const item = cart.find(item => item.id === id);
                if (item.quantity > 1) {
                    item.quantity--;
                    qty.innerHTML = item.quantity;
                    price.textContent = `₹${item.price * item.quantity}`
                }
            });
            cartItems.appendChild(div)
        }
    });
});