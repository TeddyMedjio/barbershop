import Link from "next/link";

const Signature = () => {
  return (
    <div className="bg-white text-center py-1">
      <p className="text-center text-black font-inter">
        Copyright {new Date().getFullYear()} OZ Barbershop | Website by{" "}
        <Link href="https://medjio.me" className="font-medium" target="_blank">
          www.medjio.me
        </Link>
      </p>
    </div>
  );
};

export default Signature;
