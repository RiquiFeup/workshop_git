# Perguntas rápidas

## Preciso de saber programar?

Não. Neste exercício editas um ficheiro de texto e aprendes a guardar e partilhar essa alteração. O mesmo processo também serve para código, análises e documentação.

## Qual é a diferença entre Git e GitHub?

**Git** é o programa que regista versões no teu computador. **GitHub** é o serviço online onde podes guardar e partilhar um repositório. Podes usar Git sem GitHub.

## O que é um repositório?

É uma pasta de projeto com histórico de alterações. Neste workshop, contém os slides, os guias e o teu exercício.

## Preciso de ter Visual Studio Code?

Vamos usá-lo para editar o README. No início da prática, o [slide 16](https://riquifeup.github.io/workshop_git/slides/#slide-16) ajuda-te a verificar se abre e aponta para a [instalação oficial](instalar-vscode.md). Não precisas de saber programar nem de instalar extensões.

## Porque faço Fork antes de Clone?

**Fork** cria uma cópia do [repositório do workshop](https://github.com/RiquiFeup/workshop_git) na tua conta GitHub. **Clone** descarrega essa tua cópia para o computador. Assim podes fazer `push` para a tua conta sem precisares de permissão para alterar o repositório do formador.

## `git add` envia o ficheiro para o GitHub?

Não. `git add exercicio/README.md` escolhe a alteração que entrará no próximo commit local. `git commit` guarda essa versão no teu computador. `git push` envia o commit para a tua cópia no GitHub.

## Quando uso `git status`?

Sempre que não tens a certeza do que mudou ou do que falta guardar. É seguro executá-lo várias vezes: apenas mostra informação.

## Para que serve `git log`?

Mostra os commits guardados no repositório. Usa `git log --oneline -5` para veres os cinco mais recentes, cada um numa linha. Não altera ficheiros nem envia informação.

## Qual é a diferença entre `git push` e `git pull`?

`push` envia commits locais para o repositório remoto. `pull` traz alterações do remoto e tenta integrá-las na branch local em que estás. No [slide 12](https://riquifeup.github.io/workshop_git/slides/#slide-12), podes clicar para ver o sentido da atualização. Na prática, o teu primeiro envio usa `push`.

## O que faz `git merge`?

Integra alterações de uma branch noutra. Uma **branch** é um caminho de trabalho dentro do mesmo repositório. No [slide 13](https://riquifeup.github.io/workshop_git/slides/#slide-13), a branch `experimento` é integrada em `main`. Se as duas mudaram a mesma parte de um ficheiro, pode ser necessário resolver um conflito.

## A ordem da teoria é a ordem dos comandos da prática?

A teoria segue `status → add → commit → push → log → pull → merge → fork` para explicar os conceitos. Na prática, fazes **Fork antes de Clone**, editas o README e usas `status`, `add`, `commit`, `push` e `log`. `pull` e `merge` ficam como conceitos para quando trabalhares com alterações de outras pessoas.

## Preciso de criar uma branch no exercício?

Não neste exercício. **Branch** é uma linha de trabalho alternativa, útil quando se desenvolve uma mudança sem mexer logo na linha principal. Vamos trabalhar na branch principal, que neste repositório se chama `main`.

## O meu README tem de mostrar dados pessoais?

Não. Podes usar um pseudónimo. Não incluas número de estudante, contacto ou informação que não queiras tornar pública. O teu *fork* poderá ser visto por outras pessoas se for público.

## Tenho de manter os badges e ícones do modelo?

Não. São exemplos opcionais e alguns carregam imagens de serviços externos. Mantém apenas o que te representa; para concluir o workshop basta personalizar o título e duas linhas de «Sobre mim».

## O email do commit ficará público?

O email configurado em Git pode aparecer nos commits publicados. Se preferires, configura o endereço `noreply` mostrado em [GitHub → Settings → Emails](https://github.com/settings/emails) **antes de fazer o commit**.

## Se fechar o terminal, perco o trabalho?

Não. As alterações guardadas no ficheiro continuam no computador; os commits também. Volta a abrir o terminal, entra na pasta clonada e executa `git status` para perceber onde paraste. Um `push` concluído deixa também o commit no GitHub.

## Onde confirmo que consegui?

Abre **o teu *fork*** no GitHub, entra em `exercicio/README.md` e confirma que aparecem as tuas alterações. O histórico deve mostrar o teu novo commit. Se não aparecer, confirma `git status` e volta ao passo de `push` no [roteiro](roteiro.md).

## Se vir um erro?

Procura a primeira linha da mensagem em [Erros frequentes](erros-frequentes.md). Durante a sessão, chama o apoio da sala e mostra o terminal.

Fontes: [Git básico — Pro Git](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository), [git log](https://git-scm.com/docs/git-log), [git pull](https://git-scm.com/docs/git-pull), [git merge](https://git-scm.com/docs/git-merge), [GitHub Docs: forks](https://docs.github.com/en/pull-requests/how-tos/work-with-forks/fork-a-repo), [email dos commits](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address).
