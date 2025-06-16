- [ ] preparar ambiente para C/asm
- [ ] escrever o hello world em C
- [ ] rodar o hello world
- [ ] 
## 1º Ambiente
---




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
```bash objdump -d a.out ```
para mostra o codigo ASM

![[Pasted image 20250616025220.png]]

saida do comando objdump -d 

![[Pasted image 20250616025400.png]]