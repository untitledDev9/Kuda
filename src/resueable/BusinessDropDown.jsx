import React from 'react'
import { IoMdHome } from "react-icons/io";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaCreditCard } from "react-icons/fa";
import { BsLightningFill } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { SiBento } from "react-icons/si";
import { RiFolderOpenFill } from "react-icons/ri";
import { GiArchiveRegister } from "react-icons/gi";
import { BsPhone } from "react-icons/bs";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { MdOutlineMobileOff } from "react-icons/md";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import PayBills from "../resueable/PayBills";
import { TbHexagonLetterK } from "react-icons/tb";

const BusinessDropDown = () => {
  return (
    <div className=" absolute top-14 shadow-[0_4px_12px_rgba(0,0,0,0.2)] rounded-[5px]">
    <div className=' flex bg-white w-[100%] rounded-[5px]'>
      <div className=' flex flex-col px-10 gap-5 py-7'>




        <PayBills
          iconBg="#00000026"
          icon={<IoMdHome color='#'/>}
          title="Discover Business"
        />

        <PayBills
          iconBg="#0ccaec25"
          icon={<GiArchiveRegister color='#'/>}
          title="Business Registration"
        />

        <PayBills
          iconBg="#40196D3e"
          icon={<TbHexagonLetterK size={20} color='#40196D'/>}
          title="Kuda Payroll"
        />

        <PayBills
          iconBg="#00000026"
          icon={<RiFolderOpenFill color='#'/>}
          title="Business API"
        />

        <PayBills
          iconBg="#2029ac25"
          icon={<SiBento color='#2029ac'/>}
          title="Payroll with Bento"
        />

        <PayBills
          iconBg="#c4871e25"
          icon={<IoIosPeople color='#c4871e'/>}
          title="Expense Accounts"
        />

        <PayBills
          iconBg="#00000026"
          icon={<FaCreditCard color='#'/>}
          title="Expense Card"
        />

        <PayBills
          iconBg="#00000026"
          icon={<IoMdHome color='#'/>}
          title="Discover Business"
        />













      </div>




      <div className='  bg-[#f3eeee] px-10 py-7 flex flex-col gap-5 rounded-tr-[5px] rounded-br-[5px] z-50'>
        <h1 className=' text-[#505050]'>PAYMENTS</h1>

        <PayBills
          iconBg="#31c41e25"
          icon={<RiTelegram2Fill color='#31c41e'/>}
          title="Send Money"
        />

        <PayBills
          iconBg="#0ccaec25"
          icon={<MdLiveTv color='#0ccaec'/>}
          title="TV"
        />

        <PayBills
          iconBg="#31c41e25"
          icon={<FaMobileAlt color='#31c41e'/>}
          title="Airtime & Internet Data"
        />


        <PayBills
          iconBg="#e6262625"
          icon={<BsLightningFill color='#e62626'/>}
          title="Electricity"
        />

        <PayBills
          iconBg="#0ccaec25"
          icon={<FaRegMoneyBillAlt color='#0ccaec'/>}
          title="Bill Payments"
        />

        <h1 className=' text-[#505050]'>CREDIT</h1>
        <PayBills
          iconBg="#00000026"
          icon={<TbMoneybag color='#'/>}
          title="Businedd Loan"
        />



        <h1 className=' text-[#505050]'>COLLECTIONS</h1>

        <PayBills
          iconBg="#31c41e25"
          icon={<TbDeviceLandlinePhone color='#'/>}
          title="softPOS"
        />

        <PayBills
          iconBg="#0ccaec25"
          icon={<FaFileInvoiceDollar color='#0ccaec'/>}
          title="Invoicing for Businedd"
        />

        <PayBills
          iconBg="#31c41e25"
          icon={<BsPhone color='#'/>}
          title="POS Machine"
        />

        <PayBills
          iconBg="#0ccaec25"
          icon={<MdOutlineMobileOff color='#'/>}
          title="Virtual POS"
        />


      </div>
    </div>
  </div>
  )
}

export default BusinessDropDown