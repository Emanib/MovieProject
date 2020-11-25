import styled from 'styled-components';

export const StyledSpinner = styled.div`
  border: 5px solid #f3f3f3; /* Light grey */
  border-top: 5px solid #25BAD4; /* Blue */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 0.8s linear infinite;
  margin: 20px auto;

  @keyframes spin {
    0% {
      transform: rotate(10deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
