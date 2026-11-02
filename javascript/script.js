class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
            <div class="container mx-auto px-4">
                <div class="flex justify-between items-center py-4">
                    <a href="#" class="text-2xl font-bold text-primary-700 flex items-center gap-2">
                        <span class="text-3xl">🌸</span>
                        <span>Raquelry</span>
                    </a>
                    <div class="hidden md:flex items-center gap-8">
                        <a href="#about" class="text-gray-700 hover:text-primary-600 font-medium transition-colors">Sobre</a>
                        <a href="#projects" class="text-gray-700 hover:text-primary-600 font-medium transition-colors">Projetos</a>
                        <a href="#contact" class="text-gray-700 hover:text-primary-600 font-medium transition-colors">Contato</a>
                        <a href="https://www.linkedin.com/in/raquelryfonseca/" target="_blank" rel="noopener noreferrer" class="bg-[#0A66C2] hover:bg-[#084d94] text-white px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5">
                            <i data-feather="linkedin" class="w-4 h-4"></i>
                            <span>LinkedIn</span>
                        </a>
                    </div>
                    <button id="mobile-menu-btn" class="md:hidden text-gray-700 p-2 rounded-lg hover:bg-primary-50 transition-colors">
                        <i data-feather="menu"></i>
                    </button>
                </div>
                <div id="mobile-menu" class="hidden md:hidden pb-4 space-y-2">
                    <a href="#about" class="block text-gray-700 hover:text-primary-600 hover:bg-primary-50 px-4 py-2 rounded-lg font-medium transition-colors">Sobre</a>
                    <a href="#projects" class="block text-gray-700 hover:text-primary-600 hover:bg-primary-50 px-4 py-2 rounded-lg font-medium transition-colors">Projetos</a>
                    <a href="#contact" class="block text-gray-700 hover:text-primary-600 hover:bg-primary-50 px-4 py-2 rounded-lg font-medium transition-colors">Contato</a>
                    <a href="https://www.linkedin.com/in/raquelryfonseca/" target="_blank" rel="noopener noreferrer" class="block bg-[#0A66C2] hover:bg-[#084d94] text-white px-4 py-2 rounded-lg font-medium transition-all text-center">
                        LinkedIn
                    </a>
                </div>
            </div>
        </nav>
        `;
        
        const menuBtn = this.querySelector('#mobile-menu-btn');
        const mobileMenu = this.querySelector('#mobile-menu');
        if (menuBtn && mobileMenu) {
            menuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
                feather.replace();
            });
        }
        feather.replace();
    }
}

class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="bg-primary-700 text-white py-12 relative z-10">
            <div class="container mx-auto px-4">
                <div class="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div class="text-center md:text-left">
                        <div class="text-2xl font-bold mb-2 flex items-center justify-center md:justify-start gap-2">
                            <span class="text-3xl">🌸</span>
                            <span>Raquelry Silva</span>
                        </div>
                        <p class="text-primary-200">Estudante de Engenharia de Software</p>
                    </div>
                    <div class="flex gap-4">
                        <a href="https://www.linkedin.com/in/raquelryfonseca/" target="_blank" rel="noopener noreferrer" class="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all hover:-translate-y-1" title="LinkedIn">
                            <i data-feather="linkedin"></i>
                        </a>
                        <a href="https://github.com/Rquelry" target="_blank" rel="noopener noreferrer" class="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all hover:-translate-y-1" title="GitHub">
                            <i data-feather="github"></i>
                        </a>
                        <a href="mailto:rquelrysoftware@gmail.com" class="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all hover:-translate-y-1" title="Email">
                            <i data-feather="mail"></i>
                        </a>
                    </div>
                </div>
                <div class="border-t border-primary-600 mt-8 pt-8 text-center text-primary-200 text-sm">
                    <p>&copy; ${new Date().getFullYear()} Raquelry Silva. Feito com 💖 e muito café.</p>
                </div>
            </div>
        </footer>
        `;
        feather.replace();
    }
}

customElements.define('custom-navbar', CustomNavbar);
customElements.define('custom-footer', CustomFooter);

feather.replace();

// Script para adicionar flores ao clicar na página
document.addEventListener('click', function(e) {
    const flowers = ['🌸', '🌺', '🌻', '🌹', '🌷', '💮'];
    const randomFlower = flowers[Math.floor(Math.random() * flowers.length)];
    
    const el = document.createElement('div');
    el.innerHTML = randomFlower;
    el.style.position = 'absolute';
    el.style.left = (e.pageX - 15) + 'px'; // Centralizar no cursor
    el.style.top = (e.pageY - 15) + 'px';
    el.style.fontSize = '30px';
    el.style.pointerEvents = 'none';
    el.style.zIndex = '9999';
    el.style.animation = 'float-up 1.5s ease-out forwards';
    
    document.body.appendChild(el);

    // Remover elemento após animação
    setTimeout(() => {
        el.remove();
    }, 1500);
});

// Animação Parallax para as flores da Hero Section
document.addEventListener('mousemove', (e) => {
    const flowers = document.querySelectorAll('.hero-flower');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    flowers.forEach((flower, index) => {
        const speed = (index + 1) * 20; // Velocidades diferentes para profundidade
        const moveX = (x * speed) - (speed / 2);
        const moveY = (y * speed) - (speed / 2);
        flower.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});

// Intersection Observer para animações de entrada (Scroll)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Animar apenas uma vez
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in-section');
    observer.observe(section);
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const message = document.getElementById('message').value;
            const whatsappMessage = `*Olá Raquelry!* 🌸%0A%0A*Nome:* ${encodeURIComponent(name)}%0A%0A*Mensagem:*%0A${encodeURIComponent(message)}`;
            window.open(`https://wa.link/9xthv6?text=${whatsappMessage}`, '_blank');
        });
    }

    // Chatbot Logic
    const chatBubble = document.getElementById('chat-bubble');
    const chatWindow = document.getElementById('chat-window');
    const closeChat = document.getElementById('close-chat');
    const chatMessages = document.getElementById('chat-messages');
    const chatOptionsContainer = document.getElementById('chat-options');
    const langToggle = document.getElementById('lang-toggle');
    const welcomeMsg = document.getElementById('welcome-msg');
    const chatTitle = document.getElementById('chat-title');
    const chatStatus = document.getElementById('chat-status');
    const optionsLabel = document.getElementById('options-label');

    let currentLang = 'pt';

    const translations = {
        pt: {
            title: 'Assistente da Raquelry',
            status: 'Online agora',
            welcome: 'Olá. Sou a assistente virtual da Raquelry. Como posso ajudar com suas dúvidas sobre o perfil dela?',
            optionsLabel: 'Perguntas frequentes:',
            langBtn: 'EN',
            responses: {
                'Quem é a Raquelry?': 'Raquelry Silva é estudante de Engenharia de Software, atualmente no 4º período. Ela foca seus estudos em desenvolvimento web e UI/UX, buscando criar soluções funcionais e bem estruturadas.',
                'Como acessar os sites?': 'Você pode visualizar os projetos clicando no ícone de link externo presente em cada card da seção de projetos. Cada link abrirá o site correspondente em uma nova aba.',
                'Onde estão hospedados?': 'Os projetos desenvolvidos pela Raquelry estão hospedados na plataforma Vercel, o que garante estabilidade e boa performance de carregamento.',
                'Quais tecnologias ela usa?': 'Ela utiliza principalmente HTML, CSS, JavaScript e React no desenvolvimento de suas interfaces, além de Tailwind CSS para a estilização.',
                'Ela trabalha com Banco de Dados?': 'Sim. A Raquelry possui conhecimentos sólidos em SQL e JSON para a estruturação de dados, utilizando o Supabase para o gerenciamento de bancos de dados tanto em ambientes locais quanto online.',
                'Ela desenvolve aplicativos móveis?': 'Sim, ela está estudando o desenvolvimento de aplicativos Android e utiliza o framework Ionic. O Ionic permite criar aplicativos móveis híbridos utilizando tecnologias web, como HTML, CSS e JavaScript, possibilitando que um único código funcione em diferentes plataformas.'
            }
        },
        en: {
            title: "Raquelry's Assistant",
            status: 'Online now',
            welcome: "Hello. I'm Raquelry's virtual assistant. How can I help with your questions about her profile?",
            optionsLabel: 'Frequently Asked Questions:',
            langBtn: 'PT',
            responses: {
                'Who is Raquelry?': "Raquelry Silva is a Software Engineering student, currently in her 4th semester. She focuses her studies on web development and UI/UX, aiming to create functional and well-structured solutions.",
                'How to access the sites?': 'You can view the projects by clicking the external link icon on each project card. Each link will open the corresponding site in a new tab.',
                'Where are they hosted?': "Raquelry's projects are hosted on the Vercel platform, which ensures stability and good loading performance.",
                'What tech does she use?': 'She primarily uses HTML, CSS, JavaScript, and React for interface development, along with Tailwind CSS for styling.',
                'Does she work with Databases?': 'Yes. Raquelry has solid knowledge in SQL and JSON for data structuring, using Supabase for managing databases in both local and online environments.',
                'Does she develop mobile apps?': 'Yes, she is studying Android app development and currently uses the Ionic framework. Ionic is used to build hybrid mobile applications using web technologies like HTML, CSS, and JavaScript, allowing a single codebase to run on multiple platforms.'
            }
        }
    };

    function updateChatLanguage() {
        const t = translations[currentLang];
        chatTitle.textContent = t.title;
        chatStatus.textContent = t.status;
        welcomeMsg.textContent = t.welcome;
        optionsLabel.textContent = t.optionsLabel;
        langToggle.textContent = t.langBtn;
        
        // Clear and rebuild options
        chatOptionsContainer.innerHTML = '';
        Object.keys(t.responses).forEach(question => {
            const btn = document.createElement('button');
            btn.className = 'chat-option-btn text-xs bg-primary-50 text-primary-700 px-3 py-2 rounded-full border border-primary-100 hover:bg-primary-600 hover:text-white transition-all';
            btn.textContent = question;
            btn.onclick = () => handleOptionClick(question);
            chatOptionsContainer.appendChild(btn);
        });
    }

    function handleOptionClick(question) {
        addMessage(question, true);
        
        setTimeout(() => {
            const response = translations[currentLang].responses[question] || 
                (currentLang === 'pt' ? "Desculpe, não entendi. Pode tentar outra?" : "Sorry, I didn't get that. Try another one?");
            addMessage(response, false);
        }, 600);
    }

    function addMessage(text, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `flex gap-2 ${isUser ? 'flex-row-reverse' : ''} chat-message-appear`;
        
        const icon = isUser ? '👤' : '🌸';
        const bgClass = isUser ? 'bg-primary-600 text-white rounded-tr-none' : 'bg-white text-gray-700 rounded-tl-none border border-gray-100';
        
        messageDiv.innerHTML = `
            <div class="w-8 h-8 ${isUser ? 'bg-primary-700' : 'bg-primary-100'} rounded-full flex items-center justify-center text-sm shrink-0 shadow-sm">${icon}</div>
            <div class="${bgClass} p-3 rounded-2xl shadow-sm text-sm max-w-[80%]">
                ${text}
            </div>
        `;
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    if (chatBubble && chatWindow && closeChat) {
        chatBubble.addEventListener('click', () => {
            chatWindow.classList.toggle('hidden');
            chatWindow.classList.toggle('show');
            if (!chatWindow.classList.contains('hidden')) {
                updateChatLanguage();
            }
            feather.replace();
        });

        closeChat.addEventListener('click', () => {
            chatWindow.classList.add('hidden');
            chatWindow.classList.remove('show');
        });

        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'pt' ? 'en' : 'pt';
            updateChatLanguage();
            
            // Add a small notification message about language change
            const msg = currentLang === 'pt' ? 'Idioma alterado para Português 🇧🇷' : 'Language changed to English 🇺🇸';
            addMessage(msg, false);
        });
    }
});