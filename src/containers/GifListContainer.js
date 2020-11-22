import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
    
    state = { 
            gifs: []
         }

    render() { 
        return ( 
            <div>
                <GifSearch fetchGIFs={this.fetchGIFs}/>
                <GifList gifs={this.state.gifs}/>
            </div>
         );
    }

    fetchGIFs = (searchParams = "pupper") => {
        let url = ["https://api.giphy.com/v1/gifs/search?q=", `${searchParams}`, "&api_key=IroRhm8UcKTzIodRyJ8wVOawIJMUHP5K&rating=g&limit=3"].join("")
        fetch(url)
        .then(res => res.json())
        .then( ({data}) => {
          this.setState({ gifs: data.map( gif => gif.images.original.url ) })
        })
    }

    componentDidUpdate(prevProps, prevState){
        if(JSON.stringify(prevState.gifs)==JSON.stringify(this.state.gifs)) {
        this.fetchGIFs()
        }
    }
}
 
export default GifListContainer;