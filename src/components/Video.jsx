import ReactPlayer from 'react-player/youtube';

const Video = () => {

    return(
        <section className='video-wrapper'>
            <div>
            <ReactPlayer 
            url='https://www.youtube.com/watch?v=AblOTiXH0Ps&t=4s'
            width="100%"
             />
            </div>
        </section>
    )
};

export default Video;