# Master Norwegian Vocabulary Application

--- 
- This application is a simple vocabulary application that allows users to add, edit, and delete words and their translations.



### PWA









### Mobile app
#### Android
- use java 17 (e.q. 17.0.11-tem from sdkman)
```zsh
sdk install java 17.0.11-tem
sdk use java 17.0.11-tem
```
- initialize android project (see package.json's scripts section for more commands)
```zsh
bun init:android
```
- run android app
```zsh
bun dev:android
```



### Problems you might encounter
- existing web app might get default app name to 'app' after running tauri init.
- unsigned 