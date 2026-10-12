const email = 'ucifer523@gmail.com'
const phone = '+996 600 69 01 01'
const github = 'https://github.com/1YEwest'

const projects = [
  {
    name: 'Инжектор DLL файлов',
    description:
      'Учебный проект на C++ для практики низкоуровневого программирования и Windows API.',
    technologies: 'C++, Windows API',
  },
  {
    name: 'Трекер руки через веб-камеру',
    description:
      'Учебный проект на Python для отслеживания положения руки при помощи веб-камеры.',
    technologies: 'Python, OpenCV',
  },
]

function App() {
  return (
    <main className="resume">
      <header className="resume-header">
        <img
          className="profile-photo"
          src="./emir-photo.jpg"
          alt="Фотография в резюме Алмазбекова Эмира"
        />
        <div className="profile-info">
          <p className="eyebrow">РЕЗЮМЕ</p>
          <h1>Алмазбеков Эмир</h1>
          <p className="job-title">Студент-программист</p>
          <ul className="contact-list">
            <li><a href={`mailto:${email}`}>{email}</a></li>
            <li><a href={`tel:${phone.replaceAll(' ', '')}`}>{phone}</a></li>
            <li><a href={github} target="_blank" rel="noreferrer">GitHub: 1YEwest</a></li>
            <li>Бишкек, Кыргызстан</li>
          </ul>
        </div>
        <button className="print-button no-print" type="button" onClick={() => window.print()}>
          Печать / PDF
        </button>
      </header>

      <section className="resume-section">
        <h2>Обо мне</h2>
        <p>
          Студент-программист. Изучаю Java, Python и C++. Интересуюсь низкоуровневым
          программированием, разработкой игр и компьютерной графикой.
        </p>
      </section>

      <section className="resume-section">
        <h2>Навыки</h2>
        <ul className="skills-list">
          <li>Java</li>
          <li>Python</li>
          <li>C++</li>
          <li>Низкоуровневое программирование</li>
          <li>Графические технологии</li>
          <li>Git и VS Code</li>
        </ul>
      </section>

      <section className="resume-section">
        <h2>Проекты</h2>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.name}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p className="technologies"><strong>Технологии:</strong> {project.technologies}</p>
            </article>
          ))}
        </div>
        <p className="github-link">
          Другие проекты: <a href={github} target="_blank" rel="noreferrer">github.com/1YEwest</a>
        </p>
      </section>

      <section className="resume-section">
        <h2>Интересы</h2>
        <p>Системное программирование, геймдев и компьютерная графика.</p>
      </section>

      <footer className="resume-footer">
        <span>Алмазбеков Эмир</span>
        <a href={`mailto:${email}`}>{email}</a>
      </footer>
    </main>
  )
}

export default App
