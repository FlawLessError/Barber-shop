import { Fragment } from "react/jsx-runtime";
import Banner from "../components/Banner";
import PrimaryNav from "../components/PrimaryNav";
import HomeMainContent from "../components/HomePageSections/HomeMainContent";
import ContentInfo from "../components/ContentInfo";

export default function HomePage() {
  return (
    <Fragment>
      <PrimaryNav />
      <Banner />
      <HomeMainContent />
      <ContentInfo />
    </Fragment>
  );
}
