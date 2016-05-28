#pragma strict

var speed : Vector3;
var IsFlying : boolean =false;
public var ammo:int =0;





function Start () {

}

function Update () {

//direction =cowboy.transform.rotation;

    
     if (speed.z > 100) {
      speed.z=99;
      
      }
        if(Input.GetButton ("Jump"))
     
     {
 speed.z=speed.z+1;
		
	 }	 



     if(Input.GetKeyUp (KeyCode.Space) && IsFlying==false )
     {
   IsFlying=true; 
   rigidbody.isKinematic = false; 
   transform.parent = null;        
   rigidbody.velocity = transform.TransformDirection(speed);
     ammo=ammo+2;
    
     
     }
     
    



}


//rigidbody.isKinematic = false;

//transform.parent = null;
//transform.DetachChildren();

//rigidbody.AddForce(forceAmount);
//rigidbody.AddTorque(torqueAdd);
