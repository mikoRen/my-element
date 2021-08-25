import React from 'react';
import Button, {ButtonType, ButtonSize} from './components/Button/button';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button className="custom">Default</Button>
        <Button onClick={(e) => {e.preventDefault(); alert(123) }} btnType={ButtonType.Primary} size={ButtonSize.Large}>Large Primary</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small} >Small Danger</Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com/" target = "_blank" >baidu link</Button>
        <br />
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large} disabled>Large Primary</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small} disabled >Small Danger</Button>
        <Button btnType={ButtonType.Link} href={"https://www.baidu.com/"} disabled  >baidu link</Button>
      </header>
    </div>
  );
}

export default App;
