import './ProjectCard.css';

const projects = [
  {
    tags: ['안드로이드', '기술스택'],
    title: '링큐',
    description: '프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명.',
  },
  {
    tags: ['안드로이드', '기술스택'],
    title: '링큐',
    description: '프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명.',
  },
  {
    tags: ['안드로이드', '기술스택'],
    title: '링큐',
    description: '프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명.',
  },
  {
    tags: ['안드로이드', '기술스택'],
    title: '링큐',
    description: '프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명.',
  },
  {
    tags: ['안드로이드', '기술스택'],
    title: '링큐',
    description: '프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명.',
  },
];

export default function Project() {
  return (
    <section style={{
      width: '100%',
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '80px 86px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '48px',
      background: '#FAF9F9',
    }}>

      {/* 타이틀 */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
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
          Project
        </h2>
        <p style={{
          color: '#5A5A5A',
          textAlign: 'center',
          fontFamily: 'Pretendard, sans-serif',
          fontSize: '16px',
          fontWeight: 400,
          lineHeight: '24px',
          letterSpacing: '-0.5px',
          margin: 0,
        }}>
          진행해왔던 대표 프로젝트를<br />소개합니다당 어쩌고
        </p>
      </div>

      {/* 카드 그리드 - 가로 간격 24px, 세로 간격 28px */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, minmax(0, 304px))',
        justifyContent: 'center',
        columnGap: '24px',
        rowGap: '28px',
      }}>
        {projects.map((project, i) => (
          <div key={i} className="card">
            {/* 이미지 */}
            <div className="card-image" />

            {/* 태그 */}
            <div className="tag-container">
              {project.tags.map((tag, j) => (
                <span key={j} className="tag">{tag}</span>
              ))}
            </div>

            {/* 타이틀 */}
            <h3 className="title">{project.title}</h3>

            {/* 설명 */}
            <p className="description">{project.description}</p>

            {/* 버튼 */}
            <button className="button">
              더 알아보기
              <svg viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 6H13M13 6L8 1M13 6L8 11" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        ))}
      </div>

    </section>
  );
}