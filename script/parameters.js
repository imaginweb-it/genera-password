function localization () {
	var ver = "1.1.2";
	var language = window.navigator.userLanguage || window.navigator.language;
	var lang = false;
	window.setTimeout('document.getElementsByClassName("donate")[0].style.display="none"', 13200);

	switch (language.substring(0, 2)) {
		case "it":
			var lang = { "":"",
				"Password Generator by Imaginweb":"Generatore di Password by Imaginweb",
				"GeneraPassword":"GeneraPassword",
				"Secret key":"Chiave segreta",
				"Password":"Password",
				"Code length":"Lunghezza del codice",
				"Characters":"Caratteri",
				"Code":"Codice",
				"Show":"Mostra",
				"View the generated code":"Visualizza il codice generato",
				"Enter a secret key":"Inserire una chiave segreta",
				"Enter your password":"Inserire la tua password",
				"Code length":"Lunghezza del codice",
				"Group of characters":"Gruppo di caratteri",
				"Code generated - Click on the field and copy with CTRL-C or Command-C or using the mouse":"Codice generato - Cliccare sul campo e copiare con CTRL-C o Command-C o usando il mouse",
				" 2014 ":" 2014 ",
				"Copyright Notice":"Nota sul Copyright",
				"Author Imaginweb":"Autore Imaginweb",
				"Create a password using a combination of the two keys entered by choosing between the characters shown.":"Crea una password mediante la combinazione delle due chiavi immesse scegliendo tra i caratteri indicati." };
			document.getElementById("help").setAttribute("href","help-it.html");
			document.getElementById("donate").setAttribute("href","donate-it.html");
			document.getElementById("copyright").setAttribute("href","http://www.imaginweb.it/generapassword/copyright-generapassword-it.html");
			break;
		case "frr":
			var lang = { "":"",
				"Password Generator by Imaginweb - ver 1.1":"franceseGeneratore di Password by Imaginweb - ver 1.1",
				"Secret key":"franceseChiave segreta",
				"Password":"francesePassword",
				"Code length":"franceseLunghezza del codice",
				"Characters":"franceseCaratteri",
				"Code":"franceseCodice",
				"Show":"franceseMostra",
				"View the generated code":"franceseVisualizza il codice generato",
				"Enter a secret key":"franceseInserire una chiave segreta",
				"Enter your password":"Inserire la tua password",
				"Code length":"Lunghezza del codice",
				"Group of characters":"Gruppo di caratteri",
				"Code generated - Click on the field and copy with CTRL-C or Command-C or using the mouse":"Codice generato - Cliccare sul campo e copiare con CTRL-C o Command-C o usando il mouse",
				"GeneraPassword ver 1.1 - ":"GeneraPassword ver 1.1 - ",
				" 2014 ":" 2014 ",
				"Copyright Notice":"Nota sul Copyright",
				"Author Imaginweb":"Autore Imaginweb",
				"Create a password using a combination of the two keys entered by choosing between the characters shown.":"Crea una password mediante la combinazione delle due chiavi immesse scegliendo tra i caratteri indicati." };
			document.links["help"].href="help-fr.html";
			document.links["copyright"].href="copyright-generapassword-fr.html";
			break;
		case "dee":
			var lang = { "":"",
				"Password Generator by Imaginweb - ver 1.1":"tedescoGeneratore di Password by Imaginweb - ver 1.1",
				"Secret key":"tedescoChiave segreta",
				"Password":"tedescoPassword",
				"Code length":"tedescoLunghezza del codice",
				"Characters":"tedescoCaratteri",
				"Code":"tedescoCodice",
				"Show":"Mostra",
				"View the generated code":"Visualizza il codice generato",
				"Enter a secret key":"Inserire una chiave segreta",
				"Enter your password":"Inserire la tua password",
				"Code length":"Lunghezza del codice",
				"Group of characters":"Gruppo di caratteri",
				"Code generated - Click on the field and copy with CTRL-C or Command-C or using the mouse":"Codice generato - Cliccare sul campo e copiare con CTRL-C o Command-C o usando il mouse",
				"GeneraPassword ver 1.1 - ":"GeneraPassword ver 1.1 - ",
				" 2014 ":" 2014 ",
				"Copyright Notice":"Nota sul Copyright",
				"Author Imaginweb":"Autore Imaginweb",
				"Create a password using a combination of the two keys entered by choosing between the characters shown.":"Crea una password mediante la combinazione delle due chiavi immesse scegliendo tra i caratteri indicati." };
			document.links["help"].href="help-de.html";
			document.links["copyright"].href="copyright-generapassword-de.html";
			break;
		case "ess":
			var lang = { "":"",
				"Password Generator by Imaginweb - ver 1.1":"SpagnoloGeneratore di Password by Imaginweb - ver 1.1",
				"Secret key":"tedescoChiave segreta",
				"Password":"tedescoPassword",
				"Code length":"tedescoLunghezza del codice",
				"Characters":"tedescoCaratteri",
				"Code":"tedescoCodice",
				"Show":"Mostra",
				"View the generated code":"Visualizza il codice generato",
				"Enter a secret key":"Inserire una chiave segreta",
				"Enter your password":"Inserire la tua password",
				"Code length":"Lunghezza del codice",
				"Group of characters":"Gruppo di caratteri",
				"Code generated - Click on the field and copy with CTRL-C or Command-C or using the mouse":"Codice generato - Cliccare sul campo e copiare con CTRL-C o Command-C o usando il mouse",
				"GeneraPassword ver 1.1 - ":"GeneraPassword ver 1.1 - ",
				" 2014 ":" 2014 ",
				"Copyright Notice":"Nota sul Copyright",
				"Author Imaginweb":"Autore Imaginweb",
				"Create a password using a combination of the two keys entered by choosing between the characters shown.":"Crea una password mediante la combinazione delle due chiavi immesse scegliendo tra i caratteri indicati." };
			document.links["help"].href="help-es.html";
			document.links["copyright"].href="copyright-generapassword-es.html";
			break;
		};
	if (lang) {
		document.title=lang[document.title]+" - "+ver;
		E_span = document.getElementsByTagName("span");
		for (var i = 0; i < E_span.length; i++) {
			E_span[i].innerHTML = lang[E_span[i].innerHTML];
			E_span[i].title = lang[E_span[i].title];
		};
		E_input = document.getElementsByTagName("input");
		for (var i = 0; i < E_input.length; i++) {
			E_input[i].title = lang[E_input[i].title];
		};
		E_select = document.getElementsByTagName("select");
		E_select[0].title=lang[E_select[0].title];
		E_links =document.links;
		for (var i = 0; i < E_links.length; i++) {
			E_links[i].title = lang[E_links[i].title];
		};
	};
	document.getElementsByClassName("titlefooter")[0].innerHTML += " ver "+ver+" - ";
	responsive();
};

function responsive() {
	if (document.getElementById("lc").offsetHeight > 20) {
		document.getElementsByClassName("label_adaptation")[0].style.display="inline";
		document.getElementsByClassName("label_adaptation")[1].style.display="inline";
	} else {
		document.getElementsByClassName("label_adaptation")[0].style.display="none";
		document.getElementsByClassName("label_adaptation")[1].style.display="none";
	}
}

