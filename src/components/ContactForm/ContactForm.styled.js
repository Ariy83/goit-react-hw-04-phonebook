import styled from 'styled-components';
export const StyledTitle = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`;
export const StyledForm = styled.form`
  font-size: calc((1vh + 1vw));
  border: 3px solid lightblue;
  box-shadow: 3px 4px 7px 3px lightgray;
  width: calc((10vh + 20vw) * 1.2);
  padding: 40px 20px;
  border-radius: 12px;
`;
export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  margin-bottom: 10px;
`;
export const StyledInput = styled.input`
  padding: 5px 10px;
  font-size: calc((1vh + 1vw) * 1.2);
  border: solid 1px lightgray;
  outline: none;
`;
export const Flex = styled.div`
  display: flex;
  gap: 20px;
`;
export const FlexContainer = styled(Flex)`
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;
export const StyledButton = styled.button`
  padding: 10px 22px;
  border-radius: 4px;
  border: solid 1px lightgray;
  font-size: ${props => props.$size || '1.5rem'};
  background-color: white;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: blue;
    color: white;
  }
  &:disabled {
    background-color: red;
    color: white;
  }
`;
