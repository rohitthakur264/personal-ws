import type { Metadata } from "next";
import ResumeClient from "./ResumeClient";

export const metadata: Metadata = {
  title: "Resume — Rohit Thakur | ML Engineer · Data Scientist",
  description: "Resume of Rohit Thakur — Machine Learning Engineer, Data Scientist, AI Developer. B.Tech AI & ML, Vishwakarma University. CGPA 8.42.",
};

export default function ResumePage() {
  return <ResumeClient />;
}
