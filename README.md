# Panetone-Delivery
Este repositório contém uma interface simples para simular o envio de panetones utilizando a API pública ViaCEP. O usuário informa o CEP e o número da residência, e a aplicação consulta automaticamente o endereço por meio de uma requisição REST. Após obter os dados, o sistema exibe uma mensagem confirmando que o panetone foi enviado com sucesso.

✨ Funcionalidades

Consulta de CEP usando a API ViaCEP (https://viacep.com.br/ws/{cep}/json/)

Preenchimento automático do endereço

Tratamento de CEP inválido

Simulação de envio de panetone

Mensagem final no formato:
“Panetone enviado com sucesso para: [logradouro], [número] – [bairro], [cidade] – [UF]”

🛠️ Tecnologias usadas

HTML / CSS / JavaScript

Fetch API para requisições REST

ViaCEP como provedor de dados

🎯 Objetivo do projeto

Demonstrar de forma simples:

Como consumir APIs REST reais

Como manipular JSON retornado pela API

Como integrar formulários com async/await

Como montar uma resposta dinâmica baseada nos dados recebidos

🚀 Como usar

Digite um CEP válido (somente números)

Informe o número da residência

Clique em Enviar Panetone

A aplicação consulta o ViaCEP e retorna o endereço

O sistema exibe a mensagem de sucesso personalizada
