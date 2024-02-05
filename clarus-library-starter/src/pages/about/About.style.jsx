import styled from "styled-components";
import Flex from "../../styles/Flex";

export const AboutContainer = styled(Flex)`
    flex-direction:column;
    line-height:2;
    text-align:center;
`

export const InfoContainer = styled.div`
  margin: 0 2rem 1rem;
  width: 60%; 
  border: 1px solid white;
  padding: 5rem;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);  
  font-family: 'Times New Roman', Times, serif; 
  font-size: 1.2rem; 
  text-align: justify; 
  color: #132009;
`;

export const IconContainer = styled.div`
    margin: 2rem;
    a {
        color:gray;
        padding:1rem;
    }
`
