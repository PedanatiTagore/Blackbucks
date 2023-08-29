var products = [
    { brandName: "Apple", price: 75000, productName: "iPhone 12" },
    { brandName: "Samsung", price: 80000, productName: "Galaxy S21" },
    { brandName: "Sony", price: 45000, productName: "Xperia 5" },
    { brandName: "Apple", price: 90000, productName: "iPhone 13" }
];

function filterByBrand(data, brand) {
    return data.filter(product => product.brandName === brand);
}


function filterByPrice(data, minPrice) {
    return data.filter(product => product.price > minPrice);
}


function filterByBrandAndPrice(data, brand1, brand2, minPrice) {
    return data.filter(product => (product.brandName === brand1 || product.brandName === brand2) && product.price > minPrice);
}


var appleProducts = filterByBrand(products, "Apple");
console.log("Products with brand Apple:", appleProducts);


var expensiveProducts = filterByPrice(products, 50000);
console.log("Expensive products:", expensiveProducts);


var highEndProducts = filterByBrandAndPrice(products, "Apple", "Samsung", 70000);
console.log("High-end products:", highEndProducts);