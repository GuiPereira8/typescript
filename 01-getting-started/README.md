<h1>Começando / Getting Started</h1>
<p>Introdução ao TypeScript, aprendendo os comandos básicos de instalação e de conversão de aquivos TS para JS,
    e também algumas configurações basicas.</p>

<p>Para conversão de um arquivo TS para JS usamos o comando: >tsc "nomeDoArquivo". <br>
    Exemplo: <code>tsc aula01.ts</code></p>

<p>Para dizer para o compilador do TypeScript qual versão do ECMAScript queremos que ele compile o nosso arquivo JS,
    podemos usar o comando: tsc "nomeDoArquivo" --target "versãoDoEcma". <br> 
    Exemplo: <code>tsc aula01.ts --target "ES2015"</code> <br> 
    para usar a versão mais recente é só escrever "ESNEXT".</p>

<p>Criação do arquivo de configuração do TypeScript usando o comando: <code>tsc --init</code></p>

<p>Para compilar um arquivo TS para JS automaticamente ao salvar, sem precisar ficar escrevendo o comando no terminal, podemos usar o comando: <code>tsc --watch</code> <br>
    Esse comando vai ficar monitorando seus arquivos e quando tiver alguma alteração ele vai converter automaticamente o arquivo TS para JS ao salvar.</p>
