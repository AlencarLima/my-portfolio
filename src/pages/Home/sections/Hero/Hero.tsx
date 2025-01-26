import { Container, styled, Grid2, Typography, Button } from "@mui/material"
import Avatar from "../../../../assets/images/avatar_insta.jpeg";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "black",
        height: "100vh",
    }
    ))

    const StyledImage = styled("img")(() => ({
        width: "100%",
        borderRadius: "50%",
    }
    ))

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid2 container spacing={2}>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                            <StyledImage src={Avatar} />
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 8 }}>
                            <Typography color="primary" variant="h1" textAlign="center">Carlos Alencar</Typography>
                            <Typography color="primary" variant="h2" textAlign="center">I'M a Software Engineer</Typography>
                            <Grid2 container display="flex" justifyContent="center">
                                <Grid2 size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                                    <Button><DownloadIcon />Download CV</Button>
                                </Grid2>
                                <Grid2 size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                                    <Button><EmailIcon />Contact me</Button>
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
