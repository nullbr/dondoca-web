import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const SessionLinks = ({ sticky }) => {
  const { loading, accessToken } = useSelector((store) => store.sessions);

  console.log(loading, accessToken);

  return (
    <>
      {/* account */}
      <NavLink to="/signup" title="signup_button">
        <i
          className={`fa-regular fa-user text-4xl cursor-pointer hover:text-signature-gold ease-in duration-200 ${
            sticky ? "text-gray" : "text-white"
          }`}
        ></i>
      </NavLink>
    </>
  );
};
export default SessionLinks;
