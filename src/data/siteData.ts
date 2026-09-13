import { CaseStudyItem, ServiceItem, PricingPlan, ArticleItem, FAQItem, TestimonialItem, ClientLogo, AddonService } from '../types';

export const CLIENT_LOGOS: ClientLogo[] = [
  {
    name: 'Radario',
    svg: 'https://framerusercontent.com/images/xSvQrPlJ5RIwHGClkIkGuikw.svg',
    width: 78,
    height: 17,
  },
  {
    name: 'Radius',
    svg: 'https://framerusercontent.com/images/wSVXNOni1RPqx39SYurqSSUbA.svg',
    width: 146,
    height: 47,
  },
  {
    name: 'UGO',
    svg: 'https://framerusercontent.com/images/wsvigr3C446rQ6sGAUEJjyNkBCE.svg',
    width: 97,
    height: 110,
  },
  {
    name: 'Northbank',
    svg: 'https://framerusercontent.com/images/WyLFdpPOGE30YHNk1eUztKiRHw.svg',
    width: 88,
    height: 89,
  },
  {
    name: 'Mappli',
    svg: 'https://framerusercontent.com/images/bZ3E98CcwTDvhHZ8PWhmVjMvYss.svg',
    width: 185,
    height: 36,
  },
  {
    name: 'Kestrel',
    svg: 'https://framerusercontent.com/images/Km8hWEHt8YDOqdMFf7cJdIDyP6Y.svg',
    width: 219,
    height: 38,
  },
];

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'carmigui',
    title: 'CARMIGUI',
    subtitle: 'Construtora e Imobiliária em Angola',
    description: 'Portal corporativo e imobiliário para construção de vivendas, condomínios fechados em Luanda e gestão de grandes empreendimentos.',
    client: 'CARMIGUI S.A.',
    url: 'https://carmigui.vercel.app/',
    displayUrl: 'carmigui.vercel.app',
    year: '2025',
    timeline: 'Entrega em 7 dias',
    status: 'No ar',
    image: 'https://carmigui.vercel.app/attached_assets/Component%201_1760554140338.webp',
    alt: 'Website CARMIGUI Construtora e Imobiliária em Luanda',
    tags: ['CONSTRUTORA & IMOBILIÁRIA', 'LUANDA / ANGOLA', 'CATÁLOGO DE IMÓVEIS'],
  },
  {
    id: 'bioprev',
    title: 'Bioprev Angola',
    subtitle: 'Controle de Pragas, Higiene & Soluções Ambientais',
    description: 'Empresa líder em controle de pragas, desinfestação, limpeza profissional, tratamento de água e jardinagem presente em Luanda, Benguela e Huambo.',
    client: 'Bioprev Angola',
    url: 'https://www.bioprev.com/',
    displayUrl: 'bioprev.com',
    year: '2025',
    timeline: 'Entrega em 10 dias',
    status: 'No ar',
    image: 'https://www.bioprev.com/opengraph.jpg',
    alt: 'Website Bioprev Angola Serviços Ambientais',
    tags: ['SERVIÇOS AMBIENTAIS', 'MULTICIDADES (AO)', 'CATÁLOGO ONLINE'],
  },
  {
    id: 'ekoloa',
    title: 'Ekoloa / Kourse®',
    subtitle: 'Governança para a Transformação Social',
    description: 'Consultora angolana especializada em governança corporativa, desenvolvimento organizacional, liderança executiva e impacto social.',
    client: 'Ekoloa Consulting',
    url: 'https://ekoloa.vercel.app/',
    displayUrl: 'ekoloa.vercel.app',
    year: '2025',
    timeline: 'Entrega em 6 dias',
    status: 'No ar',
    image: 'https://ekoloa.vercel.app/opengraph.jpg',
    alt: 'Website Ekoloa Kourse Governança e Transformação Social',
    tags: ['CONSULTORIA & GOVERNANÇA', 'IMPACTO SOCIAL', 'LUANDA'],
  },
  {
    id: 'gasosa-auto',
    title: 'Gasosa Auto Agro',
    subtitle: 'Automóvel, Agrícola & Equipamentos Industriais',
    description: 'Referência em Angola no fornecimento de peças automotivas, acessórios, lubrificantes de alta performance e maquinário agrícola e industrial Pangulino.',
    client: 'Gasosa Auto Agro',
    url: 'https://gasosa-auto-api-server.vercel.app/',
    displayUrl: 'gasosa-auto-api-server.vercel.app',
    year: '2025',
    timeline: 'Entrega em 9 dias',
    status: 'No ar',
    image: 'https://gasosa-auto-api-server.vercel.app/opengraph.jpg',
    alt: 'Website Gasosa Auto Agro Peças e Equipamentos em Angola',
    tags: ['CATÁLOGO INDUSTRIAL', 'AUTO & AGRO (AO)', 'ALTA VELOCIDADE'],
  },
  {
    id: 'kicksclub',
    title: 'KicksClub.pt',
    subtitle: 'Sneakers Exclusivos & Streetwear Club Portugal',
    description: 'E-commerce e clube exclusivo com lançamentos e edições limitadas das principais marcas de sneakers e streetwear (Nike, Yeezy, Jordan, Balenciaga).',
    client: 'KicksClub Portugal',
    url: 'https://www.kicksclub.pt/',
    displayUrl: 'kicksclub.pt',
    year: '2026',
    timeline: 'Entrega em 8 dias',
    status: 'No ar',
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=1200&auto=format&fit=crop&q=80',
    alt: 'Website KicksClub.pt Sneakers Exclusivos em Portugal',
    tags: ['E-COMMERCE', 'SNEAKERS & STREETWEAR', 'PORTUGAL & EUROPA'],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    number: '/01',
    title: 'Desenvolvimento de Websites.',
    subtitle: 'Websites modernos, ultra-rápidos e preparados para converter visitantes em clientes.',
    description: 'Criamos websites institucionais, landing pages e portais corporativos que posicionam a sua empresa com autoridade imediata no mercado de Angola e internacional.',
    image: 'https://framerusercontent.com/images/1L5IcfrAIKrMIKnQ97KMba1GBhk.jpg',
    alt: 'Desenvolvimento de websites profissionais',
    tags: ['PLANO START', 'PLANO CORE', 'PLANO PROFISSIONAL', '100% RESPONSIVO'],
  },
  {
    number: '/02',
    title: 'Identidade Visual & Branding.',
    subtitle: 'Marcas fortes, memoráveis e prontas para inspirar confiança.',
    description: 'Do desenho do seu novo logotipo até ao manual de marca completo com tipografias e paletas de cores para cartões de visita e redes sociais.',
    image: 'https://framerusercontent.com/images/1SfwJmc0BdzaWkoMlgXelIsBNKQ.jpg',
    alt: 'Criação de identidade visual e logo',
    tags: ['CRIAÇÃO DE LOGO', 'MANUAL DE IDENTIDADE', 'VETORIZAÇÃO', 'DESIGN CORPORATIVO'],
  },
  {
    number: '/03',
    title: 'E-mail Corporativo & Domínio.',
    subtitle: 'Comunique com a autoridade de um e-mail com o nome da sua empresa.',
    description: 'Registo do seu domínio (.ao, .com ou .co.ao) e configuração de caixas postais profissionais seguras para si e para toda a sua equipa.',
    image: 'https://framerusercontent.com/images/fFii8yi1NVAOl9hZEMlbKZOMo.jpg',
    alt: 'Configuração de e-mail corporativo e domínio',
    tags: ['REGISTO DE DOMÍNIO', 'E-MAIL PROFISSIONAL', 'SEGURANÇA SSL', 'CONFIGURAÇÃO COMPLETA'],
  },
  {
    number: '/04',
    title: 'Landing Pages & Conversão.',
    subtitle: 'Páginas estratégicas para campanhas no WhatsApp e redes sociais.',
    description: 'Estruturas enxutas e focadas em ação direta, com botão flutuante de WhatsApp e formulários integrados que aumentam as suas vendas diárias.',
    image: 'https://framerusercontent.com/images/x86RgZox8BKqVauhLISSjuGKMKY.jpg',
    alt: 'Landing pages de conversão direta',
    tags: ['BOTÃO WHATSAPP DIRECTO', 'ALTA VELOCIDADE', 'PÁGINAS DE VENDA'],
  },
  {
    number: '/05',
    title: 'Manutenção & Otimização.',
    subtitle: 'Garantia de que o seu website se mantém rápido, seguro e no ar 24/7.',
    description: 'Monitorizamos a segurança, fazemos backups preventivos e atualizamos conteúdos sempre que a sua empresa precisar de novidades.',
    image: 'https://framerusercontent.com/images/qZHsPaL0YLJAhwcMjUeZ1ZA3jks.jpg',
    alt: 'Manutenção e suporte de websites',
    tags: ['BACKUPS REGULARES', 'CERTIFICADO SSL', 'SUPORTE DEDICADO'],
  },
];

export const PROCESS_STEPS = [
  {
    number: '01.',
    title: 'Briefing e Estratégia.',
    description: 'Entendemos o seu negócio, o público-alvo em Angola e selecionamos o plano perfeito para as suas metas.',
  },
  {
    number: '02.',
    title: 'Design e Estrutura.',
    description: 'Desenhamos a interface visual, organizamos os textos e criamos o fluxo de conversão focado no WhatsApp.',
  },
  {
    number: '03.',
    title: 'Desenvolvimento e Otimização.',
    description: 'Programamos com código limpo, velocidade máxima de carregamento e compatibilidade total com telemóveis.',
  },
  {
    number: '04.',
    title: 'Publicação e Entrega.',
    description: 'Conectamos o seu domínio, configuramos os e-mails e colocamos o seu website no ar pronto para gerar negócios.',
  },
];

/**
 * Planos Oficiais de Websites de acordo com a tabela do cliente
 */
export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'start',
    code: 'PRD - TAMXT',
    number: '01',
    timeline: '3 A 5 DIAS',
    title: 'Website plano start',
    subtitle: 'Ideal para profissionais independentes e negócios que querem começar já com presença profissional.',
    price: '150 000,00',
    buttonText: 'Solicitar plano start',
    features: [
      'Design moderno e 100% responsivo',
      'Estrutura essencial focada em conversão',
      'Integração com botão directo do WhatsApp',
      'Formulário de contacto funcional',
      'Otimização básica de velocidade e SEO',
      'Certificado de segurança SSL gratuito',
    ],
  },
  {
    id: 'core',
    code: 'PRD - U73BV',
    number: '02',
    timeline: '7 A 10 DIAS',
    title: 'Website plano core',
    subtitle: 'A solução mais escolhida por empresas em crescimento para conquistar autoridade e novos clientes.',
    price: '250 000,00',
    popular: true,
    buttonText: 'Solicitar plano core',
    features: [
      'Tudo incluído no Plano Start',
      'Até 5 páginas completas (Início, Sobre, Serviços, Portfólio, Contactos)',
      'Apresentação detalhada de serviços ou produtos',
      'SEO local otimizado para o mercado angolano',
      'Integração com redes sociais e Google Maps',
      'Entrega com código fonte e documentação',
    ],
  },
  {
    id: 'professional',
    code: 'PRD - LY3GN',
    number: '03',
    timeline: '14 A 20 DIAS',
    title: 'Website plano profissional',
    subtitle: 'Para marcas e empresas consolidadas que exigem personalização absoluta e máximo impacto digital.',
    price: '400 000,00',
    buttonText: 'Solicitar plano profissional',
    bgImage: 'https://framerusercontent.com/images/x3T1bHkpskcAIBNe0lF6QZFKPs4.jpg',
    features: [
      'Arquitetura premium sob medida sem limite rígido de seções',
      'Animações suaves e interatividade de alto nível',
      'Catálogo avançado ou sistema interativo de orçamentos',
      'Velocidade extrema de carregamento (PageSpeed 95+)',
      'Otimização avançada para motores de busca (Google)',
      'Prioridade no suporte técnico e atendimento',
    ],
  },
];

/**
 * Serviços Complementares / Add-ons de acordo com a tabela do cliente
 */
export const ADDON_SERVICES: AddonService[] = [
  {
    code: 'PRD - TBKMY',
    name: 'Criação de logo',
    price: '25 000,00 Kz',
    status: 'Activo',
    description: 'Desenho de logotipo exclusivo, moderno e vetorizado pronto para aplicações digitais e impressas.',
  },
  {
    code: 'PRD - 7UWSN',
    name: 'Identidade Visual',
    price: '50 000,00 Kz',
    status: 'Activo',
    description: 'Manual de identidade visual completo: paleta de cores corporativa, tipografias oficiais e guias de aplicação.',
  },
  {
    code: 'PRD - TZM6H',
    name: 'Compra de Dominio',
    price: '50 000,00 Kz',
    status: 'Activo',
    description: 'Registo e ligação técnica completa do seu domínio (.ao, .co.ao ou .com) associado ao seu website.',
  },
  {
    code: 'PRD - ACKY1',
    name: 'Criação de e-mail corporativo',
    price: '100 000,00 Kz',
    status: 'Activo',
    description: 'Caixas postais personalizadas com o domínio da sua empresa (ex: comercial@suaempresa.ao) com segurança profissional.',
  },
];

export const ARTICLES: ArticleItem[] = [
  {
    id: 'angola-website-presence',
    category: 'ESTRATÉGIA DIGITAL',
    date: '10 AGO 2026',
    title: 'Por que empresas em Angola que vendem pelo WhatsApp precisam de um website oficial',
    excerpt: 'O WhatsApp é o coração do comércio angolano, mas sem um website a sua empresa perde autoridade e cansa a equipa com as mesmas dúvidas repetidas.',
    readTime: '4 min de leitura',
  },
  {
    id: 'domain-email-authority',
    category: 'INFRAESTRUTURA',
    date: '02 AGO 2026',
    title: 'E-mail corporativo vs Gmail gratuito: o impacto na decisão dos seus clientes',
    excerpt: 'Descubra como o endereço @suaempresa.ao aumenta em mais de 70% a confiança na hora de fechar contratos de alto valor.',
    readTime: '5 min de leitura',
  },
  {
    id: 'mobile-speed-luanda',
    category: 'PERFORMANCE',
    date: '18 JUL 2026',
    title: 'Velocidade de carregamento em redes móveis: o segredo para não perder visitas',
    excerpt: 'Como construímos websites ultraleves que carregam em menos de 1.5 segundos em qualquer rede 4G de Luanda e de todas as províncias.',
    readTime: '3 min de leitura',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'Quanto tempo demora para o meu website estar pronto e no ar?',
    answer: 'Depende do plano escolhido: o Website Plano Start fica pronto entre 3 a 5 dias úteis, o Website Plano Core entre 7 a 10 dias úteis, e o Website Plano Profissional entre 14 a 20 dias úteis.',
  },
  {
    question: 'O website funciona perfeitamente em telemóveis e computadores?',
    answer: 'Sim, 100%! Todos os nossos websites são desenhados e testados para ecrãs móveis, tablets e computadores, com visual impecável e navegação fluida em qualquer dispositivo.',
  },
  {
    question: 'Vocês tratam do domínio e dos e-mails com o nome da minha empresa?',
    answer: 'Sim, cuidamos de toda a parte burocrática e técnica! Temos o serviço de Compra de Domínio (50.000,00 Kz) e Criação de E-mail Corporativo (100.000,00 Kz), entregando tudo pronto a usar.',
  },
  {
    question: 'Como os clientes entram em contacto connosco pelo website?',
    answer: 'Integramos botões de chamada direta para o WhatsApp da sua empresa, formulários de pedidos de orçamento que caem diretamente no seu e-mail e ligações telefónicas com um único clique.',
  },
  {
    question: 'Como funciona a forma de pagamento em Angola?',
    answer: 'Trabalhamos com transferências bancárias, Multicaixa Express ou depósito bancário por IBAN. Habitualmente o pagamento é feito em 50% de sinal no arranque e 50% na aprovação e entrega final do website.',
  },
  {
    question: 'Terei custos mensais obrigatórios com a origem após a entrega?',
    answer: 'Não! O website é de sua total propriedade, sem mensalidades forçadas ou bloqueios. Apenas precisará de renovar o domínio e hospedagem anualmente, ou poderá contratar o nosso suporte contínuo apenas se desejar.',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'inovatech',
    company: 'Inova Tech',
    companyLogo: 'https://framerusercontent.com/images/HyPVEpssFQkIcRwjzeR1fSaxs70.svg',
    date: '12 AGO 2026',
    quote: 'Contratámos o Website Plano Core da origem e o resultado foi impressionante. Em poucos dias tínhamos o nosso site institucional no ar, com os e-mails corporativos a funcionar e contactos de novos clientes a chegarem diariamente pelo WhatsApp.',
    author: 'Carlos Morais',
    role: 'DIRECTOR GERAL · INOVA TECH ANGOLA',
    avatar: 'https://framerusercontent.com/images/0dBRxDyRVsa5HFjRkTtxyDHo.jpg',
  },
  {
    id: 'radius-ao',
    company: 'Radius Engenharia',
    companyLogo: 'https://framerusercontent.com/images/WyLFdpPOGE30YHNk1eUztKiRHw.svg',
    date: '28 JUL 2026',
    quote: 'A presença digital da nossa empresa mudou de nível. O site é moderno, fluido, passa extrema credibilidade e já nos ajudou a fechar contratos corporativos relevantes em Luanda. Recomendamos a origem sem hesitar.',
    author: 'Eng. António Manuel',
    role: 'GESTOR DE OPERAÇÕES · LUANDA',
    avatar: 'https://framerusercontent.com/images/fe8OJBpUm4RWxj6zxpZXMtbI6yQ.jpg',
  },
];
