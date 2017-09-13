import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Gallery from './Gallery';

class Global extends Component {
    constructor(pros) {
        super(pros);
        this.state = {
            query: "",
            items : []
        };
    }

    search() {
        const base_url = 'https://www.googleapis.com/books/v1/volumes?q=';
        fetch(`${base_url}${this.state.query}`, { method : 'GET'})
        .then(response => response.json)
        .then(json => {
        let {items} = json;
        this.setState({items});
        });
    }
    
  render(){
    return(
      <div className = "Global">
        <h3> Book Explorer</h3>
        <FormGroup>
        <InputGroup>
         <FormControl type= "text" placeholder = "Search for books" 
         onChange = {event=> this.setState({query: event.target.value})}
         onKeyPress= {event =>{
             if (event.key ==='Enter'){
                 this.search();
             }
          }
         }
         />
           <InputGroup.Addon onClick= {()=> this.search()}>
              <Glyphicon glyph="search" />
           </InputGroup.Addon>  
         </InputGroup>
       </FormGroup>
       <Gallery items= {this.setState.items} />
     </div> 
    )
  }
}

export default Global


