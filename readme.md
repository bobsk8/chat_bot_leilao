## Use Azure app service editor

1. make code change in the online editor

Your code changes go live as the code changes are saved.

## Use Visual Studio Code

### Build and debug
1. download source code zip and extract source in local folder
2. run npm install inside folder 
3. open the source folder in  Visual Studio Code
4. create .env file(look at the .envexemple file)
5. run node app.js
6. download and run [botframework-emulator](https://emulator.botframework.com/)
7. connect the emulator to http://localhost:3978/api/messages (set MicrosoftAppId and MicrosoftAppPassword)

### Publish back

```
npm run azure-publish
```

## Use continuous integration

If you have setup continuous integration, then your bot will automatically deployed when new changes are pushed to the source repository.




