import heroGraphic from '../assets/hero-graphic.png';

export default function Hero() {
  return (
    <section style={{
      display: 'flex',
      width: '1280px',
      height: '830px',
      paddingTop: '80px',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#FAF9F9',
      margin: '0 auto',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* 보라색 그래픽 */}
      <img
        src={heroGraphic}
        alt=""
        style={{
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          height: '100%',
          pointerEvents: 'none',
        }}
      />

      {/* 텍스트 영역 */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px',
        position: 'relative',
        zIndex: 1,
      }}>

        {/* 메인 타이틀 */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{
            width: '596px',
            color: '#320C64',
            textAlign: 'center',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '88px',
            fontWeight: 700,
            lineHeight: 'normal',
            letterSpacing: '-1.76px',
          }}>
            다인의 2026
          </span>
          <span style={{
            alignSelf: 'stretch',
            color: '#320C64',
            textAlign: 'center',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '88px',
            fontWeight: 700,
            lineHeight: 'normal',
            letterSpacing: '-1.76px',
          }}>
            PORTFOLIO
          </span>
        </div>

        {/* 설명 텍스트 */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
          <p style={{
            color: '#1A1A1A',
            textAlign: 'center',
            fontFamily: 'Pretendard, sans-serif',
            fontSize: '16px',
            fontWeight: 700,
            lineHeight: '24px',
            margin: 0,
          }}>
            복잡한 문제를 정리해, 실행 가능한 방향으로 만드는 PM
          </p>
          <p style={{
            color: '#1A1A1A',
            textAlign: 'center',
            fontFamily: 'Pretendard, sans-serif',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '24px',
            margin: 0,
          }}>
            데이터 기반 판단과 구조적 설계를 통해, 아이디어를 실제 제품으로 연결합니다.
          </p>
        </div>

        {/* CTA 버튼 */}
        <button style={{
          display: 'flex',
          padding: '12px 16px',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '6px',
          borderRadius: '8px',
          background: '#320C64',
          border: 'none',
          cursor: 'pointer',
          color: '#fff',
          fontFamily: 'Pretendard, sans-serif',
          fontSize: '16px',
          fontWeight: 600,
        }}>
          CTA →
        </button>

      </div>
    </section>
  );
}
