import { socials } from "../../../constants";
import { Link } from "react-router-dom";

const Soicals = () => {
  return (
    <ul className="w-[250px] md:flex gap-6 hidden">
      {socials.map((social) => (
        <li key={social.id} className="cursor-pointer">
          <Link to={social.link} target="_blank">
            <img
              src={social.icons}
              alt="icons"
              width={24}
              height={24}
              className="w-[35px] "
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Soicals;
