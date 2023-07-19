import { Link } from "react-router-dom";
import styled from "styled-components";


const Recommends = (props) => {
return (    
     <Container>
        <h1>Recommended for you </h1>
        <Content>
            <Wrap>
              <Link to="/">
                <img src="/images/boliviaunsplash.jpg" alt="" />
              </Link>  
            </Wrap>

            <Wrap>
              <Link to="/">
                <img src="/images/boliunsplash.jpg" alt="" />
              </Link>  
            </Wrap>
            
            <Wrap>
              <Link to="/">
                <img src="/images/bunsplash.jpg" alt="" />
              </Link>  
            </Wrap>
            
            <Wrap>
              <Link to="/">
                <img src="/images/boliviaunsplash.jpg" alt="" />
              </Link>  
            </Wrap>

        </Content>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 0 25px;

`;


const Content = styled.div`
  display: grid;
   grid-gap: 25px;
   gap: 25px;
   grid-template-columns: repeat(4, minmax(0, 1fr));

   @media (max-width: 768px){
      grid-template-columns: repeat(2, minmax(0, 1fr));
   }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
`

export default Recommends;