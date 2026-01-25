import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import FormatAlignRightOutlinedIcon from "@mui/icons-material/FormatAlignRightOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { useState } from "react";

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  console.log("OpenSidebar", openSidebar);

  return (
    <>
      <nav>
        <div className="w-full bg-white h-16 pl-[.5rem]   pr-[0rem] pt-[0rem] shadow-[0_2px_1px_-1px_#0003,0_1px_1px_#00000024,0_1px_3px_#0000001f]">
          <div className="  w-full h-[64px]">
            <div className="  !pl-[.5rem] w-full h-[64px]  flex items-center justify-between">
              {/* Left side */}
              <div
                onClick={() => setOpenSidebar(true)}
                className=" cursor-pointer p-[.75rem]  w-[48px] h-[48px] flex items-center justify-center"
              >
                <MenuOutlinedIcon className="w-[24px] h-[24px] text-[rgb(0 0 0 / 87%)] font-normal text-[1.5rem] leading-1 tracking-normal" />
              </div>

              {/* Right Side */}

              <div className="    h-[64px] flex items-center justify-end">
                <div className="  h-[64px] flex items-center justify-center  border-l border-l-[#00000014]">
                  <div className="relative  cursor-pointer  w-[64px] h-[48px] flex items-center justify-center">
                    <NotificationsActiveOutlinedIcon className="w-[24px] h-[24px] text-[rgb(0 0 0 / 87%)] font-normal text-[1.5rem] leading-[1.5rem] tracking-normal" />
                    <span
                      className="absolute w-[22px] h-[22px] top-[.5px] right-[9px] leading-[22px] flex 
             items-center justify-center text-[.75rem] font-semibold text-white bg-[#1976d2] rounded-[50%]"
                    >
                      5
                    </span>
                  </div>
                </div>
                <div className="  h-[64px] flex items-center justify-center  border-l border-l-[#00000014]">
                  <div className=" cursor-pointer   w-[64px] h-[48px] flex items-center justify-center">
                    <img
                      className="w-[40px] h-[40px] rounded-[50%] object-cover"
                      src="https://cdn.i-scmp.com/sites/default/files/styles/1020x680/public/d8/images/canvas/2023/02/11/24225ddf-5db6-42ce-b7fe-83f0ef924c0f_8ac2e259.jpg?itok=b1hY4hx9&v=1676104227"
                      alt=""
                    />
                  </div>
                </div>

                <div className="  h-[64px] flex items-center justify-center  border-l border-l-[#00000014]">
                  <div className="  cursor-pointer  w-[64px] h-[48px] flex items-center justify-center">
                    <FormatAlignRightOutlinedIcon className="w-[24px] h-[24px] text-[rgb(0 0 0 / 87%)] font-normal text-[1.5rem] leading-[1.5rem] tracking-normal" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {openSidebar === true ? (
          <div className="fixed top-0 left-0 z-[998] inset-0 opacity-1" />
        ) : null}

        <aside
          className={`fixed top-0 left-0 w-[280px] h-full z-[999] bg-white 
         transition-transform duration-300 ease-in-out
           ${openSidebar === true ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex flex-col h-[100%] w-[280px] bg-[#283144]">
            {/* Header */}
            <div
              className="w-[280px] h-[64px] flex flex-row items-center bg-[#212939] !py-[0rem] !pr-[1.1253rem] !pl-[1.5rem]
            min-h-[64px] max-h-[64px]"
            >
              <div className="w-[26px] h-[33.19px]">
                <svg
                  width="26"
                  height="26.19"
                  viewBox="0 0 33.74 33.99"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#fff"
                >
                  <title>icon</title>
                  <path
                    fill="currentColor"
                    d="M26.83,19.33c-.36.37-.73.71-1.09,1l.31,3.22a5.41,5.41,0,0,1-2.43,5.14L15.72,34l-.67-8.74a6.54,6.54,0,0,1-6.57-6.53L0,18.18l5-7.93a5.41,5.41,0,0,1,5.23-2.54l3.1.31q.49-.55,1.05-1.11C20.78.54,30.82-.62,33.48.26,34.37,2.93,33.2,13,26.83,19.33Zm-.45-12a3.77,3.77,0,1,0,0,5.33A3.77,3.77,0,0,0,26.38,7.36ZM2.82,23.72l3.24-3.24a8.24,8.24,0,0,0,7.11,7.1L10.5,30.25,7.74,33V29.46L2.41,31.23l1.78-5.32H.64Z"
                  />
                </svg>
              </div>

              <div className="cursor-pointer !ml-[1.5rem] ">
                <svg
                  width="60"
                  height="30"
                  viewBox="0 0 138.16 70.27"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#fff"
                >
                  <title>Logo</title>

                  <polygon
                    fill="currentColor"
                    points="0 54.1 11.05 54.1 11.03 32 28.82 32 30.83 23.22 11.07 23.22 11.03 8.8 34.48 8.8 36.85 0 0 0 0 54.1"
                  />

                  <path
                    fill="currentColor"
                    d="M44.34,34.92a8.78,8.78,0,0,0,.72,3.53A9.28,9.28,0,0,0,47,41.33a8.71,8.71,0,0,0,2.91,1.91,9.56,9.56,0,0,0,3.57.68,8.79,8.79,0,0,0,6.33-2.59,9.28,9.28,0,0,0,2-2.88,9,9,0,0,0,.72-3.53V15.77h10V34.92A19,19,0,0,1,71,42.37a19.43,19.43,0,0,1-4,6.09,18.7,18.7,0,0,1-6,4.06A18.37,18.37,0,0,1,53.63,54a19,19,0,0,1-7.52-1.48A19.36,19.36,0,0,1,40,48.46a19.05,19.05,0,0,1-4.14-6.05,18.47,18.47,0,0,1-1.52-7.49V15.77h10Z"
                  />

                  <path
                    fill="currentColor"
                    d="M93.81,25.85a8.74,8.74,0,0,0-3.53.72,9.19,9.19,0,0,0-2.88,1.94,8.68,8.68,0,0,0-1.91,2.88,8.22,8.22,0,0,0-.61,3.53V54H74.65V34.92A19.1,19.1,0,0,1,80.2,21.38a19.57,19.57,0,0,1,6.08-4.1,18.51,18.51,0,0,1,7.45-1.51H96V25.85Z"
                  />

                  <path
                    fill="currentColor"
                    d="M138.16,15.77v36a18.35,18.35,0,0,1-1.59,7.2,19.2,19.2,0,0,1-4.07,5.9,18.8,18.8,0,0,1-13.28,5.4V60.34a8.34,8.34,0,0,0,3.38-.69,8.84,8.84,0,0,0,2.78-1.87,9.41,9.41,0,0,0,1.9-2.77,9.06,9.06,0,0,0,.8-3.39,16.87,16.87,0,0,1-4.25,1.77,18.11,18.11,0,0,1-4.68.61,18.48,18.48,0,0,1-7.45-1.51,19.84,19.84,0,0,1-6.12-4.11,19.51,19.51,0,0,1-4.18-6,18,18,0,0,1-1.55-7.42V15.77h10V34.92a9.37,9.37,0,0,0,2.74,6.34,9,9,0,0,0,9.86,1.87,9.25,9.25,0,0,0,4.82-4.79,8.33,8.33,0,0,0,.72-3.42V15.77Z"
                  />
                </svg>
              </div>
            </div>

            {/* Profile & Routes */}

            <div className="w-[280px] h-[469px] flex-auto items-start content-start">
              <div className="overflow-hidden w-inherit h-inherit max-w-inherit max-h-inherit">
                {/* Profile Div */}

                <div className="w-full h-[200px] flex flex-col items-center bg-[#212939] pt-[.5rem] pb-[1rem]">
                  <img
                    src="https://cdn.i-scmp.com/sites/default/files/styles/1020x680/public/d8/images/canvas/2023/02/11/24225ddf-5db6-42ce-b7fe-83f0ef924c0f_8ac2e259.jpg?itok=b1hY4hx9&v=1676104227"
                    alt=""
                    className="block h-[72px] w-[72px] rounded-[50%] object-cover "
                  />
                  <h4 className="whitespace-nowrap !mt-[.75rem] text-[1rem] text-white">
                    David Smith
                  </h4>

                  <h5 className="whitespace-nowrap text-[#ffffffb3]   !mb-[.75rem] text-[.75rem]">
                    david.smith@example.com
                  </h5>

                  <div className="flex flex-row whitespace-nowrap items-center justify-center  ">
                    <div className="w-[48px] h-[48px] flex items-center justify-center">
                      <div className="w-[32px] h-[32px] leading-[2rem] flex items-center justify-center">
                        <AssignmentOutlinedIcon className="w-[18px] h-[18px] text-[1.125rem] leading-[1.125rem] text-white" />
                      </div>
                    </div>

                    <div className="w-[48px] h-[48px] flex items-center justify-center">
                      <div className="w-[32px] h-[32px] leading-[2rem] ml-[.25rem] flex items-center justify-center">
                        <DateRangeOutlinedIcon className="w-[18px] h-[18px] text-[1.125rem] leading-[1.125rem] text-white" />
                      </div>
                    </div>


                    <div className="w-[48px] h-[48px] flex items-center justify-center">
                      <div className="w-[32px] h-[32px] leading-[2rem] ml-[.25rem] flex items-center justify-center">
                        <ExitToAppOutlinedIcon className="w-[18px] h-[18px] text-[1.125rem] leading-[1.125rem] text-white" />
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </nav>
    </>
  );
};

export default Navbar;
