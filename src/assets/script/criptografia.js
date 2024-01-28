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

module.exports = criptografia;
