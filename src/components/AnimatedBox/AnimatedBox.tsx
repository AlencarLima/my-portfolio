import { useState, useEffect, useRef } from "react";
import { Box, Slide, styled } from "@mui/material";


interface AnimatedBoxProps {
    children: React.ReactNode;
    direction: "left" | "right" | "up" | "down" | undefined;
}

const AnimatedBox = ({children, direction}: AnimatedBoxProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // 10% do elemento visível
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const StyledBox = styled(Box)(() => ({
    backgroundColor: "transparent",
    height: "150px",
    width: "100%",
    borderRadius: "2px",
    border: `1px solid #232323`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  }));

  return (
    <div ref={ref} style={{ minHeight: "200px", margin: "100px 0" }}>
      <Slide 
      direction={direction} 
      in={isVisible} 
      mountOnEnter 
      unmountOnExit
      timeout={1000}>
          <StyledBox >
            {children}
          </StyledBox>
      </Slide>
    </div>
  );
};

export default AnimatedBox;
