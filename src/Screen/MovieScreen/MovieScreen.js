import { FlexColumn, InnerSection } from "../../Global.Styles";
import {
  CardsContainer,
  HeroSection,
  InnerHeroSection,
  MoviesTitle,
} from "../HomeScreen/HomeScreen.Styles";
import {
  InfoText,
  MovieDetailsBox,
  MovieImage,
  MovieInfoBox,
  NavigatorContainer,
  NavigatorInnerContainer,
  ProgressBar,
  ProgressBarContainer,
  ProgressBarPercentage,
} from "./MovieScreen.Styles";
import ActorCard from "../../Components/ActorCard/ActorCard";
import Navigator from "../../Components/Navigator/Navigator";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import {  getMovie } from "../../Redux/Moveis/moveisAction";

function MovieScreen(props) {

  const state = useSelector(store => store);
  const dispatch = useDispatch();
  const params = useParams();
  const movie = state.MoviesState.movie
  console.log(state.MoviesState.movie)
  useEffect(() => {
      dispatch(getMovie(params.id))
  }, [dispatch, params.id]);

  return (
    <FlexColumn>
      <NavigatorContainer>
        <NavigatorInnerContainer>
          <Navigator name={movie.title}/>
        </NavigatorInnerContainer>
      </NavigatorContainer>
      <HeroSection
        img={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
      >
        <InnerHeroSection>
          <MovieInfoBox>
            <MovieImage
              src={
                `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              }
              alt={movie.title}
            />
            <MovieDetailsBox>
              <InfoText margin={"0 0 25px"} fontSize={30} fontWeight={700}>
              {movie.title}
              </InfoText>
              <InfoText margin={"0 0 20px"} fontSize={16} fontWeight={700}>
                Polt
              </InfoText>
              <InfoText margin={"0 0 20px"} fontSize={16} fontWeight={500}>
                {movie.overview}
              </InfoText>
              <InfoText margin={"0 0 20px"} fontSize={16} fontWeight={700}>
                IMDB RATING
              </InfoText>
              <ProgressBarContainer>
                <ProgressBar>
                  <ProgressBarPercentage width={82} />
                </ProgressBar>
                <InfoText margin={"0 20px"} fontSize={16} fontWeight={500}>
                  {movie.vote_average}
                </InfoText>
              </ProgressBarContainer>{" "}
              <InfoText margin={"0 0 20px"} fontSize={16} fontWeight={700}>
                DIRECTOR
              </InfoText>
              <InfoText margin={"0 0 20px"} fontSize={16} fontWeight={500}>
                Enrico Casarosa
              </InfoText>
            </MovieDetailsBox>
          </MovieInfoBox>
        </InnerHeroSection>
      </HeroSection>
      <InnerSection>
        <MoviesTitle>Actors</MoviesTitle>
        <CardsContainer>
          <ActorCard
            key={1}
            id={""}
            name={"img"}
            img={
              "https://image.tmdb.org/t/p/w500//udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
            }
          />
          <ActorCard
            key={1}
            id={""}
            name={"img"}
            img={
              "https://image.tmdb.org/t/p/w500//udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
            }
          />
          <ActorCard
            key={1}
            id={""}
            name={"img"}
            img={
              "https://image.tmdb.org/t/p/w500//udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
            }
          />
          <ActorCard
            key={1}
            id={""}
            name={"img"}
            img={
              "https://image.tmdb.org/t/p/w500//udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
            }
          />
          <ActorCard
            key={1}
            id={""}
            name={"img"}
            img={
              "https://image.tmdb.org/t/p/w500//udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
            }
          />
        </CardsContainer>
      </InnerSection>
    </FlexColumn>
  );
}

export default MovieScreen;
