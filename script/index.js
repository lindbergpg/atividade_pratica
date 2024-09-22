import { Funcionario, Gerente, Desenvolvedor } from "./class.js";

function exibirErro(mensagem) {
    alert(`Erro: ${mensagem}`);
}

function adicionarFuncionario(event) {
    event.preventDefault();

    try {
        const nome = document.getElementById('nome').value;
        const idade = document.getElementById('idade').value;
        const cargo = document.getElementById('cargo').value;
        const departamento = document.getElementById('departamento').value;
        const linguagem = document.getElementById('linguagem').value;

        const textoRegex = /^[A-Za-z\s]+$/;

        if (!nome.match(textoRegex)) {
            throw new Error('O campo "Nome" deve conter apenas letras.');
        }

        if (departamento && !departamento.match(textoRegex)) {
            throw new Error('O campo "Departamento" deve conter apenas letras.');
        }

        if (!nome || !idade || !cargo) {
            throw new Error('Por favor, preencha todos os campos obrigatórios!');
        }

        let funcionario;

        if (cargo === 'gerente') {
            funcionario = new Gerente(nome, idade, cargo, departamento);
        } else if (cargo === 'desenvolvedor') {
            if (!linguagem) {
                throw new Error('Desenvolvedores devem preencher a linguagem de programação.');
            }
            funcionario = new Desenvolvedor(nome, idade, cargo, linguagem);
        } else {
            funcionario = new Funcionario(nome, idade, cargo);
        }

        funcionario.seApresentar();

        const divFuncionario = document.createElement('div');
        divFuncionario.classList.add('infor-iten');

        const pInfo1 = document.createElement('p');
        pInfo1.textContent = `Olá, me chamo ${funcionario.nome}, tenho ${funcionario.idade} anos e sou ${funcionario.cargo}.`;

        let pInfo2;

        if (cargo === 'gerente') {
            pInfo2 = document.createElement('p');
            pInfo2.textContent = `Departamento: ${funcionario.departamento}`;
        } else if (cargo === 'desenvolvedor') {
            pInfo2 = document.createElement('p');
            pInfo2.textContent = `Linguagem de programação: ${funcionario.linguagem}`;
        }

        const btnRemover = document.createElement('button');
        btnRemover.textContent = '-';
        btnRemover.classList.add('remover');
        btnRemover.onclick = function () {
            divFuncionario.remove();
        };

        divFuncionario.appendChild(pInfo1);
        if (pInfo2) {
            divFuncionario.appendChild(pInfo2);
        }
        divFuncionario.appendChild(btnRemover);

        document.querySelector('.infor').appendChild(divFuncionario);

        document.getElementById('nome').value = '';
        document.getElementById('idade').value = '';
        document.getElementById('cargo').value = 'desenvolvedor';
        document.getElementById('departamento').value = '';
        document.getElementById('linguagem').value = '';

    } catch (error) {
        exibirErro(error.message);
    }
}

document.getElementById('adicionar').addEventListener('click', adicionarFuncionario);
