// Future Skills — Ages 9-10 (Upper Explorers)
// Guide: Byte the Fox 🦊
// 20 lessons · Version 1.0 · April 2026

export const futureSkillsUpperExplorers = [
  {
    id: "fs-9-10-01",
    subject: "Future Skills",
    ageGroup: "9-10",
    band: "Upper Explorers",
    guide: "Byte",
    guideAnimal: "Fox",
    lessonNumber: 1,
    title: "How AI Really Works: Machine Learning Explained",
    duration: "15–20 min",
    hook: "When you ask a chatbot a question and get a surprisingly coherent answer, when a photo app recognizes your friend's face, when Netflix predicts what you'll enjoy — these aren't science fiction anymore. They're the result of a specific technique called machine learning. And understanding how it actually works — not just that it's 'AI' — is one of the most important things you can know about the world you're growing up in.",
    bigIdea: "Machine learning is how computers learn from data rather than explicit programming. Understanding its actual mechanisms — training, features, parameters, overfitting — reveals both its extraordinary power and its fundamental limitations.",
    sections: [
      {
        title: "Rule-Based vs Learning-Based Systems",
        emoji: "🔄",
        content: "Traditional programming: a human writes explicit rules that tell the computer exactly what to do in every situation. If the temperature is below 32°F AND there is precipitation, display 'snow warning.' Machine learning: instead of writing rules, you give the computer thousands of examples (data) and let it discover the rules itself. You show it 10,000 photos labeled 'cat' and 10,000 labeled 'not cat' — it figures out which patterns distinguish them. ML works where rule-writing is impossible (how would you write rules for recognizing all faces in all lighting?) or impractical (doctors can recognize disease patterns without being able to articulate the exact rules they use)."
      },
      {
        title: "How Training Actually Works",
        emoji: "🏋️",
        content: "Training a machine learning model: (1) Start with a dataset of examples with correct labels. (2) Initialize the model with random parameters (weights). (3) Feed examples through the model and compare prediction to the correct answer. (4) Calculate the error. (5) Use gradient descent to adjust parameters in the direction that reduces error. (6) Repeat millions of times across the training data. After training, the model has found parameters that produce correct outputs — and hopefully generalizes to new examples it hasn't seen. The more data and compute used, the better the model typically performs, up to a point."
      },
      {
        title: "Neural Networks and Deep Learning",
        emoji: "🧠",
        content: "Deep learning uses neural networks — computational structures loosely inspired by the brain. A neural network has layers of nodes. Input layer receives data. Hidden layers (many in 'deep' networks) transform the representation through learned operations. Output layer produces the prediction. With enough layers, data, and compute, neural networks learn extremely complex patterns. GPT-4, Claude, Gemini, and other large language models are deep neural networks trained on vast text — they've learned statistical patterns of language at enormous scale, producing outputs that seem remarkably human but don't involve understanding in the way humans understand."
      },
      {
        title: "Limitations: What ML Cannot Do",
        emoji: "⚠️",
        content: "ML systems don't 'understand' — they find statistical patterns. A language model doesn't know what words mean — it knows which words tend to follow which other words. ML requires massive data — it fails on rare situations not well represented in training. Distribution shift: a model trained in one context may fail badly in a different context. Adversarial vulnerability: tiny changes to inputs can cause catastrophic failure. No causal reasoning: ML finds correlations, not causes — it cannot reliably reason about counterfactuals. These aren't engineering bugs — they're fundamental characteristics of how ML works, and understanding them is essential for using AI responsibly."
      }
    ],
    activity: {
      title: "ML Training Simulation",
      instructions: "Play this training simulation: You are a neural network learning to classify shapes. Round 1 — training: look at 10 circles and 10 squares (draw simple ones). Write 3 rules you've 'learned.' Round 2 — testing: draw 5 new shapes and apply your rules. Do they work? Round 3 — edge cases: draw a circle that's almost a square (very low aspect ratio). Does your rule fail? Design more robust rules. How many examples would make them reliable? What does this tell you about why ML needs millions of training examples?"
    },
    quiz: [
      {
        question: "What is the key difference between traditional programming and machine learning?",
        answer: "Traditional programming requires humans to write explicit rules; ML discovers rules itself from examples — enabling tasks where rules are impossible to write explicitly",
        options: ["Traditional programming is faster; ML is more accurate", "Traditional programming requires humans to write explicit rules; ML discovers rules itself from examples — enabling tasks where rules are impossible to write explicitly", "Traditional programming runs on older hardware; ML requires specialized AI processors", "Traditional programming solves logical problems; ML solves creative problems"]
      },
      {
        question: "What is gradient descent and why is it important?",
        answer: "An algorithm that adjusts model parameters in the direction that reduces prediction error — the fundamental mechanism by which neural networks learn from data",
        options: ["A technique for organizing training data efficiently", "An algorithm that adjusts model parameters in the direction that reduces prediction error — the fundamental mechanism by which neural networks learn from data", "A measure of how much model accuracy improves each iteration", "A method for generating new training examples when data is scarce"]
      },
      {
        question: "What is 'overfitting' in machine learning?",
        answer: "When a model learns training data too specifically — performing well on training examples but failing on new data because it memorized patterns rather than learning generalizable rules",
        options: ["When a model is trained on too many examples, slowing it down", "When a model learns training data too specifically — performing well on training examples but failing on new data because it memorized patterns rather than learning generalizable rules", "When multiple models are trained on the same data, creating conflicts", "When a model's complexity exceeds available hardware"]
      },
      {
        question: "What does a large language model like GPT-4 actually 'know'?",
        answer: "Statistical patterns of which words and phrases tend to follow each other in text — not understanding or meaning in the human sense",
        options: ["Encyclopedic facts and logical reasoning comparable to a well-educated person", "Statistical patterns of which words and phrases tend to follow each other in text — not understanding or meaning in the human sense", "The entire internet verbatim, retrievable on request", "Rules of grammar and logic that generate coherent language independently"]
      },
      {
        question: "What is 'distribution shift' and why is it a fundamental ML limitation?",
        answer: "When the real-world context differs from training context, ML performance degrades — models learn patterns from specific data and may fail badly on unfamiliar situations even if superficially similar",
        options: ["When training data is unequally distributed across categories", "When the real-world context differs from training context, ML performance degrades — models learn patterns from specific data and may fail badly on unfamiliar situations even if superficially similar", "When model updates change how the system processes old inputs", "When multiple ML models are deployed simultaneously, creating conflicts"]
      }
    ],
    familyAdventure: "Test an AI system's limitations together. Pick a chatbot (Claude, ChatGPT, or Gemini — all have free tiers). Probe its limits: ask about a very recent event (after its training cutoff), ask it to count letters in a word, ask it to do arithmetic with very large numbers, ask something requiring physical perception, ask something requiring causal reasoning. Where does it fail and why? What do the failure patterns reveal about how it actually works?",
    badge: "ML Explorer",
    nextLesson: "fs-9-10-02"
  },
  {
    id: "fs-9-10-02",
    subject: "Future Skills",
    ageGroup: "9-10",
    band: "Upper Explorers",
    guide: "Byte",
    guideAnimal: "Fox",
    lessonNumber: 2,
    title: "Training Data and Bias in AI",
    duration: "15–20 min",
    hook: "In 2015, Google Photos tagged photos of Black people as 'gorillas.' In 2018, Amazon scrapped an AI hiring tool that had learned to discriminate against women because it was trained on historically male-dominated hiring data. In 2019, a healthcare algorithm directed less care to Black patients than equally sick white patients because it used historical cost data reflecting decades of unequal access. These are not fringe bugs — they reveal something fundamental about how AI works and fails.",
    bigIdea: "AI systems are only as good as the data they're trained on. Biases in training data become biases in AI outputs — often amplifying existing social inequalities. Understanding this is essential for building AI responsibly and evaluating AI systems critically.",
    sections: [
      {
        title: "Where Training Data Comes From",
        emoji: "📊",
        content: "Machine learning requires enormous datasets — often collected from existing human-generated sources: the internet (with all its biases and errors), historical records (reflecting past decisions), sensor data (reflecting where sensors were deployed), and user behavior (reflecting who had access to technology). The problem: historical data reflects historical inequalities. An AI trained to predict loan default from historical data learns which groups historically defaulted more — without 'knowing' that those groups were historically denied fair lending. It learns the outcome of a biased system and continues applying that bias at scale."
      },
      {
        title: "Types of Bias in AI",
        emoji: "🔍",
        content: "Historical bias: training data reflects past discrimination — a 'neutral' algorithm perpetuates it. Representation bias: some groups are underrepresented — the model performs worse for them. Measurement bias: the metric used as a proxy is flawed — using arrest rates as a proxy for crime rates embeds policing biases. Aggregation bias: treating diverse groups as homogeneous — a medical AI trained mostly on men may perform worse for women. Label bias: human labelers bringing their own biases to the labeling process. Feedback loop: biased AI makes decisions that create training data for the next AI — amplifying initial biases over time."
      },
      {
        title: "Technical Fairness: More Complex Than It Seems",
        emoji: "⚖️",
        content: "Researchers have identified multiple mathematical definitions of 'fairness' that often cannot all be satisfied simultaneously. Demographic parity: equal positive outcome rates across groups. Equal opportunity: equal true positive rates across groups. Calibration: when the model says 70% probability, 70% of that group actually has the outcome. ProPublica's 2016 COMPAS analysis showed the algorithm had higher false positive rates for Black defendants; Northpointe's response: the calibration was equal. Both were mathematically correct — they measured different things. Fairness requires explicit value choices about which definition to prioritize."
      },
      {
        title: "Responsible AI Development",
        emoji: "🛠️",
        content: "Building AI responsibly requires: diverse teams who bring different perspectives — teams that reflect users are more likely to anticipate harm. Diverse training data representing the populations the system will serve. Auditing for disparate impact across demographic groups before deployment. Transparency about training data sources and limitations. Meaningful human oversight for high-stakes decisions (hiring, lending, healthcare, criminal justice). Ongoing monitoring after deployment. Accessible appeals processes. These aren't just ethical ideals — they're increasingly legally required in the EU and other jurisdictions."
      }
    ],
    activity: {
      title: "Bias Audit",
      instructions: "Conduct a bias audit of an AI system you use. Choose a face recognition app, image generation tool, or music recommendation system. Design your audit: what potential biases might this system have? How would you test for them? Run your tests: do outputs differ systematically by apparent race, gender, age, or culture? Document findings with specific examples. Write a 1-page bias audit report: what biases did you find? What training data choices likely caused them? What would you recommend to developers? What should users know about these limitations?"
    },
    quiz: [
      {
        question: "What is historical bias in AI training data?",
        answer: "When training data reflects past discrimination or inequality, a 'neutral' algorithm learns and perpetuates those patterns — it learns the outcome of a biased system, not a fair baseline",
        options: ["When training data becomes outdated and no longer reflects current patterns", "When training data reflects past discrimination or inequality, a 'neutral' algorithm learns and perpetuates those patterns — it learns the outcome of a biased system, not a fair baseline", "When historical data is inaccurate due to poor pre-digital record-keeping", "When algorithms are trained on data from different time periods causing inconsistency"]
      },
      {
        question: "What is a 'feedback loop' in AI bias?",
        answer: "When a biased AI makes decisions that generate the training data for the next AI — initial biases are amplified over time as the system's outputs become its own inputs",
        options: ["When AI systems learn from user feedback, reflecting user biases", "When a biased AI makes decisions that generate the training data for the next AI — initial biases are amplified over time as the system's outputs become its own inputs", "When AI recommendations cause users to seek similar content", "When AI systems fail and require human correction to improve"]
      },
      {
        question: "Why can multiple mathematical definitions of 'fairness' not always be satisfied simultaneously?",
        answer: "They measure different things — equal outcome rates, equal error rates, and calibration can mathematically conflict; which to prioritize requires explicit value choices, not technical optimization",
        options: ["Computational limitations prevent applying multiple fairness constraints in real-time systems", "They measure different things — equal outcome rates, equal error rates, and calibration can mathematically conflict; which to prioritize requires explicit value choices, not technical optimization", "The different definitions were developed by competing researchers who refused to collaborate", "Mathematical fairness only applies to simple binary outcomes, not complex decisions"]
      },
      {
        question: "Why is team diversity specifically important for reducing AI bias?",
        answer: "Teams that reflect user populations are more likely to anticipate potential harms, notice problematic patterns in data, and frame problems in ways that include rather than exclude affected groups",
        options: ["Diverse teams work faster, reducing development time that allows biases to accumulate", "Government regulations require diversity in AI development teams before deployment", "Teams that reflect user populations are more likely to anticipate potential harms, notice problematic patterns in data, and frame problems in ways that include rather than exclude affected groups", "Diverse teams produce more creative solutions independently of bias reduction"]
      },
      {
        question: "What happened with Amazon's AI hiring tool and what does it reveal?",
        answer: "The system learned to discriminate against women because it was trained on historically male-dominated hiring data — it learned which candidates historically got hired, not which would perform best",
        options: ["Women candidates avoided Amazon, reducing their representation in training data", "The system discriminated against women because male engineers programmed their biases in deliberately", "The system learned to discriminate against women because it was trained on historically male-dominated hiring data — it learned which candidates historically got hired, not which would perform best", "Amazon discovered the bias before deployment — it revealed the importance of pre-release testing"]
      }
    ],
    familyAdventure: "Research one high-profile AI bias case together — COMPAS recidivism algorithm, Amazon's hiring tool, healthcare algorithms, or facial recognition errors. Find: what did the AI do? What training data caused the bias? Who was harmed? What was the company's response? What changed? Discuss: who bears responsibility when AI causes harm — developers, deployers, or governments? What would you require if you were a regulator?",
    badge: "AI Ethics Analyst",
    nextLesson: "fs-9-10-03"
  },
  {
    id: "fs-9-10-03",
    subject: "Future Skills",
    ageGroup: "9-10",
    band: "Upper Explorers",
    guide: "Byte",
    guideAnimal: "Fox",
    lessonNumber: 3,
    title: "Coding in Python: Your First Programs",
    duration: "15–20 min",
    hook: "Python is the most popular programming language in the world for data science, AI, automation, and scientific research. It powers Instagram, YouTube, and Dropbox. It reads almost like English. And you can write your first working program in under an hour. Understanding coding isn't just about becoming a programmer — it's about understanding how the digital world actually works, and gaining the ability to build things rather than just consume them.",
    bigIdea: "Python is one of the world's most versatile and learnable programming languages. Understanding its core concepts — variables, data types, loops, functions, and libraries — provides the foundation for building real tools and understanding computational thinking.",
    sections: [
      {
        title: "Python Fundamentals: Variables and Data Types",
        emoji: "📦",
        content: "A variable stores a value: name = 'Alex' (string — text), age = 10 (integer — whole number), height = 1.52 (float — decimal), is_student = True (boolean — True/False). Python infers the type — you don't declare it. Operations: numbers support +, -, *, /, ** (power), // (floor division), % (remainder). Strings: 'Hello ' + name gives 'Hello Alex'. f-strings: f'Hello, {name}! You are {age} years old.' Lists store multiple values: scores = [95, 87, 92, 78]. Dictionaries store key-value pairs: student = {'name': 'Alex', 'age': 10}. These data types handle the vast majority of real programming tasks."
      },
      {
        title: "Control Flow: Loops and Conditionals",
        emoji: "🔄",
        content: "if/elif/else: if temperature > 30: print('Hot') elif temperature > 20: print('Warm') else: print('Cool'). for loops iterate over sequences: for score in scores: print(score). for i in range(10): print(i). while loops continue until a condition is false: while user_input != 'quit': user_input = input('Enter: '). break exits a loop early. continue skips to the next iteration. These constructs let your program make decisions and repeat operations — the foundation of any interesting behavior. Combining conditionals and loops allows you to process lists of data, validate input, and control program flow."
      },
      {
        title: "Functions and Modules",
        emoji: "🔧",
        content: "Functions encapsulate reusable code: def greet(name): return f'Hello, {name}!' result = greet('Alex'). Functions take parameters (inputs) and return values (outputs). Good functions do one thing well and are named clearly. Modules are files containing related functions — import them: import math (math.sqrt, math.pi), import random (random.randint, random.choice), import datetime (datetime.now). Python's standard library has modules for almost everything. Third-party libraries extend further: import numpy, import pandas, import requests. This is why Python's ecosystem is so powerful — you rarely build from scratch."
      },
      {
        title: "Real Python Projects for Beginners",
        emoji: "🚀",
        content: "What can you build with basic Python? A quiz game (stores questions in a list, loops through them, tracks score), a simple calculator (takes input, performs operations), a password generator (uses random to create secure strings), a number guessing game (uses random and while loops), a word frequency counter (reads text, creates dictionary of word counts), a simple web scraper (with requests library), a data analyzer (with pandas, reads a CSV). These are real portfolio projects demonstrating genuine competence. The distance between 'first Python program' and 'useful tools' is shorter than most people expect."
      }
    ],
    activity: {
      title: "Build Your First Python Program",
      instructions: "Install Python (python.org) or use replit.com (free online). Build a number guessing game step by step: (1) import random, (2) generate a secret number 1-100, (3) ask the user to guess, (4) tell them if too high, too low, or correct, (5) loop until they get it right, (6) count how many guesses it took. Then extend it: add difficulty settings, a high score tracker, and input validation for non-numeric input. Share your code and explain how each part works."
    },
    quiz: [
      {
        question: "What is a variable in Python?",
        answer: "A named storage location that holds a value — string, integer, float, boolean, list, dictionary, or other data type",
        options: ["A mathematical unknown that Python solves during execution", "A named storage location that holds a value — string, integer, float, boolean, list, dictionary, or other data type", "A type of function that changes output based on external conditions", "A placeholder replaced with user input when the program runs"]
      },
      {
        question: "What is the difference between a for loop and a while loop?",
        answer: "A for loop iterates over a sequence a specific number of times; a while loop continues until a condition becomes false — used when the number of iterations is unknown",
        options: ["For loops are faster; while loops are more flexible", "A for loop iterates over a sequence a specific number of times; a while loop continues until a condition becomes false — used when the number of iterations is unknown", "For loops work with numbers; while loops work with text", "For loops run the body before checking the condition; while loops check before running"]
      },
      {
        question: "What is a Python function and why are they useful?",
        answer: "A named, reusable block of code that takes inputs (parameters) and returns outputs — avoiding repetition, improving readability, and enabling modular code",
        options: ["A mathematical operation built into Python's core that cannot be modified", "A named, reusable block of code that takes inputs (parameters) and returns outputs — avoiding repetition, improving readability, and enabling modular code", "A connection to external services for databases and APIs", "A variable that stores a sequence of operations for later execution"]
      },
      {
        question: "What is a Python library/module and why does Python's ecosystem matter?",
        answer: "Collections of pre-written code providing specific functionality — Python's extensive ecosystem means most common tasks have existing solutions, enabling rapid development without building from scratch",
        options: ["Python's built-in functions that come with the language", "Collections of pre-written code providing specific functionality — Python's extensive ecosystem means most common tasks have existing solutions, enabling rapid development without building from scratch", "Documentation files explaining how Python code works", "Security tools protecting Python programs from external attacks"]
      },
      {
        question: "What real-world tools can basic Python skills produce?",
        answer: "Quiz games, calculators, password generators, data analyzers, web scrapers — functional tools demonstrating real programming competence usable as portfolio projects",
        options: ["Only simple mathematical calculations — real tools require advanced knowledge", "Quiz games, calculators, password generators, data analyzers, web scrapers — functional tools demonstrating real programming competence usable as portfolio projects", "Games and entertainment only — professional tools require Java or C++", "Templates and designs only — Python's text nature limits it to non-visual applications"]
      }
    ],
    familyAdventure: "Spend 2 hours doing a family coding session at code.org or replit.com. Start from the beginning even if someone has experience — slower learners teach faster ones to explain. Build one small program together: a simple family quiz with multiple choice answers and score tracking. Share what you built. What parts felt logical? What was confusing? What would you need to know to build something more interesting?",
    badge: "Python Programmer",
    nextLesson: "fs-9-10-04"
  },
  {
    id: "fs-9-10-04",
    subject: "Future Skills",
    ageGroup: "9-10",
    band: "Upper Explorers",
    guide: "Byte",
    guideAnimal: "Fox",
    lessonNumber: 4,
    title: "Web Development Basics: How Websites Work",
    duration: "15–20 min",
    hook: "Every website you've ever visited — from Google to YouTube to a small school project — is built from the same three foundational technologies: HTML (the structure), CSS (the style), and JavaScript (the behavior). Understanding these doesn't just teach you to build websites — it teaches you how the internet actually works, and gives you the ability to create your own presence rather than just consuming others'.",
    bigIdea: "The web is built on HTML (structure), CSS (style), and JavaScript (behavior). Understanding how browsers render these technologies, how servers deliver them, and how modern web apps work provides the conceptual foundation for building anything on the internet.",
    sections: [
      {
        title: "HTML: The Structure",
        emoji: "🏗️",
        content: "HTML (HyperText Markup Language) defines structure and content using tags. Basic structure: <!DOCTYPE html><html><head><title>Title</title></head><body>Content</body></html>. Key tags: headings (<h1> to <h6>), paragraphs (<p>), links (<a href='url'>text</a>), images (<img src='image.jpg' alt='description'>), lists (<ul>/<ol> with <li>), divs (<div>), semantic elements (<header>, <nav>, <main>, <footer>). HTML provides meaning — screen readers, search engines, and browsers all use the semantic meaning of tags to understand page content. Clean, semantic HTML is the foundation of accessible, searchable websites."
      },
      {
        title: "CSS: The Style",
        emoji: "🎨",
        content: "CSS (Cascading Style Sheets) controls visual presentation — colors, fonts, spacing, layout. Syntax: selector { property: value; }. Selectors target elements: h1 { color: purple; } targets all h1 headings. .class-name targets elements with a class. #id targets a specific element. The box model: every element has content, padding (space inside border), border, and margin (space outside). Flexbox and Grid are modern layout systems. Media queries: @media (max-width: 768px) { ... } allow different styles for different screen sizes — the foundation of responsive design. CSS frameworks like Tailwind provide pre-built utility classes that speed up styling dramatically."
      },
      {
        title: "JavaScript: The Behavior",
        emoji: "⚡",
        content: "JavaScript (JS) adds interactivity — responds to user actions, updates content without reloading, validates forms, communicates with servers. DOM manipulation: document.getElementById('myElement').textContent = 'New content!' — JS can read and change any HTML element. Event listeners: button.addEventListener('click', function() { alert('Clicked!') }). Fetch API: JavaScript can request data from servers — fetch('https://api.example.com/data') returns JSON that can dynamically update pages. Modern frameworks (React, Vue, Angular) build on these fundamentals to create complex interactive applications."
      },
      {
        title: "How the Web Actually Works",
        emoji: "🌐",
        content: "When you visit a website: (1) Browser sends HTTP request to server at the domain's IP address (found via DNS). (2) Server returns HTML plus CSS and JS links. (3) Browser parses HTML, building the DOM. (4) Browser fetches CSS (styles) and JavaScript files (behavior). (5) Browser renders the visual page. Modern web apps use APIs: the server returns only data (JSON), not full HTML — JavaScript in the browser handles rendering. This enables Gmail-like apps that feel native despite running in a browser."
      }
    ],
    activity: {
      title: "Build a Web Page",
      instructions: "Build a personal 'about me' page from scratch. Open a text editor (Notepad, TextEdit, or VS Code). Create index.html. Build a complete page: your name as <h1>, a bio paragraph, a list of 3 interests, a placeholder photo (picsum.photos), styled with CSS in a <style> tag in the <head> — custom colors, fonts, layout. Open in a browser. Then add JavaScript: a button that changes the background color when clicked. Screenshot your finished page. What would you need to learn to make it look professional?"
    },
    quiz: [
      {
        question: "What are the three fundamental technologies of the web?",
        answer: "HTML (defines structure and content), CSS (controls visual style and layout), JavaScript (adds interactivity and dynamic behavior)",
        options: ["HTTP, DNS, and SSL — the networking protocols that make the web work", "HTML (defines structure and content), CSS (controls visual style and layout), JavaScript (adds interactivity and dynamic behavior)", "Python, SQL, and Java — the server-side technologies powering websites", "Browsers, servers, and databases — the infrastructure components of the web"]
      },
      {
        question: "What is the CSS box model?",
        answer: "Every HTML element has content, padding (inner space), border, and margin (outer space) — understanding this model explains how spacing and layout work on webpages",
        options: ["A 3D rendering system creating depth and shadow on webpage elements", "Every HTML element has content, padding (inner space), border, and margin (outer space) — understanding this model explains how spacing and layout work on webpages", "A CSS framework providing pre-built responsive grid layouts", "The model describing how CSS cascades — which styles take precedence when multiple rules apply"]
      },
      {
        question: "What is DOM manipulation in JavaScript?",
        answer: "Reading and changing HTML elements on the page — allowing dynamic updates to content, style, and structure without reloading the entire page",
        options: ["Organizing JavaScript code into reusable modules", "Reading and changing HTML elements on the page — allowing dynamic updates to content, style, and structure without reloading the entire page", "A technique for safely handling user input to prevent security vulnerabilities", "Loading JavaScript files asynchronously so they don't block page rendering"]
      },
      {
        question: "What happens when you type a URL and press Enter?",
        answer: "Browser requests DNS lookup → finds server IP → sends HTTP request → server returns HTML/CSS/JS → browser parses DOM → renders page",
        options: ["The URL is transmitted directly to the website's owner who decides whether to allow the request", "Browser requests DNS lookup → finds server IP → sends HTTP request → server returns HTML/CSS/JS → browser parses DOM → renders page", "Your browser downloads the website directly from other recent visitors", "The URL decodes into coordinates locating the physical server, which transmits via satellite"]
      },
      {
        question: "What distinguishes a modern web app (like Gmail) from a traditional website?",
        answer: "Traditional sites return full HTML pages for each request; modern apps return only data (JSON) via APIs while JavaScript renders the interface — enabling app-like experiences in browsers",
        options: ["Traditional sites use older technologies; modern apps use React and Node.js", "Traditional sites return full HTML pages for each request; modern apps return only data (JSON) via APIs while JavaScript renders the interface — enabling app-like experiences in browsers", "Traditional sites run on servers; modern apps run entirely in the browser", "Traditional sites are built by teams; modern apps are built by individuals using automated tools"]
      }
    ],
    familyAdventure: "Use 'Inspect Element' (right-click any webpage → Inspect) to look at the HTML and CSS of a site you use regularly. Find: what HTML tags are used for navigation? Can you find the CSS property controlling the primary color? Try double-clicking an HTML element and changing the text — what happens? (Changes are only in your browser, not permanent.) Knowing this exists — how does it change how you see websites?",
    badge: "Web Developer",
    nextLesson: "fs-9-10-05"
  },
  {
    id: "fs-9-10-05",
    subject: "Future Skills",
    ageGroup: "9-10",
    band: "Upper Explorers",
    guide: "Byte",
    guideAnimal: "Fox",
    lessonNumber: 5,
    title: "Cybersecurity: Keeping Information Safe",
    duration: "15–20 min",
    hook: "In 2023, the average cost of a data breach reached $4.45 million — the highest ever. Cybercrime generates more revenue than the global drug trade. And 95% of breaches are caused by human error. Cybersecurity isn't just an IT problem — it's a fundamental literacy issue. Understanding how attacks work is the prerequisite for defending against them.",
    bigIdea: "Cybersecurity protects systems, networks, and data from digital attacks. Understanding primary attack vectors — phishing, malware, social engineering — and corresponding defenses transforms you from a vulnerability into a line of defense.",
    sections: [
      {
        title: "How Attackers Think: The Threat Model",
        emoji: "🎯",
        content: "Think in terms of threat models: who are potential attackers, what are they after, what paths could they take? Motivations: financial (ransomware, fraud), espionage (state-sponsored, corporate), disruption (hacktivism), opportunism (automated scanning). The attack surface: every point information enters or leaves a system — every employee email, every API endpoint, every device, every person with access. Security is weakest at the human layer — social engineering exploits trust, urgency, and authority rather than technical vulnerabilities. A sophisticated technical defense is irrelevant if an attacker can call an employee and pretend to be IT support."
      },
      {
        title: "Primary Attack Vectors",
        emoji: "🎣",
        content: "Phishing: deceptive emails, texts, or calls pretending to be legitimate entities to steal credentials or install malware. Spear phishing uses personal information to make attacks more convincing. Social engineering: manipulating people into revealing information or taking actions that compromise security — exploiting helpfulness, authority, fear, urgency. Malware: viruses (self-replicating), ransomware (encrypts files and demands payment), trojans (disguised as legitimate software), spyware (secretly monitors activity). Man-in-the-middle: intercepting communications — common on unsecured public Wi-Fi. SQL injection: malicious code inserted into database queries through vulnerable web forms."
      },
      {
        title: "Fundamental Defenses",
        emoji: "🛡️",
        content: "Password hygiene: unique, long, random passwords for every account — a password manager (Bitwarden, 1Password) is essential. Multi-factor authentication (MFA): requiring a second factor (phone app, hardware key) in addition to password — dramatically reduces account takeover even if passwords are compromised. Software updates: patches fix known vulnerabilities — automatic updates eliminates entire attack categories. Encryption: data encrypted in transit (HTTPS) and at rest is unreadable to interceptors. Backup: regularly backed-up data eliminates ransomware leverage — you can restore rather than pay. Human training: since 95% of breaches involve human error, security awareness is the highest-ROI defense."
      },
      {
        title: "The Ethical Dimension: Security Research",
        emoji: "⚖️",
        content: "White hat hackers find vulnerabilities to help fix them — with authorization from system owners. Gray hat hackers find vulnerabilities without authorization but typically report rather than exploit. Black hat hackers exploit vulnerabilities maliciously. Bug bounty programs: companies pay security researchers who responsibly disclose vulnerabilities — Google, Microsoft, and Meta pay millions annually. The CFAA in the US makes unauthorized computer access criminal — even security research without permission. Cybersecurity as a career: massive talent shortage, high salaries, and the satisfaction of defending critical systems."
      }
    ],
    activity: {
      title: "Security Audit",
      instructions: "Conduct a cybersecurity audit of your digital life. Check: (1) Password hygiene — unique passwords everywhere? (haveibeenpwned.com tells you if your email has been in breaches). (2) MFA — enabled on email, social media, banking? (3) Software updates — devices fully updated? (4) Backup — important data backed up? (5) Phishing recognition — find 3 phishing email examples on PhishTank.com and identify the red flags. Write an action plan: what three specific improvements will you make this week? Then actually make them."
    },
    quiz: [
      {
        question: "What percentage of cybersecurity breaches involve human error?",
        answer: "Approximately 95% — making human security awareness the highest-ROI defense",
        options: ["About 30% — most breaches exploit technical vulnerabilities", "About 60% — human and technical factors contribute roughly equally", "Approximately 95% — making human security awareness the highest-ROI defense", "About 10% — human factors are tracked but rarely the primary cause"]
      },
      {
        question: "What is spear phishing and why is it more dangerous?",
        answer: "Phishing targeted at specific individuals using personal information to increase credibility — harder to recognize because it references real details about you",
        options: ["Phishing using voice calls rather than email", "Phishing targeted at specific individuals using personal information to increase credibility — harder to recognize because it references real details about you", "Phishing targeting large organizations rather than individuals", "Automated phishing testing millions of emails simultaneously"]
      },
      {
        question: "Why does multi-factor authentication (MFA) dramatically reduce account takeover risk?",
        answer: "Even if an attacker has your password, they cannot access your account without the second factor — requiring physical possession in addition to knowledge",
        options: ["MFA makes passwords longer and more complex", "Even if an attacker has your password, they cannot access your account without the second factor — requiring physical possession in addition to knowledge", "MFA alerts you immediately when an unauthorized login attempt occurs", "MFA encrypts your password before sending it"]
      },
      {
        question: "What is ransomware and how does regular backup defeat it?",
        answer: "Malware that encrypts your files and demands payment for the decryption key — backups allow restoration from a clean state, eliminating the attacker's leverage",
        options: ["Malware that converts your computer into a tool for attacking others", "Malware that encrypts your files and demands payment for the decryption key — backups allow restoration from a clean state, eliminating the attacker's leverage", "A browser-locking scam requiring calling a fake support number", "A network attack preventing internet access until a fee is paid"]
      },
      {
        question: "What distinguishes white hat from black hat hackers?",
        answer: "White hat hackers find and report vulnerabilities with authorization — they work to improve security; black hat hackers exploit vulnerabilities maliciously or without authorization",
        options: ["White hat hackers work for governments; black hat hackers work independently", "White hat hackers use only legal techniques; black hat hackers use exploits", "White hat hackers find and report vulnerabilities with authorization — they work to improve security; black hat hackers exploit vulnerabilities maliciously or without authorization", "White hat hackers are paid; black hat hackers are volunteers"]
      }
    ],
    familyAdventure: "Set up a family password manager together. Download Bitwarden (free and open-source) on all family devices. Create entries for your most important accounts. Enable MFA on email accounts — Google Authenticator or Authy are free. Check haveibeenpwned.com for all family email addresses. Change passwords for any accounts listed. This single activity provides more real cybersecurity protection than most people ever implement.",
    badge: "Cybersecurity Defender",
    nextLesson: "fs-9-10-06"
  },
  {
    id: "fs-9-10-06",
    subject: "Future Skills",
    ageGroup: "9-10",
    band: "Upper Explorers",
    guide: "Byte",
    guideAnimal: "Fox",
    lessonNumber: 6,
    title: "Critical Thinking in the Age of Misinformation",
    duration: "15–20 min",
    hook: "MIT researchers found false news spreads six times faster on Twitter than true news, and is 70% more likely to be retweeted. In 2016, a man drove from North Carolina to Washington D.C. with a gun because he believed a fabricated Facebook story. The information environment is more polluted than at any point in human history. Critical thinking — evaluating evidence yourself rather than just believing smart people — may be the most important skill of the 21st century.",
    bigIdea: "In an information environment flooded with misinformation, disinformation, and algorithmically amplified content, critical thinking skills — evaluating sources, checking claims, understanding persuasion tactics — are foundational to effective citizenship.",
    sections: [
      {
        title: "The Misinformation Ecosystem",
        emoji: "🌐",
        content: "Misinformation (false info spread without intent to deceive), disinformation (false info spread deliberately), and malinformation (true info used to harm) operate through overlapping mechanisms. The attention economy: platforms optimize for engagement — outrage, fear, and tribalism generate more engagement than nuanced truth, creating economic incentives to amplify emotionally charged content regardless of accuracy. Filter bubbles: algorithms show content you're likely to agree with — you see a distorted picture of the information landscape. Deepfakes: AI-generated video and audio that realistically depicts people saying things they never said."
      },
      {
        title: "The SIFT Method",
        emoji: "🔍",
        content: "Stop: before sharing or reacting, pause — don't let emotional responses bypass evaluation. Investigate the source: who is behind this? What are their credentials, funding, and track record? Wikipedia is a useful starting point for evaluating sources — look at what others say about the source, not just what the source says about itself. Find better coverage: search for the same claim in multiple credible sources. If only one source makes an extraordinary claim, extraordinary skepticism is warranted. Trace claims: follow links back to original sources — viral misinformation often misrepresents real studies or events. The original source often says something quite different."
      },
      {
        title: "Cognitive Biases That Enable Misinformation",
        emoji: "🧠",
        content: "Confirmation bias: we give more weight to information confirming existing beliefs — making us vulnerable to misinformation aligned with our worldview. Illusory truth effect: repeated exposure to a false claim increases perceived truthfulness — even knowing something is false doesn't fully neutralize this. In-group favoritism: we give more credibility to sources associated with our group. Fluency heuristic: content that is easier to read feels more true than identical content in difficult font. Motive attribution asymmetry: we assume our own views are based on evidence while opponents' views are motivated by character flaws."
      },
      {
        title: "Evaluating Scientific Claims",
        emoji: "📊",
        content: "Media reports of scientific studies require specific evaluation skills. Sample size: small samples can produce significant but unreliable results by chance. Correlation vs causation: 'coffee drinkers live longer' doesn't mean coffee causes longevity. Relative vs absolute risk: '50% increased risk' of a 1-in-million event = 1.5-in-million — relative numbers sound dramatic but the absolute change may be tiny. Replication: single studies should be verified by independent replication. Peer review: published in a peer-reviewed journal doesn't mean true, but it means experts evaluated the methodology. These tools don't require statistics expertise — just knowing what questions to ask."
      }
    ],
    activity: {
      title: "Misinformation Investigation",
      instructions: "Investigate three pieces of online content you've seen shared or find on snopes.com's recent cases. For each: (1) Apply SIFT — what specific steps did you take and what did you find? (2) Identify which cognitive bias made it compelling. (3) Find the original source if cited and verify whether it actually supports the claim. (4) Rate: true, mostly true, mixed, mostly false, or false. (5) Write: who created this? What were they trying to achieve? Present your analysis as a professional fact-checker's report."
    },
    quiz: [
      {
        question: "What is the difference between misinformation and disinformation?",
        answer: "Misinformation is false information spread without intent to deceive; disinformation is false information spread deliberately to deceive",
        options: ["Misinformation is harmless news errors; disinformation is harmful false narratives", "Misinformation is false information spread without intent to deceive; disinformation is false information spread deliberately to deceive", "Misinformation comes from ordinary people; disinformation from governments", "Misinformation applies to opinions; disinformation applies to facts"]
      },
      {
        question: "What is the illusory truth effect?",
        answer: "Repeated exposure to a false claim increases its perceived truthfulness — even knowing something is false doesn't fully immunize against this effect",
        options: ["The tendency to believe that obvious-seeming claims must be true", "Repeated exposure to a false claim increases its perceived truthfulness — even knowing something is false doesn't fully immunize against this effect", "The false confidence that comes from having evaluated a claim previously", "The tendency for claims about prestigious institutions to seem more credible"]
      },
      {
        question: "What is the difference between relative and absolute risk?",
        answer: "Relative risk expresses change as a percentage of baseline ('50% increased risk'); absolute risk gives actual numbers ('from 0.01% to 0.015%') — relative numbers often sound far more dramatic",
        options: ["Relative risk applies to populations; absolute risk applies to individuals", "Relative risk expresses change as a percentage of baseline ('50% increased risk'); absolute risk gives actual numbers ('from 0.01% to 0.015%') — relative numbers often sound far more dramatic", "Relative risk is used by scientists; absolute risk is used by journalists", "There is no meaningful distinction — both measure the same thing differently"]
      },
      {
        question: "What is 'lateral reading' and why do fact-checkers use it?",
        answer: "Instead of reading deeply into one source, opening multiple tabs to check what others say about that source — verifying credibility before trusting content",
        options: ["Reading multiple articles simultaneously to identify consensus", "Instead of reading deeply into one source, opening multiple tabs to check what others say about that source — verifying credibility before trusting content", "A speed-reading technique for evaluating more content faster", "Comparing news across different political perspectives to find the middle ground"]
      },
      {
        question: "What creates the economic incentive for platforms to amplify outrage and fear?",
        answer: "The attention economy — platforms earn advertising revenue from time spent; outrage, fear, and tribalism generate more engagement than nuanced truth, rewarding sensational content",
        options: ["Platform moderation teams are understaffed — emotional content spreads faster than moderation can catch it", "The attention economy — platforms earn advertising revenue from time spent; outrage, fear, and tribalism generate more engagement than nuanced truth, rewarding sensational content", "Advertisers specifically request emotional content placement", "Legal protections for platforms create no incentive to fact-check before amplifying"]
      }
    ],
    familyAdventure: "Do a family misinformation simulation. Each person finds one piece of content — one real, one false — and presents it convincingly claiming it's true. The family evaluates each using SIFT and votes before the answer is revealed. Debrief: What made the false content compelling? Which cognitive bias did it exploit? What would it have taken to catch it before spreading it? How does knowing these manipulations change how you approach content?",
    badge: "Truth Investigator",
    nextLesson: "fs-9-10-07"
  },
  {
    id: "fs-9-10-07",
    subject: "Future Skills",
    ageGroup: "9-10",
    band: "Upper Explorers",
    guide: "Byte",
    guideAnimal: "Fox",
    lessonNumber: 7,
    title: "The Fourth Industrial Revolution: What's Coming",
    duration: "15–20 min",
    hook: "The First Industrial Revolution brought steam power (1760s-1840s). The Second brought electricity and mass production (1870s-1914). The Third brought computers and the internet (1960s-2000s). Each fundamentally restructured human society. We are now in the early stages of the Fourth Industrial Revolution — driven by AI, robotics, biotech, and their convergence. Understanding it is understanding the world your generation will inhabit.",
    bigIdea: "The Fourth Industrial Revolution is characterized by the fusion of physical, digital, and biological systems. Its impacts will be broader and faster than previous revolutions, creating both extraordinary opportunity and profound disruption.",
    sections: [
      {
        title: "Defining the Fourth Industrial Revolution",
        emoji: "⚡",
        content: "Klaus Schwab (World Economic Forum) describes the Fourth Industrial Revolution as characterized not just by new technologies but by their convergence. Physical domain: autonomous vehicles, advanced robotics, 3D printing. Digital domain: AI, machine learning, IoT, blockchain, quantum computing. Biological domain: synthetic biology, gene editing (CRISPR), brain-computer interfaces, personalized medicine. The fusion: AI-designed proteins, robots with computer vision, implants with internet connectivity, algorithms analyzing DNA. These technologies don't just create new industries — they transform existing ones simultaneously."
      },
      {
        title: "Speed and Scale of Disruption",
        emoji: "🚀",
        content: "Previous industrial revolutions unfolded over decades, allowing societies to adapt. The Fourth is disrupting multiple sectors simultaneously at exponential speed. It took 75 years for telephones to reach 50 million users; Instagram reached 1 billion in 9 years; ChatGPT reached 1 million users in 5 days. This pace creates a fundamental challenge: human institutions (education, law, governance, culture) adapt slowly, while technology advances rapidly. The regulatory gap: laws governing AI, genetics, autonomous vehicles, and other 4IR technologies are years behind the technology — creating both opportunity (less constrained innovation) and risk (less constrained harm)."
      },
      {
        title: "Winners and Losers in the Transition",
        emoji: "⚖️",
        content: "Every industrial revolution created massive wealth and massive disruption simultaneously. The question is not whether the Fourth Revolution creates net economic value — it likely creates enormous value — but who captures it and who bears the cost of disruption. The Fourth Revolution concern: AI and automation may uniquely benefit capital owners (who own the machines) over workers (who are replaced by machines) — potentially increasing inequality rather than eventually decreasing it as previous revolutions did. Countries and communities without educational systems developing 4IR skills face particularly severe challenges."
      },
      {
        title: "The Human Response",
        emoji: "🌟",
        content: "What enables humans to thrive? Skills that AI and robots are least able to replicate: genuine empathy and human connection, creative synthesis across domains, ethical judgment in novel situations, physical dexterity in unstructured environments, complex human social dynamics navigation. These aren't soft skills — they are the hardest skills to build in machines and the most valuable in complex organizations. Lifelong learning becomes existential — not optional but a career survival requirement. Interdisciplinary thinking (combining technical, creative, and humanistic perspectives) creates value precisely because machines optimize within defined domains but struggle at the boundaries."
      }
    ],
    activity: {
      title: "4IR Impact Analysis",
      instructions: "Choose one industry (healthcare, education, transportation, agriculture, entertainment, or retail). Research how AI, robotics, and biotech are currently changing it and projected to change it in the next decade. Analyze: what jobs are being automated? What new jobs are being created? What skills will be most valuable in 2035? Who benefits from the transformation and who is harmed? What policies could ensure benefits are broadly shared? Present as a 2-page briefing document for someone choosing a career in this industry."
    },
    quiz: [
      {
        question: "What distinguishes the Fourth Industrial Revolution from previous ones?",
        answer: "The fusion of physical, digital, and biological technologies — not just new tools in one domain but convergence across multiple domains simultaneously at unprecedented speed",
        options: ["It is happening faster — previous revolutions took decades but the Fourth takes years", "The fusion of physical, digital, and biological technologies — not just new tools in one domain but convergence across multiple domains simultaneously at unprecedented speed", "It is global from the start — previous revolutions began in one country before spreading", "It is primarily about information rather than physical production"]
      },
      {
        question: "How does the regulatory gap create both opportunity and risk?",
        answer: "Less constrained innovation allows faster advancement and new business models; less constrained harm allows technologies to cause damage before protective laws are established",
        options: ["Opportunities arise from regulatory arbitrage — businesses relocate to countries with fewer regulations", "Less constrained innovation allows faster advancement and new business models; less constrained harm allows technologies to cause damage before protective laws are established", "The gap creates opportunity for lawyers — regulatory complexity creates demand for legal expertise", "Opportunities come from early mover advantage; risks come from eventual regulatory penalties"]
      },
      {
        question: "Why might the Fourth Industrial Revolution uniquely worsen inequality?",
        answer: "AI and automation may primarily benefit capital owners (who own the machines) over workers — previous revolutions eventually raised wages broadly as labor remained essential",
        options: ["Fourth Revolution technologies are more expensive, accessible only to large corporations", "AI and automation may primarily benefit capital owners (who own the machines) over workers — previous revolutions eventually raised wages broadly as labor remained essential", "The Fourth Revolution requires less labor — fewer workers needed even in new industries", "Geographic concentration in tech hubs creates regional inequality"]
      },
      {
        question: "What human skills are least replicable by AI?",
        answer: "Genuine empathy and connection, creative cross-domain synthesis, ethical judgment in novel situations, physical dexterity in unstructured environments, complex social dynamics navigation",
        options: ["Mathematical reasoning and logical analysis", "Genuine empathy and connection, creative cross-domain synthesis, ethical judgment in novel situations, physical dexterity in unstructured environments, complex social dynamics navigation", "Memory and information retrieval", "Pattern recognition and trend prediction"]
      },
      {
        question: "Why does interdisciplinary thinking create particular value in the Fourth Industrial Revolution?",
        answer: "Machines optimize within defined domains but struggle at the boundaries — humans combining technical, creative, and humanistic perspectives create value precisely where machines cannot",
        options: ["Interdisciplinary workers are more flexible — they can switch between jobs as technology disrupts specific fields", "Organizations are increasingly diverse — interdisciplinary thinkers communicate more effectively", "Machines optimize within defined domains but struggle at the boundaries — humans combining technical, creative, and humanistic perspectives create value precisely where machines cannot", "Regulatory complexity requires interdisciplinary understanding"]
      }
    ],
    familyAdventure: "Map your family's work against the Fourth Industrial Revolution. Each family member with a job discusses: what parts of your work could theoretically be automated? What specifically requires human judgment, creativity, or connection? What skills are you developing that will remain valuable as technology advances? What would you need to learn for your field in 2035? What education and skill investments should your family prioritize?",
    badge: "4IR Navigator",
    nextLesson: "fs-9-10-08"
  },
  {
    id: "fs-9-10-08",
    subject: "Future Skills",
    ageGroup: "9-10",
    band: "Upper Explorers",
    guide: "Byte",
    guideAnimal: "Fox",
    lessonNumber: 8,
    title: "Automation and the Future of Jobs",
    duration: "15–20 min",
    hook: "In 1900, 41% of Americans worked in agriculture. Today, less than 2% do — and the US produces more food than ever. Mechanical automation replaced millions of farm jobs, yet there was no permanent mass unemployment: people moved to manufacturing, services, and sectors that didn't yet exist. Now AI and robots are automating cognitive tasks as well as physical ones. History suggests automation creates more jobs than it destroys — eventually. But 'eventually' can mean decades of painful dislocation. And some economists believe this time is genuinely different.",
    bigIdea: "Automation eliminates specific tasks and jobs while creating new ones. Net impact depends on whether new jobs can absorb displaced workers at comparable wages. Understanding which skills are automation-resistant prepares you for the future labor market.",
    sections: [
      {
        title: "What Gets Automated and Why",
        emoji: "🤖",
        content: "Automation targets tasks that are: routine and rule-following (clerical work, manufacturing assembly, basic data entry), high-volume repetition (customer service scripts, medical coding, legal document review), pattern recognition in large datasets (radiology reading, fraud detection, credit scoring). Less automatable: non-routine physical work in variable environments (plumbing, childcare, complex construction), novel problem-solving in unique situations, creative work requiring genuine insight, social and empathetic interaction (therapy, management, teaching — partially), and interdisciplinary synthesis. The crucial nuance: automation typically automates tasks within jobs, not entire jobs — changing job content rather than eliminating positions entirely, at least initially."
      },
      {
        title: "Historical Optimism vs Present Concerns",
        emoji: "⚖️",
        content: "The Luddite fallacy: the historical observation that technology has always created more jobs than it destroys. The Luddites who feared machines were historically wrong. But the present concern: previous automation mostly replaced physical labor, creating new cognitive jobs that absorbed displaced workers. AI automation is replacing cognitive labor — if new jobs also require cognitive work that AI can do, the historical absorption mechanism may not function the same way. Economists are genuinely divided. David Autor (MIT): complementarity between humans and AI creates new tasks and opportunities. Daron Acemoglu (MIT): automation doesn't create enough new jobs and increases inequality."
      },
      {
        title: "Transition Challenges",
        emoji: "🔄",
        content: "Even if automation creates net more jobs, specific challenges arise. Geographic mismatch: automation hits concentrated regions (manufacturing towns) while new jobs appear elsewhere (tech cities). Skill mismatch: workers displaced from routine cognitive tasks may lack skills for higher-level cognitive work, and retraining adults at scale is difficult. Wage polarization: automation increases demand for very high-skill and very low-skill work while hollowing out middle-skill, middle-wage jobs — the 'barbell economy.' Speed: if automation displaces 3 million workers over 10 years, the economy may absorb them. If it displaces 30 million over 3 years, adaptive mechanisms may not function fast enough."
      },
      {
        title: "Positioning for the Automated Future",
        emoji: "🎯",
        content: "Career strategies: develop skills that complement AI rather than compete with it (judgment, creativity, empathy, leadership — all more valuable when AI handles routine work). Build adaptability over specialization — the ability to learn rapidly in new domains matters more than mastery of potentially automated domains. Develop technical fluency — understanding how AI and automation work positions you to direct and work alongside them. Cultivate irreplaceable human networks. Consider roles in AI deployment, oversight, and accountability. The highest-value future workers will be those who work effectively with AI tools, judge their outputs, and apply them to genuinely novel situations."
      }
    ],
    activity: {
      title: "Automation Vulnerability Assessment",
      instructions: "Research 10 specific jobs (choose a mix: nurse, accountant, truck driver, teacher, software engineer, graphic designer, plumber, financial analyst, therapist, customer service). For each: what percentage of tasks could theoretically be automated? What specifically cannot be automated and why? Where will human judgment remain essential? Rank from most to least automation-vulnerable. What patterns do you see? What does this tell you about skills to develop? How would you advise someone choosing between these careers today?"
    },
    quiz: [
      {
        question: "What is the 'Luddite fallacy'?",
        answer: "The historical observation that technology has always created more jobs than it destroys — the Luddites who feared machines were wrong historically, though the name is ironic given genuine current uncertainty",
        options: ["The mistaken belief that automation primarily hurts skilled workers", "The historical observation that technology has always created more jobs than it destroys — the Luddites who feared machines were wrong historically, though the name is ironic given genuine current uncertainty", "The error of treating workers as machines", "The false assumption that Luddites opposed all technology"]
      },
      {
        question: "Why is AI automation of cognitive work potentially different from previous automation?",
        answer: "Previous physical labor automation created new cognitive jobs that absorbed displaced workers; if AI automates cognitive tasks too, the historical absorption mechanism may not function the same way",
        options: ["AI automation is happening faster — speed prevents economies from adjusting", "Previous physical labor automation created new cognitive jobs that absorbed displaced workers; if AI automates cognitive tasks too, the historical absorption mechanism may not function the same way", "Previous automation was limited to factories; AI affects every sector simultaneously", "Previous automation was reversible; AI creates permanent dependency"]
      },
      {
        question: "What is wage polarization?",
        answer: "Automation increases demand for very high-skill (AI-complementary) and very low-skill (hard to automate) work while reducing demand for middle-skill, middle-wage jobs — creating a 'barbell' labor market",
        options: ["The widening gap between executive and entry-level wages in large corporations", "Automation increases demand for very high-skill (AI-complementary) and very low-skill (hard to automate) work while reducing demand for middle-skill, middle-wage jobs — creating a 'barbell' labor market", "Geographic polarization where some regions benefit from automation while others are left behind", "The tendency for automated industries to pay either very high or no wages at all"]
      },
      {
        question: "What career strategy is most valuable for the automated future?",
        answer: "Developing skills that complement AI (judgment, creativity, empathy) while building technical fluency to work alongside AI tools — adaptability over narrow specialization in potentially automated domains",
        options: ["Specializing deeply in a technical domain showing no signs of automation", "Working in government and regulated industries — requirements ensure human workers regardless of technology", "Developing skills that complement AI (judgment, creativity, empathy) while building technical fluency to work alongside AI tools — adaptability over narrow specialization in potentially automated domains", "Pursuing entrepreneurship — business owners cannot be automated since they set direction"]
      },
      {
        question: "Why does automation often eliminate tasks rather than entire jobs?",
        answer: "Most jobs contain a mix of automatable and non-automatable tasks — automation handles the routine portions, changing job content while preserving human roles for judgment, creativity, and complex interaction",
        options: ["Labor laws protect workers from complete job elimination through technology", "Most jobs contain a mix of automatable and non-automatable tasks — automation handles the routine portions, changing job content while preserving human roles for judgment, creativity, and complex interaction", "Automation technology isn't sufficiently advanced to fully replicate entire job functions", "Complete job automation is economically inefficient — maintaining human involvement reduces costs"]
      }
    ],
    familyAdventure: "Research Universal Basic Income (UBI) together — the proposal that governments give every citizen regular cash regardless of employment, as insurance against automation-driven unemployment. Find: what countries or cities have experimented with UBI? What were the results? What are the strongest arguments for and against? What would your family's life look like if UBI replaced some income? Do you think it's a good policy idea and why?",
    badge: "Future of Work Analyst",
    nextLesson: "fs-9-10-09"
  },
  {
    id: "fs-9-10-09",
    subject: "Future Skills",
    ageGroup: "9-10",
    band: "Upper Explorers",
    guide: "Byte",
    guideAnimal: "Fox",
    lessonNumber: 9,
    title: "App Design: From Idea to Prototype",
    duration: "15–20 min",
    hook: "There are approximately 4.9 million apps in the App Store and Google Play combined. Most fail. The difference between apps that succeed and those that don't is almost never technical quality — it's whether they genuinely solve a real problem for real people in a way that fits into their actual lives. App design is the discipline of translating human needs into digital experiences.",
    bigIdea: "App design is the process of translating user needs into functional digital experiences through iterative research, ideation, prototyping, and testing. Good design solves real problems; great design makes the solution feel inevitable.",
    sections: [
      {
        title: "User Research: Designing for Real People",
        emoji: "🔍",
        content: "The most common app design failure: building something you would want rather than something users need. User research techniques: user interviews (talking to potential users about goals, frustrations, and current solutions — before mentioning your idea), observational research (watching people perform the task you're trying to improve), surveys (quantitative data about user preferences), and user testing (watching people use prototypes — where do they get stuck?). The Jobs to Be Done framework: users don't buy products, they 'hire' them to do a job. What 'job' is your app being hired to do? Who is the customer? When do they need the job done? What are they currently using instead?"
      },
      {
        title: "UX vs UI: The Critical Distinction",
        emoji: "🎨",
        content: "UX (User Experience) design: the overall experience — how intuitive, efficient, and satisfying it is. UX designers research users, create user flows, wireframes (low-fidelity structure layouts), and information architecture (how content is organized). Goal: the right content, in the right place, at the right time. UI (User Interface) design: the visual layer — colors, typography, icons, spacing, animations. UI makes UX decisions concrete and visually appealing. Both matter: beautiful UI over poor UX means the app looks great but is confusing to use. Good UX with poor UI means the app works logically but feels old. Great apps require both."
      },
      {
        title: "Prototyping and Iteration",
        emoji: "🔄",
        content: "Paper prototypes (fastest): draw screens on paper, use actual users to 'click' by pointing, observe confusion. Wireframes (low-fidelity digital): grayscale structural layouts without visual design — shows information architecture and flow. Mockups (high-fidelity): detailed visual representations without interactivity. Interactive prototypes: clickable mockups simulating the experience — Figma allows anyone to build these free. The principle: fail early and cheaply. Catching problems on paper costs minutes; catching them after development costs weeks. User test at each stage to identify problems before they're expensive to fix."
      },
      {
        title: "The Psychology of Good Design",
        emoji: "🧠",
        content: "Cognitive load: minimize mental effort required — every decision costs cognitive resources. Hick's Law: more choices = more time to decide — fewer, better options outperform overwhelming option sets. Fitts's Law: larger, closer targets are faster to click — critical for touch interfaces. Progressive disclosure: show only what's needed now, hide complexity until needed. Affordances: visual cues suggesting how to interact (buttons look pressable, links look clickable). Feedback: immediate response to user actions — no action should disappear into the void. The best interfaces feel transparent — users focus on their task, not on figuring out the interface."
      }
    ],
    activity: {
      title: "App Prototype",
      instructions: "Design an app prototype addressing a real problem you've experienced. Process: (1) User Research — interview 2 people about the problem before mentioning your idea. (2) Problem Statement — '[User type] needs a way to [goal] because [insight from research].' (3) Ideate — sketch 5 different approaches. (4) Paper Prototype — draw each screen on paper. (5) User Test — have someone 'use' it without helping. Where do they get confused? (6) Iterate — fix the problems found. (7) Document the entire process with photos. What surprised you during user testing?"
    },
    quiz: [
      {
        question: "What is the 'Jobs to Be Done' framework?",
        answer: "Users 'hire' products to accomplish a job — designing around what job is being done, for whom, in what context, and what they currently use instead",
        options: ["A framework for designing job search applications", "Users 'hire' products to accomplish a job — designing around what job is being done, for whom, in what context, and what they currently use instead", "A workflow for organizing tasks required to build an app", "A method for calculating ROI of app development"]
      },
      {
        question: "What is the difference between UX and UI design?",
        answer: "UX is the overall experience (how intuitive, efficient, satisfying); UI is the visual layer (how it looks). Great apps require both.",
        options: ["UX is for mobile apps; UI is for web applications", "UX is done before development; UI is done during development", "UX is the overall experience (how intuitive, efficient, satisfying); UI is the visual layer (how it looks). Great apps require both.", "UX is quantitative (metrics); UI is qualitative (aesthetics)"]
      },
      {
        question: "Why are paper prototypes valuable even though they look nothing like a real app?",
        answer: "They reveal UX problems quickly and cheaply — catching confusion before development means fixing paper, not code; the speed and cost advantage outweighs lack of visual fidelity",
        options: ["They communicate ideas to clients who don't understand technical mockups", "They reveal UX problems quickly and cheaply — catching confusion before development means fixing paper, not code; the speed and cost advantage outweighs lack of visual fidelity", "They allow all team members to contribute regardless of technical skill", "They are legally required before digital prototypes can be tested with real users"]
      },
      {
        question: "What does Hick's Law reveal about interface design?",
        answer: "More choices require more time to decide — good design provides fewer, better options rather than overwhelming users with comprehensive but paralyzing option sets",
        options: ["Interfaces should always match the most popular design patterns", "More choices require more time to decide — good design provides fewer, better options rather than overwhelming users with comprehensive but paralyzing option sets", "Users make better decisions with more information", "Complex interfaces should always be avoided — simplicity always outperforms completeness"]
      },
      {
        question: "What does it mean for an interface to feel 'transparent'?",
        answer: "Users focus on their task rather than on figuring out the interface — the design is invisible because it requires no cognitive effort to understand",
        options: ["The visual design uses white space and minimal color", "All design decisions are publicly documented", "Users focus on their task rather than on figuring out the interface — the design is invisible because it requires no cognitive effort to understand", "The interface clearly explains its own functionality without documentation"]
      }
    ],
    familyAdventure: "Download Figma (free) or use Marvel App (free) and build a simple interactive prototype of an app idea. Show it to 2-3 people who didn't see you build it. Watch them use it without telling them how. Where do they get confused? Where do they intuitively click correctly? What does this tell you about how well your design communicates?",
    badge: "App Designer",
    nextLesson: "fs-9-10-10"
  },
  {
    id: "fs-9-10-10",
    subject: "Future Skills",
    ageGroup: "9-10",
    band: "Upper Explorers",
    guide: "Byte",
    guideAnimal: "Fox",
    lessonNumber: 10,
    title: "Data Science: Finding Patterns in Information",
    duration: "15–20 min",
    hook: "The world creates 2.5 quintillion bytes of data every day. This data contains patterns about disease spread, consumer behavior, climate trends, social movements, and market dynamics — invisible before we had tools to analyze them. Data science is the discipline of extracting insight from data. It has become the defining analytical capability of the 21st century — applied in virtually every field from medicine to sports to finance to public policy.",
    bigIdea: "Data science extracts meaningful insights from data using statistical analysis, visualization, and machine learning. Understanding its process — from data collection to insight to decision — makes you a more powerful analyst in any field.",
    sections: [
      {
        title: "The Data Science Process",
        emoji: "🔄",
        content: "Data science follows a process: (1) Define the question — what decision or insight are you enabling? (2) Collect data — from databases, APIs, web scraping, sensors, or manually. (3) Clean data — real data is messy: missing values, errors, inconsistencies, outliers. Experienced data scientists spend 60-80% of their time on cleaning. (4) Explore data — descriptive statistics and visualization to understand what's there. (5) Model data — apply statistical or ML methods to find patterns. (6) Interpret results — what do numbers actually mean in context? (7) Communicate findings — translate technical results into actionable insights. (8) Deploy and monitor — implement insights and track real-world impact."
      },
      {
        title: "Statistics Fundamentals",
        emoji: "📊",
        content: "Mean, median, mode: measures of central tendency — the mean is pulled by outliers; the median (middle value) is more robust. Bill Gates walking into a room raises the mean income dramatically but barely affects the median. Standard deviation: how spread out the data is. Correlation and causation: things can move together without one causing the other. Ice cream sales and drowning deaths are correlated (both increase in summer) — ice cream doesn't cause drowning. Hypothesis testing: is an observed difference real or just random chance? Simpson's paradox: a trend appearing in multiple subgroups can reverse when groups are combined — a common and dangerous analytical trap."
      },
      {
        title: "Data Visualization",
        emoji: "📈",
        content: "Visualization translates numbers into patterns humans can understand. Chart selection matters: line charts for trends over time, bar charts for comparing categories, scatter plots for relationships between variables, histograms for distributions, maps for geographic data. Common errors: truncated y-axes (starting at non-zero to exaggerate differences), dual axes (implying relationship between unrelated variables), 3D effects (distorting proportions), cherry-picking timeframes. Good visualization tells a clear story, shows the most important information, accurately represents the data, and provides context. Misleading visualization can be more dangerous than no visualization — making incorrect conclusions feel compelling."
      },
      {
        title: "Data Literacy as Universal Skill",
        emoji: "🌍",
        content: "Data literacy — the ability to read, work with, analyze, and communicate with data — is becoming a foundational workplace skill across virtually every field. Healthcare: understanding clinical trial results, diagnostic test accuracy. Business: interpreting financial reports, evaluating A/B test results. Policy: evaluating the evidence behind proposed interventions. Journalism: analyzing and accurately representing data. Science: designing studies, interpreting results. You don't need to be a professional data scientist to benefit from data literacy — but understanding basic statistical concepts and being able to critically evaluate quantitative claims will differentiate you in almost any field."
      }
    ],
    activity: {
      title: "Data Science Mini-Project",
      instructions: "Conduct a mini data science project on a topic you're curious about. Options: family spending patterns (analyze receipts), sports statistics for your favorite team, climate data for your city over 20 years, or population data for your country. Process: (1) Define the question you want to answer. (2) Collect data (spreadsheet or download from a public source). (3) Clean it. (4) Create at least 3 visualizations. (5) Identify the most interesting pattern. (6) Write a paragraph explaining what you found and what it means. What surprised you? What would you need to know to explain the pattern?"
    },
    quiz: [
      {
        question: "How much time do experienced data scientists spend on data cleaning?",
        answer: "60-80% of their time — real data is messy with missing values, errors, inconsistencies, and format problems that must be resolved before analysis",
        options: ["About 10-20% — cleaning is automated with modern tools", "About 30-40% — the balance between cleaning and analysis is roughly equal", "60-80% of their time — real data is messy with missing values, errors, inconsistencies, and format problems that must be resolved before analysis", "Almost none — properly collected data requires no cleaning"]
      },
      {
        question: "What is Simpson's Paradox?",
        answer: "A trend appearing in multiple subgroups can reverse when groups are combined — concluding from aggregated data without checking subgroups can produce exactly wrong conclusions",
        options: ["Large datasets often produce less reliable results than small ones", "A trend appearing in multiple subgroups can reverse when groups are combined — concluding from aggregated data without checking subgroups can produce exactly wrong conclusions", "Statistical significance decreases as sample size increases", "Correlation appears between unrelated variables due to a common cause"]
      },
      {
        question: "Why is median income often more informative than mean income?",
        answer: "The mean is pulled dramatically by extreme high values (billionaires) while the median is more representative of typical experience — most people's income is closer to the median",
        options: ["Median income is easier to calculate", "Mean income is proprietary data not publicly available", "The mean is pulled dramatically by extreme high values (billionaires) while the median is more representative of typical experience — most people's income is closer to the median", "Mean income varies by sample size; median income is stable"]
      },
      {
        question: "What makes a truncated y-axis misleading?",
        answer: "Starting the y-axis at a non-zero value visually exaggerates differences between data points — a small actual difference looks dramatic when the scale is cut",
        options: ["It makes charts harder to read", "Starting the y-axis at a non-zero value visually exaggerates differences between data points — a small actual difference looks dramatic when the scale is cut", "Truncated axes are technically incorrect under data visualization standards", "It implies additional data was removed"]
      },
      {
        question: "Why is data literacy a universal rather than specialist skill?",
        answer: "Understanding statistical concepts, evaluating quantitative claims, and interpreting visualizations is relevant in virtually every field — healthcare, business, policy, journalism, and science all require data evaluation",
        options: ["All jobs will eventually require coding in Python or R", "Understanding statistical concepts, evaluating quantitative claims, and interpreting visualizations is relevant in virtually every field — healthcare, business, policy, journalism, and science all require data evaluation", "Automated analytics tools require workers to interpret their outputs", "Regulatory requirements are making data reporting mandatory in most industries"]
      }
    ],
    familyAdventure: "Look at a news claim citing statistics together. Find the original data source. Ask: Is the y-axis truncated? Is this correlation or causation? What is the sample size? Is this absolute or relative numbers? What is missing that would change interpretation? Then find a public dataset at data.gov and explore it for 30 minutes. What patterns can you find? What questions does the data raise?",
    badge: "Data Scientist",
    nextLesson: "fs-9-10-11"
  },
  {
    id: "fs-9-10-11",
    subject: "Future Skills",
    ageGroup: "9-10",
    band: "Upper Explorers",
    guide: "Byte",
    guideAnimal: "Fox",
    lessonNumber: 11,
    title: "Ethical AI: Should Machines Make Decisions?",
    duration: "15–20 min",
    hook: "An algorithm determines whether you get a loan. An algorithm decides which job applicants get interviews. An algorithm assesses your risk of reoffending after arrest. An algorithm determines how much your health insurance costs. These are not hypothetical — these decisions are being made by AI systems today, affecting millions of people, with limited transparency, limited accountability, and limited avenues for appeal. Who is responsible when an AI makes a harmful decision?",
    bigIdea: "AI decision-making raises profound ethical questions about accountability, transparency, fairness, and human dignity. Understanding these questions prepares you to participate in one of the most important societal debates of the coming decades.",
    sections: [
      {
        title: "The Accountability Gap",
        emoji: "⚖️",
        content: "When a human makes a harmful decision (a biased loan officer, a negligent doctor), established accountability mechanisms exist — they can be sued, disciplined, or prosecuted. When an AI system makes the same harmful decision, accountability becomes deeply unclear: the developer? the company that deployed it? the organization that provided training data? the regulator who allowed it? This accountability gap is not accidental — it is often deliberately exploited. Companies deploy AI partly because algorithmic decisions are harder to challenge than human decisions, and the system's complexity provides 'technical fog' that makes accountability difficult to establish."
      },
      {
        title: "The Explainability Problem",
        emoji: "🔍",
        content: "Modern deep learning models make decisions through billions of parameter interactions genuinely difficult to explain in human terms. Even engineers who built them often cannot say exactly why a specific prediction was made. This creates an explainability problem for high-stakes decisions. The EU's GDPR includes a 'right to explanation' for automated decisions that significantly affect people — but what constitutes adequate explanation for a neural network output remains deeply contested. Explainable AI (XAI) is an active research area: techniques like LIME and SHAP provide partial explanations but not full transparency."
      },
      {
        title: "Frameworks for Ethical AI",
        emoji: "🗺️",
        content: "Multiple frameworks for ethical AI have emerged. The EU AI Act (2024) classifies AI by risk: unacceptable risk (banned — social scoring, real-time biometric surveillance), high risk (heavily regulated — employment, credit, healthcare, law enforcement), limited risk (transparency requirements), minimal risk (largely unregulated). The IEEE Ethically Aligned Design framework emphasizes human well-being, data privacy, and accountability. The Asilomar AI Principles cover safety, failure transparency, and avoiding undermining democratic oversight. None are self-executing — they require active enforcement that has been inconsistent globally."
      },
      {
        title: "Your Role as Citizen and Future Builder",
        emoji: "🌟",
        content: "Ethical AI requires democratic engagement. Advocating for meaningful algorithmic accountability — the right to know when AI decisions affect you and to appeal them. Supporting AI safety and alignment research — ensuring AI systems pursue goals humans actually intend. Building ethical AI if you work in technology — incorporating these considerations from design rather than retrofitting later. Participating in democratic processes that shape AI regulation — these decisions are being made now, with consequences for decades. Asking critical questions about AI systems you encounter — what decisions do they make? Who benefits? Who bears the risk? Who is accountable?"
      }
    ],
    activity: {
      title: "Ethical AI Case Analysis",
      instructions: "Research one high-stakes AI deployment: (1) Predictive policing algorithms (PredPol/ShotSpotter), (2) COMPAS recidivism risk assessment, (3) AI hiring tools, (4) Credit scoring algorithms, or (5) Content moderation AI on social platforms. For your case: how does the AI work? What decisions does it influence? What evidence of bias or harm exists? Who is accountable when it causes harm? What transparency does the public have? What regulatory oversight exists? Write a 2-page policy memo advising a city council considering deploying this technology."
    },
    quiz: [
      {
        question: "What is the 'accountability gap' in AI decision-making?",
        answer: "When AI causes harm, it's unclear who is responsible — developer, deployer, data provider, or regulator — and this ambiguity is sometimes deliberately exploited to avoid liability",
        options: ["AI systems make decisions faster than accountability processes can evaluate them", "When AI causes harm, it's unclear who is responsible — developer, deployer, data provider, or regulator — and this ambiguity is sometimes deliberately exploited to avoid liability", "Algorithms cannot be held responsible in court because they are not legal persons", "AI decision-making happens at a scale that overwhelms existing accountability systems"]
      },
      {
        question: "What is the 'explainability problem' in deep learning?",
        answer: "Modern AI models make decisions through billions of parameter interactions genuinely difficult to explain in human terms — even engineers often cannot say exactly why a specific decision was made",
        options: ["AI companies deliberately obscure algorithms as trade secrets", "Modern AI models make decisions through billions of parameter interactions genuinely difficult to explain in human terms — even engineers often cannot say exactly why a specific decision was made", "AI explanations are only available in technical language", "AI systems provide explanations but users don't read them"]
      },
      {
        question: "How does the EU AI Act classify AI systems?",
        answer: "By risk level: unacceptable risk (banned), high risk (heavily regulated), limited risk (transparency requirements), minimal risk (largely unregulated)",
        options: ["By application domain: consumer, enterprise, government, and military", "By risk level: unacceptable risk (banned), high risk (heavily regulated), limited risk (transparency requirements), minimal risk (largely unregulated)", "By accuracy: certified systems meet minimum performance thresholds; uncertified require disclosure", "By nationality: EU-built systems have lighter requirements than non-EU systems"]
      },
      {
        question: "Why might companies prefer AI decisions over human decisions for liability?",
        answer: "Algorithmic decisions create 'technical fog' that makes accountability harder to establish — complexity provides cover making challenging an AI decision more difficult than challenging a human decision",
        options: ["AI decisions are legally defined as protected business judgments", "AI decisions are automatically exempt from discrimination laws in most jurisdictions", "Algorithmic decisions create 'technical fog' that makes accountability harder to establish — complexity provides cover making challenging an AI decision more difficult than challenging a human decision", "AI decisions produce better outcomes statistically — companies prefer them because they reduce harmful outcomes"]
      },
      {
        question: "What does the GDPR 'right to explanation' require and why is it contested?",
        answer: "Individuals must receive explanations for automated decisions significantly affecting them — contested because what constitutes adequate explanation for a neural network output is technically and legally unclear",
        options: ["Companies must reveal their entire algorithm publicly", "Individuals must receive explanations for automated decisions significantly affecting them — contested because what constitutes adequate explanation for a neural network output is technically and legally unclear", "AI systems must explain every decision they make in plain language", "Regulators must be given access to AI training data"]
      }
    ],
    familyAdventure: "Discuss as a family: should AI make decisions about your life? Specific scenarios: (1) An AI evaluates your loan application. (2) An AI decides whether your job application gets forwarded to a human. (3) An AI assesses how much you should pay for insurance based on behavioral data. (4) An AI decides which social media content you see. For each: should this be allowed? What transparency should be required? What recourse should you have? What would you want regulated?",
    badge: "AI Ethics Champion",
    nextLesson: "fs-9-10-12"
  },
  {
    id: "fs-9-10-12",
    subject: "Future Skills",
    ageGroup: "9-10",
    band: "Upper Explorers",
    guide: "Byte",
    guideAnimal: "Fox",
    lessonNumber: 12,
    title: "Virtual and Augmented Reality",
    duration: "15–20 min",
    hook: "In 2024, surgeons at Johns Hopkins used AR headsets to see patient anatomy overlaid on actual bodies during complex spinal surgeries — dramatically improving precision. Architects walk through buildings that don't yet exist. Soldiers train for combat without live ammunition. VR and AR are no longer gaming curiosities — they're transforming surgery, education, training, and design in ways that are just beginning.",
    bigIdea: "VR creates fully immersive digital environments; AR overlays digital information on the physical world. Both are transforming professional applications while raising new questions about reality, identity, and ethics.",
    sections: [
      {
        title: "How VR and AR Actually Work",
        emoji: "🥽",
        content: "VR: a headset uses stereoscopic displays (slightly different images for each eye creating depth) and head tracking (sensors detect head movement, update the view — creating the illusion of physical presence). Motion tracking extends this to hands and body. The key challenge: the brain is extraordinarily sensitive to mismatches between visual input and physical sensation — any lag between head movement and display update causes nausea. High-end VR requires >90 Hz refresh rates and <20 millisecond motion-to-photon latency. AR: uses cameras and computer vision to track the physical environment, then overlays digital content with precise alignment — Microsoft HoloLens, Apple Vision Pro, and phone-based AR (like Pokémon Go at a basic level)."
      },
      {
        title: "Professional Applications Transforming Industries",
        emoji: "🏥",
        content: "Medicine: surgeons practice complex procedures in VR before performing them — reducing errors and improving outcomes. AR overlays patient anatomy during surgery. VR therapy treats phobias, PTSD, and chronic pain. Military/Training: the US military uses VR for combat training, vehicle operation, and strategic simulation — safer and cheaper than live training. Architecture: clients walk through buildings before construction. Engineers find flaws in virtual prototypes. Retail: IKEA's AR app lets you see furniture in your home before buying. Education: field trips to ancient Rome, the ocean floor, or Mars. Empathy training lets you experience others' perspectives."
      },
      {
        title: "The Metaverse: Promise and Reality",
        emoji: "🌐",
        content: "The 'metaverse' — persistent, interconnected virtual worlds — was one of the most hyped technology concepts of 2021-2022. Meta invested $36 billion in Horizon Worlds. The reality: adoption was disappointing. VR headsets remain expensive, heavy, and isolating. Motion sickness affects many users. Current virtual social experiences feel uncanny compared to physical presence. The 2021-2022 hype cycle appears to be premature prediction rather than imminent reality — though underlying technologies continue advancing. Apple's Vision Pro (2024) represents a more pragmatic vision — spatial computing that enhances the physical world rather than replacing it."
      },
      {
        title: "Ethical Questions of Simulated Reality",
        emoji: "⚖️",
        content: "VR and AR raise profound questions. Addiction and escapism: fully immersive environments could become more appealing than physical reality for some people. Identity and embodiment: VR allows inhabiting different bodies — experiencing life as a different gender, race, or age. Research shows this changes behavior and attitudes — implications for empathy training and also for manipulation. Privacy: AR glasses could continuously scan faces and access information about strangers — significant surveillance potential in public spaces. Economic access: who has access to these technologies and their educational/professional benefits?"
      }
    ],
    activity: {
      title: "VR/AR Application Design",
      instructions: "Design a VR or AR application for a specific professional or educational use case. Choose a field: medicine, education, architecture, military training, therapy, retail, or another. Specify: (1) The exact problem your application solves — what is currently done and what problems does the current approach have? (2) How your application works — what does the user see, do, and experience? (3) What hardware is required and what is the cost? (4) What evidence would demonstrate it actually improves outcomes? (5) What ethical concerns does it raise and how do you address them? Create a product brief as if pitching to investors."
    },
    quiz: [
      {
        question: "Why does lag between head movement and display update cause nausea in VR?",
        answer: "The brain is sensitive to mismatches between visual input and physical sensation — even milliseconds of mismatch creates sensory conflict that the body interprets as potential poisoning, triggering nausea",
        options: ["VR headsets are heavy — weight imbalance causes discomfort interpreted as nausea", "The brain is sensitive to mismatches between visual input and physical sensation — even milliseconds of mismatch creates sensory conflict that the body interprets as potential poisoning, triggering nausea", "High-frequency display refresh overwhelms the visual cortex", "VR environments have different lighting, confusing the visual system"]
      },
      {
        question: "How is AR being used in surgery?",
        answer: "Surgeons see patient anatomy (from CT/MRI scans) overlaid on the actual patient during surgery — improving precision by giving real-time internal visibility without additional incisions",
        options: ["AR allows surgeons to operate remotely via robotic instruments", "Surgeons see patient anatomy (from CT/MRI scans) overlaid on the actual patient during surgery — improving precision by giving real-time internal visibility without additional incisions", "AR simulates patient responses so surgeons can practice on the exact patient before the operation", "Surgery robots use AR to plan movements — surgeons approve the plan but machines execute"]
      },
      {
        question: "Why was the 2021-2022 metaverse hype cycle premature?",
        answer: "VR headsets remained expensive, heavy, and isolating; motion sickness affected many users; virtual social experiences felt uncanny compared to physical presence — adoption was far below projections",
        options: ["Regulatory concerns blocked deployment", "VR headsets remained expensive, heavy, and isolating; motion sickness affected many users; virtual social experiences felt uncanny compared to physical presence — adoption was far below projections", "Privacy concerns caused consumer backlash despite technically successful products", "Competing tech giants fragmented the market preventing interoperability"]
      },
      {
        question: "What ethical concern does continuous AR facial recognition create?",
        answer: "AR glasses scanning faces in public enable mass surveillance — strangers' information becomes immediately accessible, eliminating anonymity in physical public spaces",
        options: ["Facial recognition distracts AR users from physical surroundings, creating safety hazards", "AR glasses scanning faces in public enable mass surveillance — strangers' information becomes immediately accessible, eliminating anonymity in physical public spaces", "Facial recognition is inaccurate — its use in AR creates reputation damage from misidentification", "Continuous camera access violates photography laws in many jurisdictions"]
      },
      {
        question: "What does research show about inhabiting different bodies in VR?",
        answer: "Embodying different virtual bodies (different race, age, gender) changes behavior and attitudes — showing potential for empathy building but also for manipulation",
        options: ["VR body switching has no effect on real-world attitudes", "Embodying different virtual bodies (different race, age, gender) changes behavior and attitudes — showing potential for empathy building but also for manipulation", "VR body embodiment only affects behavior during the VR experience", "Body switching in VR primarily affects proprioception but not cognition or attitudes"]
      }
    ],
    familyAdventure: "If you have access to a VR headset (Quest, PlayStation VR, or phone-based viewer), explore together for 30 minutes. Try an educational experience (National Geographic VR, Google Earth VR, or a space exploration experience — many are free). Discuss: how did it feel different from watching a video about the same place? What surprised you? What would it be good for? What felt uncomfortable or unsatisfying? What would need to be different for it to replace physical classrooms or travel?",
    badge: "XR Pioneer",
    nextLesson: "fs-9-10-13"
  },
  {
    id: "fs-9-10-13",
    subject: "Future Skills",
    ageGroup: "9-10",
    band: "Upper Explorers",
    guide: "Byte",
    guideAnimal: "Fox",
    lessonNumber: 13,
    title: "3D Printing and Digital Fabrication",
    duration: "15–20 min",
    hook: "In 2023, surgeons implanted a bioprinted kidney grown from a patient's own cells. In Dubai, a 6,900 square foot building was 3D printed in 17 days. In California, a startup 3D printed rocket engines from a single continuous print. In developing countries, engineers print prosthetic limbs for children at $50 compared to $50,000 traditionally. 3D printing is transforming manufacturing, medicine, construction, and supply chains simultaneously.",
    bigIdea: "3D printing and digital fabrication enable complex shapes, customization, on-demand production, and distributed manufacturing at dramatically lower costs. Understanding these technologies reveals how physical goods are being 'softwarized'.",
    sections: [
      {
        title: "How 3D Printing Works",
        emoji: "🖨️",
        content: "3D printing (additive manufacturing) builds three-dimensional objects layer by layer — opposite of traditional subtractive manufacturing (cutting away material). Major types: FDM (Fused Deposition Modeling): melts plastic filament and extrudes in layers — most common consumer technology (Prusa, Bambu). SLA (Stereolithography): UV laser cures liquid resin — high detail for medical models, jewelry, dentistry. SLS (Selective Laser Sintering): laser fuses powder — strong industrial parts without support structures. Metal printing (DMLS/EBM): electron beams or lasers fuse metal powder — used for aerospace, medical implants, and tooling. Each technology has different cost, speed, material, and resolution tradeoffs."
      },
      {
        title: "Transformative Applications",
        emoji: "🏥",
        content: "Medicine: 3D printed surgical models from patient CT scans allow surgeons to practice before operations. Custom implants designed to exact patient anatomy. Bioprinting: printing living tissue using bioink (cells in gel) — aiming to print full organs for transplant. Dental industry largely converted to digital-to-3D-print workflow. Aerospace: Boeing and Airbus print hundreds of flight-critical parts. SpaceX's Raptor engine includes 3D printed components. Supply chain disruption: instead of shipping replacement parts worldwide, send design files and print locally. Construction: contour crafting prints building structures in concrete — enabling affordable housing at accelerated timelines."
      },
      {
        title: "The Softwarization of Physical Goods",
        emoji: "💾",
        content: "The most profound implication: physical objects becoming software. A product is no longer primarily its physical form — it's a digital design file. This changes: intellectual property (how do you protect a design that can be copied perfectly?), supply chains (inventory can shift from physical stock to digital libraries), customization (every object can be unique without cost penalty), distributed manufacturing (anyone with a printer becomes a manufacturer), geography of production (moves closer to consumption, reducing shipping). This parallels desktop publishing — just as anyone can publish text, anyone with a printer can manufacture physical objects."
      },
      {
        title: "Regulatory and Ethical Challenges",
        emoji: "⚖️",
        content: "3D printing creates genuine governance challenges. Weapons: 3D printed guns can bypass traditional registration and detection — ongoing legal battles about design file distribution. Pharmaceutical manufacturing: home printing of drugs could bypass drug safety regulations. Counterfeit products: luxury goods and aircraft parts can be printed to look identical to genuine items but without quality control. Medical regulation: who approves bioprinted tissues and organs for implantation? Intellectual property: design files are easily copied and shared — traditional IP protection barely applies. These aren't hypothetical — they're active legal and policy battles happening now."
      }
    ],
    activity: {
      title: "3D Design and Print",
      instructions: "Design a 3D object using Tinkercad (free browser-based 3D design tool). Create something useful: a custom phone stand, a nameplate, a small container with a lid, or an object you wish existed. Export as STL file. If you have access to a 3D printer (many libraries and maker spaces have them): print it. If not, submit to Shapeways or check if your school can print it. While designing, document: what constraints did you encounter? What would you need to know to design more complex objects? What industries could your design approach be applied to professionally?"
    },
    quiz: [
      {
        question: "What is the difference between additive and subtractive manufacturing?",
        answer: "Additive (3D printing) builds objects by adding material layer by layer; subtractive (machining) starts with a block and cuts material away — additive enables geometries impossible with subtractive methods",
        options: ["Additive uses digital files; subtractive uses physical molds", "Additive (3D printing) builds objects by adding material layer by layer; subtractive (machining) starts with a block and cuts material away — additive enables geometries impossible with subtractive methods", "Additive is for plastics; subtractive is for metals", "Additive adds color and finishing; subtractive builds structural form"]
      },
      {
        question: "What is bioprinting and what is its medical potential?",
        answer: "Printing living tissue using cells suspended in bioink gel — potentially enabling printed organs for transplant, eliminating donor waiting lists and rejection risk using patients' own cells",
        options: ["Printing sterilized medical instruments on demand", "Printing living tissue using cells suspended in bioink gel — potentially enabling printed organs for transplant, eliminating donor waiting lists and rejection risk using patients' own cells", "A technique for printing detailed anatomical models for medical education", "Biocompatible implant printing — materials the body accepts without rejection"]
      },
      {
        question: "What does 'softwarization of physical goods' mean?",
        answer: "Physical objects become primarily their digital design files — enabling perfect copying, distributed manufacturing, customization without cost penalty, and inventory as digital libraries",
        options: ["Physical products increasingly include embedded software — smart devices controlled by code", "Manufacturing processes are controlled by software — automation of factory floors", "Physical objects become primarily their digital design files — enabling perfect copying, distributed manufacturing, customization without cost penalty, and inventory as digital libraries", "Physical retail is replaced by digital purchase"]
      },
      {
        question: "What supply chain transformation does 3D printing enable?",
        answer: "Replacing physical inventory with digital design files — parts can be printed on-demand anywhere rather than manufactured centrally and shipped globally",
        options: ["3D printing eliminates suppliers entirely — companies produce all their own components", "3D printing speeds up traditional shipping — parts manufactured closer to ports", "Replacing physical inventory with digital design files — parts can be printed on-demand anywhere rather than manufactured centrally and shipped globally", "3D printing creates new supply chains of similar complexity to traditional manufacturing"]
      },
      {
        question: "What governance challenge do 3D printable weapons create?",
        answer: "Printed guns can bypass traditional registration, tracking, and metal detection systems — raising questions about how to regulate design files as a form of weapons manufacturing capability",
        options: ["3D printed weapons are physically inferior to traditional ones", "Printed guns can bypass traditional registration, tracking, and metal detection systems — raising questions about how to regulate design files as a form of weapons manufacturing capability", "All 3D printers can print functioning weapons — manufacturers must include government-disableable safeguards", "3D printed weapons primarily affect military procurement — civilian use is rare and easily detected"]
      }
    ],
    familyAdventure: "Visit a local makerspace, library with a 3D printer, or community college that offers 3D printing access (most are free or very low cost). Watch a print in progress if possible. Talk to people there about what they're building. Then look up 3D printed prosthetics for children (e-NABLE is a nonprofit making them globally). How does this technology change what's possible for people with limb differences? What other medical applications excite you?",
    badge: "Digital Fabricator",
    nextLesson: "fs-9-10-14"
  },
  {
    id: "fs-9-10-14",
    subject: "Future Skills",
    ageGroup: "9-10",
    band: "Upper Explorers",
    guide: "Byte",
    guideAnimal: "Fox",
    lessonNumber: 14,
    title: "Blockchain: The Technology Behind Crypto",
    duration: "15–20 min",
    hook: "The technology underlying cryptocurrency — blockchain — is potentially far more significant than cryptocurrency itself. A blockchain is a way to record and verify transactions without any central trusted authority — a technical solution to one of the oldest problems in human cooperation: how do you establish trust between strangers without a middleman?",
    bigIdea: "Blockchain is a decentralized, cryptographically secured distributed ledger that enables trustless record-keeping without central authority. Its applications extend beyond cryptocurrency to contracts, supply chains, identity, and any domain requiring verified records across untrusted parties.",
    sections: [
      {
        title: "How Blockchain Actually Works",
        emoji: "🔗",
        content: "A blockchain is a chain of 'blocks,' each containing: a set of transactions, a timestamp, a cryptographic hash of itself, and the hash of the previous block. A hash is a mathematical fingerprint: any change to a block's content produces a completely different hash. Changing block 50 makes block 51's 'previous hash' no longer match — invalidating all subsequent blocks. The distributed network: thousands of computers (nodes) hold identical copies. Any proposed change must be verified and agreed upon by the majority before being added. Combined, these properties make the blockchain: immutable (changing history requires redoing all subsequent blocks across the majority), transparent (anyone can verify), and decentralized (no single authority controls it)."
      },
      {
        title: "Consensus Mechanisms",
        emoji: "🤝",
        content: "The blockchain's trustless operation requires a consensus mechanism — how nodes agree on valid transactions without trusting each other. Proof of Work (Bitcoin): nodes compete to solve computationally expensive puzzles. The winner adds the next block and receives newly created cryptocurrency. This requires enormous energy — Bitcoin consumes more electricity than many countries. Proof of Stake (Ethereum post-2022): nodes stake cryptocurrency as collateral for the right to validate. Bad actors lose their stake. This uses 99.95% less energy than Proof of Work. Each mechanism tradeoffs security, decentralization, scalability, and energy efficiency differently."
      },
      {
        title: "Smart Contracts and Decentralized Applications",
        emoji: "📜",
        content: "Smart contracts are self-executing programs stored on the blockchain — they automatically execute when specified conditions are met, without human intermediaries. Example: a smart contract escrow holds payment until delivery is verified — the buyer pays in, the smart contract releases funds automatically when a trusted oracle confirms delivery. Use cases: DeFi (decentralized finance — lending, borrowing, trading without banks), NFTs (unique blockchain-recorded digital ownership certificates), supply chain tracking (recording provenance from origin to consumer), DAOs (organizations governed by code and token votes)."
      },
      {
        title: "Limitations and Reality Check",
        emoji: "⚠️",
        content: "The blockchain trilemma: you can have at most two of — decentralization, security, and scalability. Bitcoin and Ethereum prioritize decentralization and security at the cost of scalability (Bitcoin handles ~7 transactions/second; Visa handles ~24,000). The oracle problem: blockchain can verify on-chain data with certainty, but verifying real-world events requires trusted oracles — introducing centralization. Many claimed use cases don't actually need blockchain — a conventional database works better when users trust a central authority. Many blockchain applications from 2017-2022 failed to deliver practical value. The technology is genuinely innovative; distinguishing real use cases from solutions searching for problems requires critical evaluation."
      }
    ],
    activity: {
      title: "Blockchain Use Case Analysis",
      instructions: "Evaluate three proposed blockchain applications. For each, determine whether blockchain is actually necessary or whether a conventional database would work just as well. Applications: (1) A blockchain for tracking food supply chains from farm to table. (2) A blockchain for recording votes in elections. (3) A blockchain for managing patient health records. For each: What specific problem does it solve? Who are the parties that don't trust each other? Is decentralization actually needed? What are the specific blockchain advantages? What are the practical challenges? Is this a solution searching for a problem, or a genuine blockchain use case?"
    },
    quiz: [
      {
        question: "What makes blockchain records immutable?",
        answer: "Each block contains the previous block's hash — changing any block invalidates all subsequent blocks, requiring redoing all subsequent work across the majority of the network",
        options: ["Government regulations require blockchains to preserve all historical records", "Each block contains the previous block's hash — changing any block invalidates all subsequent blocks, requiring redoing all subsequent work across the majority of the network", "Blockchain records are stored on specialized hardware that physically prevents modification", "The decentralized network keeps multiple copies — changing one copy doesn't change others"]
      },
      {
        question: "What is the key difference between Proof of Work and Proof of Stake?",
        answer: "Proof of Work requires energy-intensive computation to validate; Proof of Stake uses deposited cryptocurrency as collateral — Ethereum's switch reduced energy use by 99.95%",
        options: ["Proof of Work uses decentralized validation; Proof of Stake uses elected validators", "Proof of Work is less secure; Proof of Stake is more secure", "Proof of Work requires energy-intensive computation to validate; Proof of Stake uses deposited cryptocurrency as collateral — Ethereum's switch reduced energy use by 99.95%", "Proof of Work validates amounts; Proof of Stake validates identities"]
      },
      {
        question: "What is a smart contract?",
        answer: "A self-executing program stored on the blockchain that automatically performs actions when specified conditions are met — without human intermediaries or central authority",
        options: ["A legally binding digital agreement with cryptographic signatures replacing paper contracts", "A self-executing program stored on the blockchain that automatically performs actions when specified conditions are met — without human intermediaries or central authority", "A type of token representing ownership of real-world contract rights", "An AI system that reviews and enforces contract terms automatically"]
      },
      {
        question: "What is the blockchain trilemma?",
        answer: "A system can have at most two of: decentralization, security, and scalability — optimizing all three simultaneously appears impossible with current approaches",
        options: ["Blockchain faces three regulatory challenges: privacy, securities, and anti-money laundering", "A system can have at most two of: decentralization, security, and scalability — optimizing all three simultaneously appears impossible with current approaches", "Three competing consensus mechanisms each have fatal flaws", "Blockchain developers must choose between consumer, enterprise, or government applications"]
      },
      {
        question: "What critical question determines whether blockchain is appropriate for a use case?",
        answer: "Do the parties involved distrust each other enough to require decentralization, or would a trusted central authority work just as well — many claimed blockchain use cases work better with conventional databases",
        options: ["Whether the data being recorded changes frequently — blockchain is inefficient for frequently updated records", "Do the parties involved distrust each other enough to require decentralization, or would a trusted central authority work just as well — many claimed blockchain use cases work better with conventional databases", "Whether transaction volume is high — blockchain performs poorly at scale", "Whether the application is financial — non-financial blockchain applications have rarely achieved adoption"]
      }
    ],
    familyAdventure: "Research Bitcoin's energy consumption together — the Cambridge Bitcoin Electricity Consumption Index (CBECI) tracks it in real time for free. Compare Bitcoin's annual energy use to a country approximately your size. Discuss: is this energy use justified? If Bitcoin moved to Proof of Stake like Ethereum, would this change your view? What does this reveal about how we evaluate technology tradeoffs between utility, energy, and environmental impact?",
    badge: "Blockchain Expert",
    nextLesson: "fs-9-10-15"
  },
  {
    id: "fs-9-10-15",
    subject: "Future Skills",
    ageGroup: "9-10",
    band: "Upper Explorers",
    guide: "Byte",
    guideAnimal: "Fox",
    lessonNumber: 15,
    title: "Climate Technology: Tech Solutions for Earth",
    duration: "15–20 min",
    hook: "The IEA projects that approximately half the emissions reductions needed to reach net zero by 2050 will come from technologies that don't yet exist commercially. The greatest technological challenge in human history — decarbonizing the global economy — will be solved substantially by people currently in school. The generation entering the workforce in the next decade will work on climate solutions that don't yet exist.",
    bigIdea: "Climate technology encompasses the full range of innovations needed to decarbonize the global economy — from mature renewable energy to emerging direct air capture, green hydrogen, and nuclear fusion. Understanding the technical landscape prepares you to contribute to the most important challenge of your generation.",
    sections: [
      {
        title: "The Technology Landscape",
        emoji: "🌍",
        content: "Climate technologies span a spectrum from mature to emerging. Mature and cost-competitive: solar PV, onshore wind, lithium-ion batteries, electric vehicles — these now compete economically without subsidy. Scaling rapidly: offshore wind, long-duration energy storage, heat pumps, green hydrogen, carbon capture and storage (CCS). Early stage: direct air capture (DAC), green aviation fuels, steel and cement decarbonization, advanced geothermal, small modular nuclear reactors. Research stage: nuclear fusion, carbon mineralization, space-based solar, engineered photosynthesis. Priority order: scale what's already cost-competitive, accelerate what's nearly there, invest in moonshots for hard-to-abate sectors."
      },
      {
        title: "Hard-to-Abate Sectors",
        emoji: "🏭",
        content: "Electricity and road transport are being decarbonized relatively rapidly with existing technology. Hard-to-abate sectors require genuinely new solutions. Steel: produced at 1,800°C using coal as both fuel and chemical reductant — green hydrogen or electrified approaches are emerging but cost-prohibitive at scale. Cement: calcination releases CO₂ regardless of energy source — requires carbon capture, novel formulations, or radical new materials. Aviation: current battery energy density is insufficient for long-haul flights — sustainable aviation fuels (SAF) and eventually hydrogen aircraft are the pathways. These sectors represent approximately 30% of global emissions."
      },
      {
        title: "Direct Air Capture and Carbon Removal",
        emoji: "🌿",
        content: "Even with rapid decarbonization, historical emissions have already committed significant warming. Carbon removal is increasingly seen as necessary alongside emissions reduction. Natural approaches: reforestation, soil carbon sequestration, blue carbon (coastal wetlands). Technological approaches: Direct Air Capture (DAC) — machines chemically extracting CO₂ from ambient air and mineralizing or storing it. Climeworks operates the world's largest commercial DAC plant, capturing ~4,000 tons CO₂/year at approximately $1,000/ton — too expensive at scale. Target: reduce DAC costs to under $100/ton for economic viability. Bioenergy with Carbon Capture (BECCS): grow biomass (absorbs CO₂), burn for energy, capture emissions — theoretically carbon-negative."
      },
      {
        title: "The Innovation Opportunity",
        emoji: "🚀",
        content: "Climate tech is one of the largest economic opportunities in history. The IEA estimates $4-5 trillion of annual clean energy investment is needed by 2030. This creates massive demand for engineers, scientists, designers, policymakers, entrepreneurs, and communicators. High-demand areas: battery materials science (better batteries for storage and transportation), grid engineering (managing renewable-dominated grids), carbon accounting and verification, circular economy design (products for reuse and regeneration), and climate finance (directing capital at required scale). This is not charity — it's the largest capital reallocation in economic history, creating extraordinary career opportunities."
      }
    ],
    activity: {
      title: "Climate Tech Investment Case",
      instructions: "You have $10 million to invest in climate technology. Research at least 5 real companies or approaches (search CrunchBase, ClimateBase, or simply 'climate tech companies 2024'). For each, evaluate: what problem does it solve? How mature is the technology? What is its emissions reduction potential at scale? What are the main technical and commercial risks? Now allocate your $10 million and write a 1-page investment thesis: why these technologies, what returns do you expect (financial and climate), what would need to be true for each investment to succeed?"
    },
    quiz: [
      {
        question: "What does the IEA project about technologies needed for net zero by 2050?",
        answer: "Approximately half the required emissions reductions will come from technologies that don't yet exist commercially — making the current student generation pivotal for developing them",
        options: ["All required technologies exist — the challenge is deployment speed and political will, not innovation", "About 10% of reductions require new technologies; 90% are achievable with currently deployed solutions", "Approximately half the required emissions reductions will come from technologies that don't yet exist commercially — making the current student generation pivotal for developing them", "Nuclear fusion will provide 80% of reductions needed — expected to be ready within 15 years"]
      },
      {
        question: "Why is cement decarbonization particularly technically difficult?",
        answer: "The calcination process (converting limestone to lime) chemically releases CO₂ regardless of energy source — switching to renewable energy doesn't solve the inherent chemistry",
        options: ["Cement production requires temperatures that only coal can economically reach", "Cement is produced in countries without renewable energy infrastructure", "The calcination process (converting limestone to lime) chemically releases CO₂ regardless of energy source — switching to renewable energy doesn't solve the inherent chemistry", "Cement demand is growing faster than decarbonization technology can scale"]
      },
      {
        question: "What is direct air capture (DAC) and what is its current cost challenge?",
        answer: "Machines that chemically extract CO₂ from ambient air — currently costs ~$1,000/ton CO₂ removed vs the target of under $100/ton needed for economic viability at scale",
        options: ["Specially bred trees absorbing atmospheric CO₂ at higher-than-normal rates", "Machines that chemically extract CO₂ from ambient air — currently costs ~$1,000/ton CO₂ removed vs the target of under $100/ton needed for economic viability at scale", "A filter system in industrial stacks capturing CO₂ before it reaches the atmosphere", "An agricultural technique sequestering CO₂ in soil through specific farming practices"]
      },
      {
        question: "Why is aviation particularly difficult to decarbonize?",
        answer: "Current battery energy density is far too low for long-haul flights — the weight of batteries needed would make the aircraft unable to take off; sustainable aviation fuels and eventually hydrogen are the pathways",
        options: ["Aviation is already decarbonized — modern jet engines are so efficient that per-passenger emissions are lower than ground transport", "Aviation represents only 2% of global emissions — technically straightforward but economically low-priority", "Current battery energy density is far too low for long-haul flights — the weight of batteries needed would make the aircraft unable to take off; sustainable aviation fuels and eventually hydrogen are the pathways", "Airlines have signed binding emissions agreements that cap aviation's contribution"]
      },
      {
        question: "What career opportunities does climate technology create?",
        answer: "Battery materials science, grid engineering, carbon accounting, circular economy design, climate finance — $4-5 trillion annual investment creates massive demand across engineering, science, business, and policy",
        options: ["Primarily engineering and computer science — climate tech is fundamentally a technical challenge", "Environmental advocacy and policy — the solutions exist technically; communication is the primary opportunity", "Battery materials science, grid engineering, carbon accounting, circular economy design, climate finance — $4-5 trillion annual investment creates massive demand across engineering, science, business, and policy", "Research only — climate technology solutions require decades of basic science before commercial applications"]
      }
    ],
    familyAdventure: "Research your family's carbon footprint from transportation specifically. Calculate: annual miles driven × your car's CO₂ per mile (EPA fueleconomy.gov lists this for every vehicle). Annual flights (a round-trip transcontinental flight is approximately 1.5 tons CO₂ per person). Compare to: what an EV would produce, what public transit would produce. Which climate tech investment would most reduce your family's footprint? Is there a climate tech career any family member would find interesting?",
    badge: "Climate Tech Innovator",
    nextLesson: "fs-9-10-16"
  },
  {
    id: "fs-9-10-16",
    subject: "Future Skills",
    ageGroup: "9-10",
    band: "Upper Explorers",
    guide: "Byte",
    guideAnimal: "Fox",
    lessonNumber: 16,
    title: "Biotech: Technology Meets Biology",
    duration: "15–20 min",
    hook: "In 2020, Oxford and AstraZeneca developed a COVID-19 vaccine in 11 months — what previously would have taken 10-15 years. In 2023, the first CRISPR-based therapy for sickle cell disease was approved, potentially curing a disease that has caused generations of suffering. Biology is becoming programmable — and the implications, for medicine, food, energy, and what it means to be human, are extraordinary.",
    bigIdea: "Biotechnology applies engineering principles to biological systems — enabling programmable medicine, sustainable food production, and biological manufacturing. It promises extraordinary benefits and raises profound ethical questions simultaneously.",
    sections: [
      {
        title: "CRISPR: The Gene Editing Revolution",
        emoji: "✂️",
        content: "CRISPR-Cas9 (from bacterial immune systems) allows precise editing of DNA sequences. How it works: a guide RNA leads the Cas9 enzyme to a specific DNA sequence; Cas9 cuts both strands; the cell's repair mechanisms then disable the gene or insert new genetic material. CRISPR is: faster, cheaper, more precise, and more flexible than previous gene editing tools. Applications: treating genetic diseases (sickle cell, beta-thalassemia — first approved 2023), developing disease-resistant crops, creating malaria-resistant mosquitoes, potential cancer therapies. The concern: germline editing (editing embryos with heritable changes) raises profound ethical questions about 'designer babies' and genetic inequality."
      },
      {
        title: "mRNA Technology and Vaccines",
        emoji: "💉",
        content: "mRNA vaccines deliver temporary genetic instructions telling your cells to produce a specific protein — training the immune system without the pathogen or permanent genetic modification. The mRNA degrades within days; it never enters the cell nucleus or interacts with DNA. Speed advantage: once the pathogen's sequence is known, an mRNA vaccine can be designed and manufactured in days rather than months. Future applications: personalized cancer vaccines (designed to match an individual patient's tumor mutations), HIV vaccines (in trials), universal flu vaccines, autoimmune disease treatments. This platform was decades in development before COVID demonstrated its power."
      },
      {
        title: "Synthetic Biology and Biological Manufacturing",
        emoji: "🧫",
        content: "Synthetic biology treats biological systems as programmable — designing new biological parts or redesigning existing natural systems. Examples: engineered microbes that produce insulin (now standard for diabetes treatment — previously extracted from pig pancreases), artemisinin (malaria drug) produced in engineered yeast rather than extracted from scarce plants, lab-grown meat (culturing animal cells without the full animal), biofuels from engineered algae or bacteria, spider silk proteins produced in goat milk. The iGEM Foundation runs competitions for high school and university students designing biological systems — demonstrating this is accessible to motivated young people."
      },
      {
        title: "Ethics and Governance of Biotechnology",
        emoji: "⚖️",
        content: "Biotechnology's power creates governance challenges. Designer babies: in 2018, Chinese scientist He Jiankui edited embryos of twin girls to be HIV-resistant — the first human germline editing birth. He was imprisoned for 3 years. International scientific consensus: germline editing for anything other than treating serious disease is premature and ethically problematic given heritable consequences for all future generations. Dual use: genetic engineering knowledge that enables life-saving medicine also potentially enables biological weapons. Equity: if gene therapies cost $3 million per treatment (as some do), who benefits? Access across global economic divides will be a defining justice question of your generation."
      }
    ],
    activity: {
      title: "Biotech Ethics Case",
      instructions: "Research and write an ethical analysis of one biotech application: (1) Germline gene editing to prevent heritable disease, (2) Lab-grown meat at commercial scale, (3) CRISPR-based gene drives to eliminate malaria mosquitoes, or (4) Gene therapy costing $3 million per patient. For your case: what are the specific benefits? What are the specific risks (technical, social, ethical)? Who benefits and who bears the risk? What regulatory framework currently applies? What do you think should apply? What would you decide if you were on the ethics board — and why? Wrestle genuinely with the complexity."
    },
    quiz: [
      {
        question: "How does CRISPR-Cas9 gene editing work?",
        answer: "A guide RNA leads the Cas9 enzyme to a specific DNA sequence; Cas9 cuts both strands; cell repair mechanisms then disable the gene or allow insertion of new genetic material",
        options: ["CRISPR uses viral vectors to deliver new DNA sequences that replace existing genes", "A guide RNA leads the Cas9 enzyme to a specific DNA sequence; Cas9 cuts both strands; cell repair mechanisms then disable the gene or allow insertion of new genetic material", "Electrical pulses temporarily open cell membranes allowing corrected DNA to enter", "Nano-scale robotic devices physically splice and replace DNA sequences"]
      },
      {
        question: "What makes mRNA vaccines a platform technology?",
        answer: "Once the pathogen sequence is known, vaccine design and manufacturing takes days — the same platform can be rapidly reconfigured for different diseases without developing new manufacturing processes",
        options: ["mRNA vaccines can be manufactured by anyone — the technology is open-source", "Once the pathogen sequence is known, vaccine design and manufacturing takes days — the same platform can be rapidly reconfigured for different diseases without developing new manufacturing processes", "mRNA vaccines work for all pathogens — the single platform eliminates disease-specific development", "mRNA vaccines have no side effects — the technology is inherently safer than traditional approaches"]
      },
      {
        question: "What is synthetic biology?",
        answer: "Treating biological systems as programmable — designing new biological parts, devices, and systems or redesigning natural ones for applications from medicine to food to energy",
        options: ["Creating artificial life forms from non-biological materials", "Treating biological systems as programmable — designing new biological parts, devices, and systems or redesigning natural ones for applications from medicine to food to energy", "Studying natural biological systems to inspire synthetic (non-biological) technologies", "Producing biological products in laboratory settings rather than harvesting from nature"]
      },
      {
        question: "Why was He Jiankui's 2018 germline editing experiment controversial?",
        answer: "He produced the first babies with heritable gene edits without clear medical necessity and without adequate ethical review — creating permanent genetic changes that will be passed to all future descendants of those children",
        options: ["His technique was scientifically flawed — the edits created unintended mutations harming the children", "He conducted the experiment without government permission — the issue was regulatory non-compliance", "He produced the first babies with heritable gene edits without clear medical necessity and without adequate ethical review — creating permanent genetic changes that will be passed to all future descendants of those children", "His use of CRISPR violated patents held by other researchers — the controversy was primarily about intellectual property"]
      },
      {
        question: "What is the equity concern with gene therapies that cost $3 million per treatment?",
        answer: "If life-saving genetic treatments are only accessible to the very wealthy, the technology exacerbates health inequality — creating biological class distinctions between those who can afford genetic enhancement and those who cannot",
        options: ["High costs prevent development of additional gene therapies — the profitability challenge is about innovation pace", "If life-saving genetic treatments are only accessible to the very wealthy, the technology exacerbates health inequality — creating biological class distinctions between those who can afford genetic enhancement and those who cannot", "Expensive treatments create market incentives for cheaper alternatives — high prices accelerate cost reduction", "The cost concern is primarily about insurance systems — biotech companies are not responsible for healthcare financing"]
      }
    ],
    familyAdventure: "Research the history of insulin production together. Before 1982, diabetics used insulin extracted from pig or cow pancreases. In 1982, Eli Lilly introduced the first synthetic human insulin made by genetically engineered bacteria — the first commercially produced genetically engineered drug. How did this change diabetes treatment? What does this story reveal about the potential of synthetic biology? What current disease do you most hope synthetic biology will address in the next decade?",
    badge: "Biotech Explorer",
    nextLesson: "fs-9-10-17"
  },
  {
    id: "fs-9-10-17",
    subject: "Future Skills",
    ageGroup: "9-10",
    band: "Upper Explorers",
    guide: "Byte",
    guideAnimal: "Fox",
    lessonNumber: 17,
    title: "Space Technology: The New Space Race",
    duration: "15–20 min",
    hook: "In 2024, SpaceX's Starship — the largest rocket ever built — successfully returned its Super Heavy booster to the launch tower by catching it with mechanical arms, something once considered science fiction. SpaceX has already reduced the cost of launching a kilogram to orbit by 90%. A new space race is underway — but unlike the 1960s Cold War competition between superpowers, this one involves private companies, dozens of countries, and ambitions that extend to permanent settlements on the Moon and Mars. The next generation of humans may be born off-Earth.",
    bigIdea: "The commercial space revolution — driven by reusable rockets, miniaturized satellites, and private investment — is transforming what is possible in orbit and beyond, creating new industries and geopolitical competition simultaneously.",
    sections: [
      {
        title: "The Commercial Space Revolution",
        emoji: "🚀",
        content: "Until the 2000s, space was almost exclusively a government domain — NASA, ESA, Roscosmos. The cost of launching to orbit: ~$50,000/kg on the Space Shuttle. SpaceX's reusable Falcon 9 has driven this to ~$2,700/kg. Starship aims for under $100/kg — making space dramatically more accessible. This cost reduction has enabled: thousands of small satellites (SpaceX Starlink now has ~6,000 in orbit providing global internet), commercial space stations (Axiom Space building the first private station), space tourism (Blue Origin, Virgin Galactic carrying paying passengers), and the commercial cargo and crew programs that supply the ISS. The shift: government as customer and regulator, private companies as operators — fundamentally changing the economics of space."
      },
      {
        title: "Satellite Technology and Its Applications",
        emoji: "🛰️",
        content: "Modern satellites are transforming life on Earth. Global internet connectivity: SpaceX Starlink, Amazon Kuiper, and others provide broadband to previously unconnected areas — approximately 2.9 billion people still lack internet access. Earth observation: commercial satellites image every point on Earth's surface daily — enabling climate monitoring, agricultural optimization, disaster response, and military intelligence. GPS and timing: the infrastructure underlying all navigation, financial transactions, and telecommunications depends on satellite atomic clocks. Satellite-based early warning systems detect missile launches, forest fires, and ocean oil spills in near-real-time. The concern: orbital debris — approximately 27,000 tracked pieces of space debris create collision risks; Kessler syndrome (a cascade of collisions generating debris) could close off certain orbits."
      },
      {
        title: "Moon, Mars, and Beyond",
        emoji: "🌕",
        content: "NASA's Artemis program aims to return humans to the Moon by the mid-2020s — this time to stay, establishing a sustainable lunar presence. The Lunar Gateway is a planned space station orbiting the Moon. Commercial lunar landers (Intuitive Machines, Astrobotic) are already delivering payloads. The strategic motivation beyond exploration: the Moon has helium-3 (potential fusion fuel), water ice at the poles (drinkable, and splittable into hydrogen and oxygen rocket propellant), and rare earth elements. Mars: SpaceX's stated goal is establishing a self-sustaining city on Mars within decades. The challenges are formidable: 6-9 month transit, radiation exposure, psychological isolation, and life support requirements. Whether humans reach Mars by 2040 or 2070, the generation alive today will likely see it."
      },
      {
        title: "Geopolitics and Space Governance",
        emoji: "🌍",
        content: "Space is becoming contested terrain. China's space program has accelerated dramatically — the Tiangong space station is operational, Chang'e missions have returned lunar samples, and China aims to land humans on the Moon by 2030. This creates geopolitical competition over lunar resources, orbital slots, and space-based military capabilities. Space governance: the 1967 Outer Space Treaty (written during the Apollo era) prohibits national appropriation of celestial bodies but doesn't address commercial extraction — leaving a significant legal ambiguity that the US, Luxembourg, and UAE have addressed with national legislation allowing companies to own resources they extract. Defining the rules for humanity's expansion beyond Earth is one of the most consequential governance challenges of the coming century."
      }
    ],
    activity: {
      title: "Space Mission Design",
      instructions: "Design a mission to achieve one of these goals: (1) Establish the first permanent lunar base, (2) Mine water ice from the lunar poles for rocket propellant, (3) Deploy a constellation of Earth observation satellites for climate monitoring, or (4) Send the first crewed Mars mission. For your mission: what is the specific objective? What technology is required (launch vehicle, spacecraft, life support, power)? What are the main technical challenges? What is the estimated cost and timeline? What are the risks? Who would fund it (government, private, international partnership)? What would success look like? Present as a mission proposal to NASA's administrator."
    },
    quiz: [
      {
        question: "By how much has SpaceX reduced the cost of launching a kilogram to orbit?",
        answer: "Approximately 90% — from ~$50,000/kg on the Space Shuttle to ~$2,700/kg on Falcon 9, with Starship targeting under $100/kg",
        options: ["About 30% — costs have improved modestly but space access remains primarily affordable only to governments", "About 60% — a significant reduction but space remains economically out of reach for most commercial applications", "Approximately 90% — from ~$50,000/kg on the Space Shuttle to ~$2,700/kg on Falcon 9, with Starship targeting under $100/kg", "About 50% — SpaceX has halved launch costs but competing launch providers have maintained higher market prices"]
      },
      {
        question: "What is Kessler syndrome and why does it threaten space access?",
        answer: "A cascade of orbital debris collisions where each collision generates more debris, which causes more collisions — potentially closing off certain orbits to all spacecraft indefinitely",
        options: ["A radiation belt anomaly that periodically damages satellites in low Earth orbit — named after the scientist who modeled it", "A cascade of orbital debris collisions where each collision generates more debris, which causes more collisions — potentially closing off certain orbits to all spacecraft indefinitely", "The economic syndrome where falling launch costs create too many satellites — overcrowding orbits and reducing the commercial value of space access", "A regulatory framework for international coordination of satellite orbital slots — developed to prevent radio frequency interference between satellites"]
      },
      {
        question: "What makes the Moon's poles strategically important?",
        answer: "Water ice deposits that can be used for drinking water and split into hydrogen and oxygen for rocket propellant — potentially enabling the Moon as a fuel depot for deeper space missions",
        options: ["The poles receive constant sunlight — making them ideal locations for solar power generation for lunar bases", "Water ice deposits that can be used for drinking water and split into hydrogen and oxygen for rocket propellant — potentially enabling the Moon as a fuel depot for deeper space missions", "The poles are geologically stable — with no seismic activity making them the safest locations for permanent structures", "Polar regions have lower gravity — making launch operations from the Moon's poles significantly more energy-efficient"]
      },
      {
        question: "What legal ambiguity exists in space governance regarding commercial resource extraction?",
        answer: "The 1967 Outer Space Treaty prohibits national appropriation of celestial bodies but doesn't address commercial companies owning resources they extract — different countries have addressed this differently with national legislation",
        options: ["No legal framework exists for space activities — all commercial space operations exist in a complete legal vacuum until international treaties are updated", "The Outer Space Treaty gives the UN authority over all space resources — commercial extraction requires UN approval that has never been granted", "The 1967 Outer Space Treaty prohibits national appropriation of celestial bodies but doesn't address commercial companies owning resources they extract — different countries have addressed this differently with national legislation", "Commercial space operations are regulated by the country of the launch vehicle's origin — which creates conflicting requirements for internationally funded missions"]
      },
      {
        question: "How has the commercial space model changed the relationship between governments and space companies?",
        answer: "Government shifted from primary operator to customer and regulator — private companies build and operate spacecraft while governments purchase services and set rules, dramatically reducing costs through market competition",
        options: ["Governments have exited space entirely — all space operations are now commercial with no government involvement", "Governments fund research; companies handle manufacturing — a traditional procurement relationship similar to defense contracting", "Government shifted from primary operator to customer and regulator — private companies build and operate spacecraft while governments purchase services and set rules, dramatically reducing costs through market competition", "Companies fund initial development; governments take ownership once proven — a reverse procurement model where commercial risk is privatized and operational assets are nationalized"]
      }
    ],
    familyAdventure: "Watch a SpaceX rocket launch live (they stream on YouTube — launches happen frequently). After watching, discuss: what surprised you about how it actually looks and sounds? Look up the cost difference between the Space Shuttle and Falcon 9 per kilogram — what does that price reduction mean for who can access space? Research: what jobs in the space industry would you find most interesting? What education would those jobs require? The space industry is one of the fastest-growing in the world right now.",
    badge: "Space Technology Explorer",
    nextLesson: "fs-9-10-18"
  },
  {
    id: "fs-9-10-18",
    subject: "Future Skills",
    ageGroup: "9-10",
    band: "Upper Explorers",
    guide: "Byte",
    guideAnimal: "Fox",
    lessonNumber: 18,
    title: "Social Media Algorithms and Their Impact",
    duration: "15–20 min",
    hook: "In 2021, Frances Haugen — a former Facebook data scientist — leaked thousands of internal documents showing the company knew its algorithms amplified outrage, harmed teenage girls' mental health, and spread misinformation, and chose engagement metrics over user wellbeing. Her testimony before the US Senate included this: 'Facebook's own research shows that it is capable of making changes that would reduce hate speech, violence, misinformation, and political unrest at the cost of making people angrier and causing them to interact with the platform less.' The algorithm chose engagement. Understanding how these algorithms work is understanding one of the most powerful forces shaping what you believe, how you feel, and who you become.",
    bigIdea: "Social media algorithms are designed to maximize engagement — not wellbeing, truth, or meaningful connection. Understanding their mechanics and effects transforms you from a passive subject of algorithmic influence to a deliberate user who can make informed choices.",
    sections: [
      {
        title: "How Recommendation Algorithms Work",
        emoji: "⚙️",
        content: "Recommendation algorithms predict what content will keep you engaged longest. They track: what you watch to completion vs skip, what you like and share, how long you pause on each post, who you message, what time of day you're most active, what similar users engage with, and your demographic data. This data trains machine learning models that predict your responses to new content. The optimization target: engagement metrics (watch time, likes, comments, shares, return visits). The algorithm doesn't understand content — it finds statistical correlations between content features and engagement. An important consequence: content that generates strong emotional reactions (anger, fear, outrage, desire) consistently outperforms emotionally neutral content in engagement — regardless of its accuracy or benefit to the user."
      },
      {
        title: "The Mental Health Connection",
        emoji: "🧠",
        content: "Research on social media and mental health is nuanced but concerning for specific populations. Facebook's own internal research (leaked by Haugen) found: Instagram makes body image issues worse for 1 in 3 teenage girls, teen girls who use Instagram extensively are more likely to experience depression and anxiety, and this effect was documented and not disclosed. Independent research: Jonathan Haidt's work (The Anxious Generation) documents dramatic increases in teen depression, anxiety, and self-harm beginning around 2012 — coinciding with smartphone and social media adoption. The mechanism: social comparison at unprecedented scale, curated perfection, cyberbullying at all hours, sleep displacement, and displacement of face-to-face socializing. The effect is not uniform — passive scrolling appears more harmful than active engagement, and the effect is stronger for girls than boys."
      },
      {
        title: "Filter Bubbles and Political Polarization",
        emoji: "🫧",
        content: "Eli Pariser coined 'filter bubble' in 2011 to describe how personalization algorithms create information environments where users primarily see content confirming their existing views. The mechanism: content confirming existing beliefs generates more positive engagement (likes, shares) than challenging content — so the algorithm serves more confirming content — strengthening existing views — which generates more positive engagement for even more extreme confirming content. This feedback loop can push users toward increasingly extreme content over time. Facebook's internal research found the algorithm recommended 'outrage'-inducing political content because it generated more engagement. The real-world consequence: people across political divides are encountering increasingly different information realities — making meaningful democratic conversation more difficult."
      },
      {
        title: "Navigating Algorithms Deliberately",
        emoji: "🧭",
        content: "Being algorithmically literate means using platforms with awareness of their mechanics. Practical approaches: follow the engagement — notice when a platform is making you feel worse (anxious, envious, angry, inadequate) and recognize that as the algorithm working as designed. Actively curate your feed — unlike and unfollow content that doesn't serve you; the algorithm learns from this. Time limits — platforms are designed to eliminate natural stopping points; external limits resist this design. Intentional use vs habitual use — opening a platform with a specific purpose differs from opening it from boredom. Turn off notifications — each notification is algorithmically selected to pull you back at the most effective moment. Seek out primary sources — go directly to creators and topics you care about rather than relying on algorithmic discovery."
      }
    ],
    activity: {
      title: "Algorithm Audit",
      instructions: "Conduct a one-week social media algorithm audit. Track each day: how long you spent on social media (screen time), how you felt before and after each session (1-10 emotional state), what types of content appeared most frequently, whether the content made you feel better or worse, and whether you chose to open the app or were pulled in by a notification. At the end of the week: analyze your data. What patterns do you see? What is the algorithm showing you, and why might it be showing you that specifically? What changes would you make to use social media more intentionally? Design your personal social media protocol — specific rules for your own use."
    },
    quiz: [
      {
        question: "What do social media recommendation algorithms primarily optimize for?",
        answer: "Engagement metrics (watch time, likes, shares, return visits) — not user wellbeing, truth, or meaningful connection; content generating strong emotional reactions consistently outperforms neutral content",
        options: ["Content quality as rated by human reviewers — platforms invest heavily in editorial teams to curate recommendation quality", "User satisfaction as measured by periodic surveys — algorithms are tuned to maximize reported happiness with the platform", "Engagement metrics (watch time, likes, shares, return visits) — not user wellbeing, truth, or meaningful connection; content generating strong emotional reactions consistently outperforms neutral content", "Advertiser preferences — algorithms prioritize content adjacent to paying advertisers to maximize commercial revenue"]
      },
      {
        question: "What did Facebook's internal research (leaked by Haugen) find about Instagram and teenage girls?",
        answer: "Instagram makes body image issues worse for 1 in 3 teenage girls; extensive use is linked to higher rates of depression and anxiety — findings that were documented internally but not publicly disclosed",
        options: ["Instagram has no measurable effect on teenage girls' mental health — the concerns were found to be statistically insignificant in Facebook's own research", "Instagram makes body image issues worse for 1 in 3 teenage girls; extensive use is linked to higher rates of depression and anxiety — findings that were documented internally but not publicly disclosed", "Teenage girls who use Instagram extensively show improved social skills and reduced loneliness compared to non-users", "The research was inconclusive — Facebook could not determine whether Instagram caused mental health issues or attracted users who already had them"]
      },
      {
        question: "What is a filter bubble?",
        answer: "A personalized information environment where algorithms primarily show content confirming existing beliefs — creating a feedback loop that can push users toward increasingly extreme content",
        options: ["A spam filter that prevents unwanted content from reaching users — creating a bubble of only desired content types", "A personalized information environment where algorithms primarily show content confirming existing beliefs — creating a feedback loop that can push users toward increasingly extreme content", "A privacy feature that prevents platforms from collecting data about sensitive topics — protecting vulnerable users from targeted advertising", "A social circle of like-minded friends on social media — distinct from the algorithmic mechanism because it's user-created rather than algorithmic"]
      },
      {
        question: "What does research suggest about passive scrolling vs active engagement on social media?",
        answer: "Passive scrolling (consuming without interacting) appears more mentally harmful than active engagement — the comparison and consumption mode is more associated with negative outcomes",
        options: ["Active engagement is more harmful — posting and commenting creates vulnerability to negative feedback that passive scrolling avoids", "No difference has been found between passive and active use — the amount of time is what determines mental health outcomes", "Passive scrolling (consuming without interacting) appears more mentally harmful than active engagement — the comparison and consumption mode is more associated with negative outcomes", "Active engagement is beneficial while passive scrolling is neutral — only creating and sharing positive content produces negative outcomes"]
      },
      {
        question: "Why do notifications represent a specifically powerful form of algorithmic influence?",
        answer: "Each notification is algorithmically selected for maximum pull — sent at the moment most likely to get you to return, using content most likely to generate strong emotional response",
        options: ["Notifications require explicit consent — they represent the user's active choice to be pulled back, making them less manipulative than passive feed design", "Notifications are sent at random — they represent the platform's inability to predict user behavior rather than a deliberate optimization", "Each notification is algorithmically selected for maximum pull — sent at the moment most likely to get you to return, using content most likely to generate strong emotional response", "Notifications are regulated by carriers — platforms have limited ability to customize their timing and content beyond basic preference settings"]
      }
    ],
    familyAdventure: "Do a family 'digital detox' experiment. For one week, each person reduces social media use by at least 50% — track screen time before and after. At the end of the week, share: how did it feel the first day? The third day? The seventh? Did your mood, sleep, or focus change? What did you do with the time instead? What does this reveal about your relationship with these platforms? Discuss: what are the right personal rules for social media use in your family? What should governments require platforms to do differently?",
    badge: "Algorithm Analyst",
    nextLesson: "fs-9-10-19"
  },
  {
    id: "fs-9-10-19",
    subject: "Future Skills",
    ageGroup: "9-10",
    band: "Upper Explorers",
    guide: "Byte",
    guideAnimal: "Fox",
    lessonNumber: 19,
    title: "Digital Entrepreneurship: Building Online",
    duration: "15–20 min",
    hook: "A 14-year-old built a website about cell phones in 2005 and sold it to AOL for $25 million two years later. A 16-year-old started a YouTube channel about Minecraft in 2010 and now has 40 million subscribers. A 12-year-old launched an online tutoring service during COVID lockdowns and earned $10,000 in her first year. The internet has fundamentally changed what is possible for young builders — not in theory, but in documented reality. The barriers between idea and online business have never been lower. The question is not whether you could build something online. It's what you want to build.",
    bigIdea: "Digital entrepreneurship enables building scalable online businesses with minimal capital — through content creation, software products, digital services, marketplaces, or communities. The barriers to starting have never been lower; the skills to succeed are learnable.",
    sections: [
      {
        title: "Digital Business Models",
        emoji: "💻",
        content: "Online businesses follow several distinct models. Software as a Service (SaaS): a web application users pay monthly to access — subscription revenue compounds beautifully. Marketplace: connecting buyers and sellers and taking a percentage (eBay, Airbnb, Etsy — all started as simple connection mechanisms). Content/Media: building audience through content, monetizing through advertising, sponsorships, or subscriptions. E-commerce: selling physical or digital products online. Community: membership communities around shared interest, paid or free-with-paid-tier. Education/Coaching: knowledge products (courses, coaching, consulting) at scale. Agency/Services: providing digital services (design, marketing, development) to businesses. The digital advantage: each model can theoretically serve millions with minimal marginal cost — the economics of scale are radically better than physical businesses."
      },
      {
        title: "The Creator Economy Playbook",
        emoji: "🎬",
        content: "Building a creator-based business: pick a specific niche (the narrower, the better — 'Minecraft tutorials for adults learning to code' outperforms 'gaming content' for audience building). Commit to consistent content production — algorithm momentum builds with regular publishing. Build across platforms but own your email list — platforms can change algorithms or ban accounts; email subscribers are yours. Monetize in layers as you grow: start with affiliate marketing (recommend products, earn commission), add sponsorships (brand pays for access to your audience), sell your own products (courses, books, templates), add premium subscription/community. The most important metric early: engagement rate and audience quality, not raw numbers. 1,000 true fans who trust your recommendations are worth more than 100,000 passive followers."
      },
      {
        title: "Building a SaaS Product",
        emoji: "🔧",
        content: "Software as a Service is the most scalable digital business model — build once, sell to unlimited users with minimal marginal cost. The path: identify a workflow pain point for a specific audience (small business owners, photographers, teachers), validate that people will pay (interview 20 potential customers before building, get pre-orders), build a minimum viable product (the simplest version that solves the core problem), launch to an early adopter community, iterate based on user feedback, scale distribution. Tools that enable no-code or low-code SaaS building: Bubble, Webflow, Airtable — allowing non-developers to build working applications. The challenge: distribution (getting your product in front of customers) is harder than building, especially for first-time founders."
      },
      {
        title: "Starting Today: Real First Steps",
        emoji: "🚀",
        content: "What can you actually do right now? Start creating content in a niche you genuinely know — YouTube, TikTok, or a blog. The practice of creating consistently, getting feedback, and improving is the most important early learning. Build something small that solves a problem you have — even if it's just a useful spreadsheet template. Learn one technical skill deeply — HTML/CSS, Python, video editing, graphic design. Participate in communities of builders — Indie Hackers, Product Hunt, Starter Story document real entrepreneurs building online businesses. Enter competitions — many have youth tracks. The most important thing is to start before you're ready, build something real (even tiny), and learn from what happens. The entrepreneur who has shipped 10 imperfect products knows more than the one who has planned 100 perfect ones."
      }
    ],
    activity: {
      title: "Launch Something",
      instructions: "Build and launch a real digital product this week. It must be real — something that actually exists online and could theoretically be used or purchased by someone. Options: (1) A resource page on a topic you know well — host it free on Notion, Carrd, or Google Sites. (2) A digital product (template, checklist, guide) listed for sale on Gumroad (free to list, they take a percentage). (3) A simple tool using Glide or Carrd. (4) A YouTube video or short-form content piece. (5) An Etsy listing for a digital download you create. After launching: share the link with 5 people you don't know. Get one piece of real feedback. What happened? What did you learn? What would you do differently?"
    },
    quiz: [
      {
        question: "What makes SaaS the most scalable digital business model?",
        answer: "Software is built once and sold to unlimited users with minimal marginal cost — unlike physical products or services, each additional customer costs almost nothing to serve",
        options: ["SaaS requires the least technical knowledge to build — no-code tools make it accessible to non-developers at any age", "Software is built once and sold to unlimited users with minimal marginal cost — unlike physical products or services, each additional customer costs almost nothing to serve", "SaaS receives preferential tax treatment — software subscriptions are taxed at lower rates than other business models", "Subscription revenue is legally protected — customers who subscribe cannot cancel for a minimum period, providing guaranteed income"]
      },
      {
        question: "What is the '1,000 true fans' concept and why does audience quality matter more than size?",
        answer: "1,000 genuinely engaged fans who trust your recommendations are economically more valuable than 100,000 passive followers — true fans buy products, refer others, and generate sustainable revenue",
        options: ["1,000 fans is the minimum threshold for platform monetization — below this count, creator revenue programs don't activate", "1,000 genuinely engaged fans who trust your recommendations are economically more valuable than 100,000 passive followers — true fans buy products, refer others, and generate sustainable revenue", "The number 1,000 was chosen because it represents the point where word-of-mouth growth becomes self-sustaining without additional marketing", "Engagement rate algorithms give 1,000-follower accounts priority in recommendations — making small engaged audiences grow faster than large passive ones"]
      },
      {
        question: "Why is owning an email list more valuable than having social media followers?",
        answer: "Platforms can change algorithms, ban accounts, or disappear — email subscribers are directly accessible regardless of platform decisions, making them an owned audience",
        options: ["Email marketing has higher conversion rates than social media — the ROI from email promotions consistently exceeds social media promotions", "Email subscribers have explicitly opted in — making them legally protected from being counted as spam under CAN-SPAM regulations", "Platforms can change algorithms, ban accounts, or disappear — email subscribers are directly accessible regardless of platform decisions, making them an owned audience", "Email lists are more valuable because older demographics (with more purchasing power) prefer email over social media"]
      },
      {
        question: "What is the most important thing to do before building a SaaS product?",
        answer: "Validate that people will pay — interview 20 potential customers before building, ideally getting pre-orders; distribution is harder than building, and building the wrong thing first is expensive",
        options: ["Choose the right programming language — the technical foundation determines all future scalability and maintenance burden", "Register the company and protect intellectual property — legal structure must be established before any development begins", "Validate that people will pay — interview 20 potential customers before building, ideally getting pre-orders; distribution is harder than building, and building the wrong thing first is expensive", "Build the full product first — showing a complete working version is necessary before potential customers can evaluate whether they would pay"]
      },
      {
        question: "What is the most valuable early learning in digital entrepreneurship?",
        answer: "Starting before you're ready, building real things (even tiny ones), and learning from what happens — the entrepreneur with 10 shipped imperfect products knows more than one who planned 100 perfect ones",
        options: ["Technical skills — mastering programming, design, and marketing before starting ensures the highest quality first product", "Funding — securing investment capital before starting provides resources to build correctly from the beginning without compromise", "Starting before you're ready, building real things (even tiny ones), and learning from what happens — the entrepreneur with 10 shipped imperfect products knows more than one who planned 100 perfect ones", "Finding a partner — solo entrepreneurship has much lower success rates; finding the right co-founder is the most important first decision"]
      }
    ],
    familyAdventure: "Spend 2 hours as a family exploring Indie Hackers (indiehackers.com) and Starter Story (starterstory.com) — both free sites documenting real entrepreneurs building online businesses. Find 3 founders who started around the same age you are now or with minimal resources. What did they build? What was their first step? What did they fail at before succeeding? What do their stories have in common? Then: each family member shares one digital business idea they think is actually viable. Why is it viable? What would be the first concrete step to test it?",
    badge: "Digital Entrepreneur",
    nextLesson: "fs-9-10-20"
  },
  {
    id: "fs-9-10-20",
    subject: "Future Skills",
    ageGroup: "9-10",
    band: "Upper Explorers",
    guide: "Byte",
    guideAnimal: "Fox",
    lessonNumber: 20,
    title: "My Future in a Tech-Driven World",
    duration: "15–20 min",
    hook: "You've spent 20 lessons looking at the technologies shaping your world — AI, biotech, space, climate tech, the internet, algorithms, and more. You've learned how they work, what they can and can't do, and the profound questions they raise. Now the most important question: what do YOU do with this? Not someday. Now. The world these technologies are creating needs people who understand them deeply, think about them critically, and build them responsibly. That generation is yours.",
    bigIdea: "Navigating a tech-driven future requires combining technical literacy with critical thinking, ethical reasoning, and genuine human capabilities. This final lesson is about translating understanding into direction — building a personal technology plan for the years ahead.",
    sections: [
      {
        title: "What It Means to Be Tech-Literate",
        emoji: "🔭",
        content: "Tech literacy is not knowing how to code everything — it's understanding how technology works at a conceptual level, knowing what's possible and what isn't, being able to evaluate technology claims critically, and having the skills to use and direct technological tools effectively. The spectrum: consumers (use technology without understanding it), users (understand how to use technology effectively), makers (create with technology), and architects (design systems and direct technological development). Each level requires different skills and provides different levels of agency. Moving from consumer to user to maker is the most high-value transition most people can make — it doesn't require becoming a programmer; it requires developing genuine understanding and the ability to create with the tools available."
      },
      {
        title: "The Human Skills That Matter Most",
        emoji: "🌟",
        content: "In a world where AI handles increasingly routine cognitive work, the highest-value human capabilities are: genuine creativity — not just combining existing ideas but generating genuinely new ones. Ethical judgment in novel situations — AI cannot reliably navigate moral complexity in unfamiliar contexts. Empathy and authentic connection — humans fundamentally prefer human-to-human connection for what matters most. Cross-domain synthesis — combining insights from different fields in ways that specialized AI systems cannot. Leadership and meaning-making — helping groups navigate ambiguity and find direction. These aren't soft skills — they are the hardest skills to build in machines and the most valuable in complex organizations. The goal is not to compete with AI but to develop capabilities that AI genuinely cannot replicate."
      },
      {
        title: "Your Technology Roadmap",
        emoji: "🗺️",
        content: "Building your technology skill stack over the next 5 years: core literacy (understand how AI, internet, data, and major technologies actually work — this course is a foundation). Technical skill (develop genuine depth in at least one technical area — coding, data analysis, design, or another domain — not just familiarity). Domain expertise (combine technical skills with genuine knowledge of a field you care about — healthcare + AI, climate + engineering, education + design). Creative capability (develop creative skills that work alongside and leverage technology — writing, design, music, visual communication). Critical thinking (evaluate technology claims and impacts — the ability to distinguish genuine capability from hype is increasingly rare and valuable)."
      },
      {
        title: "Your Responsibility",
        emoji: "💡",
        content: "Understanding technology is not just a career advantage — it's a civic responsibility. The decisions being made right now about AI regulation, social media accountability, space governance, biotech ethics, and digital rights will shape the world for decades. These decisions are being made largely by people who don't understand the technologies involved — which is partly why so many are made badly. Your generation — the first to grow up with AI as a given — has both the knowledge and the responsibility to participate meaningfully in these decisions. Not just as workers in tech companies, but as citizens, voters, advocates, and builders who insist that technology serves human flourishing. The future is not something that happens to you. It's something your generation builds."
      }
    ],
    activity: {
      title: "My Technology Plan",
      instructions: "Write your personal Technology Plan for the next 5 years. Include: (1) Technology Understanding — which 3 technologies from this course do you most want to understand deeply and why? (2) Technical Skill — which one technical skill will you develop to genuine depth in the next year? What specific steps will you take? (3) Domain Application — what field do you most want to apply technology to and why? (4) Human Skills — which human capabilities (creativity, empathy, synthesis, leadership) will you deliberately develop alongside technical skills? (5) First Step — what will you do in the next 7 days? (6) Ethical Commitment — what will you stand for regarding how technology should be built and used? Share your plan and commit to one accountability partner."
    },
    quiz: [
      {
        question: "What is the spectrum from consumer to architect of technology?",
        answer: "Consumer (uses technology without understanding), user (uses technology effectively), maker (creates with technology), architect (designs systems and directs development) — each provides different levels of agency",
        options: ["Beginner, intermediate, advanced, and expert — the standard four levels of technical proficiency applicable to any technology skill", "Consumer (uses technology without understanding), user (uses technology effectively), maker (creates with technology), architect (designs systems and directs development) — each provides different levels of agency", "Student, practitioner, teacher, and researcher — the academic progression from learning to contributing knowledge in technical fields", "Observer, participant, contributor, and leader — the organizational levels of engagement with technology teams and projects"]
      },
      {
        question: "Why is cross-domain synthesis particularly valuable in a tech-driven world?",
        answer: "Specialized AI systems optimize within defined domains but struggle at the boundaries — humans who combine insights from multiple fields create value precisely where machines cannot",
        options: ["Cross-domain workers are more employable because they can fill multiple roles — reducing organizational headcount requirements in tech companies", "Specialized knowledge is becoming less valuable as AI can access any domain — only general thinking skills remain distinctly human", "Specialized AI systems optimize within defined domains but struggle at the boundaries — humans who combine insights from multiple fields create value precisely where machines cannot", "Academic and corporate organizations increasingly reward generalists — the credentialing systems that valued specialists are being replaced by portfolio-based assessment"]
      },
      {
        question: "What is 'tech literacy' and why is it not the same as knowing how to code?",
        answer: "Understanding technology at a conceptual level — what's possible, what isn't, how to evaluate claims, how to direct tools effectively — providing agency without requiring ability to build everything from scratch",
        options: ["Tech literacy specifically means coding proficiency — the term is used loosely but technically refers to programming ability", "Understanding technology at a conceptual level — what's possible, what isn't, how to evaluate claims, how to direct tools effectively — providing agency without requiring ability to build everything from scratch", "Knowing how to use technology safely and avoiding risks — the security and privacy dimension of technology understanding", "Being aware of which technologies exist and roughly what they do — general awareness of the technological landscape"]
      },
      {
        question: "What is the civic dimension of technology literacy?",
        answer: "Technology decisions are being made by people who don't understand the technologies — a tech-literate generation can participate meaningfully in governance, advocacy, and democratic oversight of these decisions",
        options: ["Technology companies are required to hire a percentage of community members — civic engagement creates employment opportunities in tech governance roles", "Technology decisions are being made by people who don't understand the technologies — a tech-literate generation can participate meaningfully in governance, advocacy, and democratic oversight of these decisions", "Government services are increasingly digital — civic literacy requires technology skills to access public services and participate in government programs", "Technology taxes fund civic programs — supporting tech companies through consumer choices funds democratic institutions"]
      },
      {
        question: "What does 'the future is something your generation builds' mean in practical terms?",
        answer: "The technologies, regulations, norms, and institutions that will define the next century are being designed now — participation as citizens, builders, advocates, and voters shapes outcomes that will last generations",
        options: ["Young people will eventually take leadership positions — patient participation in existing systems will eventually put your generation in control", "Technology makes social change faster — your generation will see more change in your lifetime than any previous generation", "The technologies, regulations, norms, and institutions that will define the next century are being designed now — participation as citizens, builders, advocates, and voters shapes outcomes that will last generations", "Future career opportunities are in technology — the statement means economic opportunity is concentrated in tech sectors that your generation should pursue"]
      }
    ],
    familyAdventure: "Hold a family 'future visioning' session. Each person answers: What technology development in your lifetime are you most excited about? Most worried about? If you could work on any technology challenge, what would it be and why? What is one specific way you will engage with technology more intentionally — as a maker, critic, citizen, or builder — rather than just as a consumer? Make one concrete commitment each. Post the commitments somewhere visible. Check in monthly on how each person is living their commitment. This is how the future gets built — one deliberate choice at a time.",
    badge: "Future Builder",
    nextLesson: null
  }
];

export default futureSkillsUpperExplorers;
