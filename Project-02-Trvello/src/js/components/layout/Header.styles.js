import styled from 'styled-components';

const Temp = styled.div`
  background: var(--color-opaque-black);
  border: var(--test-border);
  padding: .5rem 2rem;
`;

export const img = styled.img`
  height: 3rem;
`;

export const flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const logo = Temp.extend``;

export const inputBox = Temp.extend``;

export const iconBox = Temp.extend``;
