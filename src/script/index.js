const criptografarClick = () => {
    const texto = document.getElementById('textarea');
    const exibirTexto = document.getElementById('exibirtexto');
    const rectangle = document.getElementById('rectangle-1');
    const click = document.getElementById('button1');
    
    click.addEventListener('click', function () {
        const textoCriptografado = texto.value.toLowerCase();
        rectangle.classList.add('hidden');
        exibirTexto.removeAttribute('hidden');
        exibirTexto.textContent = criptografia(textoCriptografado);
    });
};

const descriptografarClick = () => {
    const texto = document.getElementById('textarea');
    const exibirTexto = document.getElementById('exibirtexto');
    const rectangle = document.getElementById('rectangle-1');
    const click = document.getElementById('button2');

    click.addEventListener('click', function () {
        const textoDescriptografado = texto.value.toLowerCase();

        rectangle.classList.add('hidden');
        exibirTexto.removeAttribute('hidden');
        exibirTexto.textContent = descriptografia(textoDescriptografado);
    });
};

const copiar = () => {
    const botaoCopiar = document.getElementById('copiar');

    botaoCopiar.addEventListener('click', function () {
        const textoCopiar = document.getElementById('exibirtexto').textContent;
        console.log(textoCopiar);
        areaDeTransferencia(textoCopiar);
    });
};

const areaDeTransferencia = (texto) => {
    if (!texto.trim()) {
        exibirMensagem('O texto está vazio.', true);
        return;
    }
    
    navigator.clipboard.writeText(texto)
        .then(() => {
            exibirMensagem('Texto copiado com sucesso!');
        })
        .catch((error) => {
            exibirMensagem('Erro ao copiar para a área de transferência.', true);
        });
};

const exibirMensagem = (mensagem, erro = false) => {
    const mensagemElement = document.getElementById('mensagem');
    mensagemElement.removeAttribute('hidden');
    mensagemElement.textContent = mensagem;
    mensagemElement.style.color = erro ? 'red' : 'green';

    setTimeout(() => {
        mensagemElement.textContent = ''
        mensagemElement.setAttribute('hidden', true);
    }, 3000)
};

const criptografia = (texto) => {
    const mapaDeCriptografia = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    return texto.replace(/[eioua]/g, letra => mapaDeCriptografia[letra]);
};

const descriptografia = (texto) => {
    const mapaDeCriptografia = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    return texto.replace(/(enter|imes|ai|ober|ufat)/g, palavra => mapaDeCriptografia[palavra]);
};

criptografarClick();
descriptografarClick();
copiar();