import React from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderCard({item, onClickFunc}) {
    return(
        <Card color="danger" onClick={() => onClickFunc(item.id)}> 
        <Link to={`/home/${item.id}`} >
            <CardImg src={item.image} className="cardItem" alt={item.name} />
        </Link>
        </Card>
    );
}


function Home(props) {
    const moviesCards = props.movies.map(movie => (        
        <div className="col-12 col-md-3 m-1"  key={movie.id}>
            <RenderCard item={movie} onClickFunc={props.onClick}/>
        </div>
    ));
    return(
      <div className="container">
          <div className="row row-content">
                <h2 className="darkRed">Top 3 movies</h2>
                <div className="row align-items-start">
                    {moviesCards}
                </div>
          </div>
      </div>
    );
}

export default Home;   