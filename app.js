const app = Vue.createApp({
    data() {
        return {
            todayDate: "",
            todayDateTime: "",
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
