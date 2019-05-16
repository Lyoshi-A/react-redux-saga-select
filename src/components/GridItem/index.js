import styled from 'styled-components'

export const GridItem = styled.div`
  display: inline-block;
  display: box;
  width: 100%;
  margin: 0px 0px 0px;
  border-bottom: 2px solid #1976D2;
  border-radius: 2px;
  background: #fff;  
  @media only screen and (max-width : 600px) {
    width: 100%;
  }
`
export default GridItem

export const GridItemWhite = styled.div`
  display: inline-block;
  display: box;
  width: 100%;
  margin: 0px 0px 0px;
  background: #fff;  
  @media only screen and (max-width : 600px) {
    width: 100%;
  }
 `
