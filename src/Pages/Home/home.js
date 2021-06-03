import * as Scroll from "react-scroll";
import "./home.scss";
let ScrollElement = Scroll.Element;

export const Home = () => {
  return (
    <main>
      <ScrollElement name="start" className="home__start">
        Start
      </ScrollElement>
      <ScrollElement name="about_app" className="home__start">
        o co
      </ScrollElement>
      <ScrollElement name="about_us" className="home__start">
        o nas
      </ScrollElement>
      <ScrollElement name="fundations" className="home__start">
        fundacje
      </ScrollElement>
      <ScrollElement name="contact" className="home__start">
        kontakt
      </ScrollElement>
    </main>
  );
};
