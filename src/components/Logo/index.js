import NextImage from "next/image";

export const Logo = ({
  src = "/assets/img/Logo.svg",
  alt = "Logo",
  ...rest
}) => {
  return (
    <NextImage priority alt={alt} src={src} width={39} height={39} {...rest} />
  );
};

export default Logo;
