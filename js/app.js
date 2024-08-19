const menu = [
    {
        id: 1,
        title: "Hamburger",
        category: "breakfast",
        price: 13,
        img: "./img/hamburger.jpeg",
        text: "Juicy beef patty layered with melted cheddar, crisp lettuce, ripe tomato, and tangy pickles, inside a toasted bun."
    },
    {
        id: 2,
        title: "Chicken McNuggets",
        category: "lunch",
        price: 10.99,
        img: "./img/img-2.jpg",
        text: "Bite-sized pieces of crispy, breaded chicken, served with a variety of dipping sauces."
    },
    {
        id: 3,
        title: "Filet-O-Fish",
        category: "breakfast",
        price: 11,
        img: "./img/img-3.jpg",
        text: "A fish sandwich with a fried fish fillet, tartar sauce, and cheese, served on a steamed bun."
    },
    {
        id: 4,
        title: "French Fries",
        category: "lunch",
        price: 15.99,
        img: "./img/img-4.jpg",
        text: "Classic, golden-brown fries, crispy on the outside and soft on the inside, seasoned with just the right amount of salt."
    },
    {
        id: 5,
        title: "McFlurry",
        category: "shake",
        price: 9,
        img: "./img/img-5.jpg",
        text: "A soft-serve ice cream dessert blended with various mix-ins, like Oreo cookies or M&M’s."
    },
    {
        id: 6,
        title: "Apple Pie",
        category: "lunch",
        price: 12,
        img: "./img/img-6.jpg",
        text: "A baked turnover pastry filled with warm, sweet apple filling, lightly spiced with cinnamon."
    },
    {
        id: 7,
        title: "Hash Browns",
        category: "breakfast",
        price: 7,
        img: "./img/img-7.jpg",
        text: "Crispy, golden-brown hash brown patties, perfect as a breakfast side or snack."
    },
    {
        id: 8,
        title: "Vanilla Cone",
        category: "shake",
        price: 10,
        img: "./img/img-8.jpeg",
        text: "A simple yet delicious soft-serve vanilla ice cream cone."
    },
    {
        id: 9,
        title: "Strawberry Shake",
        category: "shake",
        price: 12,
        img: "./img/img-9.jpg",
        text: "A thick, creamy milkshake made with vanilla soft-serve and strawberry syrup, topped with whipped cream."
    },
    {
        id: 10,
        title: "Hot Fudge Sundae",
        price: 15,
        category: "shake",
        img: "./img/img-10.jpeg",
        text: "Vanilla soft-serve ice cream topped with hot fudge and a sprinkle of peanuts."
    },
]

const sectionCenter = document.querySelector(".section-center");
const menuBtns = document.querySelectorAll(".menu-btn");


// Show Menu itemsssss
window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu); 
});

// Filter menu itemssss

menuBtns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        console.log(e.currentTarget.dataset);
    });
});



function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {

        return `<div class="col-lg-6 col-11 menu-item">
                   <div class="d-lg-flex">
                       <div class="text-center">
                        <img src="${item.img}" class="img-fluid menu-img" alt="${item.title}">
                       </div>
                          <div class="item-info">
                             <div class="item-name">
                             <h5>${item.title}</h5>
                             <span class="price">${item.price}</span>
                        <p class="item-text">
                                ${item.text}
                        </p>
                </div>
            </div>
        </div>
    </div>`
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}