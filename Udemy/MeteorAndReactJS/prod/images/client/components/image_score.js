import React from 'react'

const ImageScore = (props) => {
    //props.up => upvote
    //props.down => downvote

    const { ups, downs } = props;

    const UpsPercent = `${100 * (ups) / (ups + downs)}%`;
    const DownsPercent = `${100 * (downs) / (downs + ups)}%`;

    return (
        <div>
            Ups/Downs
            <div className="progress">
                <div style={{ width: UpsPercent }} className="progress-bar progress-bar-success progress-bar-striped" />
                <div style={{ width: DownsPercent }} className="progress-bar progress-bar-danger progress-bar-striped" />
            </div>
        </div>
    )
}

export default ImageScore