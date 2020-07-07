import React, {Component, useContext} from "react";
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
//                         console.log(theme)
//                         const currentTheme = AppTheme[theme];
//                         return(
//                             <main style = {{
//                                 padding: "1rem",
//                                 backgroundColor: `${currentTheme.backgroundColor}`,
//                                 color: `${currentTheme.textColor}`,
//                             }}>
//                                 <h1>Heading 1</h1>
//                                 <p>This is a paragraph</p>
//                                 <button> This is a button</button>
//                             </main>
//                         )
//
//                     }
//                 }
//             </ThemeContext.Consumer>
//         );
//     }
//
// }

const Main = () => {
    const theme = useContext(ThemeContext)[0];
    console.log(theme)
    const currentTheme = AppTheme[theme];
    return(
        <main style = {{
            padding: "1rem",
            backgroundColor: `${currentTheme.backgroundColor}`,
            color: `${currentTheme.textColor}`,

        }}>
            <h1>Heading 1</h1>
            <p>This is a paragraph</p>
            <button> This is a button</button>
        </main>
    );
}

export default Main;
