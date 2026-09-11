export interface StarFaq {
  q: string;
  a: string;
}

export interface Star {
  slug: string;
  pinyin: string;
  chinese: string;
  epithet: string;
  element: string;
  role: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  personalityIntro: string;
  strengths: string[];
  watchouts: string[];
  personalityOutro?: string;
  career: string[];
  love: string[];
  palacesIntro: string;
  palaces: { palace: string; meaning: string }[];
  faq: StarFaq[];
  related: { href: string; label: string }[];
}

export const STARS: Star[] = [
  {
    slug: 'zi-wei',
    pinyin: 'Zi Wei',
    chinese: '紫微',
    epithet: 'The Emperor Star',
    element: 'Yin Earth',
    role: 'Leader / Emperor',
    metaTitle: 'Zi Wei Star (紫微) — The Emperor Star in Zi Wei Dou Shu',
    metaDescription:
      'Zi Wei, the Emperor Star, is the most important star in Zi Wei Dou Shu. Learn its personality traits, career strengths, love style, and how to interpret it in your chart.',
    intro:
      "Zi Wei — the Purple Star itself — sits at the center of Zi Wei Dou Shu. In classical Chinese astronomy it corresponds to the pole star, the fixed point around which the entire sky appears to rotate. Fittingly, in a birth chart the Zi Wei star is the emperor: whichever palace it lands in becomes the stage your life revolves around.",
    personalityIntro:
      'People with a strong Zi Wei star project natural authority. They think in terms of vision and structure rather than details, prefer to set direction rather than follow it, and dislike being told what to do — from childhood.',
    strengths: [
      'dignified, decisive, generous with praise and resources, calm under pressure, comfortable with responsibility',
    ],
    watchouts: [
      "pride. Zi Wei energy can slide into arrogance and a reluctance to admit mistakes. Classically, the emperor needs good ministers: a Zi Wei star surrounded by supportive stars (Tian Fu, Tian Xiang, Tian Kui, Tian Yue) produces a wise ruler; an isolated Zi Wei produces a stubborn one. Chart readers look closely at which ministers accompany your Zi Wei.",
    ],
    career: [
      'Zi Wei natives gravitate toward roles with authority and visibility — management, entrepreneurship, politics, medicine, and senior professional roles. They chafe in rigid bureaucracies and entry-level drudgery, and thrive once they own a domain. The classic advice for Zi Wei: your ambition is an asset, but your growth depends on learning to listen before the decision, not after.',
    ],
    love: [
      "In relationships, Zi Wei expects respect and can treat compromise as defeat. They are loyal and protective partners, but need a relationship where their judgment is trusted. Partners who challenge them publicly will trigger the emperor's stubbornness; partners who advise privately get the best from them.",
    ],
    palacesIntro:
      'The palace holding Zi Wei marks the domain where you seek mastery and autonomy.',
    palaces: [
      { palace: 'Career Palace', meaning: 'a life organized around work and status.' },
      { palace: 'Spouse Palace', meaning: 'a partner with strong presence or leadership (and a marriage where two sovereignties must learn to co-govern).' },
      { palace: 'Wealth Palace', meaning: 'an instinct for large-scale, prestige-associated income rather than small daily economies.' },
    ],
    faq: [
      {
        q: 'Is the Zi Wei star always good?',
        a: 'No star is purely good. Zi Wei is powerful but can express as pride, entitlement, and loneliness. Its quality depends heavily on the supporting stars around it and the palace it occupies.',
      },
      {
        q: 'Why is it called the Purple Star?',
        a: "Zi Wei (紫微) refers to the Purple Forbidden Enclosure (紫微垣), the classical Chinese constellation region around the pole star — the celestial counterpart of the emperor's palace. The whole system of Zi Wei Dou Shu (紫微斗数, \"Purple Star Numerology\") is named after it.",
      },
      {
        q: 'Is Zi Wei Dou Shu accurate?',
        a: 'Treat it as a reflective framework, not a prediction engine. See our full discussion in the guide "Is Zi Wei Dou Shu accurate?"',
      },
    ],
    related: [
      { href: '/learn/ziwei-doushu-14-main-stars/', label: 'The 14 Main Stars Explained' },
      { href: '/stars/tian-fu/', label: 'Zi Wei vs Tian Fu: Emperor & Treasury' },
      { href: '/learn/ziwei-doushu-12-palaces-explained/', label: 'The 12 Palaces' },
    ],
  },
  {
    slug: 'tian-ji',
    pinyin: 'Tian Ji',
    chinese: '天机',
    epithet: 'The Strategist',
    element: 'Yin Wood',
    role: 'Strategist / Advisor',
    metaTitle: 'Tian Ji Star (天机) — The Strategist Star in Zi Wei Dou Shu',
    metaDescription:
      'Tian Ji, the Celestial Mechanic, is the strategist star of Zi Wei Dou Shu. Its personality traits, career fits, love style, and meaning in your chart.',
    intro:
      'Tian Ji means "celestial mechanism" — the hidden gears behind events. It is the strategist star of Zi Wei Dou Shu: quick, analytical, endlessly curious, and always three moves ahead. Where Zi Wei decides, Tian Ji plans the how.',
    personalityIntro:
      "Tian Ji natives absorb information fast and connect dots others don't see. They are adaptable, witty, and genuinely interested in how things work — systems, people, ideas alike. Classical texts call this the star of wisdom and of religious/philosophical inclination: Tian Ji people ask \"why\" as a way of life.",
    strengths: ['sharp analysis, flexibility, creativity under constraints, excellent counsel'],
    watchouts: [
      "overthinking. The same quick mind that sees ten options can struggle to commit to one. Tian Ji energy unmanaged becomes anxiety, restlessness, and a tendency to start more than it finishes. The classical prescription is a craft or discipline that converts thought into output — writing, research, code, a martial art.",
    ],
    career: [
      'Tian Ji thrives where thinking is the product: strategy, consulting, research, engineering, education, planning, religious or philosophical studies, media and writing. They excel as the indispensable advisor — and should be deliberate about eventually owning their expertise rather than only renting it out.',
    ],
    love: [
      'For Tian Ji, mental rapport *is* romance. They need a partner they can talk to — ideas, books, plans. The risk is treating relationships like problems to optimize: analyzing a partner\'s behavior instead of simply feeling it. When they settle into trust, they are attentive and inventive companions.',
    ],
    palacesIntro: 'Where Tian Ji sits colors how its mental agility expresses.',
    palaces: [
      { palace: 'Life Palace', meaning: 'a perceptive, mobile, mentally-driven life.' },
      { palace: 'Career Palace', meaning: 'work built on intellect or communication.' },
      { palace: 'Travel Palace', meaning: 'benefit from movement and change.' },
      {
        palace: 'Health Palace',
        meaning: 'classical texts flag the nervous system and stress-related conditions — a nudge to manage the thinking mind\'s off-switch.',
      },
    ],
    faq: [
      {
        q: 'What element is the Tian Ji star?',
        a: 'Tian Ji belongs to Yin Wood — the flexible branch that bends rather than breaks, which is why its signature traits are adaptability and growth through learning.',
      },
      {
        q: 'Is Tian Ji a lucky star?',
        a: 'Tian Ji is neutral-to-favorable. Its gifts — intelligence and agility — depend on being directed. Directed, it produces strategists and scholars; undirected, it produces worry and scattered energy.',
      },
      {
        q: "What's the difference between Tian Ji and Zi Wei?",
        a: 'Zi Wei is the emperor: authority, decision, vision. Tian Ji is the chief minister: analysis, planning, counsel. A strong chart often has them working in concert.',
      },
    ],
    related: [
      { href: '/learn/ziwei-doushu-14-main-stars/', label: 'The 14 Main Stars Explained' },
      { href: '/learn/ziwei-doushu-four-transformations-sihua/', label: 'The Four Transformations (Sihua)' },
    ],
  },
  {
    slug: 'tai-yang',
    pinyin: 'Tai Yang',
    chinese: '太阳',
    epithet: 'The Sun',
    element: 'Yang Fire',
    role: 'Giver of Light',
    metaTitle: 'Tai Yang Star (太阳) — The Sun Star in Zi Wei Dou Shu',
    metaDescription:
      'Tai Yang, the Sun star, governs generosity, service and visibility in Zi Wei Dou Shu. Personality, career, love style, and its meaning in your chart.',
    intro:
      "Tai Yang is the Sun star of Zi Wei Dou Shu, and its nature is exactly what you'd expect: radiating, tireless, and given to burning for others. It classically represents masculine figures — the father, the husband, sons — and the principle of service: light given outward, whether or not anyone thanks you for it.",
    personalityIntro:
      "Tai Yang people are warm in the literal sense — they show up, they help, they take the burden nobody volunteered for. They care about fairness and being useful, and they'd rather do something themselves than watch it done badly.",
    strengths: [
      'generosity, stamina for service, integrity, natural visibility (people notice Tai Yang people), sincere enthusiasm',
    ],
    watchouts: [
      'burnout and pride of the martyr. The sun gives light all day; the classical caution is that Tai Yang exhausts itself by over-giving and then resents the darkness. Learning to shine *selectively* — and to receive as well as give — is the Tai Yang life lesson.',
      "Classical texts also note the sun's position matters by hour: a sun high in the chart (born midday) shines strongly; a \"setting sun\" chart suggests late-blooming energy better spent on depth than spectacle.",
    ],
    career: [
      'Tai Yang suits roles with public dimension and clear service: teaching, medicine, public service, management, media, sales with genuine belief in the product. They do best where effort converts into visible outcomes. Hidden, thankless back-office work slowly dims them.',
    ],
    love: [
      'In love, Tai Yang gives constantly — protection, provision, attention. The shadow is keeping score silently, or mistaking providing for connecting. Their best partnerships are with people who say plainly what they need, because Tai Yang will absolutely deliver if asked — they just rarely ask first themselves.',
    ],
    palacesIntro: 'Where the Sun sits in your chart shapes how you give and shine.',
    palaces: [
      { palace: 'Career Palace', meaning: 'a life of visible service and reputation built by effort.' },
      { palace: 'Wealth Palace', meaning: 'income through active work rather than passive holdings.' },
      { palace: 'Health Palace', meaning: 'classical correspondences are the eyes, heart, and blood pressure.' },
      { palace: 'Parents Palace', meaning: "it traditionally describes the father's role in your life story." },
    ],
    faq: [
      {
        q: 'What does the Sun star represent in Zi Wei Dou Shu?',
        a: 'Tai Yang represents generosity, service, visibility, and masculine relatives — classically the father and husband. Its chart position colors how you give and how you shine publicly.',
      },
      {
        q: 'Is Tai Yang a strong or weak star?',
        a: 'Both, depending on "brightness": Zi Wei Dou Shu scores stars by the palace and birth hour. A bright sun grants stamina and renown; a dim sun suggests energy better invested in steady, behind-the-scenes contribution.',
      },
      {
        q: 'Is the Sun star good for wealth?',
        a: "Tai Yang earns through activity and reputation rather than accumulation. It's the star of the earned income, not the inherited portfolio — money comes when work is visible and valued.",
      },
    ],
    related: [
      { href: '/learn/ziwei-doushu-14-main-stars/', label: 'The 14 Main Stars Explained' },
      { href: '/stars/tai-yin/', label: 'Tai Yin: The Moon Star' },
    ],
  },
  {
    slug: 'wu-qu',
    pinyin: 'Wu Qu',
    chinese: '武曲',
    epithet: 'The Wealth Star',
    element: 'Yin Metal',
    role: 'General of Wealth',
    metaTitle: 'Wu Qu Star (武曲) — The Wealth Star in Zi Wei Dou Shu',
    metaDescription:
      'Wu Qu, the Martial star, is the wealth and execution star of Zi Wei Dou Shu. Personality traits, money style, career fits, and love patterns explained.',
    intro:
      "Wu Qu is the money-and-execution star of Zi Wei Dou Shu. Classical texts call it the \"wealth star\" (财星) — and also a general: metal, decisive, unsentimental. It's the energy that turns assets into empires and decisions into action, with little patience for ceremony in between.",
    personalityIntro:
      'Wu Qu people act. They are direct, pragmatic, financially astute, and physically energetic — the type who fixes the problem while others are still forming a committee. Emotionally they run cool: feelings are real but private, processed internally rather than performed.',
    strengths: ['execution, financial discipline, courage, reliability, resilience under pressure'],
    watchouts: [
      'hardness. The same metal that cuts through indecision can cut people. Wu Qu at its worst is rigid, blunt to the point of harm, and controlling with money. The growth path is deliberate softness — learning that a decision can be right *and* gently delivered.',
    ],
    career: [
      'Wu Qu classically rules finance, engineering, military and police work, surgery, manufacturing, trades, and any business where tangible results and cash flow are the scoreboard. They make excellent founders of small-to-mid businesses: capital-disciplined and operationally hands-on. Corporate politics bores them; balance sheets don\'t lie to them.',
    ],
    love: [
      'Wu Qu loves through provision and problem-solving: they will fix your car, fund your project, and show up in a crisis — saying "I love you" aloud is the hard part. The classic reading warns Wu Qu marriages can feel cold when deeds go unspoken. The fix is embarrassingly simple: narrate the love you\'re already expressing.',
    ],
    palacesIntro: 'Wu Qu\'s placement points to how you earn, decide, and commit.',
    palaces: [
      { palace: 'Wealth Palace', meaning: 'classically one of the strongest wealth placements — money managed actively and grown through skill.' },
      { palace: 'Life Palace', meaning: 'a no-nonsense, self-made character.' },
      { palace: 'Spouse Palace', meaning: 'a capable, financially solid partner who may struggle with expressiveness.' },
    ],
    faq: [
      {
        q: 'Why is Wu Qu called the wealth star?',
        a: 'Classical Zi Wei Dou Shu assigns Wu Qu to metal — the element of currency and tools — and to the general archetype: command, execution, and material results. Together they made it the system\'s primary money star.',
      },
      {
        q: 'Is Wu Qu bad for relationships?',
        a: 'Not inherently. Wu Qu expresses love through action and provision rather than words. Relationships strain only when the cooler emotional style goes unaddressed — awareness and simple verbal expression resolve most of it.',
      },
      {
        q: 'What careers suit the Wu Qu star?',
        a: 'Finance, engineering, medicine (especially surgery), security services, manufacturing, and entrepreneurship — anywhere decisiveness and tangible outcomes are valued.',
      },
    ],
    related: [
      { href: '/learn/ziwei-doushu-14-main-stars/', label: 'The 14 Main Stars Explained' },
      { href: '/learn/ziwei-doushu-career-wealth-palace/', label: 'Career & Wealth Palaces' },
    ],
  },
  {
    slug: 'tian-tong',
    pinyin: 'Tian Tong',
    chinese: '天同',
    epithet: 'The Blessing Star',
    element: 'Yang Water',
    role: 'The Blessed Child',
    metaTitle: 'Tian Tong Star (天同) — The Blessing Star in Zi Wei Dou Shu',
    metaDescription:
      'Tian Tong, the Celestial Child, is the enjoyment and blessing star of Zi Wei Dou Shu. Its personality, career fits, love style, and chart meaning explained.',
    intro:
      'Tian Tong — the "Celestial Child" — is the star of contentment, pleasure, and good fortune in Zi Wei Dou Shu. Classical texts call it the blessing star (福星): the person who seems to land softly, find the good restaurant, and make friends wherever they go. Its deeper teaching is harder than it looks: learning to want what you already have.',
    personalityIntro:
      'Tian Tong people are agreeable, emotionally warm, and allergic to conflict. They savor life — food, comfort, art, leisure — and bring a childlike enthusiasm to their interests that never quite fades.',
    strengths: [
      'emotional intelligence, likability, resilience through optimism, the ability to enjoy the present',
    ],
    watchouts: [
      'comfort as a trap. The blessing star\'s shadow is procrastination and avoidance — waiting to be pushed by circumstances rather than moving first. Classical commentators are blunt: Tian Tong prospers *more* when tested early; an easy start can breed drift. Their growth arc is choosing ambition voluntarily instead of being forced into it.',
    ],
    career: [
      'Tian Tong does well in work with human warmth and aesthetic dimension: hospitality, food, counseling and social work, HR, teaching young children, arts and entertainment, tourism. They need pleasant environments more than most — a toxic workplace damages Tian Tong disproportionately. They are better as beloved colleagues than as cutthroat competitors.',
    ],
    love: [
      'Tian Tong partners are affectionate, playful, and attentive to comfort and mood. The risk is conflict avoidance: swallowing grievances until they surface sideways. Their relationships thrive when they learn that a small honest disagreement now beats a large stored resentment later — and when they pick partners who don\'t mistake their gentleness for weakness.',
    ],
    palacesIntro: "Tian Tong's placement shows where life comes easiest — and where ease must be earned.",
    palaces: [
      { palace: 'Life Palace', meaning: 'an amiable, pleasure-aware character who tends to age well emotionally.' },
      { palace: 'Wealth Palace', meaning: 'steady if unambitious income — money follows relationships more than hustle.' },
      { palace: 'Health Palace', meaning: 'classical texts associate it with the glands, water metabolism, and the temptations of excess (food, drink, sleep).' },
      { palace: 'Children Palace', meaning: 'joyful, playful bonds with young people.' },
    ],
    faq: [
      {
        q: 'Is Tian Tong a lazy star?',
        a: "It's the common misreading. Tian Tong is the star of *enjoyment*, and its energy follows pleasure rather than duty. Given a goal it genuinely wants — or accountability it accepts — it performs steadily. Undirected, yes, it drifts toward the couch.",
      },
      {
        q: 'Why is Tian Tong called the blessing star?',
        a: 'Classical texts grant Tian Tong the peculiar gift of landing on its feet: protection in difficulty, help arriving late but arriving. The flip side is that its owner must still convert luck into effort to keep it.',
      },
      {
        q: 'What careers suit the Tian Tong star?',
        a: 'People-facing and creative fields: hospitality, counseling, education, entertainment, tourism, and HR — environments where warmth is an asset.',
      },
    ],
    related: [
      { href: '/learn/ziwei-doushu-14-main-stars/', label: 'The 14 Main Stars Explained' },
      { href: '/stars/tai-yin/', label: 'Tai Yin: The Moon Star' },
    ],
  },
  {
    slug: 'lian-zhen',
    pinyin: 'Lian Zhen',
    chinese: '廉贞',
    epithet: 'The Paradox Star',
    element: 'Yin Fire',
    role: 'The Officer / The Tempter',
    metaTitle: 'Lian Zhen Star (廉贞) — The Complex Star of Zi Wei Dou Shu',
    metaDescription:
      'Lian Zhen is the most paradoxical star in Zi Wei Dou Shu — discipline or indulgence. Its personality, career, love patterns, and chart meaning explained.',
    intro:
      "Lian Zhen's name means \"pure and upright\" (廉贞), and classical texts treat it as the system's great paradox: in disciplined configurations it is the incorruptible official; in indulgent ones, the prisoner and the gambler. No other star holds such opposite potential in the same name. Reading Lian Zhen is reading a person at their fork in the road.",
    personalityIntro:
      'Lian Zhen people have presence: stylish, articulate, socially fluent, with a taste for the finer things and the political instincts to navigate any room. They hold strong standards — for themselves and everyone else.',
    strengths: [
      'discipline, aesthetic sense, political intelligence, courage, the ability to command respect in messy human situations',
    ],
    watchouts: [
      "the fire under the polish. Lian Zhen's desires — status, pleasure, intensity — are real, and when discipline slackens they escalate fast: risk-taking, obsession, entanglements. The classical verdict is that Lian Zhen's fate is unusually self-chosen: the same person contains both the upright official and the one who falls. Their life's work is keeping the first in charge of the second.",
    ],
    career: [
      'Lian Zhen suits law, compliance and public office (the star\'s upright face), but equally diplomacy, politics, entertainment, and luxury industries (its worldly face). They handle power dynamics better than most and do well in roles requiring both principle and persuasion. Environments with vague rules are their danger zone — Lian Zhen needs clear lines it can be proud of holding.',
    ],
    love: [
      'In relationships, Lian Zhen is magnetic and all-in: dramatic attraction, high passion, high stakes. Classical readings flag it in matters of entanglement — love triangles, obsessions, sudden involvements. The stable expression is a partner chosen with the head as well as the heart, and honesty about desire before it chooses for you.',
    ],
    palacesIntro: 'Lian Zhen\'s placement shows where principle and desire meet.',
    palaces: [
      { palace: 'Life Palace', meaning: 'a striking, principled-or-pleasure-driven character (often both).' },
      { palace: 'Career Palace', meaning: 'success in law, politics, or image-driven industries.' },
      { palace: 'Spouse Palace', meaning: 'a passionate, attractive partner and a relationship needing clear boundaries.' },
      { palace: 'Health Palace', meaning: 'classical correspondences include the blood, heart, and inflammation.' },
    ],
    faq: [
      {
        q: 'Is Lian Zhen a bad star?',
        a: "No — it's a conditional star. Classical texts name it among the possible \"prisoner\" stars only when poorly configured. With supportive stars it is the upright official: principled, brave, and respected.",
      },
      {
        q: 'Why does Lian Zhen have two opposite meanings?',
        a: "The name itself means both \"incorruptible\" and \"to sharpen/test.\" The star embodies the tension between integrity and desire — which one dominates depends on the surrounding stars and the person's choices.",
      },
      {
        q: 'What careers suit the Lian Zhen star?',
        a: 'Law, compliance, diplomacy, politics, entertainment, and luxury or image-driven industries — anywhere principle and charisma must coexist.',
      },
    ],
    related: [
      { href: '/learn/ziwei-doushu-14-main-stars/', label: 'The 14 Main Stars Explained' },
      { href: '/learn/ziwei-doushu-four-transformations-sihua/', label: 'The Four Transformations (Sihua)' },
    ],
  },
  {
    slug: 'tian-fu',
    pinyin: 'Tian Fu',
    chinese: '天府',
    epithet: 'The Treasury',
    element: 'Yang Earth',
    role: 'Treasury / Viceroy',
    metaTitle: 'Tian Fu Star (天府) — The Treasury Star in Zi Wei Dou Shu',
    metaDescription:
      'Tian Fu, the Treasury star, governs stability, wealth accumulation and leadership in Zi Wei Dou Shu. Personality, career, love, and chart meaning explained.',
    intro:
      'If Zi Wei is the emperor, Tian Fu is the viceroy — the steady administrator who actually keeps the kingdom running. Classical texts call it the treasury star (库星): the vault where wealth and stability are stored. Where other stars chase, Tian Fu holds. Its people are the ballast of the system: dependable, conservative, and quietly wealthy over time.',
    personalityIntro:
      'Tian Fu people give an impression of competence the moment they enter a room. They are organized, composed, fair-minded, and consistent — the same person on Tuesday as on Saturday. They prefer proven methods, real assets, and keeping their word.',
    strengths: [
      'reliability, financial stewardship, composure in crisis, long-game thinking, natural administrative authority',
    ],
    watchouts: [
      'stagnation and image-conservatism. A treasury can become a vault door: Tian Fu can cling to the safe option so long that opportunity passes by, and it cares — quietly but genuinely — about appearances and face. Its growth edge is a calculated risk budget: some of the vault invested in growth, not just stored.',
    ],
    career: [
      'Tian Fu excels in banking, accounting, real estate, administration, supply chain, civil service, and executive operations — anywhere assets, systems, or people must be kept sound. They are the CFO archetype: less flash than the founder, more durable than the boom. Over a career, their compounding conservatism usually beats flashier peers.',
    ],
    love: [
      'Tian Fu loves steadily: showing up, providing security, remembering what matters. Courtship may be unhurried and undramatic — but commitments made are kept. The risk is choosing a partner the way one approves a loan (all criteria, no spark) and, conversely, hiding behind stability when the relationship needs emotional risk. Their best matches value consistency over excitement.',
    ],
    palacesIntro: "Tian Fu's placement points to what you keep — and how you keep it.",
    palaces: [
      { palace: 'Wealth Palace', meaning: 'the classical wealth-storage placement: money kept and grown, favoring real assets.' },
      { palace: 'Life Palace', meaning: 'the dependable pillar-of-the-community character.' },
      { palace: 'Career Palace', meaning: 'long tenure and quiet advancement in solid institutions.' },
      { palace: 'Spouse Palace', meaning: 'a stable, provider-type partner.' },
    ],
    faq: [
      {
        q: 'What is the difference between Zi Wei and Tian Fu?',
        a: 'Both are leader stars. Zi Wei is the emperor — vision, authority, ambition. Tian Fu is the viceroy/treasury — administration, stability, preservation. Zi Wei expands; Tian Fu consolidates.',
      },
      {
        q: 'Is Tian Fu a wealth star?',
        a: 'Yes — with Wu Qu, it is one of the two primary wealth stars. Wu Qu is active wealth (earning, executing); Tian Fu is stored wealth (keeping, compounding, real assets).',
      },
      {
        q: 'Is Tian Fu too conservative?',
        a: "Conservatism is its feature and its risk. Directed, it builds durable security most stars can't. Undirected, it can stall. A deliberate risk budget is the classical remedy.",
      },
    ],
    related: [
      { href: '/learn/ziwei-doushu-14-main-stars/', label: 'The 14 Main Stars Explained' },
      { href: '/learn/ziwei-doushu-career-wealth-palace/', label: 'Career & Wealth Palaces' },
    ],
  },
  {
    slug: 'tai-yin',
    pinyin: 'Tai Yin',
    chinese: '太阴',
    epithet: 'The Moon',
    element: 'Yin Water',
    role: 'Gentle Accumulator',
    metaTitle: 'Tai Yin Star (太阴) — The Moon Star in Zi Wei Dou Shu',
    metaDescription:
      'Tai Yin, the Moon star, governs gentleness, accumulation and intuition in Zi Wei Dou Shu. Personality, career, love style, and chart meaning explained.',
    intro:
      'Tai Yin is the Moon star of Zi Wei Dou Shu — soft where Tai Yang blazes, accumulating where others spend. It classically represents feminine figures (the mother, the wife, daughters), real estate, and wealth grown slowly and quietly. If the Sun star is fame, the Moon star is depth: what is felt, kept, and grown in private.',
    personalityIntro:
      'Tai Yin people are courteous, empathetic, and aesthetically sensitive, with rich inner lives they reveal selectively. Like moonlight, they show a phase, not the whole.',
    strengths: [
      'emotional perceptiveness, patience, taste, careful stewardship of money and feelings alike, quiet persistence that outlasts louder energies',
    ],
    watchouts: [
      "over-sensitivity and hiding. The moon waxes and wanes: Tai Yin moods cycle, and its natives can retreat into silence instead of voicing hurt — accumulating resentment the way they accumulate savings. The growth edge is saying the feeling while it's small. Classical texts also note brightness matters: a \"bright moon\" chart (born at night) expresses these gifts strongly; a dim one turns the sensitivity inward as worry.",
    ],
    career: [
      'Tai Yin suits work involving care, beauty, or depth: writing, design, healing professions, psychology, education, research, and finance in its conservative forms — especially property, which the moon classically rules. They prefer depth over exposure and often do their best work with autonomy and minimal spotlight.',
    ],
    love: [
      'In love, Tai Yin is tender, loyal, and quietly sacrificing — sometimes too quietly: needs go unspoken until they\'ve grown heavy. They bond slowly but permanently. Their relationships flourish with partners who ask questions gently and often, because Tai Yin rarely volunteers the depth unprompted.',
    ],
    palacesIntro: 'The Moon\'s placement shows where you accumulate — feelings, money, or both.',
    palaces: [
      { palace: 'Wealth Palace', meaning: 'the accumulation placement: wealth grown through saving, property, and patience.' },
      { palace: 'Spouse Palace', meaning: 'a gentle, refined partner (classically noting the wife/mother archetype).' },
      { palace: 'Parents Palace', meaning: "traditional texts read it for the mother's influence." },
      { palace: 'Health Palace', meaning: 'correspondences include the eyes (with Tai Yang), fluids, and sleep.' },
    ],
    faq: [
      {
        q: 'What does the Moon star represent in Zi Wei Dou Shu?',
        a: 'Tai Yin represents gentleness, intuition, accumulation, real estate, and feminine relatives — classically the mother and wife. It is the complement and counterweight to the Sun star Tai Yang.',
      },
      {
        q: 'Is Tai Yin good for wealth?',
        a: 'Yes, in its own style: Tai Yin accumulates rather than earns spectacularly. Savings, property, and patient investments are its classical territory.',
      },
      {
        q: 'What does a "dim moon" mean in a chart?',
        a: 'Zi Wei Dou Shu scores stars by birth hour and palace. A dim Tai Yin suggests the star\'s sensitivity turns inward as moodiness; a bright Tai Yin expresses as perceptiveness, taste, and quiet achievement.',
      },
    ],
    related: [
      { href: '/learn/ziwei-doushu-14-main-stars/', label: 'The 14 Main Stars Explained' },
      { href: '/stars/tai-yang/', label: 'Tai Yang: The Sun Star' },
    ],
  },
  {
    slug: 'tan-lang',
    pinyin: 'Tan Lang',
    chinese: '贪狼',
    epithet: 'The Greedy Wolf',
    element: 'Yang Wood',
    role: 'The Versatile Talent',
    metaTitle: 'Tan Lang Star (贪狼) — The Desire Star in Zi Wei Dou Shu',
    metaDescription:
      'Tan Lang, the Greedy Wolf, is the most versatile and social star in Zi Wei Dou Shu. Its personality, talents, love patterns, and chart meaning explained.',
    intro:
      'Tan Lang\'s name — "greedy wolf" — sounds ominous, but the greed in question is appetite for life itself. Tan Lang is the star of desire, talent, and social charm: the multi-hyphenate of Zi Wei Dou Shu, gifted in more fields than anyone and tempted by more pleasures than anyone. Its story is always the same question: will the appetite be harnessed or will it scatter?',
    personalityIntro:
      'Tan Lang people are socially effortless — they drink, dance, negotiate, and network as if raised in every room at once. They pick up skills quickly: languages, instruments, games, businesses. Classical texts call Tan Lang the star of teachers and of drunkenness, of priesthood and of nightlife — it spans the sacred and the sensual with unusual ease.',
    strengths: ['learning speed, social intelligence, adaptability, artistic and performative talent, sheer zest'],
    watchouts: [
      "too much of a good thing. Desire unmanaged becomes excess — pleasures, purchases, projects, people. Tan Lang beginnings are brilliant and its middles are at risk; the star's lifetime homework is choosing a few appetites and going deep.",
    ],
    career: [
      'Tan Lang thrives where variety, persuasion, or performance pays: entertainment and nightlife industries, sales and business development, hospitality, fashion and beauty, teaching and training, diplomacy, and any portfolio career. They often succeed precisely at the intersections others avoid — the polyglot seller, the stylist-turned-founder.',
    ],
    love: [
      "Classically the romance star par excellence, Tan Lang attracts easily and is easily attracted. Its love life can run rich and tangled: intensity, overlap, boredom-then-wander. When Tan Lang *chooses* — deliberately, not just passionately — its charm and generosity make a delightful long-term partner. The choosing is the hard-won part.",
    ],
    palacesIntro: "Tan Lang's placement shows where your appetites and talents multiply.",
    palaces: [
      { palace: 'Life Palace', meaning: 'a charismatic multi-talent who tries everything.' },
      { palace: 'Career Palace', meaning: 'success through versatility, social grace, or performance.' },
      { palace: 'Wealth Palace', meaning: 'multiple income streams — and multiple leaks if undisciplined.' },
      { palace: 'Health Palace', meaning: 'classical texts point to the liver and to excesses of nightlife.' },
    ],
    faq: [
      {
        q: 'Is Tan Lang a bad star — does "greedy" mean immoral?',
        a: 'No. The "greed" is appetite and curiosity, not criminality. Tan Lang is moral-neutral: harnessed, it\'s the most talented star in the system; unharnessed, it\'s the most distractible.',
      },
      {
        q: 'Why is Tan Lang called the romance star?',
        a: 'It governs desire and attraction, so classical texts read it heavily in matters of love — charm, courtship, and entanglement — alongside its talents for art and social life.',
      },
      {
        q: 'What careers suit the Tan Lang star?',
        a: 'Entertainment, sales, hospitality, fashion, teaching, diplomacy — any field rewarding versatility, charm, and fast learning.',
      },
    ],
    related: [
      { href: '/learn/ziwei-doushu-14-main-stars/', label: 'The 14 Main Stars Explained' },
      { href: '/stars/lian-zhen/', label: 'Lian Zhen: The Paradox Star' },
    ],
  },
  {
    slug: 'ju-men',
    pinyin: 'Ju Men',
    chinese: '巨门',
    epithet: 'The Giant Gate',
    element: 'Yin Water',
    role: 'The Speaker / The Skeptic',
    metaTitle: 'Ju Men Star (巨门) — The Eloquent Skeptic of Zi Wei Dou Shu',
    metaDescription:
      'Ju Men, the Giant Gate, is the star of speech, investigation and doubt in Zi Wei Dou Shu. Its personality, career fits, love style, and chart meaning.',
    intro:
      "Ju Men — the \"Giant Gate\" — is the star of the mouth: speech, argument, scrutiny, and doubt. Classical texts give it a double face that depends entirely on how its voice is used: directed, it is the outstanding scholar, lawyer, and orator; undirected, it is the gossip and the grudge. Ju Men people don't take the world at face value — they open the giant gate and interrogate what's behind it.",
    personalityIntro:
      "Ju Men natives question everything: claims, motives, fine print, the official story. This makes them superb investigators and, occasionally, exhausting dinner guests. Their words are precise and their skepticism is genuine — not contrarianism, but a real need to verify before trusting.",
    strengths: [
      'eloquence, analytical rigor, research instinct, honesty (they say the thing), persistence in getting to the bottom of things',
    ],
    watchouts: [
      'words as weapons. The classical warnings for Ju Men are all verbal: disputes, sarcasm, suspicion turned on the people who love them. The same mouth that wins the argument can lose the room. Growth for Ju Men is learning when *not* to press the point — and directing the scrutiny outward at problems rather than inward at grievances.',
    ],
    career: [
      'Ju Men excels in law, journalism, auditing, academia, medicine (diagnosis is skepticism with a license), translation and interpretation, teaching, debate, sales of complex products, and anything involving investigation. They are the person you want cross-examining your contracts — and the person meeting minutes should quote carefully.',
    ],
    love: [
      'Ju Men partners ask questions — early, often, and pointedly. Trust is slow to grant because it is meant to be certain once given. The risks are verbal: criticism delivered too precisely, doubts aired as accusations. When Ju Men learns to voice concerns as curiosity rather than cross-examination, they make unusually honest, stalwart partners.',
    ],
    palacesIntro: "Ju Men's placement shows where your voice does its work.",
    palaces: [
      { palace: 'Life Palace', meaning: 'a penetrating, outspoken character.' },
      { palace: 'Career Palace', meaning: 'success through words and analysis — law, media, academia, consulting.' },
      { palace: 'Spouse Palace', meaning: 'a candid, intellectual partner and a marriage that needs the "no cheap shots" rule.' },
      { palace: 'Health Palace', meaning: 'classical correspondences center on the throat, mouth, and digestion.' },
    ],
    faq: [
      {
        q: 'Is Ju Men an unlucky star?',
        a: 'Traditional texts call it one of the more "troubled" stars — but almost all of its trouble is verbal: disputes, misunderstandings, suspicion. Directed at problems instead of people, the same energy becomes professional excellence. Many top lawyers and scholars carry strong Ju Men.',
      },
      {
        q: 'Why is Ju Men called the Giant Gate?',
        a: "The image is a massive gate: what's beyond it is hidden until someone opens it. Ju Men is that opening — inquiry, disclosure, the word spoken that changes what's known.",
      },
      {
        q: 'What careers suit the Ju Men star?',
        a: 'Law, journalism, auditing, academia, medicine, translation, consulting — careers that pay for speech, scrutiny, or both.',
      },
    ],
    related: [
      { href: '/learn/ziwei-doushu-14-main-stars/', label: 'The 14 Main Stars Explained' },
      { href: '/learn/ziwei-doushu-12-palaces-explained/', label: 'The 12 Palaces' },
    ],
  },
  {
    slug: 'tian-xiang',
    pinyin: 'Tian Xiang',
    chinese: '天相',
    epithet: 'The Minister',
    element: 'Yang Water',
    role: 'Prime Minister / Counselor',
    metaTitle: 'Tian Xiang Star (天相) — The Minister Star in Zi Wei Dou Shu',
    metaDescription:
      'Tian Xiang, the Celestial Minister, is the star of counsel, service and integrity in Zi Wei Dou Shu. Its personality, career, love style, and chart meaning.',
    intro:
      'Tian Xiang — the "Celestial Minister" — is the trusted second-in-command of Zi Wei Dou Shu: the star of counsel, service, and institutional integrity. Where the emperor star decides and the general executes, the minister advises, harmonizes, and keeps the whole enterprise honorable. Classical texts rank it among the auspicious stars — with one caveat about whose banner it serves.',
    personalityIntro:
      'Tian Xiang people are fair, diplomatic, and quietly competent. They remember who was promised what, they dress appropriately for every occasion, and they defuse conflicts before they become conflicts. There is a modest dignity to them — service that never becomes servility.',
    strengths: ['judgment, mediation, loyalty, administrative polish, integrity under pressure'],
    watchouts: [
      'borrowed authority. The minister\'s risk is a life defined by *whose* minister they are. Tian Xiang can defer so long to the boss, the spouse, the tradition that its own agenda never gets written. The classical caution — "a good minister still needs a good ruler" — means Tian Xiang people must choose their allegiances as carefully as they serve them.',
    ],
    career: [
      'Tian Xiang excels as chief of staff, general manager, senior administrator, judge or arbitrator, secretary-general, HR leadership, diplomatic service — any role translating vision into working order. They are often the actual reason institutions function while leaders rotate. Their career question is not "can I rise?" (they can) but "rise beside whom?"',
    ],
    love: [
      'Tian Xiang loves responsibly: balanced, considerate, faithful. They make relationships *work* — mediating in-laws, splitting duties fairly, keeping peace. The risk is peace-keeping so consistent that real grievances go unfiled. With a partner who reciprocates consideration, Tian Xiang builds one of the steadiest marriages in the system.',
    ],
    palacesIntro: "Tian Xiang's placement shows where you bring order and fairness.",
    palaces: [
      { palace: 'Life Palace', meaning: 'the trusted, composed pillar-of-organization character.' },
      { palace: 'Career Palace', meaning: 'advancement through reliability and sound counsel.' },
      { palace: 'Spouse Palace', meaning: 'a fair-minded, supportive partner.' },
      { palace: 'Wealth Palace', meaning: 'steady, well-managed finances favoring conservative instruments.' },
    ],
    faq: [
      {
        q: 'Is Tian Xiang a lucky star?',
        a: "Generally yes — it's classically counted among the auspicious, protective stars. Its caveat is contextual: Tian Xiang's fortune follows the quality of the people and institutions it aligns with.",
      },
      {
        q: "What's the difference between Tian Xiang and Tian Liang?",
        a: 'Both are "advisor" stars. Tian Liang is the elder — moral weight, protection, seniority. Tian Xiang is the minister — administration, mediation, service. Tian Liang teaches; Tian Xiang governs.',
      },
      {
        q: 'What careers suit the Tian Xiang star?',
        a: 'Administration, arbitration and law, HR, diplomacy, operations, and chief-of-staff-type roles — anywhere fairness and execution must coexist.',
      },
    ],
    related: [
      { href: '/learn/ziwei-doushu-14-main-stars/', label: 'The 14 Main Stars Explained' },
      { href: '/stars/tian-liang/', label: 'Tian Liang: The Elder Star' },
    ],
  },
  {
    slug: 'tian-liang',
    pinyin: 'Tian Liang',
    chinese: '天梁',
    epithet: 'The Elder',
    element: 'Yang Earth',
    role: 'Elder / Protector',
    metaTitle: 'Tian Liang Star (天梁) — The Elder Star in Zi Wei Dou Shu',
    metaDescription:
      'Tian Liang, the Celestial Beam, is the elder and protector star of Zi Wei Dou Shu. Personality, career fits, love style, and chart meaning explained.',
    intro:
      'Tian Liang — the "Celestial Beam" that holds up the roof — is the elder star of Zi Wei Dou Shu: protector, mentor, the voice of principle and patience. Classical texts call it the star of longevity and of shade: the tree under which others shelter. Tian Liang people are old souls who seem to arrive middle-aged and improve with every year.',
    personalityIntro:
      'Tian Liang natives take responsibility beyond their share — for family, colleagues, strangers, causes. They give advice freely (very freely) because they genuinely carry the weight of "what\'s right." They are slow to anger, hard to fluster, and difficult to corrupt.',
    strengths: [
      'integrity, composure in crisis, mentorship, medical and practical wisdom, staying power — the star famously matures and brightens with age',
    ],
    watchouts: [
      'the moral high ground is lonely and lightly inhabited. Tian Liang\'s protection can become control; its wisdom, lecturing; its seniority, rigidity. The classical note that Tian Liang "prefers to be older than others" is also its trap: someone must eventually be allowed to rescue *them*. Late-life softening — accepting care, admitting change — is the star\'s final exam.',
    ],
    career: [
      'Tian Liang suits medicine, law, education, religious and charitable work, civil service, insurance and risk, senior management — anywhere society stores its trust. They are the steady department head, the doctor patients return to for decades, the judge whose reasoning outlives trends. Quick speculative ventures are not their terrain; institutions are.',
    ],
    love: [
      'Tian Liang partners are dependable, protective, and traditional in the best sense: vows mean what they say. The shadow is paternalism — treating a partner as a ward to be guided rather than an equal to be consulted. Their marriages last when the elder learns to be a peer, and when their steady devotion is recognized for the romance it actually is.',
    ],
    palacesIntro: "Tian Liang's placement shows where you carry others — and are carried.",
    palaces: [
      { palace: 'Life Palace', meaning: 'the responsible elder-sibling character who stabilizes everyone around them.' },
      { palace: 'Career Palace', meaning: 'lifetime advancement in trusted professions.' },
      { palace: 'Health Palace', meaning: 'classical texts actually list Tian Liang favorably here — resilience and recovery.' },
      { palace: 'Parents Palace', meaning: 'supportive, principled parents or elders.' },
    ],
    faq: [
      {
        q: 'Why is Tian Liang called the elder star?',
        a: 'It represents seniority, protection, and moral weight — the beam that holds the roof. Classical texts associate it with longevity and with people who carry responsibility for others.',
      },
      {
        q: 'Does Tian Liang get better with age?',
        a: "Yes — that's one of its signature traits. Texts describe Tian Liang as brightening with age: authority, wisdom, and fortune that compound over a lifetime rather than peaking early.",
      },
      {
        q: 'What careers suit the Tian Liang star?',
        a: 'Medicine, law, education, charity, civil service, insurance and risk, and senior management — the professions where trust is the core asset.',
      },
    ],
    related: [
      { href: '/learn/ziwei-doushu-14-main-stars/', label: 'The 14 Main Stars Explained' },
      { href: '/stars/tian-xiang/', label: 'Tian Xiang: The Minister Star' },
    ],
  },
  {
    slug: 'qi-sha',
    pinyin: 'Qi Sha',
    chinese: '七杀',
    epithet: 'The General',
    element: 'Yin Metal',
    role: 'The Blade',
    metaTitle: 'Qi Sha Star (七杀) — The General Star in Zi Wei Dou Shu',
    metaDescription:
      'Qi Sha, the Seven Killings, is the general star of Zi Wei Dou Shu — intensity, courage, and decisive change. Its personality, career, love, and chart meaning.',
    intro:
      'Qi Sha — "Seven Killings" — has the most intimidating name in Zi Wei Dou Shu and one of the most useful energies. It is the general: the star of intensity, courage, and decisive action in situations that would paralyze anyone else. Classical texts pair it with Po Jun and Lian Zhen as the "killing" trio (杀破狼) — stars of upheaval — but upheaval is only half the story. The other half is *capability under fire*.',
    personalityIntro:
      'Qi Sha people do nothing at half volume. They commit fast, work ferociously, and prune — relationships, projects, habits — without ceremony. There is a warrior directness to them that some find alarming and everyone finds clear.',
    strengths: [
      'decisiveness, physical and mental toughness, independence, crisis performance, absolute loyalty to those inside their circle',
    ],
    watchouts: [
      'the blade cuts both ways. Qi Sha burns through jobs, partnerships, and its own reserves; impulsively folded into stubbornness, it can mistake drama for progress. Classical texts note Qi Sha does best "with structure" — like a general with a real army, it needs a mission worth its intensity. Undirected, the general starts fights for something to do.',
    ],
    career: [
      'Qi Sha excels in emergency medicine, surgery, military and police work, competitive sales, entrepreneurship, professional sports, engineering under deadline, crisis management. They want hard problems and real stakes. Stable-but-tiny bureaucratic roles are their purgatory; give them a battlefield and they\'re magnificent.',
    ],
    love: [
      'Qi Sha courts decisively and commits totally — the "or nothing" half is real. Early drama (fast beginnings, sharp breakups) is common; once genuinely committed, they defend the relationship like territory. The growth edge is volume control: a partner is an ally, not a subordinate, and intensity must sometimes be *chosen more quietly*.',
    ],
    palacesIntro: "Qi Sha's placement shows where you fight — and win.",
    palaces: [
      { palace: 'Life Palace', meaning: 'a bold, self-made character who lives by decisive turns.' },
      { palace: 'Career Palace', meaning: 'high-performance, high-pressure professions.' },
      { palace: 'Wealth Palace', meaning: 'money made in big decisive swings — and kept only when discipline catches up with boldness.' },
      { palace: 'Spouse Palace', meaning: 'a strong-willed partner and a passionate, occasionally explosive bond.' },
    ],
    faq: [
      {
        q: 'Is Qi Sha a bad star — does "Seven Killings" mean something terrible?',
        a: 'No. The name describes its *mode* — decisive, cutting, transformative — not a curse. Qi Sha is the system\'s crisis specialist: stars of pure comfort tend to freeze when things collapse; Qi Sha comes alive.',
      },
      {
        q: 'Is Qi Sha good for wealth?',
        a: 'It can produce significant wealth — earned in bold, concentrated moves — but its classical caution is retention: windfalls need Wu Qu/Tian Fu-style discipline to survive the next bold move.',
      },
      {
        q: 'What careers suit the Qi Sha star?',
        a: 'Surgery, emergency services, military and police, entrepreneurship, competitive sales, and crisis management — anywhere intensity and decisiveness are the job.',
      },
    ],
    related: [
      { href: '/learn/ziwei-doushu-14-main-stars/', label: 'The 14 Main Stars Explained' },
      { href: '/stars/po-jun/', label: 'Po Jun: The Army Breaker' },
    ],
  },
  {
    slug: 'po-jun',
    pinyin: 'Po Jun',
    chinese: '破军',
    epithet: 'The Army Breaker',
    element: 'Yin Water',
    role: 'The Phoenix',
    metaTitle: 'Po Jun Star (破军) — The Rebirth Star in Zi Wei Dou Shu',
    metaDescription:
      'Po Jun, the Army Breaker, is the star of disruption and rebirth in Zi Wei Dou Shu. Its personality, career fits, love patterns, and chart meaning explained.',
    intro:
      'Po Jun — "Army Breaker" — is the disruptor of Zi Wei Dou Shu: the star that tears down the old structure so the new one can be built. Classical texts place it with Qi Sha and Lian Zhen among the stars of upheaval, and add its own signature: Po Jun doesn\'t just break things, it *replaces* them. Wherever it sits in your chart, life moves in cycles of demolition and reconstruction — the phoenix pattern.',
    personalityIntro:
      'Po Jun people live in eras. They commit completely to a life chapter — a career, a city, an identity — then, when it stops being true, they burn it and start over, sometimes baffling everyone who watched them build it. There is real courage in that, and real cost.',
    strengths: [
      'fearlessness about beginnings, resourcefulness in wreckage, unusual honesty with themselves about what\'s over, stamina for reinvention',
    ],
    watchouts: [
      "demolition as a habit. Po Jun can leave just before the harvest — breaking what only needed patience, mistaking restlessness for destiny. Classical texts also flag the star's blind spot at home: the brilliant rebel who is careless with the people who aren't part of the next chapter. The lifetime lesson is discernment — learning which walls actually need breaking.",
    ],
    career: [
      'Po Jun excels at turnarounds: startups after failure, distressed companies, crisis response, architecture and demolition (literally and figuratively), investigative work, pioneering markets. They are worth their weight in gold when something is broken and worthless in a job that only requires maintenance. Many strong Po Jun charts show serial ventures — several dramatic endings, each funding a better beginning.',
    ],
    love: [
      "In love, Po Jun falls hard, gives wholly, and — when a relationship is truly over — ends it with a completeness that partners often experience as coldness. It isn't; it's finality. Their relationships work when the partner understands that Po Jun's loyalty to the *living* relationship is total, and that their honesty about its death is a strange form of respect.",
    ],
    palacesIntro: "Po Jun's placement marks the domain of your life that renews through rupture.",
    palaces: [
      { palace: 'Life Palace', meaning: 'a life of pronounced chapters — reinvention as a theme.' },
      { palace: 'Career Palace', meaning: 'several distinct careers or industries, success after restarts.' },
      { palace: 'Wealth Palace', meaning: 'gains through bold structural bets, losses through impatience.' },
      { palace: 'Spouse Palace', meaning: 'a nontraditional partnership history — early turbulence that can mature into extraordinary depth.' },
    ],
    faq: [
      {
        q: 'Is Po Jun the worst star in Zi Wei Dou Shu?',
        a: "It's the most disruptive, not the worst. Classical readings are blunt about its costs — instability, dramatic endings — but equally clear that Po Jun brings the system's capacity for rebirth. Its outcomes depend heavily on the company it keeps in the chart and the choices of its owner.",
      },
      {
        q: 'What does Po Jun mean in my chart?',
        a: 'It marks the palace where life renews through rupture: relationships, career, wealth, or self will periodically be torn down and rebuilt. Knowing which domain helps you cooperate with the cycle instead of fighting it.',
      },
      {
        q: "What's the difference between Qi Sha and Po Jun?",
        a: 'Both are "killing" stars. Qi Sha is the general — decisive intensity inside a mission. Po Jun is the army breaker — structural replacement, ending and rebirth. Qi Sha cuts; Po Jun rebuilds.',
      },
    ],
    related: [
      { href: '/learn/ziwei-doushu-14-main-stars/', label: 'The 14 Main Stars Explained' },
      { href: '/stars/qi-sha/', label: 'Qi Sha: The General Star' },
    ],
  },
];

export function getStar(slug: string): Star | undefined {
  return STARS.find((s) => s.slug === slug);
}
