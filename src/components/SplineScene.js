import styled from "styled-components";

export default function App() {
  return (
    <Wrapper>
      <iframe
        src="https://my.spline.design/3disometricportfolio21pager-e5ece8e643c13d3dfa607785583af871/"
        frameBorder="0"
        width="100%"
        height="100%"
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 720px;
  background-color: #1a1a1a; /* Dark grey background */
  color: #ff0000; /* Red text color */

  @media (max-width: 560px) {
    min-height: 520px;
  }
`;
