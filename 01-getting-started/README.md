<h1>Getting Started / Começando</h1>
<p>Introdução ao TypeScript, aprendendo os comandos básicos de instalação e de conversão de aquivos TS para JS,
    e também algumas configurações basicas.</p>

<p>Para conversão de um arquivo TS para JS usamos o comando: >tsc "nomeDoArquivo". <br>
    Exemplo: tsc aula01.ts</p>

<p>Para dizer para o compilador do TypeScript qual versão do ECMAScript queremos que ele compile o nosso arquivo JS,
    podemos usar o comando: tsc "nomeDoArquivo" --target "versãoDoEcma". <br> 
    
    Exemplo: >tsc aula01.ts --target "ES2015" <br> 
    para usar a versão mais recente é só escrever "ESNEXT".</p>

<p>Criação do arquivo de configuração do TypeScript usando o comando: >tsc --init</p>
