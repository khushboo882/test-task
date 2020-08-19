import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import rootReducer from './Reducers';
import Articles from "./Component/articles";
import Friends from "./Component/friends"

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <React.Fragment>
            <Switch>
              <Route exact path={'/'} render={() => {
                return <Redirect to={'/home'}/>
              }}/>
              <Route exact path={'/home'} component={Articles}/>
              <Route exact path={'/friends'} component={Friends}/>
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
