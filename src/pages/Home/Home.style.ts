import styled from "@emotion/styled";

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  h1 {
    width: 100%;
    font-size: 2rem;
    font-weight: 300;
    text-align: center;
    padding: 1rem;
  }

  .gallery {
    display: flex;
    justify-content: center;
    width: 100%;
    overflow-y: hidden;

    img {
      width: 50%;
      height: auto;
    }
  }
`;

export default StyledHome;
