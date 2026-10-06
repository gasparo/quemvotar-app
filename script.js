document.addEventListener('DOMContentLoaded', () => {
    const profileForm = document.getElementById('profile-form');
    const resultsSection = document.getElementById('results-section');
    const btnReset = document.getElementById('btn-reset');

    let currentProfileCategory = 'default';

    const inputProfissao = document.getElementById('profissao_input');
    const inputCategoria = document.getElementById('profissao_categoria');
    const autocompleteList = document.getElementById('autocomplete-list');
    
    const profissoesData = [
        { catId: "saude", catNome: "Saúde e Bem-estar", nome: "Médico(a) Clínico Geral" },
        { catId: "saude", catNome: "Saúde e Bem-estar", nome: "Médico(a) Especialista" },
        { catId: "saude", catNome: "Saúde e Bem-estar", nome: "Enfermeiro(a)" },
        { catId: "saude", catNome: "Saúde e Bem-estar", nome: "Técnico(a) em Enfermagem" },
        { catId: "saude", catNome: "Saúde e Bem-estar", nome: "Odontologista" },
        { catId: "saude", catNome: "Saúde e Bem-estar", nome: "Fisioterapeuta" },
        { catId: "saude", catNome: "Saúde e Bem-estar", nome: "Psicólogo(a)" },
        { catId: "saude", catNome: "Saúde e Bem-estar", nome: "Nutricionista" },
        { catId: "saude", catNome: "Saúde e Bem-estar", nome: "Farmacêutico(a)" },
        { catId: "educacao", catNome: "Educação e Pesquisa", nome: "Professor(a) de Ensino Infantil" },
        { catId: "educacao", catNome: "Educação e Pesquisa", nome: "Professor(a) de Ensino Fundamental" },
        { catId: "educacao", catNome: "Educação e Pesquisa", nome: "Professor(a) de Ensino Médio" },
        { catId: "educacao", catNome: "Educação e Pesquisa", nome: "Professor(a) Universitário" },
        { catId: "educacao", catNome: "Educação e Pesquisa", nome: "Pedagogo(a)" },
        { catId: "educacao", catNome: "Educação e Pesquisa", nome: "Pesquisador(a) / Cientista" },
        { catId: "tecnologia", catNome: "Tecnologia da Informação", nome: "Desenvolvedor(a) de Software (Programador)" },
        { catId: "tecnologia", catNome: "Tecnologia da Informação", nome: "Engenheiro(a) de Software" },
        { catId: "tecnologia", catNome: "Tecnologia da Informação", nome: "Cientista de Dados" },
        { catId: "tecnologia", catNome: "Tecnologia da Informação", nome: "Analista de Sistemas" },
        { catId: "tecnologia", catNome: "Tecnologia da Informação", nome: "Especialista em Cibersegurança" },
        { catId: "tecnologia", catNome: "Tecnologia da Informação", nome: "Administrador(a) de Redes" },
        { catId: "tecnologia", catNome: "Tecnologia da Informação", nome: "Designer UX/UI" },
        { catId: "tecnologia", catNome: "Tecnologia da Informação", nome: "Suporte Técnico (Help Desk)" },
        { catId: "comercio", catNome: "Comércio e Vendas", nome: "Vendedor(a) de Loja" },
        { catId: "comercio", catNome: "Comércio e Vendas", nome: "Gerente de Loja" },
        { catId: "comercio", catNome: "Comércio e Vendas", nome: "Representante Comercial" },
        { catId: "comercio", catNome: "Comércio e Vendas", nome: "Atendente / Recepcionista" },
        { catId: "comercio", catNome: "Comércio e Vendas", nome: "Operador(a) de Caixa" },
        { catId: "comercio", catNome: "Comércio e Vendas", nome: "Corretor(a) de Imóveis" },
        { catId: "industria", catNome: "Indústria e Engenharia", nome: "Engenheiro(a) Civil" },
        { catId: "industria", catNome: "Indústria e Engenharia", nome: "Engenheiro(a) Mecânico(a)" },
        { catId: "industria", catNome: "Indústria e Engenharia", nome: "Engenheiro(a) Eletricista" },
        { catId: "industria", catNome: "Indústria e Engenharia", nome: "Engenheiro(a) de Produção" },
        { catId: "industria", catNome: "Indústria e Engenharia", nome: "Técnico(a) Industrial" },
        { catId: "industria", catNome: "Indústria e Engenharia", nome: "Operador(a) de Máquinas" },
        { catId: "administrativo", catNome: "Administrativo e Financeiro", nome: "Auxiliar Administrativo" },
        { catId: "administrativo", catNome: "Administrativo e Financeiro", nome: "Assistente Administrativo" },
        { catId: "administrativo", catNome: "Administrativo e Financeiro", nome: "Administrador(a) de Empresas" },
        { catId: "administrativo", catNome: "Administrativo e Financeiro", nome: "Contador(a)" },
        { catId: "administrativo", catNome: "Administrativo e Financeiro", nome: "Analista Financeiro" },
        { catId: "direito", catNome: "Direito e Justiça", nome: "Advogado(a)" },
        { catId: "direito", catNome: "Direito e Justiça", nome: "Juiz(a) de Direito" },
        { catId: "direito", catNome: "Direito e Justiça", nome: "Promotor(a) de Justiça" },
        { catId: "direito", catNome: "Direito e Justiça", nome: "Policial Militar/Civil/Federal" },
        { catId: "comunicacao", catNome: "Comunicação e Artes", nome: "Jornalista" },
        { catId: "comunicacao", catNome: "Comunicação e Artes", nome: "Publicitário(a)" },
        { catId: "comunicacao", catNome: "Comunicação e Artes", nome: "Designer Gráfico" },
        { catId: "autonomo", catNome: "Autônomo, Informal e Serviços", nome: "Motorista de Aplicativo (Uber/99)" },
        { catId: "autonomo", catNome: "Autônomo, Informal e Serviços", nome: "Entregador(a) de Aplicativo (iFood)" },
        { catId: "autonomo", catNome: "Autônomo, Informal e Serviços", nome: "Cabeleireiro(a) / Barbeiro" },
        { catId: "autonomo", catNome: "Autônomo, Informal e Serviços", nome: "Pedreiro" },
        { catId: "agro", catNome: "Agricultura e Meio Ambiente", nome: "Engenheiro(a) Agrônomo(a)" },
        { catId: "agro", catNome: "Agricultura e Meio Ambiente", nome: "Produtor(a) Rural" },
        { catId: "estudante", catNome: "Estudantes e Outros", nome: "Estudante de Ensino Médio" },
        { catId: "estudante", catNome: "Estudantes e Outros", nome: "Estudante Universitário" },
        { catId: "aposentado", catNome: "Aposentados e Outros", nome: "Aposentado(a) / Pensionista" },
        { catId: "estudante", catNome: "Outros", nome: "Desempregado(a) / Em busca de oportunidades" },
        { catId: "estudante", catNome: "Outros", nome: "Dona de Casa" },
        { catId: "autonomo", catNome: "Outros", nome: "Autônomo (Outros)" }
    ];

    // Função para renderizar lista
    function showOptions(filter = "") {
        autocompleteList.innerHTML = '';
        autocompleteList.classList.remove('hidden');
        
        let count = 0;
        const valStr = filter.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        
        for (let i = 0; i < profissoesData.length; i++) {
            const nomeStr = profissoesData[i].nome.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
            
            if (nomeStr.includes(valStr) || valStr === "") {
                const item = profissoesData[i];
                const div = document.createElement('div');
                
                let highlightedName = item.nome;
                if (filter) {
                    const regex = new RegExp(`(${filter})`, "gi");
                    highlightedName = item.nome.replace(regex, "<strong>$1</strong>");
                }
                
                div.innerHTML = `<span>${highlightedName}</span><span class="category-label">${item.catNome}</span>`;
                
                div.addEventListener('click', function(e) {
                    inputProfissao.value = item.nome;
                    inputCategoria.value = item.catId;
                    autocompleteList.innerHTML = '';
                    autocompleteList.classList.add('hidden');
                    e.stopPropagation();
                });
                
                autocompleteList.appendChild(div);
                count++;
                if (count >= 100) break; // limite visual
            }
        }
        
        if (count === 0) {
            const div = document.createElement('div');
            div.innerHTML = `<span style="color: #ef4444;">Nenhuma profissão encontrada.</span>`;
            autocompleteList.appendChild(div);
        }
    }

    // Lógica de Autocomplete (Digitação)
    inputProfissao.addEventListener('input', function() {
        inputCategoria.value = ''; // Reset hidden field when typing
        showOptions(this.value);
    });

    // Abrir opções ao clicar no campo (como um Select)
    inputProfissao.addEventListener('focus', function() {
        showOptions(this.value);
    });
    inputProfissao.addEventListener('click', function() {
        showOptions(this.value);
    });

    // Fechar autocomplete ao clicar fora
    document.addEventListener('click', function (e) {
        if (e.target !== inputProfissao && e.target !== autocompleteList) {
            autocompleteList.classList.add('hidden');
        }
    });

    // --- CONTINUOUS QUIZ STATE ---
    let userAnswers = []; // all historical answers
    let affinityScores = { lula: 0, bolsonaro: 0 };
    let completedQuizzes = { geral: 0 };
    if (typeof appThemes !== 'undefined') {
        appThemes.forEach(t => completedQuizzes[t.id] = 0);
    }
    let currentQuizTheme = 'geral';
    let currentQuizData = [];
    let currentQuizIndex = 0;

    const tinderSection = document.getElementById('tinder-section');
    const tinderText = document.getElementById('tinder-text');
    const tinderDetail = document.getElementById('tinder-detail');
    const tinderType = document.getElementById('tinder-type');
    const tinderTitle = document.getElementById('tinder-title');
    const tinderCard = document.querySelector('.tinder-card');
    
    const tinderProgress = document.getElementById('tinder-progress');
    const globalResultsHeader = document.getElementById('global-results-header');
    const precisionBadge = document.getElementById('precision-badge');
    
    const summaryContainer = document.getElementById('tinder-summary-container');
    const summaryList = document.getElementById('tinder-summary-list');
    const comparisonGrid = document.getElementById('comparison-grid');
    const moreRoundsContainer = document.getElementById('more-rounds-container');
    const btnMoreRounds = document.getElementById('btn-more-rounds');
    const introSection = document.getElementById('intro-section');
    const btnStartIntro = document.getElementById('btn-start-intro');

    let currentActiveTab = 'geral';

    // --- INTRO THEMES SELECTION LOGIC ---
    let selectedIntroThemes = [];
    const introPillsContainer = document.getElementById('intro-pills-container');
    
    if (introPillsContainer && typeof appThemes !== 'undefined') {
        appThemes.forEach(theme => {
            const pill = document.createElement('div');
            pill.className = 'theme-pill';
            pill.innerHTML = `<span>${theme.icon}</span> <span>${theme.name}</span>`;
            pill.dataset.id = theme.id;
            
            pill.addEventListener('click', () => {
                if (selectedIntroThemes.includes(theme.id)) {
                    selectedIntroThemes = selectedIntroThemes.filter(id => id !== theme.id);
                    pill.classList.remove('selected');
                } else {
                    if (selectedIntroThemes.length < 5) {
                        selectedIntroThemes.push(theme.id);
                        pill.classList.add('selected');
                    } else {
                        // Max 5 - visual feedback
                        pill.style.transform = 'translateX(-5px)';
                        setTimeout(() => pill.style.transform = 'translateX(5px)', 100);
                        setTimeout(() => pill.style.transform = 'translateX(0)', 200);
                    }
                }
                
                // Update Button State
                if (selectedIntroThemes.length >= 3) {
                    btnStartIntro.disabled = false;
                    btnStartIntro.innerText = "COMEÇAR TESTE";
                } else {
                    btnStartIntro.disabled = true;
                    const diff = 3 - selectedIntroThemes.length;
                    btnStartIntro.innerText = `SELECIONE MAIS ${diff} TEMA${diff > 1 ? 'S' : ''}...`;
                }
            });
            introPillsContainer.appendChild(pill);
        });
    }

    // Start Tinder Game when intro button is clicked
    btnStartIntro.addEventListener('click', () => {
        if (selectedIntroThemes.length >= 3) {
            // Build custom geral array from selected themes
            tinderData.geral = [];
            selectedIntroThemes.forEach(themeId => {
                const questions = tinderData[themeId] || [];
                // Take 2 questions per selected theme to make the first run rich but not too long
                tinderData.geral = tinderData.geral.concat(questions.slice(0, 2));
            });
            // Shuffle the custom array
            tinderData.geral = tinderData.geral.sort(() => 0.5 - Math.random());
        }

        introSection.classList.add('hidden');
        startTinderGame('geral');
    });

    profileForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const profissaoCat = inputCategoria.value;
        const idade = document.getElementById('idade').value;
        const sexo = document.getElementById('sexo').value;
        const renda = document.getElementById('renda').value;
        const escolaridade = document.getElementById('escolaridade').value;

        if (!profissaoCat) {
            alert('Por favor, selecione uma profissão da lista sugerida.');
            inputProfissao.focus();
            return;
        }

        if (!idade || !sexo || !renda || !escolaridade) {
            alert('Por favor, preencha todos os campos do seu perfil.');
            return;
        }

        currentProfileCategory = profissaoCat;

        // Close the modal
        const profileModal = document.getElementById('profile-modal');
        if (profileModal) profileModal.classList.add('hidden');

        // Fill data for both candidates if grid is visible or immediately show it
        fillCandidateData('bolsonaro', currentQuizTheme !== 'geral' && currentQuizTheme !== 'geral_novo' ? currentQuizTheme : currentProfileCategory);
        fillCandidateData('lula', currentQuizTheme !== 'geral' && currentQuizTheme !== 'geral_novo' ? currentQuizTheme : currentProfileCategory);
        
        // Show comparison grid if it's hidden
        if (comparisonGrid.classList.contains('hidden') && !resultsSection.classList.contains('hidden')) {
            comparisonGrid.classList.remove('hidden');
        }
    });

    function startTinderGame(theme = 'geral') {
        currentQuizTheme = theme;
        
        const allQuestions = tinderData[theme] || [];
        const answeredIds = userAnswers.map(ans => ans.question.texto); // using texto as unique ID
        const availableQuestions = allQuestions.filter(q => !answeredIds.includes(q.texto));
        
        if (availableQuestions.length === 0) {
            alert("Uau! Você já respondeu a todas as perguntas disponíveis para este tema no nosso banco de dados atual.");
            if (theme !== 'geral') {
                moreRoundsContainer.classList.add('hidden');
            }
            return;
        }

        // Shuffle and pick 3 questions per round (except geral which takes all available or max 5)
        const questionsToTake = theme === 'geral' ? 5 : 3;
        currentQuizData = availableQuestions.sort(() => Math.random() - 0.5).slice(0, questionsToTake);
        currentQuizIndex = 0;

        tinderSection.classList.remove('hidden');
        
        if (theme === 'geral') {
            tinderTitle.textContent = "Teste Cego de Alinhamento";
        } else {
            const themeNames = {
                economia: "Quiz Temático: Economia",
                saude: "Quiz Temático: Saúde",
                educacao: "Quiz Temático: Educação",
                seguranca: "Quiz Temático: Segurança"
            };
            tinderTitle.textContent = themeNames[theme] || "Quiz Temático";
        }
        
        globalResultsHeader.classList.add('hidden');
        resultsSection.classList.add('hidden');

        showTinderQuestion();
    }

    function showTinderQuestion() {
        tinderCard.className = 'tinder-card glass-panel'; // reset animation classes
        tinderCard.style.transform = '';

        if (currentQuizIndex >= currentQuizData.length) {
            finishTinderGame();
            return;
        }

        const q = currentQuizData[currentQuizIndex];
        tinderText.textContent = `"${q.texto}"`;
        tinderType.textContent = q.tipo;
        tinderDetail.textContent = q.detalhe;
        
        const progressPercent = (currentQuizIndex / currentQuizData.length) * 100;
        tinderProgress.style.width = `${progressPercent}%`;
    }

    function handleTinderAnswer(choice, weight, animationClass) {
        if (currentQuizIndex >= currentQuizData.length) return;
        
        const q = currentQuizData[currentQuizIndex];
        
        if (choice === 'concordou') {
            affinityScores[q.candidato] += weight;
        } else if (choice === 'discordou') {
            const other = q.candidato === 'bolsonaro' ? 'lula' : 'bolsonaro';
            affinityScores[other] += weight;
        }
        
        // Save for summary
        userAnswers.push({ question: q, choice: choice, weight: weight });
        
        // Animate
        tinderCard.classList.add(animationClass);
        const overlay = document.getElementById('swipe-overlay');
        if (overlay) overlay.style.opacity = 0;
        
        currentQuizIndex++;
        setTimeout(() => showTinderQuestion(), 400); // Wait for animation
    }

    const btnStrongDiscordo = document.getElementById('btn-strong-discordo');
    const btnDiscordo = document.getElementById('btn-discordo');
    const btnIndiferente = document.getElementById('btn-indiferente');
    const btnConcordo = document.getElementById('btn-concordo');
    const btnStrongConcordo = document.getElementById('btn-strong-concordo');

    if(btnStrongDiscordo) btnStrongDiscordo.addEventListener('click', () => handleTinderAnswer('discordou', 2, 'swipe-left-strong'));
    if(btnDiscordo) btnDiscordo.addEventListener('click', () => handleTinderAnswer('discordou', 1, 'swipe-left'));
    if(btnIndiferente) btnIndiferente.addEventListener('click', () => handleTinderAnswer('neutro', 0, 'swipe-up'));
    if(btnConcordo) btnConcordo.addEventListener('click', () => handleTinderAnswer('concordou', 1, 'swipe-right'));
    if(btnStrongConcordo) btnStrongConcordo.addEventListener('click', () => handleTinderAnswer('concordou', 2, 'swipe-right-strong'));

    // Swipe logic (Touch / Mouse drag)
    let startX = 0, currentX = 0, startY = 0, currentY = 0;
    let isDragging = false;

    function startDrag(e) {
        isDragging = true;
        startX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
        startY = e.type.includes('mouse') ? e.pageY : e.touches[0].pageY;
    }

    function drag(e) {
        if (!isDragging) return;
        e.preventDefault();
        currentX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
        currentY = e.type.includes('mouse') ? e.pageY : e.touches[0].pageY;
        
        const diffX = currentX - startX;
        const diffY = currentY - startY;
        const rotate = diffX * 0.05;
        tinderCard.style.transform = `translate(${diffX}px, ${diffY}px) rotate(${rotate}deg)`;

        const overlay = document.getElementById('swipe-overlay');
        if (overlay) {
            if (diffX > 150) {
                overlay.style.opacity = Math.min(Math.abs(diffX) / 150, 1);
                overlay.textContent = "TOTALMENTE A FAVOR";
                overlay.className = "swipe-overlay overlay-strong-right";
            } else if (diffX > 30) {
                overlay.style.opacity = Math.min(Math.abs(diffX) / 100, 1);
                overlay.textContent = "A FAVOR";
                overlay.className = "swipe-overlay overlay-right";
            } else if (diffX < -150) {
                overlay.style.opacity = Math.min(Math.abs(diffX) / 150, 1);
                overlay.textContent = "TOTALMENTE CONTRA";
                overlay.className = "swipe-overlay overlay-strong-left";
            } else if (diffX < -30) {
                overlay.style.opacity = Math.min(Math.abs(diffX) / 100, 1);
                overlay.textContent = "CONTRA";
                overlay.className = "swipe-overlay overlay-left";
            } else if (diffY < -30) {
                overlay.style.opacity = Math.min(Math.abs(diffY) / 100, 1);
                overlay.textContent = "NEUTRO";
                overlay.className = "swipe-overlay overlay-neutral";
            } else {
                overlay.style.opacity = 0;
            }
        }
    }

    function endDrag() {
        if (!isDragging) return;
        isDragging = false;
        
        const diffX = currentX - startX;
        const diffY = currentY - startY;
        
        if (diffX > 150) {
            handleTinderAnswer('concordou', 2, 'swipe-right-strong');
        } else if (diffX > 50) {
            handleTinderAnswer('concordou', 1, 'swipe-right');
        } else if (diffX < -150) {
            handleTinderAnswer('discordou', 2, 'swipe-left-strong');
        } else if (diffX < -50) {
            handleTinderAnswer('discordou', 1, 'swipe-left');
        } else if (diffY < -50) {
            handleTinderAnswer('neutro', 0, 'swipe-up');
        } else {
            // Snap back
            tinderCard.style.transform = `translate(0px, 0px) rotate(0deg)`;
            const overlay = document.getElementById('swipe-overlay');
            if (overlay) overlay.style.opacity = 0;
        }
    }

    tinderCard.addEventListener('mousedown', startDrag);
    tinderCard.addEventListener('touchstart', startDrag);
    document.addEventListener('mousemove', drag);
    document.addEventListener('touchmove', drag, {passive: false});
    document.addEventListener('mouseup', endDrag);
    document.addEventListener('touchend', endDrag);

    function updateAffinityBar() {
        const totalConcordos = affinityScores.lula + affinityScores.bolsonaro;
        const barWrapper = document.querySelector('.affinity-bar-wrapper');
        
        // Trigger jump scare animation
        if (barWrapper) {
            barWrapper.classList.remove('susto-anim');
            void barWrapper.offsetWidth; // force reflow
            barWrapper.classList.add('susto-anim');
        }

        if (totalConcordos > 0) {
            const percLula = Math.round((affinityScores.lula / totalConcordos) * 100);
            const percBolsonaro = 100 - percLula; // Ensure it adds to 100

            document.getElementById('bar-lula').style.width = `${percLula}%`;
            document.getElementById('bar-bolsonaro').style.width = `${percBolsonaro}%`;
            document.getElementById('perc-lula').innerText = `${percLula}%`;
            document.getElementById('perc-bolsonaro').innerText = `${percBolsonaro}%`;
            document.getElementById('affinity-marker').style.left = `${percLula}%`;
        } else {
            document.getElementById('bar-lula').style.width = `50%`;
            document.getElementById('bar-bolsonaro').style.width = `50%`;
            document.getElementById('perc-lula').innerText = `0%`;
            document.getElementById('perc-bolsonaro').innerText = `0%`;
            document.getElementById('affinity-marker').style.left = `50%`;
        }
    }

    function calculatePrecision() {
        const totalPossibleQuizzes = Object.keys(completedQuizzes).length;
        // count how many themes have at least 1 round completed
        const completedCount = Object.values(completedQuizzes).filter(v => v > 0).length;
        
        // Also factor in rounds for extra precision visually (up to 100%)
        const totalRounds = Object.values(completedQuizzes).reduce((a, b) => a + b, 0);
        const basePrecision = (completedCount / totalPossibleQuizzes) * 80; // 80% max from just touching all areas
        const bonusPrecision = Math.min((totalRounds - completedCount) * 5, 20); // 5% per extra round, max 20%
        
        const p = Math.round(basePrecision + bonusPrecision);
        
        let text = `Precisão: Alta (${p}%)`;
        if (p < 40) text = `Precisão: Baixa (${p}%) - Complete as áreas!`;
        else if (p < 80) text = `Precisão: Média (${p}%)`;
        else if (p >= 100) text = `Precisão: Máxima (100%) 🏆`;
        
        precisionBadge.textContent = text;
    }

    function checkMoreQuestionsAvailable(theme) {
        if (!tinderData[theme]) return false;
        const answeredIds = userAnswers.map(ans => ans.question.texto);
        return tinderData[theme].some(q => !answeredIds.includes(q.texto));
    }





    function finishTinderGame() {
        if (!completedQuizzes[currentQuizTheme]) completedQuizzes[currentQuizTheme] = 0;
        completedQuizzes[currentQuizTheme]++;

        // Mark the selected themes as completed (at least 1 round)
        if ((currentQuizTheme === 'geral' || currentQuizTheme === 'geral_novo') && typeof selectedIntroThemes !== 'undefined') {
            const themesToMark = currentQuizTheme === 'geral' ? selectedIntroThemes : selectedNextThemes;
            themesToMark.forEach(themeId => {
                if (!completedQuizzes[themeId]) completedQuizzes[themeId] = 0;
                completedQuizzes[themeId]++;
            });
        }

        calculatePrecision();
        updateAffinityBar();
        renderThemesGrid(); // Re-render the grid so completed themes show "1 round completo"

        tinderSection.classList.add('hidden');
        globalResultsHeader.classList.remove('hidden');
        resultsSection.classList.remove('hidden');

        // Re-render the summary list entirely
        summaryList.innerHTML = '';
        userAnswers.forEach(ans => addSummaryItem(ans));

        summaryContainer.classList.remove('hidden');
        
        // Render Next Round Pills
        if (typeof renderNextPills === 'function') renderNextPills();
        
        const eixosSec = document.getElementById('eixos-section');
        if (eixosSec) eixosSec.classList.remove('hidden');

        if (currentQuizTheme === 'geral' || currentQuizTheme === 'geral_novo') {
            comparisonGrid.classList.add('hidden');
        } else {
            comparisonGrid.classList.remove('hidden');
            fillCandidateData('bolsonaro', currentQuizTheme);
            fillCandidateData('lula', currentQuizTheme);
            setTimeout(() => comparisonGrid.scrollIntoView({ behavior: 'smooth' }), 300);
        }
        
        if (moreRoundsContainer) moreRoundsContainer.classList.add('hidden');

        if (currentQuizTheme === 'geral' || currentQuizTheme === 'geral_novo') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    function addSummaryItem(ans) {
        const div = document.createElement('div');
        div.className = `summary-item ${ans.choice}`;
        
        let choiceText = 'Neutro';
        let badgeClass = 'badge-neutral';
        let iconSvg = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="8" y1="12" x2="16" y2="12"/></svg>';
        
        if(ans.choice === 'concordou') {
            choiceText = ans.weight === 2 ? 'Totalmente A Favor' : 'A Favor';
            badgeClass = 'badge-success';
            iconSvg = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>';
        } else if(ans.choice === 'discordou') {
            choiceText = ans.weight === 2 ? 'Totalmente Contra' : 'Contra';
            badgeClass = 'badge-danger';
            iconSvg = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>';
        }

        const isBolsonaro = ans.question.candidato === 'bolsonaro';
        const candidateName = isBolsonaro ? 'Flávio Bolsonaro (PL)' : 'Lula (PT)';
        const candClass = isBolsonaro ? 'badge-pl' : 'badge-pt';
        
        div.innerHTML = `
            <div class="summary-header">
                <div class="summary-badges">
                    <span class="summary-badge ${badgeClass}">${iconSvg} ${choiceText}</span>
                    <span class="summary-badge ${candClass}">${candidateName}</span>
                </div>
                <a href="${ans.question.fonte}" target="_blank" class="summary-link">
                    Ver Fonte Oficial <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
            </div>
            <h4 class="summary-question">"${ans.question.texto}"</h4>
            <div class="summary-detail">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                <span>${ans.question.detalhe}</span>
            </div>
        `;
        summaryList.appendChild(div);
    }

    // Render Themes Grid Function
    function renderThemesGrid() {
        const themesGrid = document.getElementById('themes-grid');
        if (!themesGrid) return;
        themesGrid.innerHTML = '';
        
        if (typeof appThemes !== 'undefined') {
            appThemes.forEach(theme => {
                const card = document.createElement('div');
                card.className = 'theme-card';
                
                const rounds = completedQuizzes[theme.id] || 0;
                const progressText = rounds > 0 ? `${rounds} round(s) completos` : 'Não iniciado';
                
                card.innerHTML = `
                    <div class="theme-icon">${theme.icon}</div>
                    <div class="theme-name">${theme.name}</div>
                    <div class="theme-progress">${progressText}</div>
                `;
                
                card.addEventListener('click', () => {
                    if (rounds === 0) {
                        startTinderGame(theme.id);
                    } else {
                        currentQuizTheme = theme.id;
                        fillCandidateData('bolsonaro', theme.id);
                        fillCandidateData('lula', theme.id);
                        comparisonGrid.classList.remove('hidden');
                        comparisonGrid.scrollIntoView({ behavior: 'smooth' });
                        
                        if (checkMoreQuestionsAvailable(theme.id)) {
                            moreRoundsContainer.classList.remove('hidden');
                        } else {
                            moreRoundsContainer.classList.add('hidden');
                        }
                    }
                });
                
                themesGrid.appendChild(card);
            });
        }
    }

    // Profile Modal Logic
    const btnOpenProfile = document.getElementById('btn-open-profile');
    const btnCloseProfile = document.getElementById('btn-close-profile');
    const profileModal = document.getElementById('profile-modal');

    if (btnOpenProfile && profileModal) {
        btnOpenProfile.addEventListener('click', () => {
            profileModal.classList.remove('hidden');
        });
        btnCloseProfile.addEventListener('click', () => {
            profileModal.classList.add('hidden');
        });
        // Close on overlay click
        profileModal.addEventListener('click', (e) => {
            if (e.target === profileModal) profileModal.classList.add('hidden');
        });
    }

    // --- NEXT ROUND THEMES SELECTION LOGIC ---
    let selectedNextThemes = [];
    const nextPillsContainer = document.getElementById('next-pills-container');
    const btnStartNext = document.getElementById('btn-start-next');
    
    function renderNextPills() {
        if (!nextPillsContainer || typeof appThemes === 'undefined') return;
        nextPillsContainer.innerHTML = '';
        selectedNextThemes = [];
        
        appThemes.forEach(theme => {
            // Don't show themes that are already fully completed (for simplicity, we let them pick anything they haven't finished all questions for)
            if (!checkMoreQuestionsAvailable(theme.id)) return;
            
            const pill = document.createElement('div');
            pill.className = 'theme-pill';
            pill.innerHTML = `<span>${theme.icon}</span> <span>${theme.name}</span>`;
            pill.dataset.id = theme.id;
            
            pill.addEventListener('click', () => {
                if (selectedNextThemes.includes(theme.id)) {
                    selectedNextThemes = selectedNextThemes.filter(id => id !== theme.id);
                    pill.classList.remove('selected');
                } else {
                    if (selectedNextThemes.length < 5) {
                        selectedNextThemes.push(theme.id);
                        pill.classList.add('selected');
                    } else {
                        pill.style.transform = 'translateX(-5px)';
                        setTimeout(() => pill.style.transform = 'translateX(5px)', 100);
                        setTimeout(() => pill.style.transform = 'translateX(0)', 200);
                    }
                }
                
                // Update Button State
                if (selectedNextThemes.length >= 1) {
                    btnStartNext.disabled = false;
                    btnStartNext.innerText = "INICIAR NOVA RODADA";
                } else {
                    btnStartNext.disabled = true;
                    btnStartNext.innerText = `SELECIONE 1 TEMA...`;
                }
            });
            nextPillsContainer.appendChild(pill);
        });
    }

    if (btnStartNext) {
        btnStartNext.addEventListener('click', () => {
            if (selectedNextThemes.length >= 1) {
                // Build a new dynamic array
                tinderData.geral_novo = [];
                selectedNextThemes.forEach(themeId => {
                    const questions = tinderData[themeId] || [];
                    const answeredIds = userAnswers.map(ans => ans.question.texto);
                    const unAnswered = questions.filter(q => !answeredIds.includes(q.texto));
                    tinderData.geral_novo = tinderData.geral_novo.concat(unAnswered.slice(0, 3)); // up to 3 per theme
                });
                
                tinderData.geral_novo = tinderData.geral_novo.sort(() => 0.5 - Math.random());
                
                if (tinderData.geral_novo.length > 0) {
                    currentQuizTheme = 'geral_novo';
                    resultsSection.classList.add('hidden');
                    globalResultsHeader.classList.add('hidden');
                    tinderSection.classList.remove('hidden');
                    
                    // Reset game state for this round
                    currentQuizIndex = 0;
                    tinderProgress.style.width = '0%';
                    tinderCard.style.transform = 'translateX(0) rotate(0deg)';
                    tinderCard.style.opacity = '1';
                    
                    loadQuestion('geral_novo');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                    alert("Você já respondeu todas as perguntas destes temas!");
                }
            }
        });
    }

    btnReset.addEventListener('click', () => {
        // Reset everything completely
        completedQuizzes = { geral: 0, economia: 0, saude: 0, educacao: 0, seguranca: 0 };
        currentProfileCategory = 'default';
        profileForm.reset();
        inputCategoria.value = '';
        userAnswers = [];
        affinityScores = { lula: 0, bolsonaro: 0 };
        
        // Hide game and results, show intro
        tinderSection.classList.add('hidden');
        globalResultsHeader.classList.add('hidden');
        resultsSection.classList.add('hidden');
        introSection.classList.remove('hidden');
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const btnShare = document.getElementById('btn-share');
    if (btnShare) {
        btnShare.addEventListener('click', async () => {
            const percLulaStr = document.getElementById('perc-lula').innerText;
            const percBolsStr = document.getElementById('perc-bolsonaro').innerText;
            const pLula = parseInt(percLulaStr) || 0;
            const pBols = parseInt(percBolsStr) || 0;
            
            let resultText = '';
            if (pLula > pBols) {
                resultText = `Fiz o Teste Cego Político e descobri que meu alinhamento real é ${percLulaStr} com Lula!`;
            } else if (pBols > pLula) {
                resultText = `Fiz o Teste Cego Político e descobri que meu alinhamento real é ${percBolsStr} com Flávio Bolsonaro!`;
            } else {
                resultText = `Fiz o Teste Cego Político e meu alinhamento foi um empate exato!`;
            }

            const shareData = {
                title: 'Quem Votar? - Teste Cego',
                text: `${resultText} Descubra o seu perfil baseado em ações reais, não em discursos.`,
                url: window.location.origin
            };

            if (navigator.share) {
                try {
                    await navigator.share(shareData);
                } catch (err) {
                    console.log('Error sharing', err);
                }
            } else {
                navigator.clipboard.writeText(`${shareData.text} Faça o teste em: ${shareData.url}`).then(() => {
                    const originalText = btnShare.innerHTML;
                    btnShare.innerHTML = 'Copiado para a área de transferência!';
                    setTimeout(() => { btnShare.innerHTML = originalText; }, 2000);
                });
            }
        });
    }

    function fillCandidateData(candidateId, theme) {
        const data = politicalData[candidateId];
        
        // 1. Impacto Direto
        let mapTheme = theme;
        if (theme === 'economia') mapTheme = 'comercio';
        if (theme === 'saude') mapTheme = 'saude';
        if (theme === 'educacao') mapTheme = 'educacao';
        if (theme === 'seguranca') mapTheme = 'direito';
        
        const impactText = data.propostas[mapTheme] || "Ainda estamos catalogando o impacto direto das propostas mais recentes do candidato neste eixo temático. Continue respondendo para formar seu alinhamento.";
        document.getElementById(`impact-${candidateId}`).innerText = impactText;

        // 2. Histórico
        const historyList = document.getElementById(`history-${candidateId}`);
        historyList.innerHTML = ''; 
        
        const historicos = data.historico[mapTheme] || data.historico.default;
        historicos.forEach(item => {
            const li = document.createElement('li');
            li.innerText = item;
            historyList.appendChild(li);
        });

        // 3. Fato vs Discurso (Fact-checking)
        let factTheme = 'default';
        if (mapTheme === 'saude') factTheme = 'saude';
        else if (mapTheme === 'comercio' || mapTheme === 'industria' || mapTheme === 'autonomo') factTheme = 'economia';
        
        const factData = data.factCheck[factTheme] || data.factCheck.default;
        const factBox = document.getElementById(`fact-${candidateId}`);
        
        factBox.innerHTML = `
            <p class="discurso">"${factData.discurso}"</p>
            <div class="fato">
                <span class="status-badge status-${factData.status}">${factData.status}</span>
                <span>${factData.fato}</span>
            </div>
        `;
    }
});
