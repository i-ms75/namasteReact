- npm initialisation

- npm install -D :

- package.json

- package-lock.json

- Transitive dependency

# Parcel
- Build
- Set up local server
- HMR - Hot Module Replacement
- Cached build
- Reliable caching
- File watcher algorithm to detect changes made to files
- Image optimization
- Minification
- Bundling
- Compressing  
- Consitent Hashing
- Differential bundling ( no module fallback for older browser)
- Code splitting
- Differential bundling
- Diagnostic
- Error handling
- Lazy builds
- Tree shaking - remove unused code
- Lazy 
- Different dev and prod build

# Browserslist
 - last two versions

 what is the difference between npm and npx command for dev and prod build?
 why does the script command run with npm but not when exact same command from script pasted directly in the terminal?


 ## React.createElement (react element) is not a html content/element, it is an object which upon rendering produces html element.

 ## React DOM
 React render replaces the content of html file, not append. 

 ## JSX
 - JSX is not html inside javaScript
 - It is html like syntax
 - Transpiled by parcel before moving to js engine.

 ##  Functional component
 - Component compisition:
        - Component compisition is a way in which we can combine multiple react functional components inside a another functional component
 -  Cross site scripting:
        - A maliciois API or an attacker being able to execute a javascript code inside our application is called cross site scripting.
- {}
    - We can run a javascript code inside a functional component's jsx element by putting the javascript code inside a {} bracket



- JSX - jsx is a syntax extension to js, it is not html, it is not string, it is jsx, it is a syntax extension to js which looks like html but it is not html, it is not string, it is jsx, it is a syntax extension to js which looks like html but it is not html, it is not string, it is jsx, it is a syntax extension to js which looks like html but it is not html, it is not string, it is jsx, it is a syntax extension to js which looks like html but it is not html, it is not string, it is jsx, it is a syntax extension to js which looks like html but it is not html, it is not string, it is jsx, it is a syntax extension to js which looks like html but it is not html, it is not string, it is jsx, it is a syntax extension to js which looks like html but it is not html, it is not string, it is jsx, it is a syntax extension to js which looks like html but it is not html, it is not string, it is jsx, it is a syntax extension to js which looks like html but it is not html, it is not string.



- React Component - it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx.

- Class based component - it is a class which extends React.Component and has a render method which returns jsx, it is a class which extends React.Component and has a render method which returns jsx, it is a class which extends React.Component and has a render method which returns jsx, it is a class which extends React.Component and has a render method which returns jsx, it is a class which extends React.Component and has a render method which returns jsx, it is a class which extends React.Component and has a render method which returns jsx, it is a class which extends React.Component and has a render method which returns jsx, it is a class which extends React.Component and has a render method which returns jsx, it is a class which extends React.Component and has a render method which returns jsx, it is a class which extends React.Component and has a render method which returns jsx, it is a class which extends React.Component and has a render method which returns jsx, it is a class which extends React.Component and has a render method which returns jsx, it is a class which extends React.Component and has a render method which returns jsx.

- Functional component - it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx. 

## Episode 4 - Talk is cheap show me the code
 ## Props
 ## Config driven UI
 - NOTE: using index as a key for map function is not recommended

 ## React hooks
 Normal JS utility function
 - useState() :
       - Always create inside the functional component.
       - Always decleare at the top of the functional component.
       - Connot be created inside an if else or a loop.
 - useEffects():
       - Case 1: Without dependency array:
              - It is called everytime the component is rendered/re-rendered
       - Case 2: With an empty dependency array
              - It is called only once during the initial rendering of the component
       - Case 3:
              - It is called only when the items in the dependency array changes

 Why does react need useStat to re-render upon variable update, why can't it re-render when a normal js variable is used?
 What is react fiber?
 What is virtual dom? why is it important?

 ## Live api
 -  useEffect
 - optional chaining
 - Shimmer ui

 ## Epdisode 6
 -  Whenever a state variable changes, react triggers reconciliation cycle(re-renders the component )

 ## Episode 7
 - Routing
 - Outlet - children inside an outlet.
 - CLient side vs server side rendering.
 - useParams   
  
## Episode 8
- How do you pass a props to a class based component?