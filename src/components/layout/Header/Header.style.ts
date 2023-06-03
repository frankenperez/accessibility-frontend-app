import styled from "@emotion/styled";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 10px 26px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16);

  .logo {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
  }

  .user {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 12px;

    .avatar {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 36px;
      height: 36px;
      background-color: ${({ theme }) => theme.palette.grey[100]};
      color: ${({ theme }) => theme.palette.primary.main};
      font-size: 16px;
      font-weight: 500;
      text-transform: uppercase;
    }

    .username {
      font-size: 1rem;
      color: ${({ theme }) => theme.palette.text.secondary};
    }
  }
`;

export default StyledHeader;
