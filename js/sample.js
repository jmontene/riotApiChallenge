function summonerLookUp(){
   var SUMMONER_NAME = "";
   SUMMONER_NAME = $("#userName").val();

   if(SUMMONER_NAME !== ""){
      $.ajax({
			url: '/Sample/summonerLookUp',
			type: 'POST',
			dataType: 'json',
			data: SUMMONER_NAME,
			success: function(resp){
				var SUMMONER_NAME_NOSPACES = SUMMONER_NAME.replace(" ","");
				SUMMONER_NAME_NOSPACES = SUMMONER_NAME_NOSPACES.toLowerCase().trim();
				
				json = $.parseJSON(resp);
	    
				summonerLevel = json[SUMMONER_NAME_NOSPACES].summonerLevel;
				summonerID = json[SUMMONER_NAME_NOSPACES].id;

				document.getElementById("sLevel").innerHTML = summonerLevel;
				document.getElementById("sID").innerHTML = summonerID;

			},
			error: function(XMLHttpRequest, textStatus, errorThrown){
				alert("error getting Summoner data!");
			}
      });
   }else {}
}
