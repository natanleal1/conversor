### Conversor de Temperatura 🌡️

Este projeto é um **conversor de temperatura** simples e intuitivo, construído com **HTML**, **CSS** e **JavaScript**. Ele permite ao usuário converter valores de temperatura entre as escalas Celsius e Fahrenheit de forma rápida e eficiente.

---

### A Lógica por Trás do JavaScript 💻

A funcionalidade principal do projeto é controlada por uma única função, a `convert()`. A lógica é a seguinte:

1.  A função verifica qual das opções de conversão (para Fahrenheit ou para Celsius) está selecionada pelo usuário usando `toFahrenheit.checked` ou `toCelsius.checked`.
2.  Com base na seleção, ela obtém o valor numérico do campo de texto (`textBox.value`).
3.  **Se a conversão for para Fahrenheit**: a fórmula `(C * 9/5) + 32` é aplicada.
4.  **Se a conversão for para Celsius**: a fórmula `(F - 32) * 5/9` é aplicada.
5.  O resultado é formatado para ter duas casas decimais com `toFixed(2)`.
6.  Por fim, o resultado é exibido na tela, fornecendo um feedback claro ao usuário. Se nenhuma unidade for selecionada, uma mensagem de erro é mostrada, orientando o usuário a fazer uma escolha.

Este projeto é um ótimo exemplo de como usar a lógica condicional (`if/else`) para criar uma funcionalidade interativa e útil.
