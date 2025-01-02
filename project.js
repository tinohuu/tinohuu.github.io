const projectDetails = {
  "recreation-room": {
    title: "Recreation Room on Venus",
    category: "Games, Tech Art",
    content: [
      {
        type: "image",
        src: "/projects/recreation-room/1.png",
        alignment: "center",
      },
      {
        type: "text",
        content:
          "This award-winning project, created for the <b>Ubisoft Toronto NEXT 2024</b> competition, showcases a blend of artistic and technical skill in game development, earning the <b>first place</b> in the Technical Art category.",
      },
      {
        type: "text",
        content:
          "The challenge theme required participants to craft a 3D art scene depicting a conflict between humans and aliens on Venus in 2077. The goal was to ensure production feasibility by designing efficient and adaptable solutions for team members across various scenarios.",
      },
      {
        type: "text",
        content:
          "My submission features a detailed recreation room set in a Venusian environment, highlighting three primary technical challenges and solutions:",
      },
      {
        type: "image",
        src: "/projects/recreation-room/2.png",
        alignment: "left",
      },
      {
        type: "text",
        content: `
            <b>Challenge I: Tentacle FX for Interactive Alien Plant</b>
              <ul>
                <li>Implemented <b>procedural animation</b> using a modified <b>FABRIK Inverse Kinematics</b> algorithm to simulate dynamic tentacle movements.</li>
                <li>Developed a <b>custom editor tool</b> in Unity for adjusting tentacle behavior, enabling artists to easily set up and modify interactions.</li>
                <li>Added a shader-based wriggling effect for idle tentacles to enhance realism.</li>
              </ul>
            
            <b>Challenge II: Environmental Damage FX from Collision and Conflict</b>
              <ul>
                <li>Designed a <b>Decal Stamper tool</b> for applying dynamic damage effects like scratches, dents, and stains in Unity.</li>
                <li>Ensured ease of use with intuitive controls, allowing designers to add or adjust decals directly in the scene view.</li>
                <li>Optimized the tool for performance while maintaining visual fidelity.</li>
              </ul>
            
            <b>Challenge III: School of Fish Simulation in Aquarium</b>
              <ul>
                <li>Implemented <b>boid flocking behavior</b> using compute shaders to simulate realistic fish movement.</li>
                <li>Integrated <b>escape logic</b> where fish react dynamically to fast-moving objects, enhancing interactivity.</li>
                <li>Created shader animations for unique swimming styles across different fish species.</li>
              </ul>
        `,
      },
      {
        type: "text",
        content:
          "In addition to the primary challenges, the project includes other environmental details such as volumetric fog, swaying alien antennas, and shader-based liquid simulations, contributing to an immersive Venusian world.",
      },
      {
        type: "image",
        src: "/projects/recreation-room/3.png",
        alignment: "center",
      },
    ],


    details: [
      { label: "Tools & Skills", value: "Blender, Unity (C#, HDRP, HLSL, ShaderGraph, ComputeShader)." },
      { label: "Roles", value: "Artist (Level & Technical), Designer & Programmer." },
      { label: "Duration", value: "December 2023 - January 2024." },
      { label: "Awards", value: "Ubisoft Toronto NEXT 2024 in Technical Art." },
    ],
    links: [
      { label: "Ubisoft News", url: "https://toronto.ubisoft.com/ubisoft-toronto-next-2024-winners-celebrating-ontarios-student-talent-in-game-dev/" },
      { label: "Video", url: "https://youtu.be/DGbQOOwSAbU?si=ZHw7TF0OGjW6sdCA" },
      { label: "Source", url: "https://drive.google.com/drive/folders/1RigQNrH1dbJWu4M-SCXuWSvODtHiBLe-?usp=drive_link" },
    ],
  },
  "simple-raytracer-and-webgl-scenes": {
    title: "Simple Raytracer & WebGL Scenes",
    category: "Computer Graphics, Techical Art.",
    content: [
      {
        type: "image",
        src: "/projects/simple-raytracer/1.png",
        alignment: "left",
      },
      {
        type: "text",
        content:
          `  <p><b>Simple Ray Tracer</b> is a project demonstrates the implementation of a simple ray tracer in C++, utilizing the <b>glm</b> library for vector mathematics and transformations.</p>
  <p>The ray tracer is designed to render 3D scenes by simulating the behavior of light rays interacting with objects in a virtual environment. Key features include:</p>
  <ul>
    <li><b>Sphere Tracing:</b> Implements a distance-based method for ray-object intersection testing, optimized for rendering implicit surfaces such as spheres.</li>
    <li><b>Lighting:</b> Supports basic lighting models, including ambient, diffuse, and specular components, to simulate realistic light interactions.</li>
    <li><b>Reflections:</b> Introduces basic reflective surfaces, allowing for mirror-like effects and realistic light bounces within the scene.</li>
    <li><b>Scene Configuration:</b> Simple and flexible scene setup through code, enabling the addition of multiple spheres and light sources for custom scenarios.</li>
    <li><b>Performance Optimization:</b> Uses efficient algorithms for ray tracing computations to achieve reasonable performance on basic hardware.</li>
  </ul>
  <p>This project serves as an educational tool for understanding the core principles of ray tracing, including ray-surface intersection, shading, and reflection calculations. The code is clean and modular, making it a great starting point for extending functionality to include features such as textures, advanced reflections, and anti-aliasing.</p>`
      },
      {
        type: "image",
        src: "/projects/webgl-zen-garden/1.png",
        alignment: "left",
      },
      {
        type: "text",
        content:`  <p>
    <b>Simple WebGL Zen Garden</b> is a course project developed for the <b>Introduction to 3D Computer Graphics</b> course at York University. This WebGL-based interactive experience transports users to a serene Japanese-style garden sandbox, offering a tranquil and immersive virtual environment.
  </p>
  <p>
    The scene is thoughtfully designed to capture the essence of traditional Japanese aesthetics. Key elements include a striking <b>red Torii gate</b>, symbolic of passage into sacred spaces, and meticulously crafted <b>stone lanterns</b> that provide a subtle, ambient glow. The garden also features <b>circular ponds</b>, reflecting the surrounding landscape and enhancing the overall sense of calm. These components are set against a lush backdrop of greenery, creating a harmonious and picturesque virtual world.
  </p>
  <p>
    Dynamic elements bring the garden to life, including <b>animated rabbits</b> that hop playfully around the scene, adding a touch of whimsy and vitality. The reeds and grasses gently sway in response to a simulated breeze, a visual effect achieved through the implementation of <b>vertex shaders</b> and real-time animation techniques. These details not only enhance the realism of the environment but also contribute to the meditative atmosphere of the experience.
  </p>
  <p>
    <b>Zen Garden</b> serves as both a technical and artistic exploration, demonstrating proficiency in 3D modeling, real-time rendering, and WebGL programming. The project encapsulates the integration of technical skill and artistic sensibility, offering users a peaceful digital escape into a meticulously designed virtual sanctuary.
  </p>`
      },
    ],
    details: [
      { label: "Tools & Skills", value: "C++, glm, JavaScript, WebGL." },
      { label: "Role", value: "Programmer." },
      { label: "Course", value: "Computer Graphics (Fall 2023), York University." },
    ],
    links: [
      { label: "Raytracer GitHub", url: "https://github.com/tinohuu/simple-raytracer" },
      { label: "WebGL Garden GitHub", url: "https://github.com/tinohuu/zen-garden-webgl" },
    ],
  },
  "zoom": {
    title: "ZOOM",
    category: "Games",
    content: [
      {
        type: "image",
        src: "/projects/zoom/3.png",
        alignment: "center",
      },
      {
        type: "image",
        src: "/projects/zoom/2.png",
        alignment: "left",
      },
      {
        type: "image",
        src: "/projects/zoom/4.png",
        alignment: "left",
      },
      {
        type: "text",
        content:
          "<ul><b><p>ZOOM</p></b><p>ZOOM is a puzzle game set in a dystopian 1980s Western Europe, where surveillance and control dictate everyday life. As a government security officer, your role is to monitor citizen activities through a series of surveillance screens and report behaviors deemed unfavorable by the state. The game immerses players in the moral ambiguity of following directives, challenging them to consider the consequences of their decisions.</p><li><b><p>Interactive Surveillance System</p></b><p>Players engage with multiple screens, scrutinizing live footage for suspicious activities.</p></li><li><b><p>Branching Narrative</p></b><p>Decisions carry weight, offering a unique experience with a couple of outcomes and two distinct endings.</p></li><li><b><p>Immersive Setting</p></b><p>The game’s detatwoiled 1980s-inspired environment immerses players in a world of paranoia and control.</p></li></ul>",
      },
    ],
    details: [
      { label: "Tools & Skills", value: "Adobe Photoshop, Maya, Unity." },
      { label: "Roles", value: "Designer, 2D Artist, Programmer." },
      { label: "Team", value: "Jiahui Hu, Yiting Lu, Yujie Fan, Zhizhou Yang." },
      { label: "Cast", value: "David King, Josh Summerfield, and Riham Mansour." },
      { label: "Date", value: "March 2020." },
    ],
    links: [
      { label: "Video", url: "https://youtu.be/UwMS40bHyjQ?si=kFoLnbyhBMsDhCLS" },
      { label: "Demo", url: "https://tinohu.itch.io/zoom" },
    ],
  },
  "horizon-photographer": {
    title: "Horizon Photographer",
    category: "Games",
    content: [
      {
        type: "image",
        src: "/projects/horizon-photographer/1.gif",
        alignment: "center",
      },
      {
        type: "image",
        src: "/projects/horizon-photographer/2.gif",
        alignment: "center",
      },
      {
        type: "text",
        content:
          `<p>
    Horizon Photographer is a unique 1-minute photography game prototype inspired by Tom Eckersley's iconic <i>Ocean World</i> poster. In this interactive experience, players are immersed in a serene scene where a group of whales gracefully leap out of the water under the alternating sunlight and moonlight. Players are given the freedom to capture moments through their lens, recreating the beauty of nature or even replicating the original poster's imagery. Captured photos are displayed as part of the day and night cycle, offering a reflection of the player’s creativity.
  </p>
  <p>
  The project is exhibited at <i>Sound & Cinema: Past, Present & Future</i> at London College of Communication in January 2020.`,
      },
    ],
    details: [
      { label: "Tools & Skills", value: "Adobe Photoshop, Unity." },
      { label: "Roles", value: "Artist, Designer, Programmer." },
      { label: "Date", value: "December 2019." },
    ],
    links: [
      { label: "Video", url: "https://youtu.be/PxTTMQ0_fjE" },
      { label: "Demo", url: "https://tinohu.itch.io/horizon-photographer" },
    ],
  },
  "skull-and-bones": {
    title: "Skull & Bones",
    category: "Games, Professional",
    content: [
      {
        type: "image",
        src: "/projects/skull-and-bones/4.png",
        alignment: "center",
      },
      {
        type: "image",
        src: "/projects/skull-and-bones/2.png",
        alignment: "left",
      },
      {
        type: "image",
        src: "/projects/skull-and-bones/3.png",
        alignment: "left",
      },
      {
        type: "image",
        src: "/projects/skull-and-bones/1.png",
        alignment: "left",
      },
      {
        type: "text",
        content:
        `
  <p>
    Played the role of Technical Designer in the development of the AAA project <b>Skull & Bones</b>, contributing to critical areas such as 
    engine pipelines for wildlife behaviors, environmental forts, and the visualized scripting tool (DSG). These tools and systems were essential in supporting the seamless integration of gameplay elements and environmental storytelling.
  </p>
  <p>
    Contributed to the design and implementataion efficient and adaptable engine pipelines, focusing on creating scalable workflows that could 
    accommodate evolving project needs. Developed custom scripted asset tools to enhance the productivity of artists and designers, reducing repetitive tasks and minimizing manual errors.
  </p>
  <p>
    Documented and refined designer workflows to ensure clarity and ease of use, improving the production pipeline’s overall efficiency. This documentation supported both current team members and onboarding processes, helping maintain consistency across the project's lifecycle.
  </p>
  <p>
    Compiled and managed comprehensive technical, training, and design documentation on Confluence. By maintaining this centralized knowledge base, I facilitated effective inter-team communication and ensured that technical and design insights were accessible to all stakeholders, fostering collaboration across disciplines.
  </p>
        `
        ,
      },
    ],
    details: [
      { label: "Tools & Skills", value: "Anvil, C#." },
      { label: "Role", value: "Technical Designer." },
      { label: "Duration", value: "September 2020 - April 2021." },
    ],
    links: [
      { label: "Offical Website", url: "https://www.ubisoft.com/en-ca/game/skull-and-bones" },
    ],
  },
  "blacksmith": {
    title: "Blacksmith",
    category: "Games",
    content: [
      {
        type: "image",
        src: "/projects/blacksmith/1.jpg",
        alignment: "center",
      },
      {
        type: "image",
        src: "/projects/blacksmith/2.jpg",
        alignment: "left",
      },
      {
        type: "image",
        src: "/projects/blacksmith/3.jpg",
        alignment: "left",
      },
      {
        type: "text",
        content:
        `
  <p>
    <b>Blacksmith</b> is a meta-game prototype where players step into the role of a blacksmith, tasked with supporting a Hero in their battle against a formidable Supervillain. The blacksmith's primary responsibility is to craft and assign equipment, weapons, and treasure chests to strategically empower the Hero and aid in their quest for victory. This unique setup creates a dynamic interplay between preparation and combat, offering a blend of strategy and creativity.
  </p>
  <p>
    Originally conceptualized during a <b>Global Game Jam</b>, the prototype showcases potential for expansion into an <b>asymmetric multiplayer experience</b>, involving three players. In this envisioned design, one player assumes the role of the blacksmith, another embodies the Hero navigating challenges, while the third takes on the mantle of the Supervillain orchestrating obstacles and enemies. This structure encourages collaboration and competitive play, fostering a rich and engaging gaming experience.
  </p>
  <p>
    The game also features a <b>complex combat effects system</b>, introducing five unique elements: <b>Water</b>, <b>Fire</b>, <b>Electricity</b>, <b>Poison</b>, and <b>Earth</b>. Each element is designed with a diverse set of special abilities, allowing for intricate skill interactions and tactical depth. This system highlights my programming expertise in creating scalable and flexible mechanics that enhance gameplay variety and balance.
  </p>
  <p>
    By focusing on the meta-game aspects, <b>Blacksmith</b> explores the intersection of resource management, player cooperation, and asymmetric mechanics, making it a promising foundation for further development into a full-fledged game.
  </p>
        `
        ,
      },
    ],
    details: [
      { label: "Tools & Skills", value: "Unity, C#." },
      { label: "Role", value: "Designer & Programmer." },
      { label: "Team", value: "Jiahui Hu, Zhizhou Yang, Zheyuan Chen." },
      { label: "Date", value: "May 2020." },
    ],
    links: [
      { label: "Demo", url: "https://tinohu.itch.io/blacksmith" },
    ],
  },
  "master-of-the-wind": {
    title: "Master of the Wind",
    category: "Games",
    content: [
      {
        type: "image",
        src: "/projects/master-of-the-wind/2.png",
        alignment: "left",
      },
      {
        type: "image",
        src: "/projects/master-of-the-wind/1.jpg",
        alignment: "left",
      },
      {
        type: "image",
        src: "/projects/master-of-the-wind/3.gif",
        alignment: "right",
      },
      {
        type: "text",
        content:
        `
  <p>
    <b>Masters of the Wind</b> is an action-adventure game prototype that places the player in the role of a wind deity, tasked with controlling and mastering the forces of the wind in a richly interactive environment. As the master of the wind, the player can command gusts to blow objects away or draw in the wind to interact with various natural elements, creating dynamic and creative solutions to environmental challenges.
  </p>
  <p>
    The core gameplay mechanics revolve around the ability to manipulate elements such as <b>leaves</b>, <b>water</b>, and <b>stones</b> to solve puzzles and interact with objects. For example, the player can draw in water to extinguish a fire in a lantern and then use maple leaves to re-light it, seamlessly combining creativity and logic in the gameplay experience. These interactions enrich the game world, encouraging players to experiment with their surroundings.
  </p>
  <p>
    To enhance the visual representation of the wind and its interactions, the game features advanced visual effects implemented using a combination of <b>vertex shaders</b> and <b>animation rigs</b>. These techniques bring the wind and its influenced objects to life, creating fluid and visually engaging effects, such as swaying grass, swirling leaves, and rippling water. This emphasis on aesthetic detail adds an immersive layer to the gameplay, showcasing the harmonious integration of programming and artistry.
  </p>
  <p>
    <b>Masters of the Wind</b> demonstrates a unique blend of environmental storytelling, problem-solving, and technical artistry, making it a compelling prototype with the potential for further development into a full-fledged game.
  </p>
        `
        ,
      },
    ],
    details: [
      { label: "Tools & Skills", value: "Unity, C#." },
      { label: "Role", value: "Artist, Designer & Programmer." },
      { label: "Date", value: "January 2019." },
    ],
    links: [
      { label: "Video Demo", url: "https://youtu.be/4VqMU9Uhnoo" },
    ],
  },
  "webgl-zen-garden": {
    title: "Simple WebGL ZenGarden",
    category: "Computer Graphics",
    content: [
      {
        type: "image",
        src: "/projects/webgl-zen-garden/1.png",
        alignment: "left",
      },
      {
        type: "text",
        content: `

        `,
      },
    ],
    details: [
      { label: "Tools & Skills", value: "JavaScript, WebGL." },
      { label: "Role", value: "Designer & Programmer." },
      { label: "Date", value: "November 2023." },
    ],
    links: [
      { label: "GitHub", url: "https://github.com/tinohuu/zen-garden-webgl" },
    ],
  },
  "goose-college": {
    title: "Goose College",
    category: "Games",
    content: [
      {
        type: "image",
        src: "/projects/goose-college/1.jpg",
        alignment: "left",
      },
      {
        type: "image",
        src: "/projects/goose-college/2.jpg",
        alignment: "left",
      },
      {
        type: "image",
        src: "/projects/goose-college/3.jpg",
        alignment: "right",
      },
      {
        type: "image",
        src: "/projects/goose-college/4.jpg",
        alignment: "right",
      },
      {
        type: "text",
        content: `
  <p>
    <b>Goose College</b> is a charming construction and management simulation game where players step into the role of a college chancellor in a whimsical world inhabited by geese. As the chancellor, players are tasked with designing and building a thriving campus, arranging courses, and managing day-to-day administrative tasks to ensure the smooth operation of their college.
  </p>
  <p>
    In this unique and engaging game, players can construct various facilities such as lecture halls, dormitories, and recreational areas to accommodate their goose students. The course arrangement system allows players to design specialized curricula tailored to the academic needs of their geese, creating a fun and dynamic gameplay experience. Additionally, the game introduces layers of complexity through event management, resource allocation, and solving unexpected challenges within the campus ecosystem.
  </p>
  <p>
    Goose College features an isometric art style with clean and colorful visuals that bring the vibrant goose campus to life. The geese, animated with attention to detail, exhibit quirky behaviors that add a touch of humor and personality to the game. Players can also explore mechanics such as student performance tracking, faculty management, and balancing resources to maintain their institution's reputation.
  </p>
  <p>
    This project was developed as the final assignment for the <b>MA Games Design</b> course at London College of Communication, University of the Arts London. It serves as a testament to the integration of creative design, technical development, and strategic gameplay mechanics, highlighting the potential of simulation games to entertain and engage audiences with innovative themes and mechanics.
  </p>
        `,
      },
    ],
    details: [
      { label: "Tools & Skills", value: "Adobe Photoshop, Unity." },
      { label: "Role", value: "Artist, Designer & Programmer." },
      { label: "Date", value: "January 2021." },
    ],
    links: [
      { label: "Video Demo", url: "https://youtu.be/ojvCbRny3yM?si=I4svTWQp77YK6Oml" },
    ],
  },
  "computer-vision-projects": {
    title: "Computer Vision Projects",
    category: "Computer Vision",
    content: [
      {
        type: "image",
        src: "/projects/computer-vision-projects/a3-1.png",
        alignment: "left",
      },
      {
        type: "image",
        src: "/projects/computer-vision-projects/a4-1.png",
        alignment: "left",
      },
      {
        type: "image",
        src: "/projects/computer-vision-projects/a4-2.png",
        alignment: "left",
      },
      {
        type: "text",
        content: `
  <p><b>Computer Vision Course Projects</b></p>
  <p>A showcase of assignments exploring key concepts in computer vision, including edge detection, optical flow, and image stitching.</p>

  <p><b>1. Canny Edge Detection and Seam Carving</b></p>
  <ul>
    <li><i>Description:</i> Implemented the Canny edge detection algorithm, covering gradient computation, non-maximum suppression, and Hysteresis Thresholding.</li>
    <li><i>Additional Work:</i> Seam carving for content-aware image resizing.</li>
    <li><i>Key Results:</i>
      <ul>
        <li>Input image processed through all Canny edge detection stages.</li>
        <li>Seam carving reduced image dimensions while preserving content.</li>
      </ul>
    </li>
  </ul>

  <p><b>2. Optical Flow Estimation</b></p>
  <ul>
    <li><i>Description:</i> Implemented Lucas-Kanade optical flow estimation to compute motion vectors between frames.</li>
    <li><i>Key Results:</i>
      <ul>
        <li>Motion vectors displayed as color-coded flow maps.</li>
        <li>Used sequences to analyze motion in real-world scenarios.</li>
      </ul>
    </li>
  </ul>

  <p><b>3. RANSAC-Based Image Stitching</b></p>
  <ul>
    <li><i>Description:</i> Applied RANSAC to estimate homography for stitching multiple images into a panorama.</li>
    <li><i>Key Results:</i>
      <ul>
        <li>Successfully stitched input images into seamless panoramas.</li>
        <li>Visualized inlier matches for accurate feature alignment.</li>
      </ul>
    </li>
  </ul>
        `,
      },
    ],
    details: [
      { label: "Tools & Skills", value: "Jupyter Notebook, Konia, OpenCV, Python." },
      { label: "Role", value: "Programmer." },
      { label: "Course", value: "Computer Vision (Fall 2024), York University." },
    ],
    links: [
      { label: "Source Code", url: "https://drive.google.com/drive/folders/13J5L-Me0tCYd8N6OoxKcogUZ9EruMkR0?usp=sharing" },
    ],
  },
  "solitaire-projects": {
    title: "Solitaire Start-up Projects",
    category: "Games, Start-up",
    content: [
      {
        type: "text",
        content: `
<p><b>Project STA (Cancelled)</b></p>
<p><i>Project STA</i> was a mobile solitaire card game inspired by the popular <b>Solitaire: Grand Harvest</b>. It innovatively merged classic Solitaire gameplay with farming simulation elements, allowing players to enjoy traditional card strategies while managing farm activities such as growing and harvesting crops. The game aimed to provide a relaxing yet engaging environment, blending thoughtful card play with enjoyable farming tasks.</p>

<ul>
  <li><b>Team Leadership:</b> Secured an initial investment of $200,000 and led a 12-member team to co-develop the game using Unity, focusing on gameplay programming.</li>
  <li><b>Key Contributions:</b>
    <ul>
      <li>Developed core systems, including sound, save functionality, time management, maps, levels, and quests.</li>
      <li>Designed and implemented a robust map editor for efficient level design.</li>
      <li>Established pipelines for data conversion and offline time verification to ensure fair play mechanics.</li>
    </ul>
  </li>
  <li><b>Challenges and Adaptations:</b> Due to changes in the policy environment and the financial situation of investors, I personally adjusted and finalized the game for release. Although the project was ultimately canceled, it provided invaluable insights into the full game development cycle.</li>
</ul>
        `,
      },
      {
        type: "image",
        src: "/projects/solitaire-projects/1.png",
        alignment: "left",
      },
      {
        type: "image",
        src: "/projects/solitaire-projects/2.png",
        alignment: "left",
      },
      {
        type: "image",
        src: "/projects/solitaire-projects/3.png",
        alignment: "left",
      },
      {
        type: "text",
        content: `
<p><b>Solitaire: Wild West (Released)</b></p>
<p><i>Solitaire: Wild West</i> is a mobile game that combines traditional Solitaire gameplay with an adventurous Wild West theme. Players are invited to saddle up and explore the rugged landscapes of the frontier while solving <i>Tripeaks Solitaire</i> puzzles, outsmarting bandits, and discovering hidden treasures. This project reflects a complete game development cycle, from concept to publication.</p>

<ul>
  <li><b>Independent Development:</b> Managed the entire project single-handedly, including art, code, design, and publishing.</li>
  <li><b>Gameplay and Features:</b>
    <ul>
      <li>Engaging Tripeaks Solitaire puzzles set in an exciting Wild West environment.</li>
      <li>Integrated storylines and dynamic challenges, such as confronting bandits and uncovering hidden treasures.</li>
    </ul>
  </li>
  <li><b>Technical Achievements:</b>
    <ul>
      <li>Developed essential systems for gameplay, user interfaces, and tools using Unity and C#.</li>
      <li>Implemented save, map, and time management systems to enhance player experience.</li>
    </ul>
  </li>
  <li><b>Publishing Success:</b> Independently released the game on Google Play and the App Store, managing the entire process from development to marketing.</li>
</ul>

        `,
      },
    ],
    details: [
      { label: "Tools & Skills", value: "Unity (URP, ShaderGraph), Unity Cloud (Authetication, IAP, Remote Config, Cloud Save), XCode." },
      { label: "Role", value: "Artist, Designer & Programmer." },
      { label: "Project STA Duration", value: "May 2011 - November 2011" },
      { label: "Project West Duration", value: "June 2023 - April 2024" },
    ],
    links: [
      { label: "Landing Page", url: "https://www.easierstudio.com/" },
      { label: "App Store", url: "https://apps.apple.com/app/id6461165103" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.EasierStudio.SolitaireWildWest" },
    ],
  },
};

// 从 URL 获取项目 ID
const params = new URLSearchParams(window.location.search);
const projectId = params.get("id");

// 从 projectDetails 获取项目数据
const project = projectDetails[projectId];

if (project) {
  // 渲染 Header
  const header = document.getElementById("project-header");
  header.innerHTML = `
    <h1>${project.title}</h1>
    <p class="project-category">Category: ${project.category}</p>
  `;

  // 渲染正文内容
  const content = document.getElementById("project-content");
  project.content.forEach((item) => {
    if (item.type === "text") {
      const p = document.createElement("p");
      // 使用 innerHTML 替代 textContent 以支持 HTML 标签
      p.innerHTML = item.content;
      content.appendChild(p);
    } else if (item.type === "image") {
      const img = document.createElement("img");
      img.src = item.src;
      img.className = `image-${item.alignment}`;
      content.appendChild(img);
    }
  });

  // 渲染详情部分
  const detailsSection = document.getElementById("project-details");
  const detailsList = document.createElement("ul");
  project.details.forEach((detail) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${detail.label}:</strong> ${detail.value}`;
    detailsList.appendChild(li);
  });
  detailsSection.appendChild(detailsList);

  // 渲染链接部分
  const links = document.createElement("div");
  links.className = "project-links";
  project.links.forEach((link) => {
    const a = document.createElement("a");
    a.href = link.url;
    a.textContent = link.label;
    a.target = "_blank";
    a.className = "btn";
    links.appendChild(a);
  });
  detailsSection.appendChild(links);
}


