'use client'
import Image from "next/image";
import Link from "next/link";
import css from "./ProfilePage.module.css";
// import { Metadata } from "next";
import { useAuthStore } from "@/lib/store/authStore";


// export const metadata: Metadata = {
//   title: "",
//   description: "",
//   openGraph: {
//     title: "",
//     description: "",
//   },
// };

const ProfilePage = () => {
  const user = useAuthStore((state) => state.user)
  return (
    <main className={css.mainContent}>
      <div className={css.profileCard}>
        <div className={css.header}>
          <h1 className={css.formTitle}>Profile Page</h1>
          <Link href="" className={css.editProfileButton}>
            Edit Profile
          </Link>
        </div>
        <div className={css.avatarWrapper}>
          <Image
            src={user?.avatar || 'default/avatar.png'}
            alt="User Avatar"
            width={120}
            height={120}
            className={css.avatar}
          />
        </div>
        <div className={css.profileInfo}>
          <p>Username: your_username</p>
          <p>Email: your_email@example.com</p>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
