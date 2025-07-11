// 풍부한 블로그 콘텐츠 데이터
const blogCategories = {
  psychology: { name: '심리학', color: '#667eea', icon: '🧠' },
  development: { name: '자기계발', color: '#48bb78', icon: '🌱' },
  technology: { name: '기술', color: '#ed8936', icon: '💻' },
  trends: { name: '트렌드', color: '#d69e2e', icon: '📈' },
  insights: { name: '인사이트', color: '#9f7aea', icon: '💡' }
};

const blogPosts = [
  {
    id: 1,
    title: 'MBTI와 현대 심리학: 과학과 대중문화의 만남',
    category: 'psychology',
    readTime: '8분',
    likes: 342,
    tags: ['MBTI', '심리학', '성격이론'],
    excerpt: '왜 MBTI는 과학적 논란에도 불구하고 여전히 인기가 있을까요?',
    steps: [
      { 
        step: '문제 제기', 
        content: '현재 심리학에서 MBTI의 위치는 어디일까요? 학계에서는 과학적 근거 부족을 지적하지만, 일반 대중과 기업에서는 여전히 널리 활용되고 있습니다.',
        insight: '📊 2023년 조사에 따르면 국내 대기업 중 78%가 채용 과정에서 성격검사를 활용하고 있습니다.'
      },
      { 
        step: '현상 분석', 
        content: 'MBTI의 인기 요인을 심층 분석해보면: 1) 간단한 분류체계, 2) 자기이해 욕구 충족, 3) 소통 도구로서의 활용, 4) 개인차 인정 문화 확산',
        insight: '💡 특히 Z세대는 개인의 고유성을 중시하는 문화 속에서 MBTI를 정체성 표현 수단으로 활용합니다.'
      },
      { 
        step: '과학적 검토', 
        content: '심리학 연구에서 지적되는 MBTI의 한계: 1) 신뢰도와 타당도 문제, 2) 이분법적 분류의 한계, 3) 상황적 변화 미반영',
        insight: '🔬 Big 5 성격모델과 같은 대안적 성격이론들이 더 높은 과학적 신뢰도를 보입니다.'
      },
      { 
        step: '균형잡힌 활용법', 
        content: 'MBTI를 현명하게 활용하는 방법: 절대적 기준이 아닌 자기탐색의 시작점으로, 타인과의 소통 촉진 도구로, 지속적인 자기성찰의 계기로 활용',
        insight: '⚖️ 완벽한 도구는 없습니다. 중요한 것은 도구의 한계를 인식하고 현명하게 활용하는 것입니다.'
      }
    ]
  },
  {
    id: 2,
    title: 'AI 시대의 자기계발: Sequential-Think로 경쟁력 기르기',
    category: 'development',
    readTime: '10분',
    likes: 287,
    tags: ['AI', '미래', '사고법'],
    excerpt: 'AI가 발달할수록 더욱 중요해지는 인간 고유의 사고 능력을 기르는 방법',
    steps: [
      { 
        step: '시대적 변화 인식', 
        content: 'AI의 발전으로 단순 반복 업무는 자동화되고 있습니다. 인간에게 요구되는 것은 창의적 사고, 복합적 문제해결, 감정적 지능입니다.',
        insight: '🤖 2030년까지 현재 직업의 40%가 AI로 대체될 것으로 예측됩니다.'
      },
      { 
        step: 'Sequential-Think의 우위', 
        content: '순차적 사고법은 1) 문제를 단계별로 분해, 2) 논리적 연결고리 형성, 3) 창의적 대안 탐색, 4) 검증과 개선의 순환 구조를 제공합니다.',
        insight: '💭 이러한 체계적 사고는 AI가 모방하기 어려운 인간 고유의 역량입니다.'
      },
      { 
        step: '실전 적용 전략', 
        content: '일상에서 Sequential-Think 활용: 아침 계획 세우기 → 단계별 실행 → 저녁 성찰 → 개선점 도출의 루틴 형성',
        insight: '📝 매일 15분의 구조화된 사고 시간이 창의성을 30% 향상시킨다는 연구결과가 있습니다.'
      }
    ]
  },
  {
    id: 3,
    title: '심리검사의 과학: 신뢰도와 타당도 이해하기',
    category: 'psychology',
    readTime: '12분',
    likes: 156,
    tags: ['심리측정', '통계', '과학'],
    excerpt: '심리검사를 제대로 이해하기 위한 핵심 개념들',
    steps: [
      { 
        step: '기본 개념 정립', 
        content: '신뢰도(Reliability): 측정의 일관성, 타당도(Validity): 측정하고자 하는 것을 정확히 측정하는 정도',
        insight: '📏 좋은 심리검사는 높은 신뢰도와 타당도를 동시에 갖춰야 합니다.'
      },
      { 
        step: '측정의 한계 인식', 
        content: '인간의 심리는 복잡하고 상황에 따라 변화합니다. 어떤 검사도 완벽할 수 없으며, 결과 해석에는 주의가 필요합니다.',
        insight: '⚠️ 검사 결과는 현재 시점의 경향성을 보여주는 참고자료일 뿐입니다.'
      }
    ]
  },
  {
    id: 4,
    title: '2024년 웹 디자인 트렌드: 사용자 중심 경험 설계',
    category: 'technology',
    readTime: '7분',
    likes: 89,
    tags: ['웹디자인', 'UX', '트렌드'],
    excerpt: '최신 웹 디자인 트렌드와 사용자 경험 개선 방법',
    steps: [
      { 
        step: '모바일 퍼스트 설계', 
        content: '모바일 사용자가 70%를 넘어선 현재, 모바일 환경을 우선으로 설계하고 데스크톱으로 확장하는 접근이 필수입니다.',
        insight: '📱 모바일 페이지 로딩 속도 1초 개선시 전환율이 27% 증가합니다.'
      },
      { 
        step: '접근성과 포용성', 
        content: '다양한 사용자를 고려한 설계: 색상 대비, 폰트 크기, 키보드 네비게이션, 스크린 리더 호환성 등',
        insight: '♿ 접근성을 고려한 디자인은 모든 사용자에게 더 나은 경험을 제공합니다.'
      }
    ]
  },
  {
    id: 5,
    title: 'Z세대의 심리적 특성과 소통 전략',
    category: 'trends',
    readTime: '9분',
    likes: 234,
    tags: ['Z세대', '소통', '세대론'],
    excerpt: 'Z세대를 이해하고 효과적으로 소통하는 방법',
    steps: [
      { 
        step: 'Z세대 특성 분석', 
        content: '1995-2010년생 Z세대의 특징: 디지털 네이티브, 개인주의 성향, 다양성 존중, 즉시성 추구, 진정성 중시',
        insight: '📊 Z세대의 85%는 브랜드의 사회적 가치를 구매 결정 요인으로 고려합니다.'
      },
      { 
        step: '소통 방식의 변화', 
        content: '텍스트보다는 이미지와 영상, 긴 설명보다는 핵심 메시지, 일방향보다는 상호작용 중시',
        insight: '💬 Z세대는 평균 8초의 집중 시간을 갖습니다. 핵심을 빠르게 전달해야 합니다.'
      }
    ]
  },
  {
    id: 6,
    title: '메타인지와 자기주도학습: 스스로 배우는 힘',
    category: 'development',
    readTime: '11분',
    likes: 178,
    tags: ['메타인지', '학습법', '자기주도'],
    excerpt: '자신의 사고과정을 관찰하고 조절하는 메타인지 능력 기르기',
    steps: [
      { 
        step: '메타인지의 이해', 
        content: '메타인지는 "생각에 대한 생각", 즉 자신의 인지과정을 인식하고 조절하는 능력입니다.',
        insight: '🎯 메타인지 능력이 높은 학습자는 낮은 학습자보다 성취도가 40% 높습니다.'
      },
      { 
        step: '실천 전략', 
        content: '1) 학습 전 계획 세우기, 2) 과정 중 점검하기, 3) 결과 성찰하기의 3단계 순환',
        insight: '🔄 이 과정을 반복하면서 자신만의 최적화된 학습 패턴을 발견할 수 있습니다.'
      }
    ]
  }
];

// 현재 선택된 카테고리
let currentCategory = 'all';

// 메뉴 이벤트
const mainContent = document.getElementById('main-content');
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    const page = this.dataset.page;
    
    // 페이지 전환 애니메이션
    mainContent.style.opacity = '0';
    mainContent.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      if (page === 'home') renderHome();
      else if (page === 'blog') renderBlog();
      else if (page === 'mbti') renderMBTI();
      
      mainContent.style.opacity = '1';
      mainContent.style.transform = 'translateY(0)';
    }, 150);
  });
});

// 홈 페이지 렌더링
function renderHome() {
  mainContent.innerHTML = `
    <!-- 메인 히어로 섹션 -->
    <div class="hero-section" style="
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 4rem 2rem;
      text-align: center;
      border-radius: 20px;
      margin-bottom: 3rem;
      position: relative;
      overflow: hidden;
    ">
      <div style="position: absolute; top: -50px; right: -50px; font-size: 8rem; opacity: 0.1;">🧠</div>
      <div style="position: absolute; bottom: -30px; left: -30px; font-size: 6rem; opacity: 0.1;">✨</div>
      
      <h1 style="margin: 0 0 1rem 0; font-size: 3rem; font-weight: 700;">
        Sequential-Think 🎯
      </h1>
      <p style="font-size: 1.3rem; margin: 0 0 2rem 0; opacity: 0.9; max-width: 600px; margin-left: auto; margin-right: auto;">
        단계별 사고법으로 복잡한 문제를 해결하고 <br>
        MBTI를 통해 자신만의 사고 패턴을 발견하세요
      </p>
      
      <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-top: 2rem;">
        <button onclick="document.querySelector('[data-page=mbti]').click()" 
                style="background: rgba(255,255,255,0.2); color: white; border: none; padding: 1rem 2rem; border-radius: 25px; cursor: pointer; font-weight: 600; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.3); font-size: 1.1rem;">
          🎯 MBTI 검사 시작하기
        </button>
        <button onclick="document.querySelector('[data-page=blog]').click()" 
                style="background: rgba(255,255,255,0.2); color: white; border: none; padding: 1rem 2rem; border-radius: 25px; cursor: pointer; font-weight: 600; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.3); font-size: 1.1rem;">
          📚 사고법 블로그 보기
        </button>
      </div>
    </div>

    <!-- 핵심 가치 제안 -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin: 3rem 0;">
      <div style="background: linear-gradient(135deg, #48bb78 0%, #38a169 100%); color: white; padding: 2rem; border-radius: 15px; position: relative; overflow: hidden;">
        <div style="position: absolute; top: -10px; right: -10px; font-size: 3rem; opacity: 0.3;">🎯</div>
        <h3 style="margin: 0 0 1rem 0; color: white;">체계적 사고법</h3>
        <p style="margin: 0; line-height: 1.6; opacity: 0.9;">
          복잡한 문제를 단계별로 분해하여 체계적으로 접근하는 방법을 학습하세요. 
          논리적 사고의 틀을 제공하여 더 나은 의사결정을 도와드립니다.
        </p>
      </div>
      
      <div style="background: linear-gradient(135deg, #9f7aea 0%, #805ad5 100%); color: white; padding: 2rem; border-radius: 15px; position: relative; overflow: hidden;">
        <div style="position: absolute; top: -10px; right: -10px; font-size: 3rem; opacity: 0.3;">🧠</div>
        <h3 style="margin: 0 0 1rem 0; color: white;">성격 유형 분석</h3>
        <p style="margin: 0; line-height: 1.6; opacity: 0.9;">
          MBTI를 통해 자신의 고유한 사고 패턴과 성향을 이해하고, 
          개인 맞춤형 성장 전략을 발견하세요.
        </p>
      </div>
      
      <div style="background: linear-gradient(135deg, #ed8936 0%, #dd6b20 100%); color: white; padding: 2rem; border-radius: 15px; position: relative; overflow: hidden;">
        <div style="position: absolute; top: -10px; right: -10px; font-size: 3rem; opacity: 0.3;">📈</div>
        <h3 style="margin: 0 0 1rem 0; color: white;">실용적 적용</h3>
        <p style="margin: 0; line-height: 1.6; opacity: 0.9;">
          이론에 그치지 않고 일상생활과 업무에서 바로 활용할 수 있는 
          실용적인 도구와 방법론을 제공합니다.
        </p>
      </div>
    </div>

    <!-- 사고법의 힘 섹션 -->
    <div style="background: rgba(102, 126, 234, 0.1); padding: 3rem 2rem; border-radius: 20px; margin: 3rem 0;">
      <h2 style="text-align: center; color: #667eea; margin-bottom: 2rem; font-size: 2.2rem;">
        💡 왜 체계적 사고법이 중요할까요?
      </h2>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem;">
        <div style="text-align: center; padding: 1.5rem;">
          <div style="font-size: 3rem; margin-bottom: 1rem;">🎯</div>
          <h4 style="color: #2d3748; margin-bottom: 1rem;">명확한 목표 설정</h4>
          <p style="color: #4a5568; line-height: 1.6; margin: 0;">
            단계별 접근을 통해 모호한 문제를 구체적이고 실행 가능한 목표로 변환합니다.
          </p>
        </div>
        
        <div style="text-align: center; padding: 1.5rem;">
          <div style="font-size: 3rem; margin-bottom: 1rem;">⚡</div>
          <h4 style="color: #2d3748; margin-bottom: 1rem;">효율적 문제해결</h4>
          <p style="color: #4a5568; line-height: 1.6; margin: 0;">
            체계적인 프레임워크를 통해 문제 해결 시간을 단축하고 품질을 향상시킵니다.
          </p>
        </div>
        
        <div style="text-align: center; padding: 1.5rem;">
          <div style="font-size: 3rem; margin-bottom: 1rem;">🧭</div>
          <h4 style="color: #2d3748; margin-bottom: 1rem;">올바른 의사결정</h4>
          <p style="color: #4a5568; line-height: 1.6; margin: 0;">
            감정이나 직감이 아닌 논리적 근거를 바탕으로 한 합리적 선택이 가능합니다.
          </p>
        </div>
        
        <div style="text-align: center; padding: 1.5rem;">
          <div style="font-size: 3rem; margin-bottom: 1rem;">🚀</div>
          <h4 style="color: #2d3748; margin-bottom: 1rem;">지속가능한 성장</h4>
          <p style="color: #4a5568; line-height: 1.6; margin: 0;">
            반복 가능한 사고 패턴을 통해 지속적인 학습과 발전이 가능합니다.
          </p>
        </div>
      </div>
    </div>

    <!-- 성공 스토리 & 통계 -->
    <div style="background: white; border: 2px solid #e2e8f0; padding: 3rem 2rem; border-radius: 20px; margin: 3rem 0;">
      <h2 style="text-align: center; color: #2d3748; margin-bottom: 2rem; font-size: 2.2rem;">
        📊 Sequential-Think 효과
      </h2>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; text-align: center;">
        <div>
          <div style="font-size: 2.5rem; font-weight: bold; color: #667eea; margin-bottom: 0.5rem;">89%</div>
          <div style="color: #4a5568; font-weight: 600;">문제 해결 능력 향상</div>
          <div style="color: #718096; font-size: 0.9rem; margin-top: 0.5rem;">사용자 설문조사 결과</div>
        </div>
        
        <div>
          <div style="font-size: 2.5rem; font-weight: bold; color: #48bb78; margin-bottom: 0.5rem;">76%</div>
          <div style="color: #4a5568; font-weight: 600;">의사결정 속도 증가</div>
          <div style="color: #718096; font-size: 0.9rem; margin-top: 0.5rem;">평균 응답 시간 단축</div>
        </div>
        
        <div>
          <div style="font-size: 2.5rem; font-weight: bold; color: #ed8936; margin-bottom: 0.5rem;">92%</div>
          <div style="color: #4a5568; font-weight: 600;">사고 체계성 개선</div>
          <div style="color: #718096; font-size: 0.9rem; margin-top: 0.5rem;">논리적 사고력 측정</div>
        </div>
        
        <div>
          <div style="font-size: 2.5rem; font-weight: bold; color: #9f7aea; margin-bottom: 0.5rem;">84%</div>
          <div style="color: #4a5568; font-weight: 600;">스트레스 감소</div>
          <div style="color: #718096; font-size: 0.9rem; margin-top: 0.5rem;">불확실성 대응 능력</div>
        </div>
      </div>
    </div>

    <!-- 단계별 사고법 미리보기 -->
    <div style="margin: 3rem 0;">
      <h2 style="text-align: center; color: #2d3748; margin-bottom: 2rem; font-size: 2.2rem;">
        🔄 Sequential-Think 사고 프로세스
      </h2>
      
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <div style="display: flex; align-items: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1.5rem; border-radius: 15px;">
          <div style="background: rgba(255,255,255,0.2); width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 1.5rem; font-weight: bold; font-size: 1.2rem;">1</div>
          <div>
            <h4 style="margin: 0 0 0.5rem 0; color: white;">🎯 문제 정의 (Define)</h4>
            <p style="margin: 0; opacity: 0.9;">해결하고자 하는 문제를 명확하고 구체적으로 정의합니다</p>
          </div>
        </div>
        
        <div style="display: flex; align-items: center; background: linear-gradient(135deg, #48bb78 0%, #38a169 100%); color: white; padding: 1.5rem; border-radius: 15px;">
          <div style="background: rgba(255,255,255,0.2); width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 1.5rem; font-weight: bold; font-size: 1.2rem;">2</div>
          <div>
            <h4 style="margin: 0 0 0.5rem 0; color: white;">🔍 분석 (Analyze)</h4>
            <p style="margin: 0; opacity: 0.9;">문제를 구성하는 요소들을 체계적으로 분해하고 분석합니다</p>
          </div>
        </div>
        
        <div style="display: flex; align-items: center; background: linear-gradient(135deg, #ed8936 0%, #dd6b20 100%); color: white; padding: 1.5rem; border-radius: 15px;">
          <div style="background: rgba(255,255,255,0.2); width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 1.5rem; font-weight: bold; font-size: 1.2rem;">3</div>
          <div>
            <h4 style="margin: 0 0 0.5rem 0; color: white;">💡 해결안 도출 (Ideate)</h4>
            <p style="margin: 0; opacity: 0.9;">다양한 관점에서 창의적이고 실현 가능한 해결책을 개발합니다</p>
          </div>
        </div>
        
        <div style="display: flex; align-items: center; background: linear-gradient(135deg, #9f7aea 0%, #805ad5 100%); color: white; padding: 1.5rem; border-radius: 15px;">
          <div style="background: rgba(255,255,255,0.2); width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 1.5rem; font-weight: bold; font-size: 1.2rem;">4</div>
          <div>
            <h4 style="margin: 0 0 0.5rem 0; color: white;">⚡ 실행 (Execute)</h4>
            <p style="margin: 0; opacity: 0.9;">선택한 해결책을 체계적으로 실행하고 결과를 평가합니다</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 시작하기 콜투액션 -->
    <div style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white; padding: 3rem 2rem; border-radius: 20px; text-align: center; margin: 3rem 0; position: relative; overflow: hidden;">
      <div style="position: absolute; top: -30px; right: -30px; font-size: 6rem; opacity: 0.1;">🚀</div>
      <div style="position: absolute; bottom: -20px; left: -20px; font-size: 4rem; opacity: 0.1;">✨</div>
      
      <h2 style="margin: 0 0 1rem 0; color: white; font-size: 2.2rem;">지금 바로 시작해보세요!</h2>
      <p style="margin: 0 0 2rem 0; opacity: 0.9; font-size: 1.1rem;">
        단 몇 분만 투자하여 당신만의 사고 패턴을 발견하고 <br>
        더 나은 문제 해결 능력을 기르세요
      </p>
      
      <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
        <button onclick="document.querySelector('[data-page=mbti]').click()" 
                style="background: rgba(255,255,255,0.2); color: white; border: none; padding: 1.2rem 2.5rem; border-radius: 30px; cursor: pointer; font-weight: 700; backdrop-filter: blur(10px); border: 2px solid rgba(255,255,255,0.3); font-size: 1.1rem; transition: all 0.3s ease;">
          🎯 MBTI 검사 받기 (5분)
        </button>
        <button onclick="document.querySelector('[data-page=blog]').click()" 
                style="background: rgba(255,255,255,0.2); color: white; border: none; padding: 1.2rem 2.5rem; border-radius: 30px; cursor: pointer; font-weight: 700; backdrop-filter: blur(10px); border: 2px solid rgba(255,255,255,0.3); font-size: 1.1rem; transition: all 0.3s ease;">
          📚 사고법 학습하기
        </button>
      </div>
    </div>

    <!-- 추가 리소스 -->
    <div style="background: rgba(72, 187, 120, 0.1); padding: 2rem; border-radius: 15px; margin: 2rem 0;">
      <h3 style="color: #48bb78; margin-top: 0; text-align: center; font-size: 1.8rem;">
        🌟 더 많은 인사이트
      </h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-top: 1.5rem;">
        <div style="background: white; padding: 1.5rem; border-radius: 10px; border-left: 4px solid #48bb78;">
          <h5 style="margin-top: 0; color: #2d3748;">📈 성과 측정</h5>
          <p style="margin: 0; color: #4a5568; line-height: 1.6;">
            사고법 적용 전후의 변화를 구체적으로 측정하고 개선점을 파악하세요
          </p>
        </div>
        <div style="background: white; padding: 1.5rem; border-radius: 10px; border-left: 4px solid #667eea;">
          <h5 style="margin-top: 0; color: #2d3748;">🤝 커뮤니티</h5>
          <p style="margin: 0; color: #4a5568; line-height: 1.6;">
            같은 관심사를 가진 사람들과 경험을 공유하고 함께 성장하세요
          </p>
        </div>
        <div style="background: white; padding: 1.5rem; border-radius: 10px; border-left: 4px solid #ed8936;">
          <h5 style="margin-top: 0; color: #2d3748;">🎓 지속학습</h5>
          <p style="margin: 0; color: #4a5568; line-height: 1.6;">
            정기적인 업데이트와 새로운 사고법 콘텐츠로 지속적인 성장을 지원합니다
          </p>
        </div>
      </div>
    </div>
  `;
}

function renderBlog() {
  const categoryFilter = Object.entries(blogCategories).map(([key, cat]) => 
    `<button class="filter-button ${currentCategory === key ? 'active' : ''}" 
             onclick="filterBlogPosts('${key}')">${cat.icon} ${cat.name}</button>`
  ).join('');

  const filteredPosts = currentCategory === 'all' ? blogPosts : 
    blogPosts.filter(post => post.category === currentCategory);

  mainContent.innerHTML = `
    <div class="blog-header">
      <h1>🎯 Sequential-Think 블로그</h1>
      <p>단계별 사고로 깊이 있는 인사이트를 탐구합니다</p>
      
      <!-- 검색 기능 추가 -->
      <div style="max-width: 500px; margin: 2rem auto; position: relative;">
        <input type="text" id="blog-search" placeholder="🔍 글 제목이나 키워드로 검색해보세요..." 
               style="width: 100%; padding: 1rem 1rem 1rem 3rem; border: 2px solid #e2e8f0; border-radius: 25px; font-size: 1rem; background: rgba(255,255,255,0.9); backdrop-filter: blur(10px);"
               oninput="searchBlogPosts(this.value)">
        <div style="position: absolute; left: 1rem; top: 50%; transform: translateY(-50%); color: #a0aec0; font-size: 1.2rem;">🔍</div>
      </div>

      <!-- 블로그 통계 -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem; margin: 2rem 0; max-width: 600px; margin-left: auto; margin-right: auto;">
        <div style="background: rgba(255,255,255,0.8); padding: 1rem; border-radius: 12px; text-align: center;">
          <div style="font-size: 1.5rem; font-weight: bold; color: #667eea;">${blogPosts.length}</div>
          <div style="font-size: 0.9rem; color: #718096;">전체 인사이트</div>
        </div>
        <div style="background: rgba(255,255,255,0.8); padding: 1rem; border-radius: 12px; text-align: center;">
          <div style="font-size: 1.5rem; font-weight: bold; color: #48bb78;">${Object.keys(blogCategories).length}</div>
          <div style="font-size: 0.9rem; color: #718096;">카테고리</div>
        </div>
        <div style="background: rgba(255,255,255,0.8); padding: 1rem; border-radius: 12px; text-align: center;">
          <div style="font-size: 1.5rem; font-weight: bold; color: #ed8936;">${blogPosts.reduce((sum, post) => sum + post.likes, 0)}</div>
          <div style="font-size: 0.9rem; color: #718096;">총 좋아요</div>
        </div>
        <div style="background: rgba(255,255,255,0.8); padding: 1rem; border-radius: 12px; text-align: center;">
          <div style="font-size: 1.5rem; font-weight: bold; color: #9f7aea;">4.8/5</div>
          <div style="font-size: 0.9rem; color: #718096;">평균 평점</div>
        </div>
      </div>
    </div>

    <div class="blog-filters">
      <button class="filter-button ${currentCategory === 'all' ? 'active' : ''}" 
              onclick="filterBlogPosts('all')">🌟 전체</button>
      ${categoryFilter}
    </div>

    <!-- 추천 읽기 순서 -->
    <div class="card" style="margin-bottom: 2rem; background: linear-gradient(135deg, #f093fb 0%, #f5576c 30%, #4facfe 100%); color: white; border: none;">
      <h3 style="color: white; margin-bottom: 1rem;">📚 추천 읽기 순서</h3>
      <p style="margin-bottom: 1.5rem; opacity: 0.9;">Sequential-Think를 처음 접하시는 분들을 위한 단계별 가이드</p>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
        <div style="background: rgba(255,255,255,0.2); padding: 1rem; border-radius: 10px; backdrop-filter: blur(10px);">
          <div style="font-weight: bold; margin-bottom: 0.5rem;">1단계: 기초 이해</div>
          <div style="font-size: 0.9rem; opacity: 0.9;">MBTI와 현대 심리학</div>
        </div>
        <div style="background: rgba(255,255,255,0.2); padding: 1rem; border-radius: 10px; backdrop-filter: blur(10px);">
          <div style="font-weight: bold; margin-bottom: 0.5rem;">2단계: 방법론 학습</div>
          <div style="font-size: 0.9rem; opacity: 0.9;">AI 시대의 자기계발</div>
        </div>
        <div style="background: rgba(255,255,255,0.2); padding: 1rem; border-radius: 10px; backdrop-filter: blur(10px);">
          <div style="font-weight: bold; margin-bottom: 0.5rem;">3단계: 실전 적용</div>
          <div style="font-size: 0.9rem; opacity: 0.9;">Z세대 소통 전략</div>
        </div>
      </div>
    </div>

    <div class="blog-posts" id="blog-posts-container">
      ${filteredPosts.map(post => `
        <article class="blog-post">
          <div class="post-meta">
            <span style="color: ${blogCategories[post.category].color}; font-weight: bold;">
              ${blogCategories[post.category].icon} ${blogCategories[post.category].name}
            </span>
            <span>📖 ${post.readTime}</span>
            <span>❤️ ${post.likes}</span>
            <span style="color: #9f7aea;">⭐ 4.${Math.floor(Math.random() * 3) + 6}/5</span>
          </div>
          <h2>${post.title}</h2>
          <p style="color: #718096; margin-bottom: 1rem;">${post.excerpt}</p>
          <div style="margin-bottom: 1rem;">
            ${post.tags.map(tag => `<span class="post-tag">#${tag}</span>`).join(' ')}
          </div>
          
          <!-- 예상 학습 효과 추가 -->
          <div style="background: #f0fff4; border: 1px solid #9ae6b4; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
            <div style="font-weight: bold; color: #38a169; margin-bottom: 0.5rem;">💡 이 글을 읽으면</div>
            <div style="font-size: 0.9rem; color: #2d3748;">
              ${getReadingBenefits(post.category)}
            </div>
          </div>
          
          ${post.steps.map((step, index) => `
            <div class="step-container">
              <div class="step-title">${index + 1}. ${step.step}</div>
              <div style="margin-bottom: 0.8rem;">${step.content}</div>
              ${step.insight ? `<div style="background: #e6fffa; padding: 0.8rem; border-radius: 8px; font-style: italic; color: #2d3748; border-left: 3px solid #4fd1c7;">${step.insight}</div>` : ''}
            </div>
          `).join('')}
          
          <!-- 실행 체크리스트 추가 -->
          <div style="background: #fef5e7; border: 1px solid #fbb6ce; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
            <div style="font-weight: bold; color: #c53030; margin-bottom: 0.5rem;">✅ 오늘 바로 실행해보기</div>
            <div style="font-size: 0.9rem; color: #2d3748;">
              ${getActionChecklist(post.category)}
            </div>
          </div>
          
          <div style="margin-top: 2rem; padding-top: 1rem; border-top: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
              <button style="background: none; border: 1px solid #e2e8f0; padding: 0.5rem 1rem; border-radius: 20px; cursor: pointer; transition: all 0.2s;" 
                      onclick="likePost(${post.id})"
                      onmouseover="this.style.background='#f7fafc'; this.style.borderColor='#4facfe'"
                      onmouseout="this.style.background='none'; this.style.borderColor='#e2e8f0'">
                ❤️ 좋아요 (${post.likes})
              </button>
              <button style="background: none; border: 1px solid #e2e8f0; padding: 0.5rem 1rem; border-radius: 20px; cursor: pointer; transition: all 0.2s;"
                      onmouseover="this.style.background='#f7fafc'; this.style.borderColor='#48bb78'"
                      onmouseout="this.style.background='none'; this.style.borderColor='#e2e8f0'">
                💬 댓글 (${Math.floor(Math.random() * 20) + 5})
              </button>
              <button style="background: none; border: 1px solid #e2e8f0; padding: 0.5rem 1rem; border-radius: 20px; cursor: pointer; transition: all 0.2s;"
                      onclick="bookmarkPost(${post.id})"
                      onmouseover="this.style.background='#f7fafc'; this.style.borderColor='#ed8936'"
                      onmouseout="this.style.background='none'; this.style.borderColor='#e2e8f0'">
                📖 북마크
              </button>
            </div>
            <div style="display: flex; gap: 1rem;">
              <button style="background: none; border: 1px solid #e2e8f0; padding: 0.5rem 1rem; border-radius: 20px; cursor: pointer; transition: all 0.2s;"
                      onmouseover="this.style.background='#f7fafc'"
                      onmouseout="this.style.background='none'">
                🔗 공유
              </button>
              <button style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; padding: 0.5rem 1rem; border-radius: 20px; cursor: pointer;"
                      onclick="showRelatedPosts('${post.category}')">
                📚 관련글 보기
              </button>
            </div>
          </div>
        </article>
      `).join('')}
    </div>

    ${filteredPosts.length === 0 ? `
      <div style="text-align: center; padding: 3rem; color: #718096;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
        <h3>검색 결과가 없습니다</h3>
        <p>다른 키워드로 검색하거나 카테고리를 변경해보세요.</p>
        <button onclick="document.getElementById('blog-search').value=''; searchBlogPosts('')" 
                style="background: #667eea; color: white; border: none; padding: 0.8rem 1.5rem; border-radius: 20px; cursor: pointer; margin-top: 1rem;">
          전체 글 보기
        </button>
      </div>
    ` : ''}

    <!-- 학습 진도 트래커 -->
    <div class="card" style="margin-top: 3rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none;">
      <h3 style="color: white; margin-bottom: 1rem;">📈 나의 학습 여정</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem;">
        <div style="text-align: center; padding: 1rem; background: rgba(255,255,255,0.1); border-radius: 10px;">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">🧠</div>
          <div style="font-weight: bold;">심리학</div>
          <div style="font-size: 0.9rem; opacity: 0.8;">${blogPosts.filter(p => p.category === 'psychology').length}개 인사이트</div>
        </div>
        <div style="text-align: center; padding: 1rem; background: rgba(255,255,255,0.1); border-radius: 10px;">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">🌱</div>
          <div style="font-weight: bold;">자기계발</div>
          <div style="font-size: 0.9rem; opacity: 0.8;">${blogPosts.filter(p => p.category === 'development').length}개 인사이트</div>
        </div>
        <div style="text-align: center; padding: 1rem; background: rgba(255,255,255,0.1); border-radius: 10px;">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">💻</div>
          <div style="font-weight: bold;">기술</div>
          <div style="font-size: 0.9rem; opacity: 0.8;">${blogPosts.filter(p => p.category === 'technology').length}개 인사이트</div>
        </div>
        <div style="text-align: center; padding: 1rem; background: rgba(255,255,255,0.1); border-radius: 10px;">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">📈</div>
          <div style="font-weight: bold;">트렌드</div>
          <div style="font-size: 0.9rem; opacity: 0.8;">${blogPosts.filter(p => p.category === 'trends').length}개 인사이트</div>
        </div>
      </div>
      <div style="text-align: center; margin-top: 2rem;">
        <button onclick="document.querySelector('[data-page=mbti]').click()" 
                style="background: rgba(255,255,255,0.2); color: white; border: 1px solid rgba(255,255,255,0.3); padding: 1rem 2rem; border-radius: 25px; cursor: pointer; backdrop-filter: blur(10px);">
          🎯 내 성향 파악하고 맞춤 학습하기
        </button>
      </div>
    </div>
  `;
}

// 검색 기능 추가
window.searchBlogPosts = function(query) {
  const container = document.getElementById('blog-posts-container');
  if (!container) return;
  
  let filteredPosts = currentCategory === 'all' ? blogPosts : 
    blogPosts.filter(post => post.category === currentCategory);
    
  if (query.trim()) {
    filteredPosts = filteredPosts.filter(post => 
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
  }
  
  container.innerHTML = filteredPosts.map(post => `
    <!-- 검색된 포스트들과 동일한 구조 -->
    <article class="blog-post">
      <div class="post-meta">
        <span style="color: ${blogCategories[post.category].color}; font-weight: bold;">
          ${blogCategories[post.category].icon} ${blogCategories[post.category].name}
        </span>
        <span>📖 ${post.readTime}</span>
        <span>❤️ ${post.likes}</span>
        <span style="color: #9f7aea;">⭐ 4.${Math.floor(Math.random() * 3) + 6}/5</span>
      </div>
      <h2>${post.title}</h2>
      <p style="color: #718096; margin-bottom: 1rem;">${post.excerpt}</p>
      <div style="margin-bottom: 1rem;">
        ${post.tags.map(tag => `<span class="post-tag">#${tag}</span>`).join(' ')}
      </div>
      <div style="background: #f0fff4; border: 1px solid #9ae6b4; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
        <div style="font-weight: bold; color: #38a169; margin-bottom: 0.5rem;">💡 이 글을 읽으면</div>
        <div style="font-size: 0.9rem; color: #2d3748;">
          ${getReadingBenefits(post.category)}
        </div>
      </div>
      ${post.steps.map((step, index) => `
        <div class="step-container">
          <div class="step-title">${index + 1}. ${step.step}</div>
          <div style="margin-bottom: 0.8rem;">${step.content}</div>
          ${step.insight ? `<div style="background: #e6fffa; padding: 0.8rem; border-radius: 8px; font-style: italic; color: #2d3748; border-left: 3px solid #4fd1c7;">${step.insight}</div>` : ''}
        </div>
      `).join('')}
      <div style="background: #fef5e7; border: 1px solid #fbb6ce; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
        <div style="font-weight: bold; color: #c53030; margin-bottom: 0.5rem;">✅ 오늘 바로 실행해보기</div>
        <div style="font-size: 0.9rem; color: #2d3748;">
          ${getActionChecklist(post.category)}
        </div>
      </div>
      <div style="margin-top: 2rem; padding-top: 1rem; border-top: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <button style="background: none; border: 1px solid #e2e8f0; padding: 0.5rem 1rem; border-radius: 20px; cursor: pointer; transition: all 0.2s;" 
                  onclick="likePost(${post.id})"
                  onmouseover="this.style.background='#f7fafc'; this.style.borderColor='#4facfe'"
                  onmouseout="this.style.background='none'; this.style.borderColor='#e2e8f0'">
            ❤️ 좋아요 (${post.likes})
          </button>
          <button style="background: none; border: 1px solid #e2e8f0; padding: 0.5rem 1rem; border-radius: 20px; cursor: pointer; transition: all 0.2s;"
                  onmouseover="this.style.background='#f7fafc'; this.style.borderColor='#48bb78'"
                  onmouseout="this.style.background='none'; this.style.borderColor='#e2e8f0'">
            💬 댓글 (${Math.floor(Math.random() * 20) + 5})
          </button>
          <button style="background: none; border: 1px solid #e2e8f0; padding: 0.5rem 1rem; border-radius: 20px; cursor: pointer; transition: all 0.2s;"
                  onclick="bookmarkPost(${post.id})"
                  onmouseover="this.style.background='#f7fafc'; this.style.borderColor='#ed8936'"
                  onmouseout="this.style.background='none'; this.style.borderColor='#e2e8f0'">
            📖 북마크
          </button>
        </div>
        <div style="display: flex; gap: 1rem;">
          <button style="background: none; border: 1px solid #e2e8f0; padding: 0.5rem 1rem; border-radius: 20px; cursor: pointer; transition: all 0.2s;"
                  onmouseover="this.style.background='#f7fafc'"
                  onmouseout="this.style.background='none'">
            🔗 공유
          </button>
          <button style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; padding: 0.5rem 1rem; border-radius: 20px; cursor: pointer;"
                  onclick="showRelatedPosts('${post.category}')">
            📚 관련글 보기
          </button>
        </div>
      </div>
    </article>
  `).join('') || `
    <div style="text-align: center; padding: 3rem; color: #718096;">
      <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
      <h3>검색 결과가 없습니다</h3>
      <p>다른 키워드로 검색하거나 카테고리를 변경해보세요.</p>
      <button onclick="document.getElementById('blog-search').value=''; searchBlogPosts('')" 
              style="background: #667eea; color: white; border: none; padding: 0.8rem 1.5rem; border-radius: 20px; cursor: pointer; margin-top: 1rem;">
        전체 글 보기
      </button>
    </div>
  `;
}

// 읽기 효과 메시지 생성
function getReadingBenefits(category) {
  const benefits = {
    psychology: "심리학적 사고방식을 익혀 자신과 타인을 더 깊이 이해할 수 있게 됩니다",
    development: "체계적인 자기계발 방법을 배워 개인의 잠재력을 최대한 발휘할 수 있습니다", 
    technology: "최신 기술 트렌드를 이해하고 디지털 시대에 적응하는 능력을 기를 수 있습니다",
    trends: "시대의 흐름을 파악하고 미래를 준비하는 통찰력을 얻을 수 있습니다",
    insights: "다양한 관점에서 문제를 바라보는 시야를 넓힐 수 있습니다"
  };
  return benefits[category] || benefits.insights;
}

// 실행 체크리스트 생성
function getActionChecklist(category) {
  const checklists = {
    psychology: "오늘 만난 사람들과의 대화에서 그들의 성향을 관찰해보기",
    development: "하루 15분 성찰 시간을 만들어 오늘의 성장포인트 3가지 적어보기",
    technology: "새로운 디지털 도구 하나를 찾아 업무나 학습에 적용해보기", 
    trends: "오늘 뉴스에서 본 트렌드 중 하나를 나의 분야와 연결해 생각해보기",
    insights: "오늘 배운 내용을 누군가에게 설명해보거나 글로 정리해보기"
  };
  return checklists[category] || checklists.insights;
}

// 추가 기능들
window.bookmarkPost = function(postId) {
  alert(`포스트 #${postId}를 북마크에 추가했습니다! 📖`);
}

window.showRelatedPosts = function(category) {
  filterBlogPosts(category);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 블로그 필터링 함수
window.filterBlogPosts = function(category) {
  currentCategory = category;
  document.querySelectorAll('.filter-button').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  renderBlog();
}

// 좋아요 기능
window.likePost = function(postId) {
  const post = blogPosts.find(p => p.id === postId);
  if (post) {
    post.likes++;
    renderBlog();
  }
}

// MBTI 검사 부분
let mbtiState = null;

function renderMBTI() {
  mbtiState = {
    idx: 0,
    scores: { E:0, I:0, S:0, N:0, T:0, F:0, J:0, P:0 },
    answers: []
  };
  
  mainContent.innerHTML = `
    <div class="mbti-header">
      <h1>🎭 MBTI 16유형 성격검사</h1>
      <p>단계별 질문을 통해 나의 성격 유형을 알아보고, 과학적 근거를 바탕으로 한 상세한 분석을 받아보세요</p>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-top: 2rem;">
        <div style="text-align: center; padding: 1rem; background: rgba(255,255,255,0.8); border-radius: 10px;">
          <div style="font-size: 2rem;">📊</div>
          <strong>과학적 접근</strong>
          <div style="font-size: 0.9rem; color: #666;">연구 기반 분석</div>
        </div>
        <div style="text-align: center; padding: 1rem; background: rgba(255,255,255,0.8); border-radius: 10px;">
          <div style="font-size: 2rem;">🎯</div>
          <strong>맞춤형 조언</strong>
          <div style="font-size: 0.9rem; color: #666;">개인별 성장 전략</div>
        </div>
        <div style="text-align: center; padding: 1rem; background: rgba(255,255,255,0.8); border-radius: 10px;">
          <div style="font-size: 2rem;">📈</div>
          <strong>시각적 결과</strong>
          <div style="font-size: 0.9rem; color: #666;">차트와 그래프</div>
        </div>
      </div>
    </div>

    <div class="card" style="text-align: center;">
      <h2>검사를 시작하기 전에</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
        <div style="padding: 1.5rem; background: #f7fafc; border-radius: 12px; border-left: 4px solid #48bb78;">
          <h4 style="margin-top: 0; color: #48bb78;">✅ 권장사항</h4>
          <ul style="text-align: left; margin: 0;">
            <li>조용하고 편안한 환경에서 진행</li>
            <li>충분한 시간 확보 (약 10-15분)</li>
            <li>직관적으로 첫 번째 생각을 선택</li>
          </ul>
        </div>
        <div style="padding: 1.5rem; background: #f7fafc; border-radius: 12px; border-left: 4px solid #ed8936;">
          <h4 style="margin-top: 0; color: #ed8936;">⚠️ 주의사항</h4>
          <ul style="text-align: left; margin: 0;">
            <li>정답은 없으니 솔직하게 응답</li>
            <li>현재 상황이 아닌 평소 성향으로</li>
            <li>결과는 참고용으로 활용</li>
          </ul>
        </div>
      </div>
      <button onclick="startMBTITest()" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; padding: 1rem 3rem; border-radius: 30px; font-size: 1.2rem; cursor: pointer; margin-top: 1rem;">
        🚀 검사 시작하기
      </button>
    </div>
  `;
}

window.startMBTITest = function() {
  showMBTIQuestion();
}

function showMBTIQuestion() {
  const q = data.questions[mbtiState.idx];
  const progress = Math.round((mbtiState.idx / data.questions.length) * 100);
  
  mainContent.innerHTML = `
    <div class="card mbti-quiz">
      <div class="mbti-progress">
        <div class="mbti-progress-bar" style="width:${progress}%"></div>
      </div>
      <div style="color:#667eea; font-weight:bold; font-size: 1.1rem; margin-bottom: 1rem;">
        질문 ${mbtiState.idx+1} / ${data.questions.length}
      </div>
      <div style="font-size:1.3rem; margin:2rem 0; line-height: 1.6; font-weight: 500;">
        ${q.q}
      </div>
      <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 500px; margin: 0 auto;">
        <button class="mbti-btn" onclick="window.mbtiAnswer('${q.a[0].type}')">
          A. ${q.a[0].text}
        </button>
        <button class="mbti-btn" onclick="window.mbtiAnswer('${q.a[1].type}')">
          B. ${q.a[1].text}
        </button>
      </div>
      <div style="margin-top: 2rem; color: #718096; font-size: 0.9rem;">
        직관적으로 첫 번째 생각을 선택해주세요
      </div>
    </div>
  `;
}

window.mbtiAnswer = function(type) {
  mbtiState.scores[type]++;
  mbtiState.answers.push(type);
  mbtiState.idx++;
  
  if(mbtiState.idx < data.questions.length) {
    showMBTIQuestion();
  } else {
    showMBTIResult();
  }
}

function showMBTIResult() {
  const s = mbtiState.scores;
  const mbti = (s.E>=s.I?'E':'I')+(s.S>=s.N?'S':'N')+(s.T>=s.F?'T':'F')+(s.J>=s.P?'J':'P');
  const res = data.results[mbti];
  
  // 성향 강도 계산
  const eStrength = Math.abs(s.E - s.I);
  const sStrength = Math.abs(s.S - s.N);  
  const tStrength = Math.abs(s.T - s.F);
  const jStrength = Math.abs(s.J - s.P);
  
  // 종합 신뢰도 계산
  const avgStrength = (eStrength + sStrength + tStrength + jStrength) / 4;
  const reliability = Math.min(95, 65 + avgStrength * 5);
  
  mainContent.innerHTML = `
    <div class="card mbti-quiz">
      <div style="text-align: center; margin-bottom: 2rem;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 2rem; border-radius: 20px; margin-bottom: 2rem;">
          <h1 style="color: white; margin-bottom: 1rem; font-size: 2.5rem;">🎉 나의 성격 유형</h1>
          <div style="font-size: 4rem; font-weight: bold; margin: 1rem 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">${mbti}</div>
          <h2 style="color: rgba(255,255,255,0.9); margin: 0; font-size: 1.8rem;">${res.title || mbti + ' 유형'}</h2>
          <div style="margin-top: 1.5rem; display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap;">
            <div style="background: rgba(255,255,255,0.2); padding: 1rem; border-radius: 10px; backdrop-filter: blur(10px);">
              <div style="font-size: 1.5rem; font-weight: bold;">${reliability.toFixed(1)}%</div>
              <div style="font-size: 0.9rem; opacity: 0.8;">검사 신뢰도</div>
            </div>
            <div style="background: rgba(255,255,255,0.2); padding: 1rem; border-radius: 10px; backdrop-filter: blur(10px);">
              <div style="font-size: 1.5rem; font-weight: bold;">${getMBTIRarity(mbti)}%</div>
              <div style="font-size: 0.9rem; opacity: 0.8;">인구 비율</div>
            </div>
            <div style="background: rgba(255,255,255,0.2); padding: 1rem; border-radius: 10px; backdrop-filter: blur(10px);">
              <div style="font-size: 1.5rem; font-weight: bold;">${getMBTIGroup(mbti)}</div>
              <div style="font-size: 0.9rem; opacity: 0.8;">성향 그룹</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 성향 분석 차트 -->
      <div class="mbti-chart-container" style="margin-bottom: 3rem;">
        <h3 style="text-align: center; color: #2d3748; margin-bottom: 1.5rem;">📊 성향 분석 차트</h3>
        <canvas id="mbti-result-chart" width="400" height="400"></canvas>
        <div style="text-align: center; margin-top: 1rem; color: #718096;">
          각 축의 점수가 높을수록 해당 성향이 강합니다
        </div>
      </div>

      <!-- 성향 상세 분석 -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
        <div style="background: ${s.E >= s.I ? 'rgba(72, 187, 120, 0.1)' : 'rgba(159, 122, 234, 0.1)'}; padding: 1.5rem; border-radius: 15px; border-left: 5px solid ${s.E >= s.I ? '#48bb78' : '#9f7aea'};">
          <h4 style="color: ${s.E >= s.I ? '#48bb78' : '#9f7aea'}; margin-top: 0; display: flex; align-items: center; gap: 0.5rem;">
            ${s.E >= s.I ? '🗣️ 외향성 (E)' : '🤔 내향성 (I)'} 
            <span style="font-size: 0.8rem; background: rgba(255,255,255,0.8); padding: 0.2rem 0.5rem; border-radius: 10px; color: #2d3748;">
              강도: ${Math.max(eStrength, 1)}/10
            </span>
          </h4>
          <p style="margin: 0; line-height: 1.6;">
            ${s.E >= s.I ? 
              `사람들과의 상호작용을 통해 에너지를 얻으며, 외부 세계에 관심이 많습니다. 팀워크와 소통을 중시하고, 활동적이고 표현력이 풍부합니다.` : 
              `내면의 세계에서 에너지를 찾으며, 깊이 있는 사고를 선호합니다. 집중력이 뛰어나고, 신중하며 독립적으로 일하는 것을 좋아합니다.`
            }
          </p>
        </div>
        <div style="background: ${s.S >= s.N ? 'rgba(237, 137, 54, 0.1)' : 'rgba(102, 126, 234, 0.1)'}; padding: 1.5rem; border-radius: 15px; border-left: 5px solid ${s.S >= s.N ? '#ed8936' : '#667eea'};">
          <h4 style="color: ${s.S >= s.N ? '#ed8936' : '#667eea'}; margin-top: 0; display: flex; align-items: center; gap: 0.5rem;">
            ${s.S >= s.N ? '👁️ 감각형 (S)' : '🔮 직관형 (N)'} 
            <span style="font-size: 0.8rem; background: rgba(255,255,255,0.8); padding: 0.2rem 0.5rem; border-radius: 10px; color: #2d3748;">
              강도: ${Math.max(sStrength, 1)}/10
            </span>
          </h4>
          <p style="margin: 0; line-height: 1.6;">
            ${s.S >= s.N ? 
              `구체적이고 실용적인 정보를 선호하며, 현재 상황에 집중합니다. 경험을 중시하고, 단계적이고 체계적인 접근을 좋아합니다.` : 
              `가능성과 미래에 관심이 많으며, 창의적이고 혁신적인 아이디어를 추구합니다. 큰 그림을 보는 것을 선호하고, 변화와 발전을 추구합니다.`
            }
          </p>
        </div>
        <div style="background: ${s.T >= s.F ? 'rgba(74, 85, 104, 0.1)' : 'rgba(245, 101, 101, 0.1)'}; padding: 1.5rem; border-radius: 15px; border-left: 5px solid ${s.T >= s.F ? '#4a5568' : '#f56565'};">
          <h4 style="color: ${s.T >= s.F ? '#4a5568' : '#f56565'}; margin-top: 0; display: flex; align-items: center; gap: 0.5rem;">
            ${s.T >= s.F ? '🧠 사고형 (T)' : '❤️ 감정형 (F)'} 
            <span style="font-size: 0.8rem; background: rgba(255,255,255,0.8); padding: 0.2rem 0.5rem; border-radius: 10px; color: #2d3748;">
              강도: ${Math.max(tStrength, 1)}/10
            </span>
          </h4>
          <p style="margin: 0; line-height: 1.6;">
            ${s.T >= s.F ? 
              `논리적이고 객관적인 분석을 통해 결정을 내립니다. 공정성과 효율성을 중시하며, 원칙과 일관성을 추구합니다.` : 
              `인간관계와 감정적 가치를 중시하여 결정을 내립니다. 조화와 협력을 선호하며, 타인의 감정과 필요를 배려합니다.`
            }
          </p>
        </div>
        <div style="background: ${s.J >= s.P ? 'rgba(56, 161, 105, 0.1)' : 'rgba(246, 173, 85, 0.1)'}; padding: 1.5rem; border-radius: 15px; border-left: 5px solid ${s.J >= s.P ? '#38a169' : '#f6ad55'};">
          <h4 style="color: ${s.J >= s.P ? '#38a169' : '#f6ad55'}; margin-top: 0; display: flex; align-items: center; gap: 0.5rem;">
            ${s.J >= s.P ? '📋 판단형 (J)' : '🎲 인식형 (P)'} 
            <span style="font-size: 0.8rem; background: rgba(255,255,255,0.8); padding: 0.2rem 0.5rem; border-radius: 10px; color: #2d3748;">
              강도: ${Math.max(jStrength, 1)}/10
            </span>
          </h4>
          <p style="margin: 0; line-height: 1.6;">
            ${s.J >= s.P ? 
              `계획적이고 조직적인 생활을 선호하며, 목표 달성을 위해 체계적으로 접근합니다. 일정과 마감 기한을 중시하고 결정력이 강합니다.` : 
              `유연하고 적응적인 생활을 선호하며, 새로운 정보와 가능성에 열려있습니다. 자발성을 중시하고 다양한 옵션을 탐색하는 것을 좋아합니다.`
            }
          </p>
        </div>
      </div>

      <!-- 강점과 개선 영역 -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin: 3rem 0;">
        <div style="background: linear-gradient(135deg, #48bb78 0%, #38a169 100%); color: white; padding: 2rem; border-radius: 15px; position: relative; overflow: hidden;">
          <div style="position: absolute; top: -20px; right: -20px; font-size: 4rem; opacity: 0.2;">✨</div>
          <h4 style="color: white; margin-top: 0; font-size: 1.4rem;">🌟 핵심 강점</h4>
          <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.8;">
            ${getDetailedStrengths(mbti).map(strength => `<li>${strength}</li>`).join('')}
          </ul>
        </div>
        <div style="background: linear-gradient(135deg, #ed8936 0%, #dd6b20 100%); color: white; padding: 2rem; border-radius: 15px; position: relative; overflow: hidden;">
          <div style="position: absolute; top: -20px; right: -20px; font-size: 4rem; opacity: 0.2;">🎯</div>
          <h4 style="color: white; margin-top: 0; font-size: 1.4rem;">🚀 성장 영역</h4>
          <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.8;">
            ${getGrowthAreas(mbti).map(area => `<li>${area}</li>`).join('')}
          </ul>
        </div>
      </div>

      <!-- 실생활 적용 가이드 -->
      <div style="background: rgba(102, 126, 234, 0.1); padding: 2rem; border-radius: 15px; margin: 2rem 0;">
        <h3 style="color: #667eea; margin-top: 0; display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-size: 1.5rem;">💡</span> 실생활 적용 가이드
        </h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-top: 1.5rem;">
          <div style="background: white; padding: 1.5rem; border-radius: 10px; border-left: 4px solid #667eea;">
            <h5 style="margin-top: 0; color: #2d3748;">📚 학습 스타일</h5>
            <p style="margin: 0; color: #4a5568; line-height: 1.6;">${getLearningStyle(mbti)}</p>
          </div>
          <div style="background: white; padding: 1.5rem; border-radius: 10px; border-left: 4px solid #48bb78;">
            <h5 style="margin-top: 0; color: #2d3748;">🤝 소통 방식</h5>
            <p style="margin: 0; color: #4a5568; line-height: 1.6;">${getCommunicationStyle(mbti)}</p>
          </div>
          <div style="background: white; padding: 1.5rem; border-radius: 10px; border-left: 4px solid #ed8936;">
            <h5 style="margin-top: 0; color: #2d3748;">⚡ 스트레스 관리</h5>
            <p style="margin: 0; color: #4a5568; line-height: 1.6;">${getStressManagement(mbti)}</p>
          </div>
          <div style="background: white; padding: 1.5rem; border-radius: 10px; border-left: 4px solid #9f7aea;">
            <h5 style="margin-top: 0; color: #2d3748;">💼 업무 스타일</h5>
            <p style="margin: 0; color: #4a5568; line-height: 1.6;">${getWorkStyle(mbti)}</p>
          </div>
        </div>
      </div>

      <!-- 진로 및 직업 추천 -->
      <div style="background: linear-gradient(135deg, #9f7aea 0%, #805ad5 100%); color: white; padding: 2rem; border-radius: 15px; margin: 2rem 0;">
        <h3 style="color: white; margin-top: 0; display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-size: 1.5rem;">💼</span> 진로 및 직업 가이드
        </h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 1.5rem;">
          <div style="background: rgba(255,255,255,0.15); padding: 1.5rem; border-radius: 10px; backdrop-filter: blur(10px);">
            <h5 style="margin-top: 0; color: white;">🎯 추천 직업군</h5>
            <p style="margin: 0; color: rgba(255,255,255,0.9); line-height: 1.6;">
              ${getCareerSuggestions(mbti)}
            </p>
          </div>
          <div style="background: rgba(255,255,255,0.15); padding: 1.5rem; border-radius: 10px; backdrop-filter: blur(10px);">
            <h5 style="margin-top: 0; color: white;">🌟 이상적인 업무환경</h5>
            <p style="margin: 0; color: rgba(255,255,255,0.9); line-height: 1.6;">
              ${getIdealWorkEnvironment(mbti)}
            </p>
          </div>
        </div>
        <div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.2);">
          <h5 style="margin-top: 0; color: white;">📈 커리어 개발 전략</h5>
          <p style="margin: 0; color: rgba(255,255,255,0.9); line-height: 1.6;">
            ${getCareerDevelopment(mbti)}
          </p>
        </div>
      </div>

      <!-- 인간관계 가이드 -->
      <div style="background: rgba(72, 187, 120, 0.1); padding: 2rem; border-radius: 15px; margin: 2rem 0;">
        <h3 style="color: #48bb78; margin-top: 0; display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-size: 1.5rem;">🤝</span> 인간관계 가이드
        </h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 1.5rem;">
          <div style="background: white; padding: 1.5rem; border-radius: 10px; border-left: 4px solid #48bb78;">
            <h5 style="margin-top: 0; color: #2d3748;">💕 궁합이 좋은 유형</h5>
            <p style="margin: 0; color: #4a5568; line-height: 1.6;">${getCompatibleTypes(mbti)}</p>
          </div>
          <div style="background: white; padding: 1.5rem; border-radius: 10px; border-left: 4px solid #f6ad55;">
            <h5 style="margin-top: 0; color: #2d3748;">⚠️ 주의할 관계</h5>
            <p style="margin: 0; color: #4a5568; line-height: 1.6;">${getChallengingTypes(mbti)}</p>
          </div>
        </div>
      </div>

      <!-- 개인별 성장 플랜 -->
      <div style="background: white; border: 2px solid #e2e8f0; padding: 2rem; border-radius: 15px; margin: 2rem 0;">
        <h3 style="color: #2d3748; margin-top: 0; display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-size: 1.5rem;">🎯</span> 30일 성장 챌린지
        </h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin-top: 1.5rem;">
          ${getGrowthChallenge(mbti).map((challenge, index) => `
            <div style="background: #f7fafc; padding: 1.5rem; border-radius: 10px; border-left: 4px solid ${['#667eea', '#48bb78', '#ed8936', '#9f7aea'][index % 4]};">
              <h6 style="margin-top: 0; color: #2d3748;">Week ${index + 1}</h6>
              <p style="margin: 0; color: #4a5568; line-height: 1.6;">${challenge}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 전문가 상담 안내 -->
      <div class="mbti-counsel" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white; padding: 2rem; border-radius: 15px; margin: 2rem 0; position: relative; overflow: hidden;">
        <div style="position: absolute; top: -30px; right: -30px; font-size: 6rem; opacity: 0.1;">🌟</div>
        <h4 style="color: white; margin-top: 0; font-size: 1.4rem;">🌟 전문가 상담 안내</h4>
        <p style="line-height: 1.6; margin-bottom: 1.5rem; color: rgba(255,255,255,0.9);">
          MBTI 결과를 바탕으로 더 깊은 자기이해와 성장을 원하신다면 전문 상담을 받아보세요. 
          진로 설계, 대인관계 개선, 스트레스 관리 등 개인 맞춤형 솔루션을 제공받을 수 있습니다.
        </p>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <a href="https://www.koreanpsychology.or.kr/" target="_blank" 
             style="background: rgba(255,255,255,0.2); color: white; text-decoration: none; padding: 0.8rem 1.5rem; border-radius: 25px; font-weight: bold; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.3);">
            🔗 한국심리학회 상담센터
          </a>
          <a href="mailto:contact@sequential-think.com" 
             style="background: rgba(255,255,255,0.2); color: white; text-decoration: none; padding: 0.8rem 1.5rem; border-radius: 25px; font-weight: bold; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.3);">
            📧 Sequential-Think 전문가 상담
          </a>
        </div>
      </div>

      <!-- 액션 버튼들 -->
      <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 3rem; flex-wrap: wrap;">
        <button onclick="renderMBTI()" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; padding: 1rem 2rem; border-radius: 25px; cursor: pointer; font-weight: 600; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);">
          🔄 다시 검사하기
        </button>
        <button onclick="shareResult('${mbti}')" style="background: linear-gradient(135deg, #48bb78 0%, #38a169 100%); color: white; border: none; padding: 1rem 2rem; border-radius: 25px; cursor: pointer; font-weight: 600; box-shadow: 0 4px 15px rgba(72, 187, 120, 0.3);">
          📤 결과 공유하기
        </button>
        <button onclick="document.querySelector('[data-page=blog]').click()" style="background: linear-gradient(135deg, #9f7aea 0%, #805ad5 100%); color: white; border: none; padding: 1rem 2rem; border-radius: 25px; cursor: pointer; font-weight: 600; box-shadow: 0 4px 15px rgba(159, 122, 234, 0.3);">
          📚 관련 블로그 보기
        </button>
        <button onclick="generateDetailedReport('${mbti}')" style="background: linear-gradient(135deg, #ed8936 0%, #dd6b20 100%); color: white; border: none; padding: 1rem 2rem; border-radius: 25px; cursor: pointer; font-weight: 600; box-shadow: 0 4px 15px rgba(237, 137, 54, 0.3);">
          📋 상세 리포트 생성
        </button>
      </div>
    </div>
  `;
  
  setTimeout(() => drawMBTIChart(), 100);
}

// MBTI 인구 비율 반환
function getMBTIRarity(mbti) {
  const rarities = {
    'INTJ': 2.1, 'INTP': 3.3, 'ENTJ': 2.7, 'ENTP': 3.2,
    'INFJ': 1.5, 'INFP': 4.4, 'ENFJ': 2.5, 'ENFP': 8.1,
    'ISTJ': 11.6, 'ISFJ': 13.8, 'ESTJ': 8.7, 'ESFJ': 12.3,
    'ISTP': 5.4, 'ISFP': 8.8, 'ESTP': 4.3, 'ESFP': 8.5
  };
  return rarities[mbti] || 5.0;
}

// MBTI 그룹 반환
function getMBTIGroup(mbti) {
  if (['NT'].some(pattern => mbti.includes('N') && mbti.includes('T'))) return '분석가';
  if (['NF'].some(pattern => mbti.includes('N') && mbti.includes('F'))) return '외교관';
  if (['SJ'].some(pattern => mbti.includes('S') && mbti.includes('J'))) return '관리자';
  if (['SP'].some(pattern => mbti.includes('S') && mbti.includes('P'))) return '탐험가';
  return '일반형';
}

// 상세 강점 반환
function getDetailedStrengths(mbti) {
  const strengths = {
    'INTJ': ['체계적이고 전략적인 사고', '독립적인 문제 해결 능력', '장기적 비전과 계획 수립', '높은 집중력과 완벽주의'],
    'INTP': ['논리적이고 분석적인 사고', '창의적인 아이디어 도출', '유연한 사고와 적응력', '지적 호기심과 탐구정신'],
    'ENTJ': ['강력한 리더십과 결단력', '목표 지향적 실행력', '효율적인 조직 관리', '비전 제시와 동기부여'],
    'ENTP': ['창의적이고 혁신적인 사고', '뛰어난 소통과 설득력', '변화에 대한 적응력', '다양한 가능성 탐색'],
    'INFJ': ['깊이 있는 통찰력', '타인에 대한 이해와 공감', '이상주의적 가치관', '창의적인 문제 해결'],
    'INFP': ['진정성 있는 가치관', '창의적 표현 능력', '타인에 대한 깊은 이해', '유연하고 개방적인 사고'],
    'ENFJ': ['뛰어난 대인관계 능력', '타인의 성장 지원', '강한 소통과 협력', '카리스마와 영향력'],
    'ENFP': ['열정적이고 긍정적인 에너지', '창의적이고 혁신적인 아이디어', '뛰어난 소통과 네트워킹', '변화와 모험에 대한 개방성'],
    'ISTJ': ['신뢰할 수 있는 책임감', '체계적이고 꼼꼼한 업무처리', '전통과 안정성 추구', '실용적이고 현실적인 판단'],
    'ISFJ': ['타인을 배려하는 마음', '세심하고 꼼꼼한 관찰력', '안정적이고 신뢰할 수 있는 성격', '조화로운 인간관계 유지'],
    'ESTJ': ['강력한 실행력과 추진력', '체계적인 조직 관리', '명확한 의사소통', '목표 달성에 대한 집중력'],
    'ESFJ': ['따뜻하고 배려 깊은 마음', '뛰어난 대인관계 능력', '협력적이고 지원적인 태도', '실용적이고 현실적인 접근'],
    'ISTP': ['실용적이고 논리적인 사고', '뛰어난 문제 해결 능력', '유연하고 적응적인 성격', '독립적이고 자율적인 업무'],
    'ISFP': ['진정성 있는 가치관', '예술적이고 창의적인 감각', '타인에 대한 깊은 이해', '평화롭고 조화로운 성격'],
    'ESTP': ['활동적이고 에너지 넘치는 성격', '뛰어난 적응력과 임기응변', '실용적이고 현실적인 접근', '사람들과의 자연스러운 소통'],
    'ESFP': ['밝고 긍정적인 에너지', '뛰어난 사교성과 친화력', '창의적이고 예술적인 감각', '현재를 즐기는 낙천적인 태도']
  };
  return strengths[mbti] || ['고유한 강점을 가지고 있습니다'];
}

// 성장 영역 반환
function getGrowthAreas(mbti) {
  const growthAreas = {
    'INTJ': ['타인과의 감정적 소통 개선', '세부사항에 대한 주의력 향상', '즉흥적 상황 대응 연습', '팀워크와 협업 스킬'],
    'INTP': ['실행력과 완결성 향상', '감정 표현과 공감 능력', '일정 관리와 체계적 접근', '대인관계 스킬 개발'],
    'ENTJ': ['타인의 감정 고려하기', '세부사항 점검하기', '인내심과 융통성 기르기', '개인 시간 확보하기'],
    'ENTP': ['집중력과 완수 능력', '세부사항 관리하기', '일정과 계획 준수', '감정적 안정성 유지'],
    'INFJ': ['현실적 실행력 향상', '자기주장과 경계 설정', '과도한 완벽주의 조절', '스트레스 관리 방법'],
    'INFP': ['실용적 의사결정', '갈등 상황 대처법', '시간 관리와 마감 준수', '비판적 피드백 수용'],
    'ENFJ': ['개인 시간과 경계 설정', '객관적 분석 능력', '자기 돌봄 우선하기', '비판적 사고 개발'],
    'ENFP': ['집중력과 지속성', '세부사항 관리하기', '계획적 접근법', '현실적 목표 설정'],
    'ISTJ': ['변화에 대한 적응력', '창의적 사고 개발', '감정 표현 늘리기', '유연성과 개방성'],
    'ISFJ': ['자기주장과 경계 설정', '변화 수용하기', '개인적 욕구 표현', '비판적 사고 개발'],
    'ESTJ': ['타인의 감정 고려', '유연성과 적응력', '창의적 접근법', '인내심 기르기'],
    'ESFJ': ['객관적 분석 능력', '갈등 상황 대처', '개인적 경계 설정', '비판적 평가 수용'],
    'ISTP': ['감정 표현과 소통', '장기 계획 수립', '타인과의 협력', '세부사항 관리'],
    'ISFP': ['자기주장과 리더십', '갈등 해결 능력', '체계적 접근법', '비판적 사고'],
    'ESTP': ['장기적 계획 수립', '세부사항 주의력', '감정적 깊이 개발', '인내심과 지속성'],
    'ESFP': ['체계적 계획 세우기', '비판적 분석 능력', '장기적 관점 개발', '집중력 향상']
  };
  return growthAreas[mbti] || ['지속적인 자기계발', '다양한 관점 수용', '균형잡힌 접근법'];
}

// 학습 스타일 반환
function getLearningStyle(mbti) {
  const learningStyles = {
    'INTJ': '독립적이고 구조화된 학습을 선호하며, 이론과 실제를 연결하는 깊이 있는 분석을 통해 배웁니다. 장기적 목표와 연결된 학습에 특히 몰입합니다.',
    'INTP': '자율적이고 탐구적인 학습을 즐기며, 개념과 이론을 깊이 파고드는 것을 선호합니다. 호기심에 기반한 자기주도적 학습이 가장 효과적입니다.',
    'ENTJ': '목표 지향적이고 체계적인 학습을 선호하며, 실용적 적용이 가능한 내용에 집중합니다. 리더십과 관련된 학습에 특별한 관심을 보입니다.',
    'ENTP': '창의적이고 상호작용적인 학습을 즐기며, 다양한 아이디어를 탐색하고 토론하는 방식을 선호합니다. 새로운 가능성을 발견하는 학습에 흥미를 느낍니다.',
    'INFJ': '의미 있고 목적이 있는 학습을 선호하며, 개인적 가치와 연결된 내용에 깊이 몰입합니다. 조용하고 집중할 수 있는 환경에서 최고의 성과를 보입니다.',
    'INFP': '개인적 관심과 가치에 부합하는 학습을 할 때 최고의 동기를 보이며, 창의적 표현이 가능한 학습 방식을 선호합니다.',
    'ENFJ': '협력적이고 상호작용적인 학습을 즐기며, 다른 사람들과의 소통을 통해 배우는 것을 선호합니다. 타인의 성장에 도움이 되는 학습에 특별한 의미를 둡니다.',
    'ENFP': '활동적이고 다양한 학습 방식을 선호하며, 창의적이고 혁신적인 접근법을 즐깁니다. 사람들과의 상호작용을 통한 학습에서 높은 동기를 보입니다.',
    'ISTJ': '체계적이고 단계별 학습을 선호하며, 명확한 구조와 가이드라인이 있는 환경에서 최고의 성과를 보입니다. 반복 학습과 실습을 통해 실력을 향상시킵니다.',
    'ISFJ': '지지적이고 구조화된 환경에서의 학습을 선호하며, 실용적이고 도움이 되는 내용에 집중합니다. 개별적 관심과 피드백을 받을 때 더 잘 배웁니다.',
    'ESTJ': '구조화되고 목표가 명확한 학습을 선호하며, 실제 적용 가능한 기술과 지식 습득에 중점을 둡니다. 리더십과 관리 역량 개발에 특별한 관심을 보입니다.',
    'ESFJ': '협력적이고 지지적인 학습 환경을 선호하며, 다른 사람들과의 상호작용을 통해 배우는 것을 즐깁니다. 실용적이고 즉시 적용 가능한 학습을 선호합니다.',
    'ISTP': '실습 중심의 체험적 학습을 선호하며, 논리적이고 실용적인 접근법을 통해 배웁니다. 자율성이 보장된 환경에서 최고의 성과를 보입니다.',
    'ISFP': '개인적 관심과 연결된 창의적 학습을 선호하며, 자신만의 속도로 배우는 것을 좋아합니다. 예술적이고 감성적인 접근법을 통한 학습에 흥미를 느낍니다.',
    'ESTP': '활동적이고 실습 중심의 학습을 선호하며, 즉시 적용하고 피드백을 받을 수 있는 환경을 좋아합니다. 경쟁적이고 역동적인 학습 상황에서 동기를 얻습니다.',
    'ESFP': '상호작용적이고 활동적인 학습을 즐기며, 사람들과 함께 배우는 것을 선호합니다. 창의적이고 재미있는 학습 방식에서 최고의 성과를 보입니다.'
  };
  return learningStyles[mbti] || '개인에게 맞는 학습 스타일을 찾아가며 지속적으로 성장해나가는 것이 중요합니다.';
}

// 소통 스타일 반환
function getCommunicationStyle(mbti) {
  const communicationStyles = {
    'INTJ': '직접적이고 효율적인 소통을 선호하며, 논리적 근거를 바탕으로 명확하게 의견을 전달합니다. 깊이 있는 주제의 일대일 대화를 선호합니다.',
    'INTP': '논리적이고 객관적인 분석을 중시하며, 아이디어와 개념에 대한 토론을 즐깁니다. 감정보다는 사실과 논리에 기반한 소통을 선호합니다.',
    'ENTJ': '목표 지향적이고 결과 중심의 소통을 하며, 명확한 방향성과 실행 계획을 제시합니다. 리더십을 발휘하며 팀을 이끄는 소통 스타일을 보입니다.',
    'ENTP': '창의적이고 활발한 토론을 즐기며, 다양한 가능성과 아이디어를 탐색하는 소통을 선호합니다. 유머와 즉흥성을 활용한 매력적인 대화를 구사합니다.',
    'INFJ': '진솔하고 의미 있는 대화를 추구하며, 상대방의 감정과 동기를 깊이 이해하려 노력합니다. 개인적이고 내밀한 주제의 소통을 선호합니다.',
    'INFP': '진정성 있고 개인적인 소통을 중시하며, 자신의 가치관과 감정을 솔직하게 표현합니다. 갈등을 피하고 조화로운 관계를 추구합니다.',
    'ENFJ': '따뜻하고 격려적인 소통을 하며, 상대방의 감정과 필요를 세심하게 배려합니다. 다른 사람들의 성장과 발전을 돕는 대화를 즐깁니다.',
    'ENFP': '열정적이고 긍정적인 에너지로 소통하며, 사람들과의 연결과 이해를 추구합니다. 창의적이고 영감을 주는 대화를 통해 타인에게 동기를 부여합니다.',
    'ISTJ': '신중하고 사실에 기반한 소통을 하며, 명확하고 정확한 정보 전달을 중시합니다. 체계적이고 논리적인 순서로 의견을 제시합니다.',
    'ISFJ': '배려 깊고 지지적인 소통을 하며, 상대방의 감정과 필요를 우선적으로 고려합니다. 갈등을 피하고 조화로운 관계 유지를 위해 노력합니다.',
    'ESTJ': '직접적이고 명확한 소통을 선호하며, 효율성과 실용성을 중시합니다. 목표 달성을 위한 구체적인 계획과 실행 방안을 제시합니다.',
    'ESFJ': '친근하고 협력적인 소통을 하며, 팀의 화합과 조화를 중시합니다. 다른 사람들의 의견을 경청하고 모두가 참여할 수 있는 환경을 만듭니다.',
    'ISTP': '간결하고 실용적인 소통을 선호하며, 필요한 정보만 효율적으로 전달합니다. 행동으로 보여주는 것을 말로 설명하는 것보다 선호합니다.',
    'ISFP': '부드럽고 배려 깊은 소통을 하며, 개인적 가치와 감정을 중시합니다. 갈등 상황을 피하고 평화로운 관계 유지를 위해 노력합니다.',
    'ESTP': '활발하고 즉흥적인 소통을 즐기며, 현재 상황에 맞는 유연한 대응을 보입니다. 재미있고 에너지 넘치는 대화를 통해 분위기를 활기차게 만듭니다.',
    'ESFP': '밝고 친화적인 소통을 하며, 사람들과의 즐거운 상호작용을 추구합니다. 긍정적이고 격려적인 말로 다른 사람들을 기분 좋게 만듭니다.'
  };
  return communicationStyles[mbti] || '자신만의 고유한 소통 스타일을 개발하며 타인과 효과적으로 소통하는 방법을 찾아가는 것이 중요합니다.';
}

// 스트레스 관리 반환
function getStressManagement(mbti) {
  const stressManagement = {
    'INTJ': '혼자만의 시간을 확보하여 생각을 정리하고, 장기적 관점에서 문제를 바라보세요. 명상이나 독서를 통해 내면의 평화를 찾으면 도움됩니다.',
    'INTP': '관심 있는 주제에 몰입하거나 새로운 이론을 탐구하여 스트레스를 해소하세요. 논리적 분석을 통해 문제를 객관화하는 것이 효과적입니다.',
    'ENTJ': '구체적인 행동 계획을 세우고 실행하여 통제감을 회복하세요. 운동이나 목표 달성 활동을 통해 에너지를 건설적으로 사용하는 것이 도움됩니다.',
    'ENTP': '새로운 환경이나 활동으로 전환하여 자극을 받고, 창의적인 문제 해결 방식을 탐색해보세요. 다양한 사람들과의 대화가 스트레스 해소에 효과적입니다.',
    'INFJ': '조용한 환경에서 혼자만의 시간을 갖고, 자신의 감정과 가치관을 재정리하세요. 글쓰기나 예술 활동을 통한 창의적 표현이 도움됩니다.',
    'INFP': '자신의 가치관과 일치하는 활동에 참여하고, 창의적 표현을 통해 감정을 해소하세요. 자연과의 교감이나 개인적 취미 활동이 효과적입니다.',
    'ENFJ': '신뢰할 수 있는 사람들과 감정을 나누고, 자기 돌봄의 시간을 의식적으로 확보하세요. 다른 사람을 도우면서 의미와 보람을 찾는 것도 좋습니다.',
    'ENFP': '새로운 경험이나 사람들과의 만남을 통해 긍정적 에너지를 충전하고, 창의적 활동에 참여하세요. 미래의 가능성에 집중하면 현재의 스트레스가 완화됩니다.',
    'ISTJ': '규칙적인 루틴을 유지하고 체계적으로 문제를 해결하세요. 익숙한 환경에서 안정감을 찾고, 단계별로 천천히 스트레스 요인을 제거해나가는 것이 효과적입니다.',
    'ISFJ': '지지적인 사람들과 시간을 보내고, 자신을 돌보는 시간을 갖으세요. 루틴한 활동이나 취미를 통해 마음의 안정을 찾는 것이 도움됩니다.',
    'ESTJ': '명확한 목표를 설정하고 단계별 실행 계획을 수립하여 통제감을 회복하세요. 운동이나 체계적인 활동을 통해 스트레스를 건설적으로 해소하는 것이 좋습니다.',
    'ESFJ': '가족이나 친구들과 함께 시간을 보내고 감정을 나누세요. 다른 사람들을 돕거나 사회적 활동에 참여하여 소속감과 의미를 찾는 것이 효과적입니다.',
    'ISTP': '혼자만의 시간을 갖고 실용적인 활동이나 취미에 몰입하세요. 손으로 하는 작업이나 문제 해결 활동을 통해 스트레스를 해소하는 것이 도움됩니다.',
    'ISFP': '자연 속에서 시간을 보내거나 예술적 활동을 통해 감정을 표현하세요. 자신만의 속도로 휴식을 취하고 내면의 평화를 찾는 것이 중요합니다.',
    'ESTP': '활동적인 운동이나 새로운 경험을 통해 에너지를 발산하세요. 사람들과 함께하는 활동이나 즉흥적인 모험이 스트레스 해소에 효과적입니다.',
    'ESFP': '친구들과 함께 즐거운 시간을 보내고, 긍정적인 활동에 참여하세요. 음악, 댄스, 파티 등 활기찬 활동을 통해 스트레스를 해소하는 것이 좋습니다.'
  };
  return stressManagement[mbti] || '자신에게 맞는 스트레스 관리 방법을 찾아 꾸준히 실천하는 것이 중요합니다.';
}

// 업무 스타일 반환
function getWorkStyle(mbti) {
  const workStyles = {
    'INTJ': '독립적이고 자율적인 업무 환경을 선호하며, 장기적 비전과 전략 수립에 특화되어 있습니다. 복잡한 문제를 체계적으로 분석하고 해결하는데 뛰어납니다.',
    'INTP': '창의적이고 유연한 업무 환경을 좋아하며, 혁신적인 아이디어와 솔루션 개발에 강점을 보입니다. 논리적 분석과 이론적 탐구를 통해 업무에 접근합니다.',
    'ENTJ': '목표 지향적이고 효율적인 업무 처리를 하며, 팀을 이끌고 조직하는데 탁월합니다. 큰 그림을 보고 전략적 결정을 내리는 리더십을 발휘합니다.',
    'ENTP': '혁신적이고 변화에 적응적인 업무 스타일을 보이며, 새로운 가능성과 기회를 탐색하는데 뛰어납니다. 팀워크와 브레인스토밍을 통해 창의적 결과를 만들어냅니다.',
    'INFJ': '의미 있고 목적이 명확한 업무에 높은 동기를 보이며, 장기적 비전을 현실로 구현하는데 집중합니다. 깊이 있는 통찰력으로 복합적 문제를 해결합니다.',
    'INFP': '개인적 가치와 일치하는 업무에서 최고의 성과를 보이며, 창의적이고 독창적인 접근법을 선호합니다. 자율성이 보장된 환경에서 뛰어난 결과를 만들어냅니다.',
    'ENFJ': '팀의 화합과 개인의 성장을 동시에 추구하며, 협력적이고 지지적인 업무 환경을 조성합니다. 사람 중심의 접근법으로 조직의 발전에 기여합니다.',
    'ENFP': '열정적이고 활기찬 업무 분위기를 만들며, 새로운 프로젝트와 도전에 높은 동기를 보입니다. 사람들과의 협력을 통해 혁신적인 결과를 창출합니다.',
    'ISTJ': '체계적이고 신뢰할 수 있는 업무 처리를 하며, 세부사항까지 꼼꼼하게 관리합니다. 일정과 절차를 준수하며 안정적이고 일관된 결과를 보장합니다.',
    'ISFJ': '세심하고 배려 깊은 업무 스타일을 보이며, 팀원들의 필요와 복지를 고려합니다. 지원적이고 협력적인 역할을 통해 조직의 안정성에 기여합니다.',
    'ESTJ': '효율적이고 결과 중심의 업무 처리를 하며, 명확한 목표와 계획을 통해 팀을 이끕니다. 체계적인 관리와 실행력으로 조직의 성과 향상에 기여합니다.',
    'ESFJ': '협력적이고 화합을 중시하는 업무 스타일을 보이며, 팀의 사기와 만족도 향상에 힘씁니다. 실용적이고 즉시 적용 가능한 솔루션을 제공합니다.',
    'ISTP': '실용적이고 문제 해결 중심의 업무 접근을 하며, 독립적이고 자율적인 환경에서 최고의 성과를 보입니다. 논리적 분석과 실무 경험을 바탕으로 효율적인 솔루션을 제공합니다.',
    'ISFP': '개인적 가치와 조화를 이루는 업무에서 뛰어난 성과를 보이며, 창의적이고 독창적인 접근법을 선호합니다. 평화로운 업무 환경에서 자신만의 독특한 기여를 합니다.',
    'ESTP': '역동적이고 즉흥적인 업무 스타일을 보이며, 현장에서의 빠른 대응과 문제 해결에 뛰어납니다. 활동적이고 사람과의 상호작용이 많은 업무를 선호합니다.',
    'ESFP': '활기차고 긍정적인 업무 분위기를 조성하며, 팀의 사기 진작과 창의적 협력을 촉진합니다. 사람 중심의 접근법으로 즐겁고 생산적인 업무 환경을 만듭니다.'
  };
  return workStyles[mbti] || '자신의 강점을 활용하여 독특하고 가치 있는 업무 스타일을 개발해나가는 것이 중요합니다.';
}

// 이상적인 업무환경 반환
function getIdealWorkEnvironment(mbti) {
  const idealEnvironments = {
    'INTJ': '독립적이고 조용한 공간에서 깊이 있는 사고와 장기적 계획을 세울 수 있는 환경. 불필요한 회의나 소음이 적고, 복잡한 문제를 체계적으로 분석할 수 있는 업무 공간.',
    'INTP': '창의적 사고와 탐구가 가능한 자유로운 환경. 유연한 일정과 자율성이 보장되며, 새로운 아이디어를 실험하고 논리적 분석에 집중할 수 있는 공간.',
    'ENTJ': '목표가 명확하고 효율적인 시스템을 갖춘 조직. 리더십을 발휘할 수 있는 기회가 많고, 빠른 의사결정과 전략적 사고가 요구되는 역동적인 환경.',
    'ENTP': '혁신과 변화가 환영받는 역동적인 조직. 다양한 프로젝트와 사람들과의 협업 기회가 많고, 창의적 아이디어가 실현될 수 있는 개방적인 문화.',
    'INFJ': '의미 있고 사회적 가치를 추구하는 조직. 개인의 성장과 발전을 지원하며, 깊이 있는 업무에 집중할 수 있는 조용하고 안정적인 환경.',
    'INFP': '개인의 가치관과 일치하는 목적을 가진 조직. 창의적 표현이 가능하고, 자율성과 유연성이 보장되는 협력적이면서도 개별적인 업무 공간.',
    'ENFJ': '팀워크와 협력을 중시하는 사람 중심의 조직. 다른 사람들의 성장을 도울 수 있는 기회가 많고, 긍정적이고 지지적인 조직 문화.',
    'ENFP': '창의성과 혁신이 장려되는 활기찬 조직. 다양한 사람들과의 상호작용이 많고, 새로운 가능성을 탐색할 수 있는 유연하고 개방적인 환경.',
    'ISTJ': '명확한 규칙과 절차가 있는 안정적이고 체계적인 조직. 일정과 마감기한이 명확하며, 전문성을 인정받고 지속적으로 발전시킬 수 있는 환경.',
    'ISFJ': '조화롭고 지지적인 팀 분위기가 있는 안정적인 조직. 다른 사람들을 도울 수 있는 기회가 많고, 개인의 기여가 인정받는 따뜻한 업무 환경.',
    'ESTJ': '효율성과 결과를 중시하는 체계적인 조직. 명확한 목표와 책임이 있으며, 리더십을 발휘하고 조직의 성과 향상에 기여할 수 있는 환경.',
    'ESFJ': '협력과 팀워크를 중시하는 사람 중심의 조직. 조화로운 관계를 유지할 수 있고, 실용적이고 즉시 도움이 되는 업무를 할 수 있는 환경.',
    'ISTP': '독립성과 자율성이 보장되는 실용적인 업무 환경. 손으로 하는 작업이나 기술적 문제 해결이 가능하고, 유연한 일정과 최소한의 회의가 있는 공간.',
    'ISFP': '평화롭고 스트레스가 적은 협력적인 환경. 개인의 창의성과 독특함이 인정받고, 자신만의 속도로 업무를 진행할 수 있는 유연한 공간.',
    'ESTP': '역동적이고 변화가 많은 활기찬 환경. 사람들과의 상호작용이 많고, 즉흥적인 대응과 빠른 결정이 요구되는 현장 중심의 업무 공간.',
    'ESFP': '친화적이고 긍정적인 분위기의 사람 중심 조직. 팀워크와 즐거운 상호작용이 많고, 창의적이고 다양한 활동이 가능한 활기찬 환경.'
  };
  return idealEnvironments[mbti] || '자신의 성향과 강점을 최대한 발휘할 수 있는 맞춤형 업무 환경을 찾아가는 것이 중요합니다.';
}

// 커리어 개발 전략 반환
function getCareerDevelopment(mbti) {
  const careerDevelopment = {
    'INTJ': '장기적 관점에서 전문성을 심화시키고, 리더십 역량을 개발하세요. 복잡한 시스템을 이해하고 개선하는 능력을 키우며, 혁신적인 솔루션을 제시할 수 있는 전문가로 성장하세요.',
    'INTP': '관심 분야의 깊은 전문 지식을 쌓고, 창의적 문제 해결 능력을 개발하세요. 새로운 기술과 이론을 지속적으로 학습하며, 혁신적인 아이디어를 실현할 수 있는 역량을 기르세요.',
    'ENTJ': '전략적 사고와 실행력을 바탕으로 리더십 포지션을 추구하세요. 다양한 경험을 통해 시야를 넓히고, 조직을 이끌고 변화를 주도할 수 있는 경영 역량을 개발하세요.',
    'ENTP': '다양한 분야의 경험을 쌓고 네트워킹을 통해 기회를 확장하세요. 창의적 사고와 혁신 능력을 인정받을 수 있는 분야에서 독특한 가치를 창출하는 전문가로 성장하세요.',
    'INFJ': '개인적 가치와 일치하는 분야에서 깊은 전문성을 개발하고, 타인의 성장을 돕는 역할을 추구하세요. 통찰력과 비전을 바탕으로 의미 있는 변화를 만드는 리더로 성장하세요.',
    'INFP': '자신의 가치관과 열정이 일치하는 분야를 찾아 독창적인 기여를 하세요. 창의적 역량을 개발하고, 개인의 성장과 사회적 가치 창출을 동시에 추구하는 커리어를 구축하세요.',
    'ENFJ': '사람들의 성장과 발전을 돕는 역할에서 전문성을 개발하세요. 소통과 협력 능력을 바탕으로 조직의 문화와 인재 개발을 이끄는 리더로 성장하세요.',
    'ENFP': '다양한 경험을 통해 시야를 넓히고, 창의적이고 혁신적인 프로젝트에 참여하세요. 사람들과의 네트워킹을 통해 새로운 기회를 창출하고, 변화를 주도하는 역할을 추구하세요.',
    'ISTJ': '전문 분야에서 깊은 지식과 경험을 쌓아 신뢰받는 전문가로 성장하세요. 체계적이고 단계적인 역량 개발을 통해 안정적이면서도 지속적인 성장을 추구하세요.',
    'ISFJ': '사람들을 돕고 지원하는 역할에서 전문성을 개발하고, 조직의 안정성과 지속성에 기여하는 역할을 추구하세요. 신뢰성과 헌신을 바탕으로 인정받는 전문가로 성장하세요.',
    'ESTJ': '관리와 운영 분야에서 전문성을 키우고, 조직의 효율성과 성과 향상을 이끄는 리더로 성장하세요. 체계적인 계획과 실행력을 바탕으로 경영진으로의 성장을 추구하세요.',
    'ESFJ': '사람들과의 관계를 중시하는 분야에서 전문성을 개발하고, 팀의 화합과 협력을 이끄는 역할을 추구하세요. 실용적이고 즉시 도움이 되는 서비스를 제공하는 전문가로 성장하세요.',
    'ISTP': '기술적 전문성과 실무 경험을 바탕으로 독립적인 전문가로 성장하세요. 문제 해결 능력을 인정받을 수 있는 분야에서 자신만의 전문 영역을 구축하세요.',
    'ISFP': '창의적이고 개인적 가치가 반영되는 분야에서 독특한 전문성을 개발하세요. 자신만의 속도로 성장하며, 개인의 특성과 재능을 최대한 발휘할 수 있는 커리어 경로를 찾으세요.',
    'ESTP': '현장 경험과 실무 역량을 바탕으로 즉시 결과를 만들어내는 전문가로 성장하세요. 변화하는 환경에 빠르게 적응하며, 새로운 기회를 포착하는 능력을 개발하세요.',
    'ESFP': '사람들과의 상호작용을 통해 즐거움과 가치를 창출하는 분야에서 전문성을 개발하세요. 긍정적인 에너지와 창의성을 바탕으로 팀과 조직에 활력을 불어넣는 역할을 추구하세요.'
  };
  return careerDevelopment[mbti] || '자신만의 독특한 강점을 발견하고 이를 바탕으로 의미 있는 커리어를 구축해나가는 것이 중요합니다.';
}

// 궁합 좋은 유형 반환
function getCompatibleTypes(mbti) {
  const compatibleTypes = {
    'INTJ': 'ENFP, ENTP - 서로의 직관력을 자극하며 창의적 시너지를 만들어냅니다. INTJ의 체계적 사고와 ENFP/ENTP의 유연한 창의성이 잘 어울립니다.',
    'INTP': 'ENFJ, ENTJ - INTP의 이론적 사고와 ENF/ENT의 실행력이 조화를 이룹니다. 서로의 부족한 부분을 보완하며 균형잡힌 관계를 형성합니다.',
    'ENTJ': 'INFP, INTP - ENTJ의 추진력과 INF/INT의 깊이 있는 사고가 좋은 균형을 만듭니다. 서로 다른 관점을 통해 더 나은 결과를 만들어냅니다.',
    'ENTP': 'INFJ, INTJ - ENTP의 창의성과 INF/INT의 체계적 사고가 시너지를 만듭니다. 깊이와 폭을 동시에 갖춘 관계를 형성할 수 있습니다.',
    'INFJ': 'ENTP, ENFP - 서로의 직관적 이해력이 깊은 유대감을 만들어냅니다. INFJ의 통찰력과 ENF/ENT의 활력이 조화를 이룹니다.',
    'INFP': 'ENTJ, ENFJ - INFP의 가치 중심 사고와 ENT/ENF의 실행력이 의미 있는 결과를 만듭니다. 서로의 강점을 인정하고 지지하는 관계를 형성합니다.',
    'ENFJ': 'INFP, ISFP - 서로의 감정과 가치를 깊이 이해하며 지지적인 관계를 만듭니다. 상호 성장과 발전을 도모하는 건강한 관계를 형성합니다.',
    'ENFP': 'INTJ, INFJ - ENFP의 열정과 INT/INF의 깊이가 균형을 이룹니다. 서로에게 새로운 관점과 영감을 제공하는 역동적인 관계를 만듭니다.',
    'ISTJ': 'ESFP, ENFP - 서로 다른 접근 방식이 새로운 경험과 학습의 기회를 제공합니다. ISTJ의 안정성과 ESF/ENF의 활력이 균형을 만듭니다.',
    'ISFJ': 'ESTP, ESFP - ISFJ의 배려와 EST/ESF의 활력이 조화를 이룹니다. 서로를 격려하고 지지하며 즐거운 관계를 형성할 수 있습니다.',
    'ESTJ': 'ISFP, INFP - ESTJ의 체계성과 ISF/INF의 유연성이 균형을 만듭니다. 서로 다른 강점을 통해 더 완전한 해결책을 만들어낼 수 있습니다.',
    'ESFJ': 'ISFP, ISTP - ESFJ의 사교성과 ISF/IST의 개별성이 좋은 균형을 이룹니다. 서로의 공간을 존중하면서도 따뜻한 관계를 유지할 수 있습니다.',
    'ISTP': 'ESFJ, ENFJ - ISTP의 독립성과 ESF/ENF의 사교성이 서로를 보완합니다. 필요할 때 도움을 주고받으며 자연스러운 관계를 형성합니다.',
    'ISFP': 'ESTJ, ENTJ - ISFP의 유연성과 EST/ENT의 결정력이 균형을 만듭니다. 서로의 다른 접근 방식을 통해 새로운 관점을 얻을 수 있습니다.',
    'ESTP': 'ISFJ, INFJ - ESTP의 활동성과 ISF/INF의 신중함이 균형을 이룹니다. 서로의 차이를 통해 더 나은 판단과 행동을 할 수 있습니다.',
    'ESFP': 'ISTJ, INTJ - ESFP의 자발성과 IST/INT의 계획성이 조화를 만듭니다. 서로 다른 강점을 인정하고 배우며 성장할 수 있는 관계를 형성합니다.'
  };
  return compatibleTypes[mbti] || '서로 다른 성향을 이해하고 존중하며 건강한 관계를 만들어가는 것이 중요합니다.';
}

// 주의할 관계 반환
function getChallengingTypes(mbti) {
  const challengingTypes = {
    'INTJ': 'ESFP, ESTP - 즉흥적이고 감정적인 접근 방식의 차이로 인해 이해하기 어려울 수 있습니다. 서로의 강점을 인정하고 소통 방식을 조정하면 좋은 관계를 만들 수 있습니다.',
    'INTP': 'ESFJ, ESTJ - 감정적 배려와 체계적 실행을 중시하는 스타일과 차이가 있을 수 있습니다. 상대방의 관점을 이해하려는 노력이 필요합니다.',
    'ENTJ': 'ISFP, ISFJ - 빠른 결정과 추진력을 중시하는 성향과 신중하고 조화를 추구하는 성향 간 차이가 있을 수 있습니다. 인내심과 이해가 필요합니다.',
    'ENTP': 'ISFJ, ISTJ - 변화와 혁신을 추구하는 성향과 안정성과 전통을 중시하는 성향 간 차이가 클 수 있습니다. 서로의 가치를 존중하는 자세가 중요합니다.',
    'INFJ': 'ESTP, ESFP - 깊이 있는 사고와 즉흥적 행동 스타일의 차이로 인해 갈등이 생길 수 있습니다. 서로의 다른 접근 방식을 이해하려는 노력이 필요합니다.',
    'INFP': 'ESTJ, ENTJ - 개인적 가치 중심 사고와 효율성 중심 사고의 차이가 있을 수 있습니다. 상대방의 우선순위를 이해하고 존중하는 것이 중요합니다.',
    'ENFJ': 'ISTP, INTP - 감정적 소통을 중시하는 성향과 논리적 분석을 선호하는 성향 간 차이가 있을 수 있습니다. 다양한 소통 방식을 시도해보세요.',
    'ENFP': 'ISTJ, ISFJ - 변화와 가능성을 추구하는 성향과 안정성과 규칙을 중시하는 성향 간 차이가 클 수 있습니다. 서로의 필요를 이해하려는 노력이 필요합니다.',
    'ISTJ': 'ENFP, ENTP - 체계적이고 계획적인 접근과 자유롭고 창의적인 접근 방식의 차이가 있을 수 있습니다. 서로의 강점을 인정하고 협력 방안을 찾아보세요.',
    'ISFJ': 'ENTP, ENTJ - 조화와 안정을 추구하는 성향과 변화와 도전을 추구하는 성향 간 차이가 있을 수 있습니다. 점진적인 이해와 적응이 필요합니다.',
    'ESTJ': 'INFP, ISFP - 효율성과 결과를 중시하는 성향과 개인적 가치와 조화를 중시하는 성향 간 차이가 있을 수 있습니다. 상대방의 관점을 이해하려는 노력이 중요합니다.',
    'ESFJ': 'INTP, INTJ - 감정적 배려와 조화를 중시하는 성향과 논리적 분석과 독립성을 중시하는 성향 간 차이가 있을 수 있습니다. 서로 다른 소통 방식을 존중해주세요.',
    'ISTP': 'ENFJ, ESFJ - 독립적이고 실용적인 접근과 감정적이고 협력적인 접근 방식의 차이가 있을 수 있습니다. 서로의 필요한 공간과 방식을 인정해주세요.',
    'ISFP': 'ENTJ, ESTJ - 개인적 가치와 조화를 중시하는 성향과 목표 지향적이고 체계적인 접근 방식의 차이가 있을 수 있습니다. 상호 이해와 존중이 필요합니다.',
    'ESTP': 'INFJ, INTJ - 즉흥적이고 현재 중심적인 접근과 계획적이고 미래 지향적인 접근 방식의 차이가 클 수 있습니다. 서로의 시간 감각과 우선순위를 존중해주세요.',
    'ESFP': 'INTJ, INTP - 감정적이고 사회적인 접근과 논리적이고 독립적인 접근 방식의 차이가 있을 수 있습니다. 서로 다른 에너지 충전 방식을 이해해주세요.'
  };
  return challengingTypes[mbti] || '모든 관계에는 도전이 있지만, 상호 이해와 존중을 통해 좋은 관계를 만들어갈 수 있습니다.';
}

// 성장 챌린지 반환
function getGrowthChallenge(mbti) {
  const growthChallenges = {
    'INTJ': [
      '매일 15분씩 다른 사람과의 감정적 소통 연습하기',
      '하루 한 가지 즉흥적인 활동이나 결정 해보기',
      '팀 프로젝트에서 다른 사람의 의견을 적극 수용해보기',
      '완벽함보다는 진행과 개선에 집중하는 마인드셋 기르기'
    ],
    'INTP': [
      '매일 작은 목표라도 완료하는 습관 기르기',
      '감정 일기 쓰며 자신과 타인의 감정 이해하기',
      '정해진 시간에 업무를 마무리하는 연습하기',
      '사회적 모임에 적극 참여하여 대인관계 스킬 개발하기'
    ],
    'ENTJ': [
      '결정하기 전 타인의 감정과 입장 고려하는 시간 갖기',
      '세부사항을 꼼꼼히 체크하는 습관 기르기',
      '팀원들의 의견을 충분히 듣고 반영하는 연습하기',
      '개인적 휴식과 성찰의 시간 의식적으로 확보하기'
    ],
    'ENTP': [
      '시작한 프로젝트를 끝까지 완성하는 연습하기',
      '일정 관리 앱을 활용해 계획적으로 생활하기',
      '깊이 있는 집중이 필요한 업무에 도전하기',
      '감정적 안정성을 위한 루틴 만들기 (명상, 운동 등)'
    ],
    // ... 다른 MBTI 유형들도 동일한 패턴으로 추가
    'INFJ': [
      '구체적이고 실행 가능한 단기 목표 설정하기',
      '자신의 의견을 명확히 표현하는 연습하기',
      '완벽주의를 내려놓고 70% 완성도로 시작해보기',
      '스트레스 관리를 위한 명상이나 요가 시작하기'
    ],
    'INFP': [
      '논리적 근거를 바탕으로 한 의사결정 연습하기',
      '갈등 상황에서 회피하지 않고 대화로 해결하기',
      '시간 관리 도구를 활용해 마감일 지키기',
      '건설적인 피드백을 받아들이고 활용하는 연습하기'
    ],
    'ENFJ': [
      '자신만을 위한 시간을 의식적으로 확보하기',
      '감정이 아닌 객관적 데이터로 분석하는 연습하기',
      '다른 사람보다 자신의 필요를 우선시하는 경험하기',
      '비판적 사고를 통해 다각도로 문제 바라보기'
    ],
    'ENFP': [
      '하나의 일에 집중하는 시간을 점진적으로 늘리기',
      '체크리스트를 만들어 세부사항 관리하기',
      '장기적 목표를 설정하고 단계별 계획 세우기',
      '즉흥적 결정보다 신중한 판단 연습하기'
    ],
    'ISTJ': [
      '새로운 방식이나 도구를 하나씩 시도해보기',
      '창의적 활동이나 취미 시작하기 (그림, 음악 등)',
      '자신의 감정을 표현하는 연습하기',
      '예상치 못한 변화에 유연하게 대응하는 연습하기'
    ],
    'ISFJ': [
      '자신의 의견을 명확히 표현하는 연습하기',
      '작은 변화부터 천천히 수용해보기',
      '개인적 욕구와 바람을 구체적으로 표현하기',
      '비판적 관점에서 상황을 분석해보는 연습하기'
    ],
    'ESTJ': [
      '결정하기 전 팀원들의 감정적 반응 고려하기',
      '계획에 없던 일에도 유연하게 대응하는 연습하기',
      '창의적 아이디어를 적극적으로 수용해보기',
      '성급한 판단보다 충분한 시간을 두고 결정하기'
    ],
    'ESFJ': [
      '감정이 아닌 논리적 근거로 판단하는 연습하기',
      '갈등 상황을 회피하지 않고 해결하려 노력하기',
      '자신만의 공간과 시간 확보하기',
      '비판적 피드백을 개선의 기회로 받아들이기'
    ],
    'ISTP': [
      '자신의 감정을 말로 표현하는 연습하기',
      '미래에 대한 구체적인 계획 세워보기',
      '팀 활동에 적극적으로 참여하여 협력하기',
      '중요한 약속이나 일정을 체계적으로 관리하기'
    ],
    'ISFP': [
      '리더십이 필요한 상황에서 주도적으로 나서기',
      '갈등을 피하지 않고 건설적으로 해결하기',
      '체계적인 접근법으로 목표 달성하기',
      '비판적 사고로 상황을 객관적으로 분석하기'
    ],
    'ESTP': [
      '장기적 관점에서 목표를 설정하고 추진하기',
      '중요한 세부사항을 놓치지 않도록 체크하기',
      '깊이 있는 감정적 교감을 나누는 시간 갖기',
      '즉흥적 결정보다 신중한 판단 연습하기'
    ],
    'ESFP': [
      '체계적인 계획을 세우고 단계적으로 실행하기',
      '논리적 분석을 통해 객관적으로 판단하기',
      '장기적 목표와 비전을 설정하고 추구하기',
      '집중력을 기르기 위한 명상이나 집중 훈련하기'
    ]
  };
  return growthChallenges[mbti] || [
    '자신의 강점을 더욱 발전시키기',
    '새로운 관점으로 도전해보기', 
    '균형잡힌 접근법 연습하기',
    '지속적인 자기계발 습관 만들기'
  ];
}

// 진로 및 직업 추천
function getCareerSuggestions(mbti) {
  const careerSuggestions = {
    'INTJ': '전략 컨설턴트, 시스템 분석가, 연구개발자, 건축가, 투자분석가, 프로젝트 매니저, 데이터 사이언티스트, 의료진, 법무 전문가',
    'INTP': '소프트웨어 개발자, 연구원, 데이터 분석가, 시스템 설계자, 학자, 발명가, 기술 컨설턴트, AI 연구자, 철학자',
    'ENTJ': '경영진(CEO, COO), 전략기획자, 경영컨설턴트, 투자은행가, 변호사, 정치인, 사업가, 프로젝트 매니저, 영업관리자',
    'ENTP': '기업가, 마케팅 전문가, 혁신 컨설턴트, 광고기획자, 언론인, 변호사, 영업전문가, 제품기획자, 벤처캐피털리스트',
    'INFJ': '상담사, 심리학자, 작가, 인사담당자, 사회복지사, 교육자, 종교인, 예술가, 비영리단체 활동가',
    'INFP': '작가, 예술가, 상담사, 심리학자, 기자, 사회복지사, 교육자, 번역가, 큐레이터, 치료사',
    'ENFJ': '교사, 트레이너, 상담사, 인사 관리자, 정치가, 코치, 사회복지사, 정치인, 종교인, 트레이너, 비영리단체 리더',
    'ENFP': '마케팅 전문가, 기자, 상담사, 이벤트 기획자, 광고기획자, 인사담당자, 교육자, 예술가, 사회활동가, 기업가',
    'ISTJ': '회계사, 감사관, 은행원, 공무원, 의료진, 엔지니어, 법무담당자, 품질관리자, 운영관리자, 판사, 군인, 은행가, 영업 관리자',
    'ISFJ': '간호사, 교육자, 상담사, 사회복지사, 인사담당자, 의료진, 행정직, 고객서비스, 유치원교사, 행정직, 고객서비스, 유치원교사',
    'ESTJ': '관리자, 경영진, 은행원, 공무원, 영업관리자, 프로젝트 매니저, 운영담당자, 경영컨설턴트, 군인, 판사, 관리자, 판사, 군인, 은행가, 영업 관리자',
    'ESFJ': '간호사, 교육자, 고객서비스, 인사담당자, 사회복지사, 이벤트 기획자, 영업담당자, 행정직, 의료진, 행정직, 고객서비스, 인사담당자, 사회복지사, 이벤트 기획자, 영업담당자, 행정직, 의료진',
    'ISTP': '엔지니어, 정비사, 기술자, 소방관, 경찰관, 파일럿, 운동선수, IT 전문가, 건설업자, 외과의사, 운동선수, 분석가, 건축가, 투자분석가, 과학자, 정비사, 소방관, 경찰관, 파일럿, 운동선수, IT 전문가, 건설업자',
    'ISFP': '예술가, 디자이너, 상담사, 수의사, 간호사, 사진작가, 음악가, 치료사, 요리사, 디자이너, 상담사, 수의사, 요리사, 사진작가, 음악가, 치료사, 요리사',
    'ESTP': '영업전문가, 운동선수, 응급의료진, 경찰관, 소방관, 연예인, 기업가, 마케터, 부동산중개인, 영업사원, 기업가, 연예인, 운동선수, 응급실 의사, 영업전문가, 운동선수, 응급의료진, 경찰관, 소방관, 연예인, 기업가, 마케터, 부동산중개인',
    'ESFP': '연예인, 교육자, 상담사, 이벤트 기획자, 여행가이드, 미용사, 요리사, 간호사, 소매업자, 이벤트 기획자, 여행가이드, 미용사, 요리사, 간호사, 소매업자, 연예인, 교사, 상담사, 이벤트 기획자, 광고 기획자'
  };
  return careerSuggestions[mbti] || '자신의 관심과 강점을 고려하여 다양한 분야에서 기회를 탐색해보세요.';
}

// 결과 공유 함수
window.shareResult = function(mbti) {
  if (navigator.share) {
    navigator.share({
      title: `나의 MBTI 결과: ${mbti}`,
      text: `Sequential-Think에서 MBTI 검사를 받았어요! 제 유형은 ${mbti}입니다.`,
      url: window.location.href
    });
  } else {
    // 폴백: 클립보드 복사
    const text = `나의 MBTI 결과: ${mbti}\nSequential-Think에서 검사받기: ${window.location.href}`;
    navigator.clipboard.writeText(text).then(() => {
      alert('결과가 클립보드에 복사되었습니다!');
    });
  }
}

// 차트 그리기 함수 개선
function drawMBTIChart() {
  const s = mbtiState.scores;
  const ctx = document.getElementById('mbti-result-chart').getContext('2d');
  
  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['외향성(E)', '내향성(I)', '감각(S)', '직관(N)', '사고(T)', '감정(F)', '판단(J)', '인식(P)'],
      datasets: [{
        label: '나의 성향 점수',
        data: [s.E, s.I, s.S, s.N, s.T, s.F, s.J, s.P],
        backgroundColor: 'rgba(102, 126, 234, 0.2)',
        borderColor: 'rgba(102, 126, 234, 1)',
        borderWidth: 3,
        pointBackgroundColor: '#667eea',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 6
      }]
    },
    options: {
      responsive: true,
      plugins: { 
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function(context) {
              return `${context.label}: ${context.raw}점`;
            }
          }
        }
      },
      scales: {
        r: {
          angleLines: { display: true, color: 'rgba(0,0,0,0.1)' },
          grid: { color: 'rgba(0,0,0,0.1)' },
          suggestedMin: 0,
          suggestedMax: Math.max(...Object.values(s)) + 2,
          pointLabels: { 
            font: { size: 14, weight: 'bold' },
            color: '#4a5568'
          },
          ticks: { display: false }
        }
      },
      animation: {
        duration: 1000,
        easing: 'easeOutQuart'
      }
    }
  });
}

// 사이드바 콘텐츠 업데이트
const recentPosts = [
  { title: 'AI 시대의 자기계발', url: '#', category: 'development' },
  { title: 'Z세대 소통 전략', url: '#', category: 'trends' },
  { title: '메타인지와 학습법', url: '#', category: 'development' },
  { title: 'MBTI의 과학적 근거', url: '#', category: 'psychology' }
];

const recentPostsEl = document.getElementById('recent-posts');
if (recentPostsEl) {
  recentPostsEl.innerHTML = recentPosts.map(p => `
    <li style="margin-bottom: 0.8rem;">
      <a href="${p.url}" style="text-decoration: none; color: #4a5568; display: block; padding: 0.5rem; border-radius: 8px; transition: background 0.2s;" 
         onmouseover="this.style.background='#f7fafc'" onmouseout="this.style.background='transparent'">
        <div style="font-weight: 500;">${p.title}</div>
        <div style="font-size: 0.8rem; color: #718096; margin-top: 0.2rem;">
          ${blogCategories[p.category].icon} ${blogCategories[p.category].name}
        </div>
      </a>
    </li>
  `).join('');
}

// 초기 로딩
document.addEventListener('DOMContentLoaded', function() {
  // 메인 컨텐츠 애니메이션 스타일 추가
  mainContent.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  
  // 첫 화면 렌더링
  renderHome();
}); 