

function CustomButton(xpos, ypos, width, height, label, eventListener, image) {
	image = typeof image !== 'undefined' ? image : "";

	var button = Titanium.UI.createButton({
		title : label,
		top : ypos,
		left : xpos,
		width : width,
		height : height,
		backgroundColor: "black"
	});
	button.addEventListener('click', eventListener);
	return button;

}

module.exports = CustomButton; 
