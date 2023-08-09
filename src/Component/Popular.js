import axios from 'axios'
import React, {useState,useEffect} from 'react'

function Popular(){
    const [datas, setDatas] = useState([])
    const [query, setQuery] = useState('')
  
  
    function getListAnime(){
        let url = "https://api.jikan.moe/v4/top/anime?filterby=popularity"
        if(query!=''){
          url = "https://api.jikan.moe/v4/anime?q=" + query
        }
        console.log(url)
        axios({
          method: "GET",
          url: url
        })
        .then(result=>{
          console.log(result.data.data)
          setDatas(result.data.data)
         
        })
        .catch(err=>{
          console.log(err)
        })
    }
  
    function QueryHandler(){
      console.log(query);
  
      getListAnime();
    }
  
    useEffect(()=>{
      getListAnime()
    }, [])

    return (
        <div class="popular">
              <div className="header bg-primary text-white">
                 <h1>Anime Populer</h1>
              </div>
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Cari Anime" onChange={(e) =>setQuery(e.target.value)}/>
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="button" onClick={(e)=>QueryHandler(e)}>Search</button>
                </div>
              </div>
          <div className="row">
    
          {
            datas.map( data=>{
            console.log(data.title)
            console.log(data.images.jpg.large_image_url)
            return(
              <div class='col'>
                <h4>{data.title}</h4>
                <a href={`/detailAnime/${data.mal_id}`}> <img src={data.images.jpg.large_image_url} width="300" height="400"/> </a>
              </div>
            )
           })
           
          }
          </div>
          </div>
      );
}

export default Popular