const profile = {
    name: 'Trần Ngọc Vân Nghi',
    study: 'Thương mại điện tử',
    school: 'Đại học Kinh tế TP. Hồ Chí Minh (UEH)',
    status: 'Đang học',
    role: 'Senior Customer Care Solution Specialist',
    tools: ['Power BI', 'Google Search Console', 'Ahrefs', 'WordPress', 'Canva', 'Microsoft Excel', 'PowerPoint', 'SQL'],
    serviceResponsibilities: [
        { title: 'Xây dựng giải pháp CSKH', description: 'Nghiên cứu nhu cầu khách hàng, xây dựng giải pháp nâng cao trải nghiệm (CX) và chất lượng dịch vụ.' },
        { title: 'Phân tích dữ liệu khách hàng', description: 'Phân tích phản hồi, khiếu nại, hành vi, CSAT và NPS để xác định nguyên nhân gốc rễ.' },
        { title: 'Cải tiến quy trình', description: 'Rà soát quy trình chăm sóc, xử lý khiếu nại và tối ưu các điểm chạm trong hành trình khách hàng.' },
        { title: 'Quản lý chất lượng dịch vụ', description: 'Xây dựng tiêu chuẩn dịch vụ, tiêu chí đánh giá CSKH và theo dõi việc thực hiện.' },
        { title: 'Triển khai dự án', description: 'Tham gia hoặc chủ trì sáng kiến cải tiến dịch vụ, tự động hóa CSKH và ứng dụng CRM, Chatbot, AI.' },
        { title: 'Phối hợp liên phòng ban', description: 'Phối hợp cùng IT, Kinh doanh, Marketing và Vận hành để triển khai giải pháp đồng bộ.' },
        { title: 'Báo cáo và tư vấn', description: 'Tổng hợp báo cáo, phân tích hiệu quả giải pháp và tư vấn phương án cải thiện cho cấp quản lý.' },
    ],
    serviceMetrics: [
        { name: 'CSAT', description: 'Mức độ hài lòng khách hàng' },
        { name: 'NPS', description: 'Mức độ sẵn sàng giới thiệu' },
        { name: 'CES', description: 'Mức độ dễ dàng khi sử dụng dịch vụ' },
        { name: 'FCR', description: 'Tỷ lệ xử lý ngay lần đầu' },
        { name: 'AHT', description: 'Thời gian xử lý trung bình' },
        { name: 'SLA', description: 'Cam kết chất lượng dịch vụ' },
        { name: 'Complaint Rate', description: 'Tỷ lệ khiếu nại' },
        { name: 'Process Improvement', description: 'Hiệu quả dự án cải tiến' },
    ],
    ecommerceApplications: [
        { title: 'Customer Journey', description: 'Kết nối điểm chạm và tối ưu hành trình mua sắm số.' },
        { title: 'CRM & Data Analytics', description: 'Khai thác dữ liệu khách hàng để hỗ trợ tương tác và quyết định.' },
        { title: 'Hành vi tiêu dùng số', description: 'Phân tích hành vi trên các kênh và nền tảng trực tuyến.' },
        { title: 'Business Analysis', description: 'Làm rõ nhu cầu và chuyển hóa bài toán thành yêu cầu giải pháp.' },
    ],
    interests: [
        'E-commerce Operations',
        'Customer Experience',
        'Customer Service Solutions',
        'Business Analysis',
        'Data Analysis',
    ],
};

const projects = {
    cafe: {
        slug: 'cafe-process',
        number: '01',
        name: 'Café Business Process Improvement',
        short: 'Phân tích quy trình hoạt động của mô hình kinh doanh café, tìm điểm cần cải thiện và đề xuất hướng nâng cao hoạt động.',
        problem: 'Quy trình hoạt động của mô hình kinh doanh café cần được xem xét để nhận diện các vấn đề và cơ hội cải thiện.',
        goal: 'Phân tích quy trình, xác định vấn đề và đề xuất hướng cải thiện hoạt động.',
        contribution: 'Phân tích quy trình hoạt động; nhận diện vấn đề; đề xuất hướng cải thiện.',
        methods: 'Phân tích quy trình hoạt động.',
        output: 'Phân tích quy trình, các vấn đề được xác định và đề xuất cải thiện.',
        planet: 'cafe',
        visual: 'PROCESS / FLOW',
    },
    hostel: {
        slug: 'hostel-system',
        number: '02',
        name: 'Hostel Management System',
        short: 'Phân tích, thiết kế hệ thống quản lý nhà trọ với các sơ đồ mô tả chức năng, hoạt động và dữ liệu.',
        problem: 'Bài toán phân tích và thiết kế một hệ thống quản lý nhà trọ.',
        goal: 'Mô hình hóa hệ thống qua các sơ đồ nghiệp vụ và dữ liệu.',
        contribution: 'Phân tích và thiết kế hệ thống; xây dựng Use Case Diagram, Activity Diagram, Sequence Diagram và Entity Relationship Diagram (ERD).',
        methods: 'Use Case Diagram · Activity Diagram · Sequence Diagram · ERD.',
        output: 'Bộ sơ đồ phân tích và thiết kế hệ thống gồm Use Case, Activity, Sequence và ERD.',
        planet: 'hostel',
        visual: 'SYSTEM / DESIGN',
    },
    pizza: {
        slug: 'pizza-analysis',
        number: '03',
        name: 'Pizza Ordering Process Analysis',
        short: 'Phân tích quy trình đặt pizza và các bên liên quan, tập trung vào vai trò và mức độ ảnh hưởng.',
        problem: 'Quy trình đặt pizza có nhiều bên liên quan với vai trò và mức độ ảnh hưởng khác nhau.',
        goal: 'Phân tích quy trình, xác định stakeholder và làm rõ vai trò, mức độ ảnh hưởng của các bên.',
        contribution: 'Phân tích quy trình đặt pizza; xác định stakeholder; phân tích vai trò và mức độ ảnh hưởng.',
        methods: 'Phân tích quy trình và stakeholder.',
        output: 'Phân tích quy trình, danh sách stakeholder, vai trò và mức độ ảnh hưởng.',
        planet: 'pizza',
        visual: 'JOURNEY / PEOPLE',
    },
};

const pageDetails = {
    home: { title: 'Home', vn: 'Trang chủ', index: '01', description: 'Portfolio Trần Ngọc Vân Nghi — Customer Care Solutions, Customer Experience và Thương mại Điện tử tại UEH.' },
    about: { title: 'About Me', vn: 'Giới thiệu', index: '02', description: 'Hành trình chuyển tiếp từ giải pháp chăm sóc khách hàng đến Thương mại Điện tử tại UEH.' },
    experience: { title: 'Experience', vn: 'Kinh nghiệm', index: '03', description: 'Kinh nghiệm trong giải pháp chăm sóc khách hàng, phân tích dữ liệu dịch vụ và cải tiến quy trình.' },
    projects: { title: 'Academic Projects', vn: 'Dự án học thuật', index: '04', description: 'Một số dự án học thuật về cải thiện quy trình, phân tích hệ thống và stakeholder.' },
    skills: { title: 'Skills & Interests', vn: 'Kỹ năng & Quan tâm', index: '05', description: 'Công cụ đã xác nhận và các lĩnh vực kiến thức, định hướng.' },
    education: { title: 'Education', vn: 'Học vấn', index: '06', description: 'Hành trình học tập ngành Thương mại điện tử tại Đại học Kinh tế.' },
    contact: { title: 'Contact', vn: 'Liên hệ', index: '07', description: 'Kết nối với Trần Ngọc Vân Nghi.' },
};

const routes = [
    { key: 'home', label: 'Trang chủ', path: '' },
    { key: 'about', label: 'Giới thiệu', path: 'about/' },
    { key: 'experience', label: 'Kinh nghiệm', path: 'experience/' },
    { key: 'projects', label: 'Dự án', path: 'projects/' },
    { key: 'skills', label: 'Kỹ năng', path: 'skills/' },
    { key: 'education', label: 'Học vấn', path: 'education/' },
    { key: 'contact', label: 'Liên hệ', path: 'contact/' },
];

const onePageNavigation = [
    { label: 'Trang chủ', path: '#home' },
    { label: 'Giới thiệu', path: '#about' },
    { label: 'Định hướng', path: '#career-direction' },
    { label: 'Dự án', path: '#projects' },
    { label: 'Kỹ năng', path: '#skills' },
    { label: 'Học vấn', path: '#education' },
    { label: 'Liên hệ', path: '#contact' },
];

const body = document.body;
const base = body.dataset.base || './';
const pageKey = body.dataset.page || 'home';
const detail = body.dataset.project ? projects[body.dataset.project] : null;
const app = document.querySelector('#app');

function routeUrl(path) {
    return `${base}${path}`;
}

function arrowIcon() {
    return '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11m-4-4 4 4-4 4" /></svg>';
}

function header() {
    const navigationItems = pageKey === 'home'
        ? onePageNavigation
        : routes.map((route) => ({ label: route.label, path: routeUrl(route.path), key: route.key }));
    return `
        <header class="site-header" id="site-header">
            <a class="brand" href="${pageKey === 'home' ? '#home' : routeUrl('')}" aria-label="Nghi — Trang chủ">
                <span class="brand__mark">N</span><span class="brand__name">nghi<span>.</span></span>
            </a>
            <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation" aria-label="Mở menu">
                <span></span><span></span>
            </button>
            <nav class="navigation" id="primary-navigation" aria-label="Điều hướng chính">
                ${navigationItems.map((item) => `<a class="navigation__link ${pageKey === 'home' ? (item.path === '#home' ? 'is-active' : '') : item.key && (pageKey === item.key || (pageKey === 'project-detail' && item.key === 'projects')) ? 'is-active' : ''}" href="${item.path}" ${item.key === pageKey ? 'aria-current="page"' : ''}>${item.label}</a>`).join('')}
            </nav>
        </header>`;
}

function background() {
    return `
        <div class="cosmos" aria-hidden="true">
            <div class="cosmos__nebula cosmos__nebula--one"></div>
            <div class="cosmos__nebula cosmos__nebula--two"></div>
            <div class="cosmos__stars"></div>
            <div class="cosmos__grain"></div>
            <div class="cosmos__cursor-light"></div>
            <div class="cosmos__particles"></div>
            <div class="cosmos__bubbles"></div>
            <div class="cosmos__shooting-star"></div>
            <canvas class="cosmos__confetti"></canvas>
        </div>`;
}

function footer(current, isDetail = false) {
    if (current === 'home') {
        return `
            <footer class="site-footer site-footer--one-page">
                <a class="brand brand--footer" href="#home"><span class="brand__mark">N</span><span class="brand__name">nghi<span>.</span></span></a>
                <p>Trần Ngọc Vân Nghi <span>·</span> Portfolio cá nhân</p>
                <a class="back-to-top" href="#home">Về đầu trang ↑</a>
            </footer>`;
    }
    const position = isDetail ? routes.findIndex((route) => route.key === 'projects') : routes.findIndex((route) => route.key === current);
    const previous = routes[Math.max(0, position - 1)];
    const next = routes[Math.min(routes.length - 1, position + 1)];
    const previousPath = isDetail ? 'projects/' : previous.path;
    const nextPath = isDetail ? `projects/${Object.values(projects)[(Object.values(projects).findIndex((item) => item === detail) + 1) % 3].slug}/` : next.path;
    return `
        <nav class="page-turn" aria-label="Điều hướng trang">
            <a class="page-turn__link" href="${routeUrl(previousPath)}"><span>← Trước</span><strong>${isDetail ? 'Dự án' : previous.label}</strong></a>
            <span class="page-turn__constellation" aria-hidden="true">✦ · ✧ · ✦</span>
            <a class="page-turn__link page-turn__link--next" href="${routeUrl(nextPath)}"><span>Tiếp theo →</span><strong>${isDetail ? 'Dự án kế tiếp' : next.label}</strong></a>
        </nav>
        <footer class="site-footer">
            <a class="brand brand--footer" href="${routeUrl('')}"><span class="brand__mark">N</span><span class="brand__name">nghi<span>.</span></span></a>
            <p>Trần Ngọc Vân Nghi <span>·</span> Portfolio cá nhân</p>
            <a class="back-to-top" href="#page-content">Về đầu trang ↑</a>
        </footer>`;
}

function pageHeading(index, eyebrow, title, lead) {
    return `
        <div class="page-heading" data-reveal>
            <p class="eyebrow"><span class="eyebrow__line"></span>${index} / ${eyebrow}</p>
            <h1>${title}</h1>
            ${lead ? `<p class="page-heading__lead">${lead}</p>` : ''}
        </div>`;
}

function homePage() {
    return `
        <section class="home-scene" id="home" aria-labelledby="home-title">
            <div class="home-copy">
                <p class="eyebrow"><span class="eyebrow__line"></span> E-COMMERCE · UEH</p>
                <h1 id="home-title" class="home-title"><span>Trần Ngọc</span><em>Vân Nghi</em></h1>
                <p class="home-specialty">${profile.role.toUpperCase()}</p>
                <p class="home-intro">Chào mừng bạn đến với không gian số của <strong>${profile.name}</strong> — sinh viên ${profile.study} tại ${profile.school}. Nơi tư duy hệ thống, phân tích dữ liệu kinh doanh và sự thấu hiểu hành vi khách hàng hòa quyện, nhằm tạo ra những giải pháp CSKH toàn diện và trải nghiệm mua sắm số mượt mà.</p>
                <div class="home-actions">
                    <a class="button button--primary" href="#projects">Khám phá dự án ${arrowIcon()}</a>
                    <a class="text-link" href="#contact"><span class="text-link__star">✦</span> Kết nối với mình</a>
                </div>
                <div class="home-stats" aria-label="Định vị chuyên môn và học vấn">
                    <div><strong>ĐỊNH VỊ CHUYÊN MÔN</strong><span>${profile.role}</span></div>
                    <i></i>
                    <div><strong>ĐANG HỌC</strong><span>${profile.study} · UEH</span></div>
                </div>
            </div>
            <div class="home-orbit" aria-hidden="true">
                <span class="orbit orbit--one"></span><span class="orbit orbit--two"></span><span class="orbit orbit--three"></span>
                <span class="orbit-tracer"></span>
                <span class="home-planet home-planet--main"><i></i><b></b></span>
                <span class="home-planet home-planet--small"></span>
                <span class="home-planet home-planet--mini"></span>
                <span class="home-planet home-planet--pearl"></span>
                <span class="home-constellation home-constellation--one">✧</span>
                <span class="home-constellation home-constellation--two">✦</span>
                <span class="home-caption home-caption--top">A WORLD OF IDEAS</span>
                <span class="home-caption home-caption--bottom">CURIOUS BY NATURE · 01</span>
            </div>
            <span class="home-edge-label" aria-hidden="true">SCROLL TO EXPLORE <span>↓</span></span>
        </section>

        <section class="portfolio-section" id="about" aria-labelledby="about-title">
            <div class="section-heading" data-reveal>
                <p class="eyebrow"><span class="eyebrow__line"></span> 01 / ABOUT ME</p>
                <h2 id="about-title">Tư duy hệ thống,<br><em>thấu hiểu khách hàng.</em></h2>
                <p class="section-lead">Hành trình chuyển tiếp: từ Chuyên viên chính Giải pháp CSKH đến Chuyên viên Thương mại Điện tử.</p>
            </div>
            <blockquote class="story-quote glass-card" data-reveal>“Trong vũ trụ kinh tế số, công nghệ chỉ thực sự tỏa sáng khi đặt đúng vào một hành trình trải nghiệm chạm đến cảm xúc của con người.”</blockquote>
            <article class="personal-story glass-card" data-reveal>
                <p>Xuất phát điểm từ vị trí <strong>Chuyên viên chính Giải pháp Chăm sóc Khách hàng (Senior CS Solution Specialist)</strong>, tôi đã dành nhiều thời gian đi sâu vào phản hồi khách hàng, phân tích dữ liệu khiếu nại qua CSAT, NPS, FCR và tháo gỡ những điểm nghẽn trong quy trình dịch vụ. Hành trình ấy rèn luyện tư duy hệ thống, khả năng phân tích nguyên nhân gốc rễ (Root Cause Analysis) và sự thấu hiểu tâm lý người tiêu dùng.</p>
                <p>Tôi nhận ra chăm sóc khách hàng xuất sắc không chỉ là xử lý sự cố, mà còn là thiết kế một hành trình mua sắm không ma sát (Frictionless Experience) ngay từ điểm chạm đầu tiên. Đó là động lực để tôi theo đuổi chuyên sâu <strong>Thương mại Điện tử tại UEH</strong>.</p>
                <p>Tại UEH, tôi tiếp cận công nghệ dưới lăng kính thị trường hiện đại: tối ưu phễu chuyển đổi (CRO), phân tích dữ liệu kinh doanh (BA), vận hành đa kênh (Omnichannel) và ứng dụng Power BI, SQL, CRM. Sự kết hợp giữa kinh nghiệm giải pháp dịch vụ và tầm nhìn TMĐT giúp tôi nhìn sản phẩm số như một vũ trụ trải nghiệm toàn diện.</p>
            </article>
            <div class="about-grid">
                <article class="about-card glass-card" data-reveal>
                    <span class="card-index">01 / SYSTEM THINKING</span>
                    <h3>Kết nối các điểm chạm</h3>
                    <p>Quan sát cách quy trình, con người và công cụ phối hợp trong hành trình khách hàng để nhận diện điểm nghẽn và cơ hội cải thiện.</p>
                </article>
                <article class="about-card glass-card" data-reveal>
                    <span class="card-index">02 / DATA ANALYSIS</span>
                    <h3>Đặt câu hỏi từ dữ liệu</h3>
                    <p>Dùng tư duy phân tích để sắp xếp thông tin, tìm insight và hỗ trợ đề xuất giải pháp chăm sóc khách hàng có cơ sở.</p>
                </article>
                <article class="about-card glass-card" data-reveal>
                    <span class="card-index">03 / CUSTOMER FIRST</span>
                    <h3>Thiết kế từ nhu cầu thật</h3>
                    <p>Mong muốn biến phản hồi và nhu cầu của khách hàng thành trải nghiệm nhất quán, thuận tiện trong môi trường thương mại điện tử.</p>
                </article>
            </div>
            <blockquote class="philosophy-quote" data-reveal><span class="card-index">MY PHILOSOPHY</span><p>“Lấy sự thấu hiểu khách hàng làm kim chỉ nam, lấy dữ liệu và quy trình chuẩn hóa làm bộ khung xương sống — để kiến tạo nên những giải pháp Thương mại Điện tử bền vững và bứt phá.”</p></blockquote>
        </section>

        <section class="portfolio-section portfolio-section--alternate" id="career-direction" aria-labelledby="career-title">
            <div class="section-heading" data-reveal>
                <p class="eyebrow"><span class="eyebrow__line"></span> 02 / PROFESSIONAL FOCUS</p>
                <h2 id="career-title">Giải pháp CSKH<br><em>toàn diện và có đo lường.</em></h2>
                <p class="section-lead">Vai trò ${profile.role} kết nối nhu cầu khách hàng, chất lượng dịch vụ, dữ liệu và vận hành liên phòng ban.</p>
            </div>
            <div class="direction-grid">
                <article class="direction-card glass-card" data-reveal><span>01</span><h3>Customer Experience</h3><p>Thiết kế hành trình khách hàng thuận tiện, nhất quán và có khả năng đo lường.</p></article>
                <article class="direction-card glass-card" data-reveal><span>02</span><h3>Customer Care Solutions</h3><p>Kết nối nhu cầu khách hàng với giải pháp dịch vụ và tiêu chuẩn chất lượng phù hợp.</p></article>
                <article class="direction-card glass-card" data-reveal><span>03</span><h3>Business Analysis &amp; Data</h3><p>Làm rõ bài toán, phân tích dữ liệu và đề xuất cải tiến dựa trên insight.</p></article>
                <article class="direction-card glass-card" data-reveal><span>04</span><h3>E-commerce Operations</h3><p>Vận dụng kiến thức TMĐT để đồng bộ trải nghiệm khách hàng và hoạt động kinh doanh số.</p></article>
            </div>
            <div class="responsibility-heading"><span class="card-index">CORE RESPONSIBILITIES</span><h3>Các trọng tâm công việc</h3></div>
            <div class="responsibility-grid">
                ${profile.serviceResponsibilities.map((item, index) => `<article class="responsibility-card glass-card" data-reveal><span>0${index + 1}</span><div><h2>${item.title}</h2><p>${item.description}</p></div></article>`).join('')}
            </div>
        </section>

        <section class="portfolio-section" id="projects" aria-labelledby="projects-title">
            <div class="section-heading" data-reveal>
                <p class="eyebrow"><span class="eyebrow__line"></span> 03 / PROJECTS &amp; INITIATIVES</p>
                <h2 id="projects-title">Ý tưởng tạo nên<br><em>trải nghiệm tốt hơn.</em></h2>
                <p class="section-lead">Một số hướng dự án mình mong muốn nghiên cứu và phát triển trong lĩnh vực CSKH.</p>
            </div>
            <div class="initiative-grid">
                <article class="initiative-card glass-card" data-reveal>
                    <div class="initiative-card__symbol" aria-hidden="true">⌁</div>
                    <span class="card-index">CUSTOMER JOURNEY · PROJECT IDEA</span>
                    <h3>Tối ưu hóa hành trình khách hàng</h3>
                    <p>Phác họa các điểm chạm, nhận diện những bước gây trở ngại và đề xuất cơ hội cải thiện trải nghiệm mua sắm trực tuyến.</p>
                    <span class="initiative-card__tag">Hướng nghiên cứu</span>
                </article>
                <article class="initiative-card glass-card" data-reveal>
                    <div class="initiative-card__symbol" aria-hidden="true">✧</div>
                    <span class="card-index">CS AUTOMATION · PROJECT IDEA</span>
                    <h3>Tự động hóa quy trình CSKH</h3>
                    <p>Khảo sát các tác vụ lặp lại trong chăm sóc khách hàng và lên ý tưởng quy trình hỗ trợ phản hồi nhất quán, kịp thời.</p>
                    <span class="initiative-card__tag">Hướng nghiên cứu</span>
                </article>
            </div>
            <div class="metrics-panel glass-card" data-reveal>
                <div class="metrics-panel__heading"><span class="card-index">SERVICE PERFORMANCE</span><h3>Chỉ số theo dõi hiệu quả</h3><p>Khung KPI tham khảo — không biểu thị kết quả thực tế.</p></div>
                <div class="metrics-grid">${profile.serviceMetrics.map((metric) => `<article class="metric-card"><strong>${metric.name}</strong><span>${metric.description}</span></article>`).join('')}</div>
            </div>
        </section>

        <section class="portfolio-section portfolio-section--alternate" id="skills" aria-labelledby="skills-title">
            <div class="section-heading" data-reveal>
                <p class="eyebrow"><span class="eyebrow__line"></span> 04 / SKILLS &amp; TOOLS</p>
                <h2 id="skills-title">Công cụ và<br><em>năng lực hướng tới.</em></h2>
            </div>
            <div class="skills-panel glass-card" data-reveal>
                <div class="skills-group">
                    <span class="card-index">TOOLS</span>
                    <div class="skill-chips">${profile.tools.map((tool) => `<span>${tool}</span>`).join('')}</div>
                </div>
                <div class="skills-group">
                    <span class="card-index">SERVICE &amp; ANALYSIS</span>
                    <div class="skill-chips"><span>Customer Care Solutions</span><span>Customer Experience</span><span>Business Analysis</span><span>CSAT · NPS · CES</span><span>FCR · AHT · SLA</span></div>
                </div>
                <p class="skills-disclaimer">KPI là khung đo lường hiệu quả dịch vụ; Process Improvement theo dõi hiệu quả dự án cải tiến.</p>
            </div>
        </section>

        <section class="portfolio-section" id="education" aria-labelledby="education-title">
            <div class="section-heading" data-reveal>
                <p class="eyebrow"><span class="eyebrow__line"></span> 05 / EDUCATION</p>
                <h2 id="education-title">Nền tảng học tập<br><em>Thương mại điện tử.</em></h2>
            </div>
            <article class="education-summary glass-card" data-reveal>
                <div class="education-summary__mark" aria-hidden="true">UEH</div>
                <div>
                    <span class="card-index">BACHELOR'S DEGREE · IN PROGRESS</span>
                    <h3>Cử nhân Thương mại Điện tử</h3>
                    <p>Đại học Kinh tế TP. Hồ Chí Minh (UEH)</p>
                </div>
                <span class="education-summary__status">Đang học</span>
            </article>
            <div class="education-focus-grid">
                ${profile.ecommerceApplications.map((item, index) => `<article class="education-focus-card glass-card" data-reveal><span>0${index + 1}</span><div><h3>${item.title}</h3><p>${item.description}</p></div></article>`).join('')}
            </div>
        </section>

        <section class="portfolio-section portfolio-section--contact" id="contact" aria-labelledby="contact-title">
            <div class="section-heading" data-reveal>
                <p class="eyebrow"><span class="eyebrow__line"></span> 06 / CONTACT</p>
                <h2 id="contact-title">Mở cổng vũ trụ,<br><em>bắt đầu kết nối.</em></h2>
                <p class="section-lead">Mình luôn sẵn sàng kết nối về Customer Experience, giải pháp CSKH và thương mại điện tử.</p>
            </div>
            <div class="contact-links">
                <a class="contact-link glass-card" href="mailto:your.email@example.com" data-reveal>
                    <span class="contact-link__icon" aria-hidden="true">✉</span>
                    <span><small>EMAIL</small><strong>your.email@example.com</strong></span>
                    ${arrowIcon()}
                </a>
                <a class="contact-link glass-card" href="https://www.linkedin.com/in/your-profile/" target="_blank" rel="noopener noreferrer" data-reveal>
                    <span class="contact-link__icon" aria-hidden="true">in</span>
                    <span><small>LINKEDIN</small><strong>linkedin.com/in/your-profile</strong></span>
                    ${arrowIcon()}
                </a>
            </div>
            <p class="contact-placeholder-note">Hãy thay email và đường dẫn LinkedIn mẫu bằng thông tin liên hệ của bạn.</p>
        </section>`;
}

function aboutPage() {
    return `
        <section class="page-shell page-shell--about">
            ${pageHeading('02', 'ABOUT ME', 'Từ giải pháp CSKH<br><em>đến vũ trụ TMĐT.</em>', 'Hành trình chuyển tiếp từ Chuyên viên chính Giải pháp CSKH đến Chuyên viên Thương mại Điện tử.') }
            <blockquote class="story-quote glass-card" data-reveal>“Trong vũ trụ kinh tế số, công nghệ chỉ thực sự tỏa sáng khi đặt đúng vào một hành trình trải nghiệm chạm đến cảm xúc của con người.”</blockquote>
            <article class="personal-story glass-card" data-reveal>
                <p>Xuất phát điểm từ vai trò <strong>${profile.role}</strong>, tôi đã dành nhiều thời gian đi sâu vào phản hồi, phân tích dữ liệu khiếu nại (CSAT, NPS, FCR) và tháo gỡ những điểm nghẽn trong quy trình dịch vụ. Trải nghiệm đó rèn luyện tư duy hệ thống, phân tích nguyên nhân gốc rễ (Root Cause Analysis) và sự thấu hiểu tâm lý người tiêu dùng.</p>
                <p>Tôi nhận ra dịch vụ xuất sắc không chỉ xử lý sự cố khi xảy ra, mà cần thiết kế một hành trình mua sắm không ma sát (Frictionless Experience) từ điểm chạm đầu tiên. Đó là lý do tôi theo học chuyên sâu <strong>${profile.study} tại ${profile.school}</strong>.</p>
                <p>Tại UEH, tôi tiếp cận CRO, phân tích dữ liệu kinh doanh (BA), vận hành đa kênh (Omnichannel) và ứng dụng Power BI, SQL, CRM. Sự kết hợp giữa kinh nghiệm giải pháp dịch vụ và nền tảng TMĐT giúp tôi nhìn sản phẩm số như một trải nghiệm toàn diện dành cho khách hàng.</p>
            </article>
            <div class="about-layout">
                <div class="about-orbital" aria-hidden="true">
                    <span class="orbit orbit--one"></span><span class="orbit orbit--two"></span>
                    <span class="about-orbital__planet"></span>
                    <span class="about-orbital__satellite">✦</span>
                    <span class="about-orbital__label">LEARNING IN ORBIT</span>
                </div>
                <div class="about-story">
                    <article class="story-card glass-card" data-reveal>
                        <span class="card-index">01 / CUSTOMER CARE SOLUTIONS</span>
                        <h2>Thấu hiểu trước khi giải quyết</h2>
                        <p>Phân tích phản hồi khách hàng, chỉ số dịch vụ và nguyên nhân gốc rễ để xây dựng giải pháp CSKH và cải thiện chất lượng trải nghiệm.</p>
                    </article>
                    <article class="story-card glass-card" data-reveal>
                        <span class="card-index">02 / FRICTIONLESS EXPERIENCE</span>
                        <h2>Chủ động thiết kế hành trình</h2>
                        <p>Từ xử lý vấn đề dịch vụ đến tối ưu hành trình mua sắm số, mỗi điểm chạm đều là cơ hội tạo ra trải nghiệm liền mạch hơn.</p>
                    </article>
                    <article class="story-card glass-card" data-reveal>
                        <span class="card-index">03 / E-COMMERCE & DATA</span>
                        <h2>Kết nối dịch vụ với dữ liệu</h2>
                        <p>Ứng dụng tư duy TMĐT, CRO, Omnichannel và phân tích kinh doanh để kết nối nhu cầu khách hàng với giải pháp vận hành.</p>
                    </article>
                </div>
            </div>
            <div class="interest-strip" data-reveal><span>EXPLORING</span>${profile.interests.map((item) => `<i>${item}</i>`).join('')}</div>
            <blockquote class="philosophy-quote" data-reveal><span class="card-index">MY PHILOSOPHY</span><p>“Lấy sự thấu hiểu khách hàng làm kim chỉ nam, lấy dữ liệu và quy trình chuẩn hóa làm bộ khung xương sống — để kiến tạo nên những giải pháp Thương mại Điện tử bền vững và bứt phá.”</p></blockquote>
        </section>`;
}

function experiencePage() {
    return `
        <section class="page-shell page-shell--experience">
            ${pageHeading('03', 'WORK EXPERIENCE', 'Giải pháp dịch vụ<br><em>lấy khách hàng làm trọng tâm.</em>', 'Kinh nghiệm chuyên môn trong chăm sóc khách hàng là nền tảng cho hành trình học tập Thương mại Điện tử.') }
            <div class="experience-cosmos">
                <div class="experience-orbit" aria-hidden="true"><span></span><i></i><b></b></div>
                <article class="experience-card glass-card" data-reveal>
                    <div class="experience-card__top"><span class="card-index">CUSTOMER CARE SOLUTIONS</span><span class="experience-card__status"><i></i> PROFESSIONAL EXPERIENCE</span></div>
                    <h2>${profile.role}</h2>
                    <p class="experience-card__summary">Phân tích dữ liệu và phản hồi khách hàng, tháo gỡ điểm nghẽn dịch vụ, đề xuất cải tiến quy trình và nâng cao trải nghiệm.</p>
                    <div class="experience-card__facts">
                        <div><span>Doanh nghiệp</span><strong>[Bổ sung thông tin]</strong></div>
                        <div><span>Chức danh</span><strong>${profile.role}</strong></div>
                        <div><span>Thời gian</span><strong>[Bổ sung thông tin]</strong></div>
                        <div><span>Trọng tâm</span><strong>CX · Service Quality · Process Improvement</strong></div>
                    </div>
                    <p class="experience-card__note">Tên doanh nghiệp, thời gian công tác và kết quả định lượng sẽ được bổ sung khi có thông tin cụ thể.</p>
                </article>
                <span class="experience-label experience-label--one">ROOT CAUSE · CUSTOMER INSIGHT</span>
                <span class="experience-label experience-label--two">SERVICE DESIGN · CONTINUOUS IMPROVEMENT</span>
            </div>
            <div class="responsibility-grid">
                ${profile.serviceResponsibilities.map((item, index) => `<article class="responsibility-card glass-card" data-reveal><span>0${index + 1}</span><div><h2>${item.title}</h2><p>${item.description}</p></div></article>`).join('')}
            </div>
        </section>`;
}

function projectCard(project) {
    return `
        <a class="project-card glass-card" href="${routeUrl(`projects/${project.slug}/`)}" data-reveal>
            <div class="project-card__visual project-card__visual--${project.planet}" aria-hidden="true">
                <span class="project-card__orbit"></span><span class="project-card__orbit project-card__orbit--inner"></span>
                <span class="project-card__planet"><i></i></span>
                <span class="project-card__spark">✦</span>
                <span class="project-card__visual-caption">${project.visual}</span>
            </div>
            <div class="project-card__body">
                <div class="project-card__meta"><span>ACADEMIC PROJECT</span><span>${project.number} / 03</span></div>
                <h2>${project.name}</h2>
                <p>${project.short}</p>
                <span class="project-card__open">Khám phá case study ${arrowIcon()}</span>
            </div>
        </a>`;
}

function projectsPage() {
    return `
        <section class="page-shell page-shell--projects">
            ${pageHeading('04', 'ACADEMIC PROJECTS', 'Ý tưởng hóa thành<br><em>mô hình khám phá.</em>', 'Các dự án dưới đây là bài tập học thuật, trình bày theo nội dung đã xác nhận — không phải kinh nghiệm làm việc thực tế.')}
            <div class="project-grid">${Object.values(projects).map(projectCard).join('')}</div>
            <p class="projects-footnote" data-reveal><span>✦</span> Mô hình và nội dung minh họa được tạo bằng CSS; không đại diện cho kết quả định lượng.</p>
            <section class="metrics-panel glass-card" aria-labelledby="project-metrics-title" data-reveal>
                <div class="metrics-panel__heading"><span class="card-index">CUSTOMER CARE PERFORMANCE</span><h2 id="project-metrics-title">Khung KPI theo dõi dịch vụ</h2><p>Các chỉ số tham khảo để đánh giá trải nghiệm, vận hành và hiệu quả cải tiến.</p></div>
                <div class="metrics-grid">${profile.serviceMetrics.map((metric) => `<article class="metric-card"><strong>${metric.name}</strong><span>${metric.description}</span></article>`).join('')}</div>
            </section>
        </section>`;
}

function projectDetailPage(project) {
    if (!project) {
        return `<section class="page-shell">${pageHeading('04', 'PROJECT NOT FOUND', 'Không tìm thấy<br><em>hành tinh này.</em>', 'Dự án có thể chưa được cập nhật hoặc đường dẫn không chính xác.')}<a class="button button--primary" href="${routeUrl('projects/')}">Về danh sách dự án ${arrowIcon()}</a></section>`;
    }
    return `
        <section class="page-shell page-shell--project-detail">
            <a class="back-link" href="${routeUrl('projects/')}">← Tất cả dự án</a>
            <div class="detail-hero">
                <div class="detail-hero__copy">
                    <p class="eyebrow"><span class="eyebrow__line"></span> ${project.number} / ACADEMIC PROJECT</p>
                    <h1>${project.name}</h1>
                    <p>${project.short}</p>
                </div>
                <div class="detail-planet detail-planet--${project.planet}" aria-hidden="true"><span class="orbit orbit--one"></span><span class="orbit orbit--two"></span><span class="detail-planet__core"></span><span class="detail-planet__spark">✦</span></div>
            </div>
            <div class="case-study-grid">
                <article class="case-study-card glass-card" data-reveal><span class="card-index">01 / PROBLEM</span><h2>Bài toán</h2><p>${project.problem}</p></article>
                <article class="case-study-card glass-card" data-reveal><span class="card-index">02 / OBJECTIVE</span><h2>Mục tiêu</h2><p>${project.goal}</p></article>
                <article class="case-study-card glass-card" data-reveal><span class="card-index">03 / CONTRIBUTION</span><h2>Vai trò & phần việc</h2><p>${project.contribution}</p><small>Phần việc được mô tả theo nội dung dự án đã cung cấp.</small></article>
                <article class="case-study-card glass-card" data-reveal><span class="card-index">04 / APPROACH</span><h2>Phương pháp</h2><p>${project.methods}</p><small>Không bổ sung công cụ hoặc phương pháp chưa được xác nhận.</small></article>
                <article class="case-study-card case-study-card--wide glass-card" data-reveal><span class="card-index">05 / DELIVERABLE</span><h2>Sản phẩm đầu ra</h2><p>${project.output}</p><small>Đầu ra mô tả theo nội dung bài tập; không thêm kết quả định lượng.</small></article>
            </div>
        </section>`;
}

function skillsPage() {
    return `
        <section class="page-shell page-shell--skills">
            ${pageHeading('05', 'SKILLS & TOOLS', 'Bộ công cụ<br><em>cho trải nghiệm số.</em>', 'Các công cụ chuyên môn và nhóm năng lực hỗ trợ phân tích, vận hành, tối ưu trải nghiệm khách hàng.')}
            <div class="skills-universe">
                <section class="skill-cluster skill-cluster--tools" data-reveal>
                    <div class="skill-cluster__heading"><span class="cluster-orb">✧</span><div><span class="card-index">PROFICIENT TOOLKIT</span><h2>Công cụ chuyên môn</h2><p>Phân tích dữ liệu, tìm kiếm, nội dung và vận hành</p></div></div>
                    <div class="skill-nodes">${profile.tools.map((tool, i) => `<article class="skill-node glass-card" style="--node-index:${i}"><span class="skill-node__star">✦</span><strong>${tool}</strong><small>Công cụ</small></article>`).join('')}</div>
                    <span class="constellation-line constellation-line--tools" aria-hidden="true"></span>
                </section>
                <section class="skill-cluster skill-cluster--knowledge" data-reveal>
                    <div class="skill-cluster__heading"><span class="cluster-orb">◌</span><div><span class="card-index">SERVICE QUALITY &amp; CX</span><h2>Chỉ số đo lường CSKH</h2><p>Nhóm chỉ số trải nghiệm và hiệu quả vận hành</p></div></div>
                    <div class="metrics-grid metrics-grid--skills">${profile.serviceMetrics.map((metric) => `<article class="metric-card glass-card"><strong>${metric.name}</strong><span>${metric.description}</span></article>`).join('')}</div>
                </section>
            </div>
            <p class="skills-note" data-reveal>Complaint Rate theo dõi tỷ lệ khiếu nại; Process Improvement theo dõi hiệu quả dự án cải tiến.</p>
        </section>`;
}

function educationPage() {
    return `
        <section class="page-shell page-shell--education">
            ${pageHeading('06', 'EDUCATION', 'Thương mại Điện tử<br><em>gắn với trải nghiệm.</em>', 'Nền tảng UEH mở rộng tư duy từ giải pháp CSKH sang toàn bộ hành trình và hoạt động kinh doanh số.') }
            <div class="education-vault">
                <div class="education-vault__halo" aria-hidden="true"><span class="education-vault__core">UE</span><i></i><b></b><small></small></div>
                <article class="education-card glass-card" data-reveal>
                    <span class="card-index">CURRENT CHAPTER · 01</span>
                    <p class="education-card__label">ĐANG HỌC</p>
                    <h2>${profile.study}</h2>
                    <p class="education-card__school">${profile.school}</p>
                    <div class="education-card__rule"></div>
                    <div class="education-card__meta"><span>Trạng thái</span><strong>${profile.status}</strong></div>
                    <p class="education-card__note">Năm nhập học và năm tốt nghiệp chưa được cung cấp.</p>
                </article>
                <span class="education-vault__annotation education-vault__annotation--one">LEARNING ARCHIVE</span>
                <span class="education-vault__annotation education-vault__annotation--two">CHAPTER IN PROGRESS</span>
            </div>
            <div class="education-focus-grid">
                ${profile.ecommerceApplications.map((item, index) => `<article class="education-focus-card glass-card" data-reveal><span>0${index + 1}</span><div><h2>${item.title}</h2><p>${item.description}</p></div></article>`).join('')}
            </div>
        </section>`;
}

function contactPage() {
    return `
        <section class="page-shell page-shell--contact">
            ${pageHeading('07', 'CONTACT', 'Mở một cánh cổng<br><em>để kết nối.</em>', 'Email, LinkedIn và số điện thoại sẽ xuất hiện khi bạn bổ sung thông tin muốn công khai.')}
            <div class="contact-gate" data-reveal>
                <div class="contact-gate__halo" aria-hidden="true"><span></span><i></i><b></b></div>
                <div class="contact-card glass-card">
                    <span class="card-index">YOUR NEXT STEP</span>
                    <h2>Let’s connect<br><em>when you’re ready.</em></h2>
                    <p>Chưa có thông tin liên hệ được xác nhận để hiển thị.</p>
                    <div class="contact-fields">
                        <div><span>Email</span><strong>[Bổ sung email]</strong></div>
                        <div><span>LinkedIn</span><strong>[Bổ sung liên kết]</strong></div>
                        <div><span>Điện thoại</span><strong>[Bổ sung số điện thoại nếu muốn công khai]</strong></div>
                    </div>
                    <small>Form liên hệ chưa được bật vì website chưa kết nối dịch vụ gửi form.</small>
                </div>
            </div>
        </section>`;
}

const pageRenderers = {
    home: homePage,
    about: aboutPage,
    experience: experiencePage,
    projects: projectsPage,
    skills: skillsPage,
    education: educationPage,
    contact: contactPage,
    'project-detail': () => projectDetailPage(detail),
};

function render() {
    const currentPage = pageDetails[pageKey];
    if (currentPage) {
        document.title = `${currentPage.vn} — Trần Ngọc Vân Nghi | Portfolio`;
        document.querySelector('meta[name="description"]').content = currentPage.description;
    } else if (detail) {
        document.title = `${detail.name} — Academic Project | Trần Ngọc Vân Nghi`;
        document.querySelector('meta[name="description"]').content = detail.short;
    } else {
        document.title = 'Dự án — Trần Ngọc Vân Nghi | Portfolio';
    }
    const content = (pageRenderers[pageKey] || pageRenderers['project-detail'])();
    const index = currentPage ? currentPage.index : '04';
    const label = currentPage ? currentPage.title : 'ACADEMIC PROJECT';
    app.innerHTML = `<div class="scroll-progress" aria-hidden="true"><span class="scroll-progress__bar"></span></div>${background()}${header()}<main id="page-content" class="page-content page-content--${pageKey}"><span class="page-coordinate" aria-hidden="true">${index} / ${label}</span>${content}${footer(pageKey, pageKey === 'project-detail')}</main><button class="back-to-top-button" type="button" aria-label="Cuộn lên đầu trang" aria-hidden="true" tabindex="-1">↑</button><p class="interaction-message" id="interaction-message" aria-live="polite"></p>`;
    document.body.classList.add('page-enter');
    window.setTimeout(() => document.body.classList.remove('page-enter'), 700);
    initializeInteractions();
}

function initializeInteractions() {
    const toggle = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('.navigation');
    toggle.addEventListener('click', () => {
        const open = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!open));
        toggle.setAttribute('aria-label', open ? 'Mở menu' : 'Đóng menu');
        navigation.classList.toggle('is-open', !open);
    });

    toggle.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            toggle.setAttribute('aria-expanded', 'false');
            toggle.setAttribute('aria-label', 'Mở menu');
            navigation.classList.remove('is-open');
        }
    });

    navigation.addEventListener('click', (event) => {
        if (!(event.target instanceof Element) || !event.target.closest('a[href^="#"]')) return;
        navigation.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Mở menu');
    });

    document.querySelectorAll('a[href]').forEach((link) => {
        const url = new URL(link.href, window.location.href);
        if (url.origin !== window.location.origin || url.hash && url.pathname === window.location.pathname) return;
        link.addEventListener('click', (event) => {
            if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
            event.preventDefault();
            if (navigation.classList.contains('is-open')) {
                navigation.classList.remove('is-open');
                toggle.setAttribute('aria-expanded', 'false');
                toggle.setAttribute('aria-label', 'Mở menu');
            }
            document.body.classList.add('page-leave');
            window.setTimeout(() => window.location.assign(url.href), 190);
        });
    });

    const revealItems = document.querySelectorAll('[data-reveal]');
    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const observer = new IntersectionObserver((entries, instance) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-revealed');
                instance.unobserve(entry.target);
            });
        }, { threshold: 0.12 });
        revealItems.forEach((item, index) => {
            item.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 90}ms`);
            observer.observe(item);
        });
    } else {
        revealItems.forEach((item) => item.classList.add('is-revealed'));
    }

    initializeScrollEffects();
    initializeCosmicEffects();
}

function initializeScrollEffects() {
    const progressBar = document.querySelector('.scroll-progress__bar');
    const backToTop = document.querySelector('.back-to-top-button');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame = 0;

    const updateScrollState = () => {
        frame = 0;
        const scrollableDistance = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollableDistance > 0 ? window.scrollY / scrollableDistance : 0;
        progressBar.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
        const visible = window.scrollY > 420;
        backToTop.classList.toggle('is-visible', visible);
        backToTop.setAttribute('aria-hidden', String(!visible));
        backToTop.tabIndex = visible ? 0 : -1;
    };

    const requestUpdate = () => {
        if (frame) return;
        frame = window.requestAnimationFrame(updateScrollState);
    };

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate, { passive: true });
    window.addEventListener('pageshow', requestUpdate);
    document.addEventListener('visibilitychange', requestUpdate);
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
    });
    updateScrollState();
}

function initializeCosmicEffects() {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const bubblesLayer = document.querySelector('.cosmos__bubbles');
    const particlesLayer = document.querySelector('.cosmos__particles');
    const confettiCanvas = document.querySelector('.cosmos__confetti');
    const context = confettiCanvas.getContext('2d');
    const mobile = window.matchMedia('(max-width: 700px)').matches;
    const bubbleCount = reducedMotion ? 4 : mobile ? 8 : 13;
    const confettiParticles = [];
    let confettiFrame = 0;
    let lastFrameTime = 0;
    const palette = ['#E5D8FF', '#B99AF5', '#9B6DFF', '#8054C7', '#FFFFFF'];

    const createBubble = () => {
        const bubble = document.createElement('button');
        bubble.className = `cosmic-bubble cosmic-bubble--${Math.floor(Math.random() * 5) + 1}`;
        const size = 28 + Math.random() * (mobile ? 58 : 104);
        bubble.type = 'button';
        bubble.setAttribute('aria-label', 'Làm vỡ bong bóng thủy tinh');
        bubble.style.setProperty('--x', `${Math.random() * 100}%`);
        bubble.style.setProperty('--static-y', `${8 + Math.random() * 84}%`);
        bubble.style.setProperty('--size', `${size}px`);
        bubble.style.setProperty('--float-time', `${18 + Math.random() * 24}s`);
        bubble.style.setProperty('--float-delay', `${-Math.random() * 36}s`);
        bubble.style.setProperty('--drift', `${(Math.random() - 0.5) * 150}px`);
        bubblesLayer.appendChild(bubble);
        return bubble;
    };

    for (let i = 0; i < bubbleCount; i += 1) createBubble();

    const particleCount = reducedMotion ? 8 : mobile ? 12 : 22;
    for (let i = 0; i < particleCount; i += 1) {
        const particle = document.createElement('span');
        particle.className = `cosmic-particle${i % 5 === 0 ? ' cosmic-particle--twinkle' : ''}`;
        particle.style.setProperty('--x', `${(i * 41 + 5) % 100}%`);
        particle.style.setProperty('--y', `${(i * 67 + 19) % 100}%`);
        particle.style.setProperty('--particle-delay', `${-(i % 12)}s`);
        particle.style.setProperty('--particle-duration', `${6 + i % 8}s`);
        particlesLayer.appendChild(particle);
    }

    const resizeCanvas = () => {
        if (!context) return;
        const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
        confettiCanvas.width = Math.round(window.innerWidth * pixelRatio);
        confettiCanvas.height = Math.round(window.innerHeight * pixelRatio);
        confettiCanvas.style.width = `${window.innerWidth}px`;
        confettiCanvas.style.height = `${window.innerHeight}px`;
        context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });

    const animateConfetti = (timestamp) => {
        const delta = lastFrameTime ? Math.min((timestamp - lastFrameTime) / 16.67, 2) : 1;
        lastFrameTime = timestamp;
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);

        for (let i = confettiParticles.length - 1; i >= 0; i -= 1) {
            const particle = confettiParticles[i];
            particle.x += particle.velocityX * delta;
            particle.y += particle.velocityY * delta;
            particle.velocityY += 0.09 * delta;
            particle.rotation += particle.rotationSpeed * delta;
            particle.life -= delta;
            if (particle.life <= 0) {
                confettiParticles.splice(i, 1);
                continue;
            }

            context.save();
            context.globalAlpha = Math.min(1, particle.life / particle.maxLife);
            context.translate(particle.x, particle.y);
            context.rotate(particle.rotation);
            context.fillStyle = particle.color;
            context.fillRect(-particle.width / 2, -particle.height / 2, particle.width, particle.height);
            context.restore();
        }

        if (confettiParticles.length) {
            confettiFrame = window.requestAnimationFrame(animateConfetti);
        } else {
            confettiFrame = 0;
            lastFrameTime = 0;
            context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        }
    };

    bubblesLayer.addEventListener('click', (event) => {
        if (!(event.target instanceof Element)) return;
        const bubble = event.target.closest('.cosmic-bubble');
        if (!bubble) return;

        const bounds = bubble.getBoundingClientRect();
        bubble.remove();
        if (!reducedMotion) {
            const centerX = bounds.left + bounds.width / 2;
            const centerY = bounds.top + bounds.height / 2;
            for (let i = 0; i < 30; i += 1) {
                const angle = Math.random() * Math.PI * 2;
                const speed = 1.2 + Math.random() * 4.2;
                const lifetime = 38 + Math.random() * 28;
                confettiParticles.push({
                    x: centerX,
                    y: centerY,
                    velocityX: Math.cos(angle) * speed,
                    velocityY: Math.sin(angle) * speed - 1.1,
                    rotation: Math.random() * Math.PI,
                    rotationSpeed: (Math.random() - 0.5) * 0.28,
                    width: 3 + Math.random() * 4,
                    height: 5 + Math.random() * 6,
                    color: palette[Math.floor(Math.random() * palette.length)],
                    life: lifetime,
                    maxLife: lifetime,
                });
            }
            if (context && !confettiFrame) confettiFrame = window.requestAnimationFrame(animateConfetti);
        }

        window.setTimeout(() => {
            if (bubblesLayer.isConnected) createBubble();
        }, 800);
    });

    if (!reducedMotion) {
        const spawnSparkle = () => {
            if (document.hidden) return;
            const sparkle = document.createElement('span');
            sparkle.className = 'transient-sparkle';
            sparkle.style.left = `${5 + Math.random() * 90}%`;
            sparkle.style.top = `${8 + Math.random() * 84}%`;
            particlesLayer.appendChild(sparkle);
            window.setTimeout(() => sparkle.remove(), 1500);
        };
        window.setInterval(spawnSparkle, mobile ? 1400 : 950);

        const shootingStar = document.querySelector('.cosmos__shooting-star');
        const scheduleShootingStar = () => {
            window.setTimeout(() => {
                if (!document.hidden) {
                    shootingStar.classList.remove('is-shooting');
                    void shootingStar.offsetWidth;
                    shootingStar.classList.add('is-shooting');
                }
                scheduleShootingStar();
            }, 9000 + Math.random() * 9000);
        };
        scheduleShootingStar();
    }

    const finePointer = window.matchMedia('(pointer: fine)').matches;
    if (finePointer && !reducedMotion) {
        let frame = 0;
        let lastSparkleX = 0;
        let lastSparkleY = 0;
        const createCursorSparkle = (x, y) => {
            const sparkle = document.createElement('span');
            sparkle.className = 'transient-sparkle transient-sparkle--cursor';
            sparkle.style.left = `${x}px`;
            sparkle.style.top = `${y}px`;
            particlesLayer.appendChild(sparkle);
            sparkle.addEventListener('animationend', () => sparkle.remove(), { once: true });
        };
        document.addEventListener('pointermove', (event) => {
            if (frame) return;
            frame = window.requestAnimationFrame(() => {
                document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`);
                document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`);
                const x = event.clientX / window.innerWidth - 0.5;
                const y = event.clientY / window.innerHeight - 0.5;
                bubblesLayer.style.setProperty('--parallax-x', `${x * 11}px`);
                bubblesLayer.style.setProperty('--parallax-y', `${y * 9}px`);
                if (Math.hypot(event.clientX - lastSparkleX, event.clientY - lastSparkleY) > 16) {
                    createCursorSparkle(event.clientX, event.clientY);
                    lastSparkleX = event.clientX;
                    lastSparkleY = event.clientY;
                }
                frame = 0;
            });
        }, { passive: true });
    }
}

render();
