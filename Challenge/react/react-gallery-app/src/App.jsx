import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import { useEffect, useState } from 'react';
import axiosIns from './api/axios';
import Footer from './components/Footer';

function App() {
    const [photos, setPhotos] = useState([]);
    const [search, setSearch] = useState([]);

    const fetchData = async () => {
        const response = await axiosIns.get(`/photos/random?count=30`);
        setPhotos((prevPhotos) => {
            const newPhotos = response.data.filter((newPhoto) => {
                return !prevPhotos.some((prePhoto) => prePhoto.id === newPhoto.id);
            });
            return [...prevPhotos, ...newPhotos];
        });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <Nav fetchData={fetchData} search={search} setSearch={setSearch} />
            <Main photos={photos} search={search} />
            <Footer onClick={fetchData} />
        </>
    );
}

export default App;
