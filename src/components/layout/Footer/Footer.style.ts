import styled from "@emotion/styled";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.grey[800]};
  height: 60px;
  padding: 10px 26px;

  .navigation {
    font-size: 14px;

    ul {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 40px;
    }

    .link {
      position: relative;
      color: ${({ theme }) => theme.palette.primary.contrastText};
      text-decoration: none;

      &:after {
        content: "";
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 1px;
        bottom: 0;
        left: 0;
        background-color: ${({ theme }) => theme.palette.primary.contrastText};
        transform-origin: center center;
        transition: transform 0.25s ease-out;
      }

      &:hover::after {
        transform: scaleX(1);
        transform-origin: center center;
      }
    }
  }
`;

export default StyledFooter;
