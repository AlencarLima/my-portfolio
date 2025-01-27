import { useState, useEffect, useRef } from "react";
import { Box, Slide, styled } from "@mui/material";


interface AnimatedBoxProps {
    children: React.ReactNode;
    direction: "left" | "right" | "up" | "down" | undefined;
    styleProps?: React.CSSProperties;
    hoverStyle?: React.CSSProperties;
}

const AnimatedBox = ({children, direction, styleProps, hoverStyle}: AnimatedBoxProps) => {
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

  const StyledBox = styled(Box)<{ styleProps?: React.CSSProperties; hoverStyle?: React.CSSProperties }>(({ theme, styleProps, hoverStyle }) => ({
    backgroundColor: "transparent",
    borderRadius: "2px",
    border: `1px solid #232323`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // opcional
    padding: "20px",
    gap: "5px",
    '&:hover': {
            backgroundColor: theme.palette.secondary.light,
            ...hoverStyle // opcional
        },
    ...styleProps
  }));

  return (
    <div ref={ref} style={{ minHeight: "200px", minWidth: "350px" }}>
      <Slide 
      direction={direction} 
      in={isVisible} 
      mountOnEnter 
      unmountOnExit
      timeout={1000}>
          <StyledBox styleProps={styleProps} hoverStyle={hoverStyle}>
            {children}
          </StyledBox>
      </Slide>
    </div>
  );
};

export default AnimatedBox;
