import Button from "../Components/Shared/Button";
import { FcHome, FcPhone } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import Header from "../Components/Shared/Header";
import { toast } from "react-toastify";

const Contact = () => {
  return (
    <div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <Header text="Contact Us" />
      </div>
      <div className="hero md:min-h-screen">
        <div className="hero-content flex flex-col lg:flex-row  lg:gap-40">
          <div>
            <form className="border-2 border-blue-300 rounded-lg shadow-lg shadow-blue-300 bg-blue-200">
              <div data-aos="fade-down" data-aos-duration="2000">
                <p className=" card-body pb-2 text-2xl font-bold underline text-black">
                  Message Us :
                </p>
              </div>
              <div data-aos="fade-up" data-aos-duration="2000">
                <div className="card-body pb-2 flex-col md:flex-row gap-5 ">
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="Enter Your Name.."
                      className="input input-bordered "
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="Enter your email.."
                      className="input input-bordered "
                      required
                    />
                  </div>
                </div>
                <div className="card-body pt-2 pb-0">
                  <div className="form-control w-full">
                    <input
                      type="text"
                      placeholder="Enter Subject.."
                      className="input input-bordered "
                      required
                    />
                  </div>
                </div>
                <div className="card-body pt-4 gap-4">
                  <div className="form-control w-full">
                    <textarea
                      placeholder="Message.."
                      className="textarea textarea-bordered textarea-lg w-full max-w-lg "
                    ></textarea>
                  </div>
                  <div
                    onClick={() =>
                      toast("Your Message was sent successfully !")
                    }
                    className="form-control"
                  >
                    <Button text="Send" />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="p-6 md:p-14 border-2 border-blue-300 rounded-lg shadow-lg shadow-blue-300 bg-blue-200">
            <div data-aos="fade-down" data-aos-duration="2000">
              <h1 className="text-2xl font-bold text-black underline">
                Office Address :
              </h1>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000">
              <div className="py-6 flex gap-3">
                <span className="pt-2">
                  <FcHome className="text-3xl" />
                </span>
                <div>
                  <p className="text-xl">Satarkul,Badda, Dhaka.</p>
                  <p className="">Dhaka, PO 2941</p>
                </div>
              </div>
              <div className="py-6 flex gap-3">
                <span className="pt-2">
                  <FcPhone className="text-3xl" />
                </span>
                <div>
                  <p className="text-xl">+880 178 554 8761</p>
                  <p className="">Mon to Fri 10am to 6pm</p>
                </div>
              </div>
              <div className="py-6 flex gap-3">
                <span className="pt-2">
                  <MdEmail className="text-3xl text-red-500" />
                </span>
                <div>
                  <p className="text-xl ">support@rhr-tms.com</p>
                  <p className="">Send us your query anytime!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
