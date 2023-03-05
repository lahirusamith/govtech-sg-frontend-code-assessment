import './App.css';
import { Layout, Space } from 'antd';
import HomePage from './Home/HomePage';
import Todo from './Todo/Todo';
import MenuWrapper from './Navigation/MenuWrapper';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const { Header, Content, Footer} = Layout;

function App() {

  return (
    <>
    <Router>
      <Layout className="app">
        <Header className='site-header'>
          <Link to="/">
            <div className="logo" />
          </Link>
          <MenuWrapper />
        </Header>
        <Content className='site-content'>
          <Routes>
                 <Route exact path='/' element={< HomePage />}></Route>
                 <Route exact path='/features/todo' element={< Todo className='page-margin'/>}></Route>
          </Routes>
        </Content>
        <Footer className='site-footer'></Footer>
      </Layout>
      </Router>
    </>
  );
}

export default App;
