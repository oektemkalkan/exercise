import styled from "styled-components";

export default function BoxWithStyledComponents({ isBlack }) {
  return (
    <>
      <Styledbox isBlack={isBlack}/>
    </>
  );
}

const Styledbox = styled.div`{
    width: 100px;
  height: 100px;
  margin: 2rem;
    background-color: ${({ isBlack }) => (isBlack ? "black" : "yellow")};

  &:hover {
    background-color:  ${({ isBlack }) => (isBlack ? "green" : "blue")};
}
`;
