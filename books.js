// ==========================================
// DigitalReads - eBook Database
// ==========================================

const books = [

    // 📘 BOOK 1
    {
        id: "ai-tools",
        title: "AI Tools for Beginners",
        subtitle: "AI को आसान भाषा में सीखें और इस्तेमाल करें",
        category: "AI & Technology",
        price: 99,
        oldPrice: 149,

        cover: "https://via.placeholder.com/400x550/17122b/ffffff?text=AI+Tools",

        description:
            "यह eBook beginners के लिए बनाई गई है। इसमें AI को आसान भाषा में समझाया गया है और ChatGPT, AI Image, AI Video, AI Voice तथा Online Work जैसे topics बताए गए हैं।",

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

        paymentLink: "https://rzp.io/rzp/aJvPncI"
    },


    // 💻 BOOK 2
    {
        id: "computer-basics",
        title: "Computer Basics",
        subtitle: "Computer सीखने की आसान शुरुआत",
        category: "Computer",
        price: 79,
        oldPrice: 129,

        cover: "https://via.placeholder.com/400x550/17122b/ffffff?text=Computer+Basics",

        description:
            "Computer की basic जानकारी सीखने वालों के लिए आसान eBook। इसमें computer के parts, Windows, files, folders, internet और basic computer skills समझाई गई हैं।",

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

        // बाद में Computer की अलग Razorpay Payment Link यहाँ डालें
        paymentLink: "https://rzp.io/rzp/aJvPncI"
    },


    // 🗣️ BOOK 3
    {
        id: "spoken-english",
        title: "Spoken English for Beginners",
        subtitle: "घर बैठे आसान तरीके से English बोलना सीखें",
        category: "English",
        price: 99,
        oldPrice: 149,

        cover: "https://via.placeholder.com/400x550/17122b/ffffff?text=Spoken+English",

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

        // बाद में Spoken English की अलग Razorpay Payment Link यहाँ डालें
        paymentLink: "https://rzp.io/rzp/aJvPncI"
    },


    // 📱 BOOK 4
    {
        id: "digital-skills",
        title: "Digital Skills for Beginners",
        subtitle: "आज की Digital दुनिया के जरूरी skills",
        category: "Digital Skills",
        price: 99,
        oldPrice: 149,

        cover: "https://via.placeholder.com/400x550/17122b/ffffff?text=Digital+Skills",

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
    }

];


// ==========================================
// किसी Book को ID से खोजने का Function
// ==========================================

function getBookById(id) {
    return books.find(book => book.id === id);
}
