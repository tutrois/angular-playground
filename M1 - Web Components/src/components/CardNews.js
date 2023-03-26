class CardNews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());

    }

    //base componente
    build() {
        //Gerando elemento pai
        const componenteRoot = document.createElement("div");
        componenteRoot.setAttribute("class", "card");

        //atribuindo elementos filhos para o elemento pai para build
        componenteRoot.appendChild(this.generatedCardLeft());
        componenteRoot.appendChild(this.generatedCardRight());
        
        return componenteRoot;
    }

    //Stilo do componente
    style() {
        const style = document.createElement("style");

        style.textContent = `
            .card{
                width: 80%;
                box-shadow: 9px 9px 27px 0px rgb(51, 50, 50);
                -webkit-box-shadow: 9px 9px 27px 0px rgb(51, 50, 50);
                -moz-box-shadow:9px 9px 27px 0px rgb(51, 50, 50);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin: 10px 0 0 5px ;
            }
            
            .card__left{
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }
            
            .card__left > a{
                margin-top: 15px;
                font-size: 25px;
                color: black;
                text-decoration: none;
                font-weight: 600;
            }
            
            .card__left > p{
                color: rgb(105, 104, 104);
            }
            
            .card__left > span{
                font-weight: 400;
            }
            
            img{
                width: 250px;
                height: 100%;
            }
 
        `

        return style;
    }

    //Gerando Card da direita
    generatedCardRight(){
        //Gerando elemento pai
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        //criando elementos filhos
        const imagem = document.createElement("img");

        //Atribuindo valores aos elementos via Props
        imagem.src = (this.getAttribute("src") || "./assets/user-default.png");
        imagem.alt = this.getAttribute("imagem-alt")

        //atribuindo elementos filhos para o elemento pai para build
        cardRight.appendChild(imagem);

        return cardRight;
    }

    //Gerando Card da Esqueda
    generatedCardLeft() {
        //Gerando elemento pai
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        //criando elementos filhos
        const autor = document.createElement("span");
        const linkTitulo = document.createElement("a");
        const conteudo = document.createElement("p");

        //Atribuindo valores aos elementos via Props
        autor.textContent = "By " + (this.getAttribute("autor") || "desconhecido");
        linkTitulo.textContent = this.getAttribute("titulo");
        linkTitulo.href = this.getAttribute("link-url");
        conteudo.textContent = this.getAttribute("conteudo");

        //atribuindo elementos filhos para o elemento pai para build
        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitulo);
        cardLeft.appendChild(conteudo);

        return cardLeft
    }
}

customElements.define("card-news", CardNews);