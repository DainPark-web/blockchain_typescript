class Human {
    public name: string;
    private age: number;
    public gender: string;

    constructor(name: string, age:number, gender: string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

interface ISayHi {
    userName: string;
    age: number;
    gender: string;
}

const sayHi = ({userName, age, gender}: ISayHi):void => {
    console.log("Hello" + userName, age, gender)
}

const user = {
    userName: "dain",
    age: 333,
    gender: "male"
}
sayHi(user);


const dain = new Human("dain2", 43, "male");
console.log(dain.name)

export {};