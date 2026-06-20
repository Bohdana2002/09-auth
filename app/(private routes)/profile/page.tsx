import { Metadata } from "next";
import ProfileClient from "./ProfileClient";

export const metadata: Metadata = {
  title: "Profile page",
  description: "Profile page of the user",
  openGraph: {
    title: "Profile page",
    description: "Profile page of the user",
    url: "http://localhost:3000/profile",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "Profile page",
      },
    ],
  },
};

const ProfilePage = () => {
  return <ProfileClient />;
};

export default ProfilePage;
