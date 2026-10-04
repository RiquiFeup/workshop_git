# Preparar Git no Windows

**Objetivo:** abrir o Git Bash, confirmar que Git funciona e ficar pronto para fazer `push` para o teu *fork*. Conta com cerca de 10 minutos se já tiveres conta no GitHub.

## 1. Instalar e abrir

1. Descarrega **Git for Windows** em [git-scm.com/install/windows](https://git-scm.com/install/windows). Escolhe a versão adequada ao teu computador; na maioria dos casos é **x64**.
2. Executa o instalador. As opções predefinidas servem para este workshop. Se surgir uma opção de **credential helper**, mantém **Git Credential Manager** selecionado.
3. Procura **Git Bash** no menu Iniciar e abre-o. Todos os comandos do workshop para Windows são escritos nesta janela.
4. Confirma:

   ```bash
   git --version
   ```

   Deves ver `git version` seguido de um número. Não precisas de ter WSL: [instalar WSL é opcional](wsl-opcional.md).

## 2. Identificar os teus commits

Escreve um nome ou pseudónimo e o endereço associado à tua conta GitHub:

```bash
git config --global user.name "O teu nome"
git config --global user.email "o-teu-email@example.com"
```

Se preferires não divulgar o teu email pessoal nos commits, copia o endereço `noreply` que aparece em [GitHub → Settings → Emails](https://github.com/settings/emails) e usa-o no segundo comando. O `user.name` é o nome que aparece no histórico; não é o nome de utilizador necessário para entrar no GitHub.

Confirma:

```bash
git config --global user.name
git config --global user.email
```

## 3. Entrada no GitHub para fazer `push`

No exercício, usa o URL **HTTPS da tua própria cópia (fork)**. No primeiro `git push`, o Git Credential Manager pode abrir uma janela ou o navegador para entrares no GitHub. Segue esse pedido e autoriza a ligação. A palavra-passe normal da conta **não funciona** como palavra-passe para operações Git por HTTPS; não a escrevas no terminal e não partilhes códigos de autenticação com ninguém.

Se a janela não aparecer ou o `push` falhar, consulta [erros frequentes](erros-frequentes.md) e chama o apoio na sala.

**Pronto quando:** `git --version` funciona, nome e email estão configurados e consegues abrir [github.com](https://github.com/) com a conta correta.

Fontes: [instalação oficial do Git no Windows](https://git-scm.com/install/windows), [instalação do Git Credential Manager](https://github.com/git-ecosystem/git-credential-manager/blob/main/docs/install.md#windows), [autenticação no GitHub](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github), [email dos commits](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address).
