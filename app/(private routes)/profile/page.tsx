
import Image from "next/image";
import Link from "next/link";
import css from "./ProfilePage.module.css";
import { Metadata } from "next";
import { useAuthStore } from "@/lib/store/authStore";

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
      }
    ]
  },
};

const ProfilePage = () => {
  const user = useAuthStore((state) => state.user);
  return (
    <main className={css.mainContent}>
      <div className={css.profileCard}>
        <div className={css.header}>
          <h1 className={css.formTitle}>Profile Page</h1>
          <Link href="profile/edit" className={css.editProfileButton}>
            Edit Profile
          </Link>
        </div>
        <div className={css.avatarWrapper}>
          <Image
            src={user?.avatar || "/default.png"}
            alt="User Avatar"
            width={120}
            height={120}
            className={css.avatar}
          />
        </div>
        <div className={css.profileInfo}>
          <p>Username: {user?.username}</p>
          <p>Email: {user?.email}</p>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
