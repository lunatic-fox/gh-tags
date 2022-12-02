<div align="center">
  <img src="../img/logo.png" width="120">
  <br>
  <h1>
    GitHub Tags
  </h1>

**Se você ❤ este projeto e quer me apoiar, por favor considere fazer uma [doação](../donation/README.md).**
    
<a href="./docs/donation/README.md">
<img src="../donation/src/jar-pt-br.png" width="120">
</a>
  
</div>


## Sumário
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [🔸 GitHub Tags API](#how-main)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [🔹 Como usar](#how)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [🔹 Símbolos especiais no nome da linguagem](#lang)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [🔹 Customização](#cust)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [🔹 Linguagens sem cor](#non)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [🔸 GitHub Colors API](#how-use)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [🔹 Como usar](#how-h-use)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [🔸 Bibliotecas](#lib)<br>


<h1 name="how-main">🔸 GitHub Tags API</h1>
<h2 name="how">🔹 Como usar</h2>

&nbsp;&nbsp;&nbsp;&nbsp;Use o ***[GitHub Tags GUI](https://gh-tags.vercel.app/)*** para gerar seu link ou copie e cole a URL modelo abaixo:

~~~
https://gh-tags.vercel.app/api?lang=[LANGUAGE NAME]
~~~

&nbsp;&nbsp;&nbsp;&nbsp;Então substitua o valor de `lang=[LANGUAGE NAME]` por qualquer linguagem conhecida pelo Github.

***[📃 Lista de referência de todas as linguagens conhecidas pelo Github](./list/README.md)***

Vejamos alguns exemplos:

***Markdown***
~~~markdown
![Markdown](https://gh-tags.vercel.app/api?lang=markdown)
~~~
**Resposta:** &nbsp;&nbsp;&nbsp;&nbsp; ![Markdown](https://gh-tags.vercel.app/api?lang=markdown)

<br>

***HTML***
~~~html
<img src="https://gh-tags.vercel.app/api?lang=html" alt="HTML">
~~~
**Resposta:** &nbsp;&nbsp;&nbsp;&nbsp; <img src="https://gh-tags.vercel.app/api?lang=html" alt="HTML">

<br>

<h2 name="lang">🔹 Símbolos especiais no nome da linguagem</h2>

&nbsp;&nbsp;&nbsp;&nbsp;Alguns nomes de linguagem tem `espaço`, `+`, `#` ou `*`. Nesses casos eles são substituídos por esses símbolos:

- `espaço` > `-`<br>
&nbsp;&nbsp;&nbsp;&nbsp;*ex.: `Regular expression` > `regular-expression`* &nbsp;&nbsp;&nbsp;&nbsp; ![](https://gh-tags.vercel.app/api?lang=regular-expression&type=squared&size=small)

<br>

- `+` > `-plus`<br>
&nbsp;&nbsp;&nbsp;&nbsp;*ex.: `C++` > `c-plus-plus`* &nbsp;&nbsp;&nbsp;&nbsp; ![](https://gh-tags.vercel.app/api?lang=c-plus-plus&type=squared&size=small)

<br>

- `#` > `-sharp`<br>
&nbsp;&nbsp;&nbsp;&nbsp;*ex.: `C#` > `c-sharp`* &nbsp;&nbsp;&nbsp;&nbsp; ![](https://gh-tags.vercel.app/api?lang=c-sharp&type=squared&size=small)

<br>

- `*` > `-asterisk`<br>
&nbsp;&nbsp;&nbsp;&nbsp;*ex.: `F*` > `f-asterisk`* &nbsp;&nbsp;&nbsp;&nbsp; ![](https://gh-tags.vercel.app/api?lang=f-asterisk&type=squared&size=small)

<br>

<h2 name="cust">🔹 Customização</h2>

&nbsp;&nbsp;&nbsp;&nbsp;Existem algumas opções para a saída da tag listadas aqui:
- `size=small` - Esta é a versão pequena da tag. (altura: 20px) - Altura padrão: 32px.
- `type=squared` - Esta é a versão de caixa quadrada da tag. - Versão padrão: rounded (arredondada).

&nbsp;&nbsp;&nbsp;&nbsp;Todas as opções podem ser adicionadas colocando um `&` antes da opção escolhida. Vejamos alguns exemplos:

***JavaScript - versão pequena***
~~~markdown
![JavaScript](https://gh-tags.vercel.app/api?lang=javascript&size=small)
~~~
**Resposta:** &nbsp;&nbsp;&nbsp;&nbsp; ![JavaScript](https://gh-tags.vercel.app/api?lang=javascript&size=small)

<br>

***JavaScript - versão quadrada***
~~~markdown
![JavaScript](https://gh-tags.vercel.app/api?lang=javascript&type=squared)
~~~
**Resposta:** &nbsp;&nbsp;&nbsp;&nbsp; ![JavaScript](https://gh-tags.vercel.app/api?lang=javascript&type=squared)

<br>

***JavaScript - versão quadrada pequena***
~~~markdown
![JavaScript](https://gh-tags.vercel.app/api?lang=javascript&size=small&type=squared)
~~~
**Resposta:** &nbsp;&nbsp;&nbsp;&nbsp; ![JavaScript](https://gh-tags.vercel.app/api?lang=javascript&size=small&type=squared)

<br>

<h2 name="non">🔹 Linguagens sem cor</h2>

&nbsp;&nbsp;&nbsp;&nbsp;Existem algumas linguagens sem uma cor específica e elas são apresentadas dessa forma.

<div align="center">

![](https://gh-tags.vercel.app/api?lang=cobol) ![](https://gh-tags.vercel.app/api?lang=robots.txt&type=squared) ![](https://gh-tags.vercel.app/api?lang=asl&size=small) ![](https://gh-tags.vercel.app/api?lang=limbo&size=small&type=squared)
  
</div>

<br>

<h1 name="how-use">🔸 GitHub Colors API</h1>
<h2 name="how-h-use">🔹 How to use</h2>

&nbsp;&nbsp;&nbsp;&nbsp;Use a URL modelo abaixo:
~~~
https://gh-tags.vercel.app/use?lang=[LANGUAGE NAME]
~~~
&nbsp;&nbsp;&nbsp;&nbsp;Então substitua o valor de `lang=[LANGUAGE NAME]` por qualquer linguagem conhecida pelo Github.

<div align="center">

### **⚠**
### **Diferentemente da GitHub Tags API esta rota de API retorna apenas objetos JSON!**

<br>
</div>

***[📃 Lista de referência de todas as linguagens conhecidas pelo Github](./list/README.md)***

Vejamos alguns exemplos:

***Ada***
~~~
https://gh-tags.vercel.app/use?lang=ada
~~~
***retorna:***
~~~json
{"lang":"ada","name":"Ada","color":"#02f88c"}
~~~
---
***Json***
~~~
https://gh-tags.vercel.app/use?lang=json
~~~
***retorna:***
~~~json
{"lang":"json","name":"JSON","color":"#292929"}
~~~

<br>

<h1 name="lib">🔸 Bibliotecas</h1>

&nbsp;&nbsp;&nbsp;&nbsp;Olhe essas bibliotecas incríveis usadas neste projeto!

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;📕 ***[@vercel/node](https://vercel.com/docs/runtimes)***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;📕 ***[axios](https://github.com/axios/axios)***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;📕 ***[text-to-svg](https://www.npmjs.com/package/text-to-svg)***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;📕 ***[yaml](https://www.npmjs.com/package/yaml)***

<div align="center">

![](../img/powered-by-vercel.svg)

</div>
