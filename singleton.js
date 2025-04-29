const Singleton = (function () {
    let instance;

    function createInstance() {
        return {
            name: "Server Connection",
            time: new Date()
        };
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

// Sử dụng
const a = Singleton.getInstance();
const b = Singleton.getInstance();
console.log(a === b); // true