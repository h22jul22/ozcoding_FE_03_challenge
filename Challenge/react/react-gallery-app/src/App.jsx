import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import { useCallback, useEffect, useState } from 'react';
import axiosIns from './api/axios';
import Footer from './components/Footer';
import requests from './api/requests';

function App() {
    const [photos, setPhotos] = useState([]);
    const [search, setSearch] = useState([]);

    const fetchData = useCallback(async () => {
        const response = await axiosIns.get(requests.randomImages);
        setPhotos(response.data);
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <>
            <Nav fetchData={fetchData} search={search} setSearch={setSearch} />
            <Main photos={photos} search={search} />
            <Footer setPhotos={setPhotos} />
        </>
    );
}

export default App;
