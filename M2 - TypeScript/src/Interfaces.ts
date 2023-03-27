/*  Interfaces

Type x Interfaces
Geralmente o type é utilizado para Tipar um objeto e a interface é utilizada quando se vai trabalhar com classe.
Ambos tem a mesma função, e iram funcionar da mesma maneira, por isso geralmente, é mais comum ver todos utilizarem apenas interface em tudo.
*/

//Types
type robot1 = {
    readonly id: number | string, //Propriedade readonly determina que esse parametro é apenas de escrita, não podendo ser modificado
    name: string
}

//Interface
interface robot2 {
    readonly id: number | string,
    name:string
}

//Define o bot1 com o padrão Robot1
const bot1 : robot1 = {
    id : 1,
    name : "Megaman"
}

//Define o bot1 com o padrão Robot2
const bot2: robot2 = {
    id : "2",
    name : "Buzz"
}

//Imprime os objetos
console.log(bot1);
console.log(bot2);


/* Quando Usar a Interface  ?*/
//Estou criando um contrato para definir quais os dados de Pessoa
interface dados_pessoa {
    readonly id: string | number;
    name : string;
    getHello():string; //Estou definindo um metodo que toda Pessoa deve ter;
}
//Estou criando uma Classe Pessoa e extendendo os dados que toda Pessoa deve ter.
class Pessoa implements dados_pessoa {
    id: string | number;//Preciso inportar os dados da interface;
    name: string;

    constructor(id: string | number, name: string){// Definir um construtor para criar a pessoa.
        this.name = name;
        this.id = id
    }

    getHello(): string {// Implemento o metodo que o contrato determina que toda Pessoa deve ter.
        return `Hello ${this.name}`
    }
}

const p = new Pessoa(1, "Arthur");// Crio o objeto do tipo pessoa, passando os parametros que o construtor recebe;
console.log(p.getHello());