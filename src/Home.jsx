import styled from "styled-components";

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  color: var(--color-red);
  padding: 10rem 4.5rem 0rem;
  animation: transitionIn 0.4s ease-in;
`;
const Title = styled.h1`
  font-size: 10rem;
  font-weight: 900;
  -webkit-text-stroke: 0.8px var(--color-light);
  line-height: 8.4rem;
  text-shadow: red 1px 1px 500px;
`;
const P = styled.p`
  font-size: 2.5rem;
  font-weight: 500;
  letter-spacing: 6px;
  padding-left: 1rem;
  -webkit-text-stroke: 0.3px var(--color-light);
  text-shadow: red 1px 1px 500px;
`;

function Home() {
  return (
    <StyledHome>
      <Title>
        Small <br /> Projects
        <P>Mini applications</P>
      </Title>
    </StyledHome>
  );
}

export default Home;
