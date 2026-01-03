import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import FormatAlignRightOutlinedIcon from "@mui/icons-material/FormatAlignRightOutlined";

const Navbar = () => {
  return (
    <nav>
      <div className="w-full bg-white h-16 pl-[.5rem] pt-[0rem] pr-[0rem] pt-[0rem]">
        <div className="w-full h-[64px]">
          <div className=" w-full h-[64px]  flex items-center justify-between">
            {/* Left side */}
            <div className="   w-[48px] h-[48px] flex items-center justify-center">
              <MenuOutlinedIcon className="w-[24px] h-[24px] text-[rgb(0 0 0 / 87%)] font-normal text-[1.5rem] leading-1 tracking-normal" />
            </div>

            {/* Right Side */}

            <div className="   h-[64px] flex items-center justify-end">
              <div className="  h-[64px] flex items-center justify-center  border-l border-l-[#00000014]">
                 <div className="   w-[64px] h-[48px] flex items-center justify-center">
                <FormatAlignRightOutlinedIcon className="w-[24px] h-[24px] text-[rgb(0 0 0 / 87%)] font-normal text-[1.5rem] leading-[1.5rem] tracking-normal" />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
