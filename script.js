new Vue ({
    el: '#app',
    data: {
        show: false,
        molesVisible: [false, false, false, false, false, false, false, false, false, false, false, false]
    },
    created: function() {
        // for (let i = 0; i < 12; i++) {
        //     molesVisible[i] = false;
        // }
    },
    methods: {
        
    },
    watch: {
        show: function() {
            console.log("show changed")
        }
    },
    computed: {
        getMoleClasses: function() {
            if (this.show) {
                // return "appear"
            }
            else {
                return "hide"
            }
            
        }

    },
})