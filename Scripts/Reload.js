#pragma strict
var horseshoe1: GameObject;
var horseshoe2: GameObject;
var horseshoe3: GameObject;
var horseshoe4: GameObject;
var horseshoe5: GameObject;
private var ammo : int = 0;


function Start () {




}

function Update () {
 
if (ammo==1)
{
horseshoe2.active=true;
}
if (ammo==2)
{
horseshoe3.active=true;
}
if (ammo==3)
{
horseshoe4.active=true;
}
if (ammo==4)
{
horseshoe5.active=true;
}




if(Input.GetKeyDown (KeyCode.R))

{ammo=ammo+1;

}

}