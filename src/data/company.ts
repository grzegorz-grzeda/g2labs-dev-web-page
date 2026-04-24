export const company = {
    name: 'G2Labs',
    tagline: 'Connected-product delivery for teams that cannot afford a split between firmware, integration, and product software.',
    location: 'Based in Poland, working with teams across Europe.',
    description:
        'G2Labs is the independent engineering practice of Grzegorz Grzeda, helping teams ship connected products when firmware, device integration, and product software need to stay in one engineering thread.',
    longBio:
        'Since 2010, Grzegorz has worked across embedded firmware, wireless systems, electronics, GUI applications, and backend integrations. The work usually starts where teams feel delivery pain: unstable firmware, fuzzy device-to-cloud boundaries, or an MVP that spans hardware and software before anyone has the luxury of splitting it into separate tracks.',
    contactIntro:
        'Use the inquiry form below if it is enabled in this deployment, or reach out through LinkedIn or GitHub if you prefer a direct first contact.',
    site: 'https://g2labs.dev'
};

export const links = [
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/grzegorzgrzeda/'
    },
    {
        label: 'GitHub',
        href: 'https://github.com/grzegorz-grzeda'
    },
    {
        label: 'Facebook',
        href: 'https://www.facebook.com/g2labs.grzegorz.grzeda'
    },
    {
        label: 'CEIDG registry',
        href: 'https://aplikacja.ceidg.gov.pl/ceidg/ceidg.public.ui/SearchDetails.aspx?Id=cc1e7a0d-2beb-453a-90b5-d439a501fd99'
    },
    {
        label: 'Legacy site',
        href: 'https://www.g2labs.pl/'
    }
];

export const services = [
    {
        title: 'Firmware delivery sprint',
        format: 'Offer 01',
        description:
            'Take ownership of a firmware slice that has to move now: bring-up, feature delivery, stabilization, protocol work, or untangling code that has become hard to ship safely.',
        outcome:
            'Best when a team needs execution and technical clarity more than another coordination layer.',
        deliverables: [
            'Implementation in C or C++ across bare-metal and RTOS-based targets',
            'Debugging, integration, and focused handover notes for the owning team',
            'A short plan around the riskiest technical decisions instead of broad discovery theater'
        ]
    },
    {
        title: 'Connected product integration',
        format: 'Offer 02',
        description:
            'Define and build the boundary between the device and the rest of the product: payloads, APIs, tooling, backend touchpoints, desktop utilities, and the software operators actually rely on.',
        outcome:
            'Best when firmware exists, but the product still feels fragmented once data leaves the device.',
        deliverables: [
            'Device-to-backend or device-to-app interface definition grounded in real constraints',
            'Utility software, integration code, or supporting product tooling around the embedded core',
            'Practical alignment on where responsibilities sit between firmware, backend, and UI layers'
        ]
    },
    {
        title: 'MVP and delivery acceleration',
        format: 'Offer 03',
        description:
            'Move an embedded or connected-product MVP faster by combining implementation with pragmatic planning, selective AI-assisted tooling, and explicit technical decision-making.',
        outcome:
            'Best when a small team has to ship across hardware and software without pretending those concerns can be separated later.',
        deliverables: [
            'Architecture and implementation help on the slice that currently blocks progress',
            'AI-assisted scaffolding, documentation, and internal tooling where it genuinely shortens the loop',
            'A realistic path from prototype behavior to something a team can keep building on'
        ]
    }
];

export const projects = [
    {
        name: 'Medical robotics software stack',
        category: 'Embedded systems and product integration',
        summary: 'Worked on embedded software for medical robotics at M2MTeam, where device behavior, product constraints, and reliable integration all had to stay aligned.',
        impact: 'Useful in situations where hardware-adjacent software has to stay understandable and dependable as the product matures.'
    },
    {
        name: 'Connected weighing product on ESP32 with Wi-Fi and FOTA',
        category: 'Connected embedded product delivery',
        summary: 'Built intelligent weighing-product firmware around ESP32, Wi-Fi connectivity, and firmware update behavior that had to work reliably in the field.',
        impact: 'This is the kind of work where device behavior, connectivity, and update safety all need to hold together in a real shipped product.'
    },
    {
        name: 'Roku client firmware for LATAM',
        category: 'Platform software and media delivery',
        summary: 'Built Roku client software and related legacy embedded integrations for a platform serving a multi-million subscriber base in LATAM.',
        impact: 'The useful lesson there was keeping product-facing behavior dependable when scale and client constraints are both unforgiving.'
    },
    {
        name: 'MicrOS open embedded OS',
        category: 'Open source and technical education',
        summary: 'Built MicrOS as a small open embedded operating system to make low-level concepts easier to inspect, explain, and experiment with in public.',
        impact: 'It reflects the same preference G2Labs brings to client work: understandable systems over unnecessary complexity.'
    }
];

export const clients = [
    'Sigma Software Group',
    'Baracoda',
    'DisplayLink',
    'SeaChange',
    'SiDLY',
    'JM-Tronik',
    'M2MTeam'
];

export const experience = [
    {
        period: '2023-present',
        company: 'G2Labs',
        role: 'Independent embedded and software consultant',
        summary:
            'Focused on embedded-first client delivery from Poland, combining firmware work with connected software, technical planning, and integration support.',
        highlights: [
            'Firmware and integration work for connected products',
            'Support across embedded, desktop, backend, and web-adjacent tooling',
            'Selective AI-assisted workflow for faster iteration and delivery support'
        ]
    },
    {
        period: '2023-present',
        company: 'Sigma Software Group',
        role: 'Senior embedded engineer / consultant',
        summary:
            'Worked on embedded delivery in client product programs, tying implementation work to execution planning and product reality.',
        highlights: [
            'Embedded software ownership in delivery-critical product work',
            'Delivery planning aligned with technical risk',
            'Cross-team collaboration where software and hardware moved together'
        ]
    },
    {
        period: '2022-2023',
        company: 'Baracoda',
        role: 'Embedded systems engineer',
        summary:
            'Worked on an intelligent weight scale built around ESP32, Wi-Fi connectivity, and field update behavior that had to be dependable.',
        highlights: [
            'ESP32-based connected product implementation',
            'Wi-Fi connectivity and FOTA update flows',
            'Low-level architecture shaped around real product constraints'
        ]
    },
    {
        period: '2020-2022',
        company: 'SeaChange',
        role: 'Software engineer',
        summary:
            'Delivered Roku client software and related embedded integrations for a media platform serving a large subscriber base in LATAM.',
        highlights: [
            'Roku client application delivery',
            'Legacy integration work in production systems',
            'Reliability in consumer-facing software at scale'
        ]
    },
    {
        period: '2018-2020',
        company: 'SiDLY / JM-Tronik / M2MTeam',
        role: 'Embedded and electronics engineer',
        summary:
            'Worked across embedded devices, telemetry, electronics, and connected system delivery before the current consulting setup.',
        highlights: [
            'Firmware and electronics work across multiple product teams',
            'Medical robotics work at M2MTeam',
            'Wireless and telemetry-oriented engineering',
            'Experience spanning both startup and established-company environments'
        ]
    }
];

export const caseStudies = [
    {
        title: 'Embedded delivery under real program constraints',
        client: 'Sigma Software Group',
        period: '2023-present',
        context:
            'Client-facing embedded product delivery where implementation risk and planning risk affected each other directly.',
        challenge:
            'The work needed embedded execution and delivery planning to stay aligned instead of drifting into separate tracks.',
        ownership:
            'Owned embedded-software delivery on implementation slices where technical decisions directly shaped planning and delivery confidence.',
        work: [
            'Owned embedded software delivery on client product work',
            'Worked on the slices where implementation risk directly affected delivery planning',
            'Kept technical decisions grounded in what the product team actually had to ship'
        ],
        proofPoints: [
            'Useful when teams need an engineer who can implement and still speak clearly about delivery risk',
            'Closer to rescue and execution work than to broad discovery or presentation-heavy consulting',
            'Best fit where software and hardware realities have to stay visible in the same conversation'
        ],
        stack: ['embedded software', 'product integration', 'delivery planning'],
        outcome:
            'Useful where teams need firmware execution and realistic planning in the same conversation, not passed between separate roles.'
    },
    {
        title: 'Connected weighing product with ESP32, Wi-Fi, and FOTA',
        client: 'Baracoda',
        period: '2022-2023',
        context:
            'A connected product where device behavior, network behavior, and safe field updates all had to hold together in one shipped system.',
        challenge:
            'The product surface extended beyond the device itself, so wireless architecture and field-ready update behavior had to be dependable from the start.',
        ownership:
            'Built firmware around ESP32 and Wi-Fi connectivity, with direct responsibility for update behavior and product-side reliability at the device boundary.',
        work: [
            'Built firmware for an intelligent weight scale around ESP32 and Wi-Fi connectivity',
            'Implemented FOTA update paths tied to real device behavior',
            'Worked through the boundary between low-level firmware decisions and product-level reliability'
        ],
        proofPoints: [
            'Shows practical ownership of Wi-Fi connected embedded behavior, not just isolated firmware features',
            'Relevant for products that need dependable FOTA paths and predictable field behavior',
            'Useful when the hard part is integration quality, not only low-level code correctness'
        ],
        stack: ['ESP32', 'Wi-Fi', 'FOTA updates', 'embedded firmware'],
        outcome:
            'Strengthened the path from embedded architecture to connected-product behavior that could survive real deployment conditions.'
    },
    {
        title: 'Consumer-facing client delivery for large LATAM media platforms',
        client: 'SeaChange',
        period: '2020-2022',
        context:
            'A production subscriber platform where client software quality was visible immediately and scale made regressions expensive.',
        challenge:
            'Client software had to stay dependable in production while integrating with existing systems and serving a large subscriber base.',
        ownership:
            'Delivered Roku client software and adjacent integration work in a live product environment where client constraints and platform behavior both mattered.',
        work: [
            'Delivered Roku client software and related legacy embedded integrations',
            'Worked on product-facing behavior where scale and client constraints both mattered',
            'Connected implementation details to the realities of a live subscriber platform'
        ],
        proofPoints: [
            'Relevant for teams that care about stable product-facing behavior under production pressure',
            'Shows experience with legacy constraints and live-platform integration, not only greenfield work',
            'Useful where consumer-visible regressions carry immediate product cost'
        ],
        stack: ['Roku client software', 'HLS streaming', 'backend connectivity'],
        outcome:
            'Helped keep product-facing software reliable in an environment where regressions were visible immediately and scale amplified every mistake.'
    }
];

export const techStack = [
    {
        area: 'Embedded targets and firmware',
        summary:
            'Used in embedded delivery, device bring-up, firmware implementation, and hardware-adjacent product work.',
        items: ['C', 'C++', 'ESP32', 'AVR', 'MSP430', 'bootloaders', 'FOTA'],
        examples: [
            'Baracoda: ESP32 firmware and field update behavior for an intelligent weight scale',
            'M2MTeam: embedded software in medical robotics work',
            'MicrOS and electronics experiments: low-level embedded exploration in public work'
        ]
    },
    {
        area: 'Connectivity and product integration',
        summary:
            'Used where device behavior has to connect reliably to the rest of the product and survive real deployment conditions.',
        items: ['Wi-Fi', 'BLE', 'UART', 'SPI', 'I2C', 'REST APIs', 'device-to-cloud integration'],
        examples: [
            'Baracoda: Wi-Fi connectivity and update flows around the product boundary',
            'Connected-product consulting: firmware, payloads, tooling, and backend touchpoints kept in one thread',
            'Earlier telemetry-oriented work: hardware interfaces and connected-system integration'
        ]
    },
    {
        area: 'Software, tooling, and data',
        summary:
            'Used for backend integrations, internal tools, delivery support software, and product-facing utilities around the device.',
        items: ['Python', 'Node.js', 'MongoDB', 'desktop tooling', 'web tooling', 'automation scripts'],
        examples: [
            'G2Labs delivery work: utility software and web-adjacent tooling around embedded products',
            'SeaChange: software around a production media platform with integration constraints',
            'Internal and client tooling: Python and Node.js where they shortened delivery loops'
        ]
    },
    {
        area: 'Workflow and engineering environment',
        summary:
            'Used in daily delivery, debugging, collaboration, and implementation flow across client and internal work.',
        items: ['GitHub', 'GitLab', 'VS Code', 'Eclipse', 'Linux (Ubuntu)', 'CI workflows'],
        examples: [
            'Client delivery across established teams: GitHub and GitLab workflows',
            'Embedded development: VS Code, Eclipse, and Linux (Ubuntu) in day-to-day implementation',
            'Consulting and product work: CI-backed iteration and handover support'
        ]
    }
];

export const business = {
    companyName: 'G2Labs Grzegorz Grzęda',
    proprietor: 'Grzegorz Grzęda',
    country: 'Poland',
    started: '2018-04-10',
    nip: '7151887016',
    regon: '369928503',
    registryLabel: 'CEIDG registry',
    registryUrl:
        'https://aplikacja.ceidg.gov.pl/ceidg/ceidg.public.ui/SearchDetails.aspx?Id=cc1e7a0d-2beb-453a-90b5-d439a501fd99',
    responseWindow: 'Usually within 2 business days',
    engagementModes: [
        'Remote-first from Poland',
        'Hands-on implementation and delivery support',
        'Useful for rescue work, integration work, and focused MVP delivery'
    ]
};
