const appThemes = [
    {
        "id": "economia",
        "name": "Economia e Empreendedorismo",
        "icon": "💰"
    },
    {
        "id": "saude",
        "name": "Saúde Pública",
        "icon": "🏥"
    },
    {
        "id": "educacao",
        "name": "Educação",
        "icon": "📚"
    },
    {
        "id": "seguranca",
        "name": "Segurança Pública",
        "icon": "🚓"
    },
    {
        "id": "meio_ambiente",
        "name": "Meio Ambiente",
        "icon": "🌳"
    },
    {
        "id": "direitos_humanos",
        "name": "Minorias e Cotas",
        "icon": "✊🏽"
    },
    {
        "id": "infraestrutura",
        "name": "Infraestrutura e Obras",
        "icon": "🏗️"
    },
    {
        "id": "politica_externa",
        "name": "Política Externa",
        "icon": "🌍"
    },
    {
        "id": "corrupcao",
        "name": "Transparência e Corrupção",
        "icon": "⚖️"
    },
    {
        "id": "privatizacoes",
        "name": "Privatizações e Estatais",
        "icon": "🏢"
    },
    {
        "id": "costumes",
        "name": "Costumes e Valores",
        "icon": "⛪"
    },
    {
        "id": "trabalho",
        "name": "Direitos Trabalhistas",
        "icon": "💼"
    }
];

const tinderData = {
    "geral": [
        {
            "texto": "Priorizar o perdão e renegociação de dívidas da população inadimplente através de fundos garantidores.",
            "tipo": "Ação Realizada",
            "candidato": "lula",
            "fonte": "https://www.google.com/search?q=governo+lula+desenrola+brasil",
            "detalhe": "Lançou o Desenrola Brasil com subsídio estatal em 2023."
        },
        {
            "texto": "Sancionar a independência do Banco Central para evitar interferência política na taxa de juros.",
            "tipo": "Ação Realizada",
            "candidato": "bolsonaro",
            "fonte": "https://www.google.com/search?q=lei+autonomia+banco+central+2021",
            "detalhe": "Sancionou a Lei Complementar 179/2021 (autonomia do BC)."
        }
    ],
    "economia": [
        {
            "texto": "Aumentar a arrecadação taxando fundos de investimento de super-ricos ('Offshores' e Fundos Exclusivos).",
            "tipo": "Ação Realizada",
            "candidato": "lula",
            "fonte": "https://www.google.com/search?q=lula+taxacao+offshores",
            "detalhe": "Focou em taxar quem mantinha investimentos milionários isentos."
        },
        {
            "texto": "Cortar impostos e zerar tributos sobre eletrônicos, videogames, jet-skis e suplementos.",
            "tipo": "Ação Realizada",
            "candidato": "bolsonaro",
            "fonte": "https://www.google.com/search?q=bolsonaro+reduz+ipi+videogames",
            "detalhe": "Priorizou redução de impostos para setores de consumo específico."
        },
        {
            "texto": "Taxar pequenas compras internacionais (como Shein e AliExpress) para defender o varejo nacional.",
            "tipo": "Ação Realizada",
            "candidato": "lula",
            "fonte": "https://www.google.com/search?q=lula+taxacao+shein",
            "detalhe": "Passou a cobrar impostos ('Taxa das Blusinhas') para compras abaixo de US$ 50."
        },
        {
            "texto": "Forçar estatal petrolífera a baixar o preço da gasolina cortando impostos estaduais (ICMS).",
            "tipo": "Ação Realizada",
            "candidato": "bolsonaro",
            "fonte": "https://www.google.com/search?q=bolsonaro+teto+icms+combustiveis",
            "detalhe": "Congelou impostos para conter a inflação às vésperas da eleição."
        },
        {
            "texto": "Acabar com a política de paridade de preços internacionais da Petrobras para baratear combustíveis internamente.",
            "tipo": "Ação Realizada",
            "candidato": "lula",
            "fonte": "https://www.google.com/search?q=petrobras+fim+paridade+importacao+lula",
            "detalhe": "Mudou a precificação (PPI) para reduzir o repasse do barril de petróleo ao consumidor."
        },
        {
            "texto": "Aprovar uma Reforma da Previdência que aumente o tempo de contribuição e idade mínima para se aposentar.",
            "tipo": "Ação Realizada",
            "candidato": "bolsonaro",
            "fonte": "https://www.google.com/search?q=reforma+da+previdencia+bolsonaro",
            "detalhe": "Aprovou a dura reforma em 2019 para evitar o colapso das contas públicas."
        }
    ],
    "saude": [
        {
            "texto": "Trazer profissionais médicos estrangeiros (incluindo de Cuba) para atuar em locais remotos do país sem validação prévia de diploma.",
            "tipo": "Ação Realizada",
            "candidato": "lula",
            "fonte": "https://www.google.com/search?q=lula+recria+mais+medicos+2023",
            "detalhe": "Recriou o Mais Médicos argumentando falta de interesse de brasileiros nas periferias."
        },
        {
            "texto": "Incentivar tratamentos preventivos sem comprovação científica ('tratamento precoce') e criticar regras globais de isolamento.",
            "tipo": "Ação Realizada",
            "candidato": "bolsonaro",
            "fonte": "https://www.google.com/search?q=bolsonaro+tratamento+precoce+cloroquina",
            "detalhe": "Atuou ativamente na pandemia recomendando kit-covid."
        },
        {
            "texto": "Fazer campanha ativa pelo Zé Gotinha, aumentando radicalmente o orçamento para campanhas de vacinação em massa.",
            "tipo": "Ação Realizada",
            "candidato": "lula",
            "fonte": "https://www.google.com/search?q=lula+ze+gotinha+campanha+vacinacao",
            "detalhe": "Investiu no aumento da cobertura vacinal infantil que estava caindo."
        },
        {
            "texto": "Instituir o Programa Médicos pelo Brasil para substituir estrangeiros e focar na contratação de médicos formados no país.",
            "tipo": "Ação Realizada",
            "candidato": "bolsonaro",
            "fonte": "https://www.google.com/search?q=medicos+pelo+brasil+bolsonaro",
            "detalhe": "Criado para substituir o Mais Médicos exigindo Revalida."
        }
    ],
    "educacao": [
        {
            "texto": "Criar o ProUni, trocando impostos de faculdades privadas por bolsas de estudo para alunos carentes.",
            "tipo": "Ação Realizada",
            "candidato": "lula",
            "fonte": "https://www.google.com/search?q=lula+criacao+do+prouni",
            "detalhe": "Foi o maior programa de inserção em universidades privadas da história."
        },
        {
            "texto": "Implementar Escolas Cívico-Militares usando oficiais da reserva para instituir disciplina e gerir as escolas.",
            "tipo": "Ação Realizada",
            "candidato": "bolsonaro",
            "fonte": "https://www.google.com/search?q=bolsonaro+escolas+civico+militares",
            "detalhe": "Defendeu a militarização escolar para melhorar a segurança e as notas."
        },
        {
            "texto": "Expandir massivamente o FIES (financiamento estudantil), permitindo que estudantes assumissem grandes dívidas para estudar.",
            "tipo": "Ação Realizada",
            "candidato": "lula",
            "fonte": "https://www.google.com/search?q=pt+expansao+fies",
            "detalhe": "Aboliu fiadores em muitos casos, gerando acesso, mas criando uma bolha de inadimplência posterior."
        },
        {
            "texto": "Sancionar o Novo Ensino Médio, que permite ao jovem escolher parte da grade escolar (itinerários formativos).",
            "tipo": "Ação Realizada",
            "candidato": "bolsonaro",
            "fonte": "https://www.google.com/search?q=bolsonaro+novo+ensino+medio",
            "detalhe": "Implementou o NEM, focado em empreendedorismo, reduzindo a carga de matérias básicas."
        }
    ],
    "infraestrutura": [
        {
            "texto": "Lançar pacotes trilionários do PAC (Programa de Aceleração do Crescimento) apostando em grandes obras estatais.",
            "tipo": "Ação Realizada",
            "candidato": "lula",
            "fonte": "https://www.google.com/search?q=novo+pac+lula+2023",
            "detalhe": "Obras como ferrovias e transposição de rios sempre focadas em investimento público maciço."
        },
        {
            "texto": "Sancionar o Marco do Saneamento Básico para atrair dinheiro de empresas privadas para o tratamento de água e esgoto.",
            "tipo": "Ação Realizada",
            "candidato": "bolsonaro",
            "fonte": "https://www.google.com/search?q=marco+saneamento+bolsonaro+2020",
            "detalhe": "Obrigou estados a fazerem licitações privadas, acelerando leilões de esgoto."
        },
        {
            "texto": "Usar dinheiro do BNDES para investir na expansão e infraestrutura interna de estádios de futebol (como na Copa de 2014).",
            "tipo": "Ação Realizada",
            "candidato": "lula",
            "fonte": "https://www.google.com/search?q=bndes+estadios+copa",
            "detalhe": "Os governos do PT financiaram arenas com juros subsidiados."
        },
        {
            "texto": "Passar a gestão e operação dos maiores aeroportos do país para grandes consórcios internacionais.",
            "tipo": "Ação Realizada",
            "candidato": "bolsonaro",
            "fonte": "https://www.google.com/search?q=tarcisio+bolsonaro+leiloes+aeroportos",
            "detalhe": "O governo executou pesados leilões de concessão nos transportes via Ministério da Infraestrutura."
        }
    ],
    "seguranca": [
        {
            "texto": "Facilitar a posse e o porte de fuzis e pistolas para caçadores, atiradores e colecionadores (CACs).",
            "tipo": "Ação Realizada",
            "candidato": "bolsonaro",
            "fonte": "https://www.google.com/search?q=decretos+bolsonaro+armas",
            "detalhe": "Editou mais de 40 decretos flexibilizando a compra de armas."
        },
        {
            "texto": "Aumentar as restrições para armas de fogo e proibir o funcionamento de clubes de tiro 24h.",
            "tipo": "Ação Realizada",
            "candidato": "lula",
            "fonte": "https://www.google.com/search?q=decreto+lula+armas",
            "detalhe": "Assinou decreto desfazendo as flexibilizações de seu antecessor."
        },
        {
            "texto": "Apoiar a isenção de punição judicial (Excludente de Ilicitude) para policiais que matarem em serviço.",
            "tipo": "Projeto Apoiado",
            "candidato": "bolsonaro",
            "fonte": "https://www.google.com/search?q=bolsonaro+excludente+de+ilicitude",
            "detalhe": "Defendeu que 'policial tem que ser condecorado, não processado' ao atirar."
        },
        {
            "texto": "Criar leis rigorosas de desarmamento, focadas em confiscar e destruir revólveres ilegais da população (Estatuto do Desarmamento).",
            "tipo": "Ação Realizada",
            "candidato": "lula",
            "fonte": "https://www.google.com/search?q=lula+estatuto+desarmamento",
            "detalhe": "Sancionou a Lei 10.826 em seu primeiro mandato."
        },
        {
            "texto": "Transferir os maiores chefes de facções criminosas (como o PCC) para presídios federais de segurança máxima.",
            "tipo": "Ação Realizada",
            "candidato": "bolsonaro",
            "fonte": "https://www.google.com/search?q=moro+bolsonaro+transferencia+marcola",
            "detalhe": "Ministério da Justiça transferiu Marcola e proibiu visitas íntimas nos presídios federais."
        },
        {
            "texto": "Investir fortemente no financiamento de polícias com foco na assistência social e combate à desigualdade (PRONASCI).",
            "tipo": "Ação Realizada",
            "candidato": "lula",
            "fonte": "https://www.google.com/search?q=lula+pronasci",
            "detalhe": "Cria bolsas de formação para policiais aliadas a ações educacionais em comunidades carentes."
        }
    ],
    "meio_ambiente": [
        {
            "texto": "Flexibilizar regras e aplicar 'conciliações' para reduzir a cobrança de multas do Ibama contra desmatadores.",
            "tipo": "Ação Realizada",
            "candidato": "bolsonaro",
            "fonte": "https://www.google.com/search?q=bolsonaro+flexibiliza+multas+ambientais",
            "detalhe": "Sob o comando de Ricardo Salles, paralisou a aplicação de infrações ambientais."
        },
        {
            "texto": "Demarcar rapidamente diversas terras indígenas paralisadas e estrangular garimpos ilegais.",
            "tipo": "Ação Realizada",
            "candidato": "lula",
            "fonte": "https://www.google.com/search?q=lula+demarcacao+terras+indigenas",
            "detalhe": "Emplacou ações pesadas contra os garimpos na terra Yanomami."
        },
        {
            "texto": "Apoiar a legalização e exploração mineral (garimpo empresarial) dentro de reservas indígenas e áreas protegidas.",
            "tipo": "Projeto Apoiado",
            "candidato": "bolsonaro",
            "fonte": "https://www.google.com/search?q=bolsonaro+mineracao+terras+indigenas",
            "detalhe": "Enviou PL 191/2020 ao congresso argumentando independência econômica."
        },
        {
            "texto": "Reativar fundos bilionários recebendo dinheiro da Europa (Alemanha/Noruega) para financiar ONGs e ações na Amazônia.",
            "tipo": "Ação Realizada",
            "candidato": "lula",
            "fonte": "https://www.google.com/search?q=lula+reativa+fundo+amazonia",
            "detalhe": "Descongelou R$ 3 bi do Fundo Amazônia no primeiro dia de governo."
        }
    ],
    "trabalho": [
        {
            "texto": "Votar a favor da Reforma Trabalhista que ampliou a terceirização e encerrou o imposto sindical obrigatório.",
            "tipo": "Voto Legislativo",
            "candidato": "bolsonaro",
            "fonte": "https://www.google.com/search?q=bolsonaro+votou+a+favor+reforma+trabalhista",
            "detalhe": "Apoiou a flexibilização das leis trabalhistas no governo Temer."
        },
        {
            "texto": "Tentar aprovar leis obrigando a Uber e aplicativos de entrega a pagarem contribuição ao INSS para os motoristas.",
            "tipo": "Projeto Enviado",
            "candidato": "lula",
            "fonte": "https://www.google.com/search?q=lula+regulamentacao+uber",
            "detalhe": "Visa regulamentar a 'uberização', exigindo previdência e piso por hora."
        },
        {
            "texto": "Criar modalidades de contrato que cortem pela metade o FGTS e os encargos para incentivar a contratação de jovens.",
            "tipo": "Medida Provisória",
            "candidato": "bolsonaro",
            "fonte": "https://www.google.com/search?q=carteira+verde+e+amarela+bolsonaro",
            "detalhe": "A 'Carteira Verde e Amarela' tentou desonerar empresas retirando garantias dos novatos."
        },
        {
            "texto": "Garantir a retomada do aumento real do Salário Mínimo todo ano (Inflação + Crescimento do PIB).",
            "tipo": "Ação Realizada",
            "candidato": "lula",
            "fonte": "https://www.google.com/search?q=lula+salario+minimo+inflacao+pib",
            "detalhe": "Transformou em lei a valorização sistemática do salário base."
        }
    ],
    "corrupcao": [
        {
            "texto": "Impor 'Sigilo de 100 anos' sobre o próprio cartão de vacinas, registros de visitantes e processos militares.",
            "tipo": "Ação Administrativa",
            "candidato": "bolsonaro",
            "fonte": "https://www.google.com/search?q=bolsonaro+sigilo+100+anos",
            "detalhe": "Bloqueou jornalistas via LAI alegando questões de 'privacidade'."
        },
        {
            "texto": "Sancionar a criação do Portal da Transparência, a Controladoria (CGU) e a Lei de Acesso à Informação (LAI).",
            "tipo": "Ação Realizada",
            "candidato": "lula",
            "fonte": "https://www.google.com/search?q=lula+lai+portal+da+transparencia",
            "detalhe": "Modernizou a fiscalização pública, embora seus governos tivessem enormes escândalos."
        },
        {
            "texto": "Comandar o orçamento bilionário das Emendas de Relator ('Orçamento Secreto'), onde deputados gastavam sem serem identificados.",
            "tipo": "Ação Realizada",
            "candidato": "bolsonaro",
            "fonte": "https://www.google.com/search?q=bolsonaro+orcamento+secreto+rp9",
            "detalhe": "Institucionalizou a RP9 para comprar a base aliada no Congresso."
        },
        {
            "texto": "Liderar coalizões de governo que resultaram no aparelhamento sistêmico de Diretorias de Estatais como a Petrobras.",
            "tipo": "Fato Histórico (Lava-Jato)",
            "candidato": "lula",
            "fonte": "https://www.google.com/search?q=lula+petrolao",
            "detalhe": "Resultou no escândalo do Petrolão durante os anos PT."
        }
    ],
    "politica_externa": [
        {
            "texto": "Alinhar-se fortemente aos EUA (Trump) e Israel, criticando blocos sul-americanos dominados pela esquerda.",
            "tipo": "Diplomacia Executada",
            "candidato": "bolsonaro",
            "fonte": "https://www.google.com/search?q=bolsonaro+alianca+trump",
            "detalhe": "Adotou a diplomacia ideológica da direita global (antiglobalismo)."
        },
        {
            "texto": "Restabelecer laços calorosos com a Venezuela (Maduro) e buscar forte financiamento da China.",
            "tipo": "Diplomacia Executada",
            "candidato": "lula",
            "fonte": "https://www.google.com/search?q=lula+recebe+maduro",
            "detalhe": "Aposta no 'Sul Global' (BRICS) e minimiza ditaduras de esquerda."
        },
        {
            "texto": "Ameaçar formalmente tirar o país da Organização Mundial da Saúde (OMS) durante emergências globais.",
            "tipo": "Declaração e Ameaça",
            "candidato": "bolsonaro",
            "fonte": "https://www.google.com/search?q=bolsonaro+sair+da+oms",
            "detalhe": "Culpou a entidade pelas perdas econômicas das quarentenas."
        },
        {
            "texto": "Criticar o envio de armas ocidentais para a Ucrânia se defender da invasão da Rússia, e igualar as culpas da guerra.",
            "tipo": "Declaração Externa",
            "candidato": "lula",
            "fonte": "https://www.google.com/search?q=lula+ucrania+russia+armas",
            "detalhe": "Causou rusgas diplomáticas severas com os EUA e Europa."
        }
    ],
    "privatizacoes": [
        {
            "texto": "Privatizar a maior empresa de geração de energia da América Latina (Eletrobras).",
            "tipo": "Sanção de Lei",
            "candidato": "bolsonaro",
            "fonte": "https://www.google.com/search?q=bolsonaro+sanciona+privatizacao+eletrobras",
            "detalhe": "Sancionou a capitalização repassando o controle elétrico ao mercado."
        },
        {
            "texto": "Suspender qualquer processo de privatização de gigantes como os Correios e a Dataprev.",
            "tipo": "Decreto Executivo",
            "candidato": "lula",
            "fonte": "https://www.google.com/search?q=lula+retira+correios+privatizacao",
            "detalhe": "Defende o monopólio e gerência estatal destas empresas sociais."
        },
        {
            "texto": "Tentar viabilizar a privatização das refinarias da Petrobras para quebrar o monopólio da gasolina.",
            "tipo": "Ação Executiva",
            "candidato": "bolsonaro",
            "fonte": "https://www.google.com/search?q=venda+refinarias+petrobras+bolsonaro",
            "detalhe": "Assinou a venda de refinarias (ex: RLAM) na Bahia para grupos estrangeiros."
        },
        {
            "texto": "Processar a própria União no STF para reaver poder na diretoria da Eletrobras (que já foi privatizada).",
            "tipo": "Ação Judicial",
            "candidato": "lula",
            "fonte": "https://www.google.com/search?q=lula+stf+eletrobras",
            "detalhe": "Busca anular a cláusula de limitação de votos aprovada pelo congresso anterior."
        }
    ],
    "direitos_humanos": [
        {
            "texto": "Sancionar Cotas Raciais obrigatórias para entrada em Universidades Federais.",
            "tipo": "Ação Realizada",
            "candidato": "lula",
            "fonte": "https://www.google.com/search?q=lei+de+cotas+2012+pt",
            "detalhe": "Aprovou a lei em 2012 e manteve a ampliação 10 anos depois."
        },
        {
            "texto": "Afirmar que 'as minorias devem se curvar às maiorias ou desaparecer' em discursos oficiais de campanha.",
            "tipo": "Discurso Político",
            "candidato": "bolsonaro",
            "fonte": "https://www.google.com/search?q=bolsonaro+as+minorias+devem+se+curvar",
            "detalhe": "Defende uma democracia majoritária sem excesso de proteções específicas."
        },
        {
            "texto": "Criar orçamentos massivos e Ministérios Exclusivos para Povos Indígenas e Igualdade Racial.",
            "tipo": "Estrutura de Governo",
            "candidato": "lula",
            "fonte": "https://www.google.com/search?q=lula+ministerio+povos+indigenas",
            "detalhe": "Deu enorme poder de caneta a movimentos ativistas como Sônia Guajajara e Anielle Franco."
        },
        {
            "texto": "Fundir a pasta de Direitos Humanos no Ministério da Mulher, da Família e sob comando conservador (Damares Alves).",
            "tipo": "Estrutura de Governo",
            "candidato": "bolsonaro",
            "fonte": "https://www.google.com/search?q=damares+ministerio+direitos+humanos+bolsonaro",
            "detalhe": "Mudou o foco para proteção familiar e defesa do direito à vida desde a concepção."
        }
    ],
    "costumes": [
        {
            "texto": "Pautar o mandato quase totalmente no combate ao 'Kit Gay' e à discussão de gênero em escolas.",
            "tipo": "Pilar de Campanha",
            "candidato": "bolsonaro",
            "fonte": "https://www.google.com/search?q=bolsonaro+kit+gay",
            "detalhe": "Se elegeu sendo a principal voz reacionária contra as pautas LGBTQ+."
        },
        {
            "texto": "Apoiar a criação do Programa 'Brasil Sem Homofobia', injetando cartilhas nas escolas pelo Ministério da Educação.",
            "tipo": "Programa Governamental",
            "candidato": "lula",
            "fonte": "https://www.google.com/search?q=brasil+sem+homofobia+governo+pt",
            "detalhe": "Iniciou as políticas públicas de diversidade educacional."
        },
        {
            "texto": "Vetar qualquer Projeto de Lei que facilite aborto ou descriminalização das drogas.",
            "tipo": "Vetos Presidenciais",
            "candidato": "bolsonaro",
            "fonte": "https://www.google.com/search?q=bolsonaro+vetos+aborto+drogas",
            "detalhe": "Alinhamento 100% à pauta da bancada evangélica."
        },
        {
            "texto": "Assinar portarias permitindo que pessoas trans usem o seu 'Nome Social' no crachá e documentações em todo o funcionalismo público.",
            "tipo": "Ação Executiva",
            "candidato": "lula",
            "fonte": "https://www.google.com/search?q=lula+dilma+nome+social",
            "detalhe": "Garante o direito do indivíduo a não utilizar o registro civil se for trans."
        }
    ]
};

const politicalData = {
    "lula": {
        "propostas": {
            "default": "As propostas completas ainda estão sendo mapeadas para esta área."
        },
        "historico": {
            "default": [
                "Aguardando detalhamento do histórico de votações em plenário."
            ]
        },
        "factCheck": {
            "default": {
                "discurso": "Nós vamos resolver esse problema com muito diálogo.",
                "status": "IMPRECISO",
                "prova": "Muitas das ações do governo desmentem parcialmente o discurso adotado na TV."
            },
            "economia": {
                "discurso": "Nós vamos cuidar dos pobres cortando privilégios e os ricos vão pagar mais.",
                "status": "MEIA-VERDADE",
                "prova": "Houve a taxação dos super-ricos (offshores), mas o governo também aumentou o imposto sobre compras de baixo valor da classe média/baixa (Taxa das Blusinhas) e retomou PIS/Cofins sobre a gasolina."
            },
            "saude": {
                "discurso": "Nós criamos o SUS e garantimos remédio para todos.",
                "status": "IMPRECISO",
                "prova": "O SUS foi criado em 1988 na Constituinte. O PT ampliou o programa (ex: Farmácia Popular), mas os escândalos de corrupção drenaram bilhões que poderiam ir para a saúde."
            }
        }
    },
    "bolsonaro": {
        "propostas": {
            "default": "As propostas completas ainda estão sendo mapeadas para esta área."
        },
        "historico": {
            "default": [
                "Aguardando detalhamento do histórico de votações em plenário."
            ]
        },
        "factCheck": {
            "default": {
                "discurso": "Nós vamos resolver esse problema com muito diálogo.",
                "status": "IMPRECISO",
                "prova": "Muitas das ações do governo desmentem parcialmente o discurso adotado na TV."
            },
            "economia": {
                "discurso": "Nós assumimos um compromisso liberal e nunca aumentamos impostos.",
                "status": "MEIA-VERDADE",
                "prova": "O governo realmente cortou muito o IPI e ICMS. Porém, houve a piora do déficit público, e sob pressão política as despesas foram furadas reiteradamente (como nas PECs Kamikaze em 2022)."
            },
            "saude": {
                "discurso": "Nós compramos todas as vacinas da Covid o mais rápido possível.",
                "status": "FALSO",
                "prova": "CPIs e e-mails mostraram que o Ministério da Saúde de Pazuello ignorou dezenas de ofertas de vacina da Pfizer por meses e priorizou o lobby da Cloroquina."
            }
        }
    }
};
