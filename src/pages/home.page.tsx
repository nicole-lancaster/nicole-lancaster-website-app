// pascal case for new pages / components in React (convention)
//any function in React - put export at the start
export const HomePage = () => {
  //if using HTML with TS, need to put in ( ) after the return keyword
  return (<div>
        <h1>Welcome to my Home Page!</h1>
        <h2>This page was made by Nicole Lancaster using the following technologies:</h2>
        <p>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript/TypeScript</li>
                <li>React Hooks (functional paradigm)</li>
            </ul>
        </p>
    </div>) 
}
