/*      Variáveis     */
//Tipos primitivos: boolean, number, string
    let ligado:boolean = false; // Boolean.
    let nome:string = "Arthur"; // String.
    let idade:number = 27;      // Number.
    let altura: number = 1.2;   // Number (Float)

//Tipos especiais: null, undefined
    let nulo:null = null;                   //Só aceita parâmetros nulos
    let indefinido:undefined = undefined;   // Só aceita undefined 

//Tipos Abrangentes: Any, Void
    let retorno:void            //Define um retorno vazio, não retorna nada. Exemplo: Function VerificarBanco():void{}
    let vazio:any = false;      //Retorna Qualquer coisa, utilizado quando não sabemos ao certo o que vai retornar.


/*      Objetos     */
//Objeto - sem previsibilidade
    let produto: object = {
        nome: "Pó branco do bom",
        cor: "Branco",
        preco: 10.50
    }

//Objeto totalmente tipado - com previsibilidade
    type Produto = {
        nome: String,
        cor: String,
        preco: number
    };

    let meuProduto: Produto = {
        nome: "Pó branco do bom",
        cor: "Branco",
        preco: 10.50
    }

/*      Array     */
let dados: string[] = ["felipe", "ana", "adriana"];
let dados2: Array<string> = ["felipe", "ana", "adriana"];

/*      Array de Multi Types     */
//Podemos criar um vetor de array que pode conter mais de um tipo de conteúdos diferente dentro do array.
let informacoes: (string | number )[] = ["Arthur", 69];
//Não é muito viável realizar construções dessa maneira, porém é possível.
//É mais recomendado utilizar objetos totalmente tipados para criar estruturas desse tipo e evitar erros.

/*      Tuplas     */
//Tupla é um vetor de Multi Types, pode tem um lugar certo para cada elemento.
let boleto:[string, number, number] = ["Conta de Agua", 199.90, 254213589631];
//Na Tupla, você precisa respeitar a ordem pré-definida.
//Exemplo: let boleto:[string, number, number] = ["Conta de Agua", 199.90, "teste"]; (ERROR)

/*      Datas     */
 //Interface do tipo Date para armazenamento de datas
let aniversario: Date = new Date("2022-12-01 05:06");//Informar sempre no padrão americano
console. log(aniversario.toString());
