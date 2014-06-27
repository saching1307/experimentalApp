/**
 * @author Goyal, Sachin
 */

function MapView() {
	//create object instance, a parasitic subclass of Observable
	
	var self = Ti.UI.createView({
		borderRadius : 5,
		backgroundColor : 'red',
		width : "90%",
		height : "60%",
		bottom:  '30%',
	}); 

	return self;
}

module.exports = MapView;