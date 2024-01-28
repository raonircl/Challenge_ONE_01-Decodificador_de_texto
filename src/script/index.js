const criptografarClick = () => {
    const texto = document.getElementById('textarea');
    const exibirTexto = document.getElementById('exibirtexto');
    const rectangle = document.getElementById('rectangle-1');
    const click = document.getElementById('button1');

    click.addEventListener('click', function () {
        const textoCriptografado = texto.value.toLowerCase();



        rectangle.classList.add('hidden');
        exibirTexto.removeAttribute('hidden');
        exibirTexto.textContent = texto.value;
    });
};
