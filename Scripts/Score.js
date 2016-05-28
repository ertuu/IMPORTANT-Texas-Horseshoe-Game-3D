#pragma strict

var score:int;
var guiscore: GUIScore; 


//score.ToString();
function Start () {
score=0;

guiscore = GameObject.Find("ScoreShow.js").GetComponent(Scoreall);


}

function Update () {

}

function OnCollisionEnter (collision : Collision)
{

if(collision.gameObject.tag == "Horseshoe")
{
	score=score+1;
	guiscore.Scoreall=score;
}

}
