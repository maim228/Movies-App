import React from "react";
import { Link } from 'react-router-dom'
import Searchimg from '../images/Searchimg.svg'
import './home.css'
import {Button} from 'react-bootstrap'
import { ImSearch } from 'react-icons/im';


class Home extends React.Component{
    render(){
        return(
            <div className='cont'>
                <img src={Searchimg} alt='search' />
                <div className='contText'>
                    <h1>Welcome to My React App</h1>
                    <h2>Here you can search about any movie,series,episode and show all information about it</h2>
                    <Link to='search'>
                        <Button variant="primary"><ImSearch /> Search ...</Button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Home