// string, boolean, number, object, array, tuple, enum, any, void, null, undefined

const x: number = 10;

console.log(x);

// Inferencia
let y = 10;

// annotation
let z: number = 10;

// tipos básicos
// string
let nome: string = "João";
// number
let idade: number = 27;
// boolean
let adulto: boolean = true;

// object
// array
let idades: number[] = [27, 28, 29];
idades.push(30);

console.log(idades);
console.log(idades.length);
console.log(nome.toUpperCase());

// tuplas
let myTuple: [string, number, string[]] = ["João", 27, ["teste", "teste2"]];
console.log(myTuple);

// object literal -> {prop: value}
const user: { nome: string; idade: number } = {
	nome: "João",
	idade: 27,
};

console.log(user);

// union type
let nota: string | number | boolean = 10;
console.log(`Minha nota é ${nota}`);

// type alias
type myIdType = number | string;

const userId: myIdType = 10;
const productId: myIdType = "10";
const orderId: myIdType = 10;

//enun
enum Size {
	p = "Pequeno",
	M = "Médio",
	G = "Grande",
}

const camisa = {
	cor: "Branca",
	valor: 29.9,
	tamanho: Size.G,
};

console.log(camisa);

// literal type (mante o valor fixo)
let teste: "autenticado" | null;

teste = "autenticado";
teste = null;

// funções
function sum(a: number, b: number) {
	return a + b;
}

console.log(`A soma de 10 e 20 é de:  ${sum(10, 20)}`);

// function return
function sayHelloTo(name: string) {
	return `Say hello to my little friend : ${name}`;
}
console.log(sayHelloTo("Régis"));

// void
function logger(msg: string): void {
	console.log(msg);
}

logger("Hello logger");

function greeting(name: string, greeting?: string) {
	if (greeting) {
		console.log(`Hello ${greeting} ${name}`);
		return;
	}
	console.log(`Hello ${name}`);
}

greeting("Régis", "Sr.");
greeting("Régis");

// interface
interface MathFunctionParams {
	n1: number;
	n2: number;
}

function sumInterface(params: MathFunctionParams) {
	return params.n1 + params.n2;
}

console.log(sumInterface({ n1: 10, n2: 20 }));

function multiplyInterface(params: MathFunctionParams) {
	return params.n1 * params.n2;
}

// narrow
// change type
function doSomething(info: number | boolean) {
	if (typeof info === "number") {
		console.log(`O número de info é ${info}`);
		return;
	}

	console.log("Não foi informado um número");
}

doSomething(10);
doSomething(true);

// generics
function showArrayItems<T>(arr: T[]) {
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
	name;
	role;
	isApproved;

	constructor(name: string, role: string, isApproved: boolean) {
		this.name = name;
		this.role = role;
		this.isApproved = isApproved;
	}

	getName() {
		console.log(`O nome do usuário é ${this.name}`);
	}

	showUserRole(canShow: boolean) {
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

// classes com interface
interface IVehicle {
	brand: string;
	showBrand(): void;
}

class Car implements IVehicle {
	brand;
	model;
	wheels;

	constructor(brand: string, wheels: number, model: string) {
		this.brand = brand;
		this.wheels = wheels;
		this.model = model;
	}

	showBrand(): void {
		console.log(`A marca do carro é ${this.brand}`);
	}

	showCarData(): void {
		console.log(
			`O carro marca ${this.brand} e modelo ${this.model} tem as rodas ${this.wheels}`,
		);
	}
}

const Maverick = new Car("Ford", 14, "Maverick");

console.log(Maverick);

Maverick.showBrand();

Maverick.showCarData();

// classes com herança
class SuperCar extends Car {
	speed;
	engine;

	constructor(
		brand: string,
		wheels: number,
		model: string,
		speed: number,
		engine: string,
	) {
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
	return function <T extends { new (...args: any[]): {} }>(constructor: T) {
		return class extends constructor {
			id = Math.random();
			createdAt = new Date();
		};
	};
}

@BaseParameters()
class Person {
	name;

	constructor(name: string) {
		this.name = name;
	}
}

const person = new Person("Régis");

console.log(person);
