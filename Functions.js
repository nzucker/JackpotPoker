

function writeToConsole(text){
	console.log(text);
}

function LoadConfig(){
	writeToConsole('js LoadConfig');
	u.getUnity().SendMessage("SplashScreen1", "LoadConfigFile", window.Configuration);
}