import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import ImgSlider from './ImgSlider';

const Home = (props) => {
  return (
    <Container>
      <ImgSlider />
    </Container>
   );
 }

  const Container = styled.main`
   position: relative;
   min-height: calc(100vh - 250px);
   overflow-x: hidden;
   display: block;
   top: 72px;
   padding: 0 calc(3.5vw + 5px);
   
   &:after {
       background: url("/images/home-background.png"); 
      content: "";

   }
  `;


export default Home;