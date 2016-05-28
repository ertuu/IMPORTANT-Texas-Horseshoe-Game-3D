#pragma strict

var forceAmount : Vector3;

function Start () {

}

function Update () {
rigidbody.AddForce(forceAmount);



}

function OnCollisionEnter (grassball : Collision) {
		
		forceAmount=-forceAmount;
		
		//Destroy(gameObject);
	}