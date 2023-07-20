import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Recommends from './Recommends';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Trending from './Trending';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from '../features/movie/movieSlice';
import { selectUserName } from '../features/userSlice';
import  db  from '../firebase';
import { collection, query, where, onSnapshot, getDocs } from 'firebase/firestore';


// const getData = async () => {
//     try {
//       const querySnapshot = await getDocs(collection(db, "your_collection_name"));
//       querySnapshot.forEach((doc) => {
//         console.log(doc.id, " => ", doc.data());
//       });
//     } catch (error) {
//       console.error("Error getting documents: ", error);
//     }
//   };

const Home = (props) => {
   const dispatch = useDispatch();
   const userName = useSelector(selectUserName);
   let recommends = [];
   let newDisney = [];
   let originals = [];
   let trending = [];

  useEffect(() => {
    // Clear previous data in state before updating
        console.log("hello");
    // Add Firestore event listener using onSnapshot
        // Retrieve the data and construct the new state
          const getData = async () => {
                try {
                  const querySnapshot = await getDocs(collection(db, "movies"));
                  querySnapshot.forEach((doc) => {
                     console.log(doc.id, " => ", doc.data().type);
                  
              
             const data = { id: doc.id, ...doc.data() };
            switch (doc.data().type) {
              case 'recommend':
              recommends = [...recommends, data];
               break;
             case 'new':
               newDisney  = [...newDisney, data];
               break;
          case 'original':
            originals = [...originals, data];
            break;
          case 'trending':
           trending  = [...trending, data];
            break;
          default:
            break;
        }

//    const q = query(collection(db, "movies"), where("type", "==", data.type))
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//         const movies = []
//         console.log("Current data:", doc.data());   
//         querySnapshot.forEach((doc) => {
//            movies.push(doc.data().name);  
//         });

//       });
    
    // Clean up the event listener when the component unmounts
    
      dispatch(
        setMovies({
            recommend: recommends,
            newDisney: newDisney,
            original: originals,
            trending: trending,
        })
      );
    });
} catch (error) {
  console.error("Error getting documents: ", error);
}
};

      getData();
      
    //   return () => {
    //     unsubscribe();
    //   }
    
    }, [userName]); 


    return (

    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
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
