import styled from "@emotion/styled";

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;

  main {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    position: relative;
    background: $color__mono2;
    width: 100%;
    overflow: hidden;
  }
`;

export default StyledPage;
