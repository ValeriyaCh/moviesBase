import React, {Component} from 'react';
import { Card, CardImg} from 'reactstrap';
import { Link } from 'react-router-dom';
import SearchInput, {createFilter} from 'react-search-input';
import SelectSearch from 'react-select-search';


const options = [
    {name: '2019', value: '2019'},
    {name: '2007', value: '2007'}
]

function RenderCard({item}) {
    return(
        <Card className="mb-5" color="danger"> 
            <Link to={`/allmovies/${item.id}`} >
                <CardImg src={item.image} className="cardItem" alt={item.name} />
            </Link>
        </Card>
    );
}
   
class AllMovies extends Component {

    constructor(props) {
        super(props);

        this.state = {
            search: null
        };
      }
    render(){
        const allMovies = this.props.movies.map((movie) => {
            return (
                <div className="col-12 col-md-3"  key={movie.id}>
                    <RenderCard item={movie} onClickFunc={this.props.onClick}/>
                </div>
            );
        });
        return(
            <div className="container">
            <div className="row row-content">
                <div className=" col-6 col-md-6">
                    <h2 className="darkRed">All your movies</h2>
                </div>

                
                <div className="row justify-content-start">
                    {allMovies}
                </div>
            </div>
        </div>     
        );
    }
}

export default AllMovies;