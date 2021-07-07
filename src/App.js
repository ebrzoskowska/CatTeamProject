import { Route, Switch } from 'react-router-dom';
import AllProductsPage from './pages/AllProducts';
import CartPage from './pages/Cart';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact={true}>
          <AllProductsPage />
        </Route>
        <Route path='/cart'>
            <CartPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
