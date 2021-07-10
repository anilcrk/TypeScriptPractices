// let a : string;
// let b : number;
// let c : boolean;
// let d : any;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// a="anıl";
// b=2;
// c=true;
// let langs : string[];
// langs = ["php","java","C#","python"];
// let numArray : Array<number> = [1,3,4,5,6,7,8,9];
// console.log(...langs);
// d = "my name is anlcrk";
// console.log()
// console.log(a,b,c);
// console.log("watch mode on");
// function addNumber(num1:number,num2:number):void{
//     console.log(num1+num2);
//     return;
// }
// class Person{
//     name:string;
//     age:number;
//     phone:string;
//     constructor(name:string,age:number,phone:string)
//     {
//         this.name = name;
//         this.age = age;
//         this.phone = phone;
//         console.log("Kişi oluştu");
//     }
//     showInfos(){
//         console.log('isim : '+ this.name);
//     }
// }
// class Employee extends Person{
//         salary : number;
//         constructor(name:string,age:number,phone:string,salary:number){
//             super(name,age,phone);
//             this.salary = salary;
//         }f
//         showInfos(){
//             super.showInfos();
//             console.log("Maaş : "+ this.salary);
//         }
//         changeDepartment(){
//             console.log("departman değiştiriliyor");
//         }
// }
// let employee = new Employee("Anıl",23,"5077596098",40000 );
// employee.showInfos();
// employee.changeDepartment();
// interface IDatabase{
//     add();
//     get();
//     delete();
//     update();
// }
// class MySql implements IDatabase{
//     add() {
//         console.log("mysql add");
//     }
//     get() {
//         console.log("mysql get");
//     }
//     delete() {
//         console.log("mysql delete");
//     }
//     update() {
//         console.log("mysql update");
//     }
// }
// let mySql = new MySql();
// mySql.add();
var Database = /** @class */ (function () {
    function Database() {
    }
    Database.prototype.get = function () {
        console.log("database get method");
    };
    Database.prototype.add = function () {
        console.log("database add method");
    };
    return Database;
}());
var MySql = /** @class */ (function (_super) {
    __extends(MySql, _super);
    function MySql() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MySql.prototype["delete"] = function () {
        console.log("mysql delete");
    };
    MySql.prototype.update = function () {
        console.log("mysql update");
    };
    return MySql;
}(Database));
