# Roteiro do participante · 90 minutos

[Voltar ao início](../README.md) · [Ajuda para erros](erros-frequentes.md) · [Perguntas](perguntas.md)

**Objetivo:** fazer uma pequena alteração num ficheiro de texto e vê-la no teu próprio repositório GitHub. Podes usar o teu nome, um pseudónimo ou apenas um tema de interesse; não publiques dados que queiras manter privados.

## Mapa da sessão

| Hora | Etapa | Ponto de verificação |
| --- | --- | --- |
| 14:00–14:30 | Explicação visual e demonstração | Sabes distinguir Git (história local) de GitHub (cópia online) |
| 14:30–15:00 | Conta, instalação e configuração | Estás na tua conta; `git --version` funciona |
| 15:00–15:10 | Fork e Clone | Tens a tua cópia no GitHub e no computador |
| 15:10–15:18 | Personalizar o ficheiro | `git status` mostra `exercicio/README.md` alterado |
| 15:18–15:27 | Add, Commit e Push | O novo commit aparece no teu Fork |
| 15:27–15:30 | Verificação e dúvidas | Mostras o resultado ou identificas o passo em que precisas de ajuda |

O apoio a dúvidas e erros decorre durante toda a parte prática. Se terminares cedo, explora os [repositórios reais](recursos.md) ou ajuda um colega sem lhe pedir credenciais.

## 1. Preparar conta e Git · 14:30–15:00

1. Se ainda não tens conta, abre [github.com/signup](https://github.com/signup), cria-a e confirma o email recebido. Se já tens conta, inicia sessão.
2. Instala ou verifica o Git com o guia do teu sistema: [Windows](instalar-windows.md), [macOS](instalar-macos.md) ou [Linux](instalar-linux.md). No Windows, usa **Git Bash** para seguir os comandos abaixo. [WSL](wsl-opcional.md) só é necessário se já o usas ou tens uma razão específica para o instalar.
3. Abre o terminal e escreve:

   ```sh
   git --version
   ```

   Deve aparecer um número de versão.

4. Configura a identidade que ficará associada aos teus commits. Substitui os exemplos pelo nome que desejas mostrar e por um endereço de email associado à tua conta GitHub:

   ```sh
   git config --global user.name "O Teu Nome"
   git config --global user.email "o-teu-email@example.com"
   ```

   Se preferires não publicar o teu endereço pessoal nos commits, configura primeiro um [endereço `noreply` do GitHub](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address) e usa-o no segundo comando.

**Conseguiste?** `git --version` responde; a tua conta abre no navegador. Se não, chama o apoio e mostra a mensagem de erro.

## 2. Criar a tua cópia online · 15:00–15:05

1. Estás no repositório original deste workshop. No canto superior direito da página, escolhe **Fork** e depois **Create fork**.
2. Seleciona a tua conta como destino. Aguarda até abrir a página do teu Fork.
3. Confirma que, por cima do nome do repositório, aparece **o teu nome de utilizador**. Este detalhe importa: é para esta cópia que vais enviar o trabalho.

**Conseguiste?** O endereço da página começa por `https://github.com/` e a seguir aparece o teu nome de utilizador.

## 3. Clonar a tua cópia para o computador · 15:05–15:10

1. Na página **do teu Fork**, carrega em **Code → HTTPS** e copia o endereço mostrado. Não copies o endereço do repositório original.
2. No terminal, vai para uma pasta onde costumas guardar trabalhos. Podes, por exemplo, abrir o terminal já nessa pasta. Escreve `git clone`, um espaço, cola o endereço copiado e prime Enter. O comando terá esta forma (o teu endereço será diferente):

   ```sh
   git clone https://github.com/TEU_UTILIZADOR/workshop_git.git
   ```

3. Entra na pasta criada pelo Clone:

   ```sh
   cd workshop_git
   ```

4. Confirma o destino de `push`:

   ```sh
   git remote -v
   ```

   Nas linhas `origin`, deves ver **o teu utilizador** depois de `github.com/`. Se aparecer o utilizador do formador, pára e pede ajuda antes de continuar.

**Conseguiste?** Tens a pasta no computador e `origin` aponta para o teu Fork.

## 4. Alterar um ficheiro · 15:10–15:18

1. Abre a pasta clonada no editor de texto que costumas usar. Abre `exercicio/README.md`.
2. Substitui os campos entre parênteses retos por respostas tuas. Basta alterar duas ou três linhas. Podes usar um pseudónimo.
3. Guarda o ficheiro. No terminal, dentro da pasta clonada, escreve:

   ```sh
   git status
   ```

   Deves ver `modified: exercicio/README.md`. Se aparecer `nothing to commit`, verifica se guardaste o ficheiro certo e se estás dentro da pasta clonada.

## 5. Guardar a versão e enviá-la · 15:18–15:27

Executa um comando de cada vez:

```sh
git add exercicio/README.md
git status
git commit -m "Personaliza o meu README"
git push origin main
```

- `git add` escolhe a alteração que entrará no próximo commit.
- O segundo `git status` permite verificar que `exercicio/README.md` está pronto para o commit.
- `git commit` guarda uma versão no teu computador, com uma mensagem curta.
- `git push` envia essa versão para o teu Fork no GitHub. Se surgir uma janela do navegador para autenticação, segue os passos apresentados. **Nunca escrevas a palavra-passe da conta num pedido de outra pessoa.**

Este repositório usa a branch `main`. Se o terminal indicar outra branch, chama o apoio antes do `push`.

## 6. Ver o resultado · 15:27–15:30

Atualiza a página do teu Fork no navegador. Abre `exercicio/README.md` e confirma que contém as tuas alterações. Também podes abrir **Commits** para encontrar a mensagem `Personaliza o meu README`.

Se um passo falhou, mostra ao apoio **o comando e a mensagem de erro**; evita mostrar credenciais ou códigos. O [guia de erros frequentes](erros-frequentes.md) cobre as situações mais comuns.

## Depois do workshop

Guarda o link do teu Fork. Podes voltar a editar o mesmo ficheiro e repetir `git status` → `git add` → `git commit` → `git push`. Este ciclo é a base para guardar versões dos trabalhos que vais fazer no curso.
