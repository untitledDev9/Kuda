
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
    <div className=''>
      <h1 className='hidden max-tablet:block px-6 font-bold text-[#40196D]'>Personal</h1>
      <div className=' absolute top-14 shadow-[0_4px_12px_rgba(0,0,0,0.2)]
      max-tablet:static max-tablet:shadow-[0_4px_12px_rgba(0,0,0,0)]
      '>
        <div className=' flex bg-white w-[100%] rounded-[5px]
        max-tablet:block
        '>
          <div className=' flex flex-col px-10 gap-5 py-7
          max-tablet:px-6 max-tablet:text-[13px]
          '>

            <PayBills
              iconBg="#6a007a25"
              icon={<IoMdHome color='#6a007a'/>}
              title="Discover Personal"
            />

            <PayBills
              iconBg="#31c41e25"
              icon={<RiTelegram2Fill color='#31c41e'/>}
              title="Transfer & Spend"
            />

            <PayBills
              iconBg="#c4871e25"
              icon={<HiSaveAs color='#c4871e'/>}
              title=" Save"
            />

            <PayBills
              iconBg="#6a007a25"
              icon={<GiNetworkBars color='#6a007a'/>}
              title="Investments"
            />

            <PayBills
              iconBg="#31c41e25"
              icon={<FaCreditCard color='#31c41e'/>}
              title="Kuda Card"
            />
          </div>
          <div className='  bg-[#b8b8b831] px-10 py-7 flex flex-col gap-5 w-[330px] rounded-tr-[5px] rounded-br-[5px]
            max-tablet:px-6 max-tablet:text-[13px] max-tablet:bg-white
            '>
            <h1 className=' text-[#505050] max-tablet:text-[10px]'>PAYMENTS</h1>

            <PayBills
              iconBg="#e6262625"
              icon={<BsLightningFill color='#e62626'/>}
              title="Electricity"
            />

            <PayBills
              iconBg="#31c41e25"
              icon={<FaMobileAlt color='#31c41e'/>}
              title="Airtime"
            />

            <PayBills
              iconBg="#0ccaec25"
              icon={<FaWifi color='#0ccaec'/>}
              title="Internet"
            />

            <PayBills
              iconBg="#6a007a25"
              icon={<IoMdGift color='#6a007a'/>}
              title="Gift Cards"
            />

            <PayBills
              iconBg="#c4871e25"
              icon={<TbWorldDollar color='#c4871e'/>}
              title="Cardless Payments"
            />

            <PayBills
              iconBg="#0ccaec25"
              icon={<MdLiveTv color='#0ccaec'/>}
              title="TV"
            />

            <PayBills
              iconBg="#e6262625"
              icon={<TbArrowBigUpFilled color='#e62626'/>}
              title="Betting"
            />

            <PayBills
              iconBg="#31c41e25"
              icon={<FaCar color='#31c41e'/>}
              title="Transport"
            />
            <h1 className=' text-[#505050] max-tablet:text-[10px]'>CREDIT</h1>

            <PayBills
              iconBg="#0ccaec25"
              icon={<VscIssueDraft color='#0ccaec'/>}
              title="Overdrafts"
            />

            <PayBills
              iconBg="#6a007a25"
              icon={<TbMoneybag color='#6a007a'/>}
              title="Loans"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalDropDown