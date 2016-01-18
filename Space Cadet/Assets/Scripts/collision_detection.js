//Adam Paul
//Prepped for release v1.0.0


static var contact:    float;

public var deathArray: AudioSource[];
public var death:      AudioSource;

private var player:     GameObject;


function Start () {
	player = GameObject.Find("Player"); //GET PLAYER GAMEOBJECT
	
	deathArray = player.GetComponents.<AudioSource>();
	for(var i: int = 0; i < deathArray.Length; i++) {
			death = deathArray[i]; //GET DEATH SOUND
	}
}

function OnCollisionEnter (collision: Collision) {
	game_over.gameOver = true;
	
	contact = collision.contacts[0].point.x; //FINDS X CORDINATES ON DEATH IMPACT

	
	player.animation.Play ("player_death"); //PLAYS DEATH ANIM
	death.Play(); //PLAYS DEATH AUDIO
}