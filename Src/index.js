class heroi {
    constructor(nome, idade, tipo,) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo


    }


    atacar() {
        let ataque
        if (this.tipo === "mago") {
            ataque = "magia"

        } else if (this.tipo === "guerreiro") {
            ataque = "espada"

        } else if (this.tipo === "monge") {
            ataque = "artes marciais"

        } else if (this.tipo === "ninja") {

            ataque = "shuriken"
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}


heroi = new heroi("batman", 25, "guerreiro")

heroi.atacar()