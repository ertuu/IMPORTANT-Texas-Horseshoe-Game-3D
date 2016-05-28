#pragma strict
var position: Vector3;
var rotation: Quaternion;
private var MainCamera : GameObject;


function Start () {
MainCamera = GameObject.Find("MainCamera");

}

function Update () {

if (Input.GetButtonDown("Gravity")){
Physics.gravity = Vector3(0, 1.6,0);
MainCamera.transform.position= Vector3(-15.24,32.65,7.3);
MainCamera.transform.Rotate(0,-64.216,0);
Time.timeScale=0.5;

}

if (Input.GetButtonUp("Gravity"))
{
Physics.gravity = Vector3 (0, -25,0);
MainCamera.transform.position= Vector3(-61.149,32.6583,-17.711);
MainCamera.transform.Rotate(0,64.216,0);
Time.timeScale=1;
}
}