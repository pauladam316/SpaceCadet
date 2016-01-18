//Adam Paul
//Last Edited: December 5, Version 1.8.0

public var texture: GUITexture;
public var textureLogo: GUITexture;
static var gameReady: boolean = false;
public var titleAnimation: GameObject;
public var select: AudioSource;
function Start () {
}

function Update () {
	if (gameReady == false) {
		for (var i = 0; i < Input.touchCount; ++i) {
				if (Input.GetTouch(i).phase == TouchPhase.Began) {
					if( texture != null && texture.GetScreenRect().Contains( Input.GetTouch(i).position)) {					
						Destroy(texture);
						Destroy(textureLogo);
						gameReady = true;
						select.Play();
					}
				}
		}
		if (Input.GetMouseButtonDown(0)) {
				if( texture != null && texture.GetScreenRect().Contains( Input.mousePosition)) {					
						Destroy(texture);
						Destroy(textureLogo);
						gameReady = true;
						select.Play();
				}
		}
	}
	else {
			if (texture != null) {Destroy(texture);}
			if (textureLogo != null) {Destroy(textureLogo);}
			if (titleAnimation != null) {Destroy(titleAnimation);}
		}
}