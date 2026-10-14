
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
const itemsCount = document.querySelector("#items")
let totalItems = 0;

foodCont.forEach((container) => {

    container.addEventListener("click", (event) => {

        if (event.target.closest(".addBtn")) {
            const card = event.target.closest(".card");
            const imgSrc = card.querySelector("img").src;
            const foodName = card.querySelector(".foodname").innerText
            const foodPrice = card.querySelector(".foodprice").innerText;
            const basePrice = parseFloat(foodPrice.replace(/[^0-9.]/g, ''));
            totalItems++
            itemsCount.innerHTML = totalItems;

            const cartDiv = document.createElement("div");
            cartDiv.className = `flex flex-col md:flex-row gap-3 mt-5 p-3 border-b border-whiteborder`
            cartDiv.innerHTML = `
            <div class="img">
            <img src="${imgSrc}" alt="cart1Img" class="h-30 w-30 rounded-lg" height="120" width="120">
            </div>
            <div class="food-info flex flex-col">
                                    <span class="text-sm mb-2">${foodName}</span>
                                    <div class="flex flex-row gap-4 items-center mt-1">
                                    <button class="minusBtn h-10 w-10 border border-whiteborder rounded-full cursor-pointer active:bg-[#e7e2d7]">
                                    <i class="fa-solid fa-minus text-sm"></i>
                                    </button>
                                    <span class="quantityNumber">1</span>
                                    <button class="plusBtn h-10 w-10 border border-whiteborder rounded-full cursor-pointer active:bg-[#e7e2d7]">
                                    <i class="fa-solid fa-plus text-sm"></i>
                                    </button>
                                    <span class="font-medium price mx-auto">${foodPrice}</span>
                                    </div>
                                    </div>
                                    </div>`;
            cartItems.appendChild(cartDiv);
            const plusBtn = cartDiv.querySelector(".plusBtn");
            const minusBtn = cartDiv.querySelector(".minusBtn");
            const quanNum = cartDiv.querySelector(".quantityNumber");
            const price = cartDiv.querySelector(".price");
            let qty = 1;
            function changeQuantity() {
                plusBtn.addEventListener("click", () => {
                    qty++;
                    quanNum.innerHTML = qty;
                    let finalPrice = basePrice * qty;
                    price.innerHTML = finalPrice
                })
                minusBtn.addEventListener("click", () => {
                    if (qty > 1) {
                        qty--;
                    }
                    quanNum.innerHTML = qty;
                    let finalPrice = basePrice * qty;
                    price.innerHTML = `$${finalPrice.toFixed(2)}`
                })
            }
            changeQuantity();
        };

    });
});

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
