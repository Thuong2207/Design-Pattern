class PercentageDiscount {
    calculate(price) {
        return price * 0.9;
    }
}

class FixedDiscount {
    calculate(price) {
        return price - 20;
    }
}

class ShoppingCart {
    constructor(discountStrategy) {
        this.discountStrategy = discountStrategy;
    }

    setStrategy(strategy) {
        this.discountStrategy = strategy;
    }

    checkout(price) {
        return this.discountStrategy.calculate(price);
    }
}

// Sử dụng
const cart = new ShoppingCart(new PercentageDiscount());
console.log("Giá sau giảm:", cart.checkout(100)); // 90

cart.setStrategy(new FixedDiscount());
console.log("Giá sau giảm:", cart.checkout(100)); // 80