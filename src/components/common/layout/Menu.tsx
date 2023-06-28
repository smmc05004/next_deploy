import styled from 'styled-components';

const Wrapper = styled.nav`
  width: 150px;
  height: 100%;
  position: fixed;
  background-color: brown;
`;

const Menu = () => {
  return (
    <Wrapper>
      <ul>
        <li>메뉴1</li>
        <li>메뉴2</li>
      </ul>
    </Wrapper>
  );
};

export default Menu;
