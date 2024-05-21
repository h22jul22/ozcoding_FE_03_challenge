import { useLocation, useNavigate } from 'react-router-dom';
import axiosIns from '../../api/axios';
import { useEffect, useState } from 'react';
import './SearchPage.css';
import { useDebounce } from '../../hooks/useDebounce';

const SearchPage = () => {
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();

    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const searchTerm = query.get('q');
    const debouncedSearchTerm = useDebounce(query.get('q'), 500);

    useEffect(() => {
        if (debouncedSearchTerm) {
            fetchSearchMovie(debouncedSearchTerm);
        }
    }, [debouncedSearchTerm]);

    const fetchSearchMovie = async (searchTerm) => {
        try {
            const response = await axiosIns.get(
                `/search/multi?include_adult=false&query=${searchTerm}`
            );
            setSearchResults(response.data.results);
            //console.log(response.data.results);
        } catch (error) {
            console.error(error);
        }
    };

    if (searchResults.length > 0) {
        return (
            <section className='search-container'>
                {searchResults.map((movie) => {
                    if (movie.backdrop_path !== null && movie.media_type !== 'person') {
                        console.log(movie);
                        const movieImageUrl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
                        return (
                            <div key={movie.id} className='movie'>
                                <div
                                    onClick={() => navigate(`/${movie.id}`)}
                                    className='movie__column-poster'>
                                    <img
                                        src={movieImageUrl}
                                        alt='movie'
                                        className='movie__poster'
                                    />
                                    <div className='movie__title'>
                                        {movie.name
                                            ? `${movie.name} (${movie.original_name})`
                                            : `${movie.title} (${movie.original_title})`}
                                    </div>
                                </div>
                            </div>
                        );
                    }
                })}
            </section>
        );
    } else {
        return (
            <section className='no-results'>
                <div className='no-results__text'>
                    <p>찾고자 하는 검색어 {searchTerm} 에 맞는 영화가 없습니다.</p>
                </div>
            </section>
        );
    }
};

export default SearchPage;
