/* eslint-disable react/prop-types */

const Button = ({ text }) => {
  return (
    <div className="btn  btn-sm lg:btn-md btn-outline shadow-md capitalize   hover:bg-blue-300 hover:text-black  ">
      {text}
    </div>
  );
};

export default Button;
