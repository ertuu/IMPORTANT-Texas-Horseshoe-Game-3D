#pragma strict

var scoreall:int;



function Start () {
scoreall=0;
//guiscore= GameObject.Find("GUI Score");

}

function Update () {
guiText.text=scoreall.ToString();

}

