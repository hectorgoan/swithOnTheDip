const app = Vue.createApp({
    data() {
        return {
            todayDate: "",
        };
    },
    created() {
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        this.todayDate = today.toLocaleDateString();
    },
    methods: {},
});

app.mount("#myApp");
