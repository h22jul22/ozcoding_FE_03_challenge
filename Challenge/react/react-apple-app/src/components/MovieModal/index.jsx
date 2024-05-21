import imageBasePath from '../../constant';
import { ImStarFull } from 'react-icons/im';
import './MovieModal.css';
import { useRef } from 'react';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

const MovieModal = ({
    backdrop_path,
    title,
    overview,
    name,
    release_date,
    first_air_date,
    vote_average,
    setModalOpen,
}) => {
    const ref = useRef(null);

    useOnClickOutside(ref, () => {
        setModalOpen(false);
    });

    return (
        <div className='presentation' role='presentation'>
            <div className='wrapper-modal'>
                <div className='modal' ref={ref}>
                    <span onClick={() => setModalOpen(false)} className='modal-close'>
                        X
                    </span>

                    <img
                        src={`${imageBasePath}${backdrop_path}`}
                        className='modal__poster-img'
                        alt='modal_poster-img'
                    />

                    <div className='modal__content'>
                        <p className='modal__details'>
                            <span> 100% for you </span>
                            {''}
                            {release_date ? release_date : first_air_date}
                        </p>
                        <h2 className='modal__title'>{title ? title : name}</h2>
                        <p className='modal__overview'>
                            <ImStarFull /> {vote_average.toFixed(1)}{' '}
                        </p>
                        <p className='modal__overview'>{overview}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieModal;
