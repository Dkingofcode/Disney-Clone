import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import db from '../firebase';

const Detail = (props) => {
    const { id } = useParams();
    const [ detail, setDetail] = useState([]);
   
    useEffect(() => {
        const fetchData = async () => {
          try {
            const docRef = doc(db, "movies", id);
            const docSnap = await getDoc(docRef);
      
            if (docSnap.exists()) {
              setDetail(docSnap.data());
              console.log("Document data:", docSnap.data());
            } else {
              // docSnap.data() will be undefined in this case
              console.log("No such document!");
            }
          } catch (error) {
            // Handle the error here
            console.error("Error fetching data:", error);
          }
        };
      
        fetchData();
      }, [id]);
      

    return (
     <Container>
        <Background>
            <img alt="" src="/images/boliviaunsplash.jpg"  />
        </Background>

         <ImageTitle>
           <img alt="" src="/images/bunsplash.jpg" />
         </ImageTitle>
         <ContentMeta>
            <Control>
               <Player>
                  <img src='/images/play-icon-black.png' alt="" />
                  <span>Play</span>
                </Player>
                <Trailer>
                  <img src='/images/play-icon-white.png' alt=""  />  
                  <span>Trailer</span>
                </Trailer>
                <AddList>
                    <span>
                            
                    </span>
                </AddList>
                <GroupMatch>
                  <div>
                    <img src="/images/group-icon.png" alt=""  />  
                  </div>   
                </GroupMatch>
            </Control>
            <SubTitle>
             <div>Subtitle</div>   
            </SubTitle>
            <Description>
              <div>Description</div>
            </Description>
         </ContentMeta>
     </Container>
   );  
};

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

     const Trailer = styled(Player)`
      background: rgba(0, 0, 0, 0.3);
      border: 1px solid rgb(249, 249, 249);
      color: rgb(249, 249, 249);        
     `;

     const AddList = styled.div`
       margin-right: 16px;
       height: 44px;
       width: 44px;
       display: flex;
       justify-content: center;
       align-items: center;
       background-color: rgba(0, 0, 0, 0.6);
       border-radius: 50%;
       border: 2px solid white;
       cursor: pointer;
       
       
       span{
        background-color: rgb(249, 249, 249,);
        display: inline-block;

        &:firts-child{
            height: 2px;
            transform: translate(1px, 0px) rotate(0deg);
            width: 16px;
        }

        &:nth-child(2){
            height: 16px;
            transform: translate(-8px) rotate(0deg);
            width: 2px;
        }
       }
     `;

     const GroupMatch = styled.div`
     height: 44px;
     width: 44px;
     display: flex;
     justify-content: center;
     align-items: center;
     background-color: white;
     border-radius: 50%;
     cursor: pointer;
     
     div{
        height: 40px;
        width: 40px;
        background: rgb(0, 0, 0, 0.5);
        border-radius: 50%;

        img{
            width: 100%;
        }
     }

     `;

     const SubTitle = styled.div`
       color: rgb(249, 249, 249);
       font-size: 15px;
       min-height: 20px;

       @media (max-width: 768px){
        font-size: 12px;
       }
     `;

     const Description = styled.div`
       line-height: 1.4;
       font-size: 20px;
       padding: 16px 0px;
       color: rgb(249, 249, 249);

       @media (max-width: 768px){
        font-size: 14px;
       }
     `;


export default Detail;

