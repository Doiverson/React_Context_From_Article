import React, { Component, useContext, useReducer } from "react";
import ThemeContext from "./Context/ThemeContext";
import AppTheme from "./Colors"

// class Main extends Component{
//     constructor(){
//         super();
//     }
//     static contextType = ThemeContext;
//     render(){
//         const currentTheme = AppTheme[this.context[0]];
//         return(
//             <main style={{
//                 padding: "1rem",
//                 backgroundColor: `${currentTheme.backgroundColor}`,
//                 color: `${currentTheme.textColor}`,
//
//             }}>
//                 <h1>Heading 1</h1>
//                 <p>This is a paragraph</p>
//                 <button> This is a button</button>
//             </main>
//
//         );
//     }
//
// }

// class Main extends Component {
//     constructor() {
//         super();
//         this.state = {
//         }
//     }
//     render(){
//         return(
//             <ThemeContext.Consumer>
//                 {
//                     ([theme]) => {
//                         const currentTheme = AppTheme[theme];
//                         return(
//                             <main style = {{
//                                 padding: "1rem",
//                                 backgroundColor: `${currentTheme.backgroundColor}`,
//                                 color: `${currentTheme.textColor}`,
//                             }}>
//                                 <h1>Heading 1</h1>
//                                 <p>This is a paragraph</p>
//                             </main>
//                         )
//                     }
//                 }
//             </ThemeContext.Consumer>
//         );
//     }
//
// }

const reducer = ( state, action ) => {
    if (action === 'INCREMENT') return {count: state.count + 1};
    else return {count: state.count - 1};
}

const Main = () => {
    const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];

    const initialState = {
        count: 0
    }
    const [ state, dispatch ] = useReducer(reducer, initialState)

    return(
        <main style = {{
            padding: "1rem",
            backgroundColor: `${currentTheme.backgroundColor}`,
            color: `${currentTheme.textColor}`,

        }}>
            <h1>Heading 1</h1>
            <p>This is a paragraph</p>
            <button onClick={() => dispatch('INCREMENT')}>+</button>
            <button>{state.count}</button>
            <button onClick={() => dispatch('DECREMENT')}>-</button>
           </main>
    );
}

export default Main;
