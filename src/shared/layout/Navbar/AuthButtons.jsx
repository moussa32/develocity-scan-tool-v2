import CreateAccountModal from "@/shared/components/modals/CreateAccountModal";
import LoginModal from "@/shared/components/modals/LoginModal";
import { Button } from "@/shared/components/ui/button";
import { useState } from "react";

const AuthButtons = () => {
  let [isLoginOpen, setIsLoginOpen] = useState(false);
  let [isCreateAccountOpen, setIsCreateAccountOpen] = useState(false);

  function closeLoginModal() {
    setIsLoginOpen(false);
  }

  function openLoginModal() {
    setIsLoginOpen(true);
  }

  function closeModal() {
    setIsCreateAccountOpen(false);
  }

  function openModal() {
    setIsCreateAccountOpen(true);
  }
  return (
    <>
      <section className="flex items-center justify-center lg:justify-start lg:ltr:ml-[35px] lg:rtl:mr-[35px] gap-[10px] w-full">
        <Button
          variant="outline"
          onClick={openLoginModal}
          className="border-1 border-primary lg:ml-auto bg-transparent h-[42px] max-w-[160px] flex font-medium text-sm items-center w-full transition-all duration-200 ease-in-out justify-center text-primary hover:text-semiWhite hover:bg-primary"
        >
          Log In
        </Button>
        <Button
          onClick={openModal}
          className="h-[42px] max-w-[160px] flex items-center w-full font-medium text-sm transition-all duration-200 ease-in-out justify-center bg-primary text-white hover:text-primary hover:bg-white"
        >
          Create Account
        </Button>
      </section>
      <LoginModal isOpen={isLoginOpen} closeModal={closeLoginModal} />
      <CreateAccountModal
        isOpen={isCreateAccountOpen}
        closeModal={closeModal}
      />
    </>
  );
};

export default AuthButtons;
