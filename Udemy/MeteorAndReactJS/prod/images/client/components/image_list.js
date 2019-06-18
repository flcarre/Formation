// Create our image list component
// import React
import React  from 'react';
import ImageDetail from './image_detai';
import { func } from 'prop-types';

// Create our components
const ImageList = (props) => {
    const validImages = props.images.filter(image => !image.is_album);
    const RenderedImages = validImages.map(function(image) {
        return <ImageDetail key={image} image={image} />
    });
    return (
        <ul className="media-list list-group">
            {RenderedImages}
        </ul>
    );
}

//export our components
export default ImageList;