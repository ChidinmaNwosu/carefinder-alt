export default function AdminLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen lg:h-screen">
      <div className="hidden lg:block">
        <img src="/sign-in.png" alt="Sign-in/Sign-up pic" className="h-full w-screen" />
      </div>
      <div className="className">
        {children}
      </div>

    </div>;
  }
