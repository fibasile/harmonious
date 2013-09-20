var harmonious = {
		title: 'Harmonious',
		version: '0.0.1',
		config: {
			showDebug: true
		},
		menu: null,
		controller: null,
		gui: require('nw.gui'),		
		init: function(){
			this.menu.init();
			this.controller.init();
		}
};
