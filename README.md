# Master Norwegian Vocabulary Application

--- 
- This application is a simple vocabulary application that allows users to add, edit, and delete words and their translations.



### PWA (Progressive Web App)
- using vite-plugin-pwa package to generate a PWA
- to install one on iOS or iPadOS, load the PWA-capable site, choose the Share up-arrow at the bottom of the screen, and select Add to Home Screen 


### Tauri (cross-platform app)

#### Android
- use java 17 (e.q. 17.0.11-tem from sdkman linux/macOS)
```zsh
sdk install java 17.0.11-tem
sdk use java 17.0.11-tem
```

- initialize tauri in an existing project (using bun or npm or pnpm)
```zsh
bunx tauri init
```

- initialize android project (see package.json's scripts section for more commands)
```zsh
bun init:android
```
- run android app
```zsh
bun dev:android
```

#### iOS
- initialize ios project (see package.json's scripts section for more commands)
```zsh
bun init:ios
```
- run ios app
```zsh
bun dev:ios
```



### Problems you might encounter
- existing web app might get default app name to 'app' after running tauri init.
- unsigned apple developer account might not be able to run the app on your device.
- java version mismatch might cause problems when running the android app.