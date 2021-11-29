import React from "react";
import './search.css';
import {MdArrowBackIos} from 'react-icons/md'
import {Link} from 'react-router-dom'
import NotFound from './notfound'
import Start from './start'
import Movie from "./movie";

class Search extends React.Component{
    state={
        search:'',
        results:[],
    }
    render(){
        const handleSearch =(e)=>{
            const title = e.target.value;
            this.setState({
                search:title
            })
            if(title.length > 3){ 
            fetch(`https://www.omdbapi.com/?s=${title}&apikey=${process.env.REACT_APP_API_KEY}`)
            .then((res)=>res.json())
            .then((data)=>data.Response === 'True'?this.setState({
                results: data.Search,
            }):this.setState({
                results:[]
            }))
        } 
        }
        const {search,results} = this.state
        const detect = results.length === 0 ? <NotFound/> :<div className='content contRes'>
            {results.map((f)=><Movie key={f.imdbID} id={f.imdbID} poster={f.Poster} />)}
            </div>
        const Content = search === '' ? <Start /> : detect;
        return(
            <div>
                <div className='search-bar'>
                    <Link to='/'>
                        <MdArrowBackIos />
                    </Link>
                    <input type='text' placeholder='Type your search here...' onChange={(e)=>{handleSearch(e)}} value={this.state.search} />
                </div>
                {Content}
            </div>
        )
    }
}

export default Search