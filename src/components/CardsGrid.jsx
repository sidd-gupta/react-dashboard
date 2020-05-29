import React from 'react';
import '../css/cardsGrid.css';

function CardsGrid(props) {
  return (
    <section className="cardsGrid">
      {props.children}
    </section>
  )
}

export default CardsGrid;