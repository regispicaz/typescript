"use strict";
// string, boolean, number, object, array, tuple, enum, any, void, null, undefined
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const x = 10;
console.log(x);
// Inferencia
let y = 10;
// annotation
let z = 10;
// tipos básicos
// string
let nome = "João";
// number
let idade = 27;
// boolean
let adulto = true;
// object
// array
let idades = [27, 28, 29];
idades.push(30);
console.log(idades);
console.log(idades.length);
console.log(nome.toUpperCase());
// tuplas
let myTuple = ["João", 27, ["teste", "teste2"]];
console.log(myTuple);
// object literal -> {prop: value}
const user = {
    nome: "João",
    idade: 27,
};
console.log(user);
// union type
let nota = 10;
console.log(`Minha nota é ${nota}`);
const userId = 10;
const productId = "10";
const orderId = 10;
//enun
var Size;
(function (Size) {
    Size["p"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    cor: "Branca",
    valor: 29.9,
    tamanho: Size.G,
};
console.log(camisa);
// literal type (mante o valor fixo)
let teste;
teste = "autenticado";
teste = null;
// funções
function sum(a, b) {
    return a + b;
}
console.log(`A soma de 10 e 20 é de:  ${sum(10, 20)}`);
// function return
function sayHelloTo(name) {
    return `Say hello to my little friend : ${name}`;
}
console.log(sayHelloTo("Régis"));
// void
function logger(msg) {
    console.log(msg);
}
logger("Hello logger");
function greeting(name, greeting) {
    if (greeting) {
        console.log(`Hello ${greeting} ${name}`);
        return;
    }
    console.log(`Hello ${name}`);
}
greeting("Régis", "Sr.");
greeting("Régis");
function sumInterface(params) {
    return params.n1 + params.n2;
}
console.log(sumInterface({ n1: 10, n2: 20 }));
function multiplyInterface(params) {
    return params.n1 * params.n2;
}
// narrow
// change type
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O número de info é ${info}`);
        return;
    }
    console.log("Não foi informado um número");
}
doSomething(10);
doSomething(true);
// generics
function showArrayItems(arr) {
    arr.forEach((item) => {
        console.log(`Item: ${item}`);
    });
}
const a1 = [1, 2, 3, 4, 5];
const a2 = ["a", "b", "c", "d", "e"];
showArrayItems(a1);
showArrayItems(a2);
// classes
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    getName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`O usuário ${this.name} é ${this.role}`);
            return;
        }
        console.log("Informações restritas");
    }
}
// instanciando o objeto
const newUser = new User("Régis", "Admin", true);
// retornando o objeto
console.log(newUser);
// retrona o nome do usuário instanciado
newUser.getName();
newUser.showUserRole(true);
const newUser2 = new User("João", "User", false);
newUser2.getName();
newUser2.showUserRole(false);
class Car {
    constructor(brand, wheels, model) {
        this.brand = brand;
        this.wheels = wheels;
        this.model = model;
    }
    showBrand() {
        console.log(`A marca do carro é ${this.brand}`);
    }
    showCarData() {
        console.log(`O carro marca ${this.brand} e modelo ${this.model} tem as rodas ${this.wheels}`);
    }
}
const Maverick = new Car("Ford", 14, "Maverick");
console.log(Maverick);
Maverick.showBrand();
Maverick.showCarData();
// classes com herança
class SuperCar extends Car {
    constructor(brand, wheels, model, speed, engine) {
        super(brand, wheels, model);
        this.speed = speed;
        this.engine = engine;
    }
}
const Viper = new SuperCar("Dodge", 4, "Viper", 320, "V10");
console.log(Viper);
Viper.showCarData();
// decorators - serve mais para metadados, para habilitar o uso de decorators é necessário habilitar o experimentalDecorators no tsconfig.json
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParameters()
], Person);
const person = new Person("Régis");
console.log(person);
