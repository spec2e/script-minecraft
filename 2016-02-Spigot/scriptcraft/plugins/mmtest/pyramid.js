// Copyright Ruaidhri from ModderDojo Athenry,
// slightly updated by Michael and Alex.
// Builds a pyramid with entrance and lights inside.
 
exports.pyramid = function()
{
  echo('making a pyramid');
  var d = new Drone(self); // 'self' means start drone beside me
  d.up(1);

  d.chkpt('begin');
   
  var size=31;
  
  // Make the walls
  while (size > 0)
  {
    d.box0(blocks.sandstone,size,1,size);
    d.right(1);
    d.fwd(1);
    d.up(1);
    size=size-2;
  }
 
  // Entrance
  d.move('begin');
  d.right(15);
  d.box(blocks.air,1,2,3);
   
  // Lights inside
  d.move('begin');
  d.right(4);
  d.fwd(4);
  d.up(3);
  d.turn(2);
  var t = 0;
  while (t<4)
  {
	d.hangtorch();
    d.left(11);
	d.hangtorch();
    d.left(11);
    d.turn(3);
    t = t + 1;
  }
   d.move('begin');
}
 
 
  
 
