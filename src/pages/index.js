import Courses from '../components/Courses/Courses';
import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation';
import ShowcaseBanner from '../components/ShowcaseBanner/ShowcaseBanner';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <ShowcaseBanner />
        <BgAnimation />
      </Section>
      <Timeline />
      <Technologies />
      {/* <Projects /> */}
      <Courses />
    </Layout>
  );
};

export default Home;
