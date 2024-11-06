"use client";

import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
declare global {
  interface Window {
    gapi: any;
  }
}

const Login: React.FC = () => {
  const [userInfo, setUserInfo] = useState(null);
  const routes = useRouter();
  const [loading, setLoading] = useState(false);
  const [secret, setSecret] = useState(""); // State for the secret input
  const [isSecretCorrect, setIsSecretCorrect] = useState(false); // State to track if the secret is correct
  const [error, setError] = useState(""); // State for error messages

  const handleGoogleLogin = async (accessToken: string) => {
    try {
      const userInfoResponse = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setUserInfo(userInfoResponse.data);
      localStorage.setItem("user", JSON.stringify(userInfoResponse.data));
      routes.push("/chat");
      console.log("User Info:", userInfoResponse.data);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: (response: any) => {
      console.log("Response:", response);
      console.log("Login Success - ID Token:", response.access_token);
      handleGoogleLogin(response.access_token).catch((error) => {
        console.error("Error handling Google login:", error);
      });
    },
    onError: () => {
      console.log("Login Failed");
    },
    scope: "openid profile email",
  });

  const handleSecretSubmit = () => {
    if (secret === "TechHiveAI") {
      setIsSecretCorrect(true);
      setError(""); // Clear any error messages
    } else {
      setIsSecretCorrect(false);
      setError("Incorrect secret key. Please try again.");
    }
  };

  return (
    <div>
      <section className="!font-inter max-w-2xl">
        <div className="mx-auto flex w-full flex-col items-center justify-center py-8 lg:py-0">
          <a href="#" className="mb-6 flex items-center text-2xl font-extrabold text-gray-900">
            Parakeet Legal
          </a>
          <div className="w-full rounded-lg bg-white md:mt-0 xl:p-0">
            <div className="">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900">
                Sign in to your account
              </h1>

              {!isSecretCorrect ? (
                <>
                  <div className="mt-5 space-y-4 md:space-y-6">
                    <input
                      type="text"
                      value={secret}
                      onChange={(e) => setSecret(e.target.value)}
                      placeholder="Enter Secret Key"
                      className="w-full rounded-md border p-2 text-sm"
                    />
                    {error && (
                      <div className="mt-2 flex items-center gap-2 rounded-md bg-red-50 px-4 py-2 text-sm text-red-600 shadow-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-red-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-8-4a.75.75 0 00-.75.75v2.5a.75.75 0 001.5 0v-2.5A.75.75 0 0010 6zm0 7.25a.75.75 0 100 1.5.75.75 0 000-1.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{error}</span>
                      </div>
                    )}
                    <button
                      onClick={handleSecretSubmit}
                      className="w-full rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-4 py-2 text-white font-semibold shadow-md transition-transform transform-gpu hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75"
                    >
                      Submit
                    </button>
                    <button
                      onClick={() => routes.push("https://quickbooks/buy_access")}
                      className="w-full rounded-lg bg-gradient-to-r from-green-500 to-teal-500 px-4 py-2 mt-4 text-white font-semibold shadow-md transition-transform transform-gpu hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75"
                    >
                      Buy Access
                    </button>

                  </div>
                </>
              ) : (
                <div className="mt-5 space-y-4 md:space-y-6">
                  <button
                    type="button"
                    onClick={() => {
                      setLoading(true);
                      googleLogin();
                    }}
                    aria-label="Sign in with Google"
                    className="border-button-border-light font-inter flex w-full items-center justify-center rounded-md border bg-white p-0.5 pr-3"
                    disabled={loading}
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-l bg-white">
                      {loading ? (
                        <div className="loader h-5 w-5 animate-spin rounded-full border-2 border-gray-500 border-t-transparent"></div>
                      ) : (
                        <img width={20} src="/google.png" alt="Google Logo" />
                      )}
                    </div>
                    <span className="text-google-text-gray text-sm tracking-wider">
                      {loading ? "Loading..." : "Sign in with Google"}
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;