interface menu_i{
    id : number,
    name : string,
    price : number
}

let idNextSeries : number = 0;
let menuList  : menu_i[] = [];

function AddMenu(name : string,price:number){
    let menuitem : menu_i = {
        id : ++idNextSeries,
        name : name,
        price : price
    }
    //console.log(menuitem)
    menuList.push(menuitem);
}

function FetchMenuList(){
    console.table(menuList)
}



AddMenu("Mekus Mekus Creamy Spinach",799.00)
AddMenu("Mekus Mekus Ultimate Mash up",699.00)
AddMenu("Mekus Mekus All Meat",500.00)
AddMenu("Creamy Spinach Sushi Bake",395.00)
FetchMenuList()

