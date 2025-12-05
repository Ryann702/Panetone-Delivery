document.getElementById('panetoneForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const cep = document.getElementById('cep').value.trim();
    const numero = document.getElementById('numero').value.trim();
    const enderecoDiv = document.getElementById('endereco');
    const mensagemDiv = document.getElementById('mensagem');
    enderecoDiv.textContent = '';
    mensagemDiv.textContent = '';

    if (!/^\d{8}$/.test(cep)) {
        enderecoDiv.textContent = 'Ô loco, esse CEP tá errado! Só número, 8 dígitos.';
        return;
    }

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        if (data.erro) {
            enderecoDiv.textContent = 'Ih, esse CEP não existe! Tenta outro.';
            return;
        }
        const { logradouro, bairro, localidade, uf } = data;
        enderecoDiv.textContent = `Endereço encontrado: ${logradouro}, ${numero} – ${bairro}, ${localidade} – ${uf}`;
        mensagemDiv.textContent = `🚚 Panetone despachado! Vai chegar quentinho em: ${logradouro}, ${numero} – ${bairro}, ${localidade} – ${uf}.` ;
        mensagemDiv.style.fontWeight = 'bold';
        mensagemDiv.textContent = `Se não chegar é culpa dos duendes!`;
    } catch (error) {
        enderecoDiv.textContent = 'Deu ruim na consulta! Tenta de novo ou chama o suporte dos duendes.';
    }
});