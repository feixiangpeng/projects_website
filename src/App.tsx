import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('projects');

  const getCurrentDate = () => {
    const today = new Date();
    const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    const months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
    
    const dayName = days[today.getDay()];
    const monthName = months[today.getMonth()];
    const day = today.getDate();
    const year = today.getFullYear();
    
    return `${dayName}, ${monthName} ${day}, ${year}`;
  };

  const articles = [
    {
      id: 'ioi',
      headline: 'PROGRAMMING OLYMPIAD',
      content: [
        'Invited to the International Olympiad in Informatics training camp after competing in national programming competitions.',
        'Competitive programming involves solving algorithmic problems within time constraints. This experience covers topics like graph algorithms, dynamic programming, and data structures, developing skills in efficient problem-solving and code optimization.'
      ],
      images: [
        { src: '/olympiad_winners.png', alt: 'Programming Olympiad Medal Winners', className: 'olympiad-photo' },
        { src: '/competition_rankings.png', alt: 'Programming Competition Rankings', className: 'rankings-table' }
      ],
      badges: ['IOI Training Camp', 'National Level', 'Competition Medalist'],
      emblem: 'IOI CANDIDATE',
      embed: {
        type: 'press',
        title: 'Media Coverage',
        source: 'ITWeb',
        headline: 'Young programmers shine at Programming Olympiad',
        excerpt: 'South Africa\'s brightest young programmers demonstrated their algorithmic prowess at the national Programming Olympiad, showcasing skills that rival international competitors...',
        link: 'https://www.itweb.co.za/article/young-programmers-shine-at-programming-olympiad/kLgB1Mezzp9q59N4'
      },
      size: 'large' as const
    },
    {
      id: 'browser',
      headline: 'BROWSER EXTENSION FOR SEMANTIC SEARCH',
      content: [
        'Published Chrome extension enabling natural language browser history search. Search for concepts like "startup funding article" instead of exact keywords.',
        'Creates semantic embeddings of page content for meaning-based search rather than text matching.'
      ],
      images: [
        { src: '/semantic_search.png', alt: 'Semantic History Search Extension', className: 'article-image' }
      ],
      links: [
        { url: 'https://github.com/feixiangpeng/Web_Extension_History', text: 'Source Code' },
        { url: 'https://www.youtube.com/watch?v=atY3T3Y3Z_4', text: 'Live Demo' }
      ],
      size: 'medium' as const
    },
    {
      id: 'gpu',
      headline: 'SYSTEMS CLUSTER GPU COMPUTING',
      content: [
        'Built GPU cluster simulation system for resource allocation and job scheduling optimization in ML workloads.',
        'Models different scheduling algorithms and resource strategies for cluster optimization.'
      ],
      embed: {
        type: 'gsoc',
        title: 'Google Summer of Code',
        source: 'Open Source Project',
        headline: 'GPU Resource Optimization for Researchers',
        excerpt: 'Selected for Google Summer of Code to work on an open-source project helping researchers optimize GPU usage patterns and improve cluster resource allocation efficiency.',
        links: [
          { url: 'https://summerofcode.withgoogle.com/programs/2025/projects/4A2j5CbE', text: 'View GSoC Project' },
          { url: 'https://github.com/feixiangpeng/gpu-cluster-orchestration-demo', text: 'Explore Code' }
        ]
      },
      size: 'medium' as const
    },
    {
      id: 'shell',
      headline: 'CUSTOM UNIX SHELL',
      content: [
        'Developed a Unix-like shell in C that handles basic command execution, I/O redirection, and process management. The implementation uses system calls like fork(), exec(), and wait() to manage process creation and execution.',
        'The shell supports features like command chaining with semicolons, file I/O redirection, and built-in commands. Implementation required careful handling of process control, memory management, and error handling in C.'
      ],
      terminal: {
        lines: [
          '$ ./darren_shell',
          'Welcome to Darren\'s Shell v1.0',
          'darren_shell> pwd',
          '/home/darren/projects',
          'darren_shell> ls -la',
          'total 8',
          'drwxr-xr-x shell.c Makefile README.md',
          'darren_shell> echo "Hello World" > output.txt',
          'darren_shell> cd ..; pwd',
          '/home/darren',
          'darren_shell> exit',
          'Shell terminated. Goodbye!'
        ]
      },
      links: [
        { url: 'https://github.com/feixiangpeng/Shell_Project', text: 'View Code' }
      ],
      techStack: ['C Programming', 'Unix/Linux', 'Systems Programming', 'Process Management', 'File I/O'],
      size: 'medium' as const
    },
    {
      id: 'spinops',
      headline: 'SPINOPS AI PLATFORM',
      content: [
        'Co-founding Spinops came from watching too many AI agents fail in subtle but expensive ways. When your chatbot starts hallucinating customer data or your automation breaks because of an edge case you never considered, you need tools that can catch these problems before they hit production.',
        'We\'re building the testing and monitoring infrastructure that agent systems desperately need. Think of it as a safety net for when your agents decide to get creative in ways you didn\'t expect. Because the difference between "mostly works" and "actually reliable" is huge when money is on the line.'
      ],
      logo: {
        text: 'SPINOPS',
        subtitle: 'AI Agent Reliability'
      },
      funding: {
        badges: [
          { text: 'YC Interview', type: 'yc' },
          { text: 'Conviction Embed Top 50', type: 'conviction' }
        ],
        description: 'Interviewed for Y Combinator (<6% acceptance rate) and selected as top ~50 out of 2000 applications for Conviction Embed\'s accelerator program.'
      },
      embed: {
        type: 'manifesto',
        title: 'Company Manifesto',
        source: 'Spinops.ai',
        headline: 'Building Reliable AI Agents at Scale',
        excerpt: 'Our manifesto outlines the critical need for robust testing and monitoring infrastructure in AI systems. We believe that reliability isn\'t optional—it\'s the foundation of trust in autonomous systems.',
        link: 'https://spinops.ai/manifesto',
        linkText: 'Check it Out & Join Waitlist'
      },
      techStack: ['AI/ML', 'Platform Engineering', 'Agent Monitoring', 'Co-Founder'],
      size: 'large' as const
    }
  ];

  const handleNavClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="container">
      <header className="masthead">
        <h1 className="newspaper-title">FEI XIANG "DARREN" PENG</h1>
        <p className="subtitle">IOI Candidate • ML/SWE Engineer • SpinOps Co-Founder</p>
        <nav className="main-nav">
          <a 
            href="#projects" 
            className={activeSection === 'projects' ? 'active' : ''}
            onClick={() => handleNavClick('projects')}
          >
            Projects
          </a>
          <a 
            href="#experience" 
            className={activeSection === 'experience' ? 'active' : ''}
            onClick={() => handleNavClick('experience')}
          >
            Experience
          </a>
          <a 
            href="#about" 
            className={activeSection === 'about' ? 'active' : ''}
            onClick={() => handleNavClick('about')}
          >
            About
          </a>
        </nav>
        <div className="date-line">CHICAGO, IL • {getCurrentDate()} • THREE PAGES</div>
      </header>

      <div className="content-wrapper">
        {activeSection === 'projects' && (
          <main className="newspaper-layout">
            <div className="main-article">
              <ArticleComponent article={articles.find(a => a.id === 'ioi')!} />
              <ArticleComponent article={articles.find(a => a.id === 'browser')!} />
            </div>
            <div className="right-column">
              <div className="right-top">
                <ArticleComponent article={articles.find(a => a.id === 'spinops')!} />
                <ArticleComponent article={articles.find(a => a.id === 'gpu')!} />
              </div>
              <div className="right-full">
                <ArticleComponent article={articles.find(a => a.id === 'shell')!} />
              </div>
            </div>
          </main>
        )}
        
        {activeSection === 'experience' && (
          <ExperienceSection />
        )}
      </div>

      {activeSection === 'about' && (
        <AboutSection />
      )}

      <footer className="newspaper-footer">
        <div className="footer-content">
          <div className="contact-info">
            <strong>Contact:</strong> feixiang@uchicago.edu | LinkedIn: <a href="https://www.linkedin.com/in/feixiang-darren-peng/" target="_blank" rel="noopener noreferrer" className="footer-link">feixiang-darren-peng</a>
          </div>
          <div className="publication-info">
            Published in Chicago, IL • Available for opportunities worldwide
          </div>
        </div>
      </footer>
    </div>
  );
};

interface Article {
  id: string;
  headline: string;
  content: string[];
  images?: Array<{ src: string; alt: string; className: string }>;
  badges?: string[];
  emblem?: string;
  embed?: any;
  links?: Array<{ url: string; text: string }>;
  terminal?: { lines: string[] };
  logo?: { text: string; subtitle: string };
  funding?: any;
  techStack?: string[];
  size: 'small' | 'medium' | 'large';
}

const ArticleComponent: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <article className={`column column-${article.size}`}>
      <header className="article-header">
        <h2 className="headline">{article.headline}</h2>
      </header>
      
      {article.emblem && (
        <div className="ioi-emblem">{article.emblem}</div>
      )}
      
      {article.logo && (
        <div className="spinops-logo">
          <div className="logo-text">{article.logo.text}</div>
          <div className="logo-subtitle">{article.logo.subtitle}</div>
        </div>
      )}
      
      {article.content.map((paragraph, index) => (
        <p key={index} className="article-text">{paragraph}</p>
      ))}
      
      {article.images?.map((image, index) => (
        <img key={index} src={image.src} alt={image.alt} className={image.className} />
      ))}
      
      {article.terminal && (
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-buttons">
              <span className="terminal-button close"></span>
              <span className="terminal-button minimize"></span>
              <span className="terminal-button maximize"></span>
            </div>
            <span className="terminal-title">darren_shell</span>
          </div>
          <div className="terminal-content">
            {article.terminal.lines.map((line, index) => (
              <div key={index} className="terminal-line">{line}</div>
            ))}
          </div>
        </div>
      )}
      
      {article.funding && (
        <div className="funding-highlight">
          <div className="funding-badges">
            {article.funding.badges.map((badge: any, index: number) => (
              <span key={index} className={`funding-badge ${badge.type}`}>{badge.text}</span>
            ))}
          </div>
          <p className="funding-text">{article.funding.description}</p>
        </div>
      )}
      
      {article.badges && (
        <div className="achievement-badges">
          {article.badges.map((badge, index) => (
            <span key={index} className="achievement-badge">{badge}</span>
          ))}
        </div>
      )}
      
      {article.embed && (
        <div className={`embedded-article ${article.embed.type}-embed`}>
          <div className="article-embed-header">
            <h4 className="embed-title">{article.embed.title}</h4>
            <div className="embed-source">{article.embed.source}</div>
          </div>
          <div className="article-embed-content">
            <h5 className="embed-headline">{article.embed.headline}</h5>
            <p className="embed-excerpt">{article.embed.excerpt}</p>
            {article.embed.link && (
              <a href={article.embed.link} target="_blank" rel="noopener noreferrer" className="embed-link">
                {article.embed.linkText || 'Read Full Article'}
              </a>
            )}
            {article.embed.links && (
              <div className="embed-actions">
                {article.embed.links.map((link: any, index: number) => (
                  <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="embed-link">
                    {link.text}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
      
      {article.links && (
        <div className="project-links">
          {article.links.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="project-link">
              {link.text}
            </a>
          ))}
        </div>
      )}
      
      {article.techStack && (
        <div className="tech-stack">
          {article.techStack.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      )}
    </article>
  );
};

const ExperienceSection: React.FC = () => (
  <section className="experience-section">
    <div className="experience-content">
      <div className="experience-item">
        <h3 className="position-title">Machine Learning Engineer Intern</h3>
        <div className="company-details">CrustData San Francisco, CA • June 2025 - Present</div>
        <p className="experience-description">
          · <strong>Architected</strong> <strong>Agentic RAG system</strong> using <strong>A* pathfinding</strong> with <strong>Pinecone db</strong> and <strong>FastAPI backend</strong> to transform natural language queries into multi-step API orchestrations across <strong>50+ endpoints</strong>, enabling code-free access for non-technical users
        </p>
        <p className="experience-description">
          · <strong>Built</strong> <strong>Rust REST API</strong> testing tool reducing endpoint interaction complexity by <strong>70%</strong> and improving throughput by <strong>3x</strong>
        </p>
        <div className="skills-list">
          <span className="skill-tag">Python</span>
          <span className="skill-tag">Rust</span>
          <span className="skill-tag">FastAPI</span>
          <span className="skill-tag">Pinecone</span>
          <span className="skill-tag">RAG</span>
        </div>
      </div>
      
      <div className="experience-item">
        <h3 className="position-title">Student Developer</h3>
        <div className="company-details">Google Summer of Code Remote • May 2025 - Present</div>
        <p className="experience-description">
          · <strong>Developed</strong> <strong>GPU cluster system</strong> managing <strong>14 GPUs</strong> with intelligent job scheduling in <strong>C</strong>, reducing users' wait times by <strong>40%</strong>
        </p>
        <p className="experience-description">
          · <strong>Constructed</strong> full-stack monitoring infrastructure with <strong>real-time dashboards</strong> for GPU/CPU utilization metrics, leveraging <strong>NVIDIA DCGM</strong> data collection with custom alerting that enhanced cluster visibility and resource planning
        </p>
        <p className="experience-description">
          · <strong>Engineered</strong> model deployment pipeline with <strong>CI/CD integration</strong> supporting canary and blue-green strategies, achieving <strong>99.3% uptime</strong> for inference workloads while enabling zero-downtime model updates across <strong>3 research teams</strong>
        </p>
        <div className="skills-list">
          <span className="skill-tag">C</span>
          <span className="skill-tag">CUDA</span>
          <span className="skill-tag">NVIDIA DCGM</span>
          <span className="skill-tag">CI/CD</span>
          <span className="skill-tag">GPU Computing</span>
        </div>
      </div>
      
      <div className="experience-item">
        <h3 className="position-title">Machine Learning Researcher under Professor Ce Zhang</h3>
        <div className="company-details">UChicago Computer Science Department Chicago, IL • July 2024 - June 2025</div>
        <p className="experience-description">
          · <strong>Built</strong> <strong>tree architecture</strong> for <strong>Large Language Models</strong> that optimizes multi-model decision-making, demonstrating how strategic model aggregation can enhance <strong>AI reasoning capabilities</strong> while maintaining computational efficiency at scale
        </p>
        <p className="experience-description">
          · <strong>Implemented</strong> <strong>Neural Architecture Search (NAS)</strong> to automatically discover optimal model architectures, targeting <strong>25% more efficient</strong> model combinations while preserving inference speed through gradient-based optimization
        </p>
        <div className="skills-list">
          <span className="skill-tag">PyTorch</span>
          <span className="skill-tag">Neural Architecture Search</span>
          <span className="skill-tag">LLMs</span>
          <span className="skill-tag">Model Optimization</span>
        </div>
      </div>
      
      <div className="experience-item">
        <h3 className="position-title">Software Engineer Intern</h3>
        <div className="company-details">ScoutX Chicago, IL • July 2024 - June 2025</div>
        <p className="experience-description">
          · <strong>Containerized</strong> and deployed <strong>XGBoost fraud detection models</strong> via <strong>Docker</strong> on <strong>AWS EC2</strong>, orchestrating <strong>RESTful API microservices</strong> through API Gateway with <strong>S3 model artifact versioning</strong> and <strong>CloudWatch metrics</strong> for real-time inference
        </p>
        <p className="experience-description">
          · <strong>Built</strong> automated data extraction pipeline that scanned <strong>PowerPoint slides</strong> using <strong>BERT</strong> and <strong>computer vision</strong>, extracting and summarizing key information from <strong>200+ presentations daily</strong> into structured business intelligence reports
        </p>
        <p className="experience-description">
          · <strong>Implemented</strong> <strong>tokenisation</strong> with <strong>Java Spring Security</strong> for <strong>AES encryption</strong>, securing over <strong>5000 user records</strong> in <strong>PostgreSQL</strong>
        </p>
        <div className="skills-list">
          <span className="skill-tag">AWS</span>
          <span className="skill-tag">Docker</span>
          <span className="skill-tag">XGBoost</span>
          <span className="skill-tag">BERT</span>
          <span className="skill-tag">Java Spring</span>
          <span className="skill-tag">PostgreSQL</span>
        </div>
      </div>
    </div>
  </section>
);

const AboutSection: React.FC = () => (
  <section className="about-section">
    <div className="about-content">
      <div className="about-header">
        <h3 className="about-headline">About the Author</h3>
      </div>
      <div className="about-profile">
        <img src="/profile_photo.jpeg" alt="Fei Xiang Darren Peng" className="profile-photo" />
        <div className="about-text">
          <p className="welcome-text">Welcome! My name is Fei Xiang "Darren" Peng</p>
          <p className="intro-text">Right off the bat, here's a little about me:</p>
          <ul className="about-list">
            <li>Love playing and watching football/soccer and am a huge supporter of Tottenham. COYS!</li>
            <li>Enjoy watching and playing tennis and golf as well</li>
            <li>Born and raised in Johannesburg, South Africa</li>
            <li>Currently studying Computer Science and Statistics with a specialization in Machine Learning at the University of Chicago</li>
            <li>Passionate about building software that solves real problems people actually face</li>
            <li>Love creating projects that push boundaries and involve learning new technologies</li>
            <li>On top of creating things and working on projects, really enjoy sharing them. That's the true purpose of this website - to share some of the things I've worked on.</li>
          </ul>
          <div className="contact-section">
            <h4>Contact Info:</h4>
            <ul className="contact-list">
              <li>Email: feixiang@uchicago.edu</li>
              <li>Email: darrenpeng7@gmail.com</li>
              <li>Phone: +1 773 684 4791</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default App;
