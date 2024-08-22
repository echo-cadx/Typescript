"use strict";
let idNextSeries = 0;
let menuList = [];
function AddMenu(name, price) {
    let menuitem = {
        id: ++idNextSeries,
        name: name,
        price: price
    };
    //console.log(menuitem)
    menuList.push(menuitem);
}
function FetchMenuList() {
    console.table(menuList);
}
AddMenu("Mekus Mekus Creamy Spinach", 799.00);
AddMenu("Mekus Mekus Ultimate Mash up", 699.00);
AddMenu("Mekus Mekus All Meat", 500.00);
AddMenu("Creamy Spinach Sushi Bake", 395.00);
FetchMenuList();
