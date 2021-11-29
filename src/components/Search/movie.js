import {Link} from 'react-router-dom'
function Movie(props){
    return(
        <div className='movieContainer'>
            <Link to={`view/${props.id}`}>
                <img src={props.poster}  alt={props.name} />
            </Link>
            <br />
        </div>
    )
}

export default Movie