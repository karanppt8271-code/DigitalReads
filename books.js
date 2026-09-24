// ==========================================
// DigitalReads - eBook Database
// ==========================================

const books = [

    {
        id: "ai-tools",
        title: "AI Tools for Beginners",
        subtitle: "AI को आसान भाषा में सीखें और इस्तेमाल करें",
        category: "AI & Technology",
        price: 99,
        oldPrice: 149,
        cover: "covers/ai-tools.jpg",
        description:
            "Beginners के लिए AI सीखने की आसान eBook। इसमें ChatGPT, AI Images, AI Videos, AI Voice, Writing और Online Work जैसे topics बताए गए हैं।",
        chapters: [
            "AI क्या है?",
            "ChatGPT का इस्तेमाल",
            "AI से Images बनाना",
            "AI से Videos बनाना",
            "AI Voice & Audio",
            "AI से Writing & Study",
            "AI से Online Work",
            "AI Safety",
            "10 Useful AI Tools",
            "30-Day AI Learning Plan"
        ],
        paymentLink: ""
    },

    {
        id: "computer-basics",
        title: "Computer Basics",
        subtitle: "Computer सीखने की आसान शुरुआत",
        category: "Computer",
        price: 79,
        oldPrice: 129,
        cover: "covers/computer-basics.jpg",
        description:
            "Computer सीखने वाले beginners के लिए आसान eBook। इसमें computer parts, Windows, files, folders, internet और basic computer skills समझाई गई हैं।",
        chapters: [
            "Computer क्या है?",
            "Computer के Parts",
            "Keyboard और Mouse",
            "Windows की Basic जानकारी",
            "Files और Folders",
            "Internet का इस्तेमाल",
            "Email की Basic जानकारी",
            "MS Word Basics",
            "Online Safety",
            "Computer Practice Plan"
        ],
        paymentLink: ""
    },

    {
        id: "spoken-english",
        title: "Spoken English for Beginners",
        subtitle: "घर बैठे आसान तरीके से English बोलना सीखें",
        category: "English",
        price: 99,
        oldPrice: 149,
        cover: "covers/spoken-english.jpg",
        description:
            "Beginners के लिए Spoken English की आसान eBook। इसमें daily-use English sentences, vocabulary, grammar और speaking practice शामिल है।",
        chapters: [
            "English बोलना कैसे शुरू करें",
            "Daily Use English Words",
            "Daily Use Sentences",
            "Basic Grammar",
            "Introduction देना",
            "Questions और Answers",
            "English Conversation",
            "Common Mistakes",
            "Speaking Practice",
            "30-Day English Plan"
        ],
        paymentLink: ""
    },

    {
        id: "digital-skills",
        title: "Digital Skills for Beginners",
        subtitle: "आज की Digital दुनिया के जरूरी Skills",
        category: "Digital Skills",
        price: 99,
        oldPrice: 149,
        cover: "covers/digital-skills.jpg",
        description:
            "Digital दुनिया में काम करने के लिए जरूरी basic skills सीखने की आसान eBook।",
        chapters: [
            "Digital Skills क्या हैं?",
            "Smartphone और Computer",
            "Internet का सही इस्तेमाल",
            "Google Search",
            "Email और Online Communication",
            "Online Forms भरना",
            "Digital Payments",
            "Online Safety",
            "AI Tools का इस्तेमाल",
            "Digital Skills Practice Plan"
        ],
        paymentLink: ""
    },

    {
        id: "ai-tools-students",
        title: "AI Tools for Students",
        subtitle: "Students के लिए AI का आसान इस्तेमाल",
        category: "AI & Technology",
        price: 99,
        oldPrice: 149,
        cover: "covers/ai-tools-students.jpg",
        description:
            "Students के लिए AI tools का practical इस्तेमाल सीखने की आसान eBook।",
        chapters: [
            "Students के लिए AI क्या है?",
            "ChatGPT से पढ़ाई",
            "Notes बनाने के तरीके",
            "Homework में AI का सही इस्तेमाल",
            "AI से Presentation बनाना",
            "AI से English सीखना",
            "AI से Questions बनाना",
            "Exam Preparation",
            "AI Safety और Ethics",
            "Student AI Study Plan"
        ],
        paymentLink: ""
    },

    {
        id: "chatgpt-master-guide",
        title: "ChatGPT Master Guide",
        subtitle: "ChatGPT को बेहतर तरीके से इस्तेमाल करना सीखें",
        category: "AI & Technology",
        price: 149,
        oldPrice: 199,
        cover: "covers/chatgpt-master-guide.jpg",
        description:
            "ChatGPT को basic से practical level तक समझने के लिए आसान guide।",
        chapters: [
            "ChatGPT क्या है?",
            "Account और Basic Setup",
            "अच्छा Prompt कैसे लिखें",
            "Study के लिए ChatGPT",
            "Writing के लिए ChatGPT",
            "Business के लिए ChatGPT",
            "Coding में ChatGPT",
            "AI Images और Creative Work",
            "Common Mistakes",
            "30 Useful ChatGPT Prompts"
        ],
        paymentLink: ""
    },

    {
        id: "canva-beginners",
        title: "Canva for Beginners",
        subtitle: "Canva से Professional Design बनाना सीखें",
        category: "Digital Skills",
        price: 99,
        oldPrice: 149,
        cover: "covers/canva-beginners.jpg",
        description:
            "Beginners के लिए Canva design की आसान guide।",
        chapters: [
            "Canva क्या है?",
            "Canva Account बनाना",
            "Canva Interface समझना",
            "Poster बनाना",
            "YouTube Thumbnail बनाना",
            "Social Media Post",
            "Presentation Design",
            "Logo Design",
            "Design Tips",
            "Canva Practice Plan"
        ],
        paymentLink: ""
    },

    {
        id: "youtube-channel",
        title: "YouTube Channel कैसे शुरू करें",
        subtitle: "Zero से YouTube Channel शुरू करने की पूरी जानकारी",
        category: "YouTube",
        price: 99,
        oldPrice: 149,
        cover: "covers/youtube-channel.jpg",
        description:
            "Beginners के लिए YouTube channel शुरू करने की practical guide।",
        chapters: [
            "YouTube क्या है?",
            "Channel कैसे बनाएं",
            "Channel Name चुनना",
            "Logo और Banner",
            "Video Ideas कैसे खोजें",
            "Mobile से Video बनाना",
            "AI से Video बनाना",
            "Thumbnail बनाना",
            "YouTube SEO Basics",
            "30-Day YouTube Plan"
        ],
        paymentLink: ""
    },

    {
        id: "online-earning",
        title: "Online Earning for Beginners",
        subtitle: "घर बैठे Online Work की शुरुआत करें",
        category: "Online Work",
        price: 149,
        oldPrice: 199,
        cover: "covers/online-earning.jpg",
        description:
            "Beginners के लिए online work और earning options को समझाने वाली practical eBook।",
        chapters: [
            "Online Earning क्या है?",
            "Laptop से काम करने के तरीके",
            "Freelancing क्या है?",
            "Typing Work",
            "Data Entry Basics",
            "Transcription Work",
            "AI से Services देना",
            "Clients कैसे खोजें",
            "Online Scam से बचाव",
            "Online Work Action Plan"
        ],
        paymentLink: ""
    },

    {
        id: "freelancing-start",
        title: "Freelancing से शुरुआत",
        subtitle: "Beginner से Freelancer बनने की आसान Guide",
        category: "Freelancing",
        price: 149,
        oldPrice: 199,
        cover: "covers/freelancing-start.jpg",
        description:
            "Freelancing शुरू करने वाले beginners के लिए step-by-step guide।",
        chapters: [
            "Freelancing क्या है?",
            "Freelancer कैसे बनें",
            "अपनी Skill चुनना",
            "Portfolio बनाना",
            "Upwork की Basic जानकारी",
            "Fiverr की Basic जानकारी",
            "Job के लिए Proposal",
            "Client से बात करना",
            "Payment और Safety",
            "First Client Action Plan"
        ],
        paymentLink: ""
    },

    {
        id: "ms-word-guide",
        title: "MS Word Complete Guide",
        subtitle: "MS Word को Basic से सीखें",
        category: "Computer",
        price: 99,
        oldPrice: 149,
        cover: "covers/ms-word-guide.jpg",
        description:
            "MS Word सीखने वाले beginners के लिए आसान practical guide।",
        chapters: [
            "MS Word क्या है?",
            "Word Interface",
            "New Document बनाना",
            "Text Formatting",
            "Tables बनाना",
            "Images लगाना",
            "Page Design",
            "Header और Footer",
            "Print और PDF",
            "MS Word Practice"
        ],
        paymentLink: ""
    },

    {
        id: "excel-beginners",
        title: "Excel for Beginners",
        subtitle: "Microsoft Excel की आसान शुरुआत",
        category: "Computer",
        price: 129,
        oldPrice: 179,
        cover: "covers/excel-beginners.jpg",
        description:
            "Beginners के लिए Microsoft Excel की basic जानकारी और practical skills।",
        chapters: [
            "Excel क्या है?",
            "Excel Interface",
            "Rows और Columns",
            "Data Entry",
            "Basic Formulas",
            "SUM और AVERAGE",
            "Sorting और Filtering",
            "Tables बनाना",
            "Simple Charts",
            "Excel Practice Plan"
        ],
        paymentLink: ""
    },

    {
        id: "digital-marketing",
        title: "Digital Marketing Basics",
        subtitle: "Digital Marketing की आसान शुरुआत",
        category: "Digital Marketing",
        price: 149,
        oldPrice: 199,
        cover: "covers/digital-marketing.jpg",
        description:
            "Digital marketing को basic level से समझने के लिए आसान eBook।",
        chapters: [
            "Digital Marketing क्या है?",
            "Online Audience समझना",
            "Website की Basic जानकारी",
            "SEO क्या है?",
            "Social Media Marketing",
            "Content Marketing",
            "Email Marketing",
            "YouTube Marketing",
            "AI और Digital Marketing",
            "Digital Marketing Practice Plan"
        ],
        paymentLink: ""
    },

    {
        id: "english-30-days",
        title: "English Speaking 30 Days",
        subtitle: "30 दिनों में English Speaking की Practice",
        category: "English",
        price: 99,
        oldPrice: 149,
        cover: "covers/english-30-days.jpg",
        description:
            "English speaking improve करने के लिए 30-day practical learning plan।",
        chapters: [
            "Day 1-3: Basic English",
            "Day 4-6: Daily Use Words",
            "Day 7-9: Daily Sentences",
            "Day 10-12: Introduction",
            "Day 13-15: Questions",
            "Day 16-18: Conversation",
            "Day 19-21: Grammar Practice",
            "Day 22-24: Speaking Practice",
            "Day 25-27: Common Mistakes",
            "Day 28-30: Final Speaking Challenge"
        ],
        paymentLink: ""
    }

];


// ==========================================
// Get Book By ID
// ==========================================

function getBookById(id) {
    return books.find(book => book.id === id);
}
