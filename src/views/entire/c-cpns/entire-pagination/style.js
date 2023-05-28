import styled from "styled-components";


export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;

    .MuiPaginationItem-page.Mui-selected{
      background-color: #222;
      color:#fff;
    }

    /* 箭头大小 */
    .MuiPaginationItem-icon {
      font-size: 25px;
    }

    /* page大小 */
    .MuiPaginationItem-page {
      margin: 0 9px;

      &:hover {
        text-decoration: underline;
      }
      &:hover{
        text-decoration: none;
      }
    }

    

    .desc {
      margin-top: 16px;
      color: #222;
    }
  }
`