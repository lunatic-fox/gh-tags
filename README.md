<div align="center">
  <img src="./docs/img/logo.png" width="120">
  <br>
  <h1>
    GitHub Tags
  </h1>
  
**[Português do Brasil](./docs/pt-br/README.md)**  
</div>

<div align="right">
  <a href="https://github.com/lunatic-fox/lunatic-fox/blob/main/crypto-donations">
    <img src="https://shields.io/badge/Crypto-Donations-098213?logo=bitcoin">
  </a>
</div>


&emsp;&emsp;&emsp;&emsp;&emsp; [🔸 GitHub Tags API](#how-main)<br>
&emsp;&emsp;&emsp;&emsp;&emsp; [🔸 GitHub Colors API](#how-use)<br>

## Summary
&emsp;&emsp;&emsp; [🔸 GitHub Tags API](#how-main)<br>
&emsp;&emsp;&emsp;&emsp;&emsp; [🔹 How to use](#how)<br>
&emsp;&emsp;&emsp;&emsp;&emsp; [🔹 Language name special symbols](#lang)<br>
&emsp;&emsp;&emsp;&emsp;&emsp; [🔹 Customization](#cust)<br>
&emsp;&emsp;&emsp;&emsp;&emsp; [🔹 Non colored languages](#non)<br>
&emsp;&emsp;&emsp; [🔸 GitHub Colors API](#how-use)<br>
&emsp;&emsp;&emsp;&emsp;&emsp; [🔹 How to use](#how-h-use)<br>
&emsp;&emsp;&emsp; [🔸 Libraries](#lib)<br>


<h1 name="how-main">🔸 GitHub Tags API</h1>
<h2 name="how">🔹 How to use</h2>

&emsp;&emsp;Use the ***[GitHub Tags GUI](https://gh-tags.vercel.app/)*** to generate your link or copy and paste the template URL below:

~~~
https://gh-tags.vercel.app/api?lang=[LANGUAGE NAME]
~~~

&emsp;&emsp;Then replace the value of `lang=[LANGUAGE NAME]` to any language known by Github.

***[📃 Reference list of all languages known by Github](./docs/list/README.md)***

Let's see some examples:

***Markdown***
~~~markdown
![Markdown](https://gh-tags.vercel.app/api?lang=markdown)
~~~
**Response:** &emsp;&emsp; ![Markdown](https://gh-tags.vercel.app/api?lang=markdown)

<br>

***HTML***
~~~html
<img src="https://gh-tags.vercel.app/api?lang=html" alt="HTML">
~~~
**Response:** &emsp;&emsp; <img src="https://gh-tags.vercel.app/api?lang=html" alt="HTML">

<br>

<h2 name="lang">🔹 Language name special symbols</h2>

&emsp;&emsp;Some language names have `space`, `+`, `#` or `*`. In those cases they are replaced by those symbols:

- `space` > `-`<br>
&emsp;&emsp;*e.g.: `Regular expression` > `regular-expression`* &emsp;&emsp; ![](https://gh-tags.vercel.app/api?lang=regular-expression&type=squared&size=small)

<br>

- `+` > `-plus`<br>
&emsp;&emsp;*e.g.: `C++` > `c-plus-plus`* &emsp;&emsp; ![](https://gh-tags.vercel.app/api?lang=c-plus-plus&type=squared&size=small)

<br>

- `#` > `-sharp`<br>
&emsp;&emsp;*e.g.: `C#` > `c-sharp`* &emsp;&emsp; ![](https://gh-tags.vercel.app/api?lang=c-sharp&type=squared&size=small)

<br>

- `*` > `-asterisk`<br>
&emsp;&emsp;*e.g.: `F*` > `f-asterisk`* &emsp;&emsp; ![](https://gh-tags.vercel.app/api?lang=f-asterisk&type=squared&size=small)

<br>

<h2 name="cust">🔹 Customization</h2>

&emsp;&emsp;There are some options to the output tag listed here:
- `size=small` - This is the small version of tag. (height: 20px) - Default height: 32px.
- `type=squared` - This is the squared box version of tag. - Default version: rounded.

&emsp;&emsp;All the options can be added by putting a `&` before the chosen option. Let's see some examples:

***JavaScript - small version***
~~~markdown
![JavaScript](https://gh-tags.vercel.app/api?lang=javascript&size=small)
~~~
**Response:** &emsp;&emsp; ![JavaScript](https://gh-tags.vercel.app/api?lang=javascript&size=small)

<br>

***JavaScript - squared version***
~~~markdown
![JavaScript](https://gh-tags.vercel.app/api?lang=javascript&type=squared)
~~~
**Response:** &emsp;&emsp; ![JavaScript](https://gh-tags.vercel.app/api?lang=javascript&type=squared)

<br>

***JavaScript - small squared version***
~~~markdown
![JavaScript](https://gh-tags.vercel.app/api?lang=javascript&size=small&type=squared)
~~~
**Response:** &emsp;&emsp; ![JavaScript](https://gh-tags.vercel.app/api?lang=javascript&size=small&type=squared)

<br>

<h2 name="non">🔹 Non colored languages</h2>

&emsp;&emsp;There are some languages without a specific color and they will be presented that way.

<div align="center">

![](https://gh-tags.vercel.app/api?lang=cobol) ![](https://gh-tags.vercel.app/api?lang=robots.txt&type=squared) ![](https://gh-tags.vercel.app/api?lang=asl&size=small) ![](https://gh-tags.vercel.app/api?lang=limbo&size=small&type=squared)
  
</div>
<br>

<h1 name="how-use">🔸 GitHub Colors API</h1>
<h2 name="how-h-use">🔹 How to use</h2>

&emsp;&emsp;Use this template URL below:
~~~
https://gh-tags.vercel.app/use?lang=[LANGUAGE NAME]
~~~
&emsp;&emsp;Then replace the value of `lang=[LANGUAGE NAME]` to any language known by Github.

<div align="center">

### **⚠**
### **Differently from GitHub Tags API this API route returns only JSON objects!**

<br>
</div>

***[📃 Reference list of all languages known by Github](./docs/list/README.md)***

Let's see some examples:

***Ada***
~~~
https://gh-tags.vercel.app/use?lang=ada
~~~
***returns:***
~~~json
{"lang":"ada","name":"Ada","color":"#02f88c"}
~~~
---
***Json***
~~~
https://gh-tags.vercel.app/use?lang=json
~~~
***returns:***
~~~json
{"lang":"json","name":"JSON","color":"#292929"}
~~~

<br>

<h1 name="lib">🔸 Libraries</h1>

&emsp;&emsp;Look those amazing libraries used in this project!

&emsp;&emsp;&emsp;📕 ***[@vercel/node](https://vercel.com/docs/runtimes)***

&emsp;&emsp;&emsp;📕 ***[axios](https://github.com/axios/axios)***

&emsp;&emsp;&emsp;📕 ***[text-to-svg](https://www.npmjs.com/package/text-to-svg)***

&emsp;&emsp;&emsp;📕 ***[yaml](https://www.npmjs.com/package/yaml)***

<div align="center">

![](./docs/img/powered-by-vercel.svg)

</div>


