var Stick = require('hockeystick');
Stick.registerManager("5680ab568af2fd6d441f9e3deff365ca");

Titanium.UI.setBackgroundColor('#000');

var window = Titanium.UI.createWindow({  
    title: '@HockeyApp',
    backgroundColor: '#000',
    url: 'tweets.js'
});

window.open();
