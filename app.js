
Vue.component('counter',{
    data:function(){
        return{
            count:0
        }
    },
    props:['pp'],
    template: '<button v-on:click="count++"> {{pp.name}} {{count}}</button>'
})




var app= new Vue({
    el:"#app",
    data:{
        message:"",
        warning:"",
        list:["Protagonist", "Anna", "Ryuji"]
    },

    watch:{
        message:function(){
            if(this.message.length<2){
                this.warning="Required at last 2 characters!"
            }else{
                this.warning=""
            }

        }
    },

})

function validation(){
    var form=document.getElementById("form");
    var email=document.getElementById("email").value;
    var text=document.getElementById("text");
    var pattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email.match(pattern)){
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML="Submitted"
    }else{
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML="Not Submitted";
    }

    if (email == "")
    {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML="Please enter a valid email address!";
    }
}

