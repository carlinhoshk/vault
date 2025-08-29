# Comandos Diretos do QEMU (CLI)

|Operação|Comando|
|---|---|
|Iniciar VM básica|`qemu-system-x86_64 -hda disco.qcow2 -m 2G`|
|Iniciar VM com rede|`qemu-system-x86_64 -hda disco.qcow2 -m 2G -netdev user,id=net0 -device e1000,netdev=net0`|
|Iniciar VM com VNC|`qemu-system-x86_64 -hda disco.qcow2 -m 2G -vnc :1`|
|Criar imagem de disco|`qemu-img create -f qcow2 disco.qcow2 20G`|
|Converter formato de disco|`qemu-img convert -f raw -O qcow2 imagem.img imagem.qcow2`|
|Redimensionar disco|`qemu-img resize disco.qcow2 +10G`|
|Ver informações do disco|`qemu-img info disco.qcow2`|
|Compactar disco|`qemu-img convert -O qcow2 -c original.qcow2 compactado.qcow2`|
|Criar snapshot|`qemu-img snapshot -c nome_snapshot disco.qcow2`|
|Listar snapshots|`qemu-img snapshot -l disco.qcow2`|
|Reverter para snapshot|`qemu-img snapshot -a nome_snapshot disco.qcow2`|

## Comandos libvirt (virsh) para gerenciamento

|Operação|Comando|
|---|---|
|Listar todas as VMs|`virsh list --all`|
|Listar VMs em execução|`virsh list`|
|Iniciar VM|`virsh start nome_da_vm`|
|Desligar VM (graceful)|`virsh shutdown nome_da_vm`|
|Forçar desligamento|`virsh destroy nome_da_vm`|
|Reiniciar VM|`virsh reboot nome_da_vm`|
|Suspender VM|`virsh suspend nome_da_vm`|
|Resumir VM suspensa|`virsh resume nome_da_vm`|
|Remover VM|`virsh undefine nome_da_vm`|
|Remover VM com storage|`virsh undefine nome_da_vm --remove-all-storage`|

## Gerenciamento de Redes com libvirt

|Operação|Comando|
|---|---|
|Listar redes virtuais|`virsh net-list --all`|
|Criar rede virtual|`virsh net-define arquivo.xml`|
|Iniciar rede|`virsh net-start nome_da_rede`|
|Definir autostart|`virsh net-autostart nome_da_rede`|
|Desligar rede|`virsh net-destroy nome_da_rede`|
|Remover rede|`virsh net-undefine nome_da_rede`|

## Gerenciamento de Armazenamento com libvirt

|Operação|Comando|
|---|---|
|Listar pools de armazenamento|`virsh pool-list --all`|
|Listar volumes de armazenamento|`virsh vol-list --pool nome_do_pool`|
|Criar pool de armazenamento|`virsh pool-define-as nome_do_pool --type dir --target /caminho/para/diretorio`|
|Criar volume|`virsh vol-create-as nome_do_pool nome_do_volume 10G`|

## QEMU Monitor Commands (dentro da VM em execução)

|Operação|Comando (após pressionar Ctrl+Alt+2)|
|---|---|
|Listar dispositivos|`info block`|
|Ver status da VM|`info status`|
|Criar snapshot|`savevm nome_snapshot`|
|Restaurar snapshot|`loadvm nome_snapshot`|
|Sair do monitor|`quit` (retorna para a VM)|
|Desligar VM|`system_powerdown`|
|Reiniciar VM|`system_reset`|
# Comandos QEMU e Virtual Manager

## Comandos Diretos do QEMU (CLI)

|Operação|Comando|
|---|---|
|Iniciar VM básica|`qemu-system-x86_64 -hda disco.qcow2 -m 2G`|
|Iniciar VM com rede|`qemu-system-x86_64 -hda disco.qcow2 -m 2G -netdev user,id=net0 -device e1000,netdev=net0`|
|Iniciar VM com VNC|`qemu-system-x86_64 -hda disco.qcow2 -m 2G -vnc :1`|
|Criar imagem de disco|`qemu-img create -f qcow2 disco.qcow2 20G`|
|Converter formato de disco|`qemu-img convert -f raw -O qcow2 imagem.img imagem.qcow2`|
|Redimensionar disco|`qemu-img resize disco.qcow2 +10G`|
|Ver informações do disco|`qemu-img info disco.qcow2`|
|Compactar disco|`qemu-img convert -O qcow2 -c original.qcow2 compactado.qcow2`|
|Criar snapshot|`qemu-img snapshot -c nome_snapshot disco.qcow2`|
|Listar snapshots|`qemu-img snapshot -l disco.qcow2`|
|Reverter para snapshot|`qemu-img snapshot -a nome_snapshot disco.qcow2`|

## Comandos libvirt (virsh) para gerenciamento

|Operação|Comando|
|---|---|
|Listar todas as VMs|`virsh list --all`|
|Listar VMs em execução|`virsh list`|
|Iniciar VM|`virsh start nome_da_vm`|
|Desligar VM (graceful)|`virsh shutdown nome_da_vm`|
|Forçar desligamento|`virsh destroy nome_da_vm`|
|Reiniciar VM|`virsh reboot nome_da_vm`|
|Suspender VM|`virsh suspend nome_da_vm`|
|Resumir VM suspensa|`virsh resume nome_da_vm`|
|Remover VM|`virsh undefine nome_da_vm`|
|Remover VM com storage|`virsh undefine nome_da_vm --remove-all-storage`|

## Gerenciamento de Redes com libvirt

|Operação|Comando|
|---|---|
|Listar redes virtuais|`virsh net-list --all`|
|Criar rede virtual|`virsh net-define arquivo.xml`|
|Iniciar rede|`virsh net-start nome_da_rede`|
|Definir autostart|`virsh net-autostart nome_da_rede`|
|Desligar rede|`virsh net-destroy nome_da_rede`|
|Remover rede|`virsh net-undefine nome_da_rede`|

## Gerenciamento de Armazenamento com libvirt

|Operação|Comando|
|---|---|
|Listar pools de armazenamento|`virsh pool-list --all`|
|Listar volumes de armazenamento|`virsh vol-list --pool nome_do_pool`|
|Criar pool de armazenamento|`virsh pool-define-as nome_do_pool --type dir --target /caminho/para/diretorio`|
|Criar volume|`virsh vol-create-as nome_do_pool nome_do_volume 10G`|

## QEMU Monitor Commands (dentro da VM em execução)

| Operação            | Comando (após pressionar Ctrl+Alt+2) |
| ------------------- | ------------------------------------ |
| Listar dispositivos | `info block`                         |
| Ver status da VM    | `info status`                        |
| Criar snapshot      | `savevm nome_snapshot`               |
| Restaurar snapshot  | `loadvm nome_snapshot`               |
| Sair do monitor     | `quit` (retorna para a VM)           |
| Desligar VM         | `system_powerdown`                   |
| Reiniciar VM        | `system_reset`                       |