var today = new Date();
var time =  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
var know = {
    "hello":"Hi",
    "hi":"Hi",
	"hey":"Hi",
	"Hello":"Hi",
	"Hi":"Hi",
	"ey":"Hi",
	"What time is it":time,
    "What is today":date,
    "what time is it":time,
    "what is today":date,
    "bye": "Good bye",
    "Bye": "Good bye",
    "Good bye see you again": "Me too, bye",
};
let user = document.getElementById("inpMess");
var ai = document.getElementById("txtMess");
user.addEventListener("keyup", function(event) {
	if (event.keyCode === 13){
		event.preventDefault();
		let input = document.getElementById('inpMess').value;
        ai.value += input + "\n";
        if(input in know){
            ai.value += know[input]+ "\n";
        }
        else if (input = "youtube"){
        	window.location.href = "http://youtube.com";
        }
        else if (input = "facebook"){
        	window.location.href = "http://facebook.com";
        }
        else if (input = "zalo"){
        	window.location.href = "http://chat.zalo.me";
        }
        else if (input = "instagram"){
        	window.location.href = "http://instagram.com";
        }
    	else {
    		ai.value += "I am not a genius , ask me something that I know!" + "\n"
    	}
    	user.value = "";
	}});