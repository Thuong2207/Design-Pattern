class Admin {
    constructor() {
        this.role = "Admin";
    }
}

class Guest {
    constructor() {
        this.role = "Guest";
    }
}

class UserFactory {
    static createUser(type) {
        switch (type) {
            case "admin":
                return new Admin();
            case "guest":
                return new Guest();
            default:
                throw new Error("Loại người dùng không hợp lệ");
        }
    }
}

// Sử dụng
const user = UserFactory.createUser("admin");
console.log(user.role); // Admin