// instantiating the vue
new Vue({
    // parent app id, this is similar to ng-app in angular
    el: "#vue-app",
    // all data comes here
    data: {
        name:"Shaun",
        job: "Software Engineer",
        website: "https://www.google.com",
        websiteTag: '<a href="https://www.google.com">The Net Ninja </a>',
        value: 25
    },
    // all methods come here
    methods:{
        greet: function(time){
            // if we want to access the data here meaning this.data.name then:
            console.log(this.name);
            return 'Good '+time + ' ' +this.name;
        },
        add: function(val){
            this.value = this.value+val;
        },
        test: function(){
            alert("testing event modifiers")
        }
    }
});