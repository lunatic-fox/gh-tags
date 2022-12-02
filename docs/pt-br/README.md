<div align="center">
  <img src="../img/logo.png" width="120">
  <br>
  <h1>
    GitHub Tags
  </h1>
</div>

<div align="right">
  <a href="https://github.com/lunatic-fox/lunatic-fox/blob/main/crypto-donations">
    <img src="https://shields.io/badge/Crypto-Donations-098213?logo=bitcoin">
  </a>
</div>

## Sumário
&emsp;&emsp;&emsp; [🔸 GitHub Tags API](#how-main)<br>
&emsp;&emsp;&emsp;&emsp;&emsp; [🔹 Como usar](#how)<br>
&emsp;&emsp;&emsp;&emsp;&emsp; [🔹 Símbolos especiais no nome da linguagem](#lang)<br>
&emsp;&emsp;&emsp;&emsp;&emsp; [🔹 Customização](#cust)<br>
&emsp;&emsp;&emsp;&emsp;&emsp; [🔹 Linguagens sem cor](#non)<br>
&emsp;&emsp;&emsp; [🔸 GitHub Colors API](#how-use)<br>
&emsp;&emsp;&emsp;&emsp;&emsp; [🔹 Como usar](#how-h-use)<br>
&emsp;&emsp;&emsp; [🔸 Bibliotecas](#lib)<br>


<h1 name="how-main">🔸 GitHub Tags API</h1>
<h2 name="how">🔹 Como usar</h2>

&emsp;&emsp;Use o ***[GitHub Tags GUI](https://gh-tags.vercel.app/)*** para gerar seu link ou copie e cole a URL modelo abaixo:

~~~
https://gh-tags.vercel.app/api?lang=[LANGUAGE NAME]
~~~

&emsp;&emsp;Então substitua o valor de `lang=[LANGUAGE NAME]` por qualquer linguagem conhecida pelo Github.

***[📃 Lista de referência de todas as linguagens conhecidas pelo Github](./list/README.md)***

Vejamos alguns exemplos:

***Markdown***
~~~markdown
![Markdown](https://gh-tags.vercel.app/api?lang=markdown)
~~~
**Resposta:** &emsp;&emsp; ![Markdown](https://gh-tags.vercel.app/api?lang=markdown)

<br>

***HTML***
~~~html
<img src="https://gh-tags.vercel.app/api?lang=html" alt="HTML">
~~~
**Resposta:** &emsp;&emsp; <img src="https://gh-tags.vercel.app/api?lang=html" alt="HTML">

<br>

<h2 name="lang">🔹 Símbolos especiais no nome da linguagem</h2>

&emsp;&emsp;Alguns nomes de linguagem tem `espaço`, `+`, `#` ou `*`. Nesses casos eles são substituídos por esses símbolos:

- `espaço` > `-`<br>
&emsp;&emsp;*ex.: `Regular expression` > `regular-expression`* &emsp;&emsp; ![](https://gh-tags.vercel.app/api?lang=regular-expression&type=squared&size=small)

<br>

- `+` > `-plus`<br>
&emsp;&emsp;*ex.: `C++` > `c-plus-plus`* &emsp;&emsp; ![](https://gh-tags.vercel.app/api?lang=c-plus-plus&type=squared&size=small)

<br>

- `#` > `-sharp`<br>
&emsp;&emsp;*ex.: `C#` > `c-sharp`* &emsp;&emsp; ![](https://gh-tags.vercel.app/api?lang=c-sharp&type=squared&size=small)

<br>

- `*` > `-asterisk`<br>
&emsp;&emsp;*ex.: `F*` > `f-asterisk`* &emsp;&emsp; ![](https://gh-tags.vercel.app/api?lang=f-asterisk&type=squared&size=small)

<br>

<h2 name="cust">🔹 Customização</h2>

&emsp;&emsp;Existem algumas opções para a saída da tag listadas aqui:
- `size=small` - Esta é a versão pequena da tag. (altura: 20px) - Altura padrão: 32px.
- `type=squared` - Esta é a versão de caixa quadrada da tag. - Versão padrão: rounded (arredondada).

&emsp;&emsp;Todas as opções podem ser adicionadas colocando um `&` antes da opção escolhida. Vejamos alguns exemplos:

***JavaScript - versão pequena***
~~~markdown
![JavaScript](https://gh-tags.vercel.app/api?lang=javascript&size=small)
~~~
**Resposta:** &emsp;&emsp; ![JavaScript](https://gh-tags.vercel.app/api?lang=javascript&size=small)

<br>

***JavaScript - versão quadrada***
~~~markdown
![JavaScript](https://gh-tags.vercel.app/api?lang=javascript&type=squared)
~~~
**Resposta:** &emsp;&emsp; ![JavaScript](https://gh-tags.vercel.app/api?lang=javascript&type=squared)

<br>

***JavaScript - versão quadrada pequena***
~~~markdown
![JavaScript](https://gh-tags.vercel.app/api?lang=javascript&size=small&type=squared)
~~~
**Resposta:** &emsp;&emsp; ![JavaScript](https://gh-tags.vercel.app/api?lang=javascript&size=small&type=squared)

<br>

<h2 name="non">🔹 Linguagens sem cor</h2>

&emsp;&emsp;Existem algumas linguagens sem uma cor específica e elas são apresentadas dessa forma.

<div align="center">

![](https://gh-tags.vercel.app/api?lang=cobol) ![](https://gh-tags.vercel.app/api?lang=robots.txt&type=squared) ![](https://gh-tags.vercel.app/api?lang=asl&size=small) ![](https://gh-tags.vercel.app/api?lang=limbo&size=small&type=squared)
  
</div>

<br>

<h1 name="how-use">🔸 GitHub Colors API</h1>
<h2 name="how-h-use">🔹 How to use</h2>

&emsp;&emsp;Use a URL modelo abaixo:
~~~
https://gh-tags.vercel.app/use?lang=[LANGUAGE NAME]
~~~
&emsp;&emsp;Então substitua o valor de `lang=[LANGUAGE NAME]` por qualquer linguagem conhecida pelo Github.

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

&emsp;&emsp;Olhe essas bibliotecas incríveis usadas neste projeto!

&emsp;&emsp;&emsp;📕 ***[@vercel/node](https://vercel.com/docs/runtimes)***

&emsp;&emsp;&emsp;📕 ***[axios](https://github.com/axios/axios)***

&emsp;&emsp;&emsp;📕 ***[text-to-svg](https://www.npmjs.com/package/text-to-svg)***

&emsp;&emsp;&emsp;📕 ***[yaml](https://www.npmjs.com/package/yaml)***

<div align="center">

![](../img/powered-by-vercel.svg)

</div>
