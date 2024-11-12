import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { searchContents, GetMoviesResult, searchGeneres, getReviews } from "../api";
import styled from "styled-components";
import { makeImagePath } from "../utils";

const Container = styled.main`
  margin-top: 60px;
  width: 100%;
  background: ${(props) => props.theme.black.lighter};
  overflow: hidden;
`;

const SearchBox = styled.div`
  width: 100%;
  padding: 10px;
`;

const MovieSection = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;

const MovieImg = styled.img`
  width: 50%;
  height: auto;
  object-fit: cover;
`;

const MovieInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: space-around;
`;

const MovieTitle = styled.h4`
  font-size: 40px;
  background: ${(props) => props.theme.red};
  color: ${(props) => props.theme.white.darker};
  border-radius: 8px;
  padding: 0 10px;
`;

const MovieOverview = styled.p`
  font-size: 24px;
  line-height: 1.6;
  border-top: 1px solid ${(props) => props.theme.black.lighter};
  border-bottom: 1px solid ${(props) => props.theme.black.lighter};
  padding: 20px 0;
`;

const MovieDate = styled.div`
  font-size: 18px;
  span {
    display: block;
    background: #ffa300;
    padding: 10px;
    border-radius: 8px;
  }
`;

const MovieValue = styled.div`
  font-size: 18px;
  width: 50px;
  height: 50px;
  background: ${(props) => props.theme.black.lighter};
  color: ${(props) => props.theme.white.darker};
  text-align: center;
  line-height: 50px;
`;

const Genres = styled.div`
  background: #ffa300;
  padding: 10px;
  border-radius: 8px;
`;

const MovieRate = styled.div`
  font-size: 18px;
  span {
    display: block;
    background: #ffa300;
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 8px;
  }
`;

const RateNumbers = styled.div`
  font-size: 18px;
  span {
    display: block;
    background: #ffa300;
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 8px;
  }
`;

interface GenresItem {
  id: number;
  name: string;
}

const Search = () => {
  const { search } = useLocation();
  const keyword = new URLSearchParams(search).get("keyword");
  const { data: movieData, isLoading: movieLoading } =
    useQuery<GetMoviesResult>({
      queryKey: ["multiContents", keyword],
      queryFn: () => searchContents(keyword),
    });

  const { data: genreData, isLoading: genreLoading } = useQuery({
    queryKey: ["getGenre"],
    queryFn: searchGeneres,
  });

  const {data: reviewData, isLoading: reviewLoading} = useQuery({
    queryKey: ["getReviews", ids],
    queryFn: 
  })

  return (
    <Container>
      {movieLoading ? (
        <div>Loading</div>
      ) : (
        <>
          {movieData?.results.map((movie, index) => (
            <SearchBox key={index}>
              <MovieSection>
                <MovieImg src={makeImagePath(movie.backdrop_path)} />
                <MovieInfo>
                  <MovieTitle>{movie.original_title} </MovieTitle>
                  <MovieOverview>{movie.overview}</MovieOverview>
                  <MovieDate>
                    <span>Release {movie.release_date}</span>
                  </MovieDate>
                  <MovieRate>
                    <span>
                      Rate :
                      {movie.vote_average !== undefined
                        ? movie.vote_average.toFixed(1)
                        : null}
                    </span>
                  </MovieRate>
                  <RateNumbers>
                    <span>
                      Members :
                      {movie.vote_count !== undefined
                        ? movie.vote_count.toLocaleString("ko-kr")
                        : null}
                    </span>
                  </RateNumbers>
                  <MovieValue>{movie.adult ? "18+" : "All"}</MovieValue>
                  <Genres>
                    {movie.genre_ids
                      .map(
                        (id) =>
                          genreData?.genres.find(
                            (item: GenresItem) => item.id === id
                          ).name
                      )
                      .join(", ")}
                  </Genres>
                </MovieInfo>
              </MovieSection>
            </SearchBox>
          ))}
        </>
      )}
    </Container>
  );
};
export default Search;
