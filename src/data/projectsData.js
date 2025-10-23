//src\data\projectsData.js

const projects = [
  {
    id: "project_1",
    title: "Essential Smart Tools for Daily Use",
    description:
      "A project for the subject Programming 2 (first year, second semester).",
    src: "https://res.cloudinary.com/dr7pljkee/image/upload/v1757572161/image_1_gchwgm.jpg",
    link: "https://res.cloudinary.com/dr7pljkee/image/upload/v1757572161/image_1_gchwgm.jpg", // same image as fallback
    color: "#5196fd",
    category: "Major Project",
    details: {
      overview:
        "The “Essential Smart Tools for Daily Use” project is an all-in-one C++ application designed to provide users with a wide range of essential digital tools in a single, convenient platform. It aims to simplify everyday tasks, enhance productivity, and deliver quick access to commonly used utilities.",
      techStack: ["c++"],
      features: [
        " USER SELECTION: Users will first select a category from the available options (Calculator or Converter)",
        "SUB-OPTION SELECTION: Once the user chooses a category, they can further select a specific tool from the available options within that category (e.g., choosing the Simple Calculator or the Temperature Converter)",
        "INPUT OF CHOICE: After making their selection, the user enters their choice (e.g., selecting specific numbers for calculations or inputting values for conversions)",
        "UTILIZATION: The application then processes the entered information and performs the desired calculation or conversion, presenting the result to the user",
        " FILE STREAM FUNCTIONALITY: is an advanced feature integrated into the All Smart Tools For dailyUse application, using C++ file streams. This function allows users to store the results of their calculations or conversions in files for later reference, analysis, or sharing with others. By using file streams, the application provides a seamless way to manage data and ensures that important information is not lost after exiting the application.",
      ],
      learnings:
        "During this project development, I encountered some difficulties with my code editor, which I used: code blocks. Since my source code consists of almost 8,000 lines, it was hard for me because locating any error, once I test the functionality of the system, the code editor does not provide an auto-format, it gives me problems aligning them. So I use a different code editor, which is Microsoft Visual Studio, because it has an auto-format feature where the code would automatically align. So what I do is I use this, make changes, and edit it, then save the file, then run and test it using Code Block, because when I tried to run it using Microsoft Visual Studio, it runs slow, so I used code blocks to run the system much faster.",
      gallery: [
        {
          image:
            "https://res.cloudinary.com/dr7pljkee/image/upload/v1757572161/image_1_gchwgm.jpg",
          caption: "Application Name Interface",
        },
        {
          image:
            "https://res.cloudinary.com/dr7pljkee/image/upload/v1761226538/Picture1_mmxyr1.png",
          caption: "Option to use the application",
        },
        {
          image:
            "https://res.cloudinary.com/dr7pljkee/image/upload/v1761226538/Picture2_cqhzwk.png",
          caption:
            "Main Category Option Menu Interface, Select Option Any Number Between 1 to 8",
        },
        {
          image:
            "https://res.cloudinary.com/dr7pljkee/image/upload/v1761226538/Picture3_gpt8tu.png",
        },
        {
          image:
            "https://res.cloudinary.com/dr7pljkee/image/upload/v1761226538/Picture4_evg6ow.png",
        },
        {
          image:
            "https://res.cloudinary.com/dr7pljkee/image/upload/v1761226539/Picture5_csws6i.png",
        },
        {
          image:
            "https://res.cloudinary.com/dr7pljkee/image/upload/v1761226538/Picture6_zxy0ig.png",
        },
        {
          image:
            "https://res.cloudinary.com/dr7pljkee/image/upload/v1761226539/Picture7_yb9nma.png",
        },
        {
          image:
            "https://res.cloudinary.com/dr7pljkee/image/upload/v1761226539/Picture8_ng5o88.png",
        },
        {
          image:
            "https://res.cloudinary.com/dr7pljkee/image/upload/v1761226539/Picture9_kmxfoc.png",
        },
        {
          image:
            "https://res.cloudinary.com/dr7pljkee/image/upload/v1761226539/Picture10_s2wmal.png",
        },
        {
          image:
            "https://res.cloudinary.com/dr7pljkee/image/upload/v1761226540/Picture11_hschhh.png",
        },
        {
          image:
            "https://res.cloudinary.com/dr7pljkee/image/upload/v1761226540/Picture12_haikzi.png",
        },
        {
          image:
            "https://res.cloudinary.com/dr7pljkee/image/upload/v1761226540/Picture13_c4hzwx.png",
        },
        {
          image:
            "https://res.cloudinary.com/dr7pljkee/image/upload/v1761226540/Picture14_fvgvw8.png",
        },
        {
          image:
            "https://res.cloudinary.com/dr7pljkee/image/upload/v1761226540/Picture15_vdv08t.png",
        },
        {
          image:
            "https://res.cloudinary.com/dr7pljkee/image/upload/v1761226538/Picture16_a7ggyx.png",
        },
        {
          image:
            "https://res.cloudinary.com/dr7pljkee/image/upload/v1761226540/Picture17_wmkii5.png",
        },
      ],
    },
  },
  {
    id: "project_2",
    title: "Eccomerce Jollibee Inspired",
    description:
      "A project for the subject Technopreneurship (first year, second semester).",
    liveLink: "https://ecommerce-jollibee.vercel.app/",
    src: "https://res.cloudinary.com/dr7pljkee/image/upload/v1761230246/Main_Page_mlcodx.png",
    link: "https://res.cloudinary.com/dr7pljkee/image/upload/v1761230246/Main_Page_mlcodx.png", // same image as fallback
    color: "#5196fd",
    category: "Side Project",
    details: {
      overview:
        "Ecommerce Jollibee is a front-end web project inspired by the Jollibee brand, built using HTML, CSS, and JavaScript. It simulates an online food ordering experience where users can browse menu items, view product details, and experience a simple e-commerce flow. The project demonstrates how an online store interface is structured, from product listing to cart interaction, and showcases responsive web design and deployment through Vercel.",
      techStack: ["HTML", "CSS", "JavaScript"],
      features: [
        "Dynamic product catalogue showcasing various food items using JavaScript (fooditem.js)",
        "Responsive and visually appealing design using HTML and CSS",
        "Interactive UI with basic cart or selection functionality (index.js)",
        "Brand-themed layout inspired by Jollibee for a fun and familiar experience",
        "Static deployment ready for platforms like Vercel or GitHub Pages",
      ],
      learnings:
        "Through this project, I learned essential front-end development skills including HTML structure, CSS styling, and JavaScript DOM manipulation. I gained a deeper understanding of e-commerce UI flow, asset management, and deployment processes. Additionally, I developed an appreciation for branding, user experience, and the importance of clear project structure and version control in software development.",
      // gallery: [
      //   {
      //     image:
      //       "https://res.cloudinary.com/dr7pljkee/image/upload/v1757572161/image_1_gchwgm.jpg",
      //     caption: "Application Name Interface",
      //   },
      //   {
      //     image:
      //       "https://res.cloudinary.com/dr7pljkee/image/upload/v1761226538/Picture1_mmxyr1.png",
      //     caption: "Option to use the application",
      //   },
      //   {
      //     image:
      //       "https://res.cloudinary.com/dr7pljkee/image/upload/v1761226538/Picture2_cqhzwk.png",
      //     caption:
      //       "Main Category Option Menu Interface, Select Option Any Number Between 1 to 8",
      //   },
      // ],
    },
  },

  // {
  //   id: "project_1",
  //   title: "Go CTPL",
  //   description: "A JavaScript library for building modern, single-page applications using server-side routing and React-like components.",
  //   src: "https://res.cloudinary.com/dr7pljkee/image/upload/v1757574838/LoginPage_kexchi.png",
  //   link: "https://res.cloudinary.com/dr7pljkee/image/upload/v1757574838/LoginPage_kexchi.png", // Using same image as fallback for now
  //   color: "#5196fd",
  //   category: "Major project",
  //   details: {
  //     overview: "A lightweight JavaScript library designed to simplify the creation of responsive and accessible UI components.",
  //     techStack: ["JavaScript", "CSS", "HTML"],
  //     features: ["Responsive design", "Lightweight bundle", "Customizable components"],
  //     learnings: "Mastered modular JavaScript and CSS optimization techniques.",
  //     gallery: [
  //       {
  //         image: "https://res.cloudinary.com/dr7pljkee/image/upload/v1757574835/LandingPage_frxcne.png",
  //         caption: "Landing Page.",
  //       },
  //       {
  //         image: "https://res.cloudinary.com/dr7pljkee/image/upload/v1757574835/LandingPage_frxcne.png",
  //         caption: "gwergerger Page.",
  //       },
  //       {
  //         image: "https://res.cloudinary.com/dr7pljkee/image/upload/v1757574835/LandingPage_frxcne.png",
  //         caption: "Landinfgsg Page.",
  //       },
  //       {
  //         image: "https://res.cloudinary.com/dr7pljkee/image/upload/v1757574835/LandingPage_frxcne.png",
  //         caption: "vvvv Page.",
  //       },
  //       {
  //         image: "https://res.cloudinary.com/dr7pljkee/image/upload/v1757574835/LandingPage_frxcne.png",
  //         caption: "Landing Page.",
  //       },
  //       {
  //         image: "https://res.cloudinary.com/dr7pljkee/image/upload/v1757574835/LandingPage_frxcne.png",
  //         caption: "Landing Page.",
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: "project_2",
  //   title: "Lopenze Art Space Gallery",
  //   description: "An online gallery showcasing artistic works.",
  //   src: "https://res.cloudinary.com/dr7pljkee/image/upload/v1757570550/Screenshot_2025-09-05_205049_texqxu.png",
  //   link: "https://res.cloudinary.com/dr7pljkee/image/upload/v1757570550/Screenshot_2025-09-05_205049_texqxu.png", // Using same image as fallback for now
  //   color: "#6b7280",
  //   category: "Art project",
  //   details: {
  //     overview: "A gallery platform to display and manage artwork online.",
  //     techStack: ["TypeScript", "React", "CSS"],
  //     features: ["Image gallery", "Responsive layout", "User navigation"],
  //     learnings: "Improved React state management and image optimization.",
  //     gallery: [
  //       {
  //         image: "https://res.cloudinary.com/dr7pljkee/image/upload/v1757570550/Screenshot_2025-09-05_205049_texqxu.png",
  //         caption: "Gallery interface design.",
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: "project_3",
  //   title: "Essential tools for daily use",
  //   description: "A console based application",
  //   src: "https://res.cloudinary.com/dr7pljkee/image/upload/v1757572161/image_1_gchwgm.jpg",
  //   link: "https://res.cloudinary.com/dr7pljkee/image/upload/v1757572161/image_1_gchwgm.jpg", // Using same image as fallback for now
  //   color: "#4b5563",
  //   category: "Personal project",
  //   details: {
  //     overview: "Documentation of my portfolio creation journey.",
  //     techStack: ["C++"],
  //     features: ["Multi Selection Options", "Useful tools"],
  //     learnings: "Enhanced documentation and version control skills.",
  //     gallery: [
  //       {
  //         image: "https://res.cloudinary.com/dr7pljkee/image/upload/v1757572161/image_1_gchwgm.jpg",
  //         caption: "Logo",
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: "project_4",
  //   title: "Library Management System",
  //   description: "A Simple website to handle simple traking of returned Books",
  //   src: "https://res.cloudinary.com/dr7pljkee/image/upload/v1757940563/Dashboard_ehmbsm.png",
  //   link: "https://res.cloudinary.com/dr7pljkee/image/upload/v1757940563/Dashboard_ehmbsm.png", // Using same image as fallback for now
  //   color: "#4b5563",
  //   category: "Personal project",
  //   details: {
  //     overview: "Documentation of my portfolio creation journey.",
  //     techStack: ["C++"],
  //     features: ["Multi Selection Options", "Useful tools"],
  //     learnings: "Enhanced documentation and version control skills.",
  //     gallery: [
  //     ],
  //   },
  // },
  // Add more projects (up to 100+) with additional Cloudinary URLs as you upload more images
];

export default projects;
