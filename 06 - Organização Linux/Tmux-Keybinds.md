## Navegação Básica
| Atalho                | Ação                                          |
|-----------------------|-----------------------------------------------|
| `C-a`                 | Prefixo principal (substituiu o padrão `C-b`) |
| `prefix h`            | Seleciona painel à esquerda                   |
| `prefix j`            | Seleciona painel abaixo                       |
| `prefix k`            | Seleciona painel acima                        |
| `prefix l`            | Seleciona painel à direita                    |
| `C-h/j/k/l`           | Navega entre painéis (integração com Vim)     |
| `prefix Tab`          | Alterna para a última janela                  |
| `prefix ^A`           | Alterna para a última janela                  |
| `prefix H`            | Janela anterior                               |
| `prefix L`            | Próxima janela                                |
| `M-1`...`M-9`         | Seleciona janela 1-9 diretamente              |
| `C-PageUp/Down`       | Janela anterior/próxima                       |
| `prefix Space`        | Alterna entre clientes (sessões)              |

## Gerenciamento de Sessões
| Atalho      | Ação                                          |
| ----------- | --------------------------------------------- |
| `prefix ^N` | Prompt para criar nova sessão                 |
| `prefix N`  | Prompt para criar nova sessão (alternativo)   |
| `prefix s`  | Lista e escolhe sessões (via tmux-sessionist) |
| `prefix @`  | Promove painel para nova sessão               |
| `prefix X`  | Mata a sessão atual                           |
| `prefix $`  | Renomeia a sessão atual                       |

## Gerenciamento de Janelas
| Atalho                | Ação                                          |
|-----------------------|-----------------------------------------------|
| `prefix c`            | Cria nova janela no diretório atual           |
| `M-n`                 | Nova janela sem prefixo                       |
| `prefix x`            | Fecha janela/painel atual                     |
| `M-x`                 | Fecha janela atual sem prefixo                |
| `prefix r`            | Renomeia a janela atual                       |
| `prefix ^W/w`         | Lista janelas                                 |
| `C-S-PageUp/Down`     | Move janela para esquerda/direita             |

## Gerenciamento de Painéis
| Atalho                | Ação                                          |
|-----------------------|-----------------------------------------------|
| `prefix \|`           | Divide horizontalmente                        |
| `prefix -`            | Divide horizontalmente (alternativo)          |
| `prefix "`            | Divide verticalmente                          |
| `prefix v`            | Divide horizontalmente (alternativo)          |
| `prefix z`            | Maximiza/minimiza o painel atual              |
| `prefix ,`            | Redimensiona painel para esquerda             |
| `prefix .`            | Redimensiona painel para direita              |
| `prefix -`            | Redimensiona painel para baixo                |
| `prefix =`            | Redimensiona painel para cima                 |
| `prefix X`            | Troca painel com o abaixo                     |
| `prefix *`            | Ativa/desativa sincronização entre painéis    |
| `prefix P`            | Alterna visibilidade da barra de borda        |

## Integrações FZF
| Atalho                | Ação                                          |
|-----------------------|-----------------------------------------------|
| `prefix s`            | Abre nova janela SSH via fzf                  |
| `prefix f`            | Busca e edita arquivos via fzf                |
| `prefix ^D`           | Conecta a container Docker via fzf            |

## Clipboard e Histórico
| Atalho                | Ação                                          |
|-----------------------|-----------------------------------------------|
| `prefix y`            | Copia buffer para clipboard do sistema        |
| `prefix ^L`           | Limpa tela e histórico                        |
| `M-l`                 | Limpa tela e histórico (alternativo)          |

## Controle do Sistema
| Atalho                | Ação                                          |
|-----------------------|-----------------------------------------------|
| `prefix R`            | Recarrega configuração do tmux                |
| `prefix :`            | Abre prompt de comandos tmux                  |
| `prefix ^X`           | Bloqueia o servidor                           |
| `prefix ^D`           | Desconecta da sessão                          |
