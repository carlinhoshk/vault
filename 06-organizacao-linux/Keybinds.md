
## Tmux-keybinds
------------------------------------------------
#### 1. **Keybindings Gerais**

| Atalho     | Comando                 | Descrição                                                         |
| ---------- | ----------------------- | ----------------------------------------------------------------- |
| **Ctrl+X** | `lock-server`           | Bloqueia o servidor tmux                                          |
| **Ctrl+C** | `new-window -c "$HOME"` | Cria nova janela iniciada no diretório HOME                       |
| **Ctrl+D** | `detach`                | Desconecta a sessão atual                                         |
| **C**      | `list-clients`          | Lista clientes conectados (substitui o "*" para evitar conflitos) |
| **Ctrl+A** | `last-window`           | Alterna para a última janela ativa                                |
| **Ctrl+W** | `list-windows`          | Lista as janelas (com Ctrl+W)                                     |
| **w**      | `list-windows`          | Lista as janelas                                                  |
| **:**      | `command-prompt`        | Abre o prompt de comando                                          |
| **S**      | `choose-session`        | Abre interface para escolher sessão                               |

---

#### 2. **Unbind & Bind Personalizados**

|Atalho|Comando|Descrição|
|---|---|---|
|**Ctrl+S (^)S**|`unbind ^S` seguido de: `bind ^S run-shell "tmux new-window 'ssh $(grep "^Host " ~/.ssh/config|awk "{print $2}"|

---

#### 3. **Navegação entre Janelas e Painéis**

|Atalho|Comando|Descrição|
|---|---|---|
|**H**|`previous-window`|Alterna para a janela anterior|
|**L**|`next-window`|Alterna para a próxima janela|
|**Tab**|`last-window`|Alterna para a última janela acessada|
|**h**|`select-pane -L`|Seleciona o painel à esquerda|
|**j**|`select-pane -D`|Seleciona o painel abaixo|
|**k**|`select-pane -U`|Seleciona o painel acima|
|**l**|`select-pane -R`|Seleciona o painel à direita|

---

#### 4. **Gerenciamento de Janelas e Painéis**

|Atalho|Comando|Descrição|
|---|---|---|
|**r**|`command-prompt "rename-window %%"`|Renomeia a janela atual via prompt|
|**R**|`source-file ~/.config/tmux/tmux.conf`|Recarrega a configuração do tmux|
|**|**|`split-window`|
|**s**|`split-window -v -c "#{pane_current_path}"`|Divide verticalmente mantendo o diretório atual|
|**v**|`split-window -h -c "#{pane_current_path}"`|Divide horizontalmente mantendo o diretório atual|
|**"**|`split-window -v -c "#{pane_current_path}"`|Nova bind para dividir verticalmente|
|**-**|`split-window -h -c "#{pane_current_path}"`|Nova bind para dividir horizontalmente|
|**z**|`resize-pane -Z`|Maximiza/restaura o painel|
|**c**|`kill-pane`|Fecha o painel atual|
|**x**|`swap-pane -D`|Troca o painel atual com o de baixo|
|**P**|`set pane-border-status`|Alterna a visibilidade da borda dos painéis|

---

#### 5. **Redimensionamento de Painéis**

|Atalho (Prefixo + tecla)|Comando|Descrição|
|---|---|---|
|**Prefix + ,**|`resize-pane -L 20`|Redimensiona, diminuindo 20 colunas à esquerda|
|**Prefix + .**|`resize-pane -R 20`|Redimensiona, aumentando 20 colunas à direita|
|**Prefix + -**|`resize-pane -D 7`|Redimensiona, aumentando 7 linhas abaixo|
|**Prefix + =**|`resize-pane -U 7`|Redimensiona, aumentando 7 linhas acima|

---

#### 6. **Outras Funcionalidades**

|Atalho|Comando|Descrição|
|---|---|---|
|*****|`setw synchronize-panes`|Ativa/desativa a sincronização de entrada entre painéis|
|**Ctrl+R**|`refresh-client`|Atualiza o cliente (refresh)|
|**K**|`send-keys "clear"; send-keys "Enter"`|Envia comandos para limpar o terminal|
|**C-l**|`send-keys "clear"; send-keys "Enter"`|Alternativa para limpar a tela (binding nativo com C-l)|
|**: (do prompt)**|`command-prompt`|Abre o prompt de comando|
|**Modo de Cópia (v em copy-mode)**|`send-keys -X begin-selection`|Inicia a seleção no modo de cópia (estilo Vim)|

---

#### 7. **Seleção de Janelas com Alt + Número**

|Atalho|Comando|Descrição|
|---|---|---|
|**Alt+1**|`select-window -t 1`|Seleciona a janela 1|
|**Alt+2**|`select-window -t 2`|Seleciona a janela 2|
|**Alt+3**|`select-window -t 3`|Seleciona a janela 3|
|**Alt+4**|`select-window -t 4`|Seleciona a janela 4|
|**Alt+5**|`select-window -t 5`|Seleciona a janela 5|
|**Alt+6**|`select-window -t 6`|Seleciona a janela 6|
|**Alt+7**|`select-window -t 7`|Seleciona a janela 7|
|**Alt+8**|`select-window -t 8`|Seleciona a janela 8|
|**Alt+9**|`select-window -t 9`|Seleciona a janela 9|

---