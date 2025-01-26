import { Container, styled, Grid2, Typography, Box } from "@mui/material"
import Avatar from "../../../../assets/images/avatar_insta.jpeg";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import { ReactTyped } from "react-typed";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: {
            paddingTop: "100px"
        },
        [theme.breakpoints.up('sm')]: {
            paddingTop: "200px"
        },
        [theme.breakpoints.up('md')]: {
            paddingTop: "0px"
        }
    }
    ))

    const StyledImage = styled("img")(({ theme }) => ({
        width: "75%",
        borderRadius: "50%",
        border: `2px solid ${theme.palette.secondary.contrastText}`,
    }
    ))

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid2 container spacing={2}>
                        <Grid2 size={{ xs: 12, md: 5 }}>
                            <Box position="relative">
                                <Box position="absolute" width={"150%"} top={-100} right={0}>
                                    <AnimatedBackground />
                                </Box>
                                <Box position="relative" textAlign={"center"}>
                                    <StyledImage src={Avatar} />
                                </Box>
                            </Box>
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 7 }}>
                            <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>
                                Carlos Alencar
                            </Typography>

                            <Typography color="primary.contrastText" variant="h2" textAlign="center">
                                <ReactTyped
                                    startWhenVisible
                                    strings={["I'm a Software Engineer!"]}
                                    typeSpeed={50} // Velocidade da digitação
                                    showCursor={false} // Mostrar cursor
                                />
                            </Typography>
                            <Grid2 container display="flex" justifyContent="center" spacing={2} pt={3}>
                                <Grid2 size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                                    <StyledButton onClick={() => window.open("/assets/cvs/cv_carlos.pdf", '_blank')}>
                                        <DownloadIcon /><Typography>Download CV</Typography>
                                    </StyledButton>
                                </Grid2>

                                <Grid2 size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                                    <StyledButton onClick={() => window.location.href = 'mailto:carlos.alencar@aluno.ufabc.edu.br?subject=Contato&body=Olá, gostaria de falar com você!'}>
                                        <EmailIcon /><Typography>Contact me</Typography>
                                    </StyledButton>
                                </Grid2>
                            </Grid2>


                        </Grid2>


                    </Grid2>
                </Container>


            </StyledHero>
        </>
    )
}

export default Hero
