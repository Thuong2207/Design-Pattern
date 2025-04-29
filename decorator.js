class Coffee {
    cost() {
        return 10;
    }
}

function withMilk(coffee) {
    const baseCost = coffee.cost();
    coffee.cost = () => baseCost + 2;
    return coffee;
}

function withSugar(coffee) {
    const baseCost = coffee.cost();
    coffee.cost = () => baseCost + 1;
    return coffee;
}

// Sử dụng
let myCoffee = new Coffee();
myCoffee = withMilk(myCoffee);
myCoffee = withSugar(myCoffee);

console.log("Giá cà phê:", myCoffee.cost()); // 13