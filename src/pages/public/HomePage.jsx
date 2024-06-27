import Banner from "../../layouts/public/Banner";
import FeaturedCompanies from "./FeaturedCompanies";
import FeaturedJobs from "./FeaturedJobs";

function HomePage() {
  return (
    <div>
      <Banner></Banner>
      <FeaturedJobs></FeaturedJobs>
      <FeaturedCompanies></FeaturedCompanies>
    </div>
  );
}

export default HomePage;
