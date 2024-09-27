import { useRef, useEffect } from "react";
import {
  delay,
  motion,
  useMotionValue,
  useTransform,
  useScroll,
} from "framer-motion";
import { createGlobalStyle, styled } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  body {
    font-family: "Source Sans 3", sans-serif;
    background: linear-gradient(135deg, #ff50a2, #e4136a);
  }

  ul, li {
    list-style: none;
  }

  a{
    text-decoration: none;
    color: inherit;
  }
`;

const Wrapper = styled(motion.div)`
  width: 100%;
  height: 200vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 30px;
  background: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const boxVariants = {};

const App04 = () => {
  const x = useMotionValue(0);
  // console.log(x);
  const { scrollY, scrollYProgress } = useScroll();
  useEffect(() => {
    scrollY.on("change", () => {
      console.log(scrollY.get(), scrollYProgress.get());
    });
  }, [scrollY, scrollYProgress]);
  // const scale = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x,
    [-800, 0, 800],
    [
      "linear-gradient(135deg, rgb(239, 240, 182), rgb(58, 105, 192))",
      "linear-gradient(135deg, rgb(192, 160, 252), rgb(117, 51, 172))",
      "linear-gradient(135deg, rgb(255, 187, 252), rgb(231, 82, 139))",
    ]
  );

  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

  // useEffect(() => {
  //   x.onChange(() => {});
  // }, [x]); // 이건 구문법! 이렇게 쓰면 안돼!!
  useEffect(() => {
    scale.on("change", () => console.log(scale.get()));
  }, [x]);

  return (
    <>
      <GlobalStyles />
      <Wrapper style={{ background: gradient }}>
        {/* <button onClick={() => x.set(200)}>Click Me!</button> */}
        <Box style={{ x, scale, rotateZ }} drag="x" dragSnapToOrigin />
      </Wrapper>
    </>
  );
};

export default App04;
