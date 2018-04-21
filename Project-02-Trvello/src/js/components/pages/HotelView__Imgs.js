import React, { Component } from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Imgs  ----------------------------------------------
// -----------------------------------------------------------------------------------------
import imgHotel1 from '../../../../assets/hotel-1.jpg';
import imgHotel2 from '../../../../assets/hotel-2.jpg';
import imgHotel3 from '../../../../assets/hotel-3.jpg';

const imgSources = [imgHotel1, imgHotel2, imgHotel3];

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------

const ImgWrapper = styled.div`display: flex;`;

const Img = styled.img`
  width: 100%;
  display: block; /* display: inline leave small space under */
`;

export default class HotelView__Imgs extends Component {
  // ---------------------------------------------------------------------------------------
  // ------------------------------------ Render -------------------------------------------
  // ---------------------------------------------------------------------------------------
  render() {
    return (
      <ImgWrapper>
        {imgSources.map((src, idx) => {
          return (
            <div key={idx}>
              <Img src={src} alt={`img-${idx}`} />
            </div>
          );
        })}
      </ImgWrapper>
    );
  }
}
