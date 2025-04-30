function Name(fname,lname){
    this.fname=fname;
    this.lname=lname;
}
Name.prototype.fullName=function(){
    console.log(`${this.fname} ${this.lname}`);
};
const b=new Name("Avinash","Yadav");
b.fullName();// Avinash Yadav
