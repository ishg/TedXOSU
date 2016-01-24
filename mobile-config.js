App.info({
	id: 'com.idc6jyc9yn36dqvzzoup',
  name: 'TEDxOhioStateUniversity',
	description: 'Mobile app for TEDxOhioStateUniversity',
	author: 'Ishmeet Grewal',
	version: '0.0.3',
  website: 'http://tedx.osu.edu'
});

App.accessRule('*');

App.icons({
  // iOS
  'iphone': 'resources/ios/icon/icon-60.png',
  'iphone_2x': 'resources/ios/icon/icon-60@2x.png',
  'iphone_3x': 'resources/ios/icon/icon-60@3x.png',
  'ipad': 'resources/ios/icon/icon-76.png',
  'ipad_2x': 'resources/ios/icon/icon-76@2x.png',

  // Android
  'android_ldpi': 'resources/android/icon/drawable-ldpi-icon.png',
  'android_mdpi': 'resources/android/icon/drawable-mdpi-icon.png',
  'android_hdpi': 'resources/android/icon/drawable-hdpi-icon.png',
  'android_xhdpi': 'resources/android/icon/drawable-xxxhdpi-icon.png'
});

App.launchScreens({
  // iOS
  'iphone': 'resources/ios/splash/Default~iphone.png',
  'iphone_2x': 'resources/ios/splash/Default@2x~iphone.png',
  'iphone5': 'resources/ios/splash/Default-568h@2x~iphone.png',
  'iphone6': 'resources/ios/splash/Default-667h.png',
  'iphone6p_portrait': 'resources/ios/splash/Default-736h.png',
  'iphone6p_landscape': 'resources/ios/splash/Default-Landscape-736h.png',

  'ipad_portrait': 'resources/ios/splash/Default-Portrait~ipad.png',
  'ipad_portrait_2x': 'resources/ios/splash/Default-Portrait@2x~ipad.png',
  'ipad_landscape': 'resources/ios/splash/Default-Landscape~ipad.png',
  'ipad_landscape_2x': 'resources/ios/splash/Default-Landscape@2x~ipad.png',

  // Android
  'android_ldpi_portrait': 'resources/android/splash/drawable-land-hdpi-screen.png',
  'android_ldpi_landscape': 'resources/android/splash/drawable-port-ldpi-screen.png',
  'android_mdpi_portrait': 'resources/android/splash/drawable-land-hdpi-screen.png',
  'android_mdpi_landscape': 'resources/android/splash/drawable-port-mdpi-screen.png',
  'android_hdpi_portrait': 'resources/android/splash/drawable-land-hdpi-screen.png',
  'android_hdpi_landscape': 'resources/android/splash/drawable-port-hdpi-screen.png',
  'android_xhdpi_portrait': 'resources/android/splash/drawable-land-xhdpi-screen.png',
  'android_xhdpi_landscape': 'resources/android/splash/drawable-port-xhdpi-screen.png'
});

// Set PhoneGap/Cordova preferences
App.setPreference('BackgroundColor', '0xffffffff');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('Orientation', 'default');
App.setPreference('Orientation', 'all', 'ios');