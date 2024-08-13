import Image from "next/image";
export default function AuthenticationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 min-h-screen xl:h-screen">
      <div className="hidden xl:block">
        <Image
          src="/medical.png"
          alt="Sign-in/Sign-up pic"
          width={600}
          height={600}
          className="h-full w-screen"
        />
      </div>
      <div className="className">{children}</div>
    </div>
  );
}
