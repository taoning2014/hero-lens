import Image from "next/image";

export default function HeroLensLogo(props) {
  return (
    <div className={props.className}>
      <Image
        priority={true}
        src="/logo.JPG"
        width={512}
        height={512}
        className="block rounded-lg"
        alt="Logo of hero lens"
      />
    </div>
  );
}
