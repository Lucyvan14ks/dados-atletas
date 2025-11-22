### dados-atletas
Este projeto implementa uma classe Atleta capaz de:
Armazenar dados de um atleta (nome, idade, peso, altura e notas).
Calcular categoria conforme idade.
Calcular IMC.
Calcular a média válida, descartando a menor e a maior nota.
Exibir todas as informações formatadas.

Funcionalidades

### Cálcula a Categoria
Com base na idade do atleta:
Infantil: 9 a 11 anos
Juvenil: 12 e 13 anos
Intermediário: 14 e 15 anos
Adulto: 16 a 30 anos
Sem categoria: fora das faixas acima

### Cálculo do IMC
Fórmula: imc = peso / (altura * altura)
O método calculaIMC() retorna o valor calculado.

### Cálculo da Média Válida
O projeto descarta automaticamente:
A menor nota e a maior nota.
Em seguida calcula a média das notas restantes.

### Métodos de Exibição
Existem métodos como:
obtemNomeAtleta()
obtemIdadeAtleta()
obtemPesoAtleta()
obtemAlturaAtleta()
obtemNotasAtleta()
obtemCategoria()
obtemIMC()
obtemMediaValida()

Todos retornam strings formatadas e prontas para exibição.