import { Grid2, styled } from "@mui/material";



const SkillsTable = () => {

  const StyledBox = styled("div")(({ theme }) => ({
    backgroundColor: "transparent",
    border: `1px solid black`,
    borderRadius: "3px",
    padding: "5px 15px",
    width: "100%",
    color: "black",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    }
  }
  ))

  return (
    <>
      <Grid2 container spacing={2} pb={2}>
        <Grid2 size={{ xs: 12, md: 2 }}>
          <StyledBox>JavaScript</StyledBox>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 2 }}>
          <StyledBox>TypeScript</StyledBox>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 2 }}>
          <StyledBox>React</StyledBox>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 2 }}>
          <StyledBox>React Native</StyledBox>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 2 }}>
          <StyledBox>Node.js</StyledBox>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 2 }}>
          <StyledBox>HTML5</StyledBox>
        </Grid2>
      </Grid2>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, md: 2 }}>
          <StyledBox>CSS3</StyledBox>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 2 }}>
          <StyledBox>Python</StyledBox>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 2 }}>
          <StyledBox>Git</StyledBox>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 2 }}>
          <StyledBox>Docker</StyledBox>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 2 }}>
          <StyledBox>SQL</StyledBox>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 2 }}>
          <StyledBox>API Rest</StyledBox>
        </Grid2>
      </Grid2>
    </>
  );
};

export default SkillsTable;
