import axios from 'axios'
import React, {useState,useEffect} from 'react'
import { useParams } from "react-router-dom";

function DetailAnime(){
    const [detailAnime, setDetailAnime] = useState({})
    const [showMore, setShowMore] = React.useState(false)
    const {id} = useParams();
    const url = 'https://api.jikan.moe/v4/anime'
    //console.log(id)
    const {title, synopsis,aired, rating,rank,score,scored_by,popularity,status,source,season,duration,images} = detailAnime
    //const image = detailAnime.images.jpg.large_image_url
    function getDetailAnime(id){
        axios({
            method: "GET",
            url: `${url}/${id}`
        })
        .then(result=>{
            setDetailAnime(result.data.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        getDetailAnime(id)
    }, [])
    return(
    <div class=''>
    <div className="header bg-primary text-white">
        <h1>Detail Anime</h1>
    </div>

            <div class='details'>
                <div class='row title-anime'><h4>{title}</h4></div>
                <div class='row'>
                <div class='col image'>
                    <img src={images?.jpg.large_image_url} alt="" widht="300" height="400"/>
                </div>
                <div class='col detail-anime'>
                    <p> <b> Aired : </b>{aired?.string}</p>
                    <p> <b>Rating : </b>{rating}</p>
                    <p> <b>Rank : </b> {rank}</p>
                    <p> <b>Score :</b> {score}</p>
                    <p> <b>scoredBy: </b>{scored_by}</p>
                    <p> <b>popularity : </b>{popularity}</p>
                    <p> <b>status : </b>{status}</p>
                    <p> <b>source </b>{source}</p>
                    <p> <b>season : </b>{season}</p>
                    <p> <b>duration : </b>{duration}</p>
                </div>
                <div class='row'>
                    <h5>Synopsis :</h5>
                    {showMore ? synopsis : synopsis?.substring(0, 450) + '...'}
                    <button class='showMore' onClick={() => {
                        setShowMore(!showMore)
                    }}>{showMore ? 'Show Less': 'Read More'}</button>
                </div>
                </div>
            </div>
        
    </div>
    )
}


export default DetailAnime