(function (){
    function a(name){
        console.log(this.name);
    }
    function b(age){
        console.log(this.age);
    }
    a(name);
    b(age);
    c=(city)=>{
        console.log(this.city);
    }
    c(city);
})(name="Avinash",age=21,city="Chennai");