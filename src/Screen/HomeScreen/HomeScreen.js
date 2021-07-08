import { FlexColumn, InnerSection } from "../../Global.Styles";
import {
  CardsContainer,
  Description,
  HeroSection,
  InnerHeroSection,
  LoadMore,
  MoviesTitle,
  Title,
} from "./HomeScreen.Styles";
import Card from "../../Components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMoveis } from "../../Redux/Moveis/moveisAction";
import { useState } from "react";


function HomeScreen() {
  const [page,setPage]= useState(1)
  const dispatch = useDispatch();
   const state = useSelector((state) => state);
 const lastMovies=state?.MoviesState?.Moveis;
   useEffect(() => {
     dispatch(getMoveis(page,lastMovies));
   }, [dispatch, page ])
  
  return (
    <FlexColumn>
      <HeroSection
        img={"https://image.tmdb.org/t/p/w500/"}
      >
        <InnerHeroSection>
          <Title>Title</Title>
          <Description>
            This is just a film description to get from the api
          </Description>
        </InnerHeroSection>
      </HeroSection>
      <InnerSection>
        <MoviesTitle>Popular Movies</MoviesTitle>
        <CardsContainer>
        {state.MoviesState?.Moveis?.map((item) => (
          <Card
          key={item.id}
          id={item.id}
          name={item.title}
          img={
            `https://image.tmdb.org/t/p/w500/${item.poster_path}`
          }
          // img={"https://image.tmdb.org/t/p/w500/" + item.poster_path}
        />
          
        ))}
          
        </CardsContainer>
        <LoadMore onClick={()=>{
          console.log(page);
          setPage(page+1)
          dispatch(getMoveis(page,lastMovies))}} isLoading={state?.MoviesState?.isLoading}>Load more...</LoadMore>
      </InnerSection>
    </FlexColumn>
  );
}

export default HomeScreen;
