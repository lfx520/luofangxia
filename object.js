function person(name,sex,age)
{
this.name = name
this.sex = sex
this.age = age

}
var myFriend = new person("ling", "man", "19");
console.log(myFriend.toString());
console.log(myFriend);


function Complex ( a, b ){
	this.a = a;
	this.b = b;	
	
}

var num = new Complex(0, 0);
var num1 = new Complex(1, -1);
var num2 = new Complex(-1, 1);
console.log(num);

Complex.prototype.mul = function(that){
	return new Complex(
		this.a * that.a - this.b * that.b, 
        this.a * that.b + this.b*that.a             
		)
}
console.log(num.mul(num1));
console.log(num.mul(num2));
console.log(num1.mul(num2));


Complex.prototype.add = function(that){
	return new Complex(this.a + that.a, this.b + that.b);
};
console.log(num.add(num1));
console.log(num.add(num2));
console.log(num1.add(num2));

Complex.prototype.mag = function(){ 
	return Math.sqrt(this.a*this.a + this.b*this.b); };
console.log(num.mag());
console.log(num1.mag());
console.log(num2.mag());

Complex.prototype.neg = function(){
	return new Complex(-this.a, -this.b);
};
console.log(num1.neg());
console.log(num2.neg());

Complex.prototype.equal = function(that){
	return that != null && 
	that.constructor === Complex &&
	this.r === that.r && this.i === that.i;
};
console.log(num.equal());

Complex.prototype.tostring = function(){
	with(this){
		return "{" + a + "," + b +"}" ;	}
}
console.log(num.tostring());
console.log(num1.tostring());
console.log(num2.tostring());
