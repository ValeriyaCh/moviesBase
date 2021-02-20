import React from 'react';
import { Card, CardImg} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

function RenderCard({item}) {
        return(
            <Card color="danger"> 
            <Link to={`/allmovies/${item.id}`} >
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
    if (props.isLoading) {
        return(          
            <Loading />
        );
    }
    else if (props.errMess) {
        return(          
                <h4>{props.errMess}</h4>
        );
    }
    else
    return(
      <div className="container">
          <div className="row row-content">
                <h2 className="darkRed">Your favourite movies</h2>
                <div className="row align-items-start">
                    {moviesCards}
                </div>
          </div>
      </div>
    );
}

export default Home;   