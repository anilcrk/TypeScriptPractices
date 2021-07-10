// let a : string;
// let b : number;
// let c : boolean;
// let d : any;

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



abstract class Database{

    get(){
        console.log("database get method");
    }

    add(){
        console.log("database add method");
    }

    abstract delete();

    abstract update();

}

class MySql extends Database{
    delete() {
        console.log("mysql delete");
    }
    update() {
        console.log("mysql update");
    }

}


