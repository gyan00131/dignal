import React, { useEffect } from 'react'

function ImageCard(props) {
    console.log(props);

    useEffect(() => {
        displayImages();

    },[]);

    async function displayImages(){
        const url = "https://test.create.diagnal.com/images/" + props.ImageCard;
        const response = await fetch(url);
        const images = await response.json();
    }

    return (
        <div>ImageCard</div>
    )
}

export default ImageCard