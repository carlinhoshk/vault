Segue uma tabela extensa e detalhada com todas as binds da sua configuração, explicando cada atalho, comando e descrição. Você pode salvar essa nota no Obsidian para referência futura.

---

### Tabela de Keybindings do Tmux

|**Seção**|**Atalho**|**Comando**|**Descrição/Funcionalidade**|**Notas**|
|---|---|---|---|---|
|**Keybindings Gerais**|||||
||Ctrl+X|`lock-server`|Bloqueia o servidor tmux, exigindo a senha para desbloquear.||
||Ctrl+C|`new-window -c "$HOME"`|Cria uma nova janela iniciada no diretório `$HOME`.||
||Ctrl+D|`detach`|Desconecta (detach) da sessão atual, retornando ao shell original.||
||C|`list-clients`|Lista todos os clientes conectados à sessão.|Utilizado no lugar de `*` para evitar conflitos.|
||Ctrl+A|`last-window`|Alterna para a última janela ativa.||
||Ctrl+W|`list-windows`|Lista as janelas disponíveis.||
||w|`list-windows`|Também lista as janelas (alternativa ao Ctrl+W).||
||:|`command-prompt`|Abre um prompt para inserir comandos.||
||S|`choose-session`|Abre uma interface interativa para escolher entre sessões.||
|**Unbind & Reatribuição Personalizada**|||||
||Ctrl+S|_unbind ^S_ seguido de `bind ^S run-shell "tmux new-window 'ssh $(grep "^Host " ~/.ssh/config|awk "{print $2}"|fzf --prompt="SSH Host: ")'"`|
|**Navegação entre Janelas e Panes**|||||
||H|`previous-window`|Move para a janela anterior.||
||L|`next-window`|Move para a próxima janela.||
||Tab|`last-window`|Alterna para a última janela acessada.||
||h|`select-pane -L`|Seleciona o painel à esquerda.||
||j|`select-pane -D`|Seleciona o painel abaixo.||
||k|`select-pane -U`|Seleciona o painel acima.||
||l|`select-pane -R`|Seleciona o painel à direita.||
|**Gerenciamento de Janelas e Panes**|||||
||r|`command-prompt "rename-window %%"`|Abre um prompt para renomear a janela atual.||
||R|`source-file ~/.config/tmux/tmux.conf`|Recarrega a configuração do tmux (útil para aplicar alterações).||
||\| (pipe)|`split-window`|Divide a janela; comportamento padrão de divisão.||
||s|`split-window -v -c "#{pane_current_path}"`|Divide a janela verticalmente, iniciando no mesmo diretório do pane atual.||
||v|`split-window -h -c "#{pane_current_path}"`|Divide a janela horizontalmente, mantendo o diretório atual.||
||" (aspas duplas)|`split-window -v -c "#{pane_current_path}"`|(Bind adicional) Outra opção para dividir verticalmente.||
||- (hífen)|`split-window -h -c "#{pane_current_path}"`|(Bind adicional) Outra opção para dividir horizontalmente.||
||z|`resize-pane -Z`|Maximiza (zoom) ou restaura o painel.||
||c|`kill-pane`|Fecha o painel atual.||
||x|`swap-pane -D`|Troca o painel atual com o de abaixo.||
||P|`set pane-border-status`|Alterna a exibição da barra de borda dos painéis.||
|**Redimensionamento de Panes**|||||
||Prefix + ,|`resize-pane -L 20`|Redimensiona o painel aumentando 20 colunas à esquerda.||
||Prefix + .|`resize-pane -R 20`|Redimensiona o painel aumentando 20 colunas à direita.||
||Prefix + -|`resize-pane -D 7`|Redimensiona o painel aumentando 7 linhas abaixo.||
||Prefix + =|`resize-pane -U 7`|Redimensiona o painel aumentando 7 linhas acima.||
|**Outras Funcionalidades**|||||
||*|`setw synchronize-panes`|Ativa ou desativa a sincronização de entrada entre todos os painéis (envia os mesmos comandos para todos).||
||Ctrl+R|`refresh-client`|Atualiza a visualização do cliente tmux.||
||K|`send-keys "clear"; send-keys "Enter"`|Envia o comando para limpar a tela (clear) seguido de Enter.||
||C-l (sem prefixo)|`send-keys "clear"; send-keys "Enter"`|Atalho sem prefixo para limpar a tela, utilizando a tecla Ctrl+L.||
|**Seleção de Janelas com Alt + Número**|||||
||Alt+1 (M-1)|`select-window -t 1`|Seleciona a janela número 1.||
||Alt+2 (M-2)|`select-window -t 2`|Seleciona a janela número 2.||
||Alt+3 (M-3)|`select-window -t 3`|Seleciona a janela número 3.||
||Alt+4 (M-4)|`select-window -t 4`|Seleciona a janela número 4.||
||Alt+5 (M-5)|`select-window -t 5`|Seleciona a janela número 5.||
||Alt+6 (M-6)|`select-window -t 6`|Seleciona a janela número 6.||
||Alt+7 (M-7)|`select-window -t 7`|Seleciona a janela número 7.||
||Alt+8 (M-8)|`select-window -t 8`|Seleciona a janela número 8.||
||Alt+9 (M-9)|`select-window -t 9`|Seleciona a janela número 9.||
|**Modo de Cópia (Copy Mode)**|||||
||v (no modo copy-mode-vi)|`send-keys -X begin-selection`|Inicia a seleção de texto no modo de cópia utilizando as teclas do estilo Vim.||
|**Integração com tmux-yank**|||||
||Configuração|`set -g @copy_to_os_clipboard true`|Habilita a integração do tmux-yank para copiar o buffer do tmux para a área de transferência do sistema.||

---

### Notas Adicionais:

- **Ctrl+S:**
    
    - Foi removido qualquer binding nativo de Ctrl+S e reatribuído para abrir uma nova janela SSH via fzf. Isso evita conflitos com plugins de save session.
        
    - Se o terminal interceptar o Ctrl+S para controle de fluxo, desative-o com o comando `stty -ixon`.
        
- **Prefixo:**
    
    - O prefixo configurado é **Ctrl+A**. Para enviar comandos prefixados, use esse atalho.
        
- **FZF:**
    
    - No binding de SSH via Ctrl+S, o fzf é utilizado para selecionar o host a partir do arquivo `~/.ssh/config`. Certifique-se de que o fzf esteja instalado e funcionando.
        
- **tmux-yank:**
    
    - A configuração para copiar o buffer para a área de transferência está habilitada.
        

---

Você pode copiar e colar essa tabela no seu Obsidian como uma nota detalhada para referência rápida e para futuras configurações. Se precisar de ajustes ou mais detalhes, estou à disposição!