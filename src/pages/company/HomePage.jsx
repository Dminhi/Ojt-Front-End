import Banner from "../../layouts/public/Banner";
import FeatureCandidateCard from "./FeatureCandidateCard";
import FeaturedCompanies from "./FeaturedCompanies";
import FeaturedJobs from "./CompanyJobs";
import Testimonial from "./Testimonial";

function CompanyHomePage() {
  return (
    <div>
      <Banner></Banner>
      <FeatureCandidateCard></FeatureCandidateCard>
    </div>
  );
}

export default CompanyHomePage;
