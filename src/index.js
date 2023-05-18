// my work

// import koalas from './public/koalas.js'

// let koalaContainer = (
// <div className="ui items">
//     {koalas.map ( koala => (
//         <div className="item" style= {{ cursor: 'pointer' }}>
//             <div className="image" >
//                 < img src={koala.imageURL} />
//             </div>
//             <div className="content">
//                 <div className="header">
//                     {koala.name}
//                 </div>
//                 <div className="description">
//                     <p>{koala.description}</p>
//                 </div>
//             </div>
//     ))};
    
// </div>
// );

// document.body.append(koalaContainer);

// chat gpt response , did i have to install react ? what is the difference between these codes ?

import React from 'react';
import ReactDOM from 'react-dom';

let koalaContainer = (
  <div className="ui items">
    {koalas.map(koala => (
      <div className="item" style={{ cursor: 'pointer' }}>
        <div className="image">
          <img src={koala.imageURL} alt="Koala" />
        </div>
        <div className="content">
          <div className="header">
            {koala.name}
          </div>
          <div className="description">
            <p>{koala.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

ReactDOM.render(koalaContainer, document.getElementById('root'));




// Koala Card
// koalas are in './public/koalas.js'
// koalas.forEach(koala => {
//     let koalaCard = document.createElement('div')
//     koalaCard.setAttribute('class', 'item')
//     koalaCard.style.cursor = 'pointer';

    // Koala Card Image
    // let imageContainer = document.createElement('div')
    // let koalaImage = document.createElement('img')

    // imageContainer.setAttribute('class', 'image')

    // koalaImage.setAttribute('src', koala.imageURL)

    // imageContainer.append(koalaImage)

    // Koala Card Content
    // let koalaContent = document.createElement('div')
    // koalaContent.setAttribute('class', 'content')

    // let header = document.createElement('div')
    // header.setAttribute('class', 'header')
//     // header.append(koala.name)

//     let descriptionParagraph = document.createElement('p')
//     descriptionParagraph.append(koala.description)

//     let descriptionContainer = document.createElement('div')
//     descriptionContainer.setAttribute('class', 'description')
//     descriptionContainer.append(descriptionParagraph)

//     koalaContent.append(
//         header,
//         descriptionContainer
//     )

//     koalaCard.append(
//         imageContainer,
//         koalaContent
//     )

//     koalaContainer.append(koalaCard)
// })

document.body.append(koalaContainer)