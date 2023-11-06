const CreateAccount = () => {
  return (
    <div className="min-h-[calc(100vh_-_397px)] bg-primaryBg py-24">
      <div className="w-full mx-auto bg-[#25293E] min-w-[660px] max-w-md border-t-[21px] border-primary transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl px-[58px] transition-all">
        <div className="flex flex-col h-full w-full max-w-[660px] mx-auto">
          <div className="flex justify-center flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="102.308"
              height="102.308"
              viewBox="0 0 102.308 102.308"
            >
              <path
                id="Path_797"
                data-name="Path 797"
                d="M354.714,285.894a20.173,20.173,0,0,1,18.569-12.288h30.242a20.173,20.173,0,0,1,18.569,12.288M408.565,235.8A20.162,20.162,0,1,1,388.4,215.641,20.162,20.162,0,0,1,408.565,235.8Zm30.242,12.6A50.4,50.4,0,1,1,388.4,198,50.4,50.4,0,0,1,438.808,248.4Z"
                transform="translate(-337.25 -197.25)"
                fill="none"
                stroke="#dfdfe4"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
            </svg>
            <h2 className="text-[#888888] text-[17px] font-sf mt-3">
              Edit Profile Picture
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-y-[26px] flex-1 mt-[31px]">
            <input
              className="h-[59.71px] w-full rounded-[10px] pl-[26px] bg-[#4B4F64] placeholder:text-[#E8EAEC] text-[17px] text-[#E8EAEC] appearance-none outline-none"
              placeholder="User Name"
            />
            <div className="grid grid-cols-2 gap-x-4">
              <input
                className="h-[59.71px] w-full rounded-[10px] pl-[26px] bg-[#4B4F64] placeholder:text-[#E8EAEC] text-[17px] text-[#E8EAEC] appearance-none outline-none"
                placeholder="Frist Name"
              />
              <input
                className="h-[59.71px] w-full rounded-[10px] pl-[26px] bg-[#4B4F64] placeholder:text-[#E8EAEC] text-[17px] text-[#E8EAEC] appearance-none outline-none"
                placeholder="Last Name"
              />
            </div>
            <input
              className="h-[59.71px] w-full rounded-[10px] pl-[26px] bg-[#4B4F64] placeholder:text-[#E8EAEC] text-[17px] text-[#E8EAEC] appearance-none outline-none"
              placeholder="Email"
            />
            <div className="flex gap-x-[18px]">
              <div className="rounded-lg bg-[#4B4F64] flex items-center justify-center min-w-[105.29px] placeholder:text-[#E8EAEC] text-[17px] text-[#E8EAEC]">
                (EG) +20
              </div>
              <input className="h-[59.71px] w-full rounded-[10px] pl-[26px] bg-[#4B4F64] placeholder:text-[#E8EAEC] text-[17px] text-[#E8EAEC] appearance-none outline-none" />
            </div>
            <input
              className="h-[59.71px] w-full rounded-[10px] pl-[26px] bg-[#4B4F64] placeholder:text-[#E8EAEC] text-[17px] text-[#E8EAEC] appearance-none outline-none"
              placeholder="Password"
            />
            <input
              className="h-[59.71px] w-full rounded-[10px] pl-[26px] bg-[#4B4F64] placeholder:text-[#E8EAEC] text-[17px] text-[#E8EAEC] appearance-none outline-none"
              placeholder="New Password"
            />
            <input
              className="h-[59.71px] w-full rounded-[10px] pl-[26px] bg-[#4B4F64] placeholder:text-[#E8EAEC] text-[17px] text-[#E8EAEC] appearance-none outline-none"
              placeholder="Confirm New Password"
            />
            <div className="flex justify-between items-center w-full mt-10">
              <button className="min-w-[209px] bg-transparent border-primary text-primary border-1 h-[49px] rounded-[2px]">
                Delete Account
              </button>
              <button className="min-w-[209px] bg-primary text-white border-primary border-1 h-[49px] rounded-[2px]">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
