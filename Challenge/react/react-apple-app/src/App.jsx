import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import LoginPage from './pages/LoginPage/index';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import SearchPage from './pages/SearchPage/index';

const Layout = () => {
    return (
        <>
            <Nav />
            <Outlet />
            {/*
            자식 경로 요소를 렌더링하려면 부모 경로 요소에서 <Outlet>을 사용해야 한다.
            이렇게 해야지 하위 경로가 랜더링될 때 중첩된 UI가 표시될 수 있다.
            */}
        </>
    );
};

function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<LoginPage />} />
                <Route path='main' element={<MainPage />} />
                <Route path=':movieId' element={<DetailPage />} />
                <Route path='search' element={<SearchPage />} />
            </Route>
        </Routes>
    );
}

export default App;
