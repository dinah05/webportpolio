import { useState } from 'react';

const cards = [
  { rotate: 'rotate(18.985deg)', zIndex: 1, label: '이미지1' },
  { rotate: 'none',              zIndex: 2, label: '이미지2' },
  { rotate: 'rotate(-14.829deg)',zIndex: 1, label: '이미지3' },
];

export default function AboutMe() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section style={{
      width: '100%',
      maxWidth: '1280px',
      height: '1035px',
      margin: '0 auto',
      background: '#FAF9F9',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '48px',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* 배경 그라데이션 SVG */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 0,
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1275" height="626" viewBox="0 0 1275 626" fill="none">
          <g filter="url(#filter0_f_132_205)">
            <path d="M170.196 214.405C138.283 238.964 119.516 273.753 120.632 313.594C121.597 353.29 142.36 394.782 175.745 426.464C209.129 458.146 251.65 476.711 291.343 475.598C331.188 474.63 364.947 454.069 387.804 420.915C387.804 420.915 387.804 420.915 387.804 420.915C393.276 411.508 400.177 401.466 407.477 391.813C542.016 200.013 854.26 154.872 1086.03 353.823C1098.63 363.402 1111.31 373.62 1124.05 384.508C1115.09 370.346 1106.04 356.676 1096.88 343.465C953.441 85.42 522.198 -46.9269 220.457 176.758C203.632 188.072 186.537 200.812 170.196 214.405Z" fill="url(#paint0_linear_132_205)" fillOpacity="0.35"/>
          </g>
          <defs>
            <filter id="filter0_f_132_205" x="-29.415" y="-87.1644" width="1303.47" height="712.81" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_132_205"/>
            </filter>
            <linearGradient id="paint0_linear_132_205" x1="295.435" y1="120.579" x2="1132.9" y2="240.438" gradientUnits="userSpaceOnUse">
              <stop stopColor="#9694FF"/>
              <stop offset="1" stopColor="#713FC6"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 콘텐츠 */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '48px',
        position: 'relative',
        zIndex: 1,
      }}>

        {/* 제목 */}
        <h2 style={{
          color: '#320C64',
          textAlign: 'center',
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '32px',
          fontWeight: 700,
          lineHeight: '150%',
          letterSpacing: '-0.96px',
          margin: 0,
        }}>
          About me
        </h2>

        {/* 설명 텍스트 */}
        <p style={{
          color: '#1A1A1A',
          textAlign: 'center',
          fontFamily: 'Pretendard, sans-serif',
          fontSize: '16px',
          fontWeight: 400,
          lineHeight: '24px',
          margin: 0,
          whiteSpace: 'pre-line',
        }}>
          {`기획은 감이 아니라, 구조에서 나온다고 믿습니다. 복잡한 상황일수록 먼저 구조를 정리합니다.\n무엇이 핵심 문제인지 정의하고, 선택의 기준을 세운 뒤 실행합니다.\n데이터 기반으로 가설을 검증하고, 기능 단위로 구조를 설계하며, 실제 제품으로 연결하는 과정까지 책임집니다.`}
        </p>

        {/* 카드 3장 */}
        <div style={{
          width: '398px',
          height: '258px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}>
          {cards.map((card, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                width: '200px',
                height: '258px',
                padding: '8px',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '8px',
                borderRadius: '12px',
                background: '#FFF',
                boxShadow: '-6px 6px 15px 0 rgba(0,0,0,0.18)',
                position: 'absolute',
                left: `${i * 90}px`,
                transform: hovered === i ? 'none' : card.rotate,
                transition: 'transform 0.3s ease',
                zIndex: hovered === i ? 10 : card.zIndex,
                cursor: 'pointer',
                display: 'flex',
              }}
            >
              {/* 이미지 자리 */}
              <div style={{
                width: '100%',
                flex: 1,
                borderRadius: '8px',
                background: '#E0E0E0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#999',
                fontSize: '12px',
                fontFamily: 'Pretendard, sans-serif',
              }}>
                {card.label}
              </div>
            </div>
          ))}
        </div>

        {/* 하단 박스 3개 */}
        <div style={{
          display: 'flex',
          gap: '25px',
          width: '100%',
          maxWidth: '1108px',
        }}>
          {['박스 1', '박스 2', '박스 3'].map((box, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                padding: '33px 33px 1px 33px',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '12px',
                flex: '1 0 0',
                borderRadius: '16px',
                border: '1px solid #E5E7EB',
                background: '#FDFDFD',
              }}
            >
              <p style={{
                fontFamily: 'Pretendard, sans-serif',
                fontSize: '14px',
                color: '#1A1A1A',
                margin: 0,
              }}>
                {box} 내용
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}