import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './componets/App';

const root = createRoot(document.getElementById('root'));
root.render(<App />);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.querySelector('#root')
// );
