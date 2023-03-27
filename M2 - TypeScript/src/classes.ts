/*
    Classes
*/
//Estrutura básica de uma classe;
//Exemplo:
class Personagem {
        public nome: string;
        private forca: number;
        protected skill: number;
    
        constructor(nome: string, forca:number, skill:number){
            this.nome = nome;
            this.forca = forca;
            this.skill = skill;
        }
    
        ataque(): string {
            return `Realizou um ataque. Dano causado: ${this.forca}`
        }
    }
    //Criando um personagem com a estrutura da classe Personagem.
    const p1 = new Personagem("Arthur", 10, 69);
    console.log(p1)
    
    //Modificadores de acessos
    
    //PUBLIC : Quando é “public”, qualquer um pode acessar os atributos dessa classe.
    let nomeDoPersonagem = p1.nome;
    console.log(`O nome do personagem é ${nomeDoPersonagem}`);
    //Private: os atributos privados só podem ser acessados dentro da própria classe.
    //Ou seja, caso queira manipular, é necessário criar algum método de controle de acesso.
    console.log(p1.ataque());
    //Protected: Apenas métodos internos da classe e seus filhos podem ter acesso. 
    //Ou seja, funciona como o private, porém as classes que estendem da classe Personagem, podem acessar esses atributos "protected"
    //Exemplo:
    class Mago extends Personagem{
        constructor(nome:string){
            super(nome,15,80);
        }
    
        getSkill(): string{
            return `O Mago ativou a skill de lvl ${this.skill}`;
        }
    }
    //Nesse exemplo, foi possivel criar uma sub-classe chamada Mago onde foi acessado o atributo Skill dentro do metodo "getSkill".
    //Nesse exemplo pode se acessar também o nome, porém não é possivel acessar a força, pois está reservada apenas para a classe Personagem.