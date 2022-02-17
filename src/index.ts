const userName:string = "DainPark"
, age = 28
, gender = "Male";


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


