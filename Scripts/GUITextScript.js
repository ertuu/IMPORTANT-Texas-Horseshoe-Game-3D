#pragma strict
private var ammo: int;



function Start () {
ammo=5;
}

function Update () {

if (ammo < 1 )
ammo=0;

if(Input.GetKeyUp (KeyCode.Space))

{ammo=ammo-1;

}

guiText.text=ammo.ToString();



}


