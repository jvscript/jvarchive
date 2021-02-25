// ==UserScript==
// @name			JvArchive
// @namespace		JvArchive
// @author			GarryMod
// @version			1.4.3
// @include			/^(http|https):\/\/www\.jeuxvideo\.com\/forums\/(.*)$/
// @require			http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @grant			GM_xmlhttpRequest
// @updateURL		http://panachay.altervista.org/jvarchive/JvArchive.user.js
// @icon			data:image/png;base64,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
// ==/UserScript==

topic410 = false;
if(document.getElementsByClassName("img-erreur")[0] && document.getElementsByClassName("img-erreur")[0].src == "https://www.jeuxvideo.com/img/erreurs/e410.png"){
	topic410 = true;
}

var in_topic;
if(location.href.indexOf("jeuxvideo.com/forums/42-") != -1 || location.href.indexOf("jeuxvideo.com/forums/1-") != -1){
	in_topic = true;
}
else if(location.href.indexOf("jeuxvideo.com/forums/0-") != -1){
	in_topic = false;
}

var version = "1.4.3";

function log(log){
	console.log("[JvArchive v"+version+"] "+log);
}
function log_to_console(log_){
	log("[Console] "+log_);
	if(document.getElementById("jvarchive_console") != null) document.getElementById("jvarchive_console").innerHTML += log_+"<br>";
}
function createCookie(name,value,days){
	if(days){
		var date = new Date();
		date.setTime(date.getTime() + (days*24*60*60*1000));
		var expires = "; expires=" + date.toUTCString();
	}
	else var expires = "";
	document.cookie = name + "=" + value + expires + "; path=/";
}
function readCookie(name){
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++){
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}
function objectsHaveSameKeys(...objects){
	const allKeys = objects.reduce((keys, object) => keys.concat(Object.keys(object)), []);
	const union = new Set(allKeys);
	return objects.every(object => union.size === Object.keys(object).length);
}
function change_param(param,value){
	options[param] = value;
	createCookie("jvarchive_param",JSON.stringify(options),365);
	log("Options sauvegardé");
	log(JSON.stringify(options));
}

var options = {};
var default_options = {save: true/*, update: false*/};

log("Chargement de options...");

if(readCookie("jvarchive_param") !== null && objectsHaveSameKeys(default_options,JSON.parse(readCookie("jvarchive_param")))){
	options = JSON.parse(readCookie("jvarchive_param"));
	log("Options cookies chargé : "+JSON.stringify(options));
}
else{
	options = default_options;
	log("Options par défaut chargé : "+JSON.stringify(options));
	createCookie("jvarchive_param",JSON.stringify(options),365);
	log("Options sauvegardé");
	log(JSON.stringify(options));
}

if(!topic410){
	$(".options-crumb").prepend(
		"<div class=\"dropdown content-menu-user-forum\" style=\"background-color: #2bbaff;\">"+
		"<span class=\"picto-alerte-page\" title=\"JvArchive\" id=\"jvarchive_button_toggle\""+
		"<span></span>"+
		"</span>"+
		"<ul class=\"dropdown-menu pull-right menu-user-forum\" style=\"text-align: left;\" id=\"jvarchive_dropdown\">"+
		"<li>JvArchive v"+version+"</li> <button id=\"jvarchive_button_refresh\" style=\"position: absolute;top: 5px;right: 5px;\" class=\"btn btn-info\">&#x27F3;</span></button>"+
		"<li style=\"height: 100px;overflow-x: hidden;overflow-y: auto;\"><code class=\"code-jv\" id=\"jvarchive_console\"></code></li>"+
		"<li>Options :<br><ul>"+
		//"<li>Mettre a jour la dernière archive : <input class=\"jvarchive_optioncheck\" id=\"jvarchive_check_update\" type=\"checkbox\"></li>"+
		"<li>Archiver automatiquement le topic : <input class=\"jvarchive_optioncheck\" id=\"jvarchive_check_save\" type=\"checkbox\"></li>"+
		"</ul></li>"+
		"</ul>"+
		"</div>");
	$("#jvarchive_button_toggle").click(function(){
		$("#jvarchive_dropdown").toggle();
	});
	$("#jvarchive_button_refresh").click(function(){
		get_sumbitid("http://archive.is/", function(submitid){
			if(in_topic){
				archive_topic(location.href, submitid);
			}
		});
	});
	$(".jvarchive_optioncheck").each(function(i,o){
		o.checked = options[o.id.replace("jvarchive_check_","")];
		$(o).click(function(){
			var param = this.id.replace("jvarchive_check_","");
			change_param(param,!options[param]);
		});
	});
}

log_to_console("> Console jvarchive<br>");

function get_sumbitid(url, callback){
	GM_xmlhttpRequest({
		method: "GET",
		url: url,
		onload: function(res){
			parser = new DOMParser();
			res_html = res.responseText;
			res_html = parser.parseFromString(res_html, "text/html");
			submitid = res_html.getElementsByName("submitid")[0].value;
			log("Success submitid : "+submitid);
			callback(submitid);
		},
		onerror: function(err){
			log("Erreur : "+err);
		}
	});
}

//var update = false;

/*
la mise a jour d'une archive ne marche pas pour une raison qui m'échappe
en attendant pas d'update
*/

function archive_topic(url, submitid){
	//if(!update) log_to_console("Archivage du topic...");
	log_to_console("Archivage du topic...");
	post_data = "submitid="+submitid+"&url="+url;

	/*if(update){
		post_data = "anyway=1&"+post_data;
	}*/

	GM_xmlhttpRequest({
		method: "POST",
		url: "http://archive.is/submit/",
		data: post_data,
		headers:{
			"Content-Type": "application/x-www-form-urlencoded"
		},
		onload: function(res){
			/*if(options.update && !update){
				get_sumbitid("http://archive.is/", function(submitid){
					update = true;
					archive_topic(location.href, submitid);
				});
			}
			else{
				if(update){
					log_to_console("Topic mise a jour avec succès");
					log_to_console("<a href=\""+res.finalUrl+"\">"+res.finalUrl+"</a>");
				}
				else{
					
				}
			}*/
			log_to_console("Topic archivé avec succès");
			GM_xmlhttpRequest({
				method: "GET",
				url: "http://archive.is/newest/"+location.href.split("#")[0],
				onload: function(res){
					log_to_console("<a href=\""+res.finalUrl+"\">"+res.finalUrl+"</a>");
				}
			});
		}
	});
}

if(options.save && !topic410){
	get_sumbitid("http://archive.is/", function(submitid){
		if(in_topic){
			archive_topic(location.href.split("#")[0], submitid);
		}
	});
}

if(topic410){
	document.getElementsByClassName("img-erreur")[0].src = "http://image.noelshack.com/fichiers/2017/45/4/1510259661-pasdechanceerreur410.png";
	document.getElementsByClassName("img-erreur")[0].parentNode.style = "text-align: center;";
	document.getElementsByClassName("img-erreur")[0].setAttribute("style" , "margin-left: auto;margin-right: auto;display: table");
	document.getElementsByClassName("col-md-12 text-center")[0].innerHTML = "";
	document.getElementsByClassName("col-md-12 text-center")[1].innerHTML = "";
	document.getElementsByClassName("col-md-12 text-center")[2].innerHTML = "<br><br><h1>Voici l'archive du topic :</h1><br>";
	document.getElementsByClassName("col-md-12 text-center")[2].innerHTML += "<iframe style=\"width: 100%;height: 500px;\" src=\"http://archive.is/"+location.href+"\"></iframe>";
}
