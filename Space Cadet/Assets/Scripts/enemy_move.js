//Adam Paul
//Prepped for v1.0.0

static var location:  float;

public var enemy_red: Transform;

private var enemyX:        Transform;
private var startLocation: Vector3;
private var moveReady:     boolean = false;


function Start () {
	enemyX = Instantiate(enemy_red, enemy_red.transform.position, transform.rotation); //CREATE NEW ENEMY
	startLocation = enemyX.transform.position; //POSITIONS HIM
}

function Update () {
	if (title_remove.gameReady == true &&  player_movement.tutorial == true ) {
		moveReady = true; //READY TO GO
		title_remove.gameReady = false;
	}
	
	if (moveReady == true && game_over.gameOver == false) {
	
		enemyX.transform.Translate(Vector3.down * Time.deltaTime / 2, Space.World); //MOVE HIM DOWN
		
		if (enemyX.transform.position.y < 36.5) { //RESET IF HE GETS TOO LOW
			enemyX.transform.position = startLocation;
			score_adder.triggerReady = true;
		}
		
		enemyX.transform.Translate(Vector3.left * Time.deltaTime / 8, Space.World); //MOVE TO THE LEFT
	}
	else {
		location = enemyX.transform.position.y; //RESET HEIGHT
		//Debug.Log(location);
	}
}

