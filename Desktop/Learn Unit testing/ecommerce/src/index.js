import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Wrapper from "./Component/Wrapper/Wrapper";
import Counter from './Component/Counter/Counter';
import AddIcon from '@mui/icons-material/Add';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Counter initialCount={1}/>
);

