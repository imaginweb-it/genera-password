# Genera Password
Crea una password mediante la combinazione delle due chiavi immesse scegliendo tra i una selezione di caratteri.
## Help
**GeneraPassword** è una applicazione gratuita per creare password complesse partendo da chiavi semplici e facilmente ricordabili.  
Grazie ad uno script di **cifratura Javascript** ed un form HTML, è possibile generare password alfanumeriche (con o senza caratteri speciali), alfabetiche o numeriche, della lunghezza che desideriamo.

Per creare il codice segreto (PIN), basta inserire una coppia di chiavi nei campi `Chiave segreta` e `Password`, scegliere che tipo di password si vuole ottenere (tra alfanumerica, alfabetica, solo numerica, alfanumerica con caratteri speciali), specificare la sua lunghezza e spostarsi nell'ultimo campo `Codice`.

Il sistema automaticamente genererà un password mascherata, derivante dai parametri immessi in precedenza, che può essere mostrata tramite l'apposito comando [ $${\color{#D57100}Mostra}$$ ], oppure copiata "in background" con le normali funzioni del dispositivo di: Selezione, Copia ed Incolla, direttamente dove serve.

> **Nota:** Il codice generato non viene né inviato né memorizzato da alcuna parte, e viene cancellato una volta chiusa la pagina o l'applicativo.

Il vantaggio di tale sistema è che potremo adottare una regola prefissata per generare una password, complessa e non riconducibile ad alcuna parola di senso compiuto, che all'occorrenza possa essere ricavata semplicemente riproponendo la regola anzidetta.

Ad esempio, potremo impostare come `Chiave segreta` il nome del sito o del servizio sul quale vorremo utilizzare la password (ad es. "Banca" o "Gmail" o "Twitter") ed immettere come `Password` una parola semplice da ricordare (o anche la vecchia "e solita" **password**). Basterà poi impostarne la lunghezza ed il tipo di codice da generare, ed il risultato sarà ottenuto.  
Per ricostruire il codice segreto, basterà dunque ricordarsi nome del servizio e la vecchia password.

> **Suggerimento:** Per creare un codice segreto (PIN) diverso ogni mese, puoi stabilire nelle regole di introdurre tra le chiavi la/le cifra/e del mese ed automaticamente verrà generata una password differente.

Non resta che provare!
Definisci la tua regola e crea password **efficienti**.

## Installazione
Copia i file del repository nella directory del tuo sito internet dove vuoi che venga visualizzata il form per generare password.
Ovviamente devi personalizzare i collegamenti in base al proprio indirizzo del sito.

**Nota:** per una migliore visualizzazione della calcolatrice, sarebbe opportuno richiamarla dalla tua pagina web inserendo un tag `<a>` nella pagina.

```html
<a href="#" onclick="window.open('https://www.example.com/generapassword/index.html','','width=510,height=120,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no')" title="Genera Password"><img alt="Genera Password" src="https://www.example.com/bottone-g.png" style="width: 172px; height: 129px; margin-bottom: 10px;"></a>
```

> **Tips:**  
> È possibile anche creare un tag `<a>` da inserire nella pagina web che permette di creare un `Bookmarklet` da trascinare nei preferiti del proprio browser, per utilizzare le funzioni di **Genera Password** senza essere online e andare sul sito.
```html
<a href="javascript:(function(){GeneraPassword=window.open('','GeneraPassword','width=600,height=120,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no');GeneraPassword.document.write('%3Cstyle%3Ebody{font-size:small;}input{border:1px%20inset;}select{border:1px%20dotted;font-size:smaller;}%3C/style%3E%3Cscript%3Epassword=function(){key1=document.forms[0].key.value;key2=document.forms[0].pwd.value;codelength=document.forms[0].codelength.value;characters=document.forms[0].characters.value;code=&quot;&quot;;code1=0;code2=0;for(i=0;i%3Ckey1.length;i++){code1+=key1.charCodeAt(i);};for(i=0;i%3Ckey2.length;i++){code2+=key2.charCodeAt(i);};multiplier=code1*code2;step=multiplier%characters.length+1;codecharacter=&quot;&quot;;for(i=0;i%3Ccodelength;i++){codecharacter=key1.charCodeAt(i%key1.length)+key2.charCodeAt(i%key2.length)+step*i;code+=characters.substr(codecharacter%characters.length,1);};document.forms[0].code.value=code;};checkInput=function(oToCheckField,oKeyEvent){return%20oKeyEvent.charCode===0||/[0-9]/.test(String.fromCharCode(oKeyEvent.charCode));};%3C/script%3E%3Cform%20action=&quot;&quot;%3ESecret%20key%20%3Cinput%20type=&quot;password&quot;%20id=&quot;key&quot;%20name=&quot;key&quot;%20title=&quot;Enter%20a%20secret%20key&quot;%20size=&quot;12&quot;%20onkeyup=&quot;password()&quot;%3E%20Password%20%3Cinput%20type=&quot;password&quot;%20id=&quot;pwd&quot;%20name=&quot;pwd&quot;%20title=&quot;Enter%20your%20password&quot;%20size=&quot;12&quot;%20onkeyup=&quot;password()&quot;%3E%20Code%20length%20%3Cinput%20type=&quot;text&quot;%20name=&quot;codelength&quot;%20value=&quot;8&quot;%20title=&quot;Code%20length&quot;%20size=&quot;2&quot;%20maxlength=&quot;2&quot;%20onkeypress=&quot;return(checkInput(this,%20event));&quot;%20onpaste=&quot;return(false);&quot;%20onkeyup=&quot;password();&quot;%3E%3Cbr%3E%20Characters%20%3Cselect%20name=&quot;characters&quot;%20onchange=&quot;password()&quot;%20title=&quot;Group%20of%20characters&quot;%3E%3Coption%20value=&quot;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789&quot;%3EABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%3C/option%3E%3Coption%20value=&quot;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz&quot;%3EABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz%3C/option%3E%3Coption%20value=&quot;1234567890&quot;%3E1234567890%3C/option%3E%3Coption%20value=&quot;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&amp;*()_-+={}|[]//:;%3C%3E?,./&quot;%3EABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&amp;*()_-+={}|[]//:;%3C%3E?,./%3C/option%3E%3C/select%3E%3Cbr%3E%3Cbr%3E___Code__%20%3Cinput%20type=&quot;text&quot;%20id=&quot;code&quot;%20name=&quot;code&quot;%20value=&quot;&quot;%20class=&quot;codeH&quot;%20readonly%20title=&quot;Code%20generated%20-%20Click%20on%20the%20field%20and%20copy%20with%20CTRL-C%20or%20Command-C%20or%20using%20the%20mouse&quot;%20size=&quot;50&quot;%20onfocus=&quot;password();this.select()&quot;%20onclick=&quot;password();this.select()&quot;%3E%3C/form%3E');})();" style="background-color: #00bf30; border-radius: 10px; font-size: 16px; padding: 4px 10px;" title="clicca e trascina nella barra dei segnalibri">Bookmarklet GP *</a>
```
