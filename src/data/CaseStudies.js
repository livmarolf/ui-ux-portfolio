export const pageData = {
  huddleup: {
    slug: "huddleup",
    title: "HuddleUp",
    description: "A sports team management application",
    mainImage: "path",
    prototypeLink: "",
    overview: [
      "HuddleUp simplifies sports team management for coaches, players, gym owners, and enthusiasts across various levels, addressing common administrative challenges that can distract from training and enjoying sports. ",
      "Streamlining sports team management is achieved by allowing coaches to effortlessly track attendance, practice hours, and promotions. It also offers user-friendly team calendars to enhance communication and coordination. In essence, this app streamlines the sports experience, reducing administrative hassles and enabling a more focused pursuit of athletic excellence for everyone involved.",
    ],
    responsibilities: [
      "UX Designer (Research, Visual Design, Interaction Design, Usability Testing)",
      "User Interface (UI) Designer",
      "Content Designer",
    ],
    tools: ["path", "path", "path"],
    problemStatement:
      "HuddleUp simplifies sports team management by addressing various administrative challenges. It offers intuitive solutions for scheduling, roster management, and performance tracking, helping coaches, players, and administrators streamline their tasks. With its user-friendly interface and comprehensive features, HuddleUp makes team management more efficient, allowing users to focus on the game.",
    deliverables: [
      "Site Map",
      "Competitive analysis",
      "Personas",
      "Low-fidelity wireframes",
      "Usability tests and findings",
      "User journeys and task flows",
      "High-fidelity prototypes",
      "User surveys and interviews",
    ],
    designProcess: [
      {
        listTitle: "01 RESEARCH",
        listItems: [
          {
            subTitle: "BUSINESS",
            listContent: ["Market Research", "Competitive Analysis"],
          },
          {
            subtitle: "USER",
            listContent: ["User Interviews", "User Personas", "Surveys"],
          },
        ],
      },
      {
        listTitle: "02 STRATEGIZE",
        listItems: ["Product Goals", "Product Roadmap", "Site Map"],
      },
      {
        listTitle: "03 DESIGN",
        listItems: ["User Flow", "Wireframes", "Prototype"],
      },
      {
        listTitle: "04 TEST",
        listItems: ["Plan", "Conduct", "Report", "Optimize"],
      },
    ],
    researchPlan: {
      titleParagraph: [
        "Research explores user behaviors, motivations, challenges, aspirations, constraints, and objectives, providing essential insights for later project phases. To ensure effective guidance for responsive website design, a carefully crafted research plan is necessary, detailing research goals, inquiries, methods, participants, and a clear timeline.",
      ],

      researchGoals: [
        "Identify the target audience",
        "Assess competitor’s strengths and weaknesses",
        "Get to know how coaches are managing their teams",
        "Understand the market of platforms related to Sports",
        "Uncover people's experience using team management platforms",
        "Gather insights on how key competitors address customer needs",
      ],
      methodologies: [
        "Primary Research (User Interview)",
        "Secondary Research (Market Research, Competitive Analysis)",
      ],
    },
    targetAudience:
      "HuddleUp caters to a broad audience of sports enthusiasts, including coaches, players, and team administrators at different levels of expertise. Coaches use it for team management and performance tracking, while players rely on it for schedules and communication. Team administrators benefit from centralized control and reporting features. Whether users are seasoned athletes or new to sports, the app offers intuitive tools to enhance their experience.",
    userInterviews: {
      titleParagraph: [
        "I went beyond my basic market understanding and had more meaningful conversations with our user community, which helped me gather direct insights through primary research methods.",
      ],

      questions: [
        "What is your current approach to team management?",
        "How satisfied are you with the team's communication dynamics?",
        "Do you believe you are sufficiently informed about any schedule changes?",
        "In terms of scheduling, how do you typically communicate changes to your team?",
        "Is it easy for you to track your training progress and the hours you've dedicated to it?",
        "Can you share some challenging experiences you've encountered while overseeing your team?",
        "Are you confident in your understanding of the team's performance over the course of the season?",
        "Where do you maintain your team's seasonal calendar, and what methods do you use to keep it up-to-date?",
      ],
      userInterviewsTiles: [
        {
          fraction: "6/6",
          content:
            "All participants communicated that transparency in communication, especially concerning schedule changes, is an area where improvements are needed",
        },
        {
          fraction: "3/6",
          content:
            "All teammates expressed interest in easily tracking their training progress and the hours dedicated to it, indicating a potential opportunity for better monitoring tools or methods",
        },
        {
          fraction: "6/6",
          content:
            "All interviewees stated that the methods used for scheduling communication differ, with a combination of email, team meetings, messaging apps, and digital calendars being employed",
        },
        {
          fraction: "2/6",
          content:
            "Both coaches have faced challenges in team management, such as motivating players during losing streaks and handling tension within the team due to differing playing styles",
        },
      ],
    },
    marketResearch: {
      titleParagraph: [
        "It is important to begin with market research to grasp the broader market landscape, including audience, knowledge gaps, recent trends, and news. The insights gained will inform provisional personas and guide meaningful questions for primary research.",
      ],
      researchContext:
        "Overall in the realm of sports, team management platforms have emerged as highly influential tools, enjoying widespread popularity for their role in optimizing team organization and performance. It is expected that the global sports management software market to exhibit a CAGR of 14.8% during 2023-2028 (imarc). The sports team management platform industry has experienced a consistent increase in demand, driven by the need for streamlined communication, scheduling, and data management for sports teams of all levels",
      demographics: [
        "A significant portion of the user demographic comprises youth and amateur sports teams, such as Little League baseball, local soccer clubs, and school athletics.",
        "Sports management platforms are commonly utilized by schools, colleges, and universities to coordinate sports activities, manage teams, and ensure compliance with regulations.",
        "Beyond competitive sports, recreational and community teams, often organized by community centers or local groups, use these platforms to facilitate sports participation and community engagement.",
      ],
    },
    competitiveResearch: {
      titleParagraph: ["Three examples of competitors"],
      researchTable: [
        {
          columnTitle: "LeagueApps",
          strengths: [
            "Customization",
            "Comprehensive Sports Management",
            "Diverse Sports Support",
            "User Community",
          ],
          weaknesses: ["Cost", "Learning Curve", "Integration Challenges"],
        },
        {
          columnTitle: "TeamSnap",
          strengths: [
            "User-Friendly Interface",
            "Mobile Accessibility",
            "Integration Capability",
            "Global User Base",
          ],
          weaknesses: [
            "Pricing",
            "Limited Reporting",
            "Customer Support Variability",
          ],
        },
        {
          columnTitle: "Jersey Watch",
          strengths: [
            "Affordable Solution",
            "Youth Sports Focus",
            "User-Friendly Interface",
            "Communication Tools",
          ],
          weaknesses: [
            "Limited Features",
            "Scalability",
            "Integration Challenges",
          ],
        },
      ],
    },
    userPersona: {
      titleParagraph: [
        "With a good understanding of the audience, including their objectives and requirements, I use user personas to represent important audience segments. This helps me focus on addressing key challenges and meeting the primary needs of user groups.",
      ],
      personaImage: "path",
    },
    productGoals: {
      titleParagraph: [
        "I've chosen to compile project goals that will serve as a roadmap for the future development of the product. These goals will also act as criteria for deciding which features to incorporate into the mobile application.",
        "These objectives are a synthesis of user goals derived from my user persona and business goals grounded in all available information.",
      ],
      goalsImage: "path",
    },
    prioritizedRoadmap: {
      titleParagraph: [
        "Subsequently, I translated my brainstormed solutions into a detailed list of product features to construct a comprehensive product roadmap. These features were categorized into four groups: Must-have (P1), Nice-to-Have (P2), and Surprising and Delightful (P3) features. The categorization was based on their alignment with both business and user objectives.",
        "The product roadmap not only aligns project goals with the product but also guarantees that we prioritize the most critical features during the development phase.",
      ],
      phaseOne: [
        "Sign Up/Sign In/Sign Out",
        "Create teams",
        "User roles",
        "Class/practice check-in",
        "Team scheduling (shared calendar)",
        "User profiles",
        "Create Events",
        "Subscriptions",
        "Payment handling",
      ],
      phaseTwo: [
        "Team messaging",
        "Team search",
        "User statistics",
        "Multiple team chat",
        "Notifications",
        "Calendar comparison",
        "Scheduling comparison",
        "Social media sharing",
      ],
      phaseThree: [
        "Team dashboard",
        "Statistic notifications",
        "Achievements",
        "Custom achievements",
      ],
    },
    siteMap: {
      siteMapImage: "path",
    },
    userAndTaskFlow: {
      titleParagraph: [
        "I developed the user task flow for the class check-in process, a pivotal functionality within the website. This task flow is designed to accommodate guest visitors seeking to enroll in a class.",
      ],
      userFlowImage: "path",
      taskFlowImage: "path",
    },
    wireframes: [
      "path",
      "path",
      "path",
      "path",
      "path",
      "path",
      "path",
      "path",
      "path",
    ],
    typographyImage: "path",
  },
};
