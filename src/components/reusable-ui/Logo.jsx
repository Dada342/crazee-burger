import styled from "styled-components";
import { theme } from "../../theme";

export default function Logo() {
  return (
    <LogoStyled>
      <h1>CRAZY</h1>
      <img src="/images/logo-orange.png" alt="logo-crazy-burger" />
      <h1>BURGER</h1>
    </LogoStyled>
  )
}

const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  height: 100px;

  h1 {
  display: inline;
  text-align: center;
  color: ${theme.colors.primary};
  font-size: ${theme.fonts.size.p7}; /* 36px * 2.5 */
  line-height: 1em;
  font-weight: ${theme.fonts.weights.bold};
  text-transform: uppercase;
  letter-spacing: 3.75px; /* 1.5px * 2.5 */
  font-family: "Amatic SC", cursive;
  }

  img {
  object-fit: contain;
  object-position: center;
  height: 150px; /* 60px * 2.5 */
  width: 200px; /* 80px * 2.5 */
  margin: 0 12.5px; /* 5px * 2.5 */
  }
`;
