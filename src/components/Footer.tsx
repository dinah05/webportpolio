export default function Footer() {
  return (
    <footer style={{
      display: 'flex',
      width: '100%',
      maxWidth: '1280px',
      padding: '24px 86px',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#FAFAFA',
      margin: '0 auto',
    }}>

      {/* 상단: 로고 + 저작권 */}
      <div style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <span style={{
          color: '#000',
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: 'normal',
          letterSpacing: '-0.48px',
        }}>
          YOON DAIN'S PORTPOLIO
        </span>

        <span style={{
          color: '#121212',
          fontFamily: '"Noto Sans KR", sans-serif',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: '26px',
        }}>
          © 2026 YOONDAIN. All rights reserved.
        </span>
      </div>

      {/* 구분선 */}
      <hr style={{
        width: '100%',
        border: 'none',
        borderTop: '1px solid #E0E0E0',
        margin: '16px 0',
      }} />

      {/* 하단: 설명 텍스트 + SNS 아이콘 */}
      <div style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <span style={{
          flex: '1 0 0',
          color: 'rgba(21, 20, 57, 0.40)',
          fontFamily: '"Noto Sans KR", sans-serif',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: '26px',
        }}>
          SNS 아이콘을 누르시면 제 작업물을 더 많이 확인하실수 있어요.
        </span>

        {/* SNS 아이콘 자리 (추후 교체 예정) */}
        <div style={{ display: 'flex', gap: '8px' }}>
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '6px',
                background: '#CDCDCD',
              }}
            />
          ))}
        </div>
      </div>

    </footer>
  );
}