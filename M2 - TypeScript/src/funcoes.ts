/*  Funções   */
//Funções com retornos implicitos.
function addToHello(name: string) {
    return `Hello ${name}`;
}// Nesse exemplo, o TS entendeu de forma implicita que o retorno dessa função é um string;
let retorna:string = addToHello("Arthur");
console.log(retorna);

//Funções com retornos explicitos.
function somaDoisNumeros(x:number, y:number): number{
    return x + y;
}// nesse exemplo estou declarando que o retorno da função será sempre um number.
let resultado: number = somaDoisNumeros(2, 8);
console.log(resultado);

//Funções com OU (||)
function CallToPhone (phone: number | string ){
    return phone;
} 

//O retorno também pode conter um OU (||).
function CallToPhoneDuplo (phone: number|string): number | string {
    return phone;
}

/*  Funções Assync  */
async function getDatabase(id:Number) : Promise<String>{
    return "felipe";
}