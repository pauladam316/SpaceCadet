using UnityEngine;
using System.Collections;
using GooglePlayGames;
using UnityEngine.SocialPlatforms;

public class leaderboards : MonoBehaviour {
	public AudioSource select;

	// Use this for initialization
	void Start () {
		// recommended for debugging:
		PlayGamesPlatform.DebugLogEnabled = true;
		
		// Activate the Google Play Games platform
		PlayGamesPlatform.Activate();
		guiTexture.enabled = false;
		if (Time.time < 1) { 
			Social.localUser.Authenticate ((bool success) => {
					Debug.Log ("Success");
			});
		}
	}

	// Update is called once per frame
	void Update () {
		if (guiTexture.enabled == true) {
			int bestScore = PlayerPrefs.GetInt ("best_score");
			if (bestScore > 15 ) {
				Social.ReportProgress("CgkIsIycqP4bEAIQAg ", 100.0f, (bool success) => { });
			}
			if (bestScore > 50 ) {
				Social.ReportProgress("CgkIsIycqP4bEAIQAw", 100.0f, (bool success) => { });
			}
			if (bestScore > 100 ) {
				Social.ReportProgress("CgkIsIycqP4bEAIQBA", 100.0f, (bool success) => { });
			}
			if (bestScore > 250 ) {
				Social.ReportProgress("CgkIsIycqP4bEAIQBQ", 100.0f, (bool success) => { });
			}
			if (bestScore > 500 ) {
				Social.ReportProgress("CgkIsIycqP4bEAIQBg", 100.0f, (bool success) => { });
			}
				for (var i = 0; i < Input.touchCount; ++i) {
						if (Input.GetTouch (i).phase == TouchPhase.Began) {
								if (guiTexture.GetScreenRect ().Contains (Input.GetTouch (i).position)) {
										Debug.Log ("hello");
										Social.ShowLeaderboardUI ();
										select.Play ();
										
										Social.ReportScore (bestScore, "CgkIsIycqP4bEAIQAA", (bool success) => {
											if (!success) {
												Debug.Log("FAILURE");
											}
										});	
								}
						}
				}
			/*
				if (Input.GetMouseButtonDown (0)) { //REMOVE FOR RELEASE
						if (guiTexture.GetScreenRect ().Contains (Input.mousePosition)) {
								//Debug.Log ("hello");
								Social.ShowLeaderboardUI ();
								int bestScore = PlayerPrefs.GetInt ("best_score");
								Social.ReportScore (bestScore, "CgkIsIycqP4bEAIQAA", (bool success) => {
										// handle success or failure
								});	
						}
				}
				*/
		}

	}

}
