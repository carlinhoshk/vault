
[SOURCE CODE GITHUB](https://invent.kde.org/network/kdeconnect-kde)
[SOURCE CODE GITHUB](https://github.com/KDE/kdeconnect-kde)

- [x] Baixar repo source
- [ ] Rodar o kde connect em source code como ambiente dev
- [ ] Debugar o kde connect em ambiente dev

---
## O kde‑builder (parte do projeto [Craft](https://community.kde.org/Craft))

É uma **ferramenta de automação** para baixar, compilar e instalar projetos KDE (e suas dependências) de forma isolada, sem poluir o seu sistema global. Se você vem do mundo web/backend, pense nele como um **npm** ou **pip** para projetos C++/Qt: ele resolve dependências, baixa o código-fonte, executa o CMake/Make/Install e prepara tudo num prefixo próprio.

---

## 1. Por que usar o r com KDE Connect?

* **Versões mais recentes**: você tem acesso às últimas features e correções antes dos repositórios da distro.

* **Ambiente isolado**: tudo vai para `~/kde/` (ou onde configurar), sem mexer em `/usr`.

* **Repetível**: você pode clonar, buildar e limpar com comandos padronizados, ideal para testar patches.

---

## 2. Instalação do Craft + kde‑builder

1. Instale pré-requisitos mínimos (Qt, CMake, git, ninja, Python):

```bash

sudo pacman -S base-devel cmake git python-pyqt5 qt5-tools ninja

```

2. Clone o ramo “Craft” que contém o kde‑builder:

```bash

git clone https://invent.kde.org/maui/craft.git ~/craft

```

3. Ajuste variável de ambiente (adicione ao seu `~/.bashrc` ou `~/.zshrc`):

```bash

export PATH="$HOME/craft/bin:$PATH"

```

4. Carregue as mudanças no shell atual:

```bash

source ~/.bashrc

```

---

## 3. Configurando um “profile” para builds

O Craft usa **profiles** para saber onde instalar:

```bash

craft --init

```

Ele vai perguntar onde criar o prefixo (por padrão `~/craftroot`), que é o equivalente ao `node_modules` ou `virtualenv` do KDE.

Você pode editar `~/.config/craft/settings.ini` para ajustar:

```ini

[GeneralSettings]

rootPath=~/craftroot

buildTests=false

```

---

## 4. Baixando e compilando o KDE Connect

1. Liste as receitas (recipes) disponíveis:

```bash

craft list

```

Deve aparecer algo como `kde/kdeconnect-kde`.

2. Para baixar, compilar e instalar:

```bash

craft kdeconnect-kde

```

Por baixo dos panos ele vai:

* Clonar o repositório `kde/kdeconnect-kde.git`

* Resolver dependências (Qt, libqtxdg, librest, …)

* Executar CMake + Ninja (ou Make)

* Instalar em `~/craftroot`

3. Testar executável:

```bash

~/craftroot/usr/bin/kdeconnectd --help

~/craftroot/usr/bin/kdeconnect-app

```

---

## 5. Fluxo típico de desenvolvimento

Quando você fizer alterações locais no KDE Connect:

1. Navegue para o source dentro do cache do Craft:

```bash

cd ~/.cache/craft/kde/kdeconnect-kde/src

```

2. Edite, commit ou aplique patch.

3. Recompile apenas o projeto:

```bash

craft --rebuild kdeconnect-kde

```

4. Teste executável imediatamente no seu prefixo isolado:

```bash

~/craftroot/usr/bin/kdeconnect-app

```

---

## 6. Limpando e atualizando

* Para limpar o build e começar do zero:

```bash

craft --clean kdeconnect-kde

```

* Para atualizar a receita (pull do git e rebuild):

```bash

craft --update kdeconnect-kde

```

---

### Analogias para quem vem do web/backend

| `Conceito /node/pip | Conceito craft/kde‑builder |

| `npm install pacote` | `craft pacote` |

| `npm run build` | `craft --rebuild pacote` |

| `pip install --user pacote` | `craft pacote` (instala em prefix) |

| `virtualenv + source venv/bin/act` | `craft --init` + executáveis em `craftroot` |

---
## Preparar ambiente para rodar source code 

Baixar dependências 
```bash
sudo pacman -S base-devel cmake extra-cmake-modules qt5-base qt5-declarative qt5-tools qt5-connectivity qt5-multimedia qt5-svg qt5-x11extras qt5-wayland kconfig kcoreaddons ki18n kio kiconthemes kdbusaddons knotifications kcmutils kdeclarative kpeople kpulseaudio-qt qca-qt5
```


## Revisão de fundamentos para continuar o projeto 
  
![[Revisao-FundamentosC++]]
