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
            "texto": "Priorizar o perdão e renegociação de dívidas da população inadimplente através de fundos garantidores (ex: Desenrola).",
            "tipo": "Ação Realizada (Programa Executivo)",
            "candidato": "lula",
            "fonte": "https://www.google.com/search?q=governo+lula+desenrola+brasil",
            "detalhe": "Lançou o programa de renegociação de dívidas com subsídio estatal em 2023."
        },
        {
            "texto": "Sancionar a independência do Banco Central para tentar evitar interferência política na taxa de juros.",
            "tipo": "Ação Realizada (Sanção Presidencial)",
            "candidato": "bolsonaro",
            "fonte": "https://www.google.com/search?q=lei+autonomia+banco+central+2021",
            "detalhe": "Sancionou a Lei Complementar 179/2021, que deu autonomia ao BC."
        }
    ],
    "seguranca": [
        {
            "texto": "Facilitar o acesso à posse e ao porte de armas de fogo para caçadores, atiradores e colecionadores (CACs).",
            "tipo": "Ação Realizada (Decretos Executivos)",
            "candidato": "bolsonaro",
            "fonte": "https://www.google.com/search?q=decretos+bolsonaro+ampliam+acesso+armas+de+fogo",
            "detalhe": "Editou mais de 40 decretos flexibilizando a compra de armas e munições (2019-2022)."
        },
        {
            "texto": "Aumentar restrições para compra de armas de fogo e diminuir os limites de munições para civis.",
            "tipo": "Ação Realizada (Decreto Executivo)",
            "candidato": "lula",
            "fonte": "https://www.google.com/search?q=decreto+lula+restringe+acesso+armas+julho+2023",
            "detalhe": "Assinou decreto que reverte flexibilizações de armas e recria regras rígidas."
        },
        {
            "texto": "Apoiar a criação de leis que isentem policiais de punição caso matem criminosos em serviço.",
            "tipo": "Projeto Apoiado (Excludente de Ilicitude)",
            "candidato": "bolsonaro",
            "fonte": "https://www.google.com/search?q=bolsonaro+excludente+de+ilicitude+policiais",
            "detalhe": "Defendeu o 'Excludente de Ilicitude' no Pacote Anticrime, alegando proteção ao policial."
        },
        {
            "texto": "Aprovar leis rígidas de desarmamento, proibindo o porte civil de armas na maior parte dos casos.",
            "tipo": "Ação Realizada (Lei)",
            "candidato": "lula",
            "fonte": "https://www.google.com/search?q=estatuto+do+desarmamento+2003+lula",
            "detalhe": "Sancionou o Estatuto do Desarmamento (Lei 10.826) em seu primeiro mandato (2003)."
        }
    ],
    "privatizacoes": [
        {
            "texto": "Privatizar e vender o controle de empresas gigantes de geração de energia (como a Eletrobras).",
            "tipo": "Ação Realizada (Sanção Presidencial)",
            "candidato": "bolsonaro",
            "fonte": "https://www.google.com/search?q=bolsonaro+sanciona+privatizacao+eletrobras",
            "detalhe": "Sancionou a capitalização e desestatização da Eletrobras em 2022."
        },
        {
            "texto": "Retirar empresas como os Correios e a EBC (TV Brasil) dos planos de desestatização.",
            "tipo": "Ação Realizada (Decreto Presidencial)",
            "candidato": "lula",
            "fonte": "https://www.google.com/search?q=lula+retira+correios+privatizacao",
            "detalhe": "No primeiro dia de mandato em 2023, assinou decreto impedindo a privatização de várias estatais."
        },
        {
            "texto": "Iniciar os trâmites para a privatização da Casa da Moeda, Ceagesp e Dataprev.",
            "tipo": "Programa de Governo (PPI)",
            "candidato": "bolsonaro",
            "fonte": "https://www.google.com/search?q=bolsonaro+PPI+casa+da+moeda+dataprev",
            "detalhe": "Incluiu várias estatais estratégicas de dados no programa de privatização."
        },
        {
            "texto": "Acionar a Justiça para tentar reverter as regras de privatização da maior estatal de energia (Eletrobras).",
            "tipo": "Ação Judicial / Advocacia-Geral",
            "candidato": "lula",
            "fonte": "https://www.google.com/search?q=lula+agu+stf+reverter+eletrobras",
            "detalhe": "Tentou reaver o poder de voto do Estado na Eletrobras mesmo após ela ter sido vendida."
        }
    ],
    "meio_ambiente": [
        {
            "texto": "Flexibilizar regras e perdoar multas ambientais para facilitar a expansão do setor produtivo agrícola.",
            "tipo": "Ação Realizada (Decretos e Portarias)",
            "candidato": "bolsonaro",
            "fonte": "https://www.google.com/search?q=governo+bolsonaro+flexibiliza+multas+ambientais+ibama",
            "detalhe": "Mecanismos de conciliação paralisaram a cobrança de bilhões em multas do Ibama."
        },
        {
            "texto": "Retomar a demarcação de terras indígenas e aumentar as restrições e o rigor nas fiscalizações do Ibama.",
            "tipo": "Ação Realizada (Decretos Presidenciais)",
            "candidato": "lula",
            "fonte": "https://www.google.com/search?q=lula+demarca+terras+indigenas+2023+ibama",
            "detalhe": "Demarcou novas reservas e recompôs a diretoria de fiscalização do Ibama."
        },
        {
            "texto": "Estimular ativamente a regularização de garimpos e a mineração em áreas indígenas.",
            "tipo": "Projeto de Lei Enviado",
            "candidato": "bolsonaro",
            "fonte": "https://www.google.com/search?q=bolsonaro+projeto+mineracao+terras+indigenas",
            "detalhe": "Enviou ao Congresso projeto para permitir mineração empresarial em áreas demarcadas."
        },
        {
            "texto": "Reativar fundos internacionais (como o Fundo Amazônia) com doações de ONGs e governos europeus para fiscalização.",
            "tipo": "Ação Realizada",
            "candidato": "lula",
            "fonte": "https://www.google.com/search?q=lula+reativa+fundo+amazonia",
            "detalhe": "Descongelou R$ 3 bilhões doados por Alemanha e Noruega que estavam travados desde 2019."
        }
    ],
    "trabalho": [
        {
            "texto": "Aprovar uma grande Reforma Trabalhista, ampliando a terceirização e retirando a obrigatoriedade do imposto sindical.",
            "tipo": "Votação Realizada no Congresso",
            "candidato": "bolsonaro",
            "fonte": "https://www.google.com/search?q=como+jair+bolsonaro+votou+reforma+trabalhista+2017",
            "detalhe": "Como deputado, votou a favor da Reforma Trabalhista (governo Temer) que precarizou certos contratos."
        },
        {
            "texto": "Criar um projeto para exigir que empresas de aplicativo (como Uber) paguem INSS aos motoristas e sigam jornada máxima.",
            "tipo": "Projeto de Lei",
            "candidato": "lula",
            "fonte": "https://www.google.com/search?q=lula+projeto+uber+motoristas+de+aplicativo+2024",
            "detalhe": "Projeto visa regulamentar a classe, embora motoristas temam perda de autonomia."
        },
        {
            "texto": "Criar a 'Carteira Verde e Amarela', que reduz os encargos do empregador para estimular a contratação de jovens.",
            "tipo": "Medida Provisória (Rejeitada)",
            "candidato": "bolsonaro",
            "fonte": "https://www.google.com/search?q=bolsonaro+carteira+verde+e+amarela",
            "detalhe": "Buscava desonerar folhas de pagamento cortando garantias trabalhistas para novos empregados."
        },
        {
            "texto": "Instituir uma política de valorização real e automática do salário mínimo (reajuste sempre acima da inflação).",
            "tipo": "Ação Realizada",
            "candidato": "lula",
            "fonte": "https://www.google.com/search?q=lula+politica+valorizacao+salario+minimo+inflacao+pib",
            "detalhe": "Retomou a regra que atrela o salário mínimo à inflação mais o crescimento do PIB."
        }
    ],
    "corrupcao": [
        {
            "texto": "Impor sigilos de até 100 anos em documentos governamentais de interesse público (como processos militares e registros de visitas).",
            "tipo": "Ação Realizada (Decretos e Atos Administrativos)",
            "candidato": "bolsonaro",
            "fonte": "https://www.google.com/search?q=bolsonaro+sigilo+100+anos+documentos",
            "detalhe": "Bloqueou o acesso a dados pela LAI sob argumento de segurança e privacidade pessoal."
        },
        {
            "texto": "Sancionar a Lei de Acesso à Informação (LAI) e lançar o Portal da Transparência do Governo Federal.",
            "tipo": "Ação Realizada (Leis e Portais)",
            "candidato": "lula",
            "fonte": "https://www.google.com/search?q=governo+pt+sanciona+lei+de+acesso+a+informacao+portal+da+transparencia",
            "detalhe": "Estruturou os principais meios de transparência no primeiro e segundo mandatos."
        },
        {
            "texto": "Alocar bilhões do Orçamento Público em Emendas de Relator ('Orçamento Secreto'), onde deputados não são identificados nominalmente.",
            "tipo": "Ação Realizada (Execução Orçamentária)",
            "candidato": "bolsonaro",
            "fonte": "https://www.google.com/search?q=governo+bolsonaro+orcamento+secreto+rp9",
            "detalhe": "Institucionalizou o pagamento de verbas sem rastreabilidade para conseguir base aliada no Congresso."
        },
        {
            "texto": "Determinar por decreto o fim de vários sigilos de 100 anos de governos anteriores.",
            "tipo": "Ação Realizada (Revogação de Atos)",
            "candidato": "lula",
            "fonte": "https://www.google.com/search?q=lula+quebra+sigilo+100+anos+bolsonaro",
            "detalhe": "Tornou públicos processos envolvendo militares e registros de visitas presidenciais."
        }
    ],
    "politica_externa": [
        {
            "texto": "Alinhar o país fortemente aos Estados Unidos e a Israel, isolando-se de países da América do Sul alinhados à esquerda.",
            "tipo": "Ação Realizada (Diplomacia)",
            "candidato": "bolsonaro",
            "fonte": "https://www.google.com/search?q=bolsonaro+politica+externa+eua+israel",
            "detalhe": "Na ONU, mudou padrões históricos brasileiros para votar em alinhamento com Trump."
        },
        {
            "texto": "Restabelecer laços diplomáticos com ditaduras da América Latina (como a Venezuela) e promover o bloco BRICS.",
            "tipo": "Ação Realizada (Diplomacia)",
            "candidato": "lula",
            "fonte": "https://www.google.com/search?q=lula+restabelece+relacoes+venezuela+maduro",
            "detalhe": "Recebeu Nicolas Maduro no Brasil com honras de chefe de estado, gerando forte polêmica."
        },
        {
            "texto": "Atacar abertamente organizações globais como a OMS e a ONU, ameaçando sair de conselhos internacionais.",
            "tipo": "Discurso Público / Ameaça Governamental",
            "candidato": "bolsonaro",
            "fonte": "https://www.google.com/search?q=bolsonaro+ameaca+sair+da+oms+2020",
            "detalhe": "Culpou a Organização Mundial da Saúde por políticas restritivas durante a pandemia."
        },
        {
            "texto": "Recusar o envio de munições para nações em guerra (como a Ucrânia), preferindo manter posição de neutralidade/mediação.",
            "tipo": "Ação Realizada (Recusa de Pedido Internacional)",
            "candidato": "lula",
            "fonte": "https://www.google.com/search?q=lula+recusa+enviar+municoes+ucrania",
            "detalhe": "Contrariou potências ocidentais ao não apoiar militarmente a Ucrânia contra a Rússia."
        }
    ],
    "economia": [
        {
            "texto": "Aumentar a arrecadação taxando fundos de investimento de super-ricos ('Offshores' e Fundos Exclusivos).",
            "tipo": "Ação Realizada (Projeto de Lei Aprovado)",
            "candidato": "lula",
            "fonte": "https://www.google.com/search?q=lula+taxacao+offshores+fundos+exclusivos",
            "detalhe": "Focou em taxar quem mantinha investimentos milionários isentos ou postergados."
        },
        {
            "texto": "Cortar impostos e zerar tributos sobre eletrônicos, videogames, jet-skis e suplementos (IPI).",
            "tipo": "Ação Realizada (Decretos Presidenciais)",
            "candidato": "bolsonaro",
            "fonte": "https://www.google.com/search?q=bolsonaro+reduz+ipi+videogames+jetskis",
            "detalhe": "Apesar do déficit nas contas públicas, priorizou redução de impostos para setores de consumo específico."
        },
        {
            "texto": "Taxar pequenas compras internacionais (como Shein e AliExpress) para defender o varejo nacional.",
            "tipo": "Ação Realizada (Remessa Conforme)",
            "candidato": "lula",
            "fonte": "https://www.google.com/search?q=governo+lula+taxacao+compras+internacionais+shein",
            "detalhe": "Passou a cobrar impostos em compras abaixo de 50 dólares (a chamada 'Taxa das Blusinhas')."
        },
        {
            "texto": "Forçar estatal petrolífera a baixar o preço da gasolina na marra durante período pré-eleitoral, cortando impostos estaduais (ICMS).",
            "tipo": "Ação Realizada (Articulação e Lei Complementar)",
            "candidato": "bolsonaro",
            "fonte": "https://www.google.com/search?q=bolsonaro+teto+icms+combustiveis+2022",
            "detalhe": "Congelou impostos para conter a inflação às vésperas da eleição, o que gerou rombo para prefeituras."
        }
    ],
    "direitos_humanos": [
        {
            "texto": "Sancionar e criar a lei que instituiu Cotas Raciais obrigatórias para o ingresso em Universidades Federais.",
            "tipo": "Ação Realizada (Sanção de Lei)",
            "candidato": "lula",
            "fonte": "https://www.google.com/search?q=governo+pt+lei+de+cotas+2012",
            "detalhe": "Criada nos governos do partido (2012) para inserir minorias no ensino superior."
        },
        {
            "texto": "Criar regras que retiram o poder e desidratam fundos e conselhos da sociedade civil (como o conselho de combate à tortura).",
            "tipo": "Ação Realizada (Decreto do 'Revogaço')",
            "candidato": "bolsonaro",
            "fonte": "https://www.google.com/search?q=bolsonaro+extingue+conselhos+participacao+social",
            "detalhe": "Extinguiu por decreto diversos colegiados de controle social argumentando inchaço na máquina."
        },
        {
            "texto": "Criar e financiar Ministérios exclusivos para Igualdade Racial, Mulheres e Povos Indígenas.",
            "tipo": "Ação Realizada (Estrutura Governamental)",
            "candidato": "lula",
            "fonte": "https://www.google.com/search?q=lula+cria+ministerio+povos+indigenas+igualdade+racial",
            "detalhe": "Aumentou o número de ministérios para garantir foco exclusivo em pastas afirmativas."
        },
        {
            "texto": "Declarar publicamente que o Estado é 'Cristão' e que as minorias devem se curvar à maioria.",
            "tipo": "Discurso Público Reiterado",
            "candidato": "bolsonaro",
            "fonte": "https://www.google.com/search?q=bolsonaro+as+minorias+devem+se+curvar+as+maiorias",
            "detalhe": "Posicionamento claro do presidente contra o chamado politicamente correto."
        }
    ],
    "costumes": [
        {
            "texto": "Apoiar campanhas públicas para abolir cartilhas de educação sexual e diversidade em escolas (o chamado 'Kit Gay').",
            "tipo": "Plataforma Política / Discurso",
            "candidato": "bolsonaro",
            "fonte": "https://www.google.com/search?q=bolsonaro+escola+sem+partido+kit+gay",
            "detalhe": "Tornou-se a principal pauta política do então deputado focar em combater o que chama de 'ideologia de gênero'."
        },
        {
            "texto": "Financiar, via Ministério da Saúde e da Educação, materiais para conscientização de diversidade sexual e prevenção de ISTs em escolas.",
            "tipo": "Ação de Governo",
            "candidato": "lula",
            "fonte": "https://www.google.com/search?q=governo+pt+brasil+sem+homofobia+escolas",
            "detalhe": "Projeto 'Brasil sem Homofobia' gerou forte atrito com a base evangélica no congresso."
        },
        {
            "texto": "Vetar qualquer avanço ou discussão sobre a legalização do aborto ou legalização das drogas nas instâncias oficiais do governo.",
            "tipo": "Pilar de Governo e Vetos",
            "candidato": "bolsonaro",
            "fonte": "https://www.google.com/search?q=bolsonaro+veto+drogas+aborto",
            "detalhe": "Aliou-se totalmente às igrejas para formar um escudo de bloqueio na chamada 'Pauta de Costumes'."
        },
        {
            "texto": "Assinar decretos que instituem o uso oficial do Nome Social para pessoas trans em todos os órgãos da administração pública.",
            "tipo": "Ação Realizada (Decreto Presidencial)",
            "candidato": "lula",
            "fonte": "https://www.google.com/search?q=lula+dilma+nome+social+administracao+publica",
            "detalhe": "Política iniciada nas gestões do partido para garantir respeito à identidade de gênero."
        }
    ],
    "saude": [
        {
            "texto": "Aumentar drasticamente os investimentos governamentais em Saúde Pública.",
            "tipo": "Proposta Padrão",
            "candidato": "lula",
            "fonte": "#",
            "detalhe": "Prioriza o investimento público massivo nesta área."
        },
        {
            "texto": "Desregulamentar e incentivar a entrada de capital privado na área de Saúde Pública.",
            "tipo": "Proposta Padrão",
            "candidato": "bolsonaro",
            "fonte": "#",
            "detalhe": "Acredita que o mercado livre gere mais eficiência no setor."
        }
    ],
    "educacao": [
        {
            "texto": "Aumentar drasticamente os investimentos governamentais em Educação.",
            "tipo": "Proposta Padrão",
            "candidato": "lula",
            "fonte": "#",
            "detalhe": "Prioriza o investimento público massivo nesta área."
        },
        {
            "texto": "Desregulamentar e incentivar a entrada de capital privado na área de Educação.",
            "tipo": "Proposta Padrão",
            "candidato": "bolsonaro",
            "fonte": "#",
            "detalhe": "Acredita que o mercado livre gere mais eficiência no setor."
        }
    ],
    "infraestrutura": [
        {
            "texto": "Aumentar drasticamente os investimentos governamentais em Infraestrutura e Obras.",
            "tipo": "Proposta Padrão",
            "candidato": "lula",
            "fonte": "#",
            "detalhe": "Prioriza o investimento público massivo nesta área."
        },
        {
            "texto": "Desregulamentar e incentivar a entrada de capital privado na área de Infraestrutura e Obras.",
            "tipo": "Proposta Padrão",
            "candidato": "bolsonaro",
            "fonte": "#",
            "detalhe": "Acredita que o mercado livre gere mais eficiência no setor."
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
            ],
            "economia": [
                "Sancionou a valorização do salário mínimo acima da inflação.",
                "Aprovou a taxação dos fundos exclusivos dos super-ricos.",
                "Aprovou a Reforma Tributária (unificando ICMS, ISS e IPI em um IVA).",
                "Recriou impostos sobre gasolina (PIS/Cofins)."
            ]
        },
        "factCheck": {
            "default": {
                "discurso": "Nós vamos resolver esse problema com muito diálogo e trabalho.",
                "status": "IMPRECISO",
                "prova": "O histórico de votações do partido nem sempre corrobora esse discurso público."
            },
            "corrupcao": {
                "discurso": "Nós fomos o governo que mais criou mecanismos contra a corrupção.",
                "status": "MEIA-VERDADE",
                "prova": "Criou a LAI e a CGU, mas enfrentou os maiores esquemas de desvio estatal da história (Mensalão e Petrolão)."
            },
            "seguranca": {
                "discurso": "A criminalidade se combate resolvendo a pobreza.",
                "status": "FALSO",
                "prova": "Nos seus governos anteriores a economia cresceu, mas o Brasil atingiu recordes absolutos de homicídios (60 mil/ano)."
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
            ],
            "economia": [
                "Zerou a cobrança de IPI para diversos setores focados em consumo (games, jetskis).",
                "Sancionou a autonomia do Banco Central.",
                "Forçou a redução temporária do ICMS estadual sobre os combustíveis em ano eleitoral.",
                "Tentou desonerar a folha com o programa Carteira Verde e Amarela."
            ]
        },
        "factCheck": {
            "default": {
                "discurso": "Nós vamos resolver esse problema com muito diálogo e trabalho.",
                "status": "IMPRECISO",
                "prova": "O histórico de votações do partido nem sempre corrobora esse discurso público."
            },
            "corrupcao": {
                "discurso": "No meu governo não tem corrupção.",
                "status": "FALSO",
                "prova": "Investigações sobre as joias, desvios no MEC com barras de ouro, e a institucionalização do Orçamento Secreto provam o contrário."
            },
            "seguranca": {
                "discurso": "Bandido bom é bandido morto. Defendemos a polícia.",
                "status": "MEIA-VERDADE",
                "prova": "Caiu o número de homicídios no seu governo, mas as milícias avançaram e muitos decretos de armas abasteceram o PCC."
            }
        }
    }
};
