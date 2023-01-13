## What is react?

- React is an opensource frontend JS library that is used for building user Interfaces
- It is used to make single-page application

# Major features of React

- It uses Virtual DOM instead of Real DOM because Real DOM maniplations are expensive
- It follows unidirectional data flow (concept of props)
- It uses the concept of components which are reusable/composable

## What is the difference between State and Props?

# State

- It is an object that holds some information that may change over lifetime of the components.
- The state is a built in object that is used to contain data the component, A component state can change over
- State cannot be accessed by child components
- States can be used for rendering dynamic changes with the component
- Stateless component cannot have State
- State cannot make components reusable

# Props

- Props are inputs to components
- they are single values or objects containing a set of values that are passed to components on creation using a naming convention similar to HTML-tag attributes
- The primary use of props is to pass custom data to your component ,trigger state changes,
- Props are read only
- props are immutable
- props can be accessed by the child component
- Props makes components reusable
- Props are used to communicate between components

# What is Conditional rendering

- the conditional rendering is a term to describe the ability to render different user interface(UI) markup if a condition is true or false
- In react it allows us to render different elements or components based on a condition

## What is Life cycle Diagram/Phases(Hooks)

- The component lifecycle has three distinct lifecycle phases

# Mounting Phase-

- the component is ready to mount in the browser DOM . The phase covers initialization from constructor(),render() and componentDidMount() lifecycle method

# Updating Phase

- The next phase in the lifecycle is when a component is updated.
- A component is updated whenever there is a change in the component's state or props either from setState(), render(), componentDidMount()

# UnMounting Phase

- The next phase is the lifecycle is when a component is removed from the DOM or unmounting
- The phase includes componentWillUnmount() lifecycle method.
  [diagram](https://wavez.github.io/react-hooks-lifecycle)

## What is VDOM and How does it work?

- So DOM stands for Document object model which is a structured representation of all the HTML elements of our web document . Its a tree data structure and all the HTML elements are nodes of this data structure
- we can manipulate the DOM using javascript
- But the thing is everytime there is any update in the DOM the whole UI is rerendered again but including this all the styles, attributes will also rerender again which is a really tedious work when it comes to a case where there are large number of nodes in the DOM
- Virtual DOM is a copy of the real DOM . So the virtual DOM is not reponsible for any change in the UI but the real DOM is
- Every element that exists in the DOM there will be a virtual copy of it in the react's virtual DOM
- So now if there is any change in the UI first the VDOM will be updated and than the Real DOM
- React actually creates a copy of the entire DOM in a virtual DOM tree now when there is a change in the UI a new virtual DOM is ceated
- this new virtual DOM will be compared to the previous VDOM tree and whatever the difference is it makes a note of it.
- Now these changes are reflected is the real DOM by the best ways possibles and rerenders only the updated elements instead of the entire DOM
- This process is known as `Reconciliation`

# React Fiber

- Fiber is a reconsiliation engine or reimplementation of core algorithm in React v16
- The goal is to increase its suitability for areas like animation, layout, gestures ability to pause , abort and assign priority to different types of updates
- The goal is to increase its sustainibility for areas like animation, layout and gestures etc
- its headline feature is `Incremental rendering` the ability to split rendering work into chunks and spread it out over multiple frames

# What are keys in React?
- Keys help React identify which items have changed / added/ removed , 
- Keys whould be given to the elements inside the array to give the elements a stable identity
- You should not use indexes as keys if the order of items changes than it will effect the performance and could lead some unstable component behaiviour 
# What is memoization in React?
- Its an Optimization technique for accelerating computer programs by caching the results of heavy function calls and returning them
# useMemo and React.memo() difference?
- `React.memo()`
- is a higher-order component that we can use to wrap components that we do not want to re-render unless the props within them change 
- `useMemo`
- It is a react Hook that we can use to wrap functions within a component 
- we can use this to ensure that the values within that function are re-computed only when one of its dependencies change 
```
 const [text, setText] = React.useState('')
  const [search, setSearch] = React.useState('')

  const handleText = (event) => {
    setText(event.target.value)
  }

  const handleSearch = () => {
    setSearch(text)
  }

  // useMemo Hooks
  const filteredUsers = React.useMemo(
    () =>
      users.filter((user) => {
        console.log('Filter function is running ...');
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [search]
  );

```
If the search changes than only memo will run 
- React memo accepts a function which returns the values and then that function is only called when the value needs to be retreived
# useEffect
- useEffect hook essentially is to allow sideeffects within the functional component 
- In class components there are lifecycle methods like componentDidMount,componentDidUpdate and componentWillUnmount are all handled by useEffect hook in functional components
- It recieves two parameters 
  - the first parameter is the callback function to be executed 
  - the second parameter takes an array containing any variables that are to be tracked 
# How does Routing work in react?
- Routing helps us adding new screens and flows to our application incredibly quickly
# what are pure components?
- Pure components are the components which do not rerender when the value of the state and props has been updated with the same values.
- Pure components restricts the re-rendering ensuring the higher perforemance of the component
# Difference between React.PureComponent and React.Component?

- Pure component handles the `shouldComponentUpdate()` method 
- The major difference is that PureComponent does a shallow comparision on state change , it means that while comparing objects it compares only references which helps to improve the performance of the app
- A normal component rerenders everytime its parent rerenders , regardless of whether the component props and state have changed or not but in case of purecomponent it wont rerender it its parent rerenders unless the props or the state of the pure component have changed 
```
// Regular class component
class App extends React.Component {
  render() {
    return <h1>Component Example !</h1>
  }
}

// React Pure class component
class Message extends React.PureComponent {
  render() {
    return <h1>PureComponent Example !</h1>
  }
}
``` 
# useCallback
- Hooks can be used to optimize the rendering behaiviour of your react function components.
- useCallback returns a memoized version of the callback that only changes if one of the depedecies has changed