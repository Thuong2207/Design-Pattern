class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(message) {
        this.observers.forEach(observer => observer.update(message));
    }
}

class User {
    constructor(name) {
        this.name = name;
    }

    update(message) {
        console.log(`${this.name} nhận: ${message}`);
    }
}

// Sử dụng
const chatRoom = new Subject();
const user1 = new User("MEKKY");
const user2 = new User("HANLI");

chatRoom.subscribe(user1);
chatRoom.subscribe(user2);

chatRoom.notify("Có tin nhắn mới!"); // MEKKY và HANLI nhận