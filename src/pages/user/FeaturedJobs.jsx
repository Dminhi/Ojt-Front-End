import JobCard from "./JobCard";
import React from "react";

const jobs = [
  {
    title: "Technical Support Specialist",
    type: "PART-TIME",
    salary: "$20,000 - $25,000",
    company: "Google Inc.",
    location: "Dhaka, Bangladesh",
  },
  {
    title: "Senior UX Designer",
    type: "FULL-TIME",
    salary: "$20,000 - $25,000",
    company: "Google Inc.",
    location: "Dhaka, Bangladesh",
  },
  {
    title: "Marketing Officer",
    type: "INTERNSHIP",
    salary: "$20,000 - $25,000",
    company: "Google Inc.",
    location: "Dhaka, Bangladesh",
  },
  {
    title: "Junior Graphic Designer",
    type: "INTERNSHIP",
    salary: "$20,000 - $25,000",
    company: "Google Inc.",
    location: "Dhaka, Bangladesh",
  },
  {
    title: "Interaction Designer",
    type: "PART-TIME",
    salary: "$20,000 - $25,000",
    company: "Google Inc.",
    location: "Dhaka, Bangladesh",
  },
  {
    title: "Project Manager",
    type: "FULL-TIME",
    salary: "$20,000 - $25,000",
    company: "Google Inc.",
    location: "Dhaka, Bangladesh",
  },
  {
    title: "Software Engineer",
    type: "FULL-TIME",
    salary: "$20,000 - $25,000",
    company: "Google Inc.",
    location: "Dhaka, Bangladesh",
  },
  {
    title: "Visual Designer",
    type: "FULL-TIME",
    salary: "$20,000 - $25,000",
    company: "Google Inc.",
    location: "Dhaka, Bangladesh",
  },
  {
    title: "Front End Developer",
    type: "PART-TIME",
    salary: "$20,000 - $25,000",
    company: "Google Inc.",
    location: "Dhaka, Bangladesh",
  },
  {
    title: "Senior UX Designer",
    type: "FULL-TIME",
    salary: "$20,000 - $25,000",
    company: "Google Inc.",
    location: "Dhaka, Bangladesh",
  },
  {
    title: "Marketing Manager",
    type: "INTERNSHIP",
    salary: "$20,000 - $25,000",
    company: "Google Inc.",
    location: "Dhaka, Bangladesh",
  },
];

const FeaturedJobs = () => {
  return (
    <div className="p-8">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold mb-6">Công việc nổi bật</h2>
        <a className="text-red-500" href="">
          Xem thêm{" -->"}
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
