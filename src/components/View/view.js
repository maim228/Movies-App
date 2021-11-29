import React from "react";
import {Link} from 'react-router-dom'
import {AiFillFileText} from 'react-icons/ai'
import {RiTeamFill} from 'react-icons/ri'
import {FaAward,FaImdb} from 'react-icons/fa'
import {BiTimeFive,BiWorld} from 'react-icons/bi'
import {MdYoutubeSearchedFor} from 'react-icons/md'
import './view.css'

class View extends React.Component{
    state={
        id:window.location.href.split('/')[window.location.href.split('/').length - 1],
        title:"",
        year:"",
        desc:"",
        writer:"",
        actors:"",
        lang:"",
        awards:"",
        poster:"",
        rate:'',
        votes:'',
        }
        componentDidMount(){
            fetch(`https://www.omdbapi.com/?i=${this.state.id}&apikey=${process.env.REACT_APP_API_KEY}`)
        .then(res=>res.json())
        .then(data=>this.setState({
            title:data.Title,
            year:data.Released,
            desc:data.Plot,
            writer:data.Writer,
            actors:data.Actors,
            lang:data.Language,
            awards:data.Awards,
            poster:data.Poster,
            rate:data.imdbRating,
            votes:data.imdbVotes
        }))
        }
    render(){
        return(<>
            <div className='Title'>
                <h1>{this.state.title}</h1>
            </div>
            <div className='poster'>
                <img src={this.state.poster} alt={this.state.title} />
            </div>

            <div className='container'>
                <div>
                    <h3> <AiFillFileText/> Description</h3>
                    <p>{this.state.desc}</p>
                </div>
                <div>
                    <h3><RiTeamFill/> Cast</h3>
                    <p>Writer: {this.state.writer}</p>
                    <p>Actors: {this.state.actors}</p>
                </div>
                <div>
                    <h3><FaAward/> Awards</h3>
                    <p>{this.state.awards}</p>
                </div>
                <div>
                    <h3><BiTimeFive/> Released</h3>
                    <p>First Release on : {this.state.year}</p>
                </div>
                <div>
                    <h3><FaImdb/> IMDB Rating</h3>
                    <p>{this.state.title} Got {this.state.rate} / 10</p>
                    <p>from {this.state.votes} Vote</p>
                </div>
                <div>
                    <h3><BiWorld/> Languages</h3>
                    <p>{this.state.lang}</p>
                </div>
                </div>
                <div className='retry'>
                    <Link to='/search'>Not what you are looking for?<br/> <MdYoutubeSearchedFor /> Search again</Link>
                </div>

        </>)
    }
}


export default View