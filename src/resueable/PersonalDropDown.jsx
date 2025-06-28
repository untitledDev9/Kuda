
import PayBills from '../resueable/PayBills';
import { IoMdHome } from "react-icons/io";
import { RiTelegram2Fill } from "react-icons/ri";
import { HiSaveAs } from "react-icons/hi";
import { GiNetworkBars } from "react-icons/gi";
import { FaCreditCard } from "react-icons/fa";
import { BsLightningFill } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { IoMdGift } from "react-icons/io";
import { TbWorldDollar } from "react-icons/tb";
import { MdLiveTv } from "react-icons/md";
import { TbArrowBigUpFilled } from "react-icons/tb";
import { FaCar } from "react-icons/fa";
import { VscIssueDraft } from "react-icons/vsc";
import { TbMoneybag } from "react-icons/tb";

const PersonalDropDown = () => {
  return (
    <div >
      <h1 className='hidden max-tablet:block px-6 font-bold text-[#40196D]'>Personal</h1>
      <div className=' absolute top-14 shadow-[0_4px_12px_rgba(0,0,0,0.2)]
      max-tablet:static max-tablet:shadow-[0_4px_12px_rgba(0,0,0,0)]
      '>
        <div className=' flex bg-white w-[100%] 
        max-tablet:block
        '>
          <div className=' flex flex-col px-10 gap-5 py-7
          max-tablet:px-6 max-tablet:text-[13px]
          '>

            <PayBills
              iconBg=""
              icon={<IoMdHome />}
              title="Discover Personal"
            />

            <PayBills
              iconBg=""
              icon={<RiTelegram2Fill />}
              title="Transfer & Spend"
            />

            <PayBills
              iconBg=""
              icon={<HiSaveAs />}
              title=" Save"
            />

            <PayBills
              iconBg=""
              icon={<GiNetworkBars />}
              title="Investments"
            />

            <PayBills
              iconBg=""
              icon={<FaCreditCard />}
              title="Kuda Card"
            />
          </div>
          <div className='  bg-[#b8b8b831] px-10 py-7 flex flex-col gap-5
            max-tablet:px-6 max-tablet:text-[13px] max-tablet:bg-white
            '>
            <h1 className=' text-[#505050] max-tablet:text-[10px]'>PAYMENTS</h1>

            <PayBills
              iconBg=""
              icon={<BsLightningFill />}
              title="Electricity"
            />

            <PayBills
              iconBg=""
              icon={<FaMobileAlt />}
              title="Airtime"
            />

            <PayBills
              iconBg=""
              icon={<FaWifi />}
              title="Internet"
            />

            <PayBills
              iconBg=""
              icon={<IoMdGift />}
              title="Gift Cards"
            />

            <PayBills
              iconBg=""
              icon={<TbWorldDollar />}
              title="Cardless Payments"
            />

            <PayBills
              iconBg=""
              icon={<MdLiveTv />}
              title="TV"
            />

            <PayBills
              iconBg=""
              icon={<TbArrowBigUpFilled />}
              title="Betting"
            />

            <PayBills
              iconBg=""
              icon={<FaCar />}
              title="Transport"
            />
            <h1 className=' text-[#505050] max-tablet:text-[10px]'>CREDIT</h1>

            <PayBills
              iconBg=""
              icon={<VscIssueDraft />}
              title="Overdrafts"
            />

            <PayBills
              iconBg=""
              icon={<TbMoneybag />}
              title="Loans"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalDropDown