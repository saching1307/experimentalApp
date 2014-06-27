//FirstView Component Constructor


function FirstView() {
	// Includes
	var MapView = require('ui/common/MapView');
	var InstructionView = require('ui/common/InstructionView');
	
	//Self window creation
	var self = Ti.UI.createView();
	
	// Upper Map body
	var mapView = new MapView();
	self.add(mapView);
	
	//Lower Instruction body
	var instructionView = new InstructionView();
	self.add(instructionView);
	
	return self;
}

module.exports = FirstView;
