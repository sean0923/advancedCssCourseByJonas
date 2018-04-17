import styled from 'styled-components';

const Temp = styled.div`
  background: var(--color-opaque-black);
  border: var(--test-border);
  padding: 1rem;
`;

export const header = styled.div`
  border-bottom: 1px solid var(--color-grey-light-2);
  background-color: var(--color-white);
  padding: 2rem;
`;

export const img = styled.img`height: 3rem;`;

export const flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const logo = Temp.extend``;

export const inputBox = Temp.extend``;

export const rightHeaderBox = styled.div`
  display: flex;
`

export const profileBox = Temp.extend``;

export const svgIconsBox = Temp.extend``;

export const smallBox = styled.div`
  display: inline-block;
  height: 10rem;
  width: 10rem;
  background: red;
`

export const bigBox = styled.div`
  display: inline-block;
  padding: 5rem;
  background: green;
`