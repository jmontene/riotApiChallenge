function summonerLookup(){
   var SUMMONER_NAME = "";
   SUMMONER_NAME = $("#userName").val();

   var API_KEY = "";
   API_KEY = $("#theKey").val();

   if(SUMMONER_NAME !== ""){
      $.ajax({
	 url: 'https://lan.api.pvp.net/api/lol/lan/v1.4/summoner/by-name/' +
	    SUMMONER_NAME + '?api_key=' + API_KEY,
	 type: 'GET',
	 dataType: 'json',
	 data:{

	 },
	 success: function(json){
	    var SUMMONER_NAME_NOSPACES = SUMMONER_NAME.replace(" ","");
	    SUMMONER_NAME_NOSPACES = SUMMONER_NAME_NOSPACES.toLowerCase().trim();
	    
	    summonerLevel = json[SUMMONER_NAME_NOSPACES].summonerLevel;
	    summonerID = json[SUMMONER_NAME_NOSPACES].id;

	    document.getElementById("sLevel").innerHTML = summonerLevel;
	    document.getElementByID("sID").innerHtML = summonerID;
	 },
	 error: function(XMLHttpRequest, textStatus, errorThrown){
	    alert("error gettinr Summoner data!");
	 }
      });
   }else {}
}
