import { Link, useResolvedPath } from "react-router-dom";
import { ScrollLinkProps } from "@interfaces";

const ScrollLink = ({ to, text, compareHash, ...props }: ScrollLinkProps) => {
  const { hash } = useResolvedPath(to);
  const activeClassName = (hash === compareHash)
    ? `${props.className} ${props.className}--active`
    : `${props.className}`;
  const className = compareHash ? activeClassName : props.className;

  const handleScroll = () => {
    const section = document.getElementById(hash.slice(1));
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Link
      to={`/${to}`}
      className={className}
      onClick={handleScroll}
    >
      {props.span ? <span>{text}</span> : text}
      {props.children}
    </Link>
  );
};

export default ScrollLink;
