const links = [
  { name: "Home Page (new - next.js)", href: "/" },
  { name: "Page A (new - next.js)", href: "/page-a" },
  { name: "Page B (old - React)", href: "/page-b" },
];

/**
 * optional Link prop accept Link Component from Next.js as a dependency injection
 */
export const Header = ({ Link = null }: any) => {
  return (
    <div style={{ border: "3px dotted gray", padding: "10px" }}>
      <h2>Menu React Component shared package:</h2>

      {links.map((link) => (
        <div key={link.name}>
          {Link !== null ? (
            <Link href={link.href}>{link.name}</Link>
          ) : (
            <a key={link.name} href={link.href}>
              {link.name}
            </a>
          )}

          <br />
        </div>
      ))}
    </div>
  );
};
