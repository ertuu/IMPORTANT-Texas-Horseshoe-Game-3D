#pragma strict

var score:int;

function Start () {
score=0;
}

function Update () {

}

function OnCollisionEnter (collision : Collision)
{

if(collision.gameObject.tag == "Horseshoe")
{
	score=score+2;
}

}
