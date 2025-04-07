// Variáveis globais
let lastOpenedEnvelope = null;
const messagePopup = document.getElementById('message-popup');
const popupContent = document.querySelector('.popup-message-content');
const closePopup = document.querySelector('.close-popup');
const headerTitle = document.querySelector('header h1');

document.addEventListener('DOMContentLoaded', function() {
    // Mensagens para os envelopes
    const messages = {
        angel: [
            { icon: 'fa-heart', title: 'Elizabeth Barrett Browning', message: 'Eu te amo não apenas por quem você é, mas por quem eu me torno quando estou com você.', color: '#e74c3c' },
            { icon: 'fa-star', title: 'Eu mesmo', message: 'Você ilumina meus dias como nenhuma estrela no céu poderia fazer.', color: '#f39c12' },
            { icon: 'fa-sun', title: 'Frida Kahlo', message: 'Em todo o mundo, não existe um coração que valha mais que o seu.', color: '#f1c40f' },
            { icon: 'fa-heart', title: 'Nicholas Sparks', message: 'Amar você não é uma escolha, é o meu único destino.', color: '#3498db' },
            { icon: 'fa-coffee', title: 'Eu mesmo', message: 'Você é como um café quentinho numa manhã fria: me aquece e me energiza para o dia.', color: '#8e44ad' },
            { icon: 'fa-book', title: 'Eu mesmo', message: 'Nossa história é meu livro favorito. Mal posso esperar para continuar escrevendo os próximos capítulos com você.', color: '#2ecc71' },
            { icon: 'fa-music', title: 'Clarice Lispector', message: 'Eu te amo como se ama a vida, sem explicação, sem medida.', color: '#e67e22' },
            { icon: 'fa-gift', title: 'Eu mesmo', message: 'Você é o presente mais precioso que a vida me deu.', color: '#e74c3c' },
            { icon: 'fa-heartbeat', title: 'A. A. Milne', message: 'Se você viver cem anos, eu quero viver cem anos menos um dia, para nunca ter que viver sem você.', color: '#2ecc71' },
            { icon: 'fa-infinity', title: 'Gael Sanctus', message: 'Tentei medir o amor que sinto por ti, mas o infinito riu da minha arrogância. Pois há coisas que nem o universo pode conter.', color: '#34495e' },
            { icon: 'fa-heart', title: 'Eu mesmo', message: 'Eu, obcecado por você??? Sim, quero dizer, você já se viu? Você é tão linda que não consigo tirar meus olhos de você.', color: '#2980b9' },
            { icon: 'fa-moon', title: 'Anônimo', message: 'Eu gostaria de me sentar para ver a lua contigo, embora saiba que me perderia, pois acabaria olhando mais para ti.', color: '#d35400' },
            { icon: 'fa-cloud-moon', title: 'Anônimo', message: 'De todas as coisas boas que a vida me deu, você foi a melhor delas.', color: '#27ae60' },
            { icon: 'fa-cloud', title: 'Anônimo', message: 'Oh, meu amor, eu te amo. Amo você como Van Gogh amou as estrelas, como Senna amou as corridas, como Chaplin amou fazer as pessoas rirem em silêncio. Eu te amo assim - inteira, livre, crua, sem limites, sem medo, como quem entende que amor de verdade não ri, não julga, apenas abraça, e enxerga beleza onde o próprio espelho falha.', color: '#8e44ad' },
            { icon: 'fa-flower', title: 'Alfred Tennyson', message: 'Se eu tivesse uma flor para cada vez que penso em você, poderia caminhar pelo meu jardim para sempre.', color: '#2980b9' },
            { icon: 'fa-camera-retro', title: 'Eu mesmo', message: 'Eu escolho você. E vou te escolher todos os dias, sem hesitar.', color: '#c0392b' },
            { icon: 'fa-heart', title: 'Hermann Hesse', message: 'Se eu sei o que é o amor, é por sua causa.', color: '#d35400' },
            { icon: 'fa-star', title: 'Anônimo', message: 'Se cada estrela fosse um motivo para te amar, o universo seria pequeno demais para contar todas elas.', color: '#2c3e50' },
            { icon: 'fa-music', title: 'Eu mesmo', message: 'E de repente, todas as músicas de amor passaram a fazer sentido.', color: '#8e44ad' },
            { icon: 'fa-glass-cheers', title: 'Eu mesmo', message: 'Se eu tivesse que escolher entre respirar e te amar, eu usaria meu último suspiro para dizer que te amo.', color: '#3498db' },
            { icon: 'fa-book', title: 'Friedrich Nietzsche', message: 'Eu não preciso de um paraíso, porque eu já te encontrei.', color: '#e67e22' },
            { icon: 'fa-book-open', title: 'Eu mesmo', message: 'Você é a única resposta válida para a pergunta sobre sentido da vida.', color: '#2ecc71' },
            { icon: 'fa-heart', title: 'Eu mesmo', message: 'Amar você é como respirar: natural, essencial e impossível de viver sem.', color: '#e74c3c' },
            { icon: 'fa-heart', title: 'Gabriel García Márquez', message: 'Prefiro um minuto ao seu lado do que uma eternidade sem você.', color: '#e74c3c' },
            { icon: 'fa-feather-alt', title: 'Anônimo', message: 'Você é a poesia que meu coração escreve todos os dias.', color: '#3498db' },
            { icon: 'fa-home', title: 'Anônimo', message: 'Nos teus olhos encontro o lar onde minha alma deseja morar.', color: '#2ecc71' },
            { icon: 'fa-music', title: 'Anônimo', message: 'A cada batida do meu coração, ele sussurra seu nome em um ritmo de amor eterno.', color: '#9b59b6' },
            { icon: 'fa-globe', title: 'Anônimo', message: 'O universo é infinito, mas nada se compara à imensidão do meu amor por você.', color: '#f1c40f' },
            { icon: 'fa-hand-holding-heart', title: 'Anônimo', message: 'Nos teus abraços, encontro paz, nos teus beijos, encontro o paraíso.', color: '#e67e22' },
            { icon: 'fa-pen-fancy', title: 'Anônimo', message: 'Cada momento ao seu lado é um verso de amor que nunca quero parar de escrever.', color: '#1abc9c' },
            { icon: 'fa-heartbeat', title: 'Anônimo', message: 'Você não é parte da minha vida, você é a minha vida.', color: '#c0392b' },
            { icon: 'fa-star', title: 'Anônimo', message: 'Cada detalhe seu me faz te amar ainda mais.', color: '#f39c12' },
            { icon: 'fa-book', title: 'Pablo Neruda', message: 'Você é a razão da minha felicidade e o sentido da minha existência.', color: '#8e44ad' },
            { icon: 'fa-ring', title: 'J.R.R. Tolkien', message: 'Prefiro passar uma vida ao seu lado do que enfrentar todas as eras deste mundo sozinho.', color: '#d35400' },
            { icon: 'fa-comments', title: 'Anônimo', message: 'Se meu coração falasse, ele só diria o seu nome.', color: '#16a085' },
            { icon: 'fa-gift', title: 'Anônimo', message: 'Cada segundo ao seu lado é um presente que a vida me deu.', color: '#27ae60' },
            { icon: 'fa-balance-scale', title: 'Albert Camus', message: 'O mundo pode desmoronar, mas enquanto eu tiver você, tudo estará bem.', color: '#2c3e50' },
            { icon: 'fa-eye', title: 'Anônimo', message: 'Nos seus olhos vejo o reflexo de tudo o que sempre sonhei.', color: '#7f8c8d' },
            { icon: 'fa-clock', title: 'Anônimo', message: 'Cada segundo sem você é apenas um momento pensando em quando estarei contigo.', color: '#bdc3c7' },
            { icon: 'fa-smile', title: 'Desconhecido', message: 'Você é a razão do meu sorriso e o abrigo dos meus dias difíceis.', color: '#ff6b81' },
            { icon: 'fa-infinity', title: 'Desconhecido', message: 'Até o infinito seria pouco para te amar.', color: '#34495e' },
            { icon: 'fa-book-open', title: 'Anônimo', message: 'Se o amor fosse um conto de fadas, você seria o meu final feliz.', color: '#d980fa' },
            { icon: 'fa-star', title: 'Desconhecido', message: 'Nem todas as estrelas do céu brilham como o seu sorriso.', color: '#ffbe76' },
            { icon: 'fa-question', title: 'Anônimo', message: 'Você é a resposta para todas as perguntas que meu coração já fez.', color: '#6ab04c' },
            { icon: 'fa-smile-beam', title: 'Anônimo', message: 'Se eu pudesse dar um nome à felicidade, ele seria o seu.', color: '#ff9f1a' },
            { icon: 'fa-heart', title: 'Anônimo', message: 'Amo você mais do que todas as palavras poderiam dizer e todos os gestos poderiam mostrar.', color: '#eb4d4b' },
            { icon: 'fa-plane', title: 'Desconhecido', message: 'Se o amor fosse uma viagem, eu escolheria você como meu destino final.', color: '#1e90ff' },
            { icon: 'fa-anchor', title: 'Anônimo', message: 'Você é o meu porto seguro em meio a qualquer tempestade.', color: '#4834d4' },
            { icon: 'fa-redo', title: 'Desconhecido', message: 'Se eu pudesse viver mil vidas, em todas elas eu escolheria você.', color: '#be2edd' },
            { icon: 'fa-praying-hands', title: 'Anônimo', message: 'Você é a resposta para todas as orações que eu nunca fiz, mas que o meu coração sempre desejou.', color: '#22a6b3' }
        ],
        demon: [
            {
                icon: 'fa-fire',
                title: 'Minha Tentação',
                message: 'Você acende um fogo em mim que nem o inferno poderia apagar.',
                color: '#ff0000'
            },
            {
                icon: 'fa-skull',
                title: 'Meu Pecado Favorito',
                message: 'Se amar você é pecado, então eu desisto do céu sem pensar duas vezes.',
                color: '#cc0000'
            },
            {
                icon: 'fa-heart-broken',
                title: 'Minha Obsessão',
                message: 'Você me dominou completamente, e eu não quero ser salvo.',
                color: '#990000'
            },
            {
                icon: 'fa-kiss-wink-heart',
                title: 'Minha Perdição',
                message: 'Seus beijos são como veneno - eu morreria feliz intoxicado por você.',
                color: '#ff3333'
            },
            {
                icon: 'fa-hand-holding-heart',
                title: 'Meu Desejo',
                message: 'Quero te possuir completamente, corpo e alma.',
                color: '#ff6666'
            },
            {
                icon: 'fa-heartbeat',
                title: 'Meu Vício',
                message: 'Você é minha droga preferida - uma dose nunca é suficiente.',
                color: '#ff4d4d'
            },
            {
                icon: 'fa-grin-tongue-wink',
                title: 'Minha Fantasia',
                message: 'Meus pensamentos sobre você fariam um santo pecar.',
                color: '#ff1a1a'
            }
        ]
    };

    const envelopesGrid = document.querySelector('.envelopes-grid');
    const openedCountElement = document.getElementById('opened-count');
    const totalCountElement = document.getElementById('total-count');
    const themeToggle = document.getElementById('theme-toggle');
    const audioToggle = document.getElementById('audio-toggle');
    const backgroundMusic = document.getElementById('background-music');
    const welcomePopup = document.getElementById('welcome-popup');
    const closeWelcomePopupButton = document.getElementById('close-welcome-popup');
    const reopenWelcomePopupButton = document.getElementById('reopen-welcome-popup');

    // Exibir o popup inicial ao carregar o site
    if (!localStorage.getItem('welcomePopupShown')) {
        welcomePopup.classList.add('popup-visible');
        localStorage.setItem('welcomePopupShown', 'true');
    }

    // Fechar o popup inicial
    closeWelcomePopupButton.addEventListener('click', () => {
        welcomePopup.classList.remove('popup-visible');
    });

    // Reexibir o popup ao clicar no botão
    reopenWelcomePopupButton.addEventListener('click', () => {
        welcomePopup.classList.add('popup-visible');
    });
    
    let openedCount = 0;
    let currentMode = 'angel'; // Modo inicial

    // Inicializar envelopes
    renderEnvelopes(currentMode);

    // Função para renderizar envelopes
    function renderEnvelopes(mode) {
        envelopesGrid.innerHTML = '';
        totalCountElement.textContent = messages[mode].length;
        openedCount = 0;
        openedCountElement.textContent = openedCount;
        
        messages[mode].forEach((msg, index) => {
            const envelope = document.createElement('div');
            envelope.className = 'envelope';
            envelope.dataset.index = index;
            
            envelope.innerHTML = `
                <div class="envelope-wrapper">
                    <div class="envelope-flap"></div>
                    <div class="envelope-front" style="background-color: ${msg.color}20"></div>
                    <div class="envelope-back">
                        <div class="envelope-content">
                            <i class="fas ${msg.icon}"></i>
                            <div class="envelope-title">${msg.title}</div>
                            <div class="envelope-message">${msg.message}</div>
                        </div>
                    </div>
                </div>
            `;
            
            envelopesGrid.appendChild(envelope);
            addEnvelopeListeners(envelope, index, mode);
        });
    }

    // Função para adicionar listeners aos envelopes
    function addEnvelopeListeners(envelope, index, mode) {
        envelope.addEventListener('click', function(e) {
            if (e.target.closest('.envelope-content')) return;

            if (this.classList.contains('open') && lastOpenedEnvelope === this) {
                showPopup(index, mode);
                return;
            }

            if (!this.classList.contains('open')) {
                this.classList.add('open');
                openedCount++;
                openedCountElement.textContent = openedCount;
                lastOpenedEnvelope = this;

                const flap = this.querySelector('.envelope-flap');
                setTimeout(() => flap.style.display = 'none', 800);

                createHearts(5, this);

                if (openedCount === Math.ceil(messages[mode].length / 2)) {
                    createConfetti(50);
                }

                if (openedCount === messages[mode].length) {
                    setTimeout(() => createConfetti(100), 500);
                }
            }

            showPopup(index, mode);
        });
    }

    // Função para mostrar o popup
    function showPopup(index, mode) {
        const message = messages[mode][index];
        popupContent.innerHTML = `
            <i class="fas ${message.icon}"></i>
            <div class="envelope-title">${message.title}</div>
            <div class="envelope-message">${message.message}</div>
        `;
        messagePopup.classList.add('popup-visible');
        document.body.style.overflow = 'hidden';
    }

    // Fechar popup
    function closeMessagePopup() {
        messagePopup.classList.remove('popup-visible');
        document.body.style.overflow = '';
    }

    closePopup.addEventListener('click', closeMessagePopup);
    messagePopup.addEventListener('click', function(e) {
        if (e.target === this) {
            closeMessagePopup();
        }
    });

    // Fechar com ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && messagePopup.classList.contains('popup-visible')) {
            closeMessagePopup();
        }
    });

    // Toggle do tema anjo/demônio
    themeToggle.addEventListener('click', function() {
        currentMode = currentMode === 'angel' ? 'demon' : 'angel';
        document.body.classList.toggle('demon-mode');
        
        const icon = this.querySelector('.theme-icon');
        icon.textContent = currentMode === 'angel' ? '😇' : '😈';
        icon.style.transform = currentMode === 'angel' ? 'rotate(0deg)' : 'rotate(360deg)';

        // Alterar o título conforme o modo
        headerTitle.textContent = currentMode === 'angel' 
            ? 'Para a coisinha mais linda da minha vida' 
            : 'Do seu dono para minha putinha';
        
        renderEnvelopes(currentMode);
    });

    // Toggle do áudio
    audioToggle.addEventListener('click', function() {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            this.classList.remove('disabled');
        } else {
            backgroundMusic.pause();
            this.classList.add('disabled');
        }
    });

    // Função para criar corações flutuantes
    function createHearts(count, element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        for (let i = 0; i < count; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            
            const heartIcon = document.createElement('i');
            heartIcon.className = 'fas fa-heart';
            heart.appendChild(heartIcon);
            
            heart.style.position = 'fixed';
            heart.style.left = `${centerX}px`;
            heart.style.top = `${centerY}px`;
            heart.style.transform = 'translate(-50%, -50%)';
            heart.style.color = currentMode === 'angel' 
                ? `hsl(${Math.random() * 60 + 340}, 100%, 60%)` 
                : `hsl(0, 100%, ${Math.random() * 30 + 50}%)`;
            heart.style.fontSize = `${Math.random() * 20 + 15}px`;
            heart.style.opacity = '0';
            heart.style.zIndex = '100';
            heart.style.pointerEvents = 'none';
            heart.style.animation = `float ${Math.random() * 3 + 2}s ease-in-out forwards`;
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.style.opacity = '1';
            }, 10);
            
            setTimeout(() => {
                heart.remove();
            }, 3000);
        }
    }

    // Função para criar confetes
    function createConfetti(count) {
        for (let i = 0; i < count; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = `${Math.random() * 100}vw`;
            confetti.style.backgroundColor = currentMode === 'angel'
                ? `hsl(${Math.random() * 360}, 100%, 50%)`
                : `hsl(0, 100%, ${Math.random() * 30 + 50}%)`;
            confetti.style.width = `${Math.random() * 10 + 5}px`;
            confetti.style.height = `${Math.random() * 10 + 5}px`;
            confetti.style.animationDelay = `${Math.random() * 2}s`;
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }
    }

});