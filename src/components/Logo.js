import React from "react";
import styled from "styled-components";

import * as TextStyles from "../TextStyles";

function Logo() {
  return (
    <Wrapper>
      <Container>
        <Title>
          Calvin <span>Richard</span>
        </Title>
      </Container>
    </Wrapper>
  );
}

export default Logo;

const Wrapper = styled.div`
  width: fit-content;

  padding: 5px 5px 5px 0px;
  border-radius: 0px 40px 40px 0px;
`;

const Container = styled.div`
  border: 0.5px solid;
  border-image-source: linear-gradient(
    143.97deg,
    rgba(0, 0, 0, 0.3) 20.26%,
    rgba(0, 0, 0, 0.4) 85.18%
  );
`;

const Title = styled(TextStyles.H2)`
  color: #ffffff;
  padding: 12px 20px 12px 55px;

  span {
    color: #ffd3d1;
  }
`;
