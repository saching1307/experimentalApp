//FirstView Component Constructor

function alertViewAction()
{
	alert("Something is expected");
}

function InstructionView() {
	//create object instance, a parasitic subclass of Observable
	var CustomButton = require('ui/common/CustomButton');
	var self = Ti.UI.createView({
		borderRadius : 5,
		backgroundColor : 'white',
		width : "90%",
		height : "20%",
		top:  '70%',
	}); 
	
	var button = new CustomButton("2%","5%","30%","100%","something",alertViewAction);
	self.add(button);
	
	var button1 = new CustomButton("35%","5%","30%","100%","something1",alertViewAction);
	self.add(button1);
	
	var button2 = new CustomButton("68%","5%","30%","100%","...",alertViewAction);
	self.add(button2);


	return self;
}

module.exports = InstructionView;
