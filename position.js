/*
  Posició d'un àtom
*/
function Position(x,y,z){
  this.x=x||0; //coordenada x
  this.y=y||0; //coordenada y
  this.z=z||0; //coordenada z
}

//export (require)
module.exports=Position;

//forma llegible
Position.prototype.toString=function(){
  console.log("Position: ("+this.x+","+this.y+","+this.z+")");
}
