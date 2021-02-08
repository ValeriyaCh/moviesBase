import React from 'react';
import { Card, CardImg, Button, Input} from 'reactstrap';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';



function RenderCard({item}) {
    const labelItem = (item.like) ? "Added to favourite" : "Add to favourite";
    
    return(
        <div className="row row-content">
            <div className="col-12 col-md-3 m-1">
                <Card color='danger' key={item.id}> 
                    <CardImg width="100%" src={item.image} alt={item.name} />
                </Card>
            </div>
            <div className="col-12 col-md m-1">
                <h2>{item.name}</h2>
                <p>{item.year} year, {item.country}</p>
                <p>{item.description}</p>
                <p><FormControlLabel control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />}  checked={item.like} name={item.like} />}
                label={labelItem} /> </p>
                 <p><Button> Watch again </Button></p>
            </div>
        </div>
    );
}

function MovieDetail(props){
 return(
    <div className="container">
        <RenderCard item={props.movie} />
    </div>
 );
}
export default MovieDetail;