//Adam Paul
//Last Edited: December 2nd, Version 1.8.0

static var score: 		 int = 0;
public var text: 		 GUIText;
static var triggerReady: boolean;
public var gateEnter :   AudioSource;

function Start () {
	text = GameObject.Find("Score").guiText;
	triggerReady = true;
}

function Update () {
	if (game_over.gameOver == true || player_movement.tutorial == false) {
		text.guiText.enabled = false;
	}
	else {
		text.guiText.enabled = true;
	}
}

function OnTriggerEnter(other: Collider) {
	if (triggerReady == true) {
		score ++;
		text.guiText.text = score.ToString();
		triggerReady = false;
		gateEnter.Play();
	}
}