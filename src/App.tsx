import React, { useState } from 'react';
import Button, {ButtonType, ButtonSize} from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Transition from './components/Transition/transition'
library.add(fas)

function App() {
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Menu onSelect={(index) => alert(index)} mode={'horizontal'} defaultOpenSubMenus={['3']} >
          <MenuItem>item111</MenuItem>
          <MenuItem>item222</MenuItem>
          <MenuItem>item333</MenuItem>
          <SubMenu title = "dropDown">
            <MenuItem> dropDown 111</MenuItem>
            <MenuItem> dropDown 222</MenuItem>
            <MenuItem> dropDown 333</MenuItem>
          </SubMenu>
        </Menu>
        <Button onClick={() => setShow(!show)}>触发 Button Transition</Button>
        <Transition in={show} animation={"zoom-in-left"} timeout={300} wrapper={true} >
          <Button>显示我</Button>
        </Transition>
        {/* <Button className="custom">Default</Button>
        <Button onClick={(e) => {e.preventDefault(); alert(123) }} btnType={ButtonType.Primary} size={ButtonSize.Large}>Large Primary</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small} >Small Danger</Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com/" target = "_blank" >baidu link</Button>
        <br />
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large} disabled>Large Primary</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small} disabled >Small Danger</Button>
        <Button btnType={ButtonType.Link} href={"https://www.baidu.com/"} disabled  >baidu link</Button> */}
      </header>
    </div>
  );
}

export default App;
