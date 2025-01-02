const resumeData = {
    skills: `
      <h2>🪄 Skills</h2>
      <p>Hello! I am a Computer Science graduate from York University with years of professional experience in the tech industry. I am seeking an opportunity to leverage my skills as a Technical Artist or Programmer, specializing in game development, computer graphics, or computer vision.</p>
      <ul>
        <li><strong>Programming:</strong> C/C++, C#, HLSL, Java, JavaScript, OpenGL, Prolog, Python, Verilog.</li>
        <li><strong>Game Engines:</strong> Unity (C# & ShaderLab), Unreal Engine.</li>
        <li><strong>Art:</strong> 3ds Max, Blender, Maya, Substance Designer, Adobe Photoshop, Adobe InDesign.</li>
      </ul>
    `,
    education: `
      <h2>🎒 Education</h2>
      <div>
        <strong>York University</strong> - <strong>BA Computer Science</strong> (02/2025, Toronto)<br>
        <ul>
          <li>Courses (GPA 8/9): Computer Vision, Computer Graphics, Artificial Intelligence & Logic Programming, Software Design, Operating System, Algorithms, Data Structures, OOP, Linear Algebra, Calculus, 3D Modelling.</li>
          <li>Awards: Ubisoft Toronto NEXT 2024 Winner in Technical Art; York University Continuing Student Scholarship (2023).</li>
        </ul>
      </div>
      <div>
        <strong>University of the Arts London</strong> - <strong>MA Games Design</strong> (03/2021, London)<br>
        <ul>
          <li>Courses: Design & Prototyping, Game Techniques, Gaming Experience, Critical Play & Experimental Development.</li>
          <li>Course projects exhibited at Sound & Cinema: Past, Present & Future in January 2020.</li>
        </ul>
      </div>
      <div>
        <strong>University of Nottingham, Ningbo</strong> - <strong>BA (Hons) International Communications</strong> (06/2019, Ningbo)<br>
        <ul>
          <li>Courses: Communications, Culture, Media, Cultural Industries, Japanese, Game Studies.</li>
          <li>Awards: Outstanding Contributor of the Faculty Life (2019); Head's Scholarship (2016).</li>
        </ul>
      </div>
    `,
    experience: `
      <h2>💼 Experience</h2>
      <div>
        <strong>Ubisoft Toronto</strong> - <strong>Technical Art Intern</strong> (05/2024 - 08/2024, Toronto)<br>
        <ul>
          <li>Contributed to the development of Prince of Persia: Sands of Time Remake. Created and organized metric mesh helpers in Maya and Anvil Engine, including data organization reports to enhance level design workflows.</li>
          <li>Experimented with a texture conversion tool in Substance Designer, transforming realistic textures into painterly styles. Researched and collaborated on other visual effects.</li>
          <li>Supported artists and level designers by resolving emerging technical challenges related to engine functionality and pipeline tools, ensuring efficient collaboration between teams.</li>
        </ul>
      </div>
      <div>
        <strong>Rivergames</strong> - <strong>Technical Artist (Contract)</strong> (12/2022 - 06/2023, Remote)<br>
        <ul>
          <li>Researched and developed visual effects for casual games, focusing on enhancing player experience and aesthetic appeal.</li>
          <li>Designed and implemented a fog-of-war system for Fantasea using C# and ShaderLab within Unity, optimizing performance for real-time gameplay.</li>
        </ul>
      </div>
      <div>
        <strong>York University</strong> - <strong>Research Programmer (Part-time)</strong> (11/2022 - 01/2023, Toronto)<br>
        <ul>
          <li>At Bio Motion Lab, responsible for the development, maintenance, and construction of advanced computer vision and motion parallax projects.</li>
        </ul>
      </div>
      <div>
        <strong>New Oriental Group</strong> - <strong>Instructor in Games & Animation</strong> (01/2022 - 07/2022, Guangzhou)<br>
        <ul>
          <li>Taught game development and design to secondary and post-secondary students as a tier 1 instructor.</li>
          <li>Created and supervised 100+ game projects for students, fostering creativity and practical skills development.</li>
          <li>Assisted in international professor workshops, delivering lab sessions and supervising projects in collaboration with professors from institutions such as the University of Southern California and the University of the Arts London.</li>
        </ul>
      </div>
      <div>
        <strong>Carta Tech</strong> - <strong>Co-Founder & Game Engineer</strong> (05/2021 - 11/2021, Beijing)<br>
        <ul>
          <li>Secured an initial investment of $200,000 and led a 12-member team to co-develop mobile solitaire games using Unity, focusing on gameplay programming.</li>
          <li>Developed the map editor and core systems such as sound, save, time management, maps, levels, quests, map editors.</li>
          <li>Implemented pipelines for data conversion and offline time verification to ensure fair play.</li>
          <li>Successfully published the game on Google Play and the App Store, managing the entire release process independently.</li>
        </ul>
      </div>
      <div>
        <strong>Ubisoft Chengdu</strong> - <strong>Technical Design Intern</strong> (09/2020 - 04/2021, Chengdu)<br>
        <ul>
          <li>Contributed to the development of the AAA project Skull & Bones, focusing on engine pipelines for wildlife, forts, and the visualized scripting tool (DSG).</li>
          <li>Designed and implemented engine pipelines, developed scripted asset tools, and documented designer workflows to streamline production processes and enhance efficiency.</li>
          <li>Compiled and maintained comprehensive technical, training, and design documentation on Confluence, supporting project knowledge management and fostering effective inter-team collaboration.</li>
        </ul>
      </div>
      <div>
        <strong>Tencent</strong> - <strong>Game Design Intern</strong> (07/2020 - 09/2020, Shenzhen)<br>
        <ul>
          <li>Served as a game design intern at Morefun Studio, Tencent Games, working on the auto-chess project Chess Rush.</li>
          <li>Participated in the graduate training program, which covered aspects of game design and business, culminating in the development of a personal game project.</li>
        </ul>
      </div>
    `,
  };
  
  // 动态加载内容
  const resumeContent = document.getElementById("resume-content");
  resumeContent.innerHTML = `
    ${resumeData.skills}
    ${resumeData.education}
    ${resumeData.experience}
  `;
  