//Функция, которая добавляет поле _antispam во все формы на странице
function appendAntiSpamField(){
	var forms = document.getElementsByTagName("form");
	for(var i = 0,l = forms.length;i < l;i++){
		var inp = document.createElement('input');
		inp.setAttribute("type","hidden");
		inp.setAttribute("name","_antispam");
		var d = new Date();
		//Случайное значение
		inp.value = "antispam_"+d.getMilliseconds();
		forms[i].appendChild(inp);
	}
}

//Запустить функцию после загрузки документа
window.onload = appendAntiSpamField;