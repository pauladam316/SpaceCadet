//Adam Paul
//Locked for release v1.0.0

static var tutorial:  boolean = false;
static var offScreen: boolean = false;

public var impact: 			Transform;
public var jumpHeight: 		int = 200;
public var tutorialScreen:  GUITexture;
public var rocketAnimation: Animator;
public var playerOff: 		Sprite;
public var playerOn: 		Sprite;
public var jump: 			AudioSource;

private var onetime: boolean = false;

function Start () {
	rigidbody.Sleep();
	rigidbody.useGravity = false;
	tutorialScreen.guiTexture.enabled = false;
	GetComponent(SpriteRenderer).sprite = playerOff;
	
}

function Update () {
	if (title_remove.gameReady == true && tutorial == false) {
				
		if (transform.position.y > 37.03313) {
			tutorialScreen.guiTexture.enabled = true;
			for (var i = 0; i < Input.touchCount; ++i) {
					if (Input.GetTouch(i).phase == TouchPhase.Began) {
						rigidbody.WakeUp();
						rigidbody.useGravity = true;
						tutorial = true;
						tutorialScreen.guiTexture.enabled = false;
						rocketAnimation.SetBool("player_boost",true);								 
					}
			}
		}
		else {
			transform.Translate(Vector3.up * Time.deltaTime * 0.8, Space.World); //MOVE INTO VISIBLE SPACE				
		}	
	}
	
	if (game_over.gameOver == false && tutorial == true) {
	
		for (var k = 0; k < Input.touchCount; ++k) {
				if (Input.GetTouch(k).phase == TouchPhase.Began) {					
					rigidbody.AddForce(Vector3.up * jumpHeight); 
					jump.Play();					
				}
		}
	}
	else if (tutorial == true && game_over.gameOver == true) {
		rigidbody.Sleep();
		transform.Translate(Vector3.down * Time.deltaTime * 0.4, Space.World);
		rocketAnimation.SetBool("player_boost",false);					

		if (!onetime) {
		var collisionPoint = Vector3 (collision_detection.contact, enemy_move.location, 1.109376); 
		impact = Instantiate(impact, collisionPoint, transform.rotation);
		onetime = true;
		}
	}
	if (transform.position.y < 36.85 && tutorial == true) {
		game_over.gameOver = true;
		offScreen = true;
	}	
}
