#pragma strict
var waterLevel : float = 4;
var floatHeight : float = 2;
var bounceDamp : float = 0.05;
var buoyancyCentireOffset : Vector3;

private var forceFactor : float;
private var actionPoint : Vector3;
private var upLift : Vector3;


function Update () {

actionPoint = transform.position + transform.TransformDirection(buoyancyCentireOffset);
forceFactor = -((actionPoint.y - waterLevel) / floatHeight);

if (forceFactor > 0f)

{ upLift = -Physics.gravity * (forceFactor - rigidbody.velocity.y * bounceDamp);
rigidbody.AddForceAtPosition(upLift, actionPoint);

}

}