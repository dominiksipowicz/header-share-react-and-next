const links = [
  { name: "Page A", href: "/page-a" },
  { name: "Page B", href: "/page-b" },
  { name: "Page C", href: "/page-c" },
];

export const Header = () => {
  return (
    <>
      <h2>Menu:</h2>
      <ul>
        <li>
          {links.map((link) => (
            <a href={link.href}>{link.name}</a>
          ))}
        </li>
      </ul>
    </>
  );
};
