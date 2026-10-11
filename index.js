
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