import './Banner.css';
import axiosIns from '../api/axios';
import requests from '../api/requests';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import imageBasePath from '../constant';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const Banner = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        // 현재 상영중인 영화 정보 가져오기
        const response = await axiosIns.get(requests.fetchNowPlaying);

        const moviesId = response.data.results.map((movie) => movie.id);

        const movieDetail = await Promise.all(
            moviesId.map(async (movieId) => {
                const { data } = await axiosIns.get(`/movie/${movieId}`, {
                    params: { append_to_response: 'videos' },
                });

                console.log(data);
                return data;
            })
        );

        console.log(movieDetail);
        setMovies(movieDetail);
    };

    const truncate = (str, n) => {
        return str?.length > n ? str.substring(0, n) + '...' : str;
    };

    if (movies.length > 0) {
        return (
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}>
                <div className='banner__posters'>
                    {movies.map((movie) => (
                        <SwiperSlide key={movie.id}>
                            <Wrap>
                                <img
                                    src={`${imageBasePath}${movie.backdrop_path}`}
                                    className='banner__poster'
                                    alt={movie.title}
                                />
                                <div className='banner__contents'>
                                    <h1 className='banner__title'>
                                        {movie.title || movie.name || movie.original_name}
                                    </h1>
                                    <div className='banner__buttons'>
                                        {movie.videos?.results[0]?.key ? (
                                            <a
                                                href={`https:www.youtube.com/embed/${movie.videos.results[0].key}?control=0&autoplay=1&mute=1`}
                                                className='banner__button play'>
                                                Play
                                            </a>
                                        ) : null}
                                    </div>
                                    <p className='banner__description'>
                                        {truncate(movie.overview, 100)}
                                    </p>
                                </div>
                                <div className='banner--fadeBottom'></div>
                            </Wrap>
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        );
    } else {
        return <div>loading...</div>;
    }
};

const Wrap = styled.div`
    height: 60%;
    width: 100%;
    padding-top: 56.25%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 1px solid rgba(15, 15, 15, 0.1);
    img {
        inset: 0px;
        display: block;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        width: 100%;
        z-index: 1;
        top: 0;
    }
`;

export default Banner;

// const fetchData = async () => {
//     const response = await axiosIns.get(requests.fetchNowPlaying);

//     const movieId =
//         response.data.results[Math.floor(Math.random() * response.data.results.length)].id;

//     const { data: movieDetail } = await axiosIns.get(`/movie/${movieId}`, {
//         params: { append_to_response: 'videos' },
//     });

//     setMovie(movieDetail);
// };

// if (!isClicked) {
//     return (
//         <div
//             className='banner'
//             style={{
//                 backgroundImage: `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`,
//                 backgroundPosition: 'top center',
//                 backgroundSize: 'cover',
//             }}>
//             <div className='banner__contents'>
//                 <h1 className='banner__title'>
//                     {movie.title || movie.name || movie.original_name}
//                 </h1>
//                 <div className='banner__buttons'>
//                     {movie.videos?.results[0]?.key ? (
//                         <button
//                             className='banner__button play'
//                             onClick={() => setIsClicked(true)}>
//                             Play
//                         </button>
//                     ) : null}
//                 </div>
//                 <p className='banner__description'>{truncate(movie.overview, 100)}</p>
//             </div>
//             <div className='banner--fadeBottom'></div>
//         </div>
//     );
// } else {
//     return (
//         <>
//             <Container>
//                 <HomeContainer>
//                     <Iframe
//                         src={`https:www.youtube.com/embed/${movie.videos.results[0].key}?control=0&autoplay=1&mute=1`}></Iframe>
//                 </HomeContainer>
//             </Container>
//             <button onClick={() => setIsClicked(false)}>X</button>
//         </>
//     );
// }

// const Iframe = styled.iframe`
//     width: 100%;
//     height: 100%;
//     z-index: -1;
//     opacity: 0.65;
//     border: none;
// `;

// const Container = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//     width: 100%;
//     height: 100vh;
// `;

// const HomeContainer = styled.div`
//     width: 100%;
//     height: 100%;
// `;
