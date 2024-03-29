import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
const Faqsec = () => {
  const [show, setShow] = useState(false)
  const [para2, setPara2] = useState(false)
  const [para3, setPara3] = useState(false)
  const [para4, setPara4] = useState(false)
  const [para5, setPara5] = useState(false)
  const [para6, setPara6] = useState(false)

  // {colorchange ? "Navbar_main colorchange" : "Navbar_main"}>
  return (
    <div className='faq_section'>
      <h1>FAQ</h1>
      <p className='faq_para'>Below we’ve provided a bit of ICO, ICO Token, cryptocurrencies, and few others. If you have any other questions, please get in touch.</p>
      <div className="faq_b">
        <div className="faq_buttons">
          <button>
            <span>When will BuyCoin be Listed on exchanges ?</span>
            <FaPlus className={show ?  "plus_icon show" : "plus_icon hide"} onClick={() => setShow(!show)}/>
          </button>
          {show && <p >The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>}
        </div>
        <div className="faq_buttons">
          <button>
            <span>When will BuyCoin be Listed on exchanges ?</span>
            <FaPlus className='plus_icon'  onClick={() => setPara2(!para2)}/>
          </button>
          {para2 &&<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>}
        </div>
        <div className="faq_buttons">
          <button>
            <span>When will BuyCoin be Listed on exchanges ?</span>
            <FaPlus className='plus_icon'  onClick={() => setPara3(!para3)}/>
          </button>
          {para3 &&<p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always.</p>}
        </div>
        <div className="faq_buttons">
          <button>
            <span>When will BuyCoin be Listed on exchanges ?</span>
            <FaPlus className='plus_icon'  onClick={() => setPara4(!para4)}/>
          </button>
          {para4 &&<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet</p>}
        </div>
        <div className="faq_buttons">
          <button>
            <span>When will BuyCoin be Listed on exchanges ?</span>
            <FaPlus className='plus_icon'  onClick={() => setPara5(!para5)}/>
          </button>
          {para5 &&<p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>}
        </div>
        <div className="faq_buttons">
          <button>
            <span>When will BuyCoin be Listed on exchanges ?</span>
            <FaPlus className='plus_icon'  onClick={() => setPara6(!para6)}/>
          </button>
          {para6 &&<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>}
        </div>
      </div>
    </div>
  )
}
export default Faqsec