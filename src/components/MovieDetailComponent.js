import React from 'react';
import { Card, CardImg, Button, Input} from 'reactstrap';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';



function RenderCard({item, changeLike}) {
    const labelItem = (item.like) ? "Added to favourite" : "Add to favourite";
    
    return(
        <div className="row row-content">
            <div className="col-12 col-md-3 m-1">
                <Card color='danger' key={item.id}> 
                    <CardImg width="100%" src={baseUrl + item.image} alt={item.name} />
                </Card>
            </div>
            <div className="col-12 col-md m-1">
                <h2>{item.name}</h2>
                <p>{item.year} year, {item.country}</p>
                <p>{item.description}</p>
                <p><FormControlLabel control={<Checkbox onClick={() => changeLike(item.id, item.like)} 
                                     icon={<FavoriteBorder /> } checkedIcon={<Favorite />}  checked={item.like} />}
                label={labelItem} /> </p>
                 <p><Button> Watch again </Button></p>
            </div>
        </div>
    );
}

function MovieDetail(props){
    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.movie!=null)
        return(
            <div className="container">
                <RenderCard item={props.movie} changeLike={props.changeLike} />
            </div>
        );
    else 
        return(
            <div></div>
        );

}
export default MovieDetail;