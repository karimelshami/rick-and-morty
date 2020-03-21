## PROJECT RICK AND MORTY
## Requirements
    For development, you will only need Node.js installed on your environement.
## Install
    $ git clone https://github.com/karimelshami/rick-and-morty
    $ cd rick-morty
    $ yarn
## Start & watch
    $ yarn start
## Languages,tools & technologies
* Javascript
* JSX
* React
* Redux
* Redux saga
* React hooks
* Styled components
## Project description and explanation
* This project is designed by applying container componant pattern, containers only have buissness logic and componants are just UI presentation.
* This project is modular where every module has its own comonants,state,actions,reducers,apis & sagas,this pattern helps in scaling any projec
* however it was not needed in this project as only one module was used,however its just a good practice for building scalable projects. 
## Project Tree
```
    rick-and-morty 
    ├─ .eslintrc 
    ├─ .git      
    ├─ .gitignore 
    ├─ jsconfig.json
    ├─ node_modules
    ├─ package.json
    ├─ public
    │  ├─ favicon.ico
    │  ├─ index.html
    │  ├─ manifest.json
    │  └─ robots.txt
    ├─ README.md
    ├─ src      ### root Folder
    │  ├─ assets    ### used to group all project assets
    │  ├─ index.js  ### project index
    │  ├─ modules   ### used to group all the project modules
    │  │  └─ common ### used to group all shared componants & containers 
    │  │     ├─ action-types.js ### used to group common module action types
    │  │     ├─ actions.js      ### used to group common module actions
    │  │     ├─ api.js          ### used to group common module apis
    │  │     ├─ components      ### used to group common module presentational componants
    │  │     ├─ containers      ### used to group common module container
    │  │     │  ├─ HomeContainer    ### used to group homepage business logic
    │  │     │  └─ MainContainer    ### used to wrap the app with redux-store/react-router/theme/globle-styles
    │  │     ├─ index.js    ### used to export redux related files
    │  │     ├─ reducer.js  ### used to group common module reducers
    │  │     └─ saga.js     ### used to group common module sagas
    │  ├─ redux    ### root redux folder
    │  │  ├─ initialState.js    ### used to group all modules intial state
    │  │  ├─ reducer.js         ### used to group all modules reducers
    │  │  ├─ saga.js            ### used to group all modules sagas
    │  │  └─ store.js           ### project store
    │  ├─ routes    ### used to group all project routes
    │  ├─ utils     ### used to group common project utils
    │  │  ├─ constants.js   ### used to group common project constants
    │  │  ├─ index.js       ### used to export all project utils
    │  │  ├─ request.js     ### axios wrapper
    │  │  ├─ theme.js       ### styled componants theme configarations including media queries/common colors
    │  │  └─ urls.js        ### used to group all project urls
    │  └─ __mocks__         ### root testing mocks folder 
    │     ├─ app
    │     │  └─ redux
    │     │     └─ store.js
    │     └─ axios.js
    └─ yarn.lock
```








