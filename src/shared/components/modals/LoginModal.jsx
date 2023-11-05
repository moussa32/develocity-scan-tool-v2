import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import WelcomeLogo from "@assets/images/welcomeLogo.svg";
import { Button } from "../ui/button";

const LoginModal = ({ isOpen, closeModal }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center backdrop-blur justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full min-h-[745px] bg-[#25293E] min-w-[660px] max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex flex-col h-full  w-full max-w-[420px] mx-auto">
                  <div className="flex flex-col justify-center items-center pt-[162.7px]">
                    <img src={WelcomeLogo} alt="Welcome" />
                    <h1 className="text-[#E8EAEC] text-2xl font-['SF_Pro_Display_Bold'] mt-[27px] mb-[30px]">
                      Login
                    </h1>
                    <input
                      className="h-[38px] w-full rounded-[10px] py-3 pl-[17px] bg-white/20 text-[#E8EAEC] appearance-none outline-none"
                      placeholder="User Name"
                    />
                    <input
                      className="h-[38px] w-full mt-[30px] rounded-[10px] py-3 pl-[17px] bg-white/20 text-[#E8EAEC] appearance-none outline-none"
                      placeholder="Password"
                    />
                    <button className="text-primary text-right mt-[18px] self-end">
                      Forget Password
                    </button>
                  </div>
                  <div className="flex justify-between mt-[176.6px]">
                    <p className="text-[#888888]">
                      Don't have an account
                      <Button className="bg-transparent px-0 pl-2 hover:bg-transparent hover:text-white">
                        Create account
                      </Button>
                    </p>
                    <Button className="text-white w-full max-w-[142px]">
                      Login
                    </Button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default LoginModal;
