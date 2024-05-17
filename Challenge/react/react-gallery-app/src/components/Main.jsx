import './Main.css';

const Main = ({ photos, search }) => {
    const photoList = photos.filter((photo) => {
        return photo.alt_description && photo.alt_description.includes(search);
    });

    return (
        <div className='column-wrapper'>
            <div className='column'>
                {photoList.map((photo) => {
                    return <img src={photo.urls.small} key={photo.id} className='img' />;
                })}
            </div>
        </div>
    );
};

export default Main;
