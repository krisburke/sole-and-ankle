import React from 'react';
import styled from 'styled-components/macro';

import SHOES from '../../data';
import ShoeCard from '../ShoeCard';

const ShoeGrid = () => {
  return (
    <GridWrapper>
      {SHOES.map((shoe) => (
        <ShoeWrapper key={shoe.slug}>
          <ShoeCard  {...shoe} />
        </ShoeWrapper>
      ))}
    </GridWrapper>
  );
};

const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 36px;
`;

const ShoeWrapper = styled.div`
  min-width: 275px;
  flex: 1;
`;


export default ShoeGrid;
