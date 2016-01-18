//Adam Paul
//Locked for Release v1.0.0
#pragma strict

public var background1: GameObject;
public var background2: GameObject;
public var speed: 	    float;
public var jet: 	    Transform;
public var ufo: 	    Transform;
public var plane: 	    Transform;
public var baloon: 	    Transform;

private var height:	    float;
private var reference:  float;
private var jetObj:  	Transform;
private var ufoObj:  	Transform;
private var planeObj:  	Transform;
private var baloonObj:  Transform;
private var randomObj:  int;

function Start () {
	height = ( background2.transform.position.y - background1.transform.position.y ); //RETURNS HEIGHT OF BACKGROUND IMAGE
	reference = background2.transform.position.y; //THE POSITION TO MOVE OFFSCREEN BACKGROUND IMAGES TO
}

function Update () {

	if (game_over.gameOver == false) { //MAKE SURE THE GAME IS RUNNING
	
		if (background1.transform.position.y > reference - (2 * height)) { //IF ITS STILL ON THE SCREEN
			
			background1.transform.Translate(Vector3.down * Time.deltaTime * speed, Space.World);//MOVE IT DOWN
		}
		else {
			background1.transform.position.y += (2 * height); //RESET TO THE TOP
			randomObj = Random.Range(1, 10);
			
			switch(randomObj) {
				case 1: jetObj = Instantiate(jet, jet.transform.position, transform.rotation); 			break;//CREATE NEW JET
				case 2: ufoObj = Instantiate(ufo, ufo.transform.position, transform.rotation); 			break; //CREATE NEW UFO
				case 3: planeObj = Instantiate(plane, plane.transform.position, transform.rotation);    break; //CREATE NEW PLANE
				case 4: baloonObj = Instantiate(baloon, baloon.transform.position, transform.rotation); break; //CREATE NEW BALOON
			}
			
		}
				
		if (background2.transform.position.y > reference - (2 * height)) { 	//APPLY THE SAME TO OTHER IMAGE
		
			background2.transform.Translate(Vector3.down * Time.deltaTime * speed, Space.World);
		}
		else {
			background2.transform.position.y += (2 * height);
			randomObj = Random.Range(0, 10);
			
			switch(randomObj) {
				case 1: jetObj = Instantiate(jet, jet.transform.position, transform.rotation); 			break;//CREATE NEW JET
				case 2: ufoObj = Instantiate(ufo, ufo.transform.position, transform.rotation); 			break; //CREATE NEW UFO
				case 3: planeObj = Instantiate(plane, plane.transform.position, transform.rotation);    break; //CREATE NEW PLANE
				case 4: baloonObj = Instantiate(baloon, baloon.transform.position, transform.rotation); break; //CREATE NEW BALOON
			}
		}
		
	}
	if (jetObj != null) {
		jetObj.transform.Translate(Vector3.down * Time.deltaTime * speed, Space.World);//MOVE IT DOWN
		jetObj.transform.Translate(Vector3.left * Time.deltaTime, Space.World); //MOVE TO THE LEFT
		if ( jetObj.transform.position.x < -18.67487 ) {
			Destroy(jetObj.gameObject);
		}
	}
	
	if (planeObj != null) {
		planeObj.transform.Translate(Vector3.left * Time.deltaTime * 3.5, Space.World); //MOVE TO THE LEFT
		if ( planeObj.transform.position.x < -22.7981 ) {
			Destroy(planeObj.gameObject);
		}
	}
	
	if (ufoObj != null) {
		ufoObj.transform.Translate(Vector3.down * Time.deltaTime * 2.5, Space.World);//MOVE IT DOWN
		ufoObj.transform.Translate(Vector3.left * Time.deltaTime * 2.5, Space.World); //MOVE TO THE LEFT
		if ( ufoObj.transform.position.x < -23.1777 ) {
			Destroy(ufoObj.gameObject);
		}
	}
	
	if (baloonObj != null) {
		baloonObj.transform.Translate(Vector3.down * Time.deltaTime * 4, Space.World);//MOVE IT DOWN
		if ( baloonObj.transform.position.y < 28.97 ) {
			Destroy(baloonObj.gameObject);
		}
	}
}