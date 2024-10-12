function password(){
	var key1=document.forms[0].key.value;
	var key2=document.forms[0].pwd.value;
	var codelenght=document.forms[0].codelenght.value;
	var characters=document.forms[0].characters.value;
	var code="";
	var code1=0; code2=0;
//***** analizza le due stringhe e ne rileva il codice del carattere ASCII 
	for (i=0; i<key1.length; i++){
		code1 += key1.charCodeAt(i);
	}
	for (i=0; i<key2.length; i++){
		code2 += key2.charCodeAt(i);
	}
	var multiplier=code1*code2;
	var step=multiplier%characters.length+1 //salto da fare sul singolo carattere
	var codecharacter;
	for (i=0; i<codelenght; i++){
		codecharacter=key1.charCodeAt(i%key1.length)+key2.charCodeAt(i%key2.length)+step*i
	code+=characters.substr(codecharacter%characters.length,1)
	}
	document.forms[0].code.value=code;
}
function checkInput(oToCheckField, oKeyEvent) {
	return oKeyEvent.charCode === 0 || /[0-9]/.test(String.fromCharCode(oKeyEvent.charCode));
};
function show(t){
	document.getElementById(t).setAttribute("type", document.getElementById(t).getAttribute("type")=="password" ? "text" : "password");
};
function showcode(){
	password();
	document.getElementById("code").className = document.getElementById("code").className=="codeH" ? "codeS" : "codeH"
}
