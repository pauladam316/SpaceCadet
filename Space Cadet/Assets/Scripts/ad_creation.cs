using UnityEngine;
using System.Collections;
using GoogleMobileAds.Api;
using GoogleMobileAds;

public class ad_creation : MonoBehaviour {
	BannerView bannerView;
	// Use this for initialization
	void Start () {

		bannerView = new BannerView ("ca-app-pub-1387683089487019/9667976282", AdSize.Banner, AdPosition.Bottom);
		//Debug.Log("requesting ad :)");
		AdRequest request = new AdRequest.Builder().Build();
		bannerView.LoadAd (request);

	}
}
