onload = function() {

	var harmonious = global.harmonious;
	var doc = harmonious.controller.provideDoc(this.location.hash);

	// alert(this.location.hash);
	// alert(doc.title);
	var title = doc.title;
	if (doc.dirty) {
		title += '*';
	}
	harmonious.gui.Window.get(this.window)
		.title = title;

	 $("#outliner")
		.concord({
		"prefs": {
			"outlineFont": "Georgia",
			"outlineFontSize": 18,
			"outlineLineHeight": 24,
			"renderMode": false,
			"readonly": false,
			"typeIcons": appTypeIcons
		},
	});
	opXmlToOutline(initialOpmltext);
	
	doc.outliner = $('#outliner').concord();
	
	harmonious.gui.Window.get(this.window).hdoc = doc ;
};
