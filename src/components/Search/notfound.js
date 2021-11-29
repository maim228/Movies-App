import './search.css';
import NotFoundIMG from '../images/404.svg'

function NotFound(){
    return(
        <div className='content cont404'>
            <img src={NotFoundIMG} alt='not found' />
            <h1>Try to check your input</h1>
        </div>
    )
}

export default NotFound