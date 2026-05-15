import BookApp from "./BookApp";
import Hours from "./Hours";
import Pricing from "./Pricing";
import Services from "./Services";

const HomeMainContent = () => {
  return (
    <main>
      <Services />
      <Hours />
      <Pricing />
      <BookApp />
    </main>
  );
};

export default HomeMainContent;
