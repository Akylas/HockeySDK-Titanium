Native Titanium Module for HockeyApp and Android Apps.

## Installation

1. Copy the file Module/dist/hockeystick-android-1.0.1.zip into your project directory.
2. Add the following line to the modules element of your tiapp.xml:<pre><module platform="android" version="1.0.1">hockeystick</module></pre>
3. Open your apps.js and initialize the module:<pre>var Stick = require('hockeystick');
Stick.registerManager("APP_ID");</pre>
4. Replace APP_ID with your App ID on HockeyApp.

## Usage

1. Add the following line to all files in which you want to catch exceptions:<pre>var Stick = require('hockeystick');</pre>
2. Create try-catch-blocks like this:<pre>try {
  // Your code
}
catch (e) {
  Stick.reportCrash(e.stack);
  Stick.sendCrashes();
}</pre>The first line saves the exception as a file. The second line send all crash files to HockeyApp (it can be omitted and instead called only once per app start, e.g. in app.js or in a settings view).

## Support

If you have any questions, problems or suggestions, please contact us at [support@hockeyapp.net](mailto:support@hockeyapp.net).
