import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserStore from './store/UserStore';
import reportWebVitals from './reportWebVitals';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <Context.Provider value={{
        user: new UserStore()
    }}>
        <App/>
    </Context.Provider>
)
    
    


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
