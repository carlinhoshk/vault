## Instalação dos Pacotes Necessários

```bash
# Instalar ferramentas essenciais
sudo pacman -S nasm gcc gdb

# Opcional: editor com syntax highlighting para assembly
sudo pacman -S vim nano
```

## Estrutura Básica de um Programa Assembly (64-bit)

### Arquivo exemplo: `hello.asm`

```assembly
section .data
    msg db 'Hello, World!', 0xA    ; nossa string com quebra de linha
    msg_len equ $ - msg             ; comprimento da string

section .text
    global _start

_start:
    ; write syscall
    mov rax, 1          ; sys_write
    mov rdi, 1          ; stdout
    mov rsi, msg        ; ponteiro para a mensagem
    mov rdx, msg_len    ; número de bytes
    syscall

    ; exit syscall
    mov rax, 60         ; sys_exit
    mov rdi, 0          ; status code
    syscall
```

## Comandos de Compilação e Execução
```assembly
section .text
global _start

_start:
        mov     edx,len                             ;comprimento da mensagem
        mov     ecx,msg                             ;mensagem a ser escrita
        mov     ebx,1                               ;descritor de arquivo (stdout)
        mov     eax,4                               ;número da system call
; (sys_write)
        int     0x80                                ;call kernel

        mov     eax,1                               ;numero da syscall
; (sys_exit)
        int     0x80                                ;call kernel

section     .data
        msg     db  'Hello, world!',0xa                 ;nossa string lindona
        len     equ $ - msg  
```

### Método 1: NASM + LD (Recomendado)

```bash
# Compilar arquivo assembly para objeto
nasm -f elf64 hello.asm -o hello.o

# Linkar para criar executável
ld hello.o -o hello

# Executar
./hello
```

### Método 2: NASM + GCC (Para programas que usam libc)

```bash
# Para programas que chamam funções C
nasm -f elf64 programa.asm -o programa.o
gcc -no-pie programa.o -o programa
./programa
```

## Script de Automação

### Criar arquivo `compile.sh`:

```bash
#!/bin/bash
# Script para compilar assembly rapidamente

if [ $# -eq 0 ]; then
    echo "Uso: $0 <arquivo.asm>"
    exit 1
fi

filename=$(basename "$1" .asm)

echo "Compilando $1..."
nasm -f elf64 "$1" -o "${filename}.o"

if [ $? -eq 0 ]; then
    echo "Linkando..."
    ld "${filename}.o" -o "$filename"
    
    if [ $? -eq 0 ]; then
        echo "Executável criado: $filename"
        echo "Execute com: ./$filename"
        
        # Limpar arquivo objeto
        rm "${filename}.o"
    else
        echo "Erro no link"
    fi
else
    echo "Erro na compilação"
fi
```

### Tornar executável:

```bash
chmod +x compile.sh
```

### Usar o script:

```bash
./compile.sh hello.asm
```

## Debug com GDB

```bash
# Compilar com símbolos de debug
nasm -f elf64 -g -F dwarf hello.asm -o hello.o
ld hello.o -o hello

# Debuggar
gdb ./hello

# Comandos úteis no GDB:
# (gdb) break _start    - colocar breakpoint
# (gdb) run             - executar
# (gdb) stepi           - executar uma instrução
# (gdb) info registers  - ver registradores
# (gdb) x/10i $rip      - ver próximas 10 instruções
```

## Template Básico para Novos Programas

```assembly
section .data
    ; suas variáveis aqui

section .bss
    ; variáveis não inicializadas

section .text
    global _start

_start:
    ; seu código aqui
    
    ; sempre terminar com exit
    mov rax, 60    ; sys_exit
    mov rdi, 0     ; status
    syscall
```

## Syscalls Úteis no Linux x86_64

|Syscall|RAX|Parâmetros|Descrição|
|---|---|---|---|
|read|0|rdi=fd, rsi=buf, rdx=count|Ler dados|
|write|1|rdi=fd, rsi=buf, rdx=count|Escrever dados|
|open|2|rdi=path, rsi=flags, rdx=mode|Abrir arquivo|
|close|3|rdi=fd|Fechar arquivo|
|exit|60|rdi=status|Terminar programa|

## Dicas Importantes

- Use `syscall` no x86_64 (não `int 0x80`)
- Registradores de 64-bit: RAX, RBX, RCX, RDX, RSI, RDI, etc.
- File descriptors: 0=stdin, 1=stdout, 2=stderr
- Sempre termine o programa com syscall de exit
- Para debug, compile com `-g -F dwarf`

## Estrutura de Diretório Sugerida

```
assembly-estudos/
├── compile.sh
├── exemplos/
│   ├── hello.asm
│   ├── input.asm
│   └── loops.asm
└── projetos/
    └── calculadora.asm
```