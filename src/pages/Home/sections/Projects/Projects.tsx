import { Container, Grid2, styled, Typography } from "@mui/material"
import AnimatedBox from "../../../../components/AnimatedBox/AnimatedBox"


const Projects = () => {

    const StyledProjects = styled("div")(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
    }))

    return (
        <>
            <StyledProjects>
                <Container maxWidth="lg">
                    <Grid2 spacing={1}>
                        <Typography color="white" variant="h2" textAlign="center" pb={2}>
                            Projetos
                        </Typography>
                    </Grid2>
                    <Grid2 container spacing={2} display="flex" justifyContent="center">
                        <Grid2 size={{ xs: 12, md: 6 }} display="flex" justifyContent="center">
                            <AnimatedBox direction="right" styleProps={{ border: "1px solid white" }} hoverStyle={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}>

                                <Typography fontWeight={700} color="white">
                                    UFABC NEXT Web
                                </Typography>
                                <Typography color="white">
                                    Abr 2023 - Atual
                                </Typography>
                                <Typography color="white">
                                    Desenvolvedor Front-End
                                </Typography>
                            </ AnimatedBox>
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 6 }} display="flex" justifyContent="center">
                            <AnimatedBox direction="left" styleProps={{ border: "1px solid white" }} hoverStyle={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}>

                                <Typography fontWeight={700} color="white">
                                    Educação
                                </Typography>
                                <Typography color="white">
                                    Bacharelado em Ciência e Tecnologia
                                </Typography>
                                <Typography color="white">
                                    Bacharelado em Ciência da Computação
                                </Typography>
                            </AnimatedBox >
                        </Grid2>
                    </Grid2>
                </ Container>
            </StyledProjects>
        </>
    )
}

export default Projects
