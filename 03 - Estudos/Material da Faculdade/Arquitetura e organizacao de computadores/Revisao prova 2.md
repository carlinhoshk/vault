| Situação                                             | Método                                                                                        |
| ---------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| **Origem: Decimal. Destino: Binário/Octal/Hex.** | ==Divisões sucessivas por _B_ (B = 2, 8 ou 16), anotando restos e lendo de baixo para cima.== |
| **Origem: Binário/Octal/Hex. Destino: Decimal.** | ==Multiplicar cada dígito por _B_posição e somar.==                                           |
| **Origem: Binário. Destino: Octal ou Hex.**          | Agrupamento de bits (3 para octal; 4 para hex).                                               |
| **Origem: Octal/Hex. Destino: Binário.**             | Converter cada dígito para grupos fixos de bits (3 ou 4).                                     |
| **Origem: Octal. Destino: Hex (ou vice-versa).**     | – Passar por binário (mais comum).                                                            |
|                                                      | – Ou usar “decimal” como intermediário (menos eficiente).                                     |
