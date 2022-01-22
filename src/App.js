import './App.css';
import React from 'react';
import Progress from './Components/Progress/Progress';
import Form from './Components/Forms/Form';

function App(props) {
  const [page, setPage] = React.useState(1);

  const goToNextPage=()=>{
    setPage(page+1)
  }

  return (
    <div className="App">
      <div className='container'>
        <div className='brand-logo'>
          <img alt="cutshort best place to find the right talent" src='https://cdn.cutshort.io/public/images/og-new-logo.jpg' />
          <span>CutShort</span>
        </div>
        <Progress page={page}/>
        <Form page={page} goToNextPage={goToNextPage}/>
      </div>
    </div>
  );
}

export default App;
