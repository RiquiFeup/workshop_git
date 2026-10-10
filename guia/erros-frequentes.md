# Erros frequentes: resolver sem perder o trabalho

Começa por ler a **primeira linha do erro** e confirmar que estás na pasta do teu clone. Não apagues a pasta nem uses `git push --force` para tentar corrigir um erro. Se ficares bloqueado, mostra a mensagem ao apoio da sala; nunca mostres a palavra-passe nem códigos de autenticação.

| O que aparece | O que significa e o que fazer |
| --- | --- |
| **Não encontro o Visual Studio Code** | Procura o nome completo no menu de aplicações. Se não aparecer, segue a [instalação pelo site oficial](instalar-vscode.md) e confirma que abre antes de editar o README. |
| **GitHub não me deixa criar o fork** ou pede verificação de email | A conta pode ainda não ter o email confirmado. Abre a caixa de correio usada no registo e segue o link do GitHub. Verifica a pasta de spam. Consulta a [ajuda oficial para criar conta](https://docs.github.com/en/account-and-profile/how-tos/account-management/creating-an-account-on-github). |
| **`git: command not found`** ou **`'git' is not recognized`** | O Git não está instalado ou abriste outro terminal. No Windows, abre **Git Bash**. Nos outros sistemas, segue [macOS](instalar-macos.md) ou [Linux](instalar-linux.md), depois fecha e reabre o terminal. Confirma com `git --version`. |
| **`fatal: not a git repository`** | Estás fora da pasta clonada. Usa `pwd` para ver onde estás, `ls` para listar as pastas e `cd NOME-DO-REPOSITORIO` para entrar na pasta que `git clone` criou. Confirma que `git status` já funciona. |
| **`Author identity unknown`** ou **`Please tell me who you are`** | Falta identificar o autor do commit. Executa `git config --global user.name "O teu nome"` e `git config --global user.email "o-teu-email@example.com"`; depois repete `git commit`. Podes usar o endereço `noreply` do [GitHub](https://github.com/settings/emails). |
| **`nothing to commit, working tree clean`** | Não há alterações por guardar nesta pasta. Confirma que editaste e guardaste **`exercicio/README.md` do clone local**, não a página original no navegador. Executa `git status` outra vez. Se o commit já foi feito, segue para `git push origin main`. |
| **`pathspec 'exercicio/README.md' did not match any files`** | O caminho não existe a partir da pasta atual. Confirma `pwd` e `ls`, entra na raiz do clone e verifica que há uma pasta `exercicio`. Depois executa `git add exercicio/README.md`. |
| **`Permission denied`**, **`403`** ou **`Repository not found`** no `push` | Primeiro confirma `git remote -v`: `origin` deve conter **o teu nome de utilizador GitHub**, não `RiquiFeup`. Se clonaste o [repositório central](https://github.com/RiquiFeup/workshop_git), volta ao GitHub, faz **Fork** e clona o URL HTTPS da tua cópia. Se `origin` já é teu, confirma que o navegador autenticou a conta certa; pede ajuda para corrigir credenciais. |
| **`Authentication failed`** ou pedido de palavra-passe no terminal | A palavra-passe da conta GitHub não serve para `git push` por HTTPS. No Windows, usa a janela do Git Credential Manager; em macOS/Linux, segue a secção de autenticação do teu [guia de instalação](instalar-macos.md). Não partilhes tokens. |
| **`! [rejected] main -> main (fetch first)`** ou **`non-fast-forward`** | A tua cópia no GitHub recebeu uma alteração que ainda não tens no computador. Pede apoio antes de sincronizar, sobretudo se editaste o ficheiro no navegador. O facilitador ajudará a integrar a alteração sem sobrescrever o teu README. |
| **`CONFLICT`** depois de `git pull` ou `git merge` | Duas linhas de trabalho alteraram a mesma parte de um ficheiro e o Git precisa de uma decisão humana. Pára nesse ponto, mantém os ficheiros e pede apoio. Não uses `push --force` para resolver. |
| **`src refspec main does not match any`** | Pode ainda não existir nenhum commit ou a branch local pode ter outro nome. Verifica `git status` e `git branch --show-current`. Depois de fazeres o commit, usa no `push` o nome de branch mostrado. |
| O navegador abriu, mas o **`push` continua à espera** | Conclui a autorização no navegador e volta ao terminal. Se o navegador está na conta errada ou a janela não avança, pede ajuda na sala. |

## Três verificações rápidas

Na **raiz da pasta clonada**:

```bash
git status
git remote -v
git branch --show-current
```

- `status` mostra se tens alterações por adicionar ou por guardar num commit.
- `origin` em `remote -v` tem de ser a tua cópia no GitHub.
- O último comando mostra o nome da branch; no roteiro assumimos `main`.

Fontes: [autenticação no GitHub](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github), [cópias (*forks*)](https://docs.github.com/en/pull-requests/how-tos/work-with-forks/fork-a-repo), [referência de `git status`](https://git-scm.com/docs/git-status), [referência de `git remote`](https://git-scm.com/docs/git-remote), [referência de `git merge`](https://git-scm.com/docs/git-merge).
