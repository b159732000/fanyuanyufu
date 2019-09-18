import React, { useState, useEffect } from 'react';
import './App.scss';
import { Route, NavLink, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import WelcomePage from './components/WelcomePage/WelcomePage.jsx';
import ContactBar from './components/ContactBar/ContactBar.jsx';
import NavigationBar from './components/NavigationBar/NavigationBar.jsx';
import ProjectIntroduction from './components/ProjectIntroduction/ProjectIntroduction.jsx';
import LocationDisplay from './components/LocationDisplay/LocationDisplay.jsx';
import FloorView from './components/FloorView/FloorView.jsx';
import Location from './components/Location/Location.jsx';
import HouseStyle from './components/HouseStyle/HouseStyle.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { addTodoListAction } from './actions/mainAction.js';

const App = () => {
  // // 初學hook+redux
  // // 定義本頁state
  // const [listName, setListName] = useState('');
  // // 使用useSelector取出Store保管的state
  // const todoList = useSelector(state => state.mainReducers.todoList);
  // // 用useDispatch產生dispatch方法，用以更新
  // const dispatch = useDispatch();
  // // 定義一個函數，將本頁state的listName更新到store
  // const addTodoList = () => { dispatch(addTodoListAction(listName)); }

  // componentDidMount
  useEffect(() => {
  }, [])

  return (
    <div className="App">
      {/* 初學hook+redux */}
      {/* 輸入時自動將值存入state中 */}
      {/* <input value={listName} onChange={(e) => { setListName(e.target.value); }} /> */}
      {/* 點按鈕時，將state中的值存入store中 */}
      {/* <button onClick={addTodoList}>
        增加代辦事項
      </button> */}
      {/* <ul>
        {todoList.map(todo => <li key={todo}>{todo}</li>)}
      </ul> */}

      {/* 初學頁面跳轉動畫 */}
      {/* <div className="nav">
        <NavLink exact to="/ProjectIntroduction" activeClassName="active">ProjectIntroduction</NavLink>
        <NavLink exact to="/WelcomePage" activeClassName="active">WelcomePage</NavLink>
      </div> */}

      {/* 每一頁的背景 */}
      <div className="appBg">
        <img src={require('./images/WelcomePage/WelcomeBg.png')} alt=""/>
      </div>

      {(window.loadingPageIsOn)?(<WelcomePage></WelcomePage>):(null)}

      <ContactBar></ContactBar>
      <NavigationBar></NavigationBar>

      <Route render={(location) => (
        <TransitionGroup>
          <CSSTransition appear={true} key={location.key} timeout={{enter: 1000, exit: 1000}} classNames="cssTransition">
            <Switch>
              <Route exact path='/' component={ProjectIntroduction} />
              <Route path='/ProjectIntroduction' component={ProjectIntroduction} />
              <Route path='/FloorView' component={FloorView} />
              <Route path='/Location' component={Location} />
              <Route path='/HouseStyle' component={HouseStyle} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}/>

    </div>
  );
}

export default App;
