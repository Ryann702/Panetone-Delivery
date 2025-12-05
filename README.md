# Panetone-Delivery
Este repositório contém uma interface simples para simular o envio de panetones utilizando a API pública ViaCEP. O usuário informa o CEP e o número da residência, e a aplicação consulta automaticamente o endereço por meio de uma requisição REST. Após obter os dados, o sistema exibe uma mensagem confirmando que o panetone foi enviado com sucesso.

# Panetone Delivery

Simule o envio de panetones utilizando a API pública ViaCEP!

## Funcionalidades
- Consulta de CEP usando a API ViaCEP
- Preenchimento automático do endereço
- Tratamento de CEP inválido
- Simulação de envio de panetone
- Mensagem final personalizada:
  > Panetone enviado com sucesso para: [logradouro], [número] – [bairro], [cidade] – [UF]

## Tecnologias
- HTML / CSS / JavaScript
- Fetch API
- ViaCEP

## Como usar
1. Digite um CEP válido (somente números)
2. Informe o número da residência
3. Clique em "Enviar Panetone"
4. O sistema consulta o ViaCEP e exibe o endereço
5. Veja a mensagem de sucesso personalizada

## Estrutura de pastas
```
Panetone-Delivery/
├── index.html
├── assets/
│   └── style.css
├── src/
│   └── app.js
└── README.md
```

## Demonstração
Abra o arquivo `index.html` em seu navegador para testar a aplicação.
