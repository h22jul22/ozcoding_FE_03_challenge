import './Main.css';

const Main = ({ photos, search }) => {
    console.log(photos);
    const photoList = photos.filter((photo) => {
        if (photo.alt_description === null || undefined) {
            return false;
        } else {
            return photo.alt_description.includes(search);
        }
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
