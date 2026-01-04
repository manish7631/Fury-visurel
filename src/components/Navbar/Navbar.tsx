import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import FormatAlignRightOutlinedIcon from "@mui/icons-material/FormatAlignRightOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
 

const Navbar = () => {

  

 

  return (
     <>
     
     <nav>
      <div className="w-full bg-white h-16 pl-[.5rem] pt-[0rem] pr-[0rem] pt-[0rem] shadow-[0_2px_1px_-1px_#0003,0_1px_1px_#00000024,0_1px_3px_#0000001f]">
        <div className="  w-full h-[64px]">
          <div className="  !pl-[.5rem] w-full h-[64px]  flex items-center justify-between">
            {/* Left side */}
            <div  onClick={() => setOpenSidebar(true)}  className=" cursor-pointer p-[.75rem]  w-[48px] h-[48px] flex items-center justify-center">
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

       
      
    </nav>



     </>
  );
};

export default Navbar;
