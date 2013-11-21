harmonious.menu = (function() {
	return {
		init: function() {
			var gui = harmonious.gui;
			var win = gui.Window.get(),
				// Create menu container
				menubar = new gui.Menu({
					type: 'menubar'
				});
			win.menu = menubar;
			// file
			win.menu.insert(this.fileMenu(gui), 1);
			// edit
			// outline
			win.menu.insert(this.outlineMenu(gui), 3);
			// debug
			if (harmonious.config.showDebug) {
				win.menu.append(this.debugMenu(gui));
			}
			// help
			win.menu.append(this.helpMenu(gui));
		},
		currentOutliner: function() {
			return harmonious.controller.currentWindow.hdoc.outliner;
		},
		fileMenu: function(gui) {
			var _this = this;
			var FM = new gui.Menu(),
				recentFiles = new gui.Menu(),
				fileNew = new gui.MenuItem({
					label: 'New...',
					type: 'normal',
					click: _this.newFile
				}),
				fileOpen = new gui.MenuItem({
					label: 'Open...',
					type: 'normal',
					click: _this.openFile
				}),
				fileOpenRecent = new gui.MenuItem({
					label: 'Open Recent',
					type: 'normal',
					submenu: recentFiles
				}),
				fileSave = new gui.MenuItem({
					label: 'Save',
					type: 'normal',
					click: _this.saveFile
				}),
				fileSaveAs = new gui.MenuItem({
					label: 'Save as...',
					type: 'normal',
					click: _this.saveFileAs
				}),
				fileClose = new gui.MenuItem({
					label: 'Close',
					type: 'normal',
					click: _this.closeFile
				}),
				fileCloseAll = new gui.MenuItem({
					label: 'Close All',
					type: 'normal',
					click: _this.closeAll
				});

			// New
			FM.append(fileNew);
			// Separator
			FM.append(new gui.MenuItem({
				type: 'separator'
			}));
			// Open
			FM.append(fileOpen);
			FM.append(fileOpenRecent);
			// Close
			FM.append(new gui.MenuItem({
				type: 'separator'
			}));
			FM.append(fileClose);
			// Close All
			FM.append(fileCloseAll);
			FM.append(new gui.MenuItem({
				type: 'separator'
			}));
			// Save
			FM.append(fileSave);
			FM.append(fileSaveAs);

			var FI = new gui.MenuItem({
				label: 'File',
				submenu: FM
			});
			return FI;
		},

		debugMenu: function(gui) {
			var debug = new gui.Menu(),
				debugOn = new gui.MenuItem({
					label: 'Show Debugger',
					type: 'normal',
					click: this.showDebugger
				}),
				debugItem = new gui.MenuItem({
					label: 'Debug',
					submenu: debug
				});
			debug.append(debugOn);
			return debugItem;
		},

		helpMenu: function(gui) {
			var help = new gui.Menu(),
				helpItem = new gui.MenuItem({
					label: 'Help',
					submenu: help
				});
			return helpItem;
		},

		outlineMenu: function(gui) {
			var om = new gui.Menu(),
				omItem = new gui.MenuItem({
					label: 'Outline',
					submenu: om
				}),
				om_outExpand = new gui.MenuItem({
					label: 'Expand',
					type: 'normal',
					click: this.outExpand
				}),
				om_outExpandSubs = new gui.MenuItem({
					label: 'Expand All Subs',
					type: 'normal',
					click: this.outExpandSubs
				}),
				om_outExpandEvery = new gui.MenuItem({
					label: 'Expand Everything',
					type: 'normal',
					click: this.outExpandEvery
				}),
				om_outCollapse = new gui.MenuItem({
					label: 'Collapse',
					type: 'normal',
					click: this.outCollapse
				}),
				om_outCollapseEvery = new gui.MenuItem({
					label: 'Collapse Everything',
					type: 'normal',
					click: this.outCollapseEvery
				}),
				om_outMoveUp = new gui.MenuItem({
					label: 'Move Up',
					type: 'normal',
					click: this.outMoveUp
				}),
				om_outMoveDown = new gui.MenuItem({
					label: 'Move Down',
					type: 'normal',
					click: this.outMoveDown
				}),
				om_outMoveLeft = new gui.MenuItem({
					label: 'Move Left',
					type: 'normal',
					click: this.outMoveLeft
				}),
				om_outMoveRight = new gui.MenuItem({
					label: 'Move Right',
					type: 'normal',
					click: this.outMoveRight
				}),
				om_outPromote = new gui.MenuItem({
					label: 'Promote',
					type: 'normal',
					click: this.outPromote
				}),
				om_outDemote = new gui.MenuItem({
					label: 'Demote',
					type: 'normal',
					click: this.outDemote

				});

			om.append(om_outExpand);
			om.append(om_outExpandSubs);
			om.append(om_outExpandEvery);
			om.append(new gui.MenuItem({
				type: 'separator'
			}));
			om.append(om_outCollapse);
			om.append(om_outCollapseEvery);
			om.append(new gui.MenuItem({
				type: 'separator'
			}));
			om.append(om_outMoveUp);
			om.append(om_outMoveDown);
			om.append(om_outMoveLeft);
			om.append(om_outMoveRight);
			om.append(new gui.MenuItem({
				type: 'separator'
			}));
			om.append(om_outPromote);
			om.append(om_outDemote);

			return omItem;
		},

		newFile: function() {
			harmonious.controller.newUntitledDoc();
		},

		openFile: function() {
			harmonious.controller.showOpenFile();
		},

		saveFile: function() {
			harmonious.controller.saveFile();
		},
		saveFileAs: function() {
			harmonious.controller.saveFileAs();

		},
		closeFile: function() {
			harmonious.controller.closeFile();

		},
		closeAll: function() {
			harmonious.controller.closeAllFiles();

		},
		outExpand: function() {
			harmonious.menu.currentOutliner().op.expand();
		},
		outExpandEvery: function() {
			harmonious.menu.currentOutliner().op.fullExpand();

		},
		outExpandSubs: function() {
			harmonious.menu.currentOutliner().op.expandAllLevels();
		},
		outCollapse: function() {
			harmonious.menu.currentOutliner().op.collapse();

		},
		outCollapseEvery: function() {
			harmonious.menu.currentOutliner().op.fullCollapse();

		},
		outMoveUp: function() {
			harmonious.menu.currentOutliner().op.reorg("up", 1);
		},
		outMoveDown: function() {
			harmonious.menu.currentOutliner().op.reorg("down", 1);
		},
		outMoveLeft: function() {
			harmonious.menu.currentOutliner().op.reorg("left", 1);

		},
		outMoveRight: function() {
			harmonious.menu.currentOutliner().op.reorg("right", 1);

		},
		outPromote: function() {

			harmonious.menu.currentOutliner().op.promote();
		},
		outDemote: function() {

			harmonious.menu.currentOutliner().op.demote();
		},
		showDebugger: function() {
			harmonious.controller.showDevTools();
		}
	};
}());
