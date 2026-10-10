# Preparar Git no Linux

**Objetivo:** confirmar Git no terminal, identificar os teus commits e conseguir autenticar um `push` por HTTPS.

Antes de começares o exercício, confirma também que o [Visual Studio Code](instalar-vscode.md) abre; vais usá-lo para editar o README.

## 1. Confirmar ou instalar Git

Abre o **Terminal** e executa:

```bash
git --version
```

Se aparecer `git version` com um número, segue para o passo 2. Caso contrário, usa **apenas a linha correspondente à tua distribuição**:

| Distribuição | Comandos |
| --- | --- |
| Ubuntu / Debian | `sudo apt update` e depois `sudo apt install git` |
| Fedora | `sudo dnf install git` |
| Arch | `sudo pacman -S git` |
| openSUSE | `sudo zypper install git` |

Repete `git --version`. Se usas outra distribuição, consulta a [lista oficial de instalação do Git](https://git-scm.com/install/linux).

## 2. Identificar os teus commits

```bash
git config --global user.name "O teu nome"
git config --global user.email "o-teu-email@example.com"
git config --global user.name
git config --global user.email
```

Podes usar o endereço `noreply` mostrado em [GitHub → Settings → Emails](https://github.com/settings/emails) para não divulgar o email pessoal no histórico público. Copia o endereço exato.

## 3. Preparar entrada pelo navegador

Se já usas GitHub CLI (`gh`) ou Git Credential Manager, continua com esse método. Para autenticação no navegador com GitHub CLI:

1. Instala `gh` pelas [instruções oficiais para a tua distribuição](https://github.com/cli/cli/blob/trunk/docs/install_linux.md). As instruções diferem conforme o sistema; não uses um comando de outra distribuição.
2. Confirma `gh --version` e executa:

   ```bash
   gh auth login --web --git-protocol https
   gh auth setup-git
   ```

3. Conclui a autorização no navegador com a tua conta. `gh auth setup-git` permite que `git push` use essa autenticação.

**Pronto quando:** `git --version` funciona e consegues abrir [github.com](https://github.com/) na conta correta. Se a instalação do `gh` demorar ou pedir permissões que não tens, pede ajuda na sala; não tentes resolver isso com a palavra-passe da conta no terminal.

Fontes: [instalação oficial do Git no Linux](https://git-scm.com/install/linux), [instalação oficial do GitHub CLI no Linux](https://github.com/cli/cli/blob/trunk/docs/install_linux.md), [`gh auth login`](https://cli.github.com/manual/gh_auth_login), [`gh auth setup-git`](https://cli.github.com/manual/gh_auth_setup-git), [email dos commits](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address).
