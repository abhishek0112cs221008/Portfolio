
export const getBotResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();

    // Greetings
    if (lowerInput.match(/\b(hi|hello|hey|helo|greetings|morning|afternoon)\b/)) {
        return "Hi there! 👋 I'm Abhishek's virtual assistant. Ask me about his projects, skills, or experience!";
    }

    // Specific Projects
    if (lowerInput.includes("voya")) {
        return "VOYA is a full-stack e-commerce platform built with Java, JSP, Servlets, and MySQL. It features authentication, a product catalog, and a complete admin panel.";
    }
    if (lowerInput.includes("url") || lowerInput.includes("shortener")) {
        return "The URL Shortener is a high-performance tool for link management and analytics, built using Java Servlets, JSP, and MySQL.";
    }
    if (lowerInput.includes("expense") || lowerInput.includes("tracker")) {
        return "The Expense Tracker is a mobile app built with Flutter and SQLite. It offers offline storage and category-wise spending insights.";
    }

    // Experience / Internship
    if (lowerInput.match(/\b(intern|experience|work|company|algonive|job)\b/)) {
        return "Abhishek was a **Java Programming Intern at Algonive Technologies** (Oct–Nov 2025). He worked on backend modules, core Java concepts (OOP, Collections), and debugging.";
    }

    // Skills / Tech Stack
    if (lowerInput.match(/\b(java|spring|boot|react|sql|tech|skill|stack|programming)\b/)) {
        return "His tech stack is robust: \n• **Languages**: Java, JavaScript, SQL\n• **Frameworks**: Spring Boot (Learning), React, Node.js\n• **Tools**: Git, Docker, Postman\n• **Databases**: MySQL, MongoDB, SQLite";
    }

    // LeetCode / DSA
    if (lowerInput.match(/\b(leetcode|dsa|problem|solving|algorithm|structure)\b/)) {
        return "He has a strong grasp of DSA, having solved **320+ problems on LeetCode**. He enjoys optimizing code for time and space complexity.";
    }

    // Education (Inferred)
    if (lowerInput.match(/\b(college|education|degree|study|student|university)\b/)) {
        return "He is pursuing a degree in Computer Science (implied by his CS coursework and projects). He is a passionate learner focused on Backend Development.";
    }

    // Contact
    if (lowerInput.match(/\b(contact|email|phone|hire|reach|call)\b/)) {
        return "You can reach him at **0112cs221008@gmail.com** or call **+91 8770321224**. He is based in India 🇮🇳.";
    }

    // Resume
    if (lowerInput.match(/\b(resume|cv|download|pdf)\b/)) {
        return "You can download his full Resume PDF from the button in the Hero section at the top of the page! 📄";
    }

    // About / General
    if (lowerInput.match(/\b(about|who|abhishek|name|yourself)\b/)) {
        return "Abhishek Patel is a Full Stack Developer from India who loves building scalable systems. He bridges the gap between complex backends and beautiful frontends.";
    }

    // Default Fallback
    return "I'm still learning! 🧠 Try asking specifically about 'VOYA', 'internship', 'tech stack', or 'contact'.";
};
