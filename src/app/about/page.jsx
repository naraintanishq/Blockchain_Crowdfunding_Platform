import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box>
      <Box
        sx={{
          height:["auto","auto","100vh"],
          paddingX: [5, 15, 20],
          paddingY: 10,
        }}
      >
        <Typography
          variant="h1"
          fontSize={[30, 50, 100]}
          fontWeight={900}
          letterSpacing={4}
        >
          About <br /> White Company!
        </Typography>
        <br />
        <br />
        <br />

        <Typography
          variant="p"
          fontSize={20}
          letterSpacing={2}
          textAlign={"center"}
        >
          Welcome to WHITE COMPANY, the reliable destination for
          blockchain-driven crowdfunding. Our mission is to empower visionaries,
          creators, and entrepreneurs by facilitating the funding process for
          their ideas through decentralized solutions. By utilizing the
          transparency, security, and innovation inherent in blockchain
          technology, we foster seamless collaboration between project
          initiators and supporters around the world.
        </Typography>
      </Box>

      <Box
        sx={{
            height:["auto","auto","100vh"],
            paddingX: [5, 15, 20],
          paddingY: 10,
          backgroundColor: "black",
          color: "white",
        }}
      >
        <Typography
          variant="h1"
          fontSize={[30, 35, 50]}
          fontWeight={700}
          letterSpacing={4}
        >
          Who We Are
        </Typography>
        <br />
        <Typography
          variant="p"
          fontSize={20}
          letterSpacing={2}
          textAlign={"center"}
        >
          WHITE COMPANY is a cutting-edge platform dedicated to transforming the
          crowdfunding industry through blockchain technology. We bring together
          visionary creators, entrepreneurs, and innovators with a global
          network of backers who believe in supporting impactful ideas. Our
          platform empowers users to launch, fund, and support projects in a
          secure, transparent, and decentralized environment. We are more than
          just a crowdfunding platform—we are a community-driven space where
          innovation meets opportunity.
        </Typography>
        <br />
        <br />
        <br /> <br />
        <Typography
          variant="h1"
          fontSize={[30, 35, 50]}
          fontWeight={700}
          letterSpacing={4}
        >
          Why choose us
        </Typography>
        <br />
        <Typography
          variant="p"
          fontSize={20}
          letterSpacing={2}
          textAlign={"center"}
        >
          At WHITE COMPANY, we prioritize transparency, security, and efficiency
          in every transaction. Our blockchain-based platform ensures that all
          interactions are secure, traceable, and trustworthy, making it easy
          for backers to confidently invest in projects they believe in. With
          smart contracts, we automate and enforce agreements, eliminating
          paperwork and reducing costs, which ultimately benefits both creators
          and backers. By removing geographical barriers, we offer creators
          access to a global audience, and backers the chance to support
          projects from anywhere in the world. We are dedicated to empowering
          innovation and building a space where projects can thrive through
          collective support.
        </Typography>
      </Box>

      <Box
        sx={{
            height:["auto","auto","100vh"],
            paddingX: [5, 15, 20],
          paddingY: 10,
        }}
      ><br/>
        <Typography
          variant="h1"
          fontSize={[30, 35, 50]}
          fontWeight={700}
          letterSpacing={4}
        >
          Our mission
        </Typography>
        <br /> <br />
     
        <Typography
          variant="p"
          fontSize={20}
          letterSpacing={2}
          textAlign={"center"}
        >
          Our mission is to empower creators, innovators, and entrepreneurs by
          providing them with a decentralized, secure, and efficient platform to
          bring their ideas to life. We believe in democratizing access to
          funding, creating a transparent ecosystem where trust and
          collaboration fuel progress. By leveraging blockchain technology, we
          strive to redefine crowdfunding, offering a space where creators can
          grow, backers can make a tangible impact, and communities can benefit
          from the transformative power of innovative projects. At WHITE
          COMPANY, we are committed to building a future where meaningful ideas
          can flourish through the support of a global community.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
