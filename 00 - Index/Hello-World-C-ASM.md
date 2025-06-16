- [ ] preparar ambiente para C/asm
- [x] escrever o hello world em C
- [x] rodar o hello world x86
- [ ] rodar o hello-world asm
## 1º Ambiente
---
Já configurado.


---
## 2º Escrever codigo

codigo 
```clike
#include <stdio.h>

int main()
{
	int i;
	for(i=0; i <10; i++)
{
	puts{"Hello, mundo!\n"};
}
	return 0;
}

#include <stdio.h>

int main() 
{
    int i;
    for (i = 0; i < 10; i++) 
    {
        puts("Hello, Mundo!\n");
    }
    return 0;
}


```

---
## 3º Rodar código
Comando para compilar e o comando 
```bash 
objdump -d a.out
```

para mostra o codigo ASM

![[Pasted image 20250616025220.png]]

saida do comando
```bash
objdump -d
```

![[Pasted image 20250616025400.png]]