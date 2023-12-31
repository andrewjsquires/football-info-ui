"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { Auth } from "aws-amplify";
import { useRouter } from "next/navigation";
import { title } from "@/components/primitives";

function ChangePassword() {
  const [pass, setPass] = React.useState({
    code: "",
    password: "",
  });

  const router = useRouter();

  const searchParams = useSearchParams();

  async function changePassword() {
    const email = searchParams.get("email");
    try {
      await Auth.forgotPasswordSubmit(email, pass.code, pass.password);
      router.push("/auth/sign-in");
    } catch (error) {
      console.log("error changing password", error);
    }
  }
  return (
    <>
      <div className={title()}>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Change Password
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              changePassword();
            }}
          >
            <div>
              <label
                htmlFor="code"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Code
              </label>
              <div className="mt-2">
                <input
                  id="code"
                  name="code"
                  type="text"
                  autoComplete="code"
                  required
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val !== "") {
                      setPass({ ...pass, code: val });
                    }
                  }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                New Password
              </label>

              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val !== "") {
                      setPass({ ...pass, password: val });
                    }
                  }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Change Password
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            No luck?{" "}
            <a
              href="/auth/forgot-password"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Try again.
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default ChangePassword;