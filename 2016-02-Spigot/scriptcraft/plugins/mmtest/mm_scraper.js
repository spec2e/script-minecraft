exports.mm_scraper = function(floors, width)
{
	echo('making a skyscraper');
	var d = new Drone(self); // 'self' means start drone beside me
	d.chkpt('startpos'); // save drone position so it can return later
	for (var i = 0; i < floors; i++)
	{
		d.box(blocks.iron, width, 1, width); // floor of iron, 1 block high
		d.up();  // move up 1 block before adding next part
		d.box0(blocks.glass_pane, width, 3, width); // hollow box of glass
		d.up(3);		
	}
	d.move('startpos'); // return drone to saved position
}


