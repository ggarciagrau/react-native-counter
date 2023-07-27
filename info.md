export npm_config_ignore_engines=true
npx react-native init CounterApp --template react-native-template-typescript
npx react-native start
npx react-native run-android

keytool -genkey -v -keystore your_key_name.keystore -alias your_key_alias -keyalg RSA -keysize 2048 -validity 10000

Move the key to android/app/[here]

Edit build.gradle:

signingConfigs {
  release {
    storeFile file('your_key_name.keystore')
    storePassword System.console().readLine("\nKeystore password:")
    keyAlias System.console().readLine("\nAlias: ")
    keyPassword System.console().readLine("\Alias password: ")
   }
}

Fill signing block with keystore values

Create assets folder in android/app/src/main/[here]

react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/

Run './gradlew assembleRelease' in android folder