import { useParams } from 'react-router-dom';
import axiosIns from '../../api/axios';
import { useEffect, useState } from 'react';
import imageBasePath from '../../constant';
import './DetailPage.css';
import { TiStarFullOutline } from 'react-icons/ti';

const DetailPage = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const response = await axiosIns.get(`/movie/${movieId}`);
            setMovie(response.data);
            console.log(response.data);
        }
        fetchData();
    }, [movieId]);

    const truncate = (str, n) => {
        return str?.length > n ? str.substring(0, n) + '...' : str;
    };

    if (!movie) return null;

    return (
        <section className='detail-container'>
            {movie.backdrop_path && (
                <img
                    src={`${imageBasePath}${movie.backdrop_path}`}
                    alt='detail'
                    className='detail__image'
                />
            )}
            <div className='detail__text'>
                <div className='detail__text-title'>
                    {movie.name
                        ? `${movie.name} (${movie.original_name})`
                        : `${movie.title} (${movie.original_title})`}
                </div>
                <div className='detail__text-average'>
                    <TiStarFullOutline />
                    {movie.vote_average.toFixed(1)}
                </div>
                <div className='detail__text-overview'>{truncate(movie.overview, 200)}</div>
            </div>
        </section>
    );
};
export default DetailPage;
