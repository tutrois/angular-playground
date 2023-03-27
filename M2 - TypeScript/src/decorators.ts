// decorators
//Decorator a nivel de classe;
function apiVersion(version:string){
    return (target: any) => {
        Object.assign(target.prototype,{__version: version, __name: "Felipe"})
    }
}
@apiVersion("1.10")
class Api{}

const api = new Api();
//console.log(api.__name);

//Atribute Decorator: Em cima de uma propriedade.
function minLength(length:number){
    return (target: any, key:string) => {
        let _value = target[key];

        const getter = () => _value;
        const setter = (value:string) => {
            if(value.length < 3) {
                throw new Error(`Tamanho minimo é de ${length} caracteres!`)
            }else{
                _value = value;
            }
        };

        Object.defineProperty(target, key, {
            get:getter,
            set:setter,
        });
    };
}

class Api2{
    @minLength(3)
    name: string;

    constructor(name:string){
        this.name = name;
    }
}

const pai = new Api2("art");
console.log(pai.name);



