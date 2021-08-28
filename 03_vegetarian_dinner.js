// Using the array.filter method in this exercise to create an unordered array of vegetarian options
function vegetarianMenu(menu) {
    // select the HTML element to target and handle the list to be generated
    const menuNode = document.querySelector("#menu")
    // create a new array of vegetarian options
    const vegetarianOptions = menu.filter(
        (option) => option.isVegetarian === true
    )
    // dynamically generate array using forEach
    vegetarianOptions.forEach(option => {
        // createElement to create li tags to be generated
        let dish = document.createElement('li')
        // textContent to append the string name of the options in the list
        dish.textContent = option.name
        // append finished array as child of "menu" element on page
        menuNode.appendChild(dish)
    })
}

// create a menu to pass to the function
const menu = [
    {
        name: "chicken parmesan",
        isVegetarian: false
    },
    {
        name: "Stuffed shells",
        isVegetarian: true
    },
    {
        name: "Spaghetti and meatballs",
        isVegetarian: false
    },
    {
        name: "Tiramisu",
        isVegetarian: true
    },
    {
        name: "Steamed Tofu",
        isVegetarian: true
    }
]

vegetarianMenu(menu)