#pragma strict
var mass: float;
private var LeftBox: GameObject;
private var RightBox: GameObject;

function Start () {

LeftBox = GameObject.Find("LeftBox");
RightBox = GameObject.Find("RightBox");

}

function Update () {

if (Input.GetButtonDown("IML")){
LeftBox.rigidbody.mass= LeftBox.rigidbody.mass + 20;
}

}