import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Gallery extends Component {

  render() {
    let image = "https://openclipart.org/download/4051/mgsloan-Open-Book-from-above.svg"
    return (
      <div>
         {
           this.props.items.map((item, index) => {
             let {title, imageLinks, infoLink, description} = item.volumeInfo
             return (
            <div className = "container">
               <div className = "row">
                   <div key = {index} className = "col-md-3">
                     <img
                       src = {imageLinks !== undefined ? imageLinks.thumbnail : image}
                       className = "img-thumbnail"
                     />
                      <h4 className="bold">{title}</h4>
                        {description}
                    </div>
              </div>
            </div>
             )
           })
         }
      </div>
    )

  }
}
