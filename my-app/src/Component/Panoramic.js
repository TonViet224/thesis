import Iframe from 'react-iframe'
const Panoramic = () => {
    return (
        <iframe
            width="100%"
            height="640"
            style={{ width: '100%', height: '900px', border: 'none', maxWidth: '100%' }}
            frameborder="0"
            allowfullscreen
            allow="xr-spatial-tracking; gyroscope; accelerometer"
            scrolling="no"
            src="https://kuula.co/share/collection/7kRmD?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1">

        </iframe>
    )
}
export default Panoramic


