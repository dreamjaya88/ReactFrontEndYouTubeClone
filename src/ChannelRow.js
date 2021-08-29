import { Avatar } from '@material-ui/core';
import VerifiedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import React from 'react';
import './ChannelRow.css';

function ChannelRow({ image, channel, verified, subs, noOfVideos, description }) {
    return (
        <div className="channelRow">
            <Avatar className="ChannelRow__logo" alt="channel" src={image} />
            <div className="channelRow__text">
                <h4>
                    {channel} {verified && <VerifiedIcon />}
                </h4>
                <p>
                    {subs} Subscribers . {noOfVideos} videos
                </p>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ChannelRow
