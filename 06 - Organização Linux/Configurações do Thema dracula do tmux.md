![[Pasted image 20250319042605.png]]

## Formatos de lef-icon"%W | %S | %(date)"

Não, você não está limitado a apenas #H, #h, #S e #W! O tmux oferece uma lista bem mais extensa de formatos (ou variáveis) que você pode usar para personalizar a barra de status, janelas, painéis e outros elementos. Eu mencionei esses como exemplos porque eles estavam na sua pergunta inicial, mas há muitos outros disponíveis. Vamos explorar isso!

Onde encontrar todos os formatos?

Como eu disse antes, a lista completa está na seção "FORMATS" do manual do tmux. No seu Arch Linux, digite man tmux no terminal, procure por "FORMATS" (use /FORMATS e pressione Enter), e você verá uma tabela com todas as opções. Vou te dar uma visão geral dos mais úteis e comuns aqui, mas tem ainda mais no manual.

Alguns formatos populares do tmux

Aqui estão exemplos adicionais que você pode usar, além dos que você mencionou:

Sobre o host e sessão:

- #H: Nome completo do host (ex.: meucomputador.local).
    
- #h: Nome curto do host (sem domínio, ex.: meucomputador).
    
- #S: Nome da sessão atual (ex.: mysession).
    

Sobre janelas:

- #W: Nome da janela atual (ex.: bash ou algo que você definiu).
    
- #I: Índice da janela atual (ex.: 1, 2, 3...).
    
- #F: Flags da janela (ex.: * para janela ativa, - para inativa).
    

Sobre painéis:

- #P: Índice do painel atual (ex.: 0, 1, 2...).
    
- #T: Título do painel atual (se definido).
    

Informações de tempo:

- #(date): Executa o comando date e mostra a saída (ex.: Wed Mar 19 12:34:56 2025).
    
- Você pode personalizar isso com algo como #(date +%H:%M) para mostrar só a hora (ex.: 12:34).
    

Outros formatos úteis:

- #D: ID único do painel (ex.: %1, útil em scripts).
    
- #c: Número de clientes conectados à sessão.
    
- #R: Última vez que a sessão foi recarregada.
    

Formatos condicionais ou mais avançados:

- #{pane_current_command}: Comando atualmente em execução no painel (ex.: bash, vim).
    
- #{pane_current_path}: Diretório atual do painel (ex.: /home/user/projetos).
    
- #{window_activity}: Timestamp da última atividade na janela.
    

Esses formatos mais longos (sem shorthand como #H) precisam ser usados com a sintaxe #{nome_do_formato}, como você mencionou no exemplo #{host}.

Como usar no Dracula ou no tmux puro?

No seu caso, como você está usando o plugin Dracula, você pode incorporar esses formatos nas configurações do plugin ou diretamente na barra de status do tmux. Por exemplo, no ~/.tmux.conf:

bash

```bash
# Usando no Dracula
set -g @dracula-show-left-icon "#{pane_current_path} | #S"

# Ou na barra de status padrão do tmux
set -g status-right "#H | #(date +%H:%M) | #{pane_current_command}"
```

Isso mostraria:

- No lado esquerdo (com Dracula): o diretório atual e o nome da sessão (ex.: /home/user | mysession).
    
- No lado direito (status padrão): o nome do host, a hora atual e o comando ativo (ex.: meucomputador | 12:34 | bash).
    

Posso mostrar outras informações?

Sim! Além dos formatos nativos, você pode usar comandos shell dentro de #(...) para exibir praticamente qualquer coisa. Por exemplo:

- Uso de CPU: #(top -bn1 | grep "Cpu(s)" | awk '{print $2}').
    
- Memória livre: #(free -h | awk '/^Mem:/ {print $3}').
    
- Temperatura da CPU (se disponível): #(sensors | grep "temp1" | awk '{print $2}').
    

Você só precisa garantir que os comandos sejam rápidos para não atrasar a atualização da barra de status.

Por que você achou que era só #H, #h, #S, #W?

Talvez porque esses foram os exemplos iniciais que você viu, mas o tmux é bem flexível. A lista no manual é extensa, e com os comandos shell, as possibilidades são quase ilimitadas. Se você quer algo específico (como uso de disco, nome de usuário, ou até o clima), me diga que eu te ajudo a configurar!

Quer um exemplo prático?

Se você me contar o que gostaria de mostrar na sua barra (ex.: diretório, hora, comando, etc.), posso te dar um código exato para o seu ~/.tmux.conf. O que acha?