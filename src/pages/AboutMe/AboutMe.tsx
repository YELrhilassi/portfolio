import ProfilePic from "./ProfilePic";
import Typewriter from "./Typewriter";
import Box from "components/layout/box";
import st from "./aboutMe.module.scss";

export default function AboutMe() {
  return (
    <div className={st.aboutMeSection}>
      <div className={st.textBox}>
        <div className={st.greeting}> Hi there! I'm Youssef.</div>
        <div className={st.openingText}>
          <span>A web developper with a passion &nbsp;</span>
          <span>
            for <Typewriter /> development.
          </span>
        </div>

        <div className={st.introText}>
          <p>
            With my academic background in linguistics, I’m constantly exploring
            oportunities to transform ways of communication through technology.
          </p>
          <p>
            My primary focus now is to create dynamic and interactive web
            applications that revolves around language-related functionalities.
          </p>
          <p>
            I'm exited to collaborating with different talents globally, Let’s
            chat and connect!
          </p>
        </div>
      </div>

      <Box>
        <Box
          position="absolute"
          width="120vw"
          top="-28vh"
          left="-20vw"
          desktop={{ width: "67vw", left: "17vw", top: "-30vw" }}
        >
          <img src="/patterns.svg" />
          <Box
            position="absolute"
            width="35vw"
            left="75vw"
            top="-10vw"
            desktop={{ width: "30vw", left: "42vw", top: "-15vw" }}
          >
            <ProfilePic />
          </Box>
        </Box>
      </Box>
    </div>
  );
}
