const app = Vue.createApp({
    data() {
        return {
            todayDate: "",
            todayDateTime: "",
            lowerHours: "04h - 05h",
            higherHours: "20h - 21h",
            priceNow: "0.44891",
            lowerPrice: "0.34903",
            higherPrice: "0.49551",
        };
    },
    created() {
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        this.todayDate = today.toLocaleDateString();
        this.todayDateTime = today.toLocaleTimeString();
    },
    methods: {},
});

app.mount("#myApp");
