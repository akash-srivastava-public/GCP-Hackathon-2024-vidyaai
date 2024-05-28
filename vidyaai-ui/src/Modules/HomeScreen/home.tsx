import React, { useState } from "react";
import { Container, Grid, Typography, Box, Button, Modal } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import { styled } from "@mui/system";
import vidyaaichat from "../../Assets/chat.png";
import vidyaaisearch from "../../Assets/search.png";

const GradientBackground = styled("div")({
  background: "linear-gradient(to bottom, #ffffff, #b3e5fc)",
  minHeight: "100vh", // Set the minimum height to fill the viewport
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const openGoogle = () => {
    window.open("https://dev.to/dev1721", "_blank");
  };

  return (
    <GradientBackground>
      {" "}
      <div
        style={{ minHeight: "100vh", position: "relative", paddingTop: "5%" }}
      >
        <Container style={{ paddingBottom: "100px" }}>
          <Grid container spacing={2}>
            {/* First Row */}
            <Grid sx={{marginTop:'5%'}} item xs={6}>
              <Typography variant="h5">VIDYA AI CHAT</Typography>
              <Typography sx={{fontSize:'9pt'}} align="justify" variant="body1">
                "Introducing Vidya AI Chat, your ultimate companion in mastering
                academic excellence! Leveraging cutting-edge technology,
                including Vertex AI agents, Vidya AI Chat is meticulously
                trained on NCERT PDFs to provide tailored support to students
                like never before. Imagine having a knowledgeable friend by your
                side, ready to tackle any question or theoretical doubt you may
                encounter. With Vidya AI Chat, no query is too big or small.
                Whether you need clarification on a concept, assistance with
                homework, or simply crave a deeper understanding of your
                studies, Vidya AI Chat is here to guide you every step of the
                way. Say goodbye to hours of searching through textbooks and
                endless online forums. With Vidya AI Chat, the answers you seek
                are just a message away. Empower yourself with the tools you
                need to succeed academically and unleash your full potential
                with Vidya AI Chat today!"
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <img
                src={vidyaaichat}
                alt="Description of image 1"
                style={{ width: "100%", padding:'5%'
                 }}
              />
            </Grid>

            {/* Second Row */}
            <Grid sx={{marginTop:'2.5%'}} item xs={6}>
              <Typography variant="h5">VIDYA AI SEARCH</Typography>
              <Typography sx={{fontSize:'9pt'}} align="justify" variant="body1">
                "Introducing Vidya AI Search, your ultimate academic companion
                powered by the latest in artificial intelligence technology!
                With the integration of Vertex AI agents and comprehensive
                training on NCERT PDFs, Vidya AI Search is designed to
                revolutionize the way students engage with their studies. Gone
                are the days of struggling to find answers buried within lengthy
                textbooks. Vidya AI Search is capable of not only answering
                short queries but also tackling complex, long-form questions
                with ease. Whether you're seeking clarification on a challenging
                concept or delving into in-depth research, Vidya AI Search is
                your go-to resource for academic excellence. But that's not all.
                Vidya AI Search goes beyond theoretical knowledge to assist with
                practical application. Need help solving numerical problems?
                Look no further. Our smart companion is equipped to guide you
                through even the most intricate calculations, empowering you to
                conquer any academic challenge that comes your way. Say hello to
                a new era of learning with Vidya AI Search. Transform your
                educational journey and unlock endless possibilities with the
                power of AI at your fingertips!"
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <img
                src={vidyaaisearch}
                alt="Description of image 2"
                style={{ width: "100%", padding:'5%' }}
              />
            </Grid>
          </Grid>
        </Container>

        {/* Footer */}
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "80%",
            bgcolor: "background.paper",
            boxShadow: 3,
            py: 1,
            px: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: "10%",
          }}
        >
          <Button onClick={handleOpen} variant="text" color="primary">
            Terms of Use
          </Button>
          <Typography>© Made by Innovation-Software-in-Sky</Typography>
          <LinkIcon onClick={openGoogle} style={{ cursor: "pointer" }} />
        </Box>

        {/* Terms of Use Modal */}
        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              p: 4,
              boxShadow: 24,
            }}
          >
            <Typography variant="h6" component="h2">
              Disclaimer
            </Typography>
            <Typography variant="body2" align="justify" sx={{ mt: 2 }}>
              This model utilizes Google's language models for its functionality.
              The data used for training includes NCERT PDFs for educational
              purposes. It's essential to note that the answers generated by the
              model may be hallucinated, so it's advised to crosscheck the facts
              independently. Please refrain from entering any personally
              identifiable information. The preview provided is solely for testing
              purposes in a hackathon context.
            </Typography>
            <Button
              onClick={handleClose}
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Close
            </Button>
          </Box>
        </Modal>
      </div>
    </GradientBackground>
  );
};

export default Home;
