import styled from 'styled-components'

const MobileFooter = styled.div`
  width: 375px;
  height: 150px;
  background-color: #e6e6e6;
`
MobileFooter.displayName = 'StyledMobileFooter'

const MobileFooterText = styled.p`
  width: 90px;
  height: 55px;
  font-family: Avenir;
  font-size: 40px;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #cccccc;
`
MobileFooterText.displayName = 'StyledMobileFooterText'

export { MobileFooter, MobileFooterText }
