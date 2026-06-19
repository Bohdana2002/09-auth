"use client";
import { useRouter } from "next/navigation";
import css from "./SignUpPage.module.css";
import { register, RegisterUserData } from "@/lib/api/clientApi";
import { useState } from "react";
import { useAuthStore } from "@/lib/store/authStore";

const SignUpPage = () => {
  const router = useRouter();
  const [isError, setIsError] = useState(false);
  const setUser = useAuthStore((state) => state.setUser);
  const handleSubmit = async (formData: FormData) => {
    try {
      const formValues = Object.fromEntries(
        formData,
      ) as unknown as RegisterUserData;
      const res = await register(formValues);
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
      <h1 className={css.formTitle}>Sign up</h1>
      <form className={css.form} action={handleSubmit}>
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
            Register
          </button>
        </div>
        <p className={css.error}>Error</p>
      </form>
    </main>
  );
};
export default SignUpPage;
