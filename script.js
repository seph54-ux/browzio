// Website Data
const data = {
    "Design & Creativity": [
        { name: "Spline", url: "https://spline.design", desc: "3D design" },
        { name: "Blobs.app", url: "https://blobs.app", desc: "Blob shapes design" },
        { name: "SVGator", url: "https://svgator.com", desc: "Animate icons" },
        { name: "UI Gradients", url: "https://uigradients.com", desc: "Gradient backgrounds" },
        { name: "Lovely Charts", url: "https://lovelycharts.com", desc: "Flowcharts & diagrams" },
        { name: "Iconfinder", url: "https://iconfinder.com", desc: "Find icons" },
        { name: "Sketch Demo", url: "https://sketch.demometalab.com", desc: "Animate drawings" },
        { name: "Visme", url: "https://visme.co", desc: "Infographics & presentations" },
        { name: "Studio Polotno", url: "https://studio.polotno.com", desc: "Similar to Canva" },
        { name: "The Noun Project", url: "https://thenounproject.com", desc: "Useful icons" },
        { name: "Undraw", url: "https://undraw.co", desc: "Free formal icons" },
        { name: "Unbound AI", url: "https://unbound.ai", desc: "Logo generator AI" },
        { name: "Pixcap", url: "https://pixcap.com", desc: "3D design" },
        { name: "Call to Inspiration", url: "https://calltoinspiration.com", desc: "Inspiration designs web" },
        { name: "Recraft", url: "https://recraft.ai", desc: "AI vector generator" },
        { name: "Jitter Video", url: "https://jitter.video", desc: "Graphics animation" },
        { name: "Typeface Animator", url: "https://typefaceanimator.com", desc: "Animating branding designs" },
        { name: "AutoDraw", url: "https://autodraw.com", desc: "Autodraw things" },
        { name: "Lexica", url: "https://lexica.art", desc: "AI Image generated library" },
        { name: "Blockade Labs", url: "https://skybox.blockadelabs.com", desc: "3D background" },
        { name: "Production Crate", url: "https://productioncrate.com", desc: "High quality animated assets" },
        { name: "Looka AI", url: "https://looka.com", desc: "Creates a brand kit for you" },
        { name: "Freefaces Gallery", url: "https://freefaces.gallery", desc: "Finding attractive typefaces" },
        { name: "Iconer App", url: "https://iconer.app", desc: "CSS icons" }
    ],
    "Writing & Paraphrasing": [
        { name: "Quillbot", url: "https://quillbot.com", desc: "Paraphrasing tool" },
        { name: "PrePost SEO", url: "https://prepostseo.com", desc: "Paraphrasing & SEO tools" },
        { name: "Word Spinner", url: "https://word-spinner.com", desc: "Alternative to Quillbot" },
        { name: "Grammarly", url: "https://grammarly.com", desc: "Proofreading" },
        { name: "Genei", url: "https://genei.io", desc: "Article and essay needs" },
        { name: "Copy.ai", url: "https://copy.ai", desc: "Generates captions" },
        { name: "Jenni AI", url: "https://jenni.ai", desc: "AI generated writing tool" },
        { name: "Wordtune", url: "https://wordtune.com", desc: "AI writing tool" },
        { name: "Writely AI", url: "https://writely.ai", desc: "Creates story writing" },
        { name: "Cohesive", url: "https://cohesive.so", desc: "Content writing AI" },
        { name: "Writeless AI", url: "https://writeless.ai", desc: "Write anything" },
        { name: "TextFX", url: "https://textfx.withgoogle.com", desc: "AI content generator" },
        { name: "Aithor", url: "https://aithor.com", desc: "Undetectable AI writer" },
        { name: "Storybird AI", url: "https://storybird.ai", desc: "Create story books using AI" },
        { name: "EditGPT", url: "https://editgpt.app", desc: "Proofread your research" },
        { name: "Cowriter AI", url: "https://cowriter.ai", desc: "Cowrite your research with AI" },
        { name: "Unriddle AI", url: "https://unriddle.ai", desc: "AI research writing assistant" }
    ],
    "Research & Study": [
        { name: "Wolfram Alpha", url: "https://wolframalpha.com", desc: "Math equations calculator" },
        { name: "Scite.ai", url: "https://scite.ai", desc: "Critical analysis and research" },
        { name: "CORE", url: "https://core.ac.uk", desc: "Research articles" },
        { name: "Citationsy", url: "https://citationsy.com", desc: "Referencing tool" },
        { name: "Derivative Calculator", url: "https://derivative-calculator.net", desc: "Calculus calculator" },
        { name: "Integral Calculator", url: "https://integral-calculator.net", desc: "Integral calculator" },
        { name: "Sci-Hub", url: "https://sci-hub.se", desc: "Research purposes (DOI link needed)" },
        { name: "Consensus", url: "https://consensus.app", desc: "Research citing AI" },
        { name: "Elicit", url: "https://elicit.org", desc: "AI research citation" },
        { name: "Semantic Scholar", url: "https://semanticscholar.org", desc: "Research/studies website" },
        { name: "GPTZero", url: "https://gptzero.me", desc: "AI detector" },
        { name: "Research Rabbit", url: "https://researchrabbit.ai", desc: "RRL on steroids" },
        { name: "Metaphor", url: "https://metaphor.systems", desc: "AI search engine" },
        { name: "You.com", url: "https://you.com", desc: "AI search engine" },
        { name: "Chatbase", url: "https://chatbase.co", desc: "Skimming documents" },
        { name: "Mapdeduce", url: "https://mapdeduce.com", desc: "Summarize PDF files" },
        { name: "Mindgrasp", url: "https://mindgrasp.ai", desc: "Summarize PDF files" },
        { name: "LightPDF", url: "https://lightpdf.com", desc: "PDF GPT" },
        { name: "Julius AI", url: "https://julius.ai", desc: "For data analytics" },
        { name: "Explorer Globe", url: "https://explorer.globe.engineer", desc: "AI for visual learner" }
    ],
    "Movies & Entertainment": [
        { name: "SFlix", url: "https://sflix.to", desc: "Movie site" },
        { name: "HDToday", url: "https://hdtoday.tv", desc: "Movie site" },
        { name: "Goojara", url: "https://goojara.to", desc: "Movie site" },
        { name: "1HD", url: "https://1hd.to", desc: "Movie site" },
        { name: "GeekTyper", url: "https://geektyper.com", desc: "Fake hacking" },
        { name: "Green Screen Memes", url: "https://greenscreenmemes.com", desc: "Meme reference site" },
        { name: "Fake Detail", url: "https://fakedetail.com", desc: "Fake screenshot messages" }
    ],
    "Video & Audio": [
        { name: "Synthesia", url: "https://synthesia.io", desc: "Generate AI videos" },
        { name: "VO Codes", url: "https://vo.codes", desc: "Voiceover of characters/persons" },
        { name: "Panzoid", url: "https://panzoid.com", desc: "Video intros" },
        { name: "Kapwing", url: "https://kapwing.com", desc: "Video editing tools" },
        { name: "Lumen5", url: "https://lumen5.com", desc: "Creates video based on text" },
        { name: "Vidmix", url: "https://vidmix.app", desc: "Online video editor" },
        { name: "InVideo", url: "https://invideo.io", desc: "Idea to video" },
        { name: "Kaiber AI", url: "https://kaiber.ai", desc: "Ideas to visual art" },
        { name: "Vidnoz", url: "https://vidnoz.com", desc: "AI text-to-video" },
        { name: "Domo AI", url: "https://domoai.app", desc: "Convert video into anime style" },
        { name: "Typeframes", url: "https://typeframes.com", desc: "AI video editor" },
        { name: "Boolv", url: "https://boolv.tech", desc: "Create promotional videos using AI" },
        { name: "Genmo AI", url: "https://genmo.ai", desc: "AI video generator" },
        { name: "Plaiday", url: "https://plaiday.io", desc: "AI video generator, can add face" },
        { name: "Pika", url: "https://pika.art", desc: "The best free AI video generator" },
        { name: "FlowFrames", url: "https://flowframes.com", desc: "Converts 30fps video to 60fps" },
        { name: "Video to Blog", url: "https://videotoblog.ai", desc: "Creates blog from YouTube URL" },
        { name: "Suno AI", url: "https://suno.ai", desc: "AI song generator" },
        { name: "Riffusion", url: "https://riffusion.com", desc: "Create song using your lyrics" },
        { name: "Murf AI", url: "https://murf.ai", desc: "Text-to-speech using AI" },
        { name: "Mixkit", url: "https://mixkit.co", desc: "Stock video clips/effects/music" },
        { name: "Topaz Labs", url: "https://topazlabs.com", desc: "Convert videos into high res" },
        { name: "SSSstik", url: "https://ssstik.io/en", desc: "Remove watermark for TikTok videos" }
    ],
    "AI Image Generation": [
        { name: "Img Creator AI", url: "https://imgcreator.ai", desc: "AI image generating" },
        { name: "Stockimg AI", url: "https://stockimg.ai", desc: "Generate image" },
        { name: "Background.lol", url: "https://background.lol", desc: "Creates background images from prompt" },
        { name: "Freeimage AI", url: "https://freeimage.ai", desc: "Generate images" },
        { name: "Playground AI", url: "https://playground.ai", desc: "AI generated image" },
        { name: "Scribble Diffusion", url: "https://scribblediffusion.com", desc: "Turns scratch drawings into images" },
        { name: "Craiyon", url: "https://craiyon.com", desc: "AI image generator" },
        { name: "Decohere AI", url: "https://decohere.ai", desc: "Real time image generator" },
        { name: "Lensgo AI", url: "https://lensgo.ai", desc: "AI powered tool for image creation" },
        { name: "Krea AI", url: "https://krea.ai", desc: "Real time image generator w/ side-by-side canvas" },
        { name: "Claid AI", url: "https://claid.ai", desc: "Create product images" },
        { name: "ProductScope AI", url: "https://app.productscope.ai", desc: "Create professional product images" },
        { name: "Replicate", url: "https://replicate.com", desc: "Create sticker like images from an image" }
    ],
    "Image Editing": [
        { name: "Magic Eraser", url: "https://magiceraser.io", desc: "Remove unwanted images in picture" },
        { name: "Cutout Pro", url: "https://cutout.pro", desc: "AI for video/photo editing" },
        { name: "Cleanup Picture", url: "https://cleanup.picture", desc: "Remove an image in your picture" },
        { name: "Clipdrop", url: "https://clipdrop.co", desc: "Image editor" },
        { name: "Convert Image", url: "https://convertimg.com", desc: "Convert images into any file type" }
    ],
    "Free Media": [
        { name: "Pixabay", url: "https://pixabay.com", desc: "Free images" },
        { name: "Pexels", url: "https://pexels.com", desc: "Free images" },
        { name: "Unsplash", url: "https://unsplash.com", desc: "Free images" },
        { name: "Dronestock", url: "https://dronestock.com", desc: "Drone footages" }
    ],
    "Website Building": [
        { name: "Webflow", url: "https://webflow.com", desc: "Website builder" },
        { name: "Typedream", url: "https://typedream.com", desc: "Website builder" },
        { name: "Zyro", url: "https://zyro.com", desc: "Website builder" },
        { name: "Carrd", url: "https://carrd.co", desc: "Creating websites w/o coding" },
        { name: "Dorik", url: "https://dorik.com", desc: "Website builder" },
        { name: "Momen", url: "https://momen.app", desc: "Webapp builder" },
        { name: "UIzard", url: "https://uizard.io", desc: "AI assisted site for UI design" },
        { name: "UIverse", url: "https://uiverse.io", desc: "Website guide/codes" },
        { name: "Animista", url: "https://animista.net", desc: "Animation for website" },
        { name: "QuickRef", url: "https://quickref.me", desc: "Quick reference for programming" },
        { name: "Involve.me AI", url: "https://involve.me/ai", desc: "Creates survey forms for your website" }
    ],
    "Productivity Tools": [
        { name: "TinyWow", url: "https://tinywow.com", desc: "Different useful tools" },
        { name: "Beautiful AI", url: "https://beautiful.ai", desc: "Creates instant presentation" },
        { name: "PDF Escape", url: "https://pdfescape.com", desc: "Online PDF editor" },
        { name: "Excel Formula Bot", url: "https://formulabot.com", desc: "Creates excel formula for you" },
        { name: "WeTransfer", url: "https://wetransfer.com", desc: "Send files, up to 2GB free" },
        { name: "12ft Ladder", url: "https://12ft.io", desc: "Access sites w/ paywall" },
        { name: "Temporary Mail", url: "https://temp-mail.org", desc: "Creates instant temp mail" },
        { name: "Namelix", url: "https://namelix.com", desc: "Brand/business name generator" },
        { name: "Uneedbest", url: "https://uneedbest.com", desc: "For finding great websites" },
        { name: "Google Toolbox", url: "https://toolbox.googleapps.com", desc: "Google admin toolbox" },
        { name: "Namecheap AI", url: "https://namecheap.com/logo-maker", desc: "Logo maker" },
        { name: "Pitch", url: "https://pitch.com", desc: "PPT presentation" },
        { name: "Simplified", url: "https://simplified.com", desc: "AI site for digital marketing" },
        { name: "Tonkean", url: "https://tonkean.com", desc: "Automate workflow" },
        { name: "Beeyond AI", url: "https://beeyondai.com", desc: "Access different AI powered tools" },
        { name: "LetsView", url: "https://letsview.com", desc: "AI chatbot" },
        { name: "PopAI", url: "https://popai.pro", desc: "Chatbot, ChatPDF, PPT maker etc." },
        { name: "MyShell AI", url: "https://myshell.ai", desc: "Free access to GPT-4" },
        { name: "Cactus AI", url: "https://cactus.ai", desc: "Chrome extension for summarizing site content" }
    ],
    "Development Tools": [
        { name: "Codium AI", url: "https://codium.ai", desc: "Code analysis AI" },
        { name: "Code with Curious", url: "https://codewithcurious.com", desc: "Coding projects with source codes" },
        { name: "Dimension", url: "https://dimension.dev", desc: "New platform for devs" },
        { name: "DevLuxury", url: "https://devluxury.com", desc: "Download paid softwares for free" }
    ],
    "AI Discovery": [
        { name: "Get Inference AI Radar", url: "https://www.aiwizard.ai/", desc: "AI tools list" },
        { name: "Digital Samaritan", url: "https://digitalsamaritan.co", desc: "Mother of all powerful websites" }
    ]
};

// Generate category buttons
const categoryButtonsContainer = document.getElementById("categoryButtons");
const categoriesContainer = document.getElementById("categoriesContainer");

// Create "All Tools" button first
let allToolsBtn = document.createElement("button");
allToolsBtn.textContent = "All Tools";
allToolsBtn.onclick = () => showCategory("All Tools", allToolsBtn);
allToolsBtn.classList.add("active"); // Make it active by default
categoryButtonsContainer.appendChild(allToolsBtn);

// Create "All Tools" category div
let allToolsDiv = document.createElement("div");
allToolsDiv.className = "category active"; // Make it active by default
allToolsDiv.dataset.category = "All Tools";
let allToolsH2 = document.createElement("h2");
allToolsH2.textContent = "All Tools";
allToolsDiv.appendChild(allToolsH2);

let allToolsUl = document.createElement("ul");
// Add all websites from all categories
Object.keys(data).forEach(category => {
    data[category].forEach(site => {
        let li = document.createElement("li");
        li.innerHTML = `<a href="${site.url}" target="_blank">${site.name}</a><span>${site.desc} - ${category}</span>`;
        allToolsUl.appendChild(li);
    });
});
allToolsDiv.appendChild(allToolsUl);
categoriesContainer.appendChild(allToolsDiv);

// Generate other category buttons
Object.keys(data).forEach((category, index) => {
    let btn = document.createElement("button");
    btn.textContent = category;
    btn.onclick = () => showCategory(category, btn);
    categoryButtonsContainer.appendChild(btn);

    let div = document.createElement("div");
    div.className = "category";
    div.dataset.category = category;
    let h2 = document.createElement("h2");
    h2.textContent = category;
    div.appendChild(h2);

    let ul = document.createElement("ul");
    data[category].forEach(site => {
        let li = document.createElement("li");
        li.innerHTML = `<a href="${site.url}" target="_blank">${site.name}</a><span>${site.desc}</span>`;
        ul.appendChild(li);
    });

    div.appendChild(ul);
    categoriesContainer.appendChild(div);
});

function showCategory(category, btn) {
    document.querySelectorAll(".category").forEach(cat => {
        cat.classList.toggle("active", cat.dataset.category === category);
    });
    document.querySelectorAll(".category-buttons button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
}

// Search functionality
document.getElementById("searchBox").addEventListener("input", function(){
    let query = this.value.toLowerCase();
    document.querySelectorAll(".category ul li").forEach(li => {
        let text = li.textContent.toLowerCase();
        li.style.display = text.includes(query) ? "" : "none";
    });
});

// Dark Mode Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference or default to light mode
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.toggle('dark-mode', savedTheme === 'dark');
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('dark-mode');
}

// Theme toggle event listener
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Save theme preference
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    // Add a subtle animation to the toggle
    themeToggle.style.transform = 'scale(0.9)';
    setTimeout(() => {
        themeToggle.style.transform = '';
    }, 150);
});

// Listen for system theme changes
if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            body.classList.toggle('dark-mode', e.matches);
        }
    });
}

// Scroll to Top Functionality
const scrollToTopBtn = document.getElementById('scrollToTop');

// Show/hide scroll to top button based on scroll position
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const viewportHeight = window.innerHeight;
    
    if (scrollTop > viewportHeight) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

// Smooth scroll to top when button is clicked
scrollToTopBtn.addEventListener('click', () => {
    // Add a little bounce effect to the button
    scrollToTopBtn.style.transform = 'translateY(-2px) scale(0.95)';
    setTimeout(() => {
        scrollToTopBtn.style.transform = '';
    }, 150);
    
    // Smooth scroll to top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add CSS smooth scrolling support for older browsers
document.documentElement.style.scrollBehavior = 'smooth';

// Ko-fi Modal Functionality
const kofiLink = document.getElementById('kofiLink');

kofiLink.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Create modal overlay
    const modalOverlay = document.createElement('div');
    modalOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(5px);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    `;
    
    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 25px;
        padding: 20px;
        max-width: 90vw;
        max-height: 90vh;
        overflow: hidden;
        box-shadow: 
            20px 20px 60px rgba(0, 0, 0, 0.1),
            -20px -20px 60px rgba(255, 255, 255, 0.8);
        position: relative;
        animation: modalSlideIn 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    `;
    
    // Apply dark mode styles if active
    if (document.body.classList.contains('dark-mode')) {
        modalContent.style.background = 'rgba(30, 41, 59, 0.95)';
        modalContent.style.border = '1px solid rgba(148, 163, 184, 0.2)';
        modalContent.style.boxShadow = `
            20px 20px 60px rgba(0, 0, 0, 0.3),
            -20px -20px 60px rgba(51, 65, 85, 0.1)
        `;
    }
    
    // Create close button
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '×';
    closeBtn.style.cssText = `
        position: absolute;
        top: 15px;
        right: 20px;
        background: none;
        border: none;
        font-size: 30px;
        color: #667eea;
        cursor: pointer;
        font-weight: bold;
        transition: all 0.3s ease;
        z-index: 10001;
    `;
    
    if (document.body.classList.contains('dark-mode')) {
        closeBtn.style.color = '#60a5fa';
    }
    
    closeBtn.addEventListener('mouseenter', () => {
        closeBtn.style.transform = 'scale(1.2)';
        closeBtn.style.color = '#FF5F5F';
    });
    
    closeBtn.addEventListener('mouseleave', () => {
        closeBtn.style.transform = 'scale(1)';
        closeBtn.style.color = document.body.classList.contains('dark-mode') ? '#60a5fa' : '#667eea';
    });
    
    // Create iframe
    const iframe = document.createElement('iframe');
    iframe.id = 'kofiframe';
    iframe.src = 'https://ko-fi.com/philjosephorlina/?hidefeed=true&widget=true&embed=true&preview=true';
    iframe.style.cssText = `
        border: none;
        width: 100%;
        height: 712px;
        background: #f9f9f9;
        border-radius: 15px;
    `;
    iframe.title = 'philjosephorlina';
    
    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes modalSlideIn {
            from { 
                opacity: 0;
                transform: translateY(-30px) scale(0.9);
            }
            to { 
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
    `;
    document.head.appendChild(style);
    
    // Close modal function
    const closeModal = () => {
        modalOverlay.style.animation = 'fadeIn 0.3s ease reverse';
        modalContent.style.animation = 'modalSlideIn 0.3s ease reverse';
        setTimeout(() => {
            document.body.removeChild(modalOverlay);
            document.head.removeChild(style);
        }, 300);
    };
    
    // Event listeners
    closeBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });
    
    // Escape key to close
    document.addEventListener('keydown', function escapeHandler(e) {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', escapeHandler);
        }
    });
    
    // Assemble modal
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(iframe);
    modalOverlay.appendChild(modalContent);
    document.body.appendChild(modalOverlay);
});
