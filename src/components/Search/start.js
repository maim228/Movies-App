import './search.css';
import StartIMG from '../images/19198445-ai.svg'

function Start(){
    return(
        <div className='content contsearch'>
                    <img src={StartIMG} alt='search' />
                    <h1>Start search by type movie title in search bar</h1>
                </div>
    )
}

export default Start