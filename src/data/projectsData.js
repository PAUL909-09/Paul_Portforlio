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
    },
  },
  {
    id: "project_3",
    title: "Inventoria",
    description:
      "A project for the subject Business Intelligence (Second year, second semester).",
    src: "https://res.cloudinary.com/dr7pljkee/image/upload/v1761023559/Picture1_r8ccer.png",
    link: "https://res.cloudinary.com/dr7pljkee/image/upload/v1761023559/Picture1_r8ccer.png",
    watchLink:
      "https://drive.google.com/file/d/1XQL7HwVWckS5RYkZSUxmrAq_fCRRUOFU/view?usp=sharing",
    color: "#5196fd",
    category: "major Project",
    details: {
      overview:
        "A fully functional project based on Inventory Management System which uses C# Language with MySQL Database. Following C# MySQL project contains all the essential features which can be in use for the first-year, second-year IT students for their college projects. It has a number of features that will allow users to track inventories and sales. This system as well as the desktop application’s concept is all clear. It’s the same as real-life scenarios and well-implemented on it.",
      techStack: ["C#"],
      features: [
        "Admin Panel",
        "Manager Panel",
        "Customer Panel",
        "Customer Registration",
        "Manage Items",
        "Order Management",
        "Add to Cart System",
        "View Customer’s Order",
        "Filter Products",
        "Generate Items Report PDF",
        "Generate Orders Report PDF",
        "Product Stock",
        "System User Management",
      ],
      learnings:
        "During the development of this project, I discovered that using C# as a programming language was both challenging and surprisingly exciting. Working in Microsoft Visual Studio made the process more enjoyable, especially with its drag-and-drop design tools that allowed me to build the user interface intuitively and creatively. However, the journey wasn’t without obstacles. Since I was not very familiar with C# at the start, I encountered several difficulties understanding certain concepts and debugging issues. Despite those challenges, I dedicated myself to learning and experimenting, and after more than a month of continuous effort, I was able to complete all the features I envisioned for the system. This experience not only strengthened my technical skills but also deepened my appreciation for software development turning what began as a simple project into a rewarding learning milestone.",
      gallery: [
        {
          image:
            "https://res.cloudinary.com/dr7pljkee/image/upload/v1761023559/Picture1_r8ccer.png",
          caption: "Log in ",
        },
        {
          image:
            "https://res.cloudinary.com/dr7pljkee/image/upload/v1761023560/Picture2_m4wdhr.png",
          caption: "Admin Dashboard ",
        },
        {
          image:
            "https://res.cloudinary.com/dr7pljkee/image/upload/v1761023560/Picture4_fifph5.png",
          caption: "Admin cSn view user list",
        },
        {
          image:
            "https://res.cloudinary.com/dr7pljkee/image/upload/v1761023560/Picture3_nwsczm.png",
          caption: "Admin Dashboard",
        },
        {
          image:
            "https://res.cloudinary.com/dr7pljkee/image/upload/v1761023562/Picture5_inuadf.png",
          caption: "Admin can create account for the manager or the member",
        },
        {
          image:
            "https://res.cloudinary.com/dr7pljkee/image/upload/v1761023561/Picture6_moklkv.png",
          caption: "",
        },
        {
          image:
            "https://res.cloudinary.com/dr7pljkee/image/upload/v1761023561/Picture7_rdvy89.png",
          caption: "",
        },
        {
          image:
            "https://res.cloudinary.com/dr7pljkee/image/upload/v1761023562/Picture8_l9rojs.png",
          caption: "",
        },
        {
          image:
            "https://res.cloudinary.com/dr7pljkee/image/upload/v1761023563/Picture9_p6zn2h.png",
          caption: "",
        },
        {
          image:
            "https://res.cloudinary.com/dr7pljkee/image/upload/v1761023564/Picture10_iqchcg.png",
          caption: "",
        },
        {
          image:
            "https://res.cloudinary.com/dr7pljkee/image/upload/v1761023564/Picture10_iqchcg.png",
          caption: "",
        },
        {
          image:
            "https://res.cloudinary.com/dr7pljkee/image/upload/v1761023565/Picture11_w2tef1.png",
          caption: "",
        },
        {
          image:
            "https://res.cloudinary.com/dr7pljkee/image/upload/v1761023565/Picture12_u0umqf.png",
          caption: "",
        },
        {
          image:
            "https://res.cloudinary.com/dr7pljkee/image/upload/v1761023566/Picture13_oou3u8.png",
          caption: "",
        },
      ],
    },
  },
  {
    id: "project_4",
    title: "Pageant Tabulator System",
    description:
      "A project for the subject Programming 3 (Second year, second semester).",
    src: "https://res.cloudinary.com/dr7pljkee/image/upload/v1761023146/Screenshot_2025-10-13_202445_sqifuj.png",
    link: "https://res.cloudinary.com/dr7pljkee/image/upload/v1761023146/Screenshot_2025-10-13_202445_sqifuj.png",

    color: "#5196fd",
    category: "major Project",
    details: {
      overview:
        "A fully functional project based on Inventory Management System which uses C# Language with MySQL Database. Following C# MySQL project contains all the essential features which can be in use for the first-year, second-year IT students for their college projects. It has a number of features that will allow users to track inventories and sales. This system as well as the desktop application’s concept is all clear. It’s the same as real-life scenarios and well-implemented on it.",
      techStack: ["C#"],
      features: [""],
      learnings: "",
      gallery: [
        {
          image:
            "https://res.cloudinary.com/dr7pljkee/image/upload/v1761023146/Screenshot_2025-10-13_202445_sqifuj.png",
          caption: "Log in ",
        },
        {
          image:
            "https://res.cloudinary.com/dr7pljkee/image/upload/v1761023145/Screenshot_2025-10-13_202509_lrov8b.png",
          caption: "Admin Menu ",
        },
        {
          image:
            "https://res.cloudinary.com/dr7pljkee/image/upload/v1761023144/Screenshot_2025-10-13_203435_nijek1.png",
          caption: "Log in ",
        },
        {
          image:
            "https://res.cloudinary.com/dr7pljkee/image/upload/v1761023146/Screenshot_2025-10-13_202445_sqifuj.png",
          caption: "Log in ",
        },
        {
          image:
            "https://res.cloudinary.com/dr7pljkee/image/upload/v1761023146/Screenshot_2025-10-13_202445_sqifuj.png",
          caption: "Log in ",
        },
        {
          image:
            "https://res.cloudinary.com/dr7pljkee/image/upload/v1761023146/Screenshot_2025-10-13_202445_sqifuj.png",
          caption: "Log in ",
        },
        {
          image:
            "https://res.cloudinary.com/dr7pljkee/image/upload/v1761023146/Screenshot_2025-10-13_202445_sqifuj.png",
          caption: "Log in ",
        },
        {
          image:
            "https://res.cloudinary.com/dr7pljkee/image/upload/v1761023146/Screenshot_2025-10-13_202445_sqifuj.png",
          caption: "Log in ",
        },
      ],
    },
  },
  {
    id: "project_5",
    title: "ATM Management System",
    description:
      "A project for the subject Object Oriented Programming, Information Management and Human Computer Interaction(Second year, second semester).",
    src: "https://res.cloudinary.com/dr7pljkee/image/upload/v1761399205/Screenshot_2025-10-25_213221_sqnzpd.png",
    link: "https://res.cloudinary.com/dr7pljkee/image/upload/v1761399205/Screenshot_2025-10-25_213221_sqnzpd.png",
    watchLink:
      "https://drive.google.com/file/d/1ojPbTa68Zuzk9BrTSh5c2vgSaiNnylSZ/view?usp=sharing",
    color: "#5196fd",
    category: "major Project",
    details: {
      overview:
        "",
      techStack: ["C#"],
      features: [""],
      learnings: "",
      gallery: [
      ],
    },
  },
  {
    id: "project_6",
    title: "ATM Management System",
    description:
      "A project for the subject Object Oriented Programming, Information Management and Human Computer Interaction(Second year, second semester).",
    src: "https://res.cloudinary.com/dr7pljkee/image/upload/v1761400143/Screenshot_2025-10-25_214743_ytwbgj.png",
    link: "https://res.cloudinary.com/dr7pljkee/image/upload/v1761400143/Screenshot_2025-10-25_214743_ytwbgj.png",
    // watchLink:
    //   "https://drive.google.com/file/d/1ojPbTa68Zuzk9BrTSh5c2vgSaiNnylSZ/view?usp=sharing",
    color: "#5196fd",
    category: "major Project",
    details: {
      overview: "",
      techStack: ["C#"],
      features: [""],
      learnings: "",
      gallery: [],
    },
  },
  {
    id: "project_7",
    title: "Art Space Gallery",
    description:
      "",
    liveLink: "https://art-space-gallery.vercel.app/",
    src: "https://res.cloudinary.com/dr7pljkee/image/upload/v1761449425/e13ac480-9e59-481f-9c75-6520342f41dd.png",
    link: "https://res.cloudinary.com/dr7pljkee/image/upload/v1761449425/e13ac480-9e59-481f-9c75-6520342f41dd.png",
    // watchLink:
    //   "https://drive.google.com/file/d/1ojPbTa68Zuzk9BrTSh5c2vgSaiNnylSZ/view?usp=sharing",
    color: "#5196fd",
    category: "major Project",
    details: {
      overview: "",
      techStack: [""],
      features: [""],
      learnings: "",
      gallery: [],
    },
  },
  {
    id: "project_8",
    title: "Library Management System",
    description:
      "",
    src: "https://res.cloudinary.com/dr7pljkee/image/upload/v1757940563/Dashboard_ehmbsm.png",
    link: "https://res.cloudinary.com/dr7pljkee/image/upload/v1757940563/Dashboard_ehmbsm.png",
    // watchLink:
    //   "https://drive.google.com/file/d/1ojPbTa68Zuzk9BrTSh5c2vgSaiNnylSZ/view?usp=sharing",
    color: "#5196fd",
    category: "major Project",
    details: {
      overview: "",
      techStack: [""],
      features: [""],
      learnings: "",
      gallery: [],
    },
  },
  {
    id: "project_9",
    title: "GoCTPL",
    description:
      "",
    src: "https://res.cloudinary.com/dr7pljkee/image/upload/v1757574838/LoginPage_kexchi.png",
    link: "https://res.cloudinary.com/dr7pljkee/image/upload/v1757574838/LoginPage_kexchi.png",
    // watchLink:
    //   "https://drive.google.com/file/d/1ojPbTa68Zuzk9BrTSh5c2vgSaiNnylSZ/view?usp=sharing",
    color: "#5196fd",
    category: "major Project",
    details: {
      overview: "",
      techStack: [""],
      features: [""],
      learnings: "",
      gallery: [],
    },
  },
];

export default projects;
