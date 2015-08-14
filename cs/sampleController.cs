using System;
using System.Net;
using System.Web.Mvc;

public class SampleController : System.Web.Mvc.Controller{

	[HttpPost]
	public ActionResult summonerLookUp(string summonerName){
		string text = "";
		string API_KEY = "792be927-1dda-4511-9798-3bc5c2a2de19";
		try{
			using (var webClient = new WebClient()){
				webClient.Encoding = Encoding.UTF8;
				var json2 = webClient.DownloadString("https://lan.api.pvp.net/api/lol/lan/v1.4/summoner/by-name/" +
				summonerName + '?api_key=' + API_KEY);
				return Json(json2);
			}
		}catch (Exception e){
			text = "error";
		}
		return Json(new { json = text });
	}
	
}