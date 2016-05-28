#pragma strict

var torqueAdd: Vector3;

function Start () {

}

function Update () {

if (Input.GetButtonDown("Jump"))

rigidbody.AddTorque(torqueAdd);

}