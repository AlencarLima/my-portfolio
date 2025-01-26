import { Container, Grid2, styled, Typography } from "@mui/material"
import AnimatedBox from "../../../../components/AnimatedBox/AnimatedBox"
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import SchoolIcon from '@mui/icons-material/School';
import SkillsTable from "../../../../components/SkillsTable/SkillsTable";


const About = () => {

    const StyledAbout = styled("div")(({theme}) => ({
        backgroundColor: "white",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: {
            paddingTop: "950px"
        },
        [theme.breakpoints.up('sm')]: {
            paddingTop: "900px"
        },
        [theme.breakpoints.up('md')]: {
            paddingTop: "0px"
        }
    }))

    return (
        <>
            <StyledAbout>
                <Container maxWidth="lg">
                    <Grid2 spacing={1}>
                        <Typography color="black" variant="h1" textAlign="center" pb={2}>
                            About Me
                        </Typography>
                    </Grid2>
                    <Grid2 container spacing={2} display="flex" justifyContent="center">
                        <Grid2 size={{ xs: 12, md: 6 }} display="flex" justifyContent="center">
                            <AnimatedBox direction="right">
                                <MilitaryTechIcon />
                                <Typography>
                                    Experiência
                                </Typography>
                                <Typography>
                                    2+ anos
                                </Typography>
                                <Typography>
                                    Desenvolvedor Full Stack
                                </Typography>
                            </ AnimatedBox>
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 6 }} display="flex" justifyContent="center">
                            <AnimatedBox direction="left">
                                <SchoolIcon />
                                <Typography>
                                    Educação
                                </Typography>
                                <Typography>
                                    Bacharelado em Ciência e Tecnologia
                                </Typography>
                                <Typography>
                                    Bacharelado em Ciência da Computação
                                </Typography>
                            </AnimatedBox>
                        </Grid2>
                    </Grid2>
                    <Grid2 spacing={1}>
                        <Typography textAlign="justify">
                        Olá 👋🏽! Meu nome é Carlos e sou Desenvolvedor Full-Stack. Estou em fase de conclusão do bacharelado em Ciência da Computação e também cursando Ciência de Dados. Minha trajetória começou com uma forte afinidade pela área de exatas, que me levou a cursar Técnico em Mecatrônica. Lá, tive contato com diversas áreas, mas foi a computação que realmente despertou minha curiosidade.
                        </Typography>
                    </Grid2>
                    <Grid2 spacing={1}>
                        <Typography color="black" variant="h1" textAlign="center" pb={2}>
                            Skills
                        </Typography>
                    </Grid2>
                    <SkillsTable />
                </Container>
            </StyledAbout>
        </>
    )
}

export default About
