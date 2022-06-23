import { Home } from "@material-ui/icons";
import "./App.css";

import { SignInOutContainer } from "./containers";
import { isAuthenticated } from "./util/auth";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <SignInOutContainer />
    </div>
  );
}

/**
 * const PrivateRoute = ({ component: Component, ...rest }) => {
  useEffect(() => {
    // Implementar aqui o Remember me login
  }, []);

  const alreadyLoaded = sessionStorage.getItem('alreadyLoaded');
  useEffect(() => {
    const alreadyLoaded = sessionStorage.getItem('alreadyLoaded');
    if (!alreadyLoaded) {
      const getUserInfo = async () => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        let config;
        if (userInfo)
          config = {
            headers: { Authorization: `Bearer ${userInfo?.token}` },
          };
        const address = process.env.REACT_APP_SERVER_ADDRESS;
        const { data } = await axios.get(
          `${address}/api/users/profile`,
          config
        );

        Object.assign(userInfo, data);
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
      };
      getUserInfo();

      sessionStorage.setItem('alreadyLoaded', true);
    }
  }, []);

  return (
    <Route
      key={Date.now()}
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          isFirtAccess() ? (
            <Redirect
              to={{
                pathname: '/auth/first-access',
                // state: { from: props.location },
              }}
            />
          ) : hasRestoredLogin() ? (
            <Redirect
              to={{
                pathname: '/auth/restore-access',
                // state: { from: props.location },
              }}
            />
          ) : (
            <Component {...props} />
          )
        ) : (
          <Redirect
            to={{ pathname: '/auth/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
};

ReactDOM.render(
  <GlobalProvider>
    <BrowserRouter>
      <Switch>
        <PrivateRoute
          path='/admin'
          component={(props) => <AdminLayout {...props} />}
        />
        <Route path='/auth' render={(props) => <AuthLayout {...props} />} />
        <Route
          path='/verify/users/:token'
          render={(props) => <VerifyLayout {...props} />}
        />
        <Route path='/rtl' render={(props) => <RTLLayout {...props} />} />
        <Redirect from='/' to='/admin/dashboard' />
      </Switch>
    </BrowserRouter>
  </GlobalProvider>,
  document.getElementById('root')
);
 */

export default App;
