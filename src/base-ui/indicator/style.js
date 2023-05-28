import styled from "styled-components";


export const IndicatorWrapper = styled.div`
  overflow: hidden;  

  .i-content {
    display: flex;
    position: relative;
    transition: transform 200ms ease;

    /* 直接子元素 */
    >*{
      flex-shrink: 0;
    }
  }
`