import { FunctionComponent } from 'react';
// Font imports
import '@fontsource/source-sans-pro';
import '@fontsource/source-sans-pro/600.css';
import '@fontsource/source-sans-pro/700.css';

import ContentWidthContainer from './components/layout/ContentWidthContainer';
import SectionContainer from './components/layout/SectionContainer';
import TransactionList from './components/TransactionList';

import './App.css';
import Toolbar from './components/Toolbar';

/*
  To reference icons:
  
  import checkIcon from "./assets/check-circle-fill.svg";
  import receiptIcon from "./assets/receipt.svg";
  import plusIcon from "./assets/plus.svg";
  import minusIcon from "./assets/minus.svg";

  <img src={receiptIcon} />
*/

const App: FunctionComponent = () => {
  return (
    <ContentWidthContainer>
      <main className="content">
        <SectionContainer>
          <h1>Thriday Code Challenge</h1>
        </SectionContainer>
        <SectionContainer>
          <Toolbar />
        </SectionContainer>
        <SectionContainer>
          <TransactionList />
        </SectionContainer>
      </main>
    </ContentWidthContainer>
  );
};

export default App;
