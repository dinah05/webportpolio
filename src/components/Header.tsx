export default function Header() {
  return (
    <header style={{
      display: 'flex',
      width: '100%',
      maxWidth: '1280px',
      height: '72px',
      padding: '16px 32px',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: '#FDFDFD',
      margin: '0 auto',
    }}>
 
      {/* 로고 */}
      <a href="/" style={{
        display: 'flex',
        height: '20px',
        flexDirection: 'column',
        alignItems: 'flex-start',
        color: '#1A1A1A',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '16px',
        fontWeight: 700,
        textDecoration: 'none',
        letterSpacing: '0.04em',
      }}>
        YOON DAIN
      </a>
 
      {/* 네비게이션 */}
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
      }}>
        {['Work', 'About', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              color: '#1A1A1A',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: 'normal',
              letterSpacing: '-0.48px',
              textDecoration: 'none',
            }}
          >
            {item}
          </a>
        ))}
      </nav>
 
    </header>
  );
}
 