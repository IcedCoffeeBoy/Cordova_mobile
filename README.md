# Set up environment variables
ANDROID_SDK_ROOT Installation directory of Android SDK package `Android/sdk` folder <br>
ANDROID_SDK_HOME Location of SDK related data/user files `.android folder` <br>
ANDROID_AVD_HOME Location of AVD-specific data files. `.android/avd` folder <br>
JAVA_HOME Location to java JDK `jdk1.8.0` folder


# ng build for cordova
ng build --prod --base-href . --output-path ./mobile/www/

# For release 
cordova build android --release -- --keystore=../my-release-key.keystore --storePassword=password --alias=alias_name --password=password

