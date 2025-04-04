// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    valentineName: "Minecrafterrr",
    pageTitle: "MineCRAFT! 💄",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['💄', '💄', '💄', '💄', '💄'],  // Heart emojis
        bears: ['🧣', '🧣']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "ТЫ НАСТОЯЩИЙ МАЙНКРАФТЕР??",                                    // First interaction
            yesBtn: "ДАААА",                                             // Text for "Yes" button
            noBtn: "ПИ.. ой.. то есть.. НЕТ!!!",                                               // Text for "No" button
            secretAnswer: "майнкрафт в сердечке!!!"           // Secret hover message
        },
        second: {
            text: "КАК СИЛЬНО ТЫ ЛЮБИШЬ БРАВЛ СТАРС??",                          // For the love meter
            startText: "Вообще-то я люблю только майнкрафт!",                                   // Text before the percentage
            nextBtn: "Да"                                         // Text for the next button
        },
        third: {
            text: "Ты уверен??", // The big question!
            yesBtn: "Да",                                             // Text for "Yes" button
            noBtn: "Да"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "ВАУУУУ ТЫ ТОЧНО ЛЮБИШЬ МАЙНКРАФТ??",  // Shows when they go past 5000%
        high: "НИЧО СЕЕЕ",              // Shows when they go past 1000%
        normal: "РЕАЛЬНО???"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "ВАУУУУ!! НУ ВСЕ, ЗА МАЙНКРУФТЕР ЛАЙКОСИК",
        message: "ты настоящий игрок в майнкруфтер, броу!",
        emojis: "🐈🐈🐈🐈🐈🐈"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3", // Music streaming URL
        startText: "🎵 ВКЛЮЧИТЬ МУЗЫКУ",        // Button text to start music
        stopText: "🔇 ОСТАНОВИТЕ ПЖ",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
