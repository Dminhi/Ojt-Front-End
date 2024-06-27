import CompanyCard from "./CompanyCard";
import React from "react";

const companies = [
  {
    name: "Dribbble",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeE6dMZcvr1HxEGTFEG9-sjVNnjQDh1I48iw&s",
    location: "Dhaka, Bangladesh",
    openPositions: 3,
  },
];

const FeaturedCompanies = () => {
  return (
    <div className="p-8">
      <div className="text-right mt-6 flex justify-between">
        <h2 className="text-2xl font-bold mb-6">Công ty nổi bật</h2>
        <a href="#" className="text-red-500">
          Xem Thêm &rarr;
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company, index) => (
          <CompanyCard key={index} company={company} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCompanies;
