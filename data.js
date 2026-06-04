const portfolioData = {
    projects: [
        {
            id: 1,
            title: "Radiant Decor World",
            tech: "Wordpress",
            category: "Website Development",
            desc: "A premium interior decor website designed to showcase products, services, and completed projects through an engaging digital experience.",
            longDesc: "Radiant Decor World was developed as a custom WordPress website for an interior decor business looking to strengthen its online presence and generate more customer inquiries. The website features service-focused landing pages, project galleries, lead generation forms, and a responsive design optimized for all devices. Special attention was given to visual storytelling, page performance, and SEO-friendly architecture to help potential customers easily explore the company's offerings and completed work.",
            image: "/images/Radiant-Decor-World-05-27-2026_06_47_PM.webp",
            tools: ["Wordpress", "PHP", "HTML", "CSS", "JavaScript"]
        },

        {
            id: 2,
            title: "Cardiff - Truck Repair 24/7 Truck Trailer Service GTA",
            tech: "Wordpress",
            category: "Website Development",
            desc: "A service-focused website built for a commercial truck repair company offering emergency roadside assistance and trailer repair services.",
            longDesc: "Cardiff Truck Repair required a professional online platform that could effectively communicate its 24/7 emergency repair services to fleet operators and truck owners. Built with WordPress, the website includes dedicated service pages, emergency contact features, location coverage information, and inquiry forms designed to convert visitors into customers. The project emphasized fast loading speeds, mobile accessibility, local SEO optimization, and clear call-to-action placement to support customer acquisition and service requests.",
            image: "/images/Cardiff-Truck-Repair-24-7-Truck-Trailer-Service-GTA-05-27-2026_06_47_PM.webp",
            tools: ["Wordpress", "PHP", "HTML", "CSS", "JavaScript"]
        },
        {
            id: 3,
            title: "VastuKKalp - Rejuvenate Your Space",
            tech: "Wordpress",
            category: "Website Development",
            desc: "A modern website created for a Vastu consultation and space wellness brand focused on trust, credibility, and client engagement.",
            longDesc: "VastuKKalp was developed to establish a strong digital presence for a Vastu consultation business. The website highlights consultation services, client success stories, educational content, and booking inquiries through a clean and intuitive user experience. Built using a custom WordPress implementation, the platform focuses on accessibility, search engine visibility, and content-driven engagement. The design balances traditional Vastu principles with a modern visual identity, helping visitors understand the services while encouraging consultation requests.",
            image: "/images/VastuKKalp-–-Rejuvenate-your-space-05-27-2026_06_47_PM.webp",
            tools: ["Wordpress", "PHP", "HTML", "CSS", "JavaScript"]
        },

        {
            id: 4,
            title: "Growfied - Online Learning Platform",
            tech: "Laravel",
            category: "Web Application Development",
            desc: "A scalable course-selling platform built with Laravel, enabling educators and businesses to create, manage, and sell online courses.",
            longDesc: "Growfied is a feature-rich e-learning platform developed using Laravel, designed to provide a seamless experience for both instructors and learners. The platform includes course management, secure payment gateway integration, user enrollment, progress tracking, quizzes, certificates, and an intuitive admin dashboard. Special attention was given to performance optimization, security, and scalability to support a growing user base. The responsive design ensures a smooth learning experience across desktop and mobile devices, while the modular architecture allows for future feature expansion and integrations.",
            image: "/images/growfied-Online-Earning-With-E-learning-06-03-2026_06_47_PM.webp",
            tools: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap"]
        },

        {
            id: 5,
            title: "Onbase - Worker Hiring Platform",
            tech: "Node.js",
            category: "Web Application Development",
            desc: "A modern workforce hiring platform connecting businesses with skilled workers for on-demand and long-term job opportunities.",
            longDesc: "Onbase is a comprehensive worker hiring platform inspired by service marketplace solutions, enabling businesses to find, hire, and manage skilled professionals efficiently. Built with Next.js and powered by a Node.js backend, the platform includes job posting, worker profiles, real-time application management, location-based search, notifications, and an advanced admin dashboard. The system was designed with scalability, security, and performance in mind to support a growing ecosystem of employers and workers.",
            image: "/images/OnBase-Book-Verified-Construction-Workers-Instantly-06-03-2026_06_33_PM.webp",
            tools: ["Node.js", "Next.js", "MongoDB", "Express.js"]
        },
        {
            id: 6,
            title: "Onbase - Customer Mobile App",
            tech: "React Native",
            category: "Mobile Application Development",
            desc: "A mobile application that allows customers to discover, book, and manage services from verified professionals.",
            longDesc: "The Onbase Customer App was developed using React Native to provide users with a seamless way to connect with service providers. The application features service discovery, instant booking, job tracking, secure payments, ratings and reviews, push notifications, and real-time communication. The app focuses on delivering a smooth user experience across both Android and iOS platforms while maintaining high performance and reliability.",
            image: "/images/onbase-main-mobile-app.webp",
            tools: ["React Native", "Node.js", "Firebase", "Redux"]
        },
        {
            id: 7,
            title: "Onbase Partners - Service Provider App",
            tech: "React Native",
            category: "Mobile Application Development",
            desc: "A dedicated partner application for workers and service providers to manage jobs, earnings, and customer interactions.",
            longDesc: "Onbase Partners is a React Native application built specifically for service providers and workers registered on the Onbase platform. The app enables partners to accept or reject job requests, manage schedules, track earnings, update availability, communicate with customers, and monitor performance metrics. Designed for operational efficiency, the application includes real-time notifications, GPS-based job tracking, and a streamlined dashboard to help partners grow their business while delivering exceptional service.",
            image: "/images/onbase-partner-mobile-app.webp",
            tools: ["React Native", "Node.js", "Firebase", "Redux"]
        },
        {
            id: 8,
            title: "The Tarot Guru - Tarot Reading App",
            tech: "Flutter",
            category: "Mobile Application Development",
            desc: "A spiritual tarot card reading application offering personalized readings, guidance, and daily insights.",
            longDesc: "The Tarot Guru is a Flutter-based mobile application designed for users seeking spiritual guidance through tarot card readings. The app features daily tarot draws, personalized reading sessions, card interpretations, astrology-inspired insights, and user-friendly navigation. Built with a focus on performance and engagement, the application delivers a seamless experience across Android and iOS devices while maintaining a visually calming and intuitive interface.",
            image: "/images/the-tarot-guru-mobile-app.webp",
            tools: ["Flutter", "Dart", "Firebase", "REST API"]
        }, {
            id: 9,
            title: "Wexcare Pharmaceutical - Medicine Ordering App",
            tech: "Flutter",
            category: "Mobile Application Development",
            desc: "A B2B pharmaceutical ordering platform enabling pharmacies and distributors to purchase medicines in bulk.",
            longDesc: "Wexcare Pharmaceutical is a Flutter-based mobile application developed to simplify bulk medicine procurement for pharmacies, distributors, and healthcare businesses. The platform provides product catalog management, bulk order placement, inventory visibility, order tracking, and secure transaction workflows. The application was optimized for reliability and scalability, ensuring a smooth ordering experience across Android and iOS devices.",
            image: "/images/wexcare-pharmaceutical-app.webp",
            tools: ["Flutter", "Dart", "Firebase", "REST API"]
        }, {
            id: 10,
            title: "Antrix Auto - Vehicle Parts Ordering App",
            tech: "Flutter",
            category: "Mobile Application Development",
            desc: "A mobile commerce solution for browsing and ordering automotive spare parts and accessories.",
            longDesc: "Antrix Auto is a Flutter-powered mobile application built for automotive businesses and customers seeking a streamlined way to purchase vehicle parts and accessories. The app includes product browsing, category management, order placement, inventory synchronization, and order tracking features. Designed for usability and performance, the application helps simplify the procurement process for vehicle maintenance and repair needs.",
            image: "/images/antrix-auto-mobile-app.webp",
            tools: ["Flutter", "Dart", "Firebase", "REST API"]
        }, {
            id: 11,
            title: "Offlyn - Event Booking Platform Support",
            tech: "Flutter",
            category: "Mobile Application Maintenance & Consulting",
            desc: "Enhanced an event booking application by resolving music integration issues, fixing bugs, and managing app store deployment processes.",
            longDesc: "Offlyn is an event booking platform where I contributed as a Flutter developer to improve application stability and functionality. My responsibilities included resolving music playback and audio integration issues during event bookings, fixing various UI and functional bugs, providing development process guidance, and assisting the team with deployment workflows. Additionally, I managed and documented the complete Android Play Store and Apple App Store submission process, ensuring successful application releases and compliance with platform requirements.",
            image: "/images/offlyn-mobile-app.webp",
            tools: ["Flutter", "Dart", "Firebase", "Google Play Console", "App Store Connect"]
        },
        {
    id: 12,
    title: "Email Outreach Automation Software",
    tech: "Electron.js",
    category: "Desktop Application Development",
    desc: "A desktop-based email outreach platform designed to automate prospecting, campaign management, and lead engagement workflows.",
    longDesc: "This Electron-based desktop application was developed to streamline cold email outreach and lead generation processes for businesses and sales teams. The software includes campaign creation, contact management, email personalization, scheduling, tracking, and reporting features within a unified desktop interface. Built using modern JavaScript technologies, the application focuses on productivity, reliability, and workflow automation, enabling users to manage outreach campaigns efficiently while monitoring engagement metrics and campaign performance.",
    image: "/images/email-outraching-saas-react-app.webp",
    tools: ["Electron.js", "React", "Node.js", "JavaScript", "SQLite"]
},

    ]
};