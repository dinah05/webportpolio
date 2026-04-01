const experiences = [
  {
    period: '2025.03 - 2025.07',
    company: 'HR 인턴',
  },
  {
    period: '2024.06 - 2025.02',
    company: '경영지원팀 사원',
  },
  {
    period: '2020.02 - 2021.05',
    company: '경영지원팀 사원',
  },
];

export default function ProfessionalJourney() {
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
    }}>

      {/* 타이틀 */}
      <h2 style={{
        color: '#320C64',
        textAlign: 'center',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '32px',
        fontWeight: 700,
        lineHeight: 'normal',
        letterSpacing: '-0.4px',
        margin: 0,
      }}>
        Professional Journey
      </h2>

      {/* 설명 텍스트 */}
      <p style={{
        color: '#5A5A5A',
        textAlign: 'center',
        fontFamily: 'Pretendard, sans-serif',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '24px',
        letterSpacing: '-0.5px',
        margin: 0,
        whiteSpace: 'pre-line',
      }}>
        {`내용 어쩌구~`}
      </p>

      {/* 경력 리스트 */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '600px',
      }}>
        {experiences.map((exp, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              maxWidth: '600px',
              width: '100%',
              padding: '20px',
              justifyContent: 'space-between',
              alignItems: 'center',
              alignSelf: 'stretch',
              borderBottom: '1px solid #D0D0D0',
            }}
          >
            {/* 왼쪽: 날짜 + 회사명 */}
            <div style={{
              display: 'flex',
              width: '600px',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}>
              {/* 날짜 */}
              <span style={{
                color: '#8D8D8D',
                fontFamily: 'Pretendard, sans-serif',
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '24px',
              }}>
                {exp.period}
              </span>
              {/* 회사명 */}
              <span style={{
                color: '#000',
                fontFamily: 'Pretendard, sans-serif',
                fontSize: '16px',
                fontWeight: 700,
                lineHeight: '24px',
                letterSpacing: '-0.3px',
              }}>
                {exp.company}
              </span>
            </div>

            {/* 오른쪽: 로고 자리 */}
            <div style={{
              display: 'flex',
              width: '48px',
              height: '48px',
              padding: '8px 10px',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              aspectRatio: '1/1',
              borderRadius: '10px',
              border: '1px solid rgba(0,0,0,0.10)',
              background: '#FAFAFA',
              flexShrink: 0,
              color: '#8D8D8D',
              fontFamily: 'Pretendard, sans-serif',
              fontSize: '11px',
            }}>
              Logo
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}