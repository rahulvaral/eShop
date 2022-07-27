import React, { useContext } from "react";
import styled from "@emotion/styled";

import ThemeContext from "../../theme/themeContext";

const MainContent = ({
  children
}: {
  children: JSX.Element;
}): React.ReactElement => {
  const { colors } = useContext(ThemeContext);

  const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 50px;
    background-color: ${colors.mainBg};
  `;
  return <MainDiv>{children}</MainDiv>;
};

export default MainContent;
