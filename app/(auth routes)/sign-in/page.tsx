"use client";
import css from "./SignInPage.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { login, LoginUserData } from "@/lib/api/clientApi";
import { useAuthStore } from "@/lib/store/authStore";

const SignInPage = () => {
  const router = useRouter();
  const [isError, setIsError] = useState(false);
  const setUser = useAuthStore((state) => state.setUser);

  const handleSubmit = async (formData: FormData) => {
    try {
      const formValues = Object.fromEntries(
        formData,
      ) as unknown as LoginUserData;
      const res = await login(formValues);
      if (res) {
        setUser(res);
        router.push("/profile");
      } else {
        setIsError(true);
      }
    } catch {
      setIsError(true);
    }
  };
  return (
    <main className={css.mainContent}>
      <form className={css.form} action={handleSubmit}>
        <h1 className={css.formTitle}>Sign in</h1>
        <div className={css.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            className={css.input}
            required
          />
        </div>
        <div className={css.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            className={css.input}
            required
          />
        </div>
        <div className={css.actions}>
          <button type="submit" className={css.submitButton}>
            Log in
          </button>
        </div>
        <p className={css.error}>If the password or email is incorrect!!!</p>
      </form>
    </main>
  );
};
export default SignInPage;
