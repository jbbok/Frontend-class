import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { PathMatch, useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { makeImagePath } from "../utils";
import { getMovies, GetMoviesResult } from "../api";

const Container = styled.div`
  width: 100%;
  height: 3000px;
  margin-top: 60px;
  background: ${(props) => props.theme.black.lighter};
`;
const Loader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.red};
`;
interface BgPhoto {
  bgPhoto: string | undefined;
}
const Banner = styled.div<{ bgPhoto: string | undefined }>`
  color: ${(props) => props.theme.white.darker};
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  padding: 0 60px;
  justify-content: center;
  background: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => `${props.bgPhoto}`}) center/cover no-repeat;
`;
const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 10px;
`;
const Overview = styled.p`
  font-size: 30px;
  width: 50%;
`;
const Slider = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  top: -100px;
`;
const Row = styled(motion.div)`
  position: absolute;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  margin-bottom: 10px;
`;
const Box = styled(motion.div)<BgPhoto>`
  width: auto;
  height: 200px;
  background: url(${(props) => props.bgPhoto}) center/cover no-repeat;
  font-size: 22px;
  cursor: pointer;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

const Info = styled(motion.div)`
  width: 100%;
  height: 100%;
  padding: 20px;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  h4 {
    text-align: center;
    font-size: 16px;
    color: ${(props) => props.theme.red};
  }
`;

const ModalBox = styled(motion.div)`
  position: fixed;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 40vw;
  height: 80vh;
  background: ${(props) => props.theme.black.lighter};
  color: ${(props) => props.theme.white.darker};
  border-radius: 8px;
  overflow: hidden;
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

const MovieCover = styled.img`
  width: 100%;
  height: 400px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const MovieTitle = styled.h3`
  color: ${(props) => props.theme.white.darker};
  font-size: 28px;
  padding: 20px;
  position: relative;
  top: -80px;
`;

const MovieOverView = styled.p`
  padding: 0px 20px;
  line-height: 2;
  font-size: 20px;
  position: relative;
  top: -60px;
`;

const rowVariants = {
  hidden: {
    x: window.innerWidth + 10,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.innerWidth - 10,
  },
};

const boxVariants = {
  normal: { scale: 1 },
  hover: {
    scale: 1.3,
    y: -50,
    transition: { delay: 0.5, duration: 0.3 },
    type: "tween",
  },
};

const infoVariants = {
  hover: {
    opacity: 0.8,
    transition: { delay: 0.5, duration: 0.3, type: "tween" },
  },
};

// const mockData = [1, 2, 3, 4, 5, 6];
const offset = 6; // 한 페이지당 보여줄 영화 수

const Home = () => {
  // const navigate = useNavigate();
  // queryKey: ["movies"],
  const history = useNavigate();
  const movieMatch: PathMatch<string> | null = useMatch("/movies/:movieId");
  const { data, isLoading } = useQuery<GetMoviesResult>({
    queryKey: ["nowPlaying"],
    queryFn: getMovies,
  });

  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false); // 더블클릭 방지

  const { scrollY } = useScroll();

  const increaseIndex = () => {
    if (data) {
      if (leaving) return; // leaving이 true일 때 리턴하도록 수정
      setLeaving(true);
      const totalMovies = data?.results.length - 2; // 20개 인데 18개로 하기위해 -2
      const maxIndex = Math.ceil(totalMovies / offset) - 1;
      // toggleLeaving();
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };

  const toggleLeaving = () => setLeaving((prev) => !prev);

  const onBoxClick = (movieId: number) => {
    history(`/movies/${movieId}`);
  };

  const onOverlayClick = () => {
    history(`/`);
  };

  const ClickedMovie =
    movieMatch?.params.movieId &&
    data?.results.find((movie) => movie.id === +movieMatch.params.movieId!);

  return (
    <Container>
      {isLoading ? (
        <Loader>Loading..</Loader>
      ) : (
        <>
          <Banner
            onClick={increaseIndex}
            bgPhoto={makeImagePath(data?.results[2].backdrop_path || "")}
          >
            <Title>{data?.results[2].original_title}</Title>
            <Overview>{data?.results[2].overview}</Overview>
          </Banner>
          <Slider>
            {/* 애니메이션이 한 번 끝나면 호출되는 함수 */}
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              {/* onExitComplete={toggleLeaving} 슬라이드 끝 까지 가야지 실행 */}
              <Row
                variants={rowVariants}
                key={index}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: "tween", duration: 1 }}
              >
                {data?.results
                  .slice(2)
                  .slice(index * offset, index * offset + offset)
                  .map((movie) => (
                    <Box
                      onClick={() => onBoxClick(movie.id)}
                      key={movie.id}
                      layoutId={movie.id + ""}
                      variants={boxVariants}
                      bgPhoto={makeImagePath(movie.backdrop_path || "")}
                      initial="normal"
                      whileHover="hover"
                    >
                      <Info variants={infoVariants}>
                        <h4>{movie.title}</h4>
                      </Info>
                    </Box>
                  ))}
              </Row>
            </AnimatePresence>
          </Slider>
          <AnimatePresence>
            {movieMatch ? (
              <>
                <Overlay
                  onClick={onOverlayClick}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
                <ModalBox
                  layoutId={movieMatch.params.movieId}
                  style={{ top: scrollY.get() + 60 }}
                >
                  {ClickedMovie && (
                    <>
                      <MovieCover
                        style={{
                          backgroundImage: `linear-gradient(to top, #000, transparent), url(${makeImagePath(
                            ClickedMovie.backdrop_path,
                            "w500"
                          )})`,
                        }}
                      />
                      <MovieTitle>{ClickedMovie.title}</MovieTitle>
                      <MovieOverView>{ClickedMovie.overview}</MovieOverView>
                    </>
                  )}
                </ModalBox>
              </>
            ) : null}
          </AnimatePresence>
        </>
      )}
    </Container>
  );
};
export default Home;
