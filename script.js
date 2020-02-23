new Vue ({
    el: '#app',
    data: {
        gameState: 'unstarted',
        molesVisible: [false, false, false, false, false, false, false, false, false, false, false, false],
        arrayOfScores: [false, false, false, false, false, false, false, false, false, false, false, false],
        popOutFrequencyMax: 4000,
        popOutFrequencyMin: 1000,
        popOutFrequency: 1000,
        stayOutDurationMax: 2000,
        stayOutDurationMin: 1000,
        timeoutID: null,
        score: 0,
    },
    mounted: function() {
        // this.startGame();
    },
    computed: {

    },
    methods: {
        newGame: function() {
            this.gameState = 'unstarted';
            this.molesVisible = [false, false, false, false, false, false, false, false, false, false, false, false];
            this.popOutFrequencyMax = 4000;
            this.popOutFrequencyMin = 1000;
            this.popOutFrequency = 1000;
            this.stayOutDurationMax = 2000;
            this.stayOutDurationMin = 1000;
            this.timeoutID = null;
            this.score = 0;
        },
        startGame: function() {
            this.timeoutID = setTimeout(() => {
                this.popOutFrequency = (Math.random() * this.popOutFrequencyMax) + this.popOutFrequencyMin;
                this.popOutMole();
                this.startGame();
            }, this.popOutFrequency)
            this.gameState = 'running';
        },
        pauseGame: function() {
            clearTimeout(this.timeoutID);
            this.gameState = 'paused';
        },
        endGame: function() {
            this.gameState = 'ended';
        },
        popOutMole: function() {
            // Pick a random number between 0 and 11 to select the hole
            let holeNum = Math.floor((Math.random() * 11));

            // If the currently selected mole is already out, call
            // popOutMole again to select a different mole
            if(this.arrayOfMoles[holeNum]) {
                return this.popOutMole();
            }

            // Set the mole of that hole to visible
            Vue.set(this.arrayOfMoles, holeNum, true);
            
            // Wait stayOutFrequency, then signal the mole to go back into the hole
            setTimeout(() => {
                Vue.set(this.arrayOfMoles, holeNum, false);
            }, (Math.random() * this.stayOutDurationMax) + this.stayOutDurationMin )

        },
        updateFrequencies: function() {
            if (this.popOutFrequencyMax > 350)
                this.popOutFrequencyMax -= 100;
            if (this.popOutFrequencyMin > 300)
                this.popOutFrequencyMin -= 100;
            if (this.stayOutDurationMax > 350)
                this.stayOutDurationMax -= 100;
            if (this.stayOutDurationMin > 300)
                this.stayOutDurationMin -= 100;
        },
        moleTapped: function(index) {
            Vue.set(this.arrayOfMoles, index, false);
            Vue.set(this.arrayOfScores, index, true);
            setTimeout(() => {
                Vue.set(this.arrayOfScores, index, false);
            }, 600)
            this.score++;
            this.updateFrequencies();
        },
    },
})