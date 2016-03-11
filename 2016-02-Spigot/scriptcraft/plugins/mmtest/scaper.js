exports.scraper = function(width, height)
{
	echo ('My skyscraper ');
	
	var d = new Drone(self);
	d.chkpt('startp');
	
	for (var i=0; i<height; i++)
	{
	  d.box(blocks.wood, width, 1, width);
	  d.up(1);
      d.box(blocks.glass, width, 3, width);
	  d.up(3);
	}
	d.move('startp');
}
