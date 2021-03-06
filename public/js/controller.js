harmonious.controller = (function() {
	return {
		init: function() {
			this.mainWindow = harmonious.gui.Window.get();
			// this.newUntitledDoc();
			// this.hideMainWindow();
			if (harmonious.config.showDebug) {
				this.showDevTools();
			}
			this.untitled = 1;
			this.currentWindow = null;
			this.openWindows = [];
		},
		documents: {},
		newUntitledDoc: function() {
			// return;
			var _this = this;
			var doc_hash = '#$' + (new Date()
				.getTime());
			this.documents[doc_hash] = {
				'title': 'Untitled document (' + this.untitled + ')',
				'dirty': true
			};
			this.untitled += 1;
			var new_win = harmonious.gui.Window.open('document.html' + doc_hash, {
				// title: "Untitled",
				focus: true,
				toolbar: false
			});
			_this.currentWindow = new_win;
			_this.openWindows.push(new_win);

			new_win.on("focus", function() {
				_this.currentWindow = this;
			})

			new_win.on("close", function() {
				this.close(true);
			})
		},
		provideDoc: function(doc_hash) {
			// console.log("returning " + this.documents[doc_hash]); 
			return this.documents[doc_hash];
		},
		log: function(msg) {
			console.log(msg);
		},
		showOpenFile: function(msg) {
			this.chooseFile('#fileDialog');
		},
		saveFile: function() {
		},
		saveFileAs: function() {
		},
		closeFile: function() {
		},
		closeAllFiles: function() {
		},
		hideMainWindow: function() {

			this.mainWindow.hide();
		},
		showDevTools: function() {
			var gui = harmonious.gui;
			var win = gui.Window.get();
			win.showDevTools();
		},
		chooseFile: function(name) {
			var chooser = $(name);
			chooser.change(function(evt) {
				console.log($(this)
					.val());
			});

			chooser.trigger('click');
		}
	};

}());
