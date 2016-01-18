//Adam Paul
//Locked for release v1.0.0

import System;
import System.IO;

static var gameOver: boolean;

public var restart_button: 		   GUITexture;
public var gameOverScore: 		   GUIText;
public var gameOverScoreBlack: 	   GUIText;
public var gameOverBestScore:      GUIText;
public var gameOverBestScoreBlack: GUIText;
public var bestScore: 			   int;
public var select: 				   AudioSource;
public var leaderboardButton: 	   GUITexture;

function Start () {
	guiTexture.enabled = false;
	restart_button.guiTexture.enabled = false;
	
	gameOverScore.guiText.enabled = false;
	gameOverScoreBlack.guiText.enabled = false;
	
	gameOverBestScore.guiText.enabled = false;
	gameOverBestScoreBlack.guiText.enabled = false;
}

function Update () {
	if (gameOver == true) {
		if (player_movement.offScreen == true) {		
			guiTexture.enabled = true;
			restart_button.guiTexture.enabled = true;
			
			gameOverScore.guiText.enabled = true;
			gameOverScore.guiText.text = score_adder.score.ToString();
			
			gameOverScoreBlack.guiText.enabled = true;
			gameOverScoreBlack.guiText.text = score_adder.score.ToString();
			
			gameOverBestScore.guiText.enabled = true;
			gameOverBestScoreBlack.guiText.enabled = true;
			
			leaderboardButton.enabled = true;
			scoreWriter();
			
			for (var i = 0; i < Input.touchCount; ++i) {
					if (Input.GetTouch(i).phase == TouchPhase.Began) {
						if( restart_button.GetScreenRect().Contains( Input.GetTouch(i).position)) {
							Restart();
						}
					}
			}			
		}
	}
}

function Restart() {
	  Application.LoadLevel("scene1");
	  gameOver = false;
	  player_movement.tutorial = false;
	  player_movement.offScreen = false;
	  title_remove.gameReady = true;
	  score_adder.score = 0;
}	

function scoreWriter() {	
	
	
	 bestScore = PlayerPrefs.GetInt("best_score");	

	 if (bestScore < score_adder.score) {

        PlayerPrefs.SetInt("best_score", score_adder.score);
        Debug.Log(PlayerPrefs.GetInt("best_score").ToString());
        gameOverBestScore.guiText.text = score_adder.score.ToString();
	 	gameOverBestScoreBlack.guiText.text = score_adder.score.ToString();
	 	Debug.Log("updating");	
	 }
	 else {
	 	gameOverBestScore.guiText.text = bestScore.ToString();
	 	gameOverBestScoreBlack.guiText.text = bestScore.ToString();
	 }         
}