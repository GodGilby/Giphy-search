import React from 'react';

const Card = ({data}) => {
    const {downsized} = data.images;
    return (
            <img alt="giph" style={{margin: 10}} src={downsized.url} width="100px" height="100px"></img>
    )
}

export default React.memo(Card);