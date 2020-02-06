new Vue ({
    el: '#app',
    data: {
        show: false,
    },
    methods: {

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