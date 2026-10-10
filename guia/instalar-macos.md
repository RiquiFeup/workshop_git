# Preparar Git no macOS

**Objetivo:** confirmar Git no Terminal, identificar os teus commits e conseguir autenticar um `push` por HTTPS.

Antes de começares o exercício, confirma também que o [Visual Studio Code](instalar-vscode.md) abre; vais usá-lo para editar o README.

## 1. Confirmar ou instalar Git

Abre **Terminal** (Pesquisa Spotlight → Terminal) e executa:

```bash
git --version
```

Se aparecer `git version` com um número, segue para o passo 2. Se o macOS propuser instalar as **Xcode Command Line Tools**, aceita, aguarda a instalação e volta a executar `git --version`. Também podes iniciar a instalação com:

```bash
xcode-select --install
```

Se já usas Homebrew, uma alternativa é `brew install git`; não precisas de instalar Homebrew só para este workshop.

## 2. Identificar os teus commits

```bash
git config --global user.name "O teu nome"
git config --global user.email "o-teu-email@example.com"
git config --global user.name
git config --global user.email
```

Podes usar o teu endereço `noreply` de [GitHub → Settings → Emails](https://github.com/settings/emails) no lugar do email pessoal. Copia o endereço exato que o GitHub mostra.

## 3. Preparar entrada pelo navegador

Se já tens GitHub CLI (`gh`) ou Git Credential Manager configurado, usa esse método. Para um percurso simples pelo navegador com **GitHub CLI**:

1. Se tens Homebrew, instala com `brew install gh`. Se não tens, escolhe o instalador macOS nas [instruções oficiais do GitHub CLI](https://github.com/cli/cli#installation).
2. Confirma `gh --version` e executa:

   ```bash
   gh auth login --web --git-protocol https
   gh auth setup-git
   ```

3. Segue a autorização no navegador com a **tua** conta GitHub. Se o terminal mostrar um código para introduzir no navegador, usa-o apenas no ecrã oficial indicado.

O `gh auth setup-git` permite que o comando `git push` use esta autenticação. Em alternativa, quem já usa Git Credential Manager pode continuar com ele. Nunca partilhes palavras-passe, códigos ou tokens.

**Pronto quando:** `git --version` funciona e consegues abrir [github.com](https://github.com/) na conta correta.

Fontes: [instalação oficial do Git no macOS](https://git-scm.com/install/mac), [GitHub CLI](https://github.com/cli/cli#installation), [`gh auth login`](https://cli.github.com/manual/gh_auth_login), [`gh auth setup-git`](https://cli.github.com/manual/gh_auth_setup-git), [email dos commits](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address).
