
const NavLinks = () => {
  return (
    <div>
      <link
        href="#"
        className="px-6 transition-colors hover:text-blue"
      >
        Home
      </link>
      <link
        href="#"
        className="px-6 transition-colors hover:text-blue"
      >
        Invoices
      </link>
      <link
        href="#"
        className="px-6 py-1 text-blue border rounded-full border-blue transition-colors hover:bg-blue hover:text-white"
      >
        Create
      </link>
    </div>
  );
};

export default NavLinks;
