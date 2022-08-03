
import styled from 'styled-components';

export const Error = styled.span`
  color: #ff4136;
`;

export const Center = styled.div`
  text-align: left;

  h4 {
    font-weight: normal;
  }
`;

export const InputField = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

export const Wrapper = styled.div`
  .submit-btn {
    background: ${({ theme }) => (theme === 'light' ? '#005554' : '#66BD88')};
    margin-right: 20px;
    border: 3px solid ${({ theme }) => (theme === 'light' ? '#005554' : '#66BD88')};
    font-weight: bold;
  }
`;

export const H2 = styled.h2`
  display: flex;
  position: relative;


  ::after{
    content: '';
    display: block;
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 120px;
    height: 12px;
    background-color: green;
    z-index: -1;
  }
`;
