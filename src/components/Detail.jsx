import styled from 'styled-components';


const Detail = (props) => {
   return (
     <Container>
        <Background>
            <img alt="" src="/images/boliviaunsplash.jpg"  />
        </Background>

         <ImageTitle>
           <img alt="" src="/images/bunsplash.jpg" />
         </ImageTitle>
     </Container>
   );  

   }

  const Container = styled.div`
  position: relative;
  min-height: calc(100vh-258px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5px + 5px);
  
  `;

  const Background = styled.div`
    left: 0px;
    opacity: 0.8;
    position: fixed;
    right: 0;
    top: 0px;
    z-index: -1;

    img{
        width: 100%;
        height: 100%;
    

    @media (max-width: 768px){
       width: initial;
    }
  }
  `;



export default Detail;

