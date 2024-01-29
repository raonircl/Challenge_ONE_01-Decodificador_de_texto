const criptografarClick = () => {
    const texto = document.getElementById('textarea');
    const exibirTexto = document.getElementById('exibirtexto');
    const rectangle = document.getElementById('rectangle-1');
    const click = document.getElementById('button1');
    
    click.addEventListener('click', function () {
        const textoCriptografado = texto.value.toLowerCase();
        console.log(textoCriptografado);
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
