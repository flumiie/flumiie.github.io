type NavigationTypes = 'dropdown' | 'direct';
type NavigationLinksType = {
  id: string;
  type: NavigationTypes;
  label: string;
}[]

interface DropdownProps {
  label: string;
  links: { id: string; uri: string; label: string }[]
}

interface NavbarLinkProps {
  type: 'dropdown' | 'direct';
  children: string;
}

const Dropdown = (props: DropdownProps) => {
  return (
    <div className='dropdown'>
      <button
        className="dropdown-button"
        onMouseOver={(e) => {
          (e.target as HTMLElement).style.textDecoration = 'underline';
        }}
        onMouseOut={(e) => {
          (e.target as HTMLElement).style.textDecoration = 'inherit';
        }}
      >{props.label}</button>
      <div className='dropdown-content'>
        {props.links.map(L => (
          <a key={L.id} href={L.uri}>{L.label}</a>
        ))}
      </div>
    </div>
  );
};

const NavbarLink = (props: NavbarLinkProps) => {
  if (props.type === 'dropdown') {
    return (
      <li>
        <Dropdown
          label={props.children}
          links={[
            {
              id: '1',
              uri: '/wip/hex-world',
              label: 'Hex World'
            },
            {
              id: '2',
              uri: '/wip/scrolling-canvas',
              label: 'Scrolling Canvas'
            },
            {
              id: '3',
              uri: '/wip/portal-plain',
              label: 'Portal (Plain)'
            },
            {
              id: '4',
              uri: '/wip/rubiks',
              label: 'Rubiks'
            }
          ]} />
      </li>
    );
  }

  return (
    <li
      onMouseOver={(e) => {
        (e.target as HTMLElement).style.textDecoration = 'underline';
      }}
      onMouseOut={(e) => {
        (e.target as HTMLElement).style.textDecoration = 'inherit';
      }}
    >
      <a href="/">
        {props.children}
      </a>
    </li>
  );

};

const Navbar = () => {
  const links: NavigationLinksType = [
    { id: '1', type: 'direct', label: 'HOME' },
    { id: '2', type: 'dropdown', label: 'WIP' },
    { id: '3', type: 'direct', label: 'CONTACTS' }
  ];

  return (
    <nav>
      <div className='nav-left'>
        <p>[LOGO]</p>
      </div>
      <div className='nav-right'>
        <ul>
          {links.map(L => (
            <NavbarLink
              key={L.id}
              type={L.type}
            >{L.label}</NavbarLink>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
