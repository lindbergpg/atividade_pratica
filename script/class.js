class Funcionario {
    constructor (nome, idade, cargo) {
        this.nome = nome,
        this.idade = idade,
        this.cargo = cargo
        this.trabalhando = false
    }
    
    seApresentar() {
        console.log(`Olá, me chamo ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`)
    }

    trabalhar() {
        if(this.trabalhando) {
            console.log("Está trabalhando.")
            return
        }
        this.trabalhando = true
    }
}


class Gerente extends Funcionario {
    constructor (nome, idade, cargo, departamento) {
        super(nome, idade, cargo)
        this.departamento = departamento
    }
    
    gerenciar() {
        console.log(`Verificando status de atividades de ${funcionario.nome}.`)
    }
    
}


class Desenvolvedor extends Funcionario {
    constructor (nome, idade, cargo, linguagem) {
        super(nome, idade, cargo)
        this.linguagem = linguagem
    }
    
    programar() {
        console.log(`Programando em ${this.linguagem}.`)
    }
}

export { Funcionario, Gerente, Desenvolvedor };

/*

var funcionario = new Funcionario("João", 23, "Desenvolvedor front-end")
funcionario.seApresentar()

var gerente = new Gerente("Pedro", 45, "Gerente de tecnologia", "Desenvolvimento")
console.log(gerente)
gerente.seApresentar()
gerente.gerenciar()
gerente.trabalhar()
gerente.trabalhar()

var desenvolvedor = new Desenvolvedor("David", 26, "Desenvolverdor fullstack", "Java")
console.log(desenvolvedor)
desenvolvedor.seApresentar()
desenvolvedor.programar()
desenvolvedor.trabalhar()
desenvolvedor.trabalhar()
*/