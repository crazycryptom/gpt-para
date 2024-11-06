import React, { useState } from "react";
import { Dialog } from "../common/Dialog";
import Login from "../login/Login";
import About from "../about";
import ContactUs from "../conatctus";
import { is } from "date-fns/locale";
import { IoMdLogIn } from "react-icons/io";

const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(false);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigation = [
    { name: "About Us", href: "#" },
    { name: "Contact Us", href: "#" },
  ];
  return (
    <div className="w-full">
      <div className="bg-white flex flex-col min-h-screen">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav
            aria-label="Global"
            className="flex items-center justify-between p-6 lg:px-8"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <p className="text-2xl font-bold text-[#103a44]">
                  Parakeet Legal
                </p>
              </a>
            </div>
            <>
              <div className="flex lg:hidden">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(true)}
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Open main menu</span>
                  {/* <Bars3Icon aria-hidden="true" className="h-6 w-6" /> */}
                </button>
              </div>
              {isLoginPage && (
                <div className="hidden lg:flex lg:gap-x-12">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-sm font-semibold leading-6 text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
              <div className="flex flex-1 justify-end">
                <div className="relative flex">
                  <img
                    onClick={() => setIsOpen(!isOpen)}
                    alt="User"
                    width={35}
                    height={35}
                    className="cursor-pointer rounded-full border shadow"
                    referrerPolicy="no-referrer"
                    src={
                      "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                    }
                  />
                </div>
              </div>
            </>
          </nav>
        </header>

        <div className="relative isolate px-6 pt-14 lg:px-8 flex-grow flex-col flex">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="mx-auto flex-grow flex flex-col items-center justify-center text-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              Welcome to Parakeet Legal!
            </h1>
            <p className="text-pretty mt-8 text-lg font-medium text-gray-500 sm:text-xl/8">
              Chat with your good medical assistant!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                onClick={() => { setDialogOpen(true) }}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </button>
            </div>
          </div>

        </div>

        <Dialog isOpen={isDialogOpen} onClose={() => setDialogOpen(false)}>
          <Login />
        </Dialog>
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
      <footer className="w-full bg-gradient-to-r from-gray-200 to-gray-100 py-4 shadow-md rounded-t-lg">
        <div className="mx-auto flex max-w-2xl items-center justify-center space-x-6 text-gray-600">
          <a href="#about" className="hover:text-gray-900 transition duration-300 ease-in-out">
            <span className="text-lg font-semibold">About Us</span>
          </a>
          <span className="text-gray-400">|</span>
          <a href="#contact" className="hover:text-gray-900 transition duration-300 ease-in-out">
            <span className="text-lg font-semibold">Contact Us</span>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
