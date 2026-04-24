export const company = {
    name: 'G2Labs',
    tagline: 'Connected-product delivery for teams that cannot afford a split between firmware, integration, and product software.',
    location: 'Based in Poland, working with teams across Europe.',
    description:
        'G2Labs is the independent engineering practice of Grzegorz Grzeda, helping teams ship connected products when firmware, device integration, and product software need to stay in one engineering thread.',
    longBio:
        'Since 2010, Grzegorz has worked across embedded firmware, wireless systems, electronics, GUI applications, backend integrations, and education-oriented open-source work. The delivery range now spans ESP32, STM32, nRF52, custom low-level targets, IoT protocols such as MQTT, CoAP, and OpenThread, and the software around the device including Node.js, cloud-connected integrations, and utility tooling.',
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
        summary: 'Started MicrOS in 2025 as a minimal MIT-licensed embedded operating system built to stay simple, open, and educational while still running on real hardware and QEMU.',
        impact: 'It reflects the same preference G2Labs brings to client work: understandable systems, lean architecture, and embedded software that is easier to learn from, debug, port, and extend.'
    }
];

export const products = [
    {
        slug: 'vt100logging',
        name: 'vt100logging',
        label: 'Python tooling product',
        href: 'https://pypi.org/project/vt100logging/',
        repo: 'https://github.com/g2labs-grzegorz-grzeda/vt100logging',
        tagline: 'A small Python logging product built for readable terminal output.',
        summary:
            'A lightweight Python utility that makes terminal logs easier to scan by adding VT100-colored output on top of the standard logging module.',
        story:
            'vt100logging started as a narrow internal-quality problem worth solving properly: developers and operators read terminal logs constantly, so log severity should be visible immediately without setting up a heavy logging stack. The result is a small public product with a clear install path, a thin API surface, and packaging disciplined enough for reuse.',
        audience: [
            'Python developers who want cleaner console logs without first building custom formatter infrastructure',
            'Engineers shipping scripts, internal tools, or small services where terminal readability matters every day',
            'Teams who value compact public utilities that remove repetitive setup without adding framework weight'
        ],
        stats: [
            { value: 'PyPI', label: 'published package' },
            { value: 'MIT', label: 'licensed' },
            { value: 'Win11 + Ubuntu', label: 'tested OS targets' },
            { value: 'console + file', label: 'logging modes' }
        ],
        pillars: [
            {
                title: 'Low-friction setup',
                description:
                    'The package is designed to be installed and initialized quickly through a small API instead of forcing a full custom logging configuration for common cases.'
            },
            {
                title: 'Readable terminal output',
                description:
                    'Colored VT100 levels make debug, info, warning, and error messages easier to separate visually in real terminal output where developers need to spot issues fast.'
            },
            {
                title: 'Practical utility scope',
                description:
                    'It stays focused on a narrow but genuinely useful problem: shipping a better logging experience for scripts, tools, services, and internal developer workflows.'
            }
        ],
        categories: [
            'Python',
            'Logging',
            'CLI tooling',
            'Developer utilities',
            'Open source',
            'PyPI'
        ],
        featuredTools: [
            'Simple `vt100logging_init()` entry point for module-level setup',
            'Colored VT100 formatting for debug, info, warning, and error levels',
            'Convenience helpers such as `D`, `I`, `W`, `E`, and `EX`',
            'Optional sidecar file logging for persistent local logs',
            'Minimal package surface suitable for scripts and internal tools'
        ],
        miniature: {
            helperLabel: 'Python logging helper',
            nav: ['PyPI', 'GitHub', 'Usage'],
            searchLabel: 'Install vt100logging',
            summaryStats: ['PyPI package', 'MIT', 'colored output'],
            categoryPreview: ['Python', 'Logging', 'CLI', 'Utilities'],
            toolPreview: [
                { category: 'Init', name: 'vt100logging_init' },
                { category: 'Levels', name: 'D / I / W / E' },
                { category: 'Exceptions', name: 'EX helper' }
            ]
        },
        proof: [
            'Shows product judgment around small but high-frequency developer pain points, not only larger public-facing apps',
            'Demonstrates packaging, distribution, and maintenance discipline through a Python utility shipped publicly on PyPI',
            'Fits the same G2Labs pattern as other tools: narrow scope, clear value, and pragmatic implementation over unnecessary framework weight'
        ]
    },
    {
        slug: 'micros',
        name: 'MicrOS',
        label: 'Open-source product',
        href: 'https://microsproject.dev/',
        repo: 'https://github.com/microsproject/micros',
        docs: 'https://microsproject.dev/index.php/getting-started/',
        tagline: 'Simple, open, embedded.',
        summary:
            'A lightweight open-source real-time operating system for microcontrollers and small systems, designed to stay tiny, transparent, and hackable.',
        story:
            'MicrOS is a public embedded-systems project built to make low-level operating-system concepts easier to inspect, explain, port, and extend without hiding them behind unnecessary weight.',
        audience: [
            'Engineers learning RTOS building blocks such as startup flow, scheduling, and drivers',
            'Embedded developers who want a small public codebase they can actually read end to end',
            'Teams interested in the engineering taste behind G2Labs delivery work: clarity, portability, and lean build systems'
        ],
        stats: [
            { value: 'MIT', label: 'licensed' },
            { value: 'QEMU + HW', label: 'execution path' },
            { value: 'CMake + Ninja', label: 'build flow' },
            { value: 'ARM / POSIX / RISC-V', label: 'portability direction' }
        ],
        pillars: [
            {
                title: 'Clarity-first architecture',
                description:
                    'The project is intentionally shaped to keep startup code, linker flow, kernel surfaces, and board support understandable rather than hidden behind layers of framework machinery.'
            },
            {
                title: 'Educational in public',
                description:
                    'MicrOS is meant to be learnable in the open, with documentation, samples, and governance visible to contributors and readers instead of buried in private notes.'
            },
            {
                title: 'Real embedded constraints',
                description:
                    'It is not a toy detached from practice: the project is built around real toolchains, board configuration, linker scripts, QEMU execution, and hardware-oriented bring-up.'
            }
        ],
        categories: [
            'RTOS',
            'ARM Cortex-M',
            'QEMU',
            'CMake',
            'Ninja',
            'Open source',
            'Education'
        ],
        featuredTools: [
            'Minimal kernel surfaces including startup and initialization flow',
            'Board-oriented build configuration with CMake toolchain routing',
            'QEMU-backed sample execution for fast iteration',
            'Driver-model and concurrency documentation for contributors',
            'Public roadmap, contribution guidelines, and security process'
        ],
        miniature: {
            helperLabel: 'Embedded OS in public',
            nav: ['Docs', 'Boards', 'Samples'],
            searchLabel: 'Explore MicrOS',
            summaryStats: ['MIT licensed', 'QEMU + hardware', 'CMake + Ninja'],
            categoryPreview: ['Kernel', 'Drivers', 'Boards', 'Docs', 'Samples'],
            toolPreview: [
                { category: 'Kernel', name: 'Context switching' },
                { category: 'Boards', name: 'LM3S6965 EVB' },
                { category: 'Docs', name: 'Getting Started' }
            ]
        },
        proof: [
            'Shows practical low-level engineering taste: understandable startup flow, linker configuration, and kernel boundaries',
            'Demonstrates public technical communication, not only implementation, through docs, roadmap, and contributor-facing material',
            'Acts as a strong signal for embedded clients who value portability, transparency, and direct engineering judgment'
        ]
    },
    {
        slug: 'devtoolsforme',
        name: 'DevToolsForMe',
        label: 'Product showcase',
        href: 'https://devtoolsforme.com/',
        tagline: 'Quick browser tools for developer workflows.',
        summary:
            'A browser-first collection of practical developer utilities built to remove the small repetitive tasks that slow down bigger engineering work.',
        story:
            'The product is shaped around a simple rule: many useful developer tools should open instantly, run locally in the browser, and avoid pushing users toward heavyweight apps or backend services for small daily tasks.',
        audience: [
            'Developers who need quick utility tools without leaving the tab',
            'Embedded engineers who regularly move between bytes, registers, protocols, and timing calculations',
            'Product and platform teams who want private-by-default helpers for common technical workflows'
        ],
        stats: [
            { value: '53', label: 'browser tools live' },
            { value: '25', label: 'embedded-focused utilities' },
            { value: '100%', label: 'client-side for most tools' },
            { value: 'opt-in', label: 'analytics model' }
        ],
        pillars: [
            {
                title: 'Browser-first delivery',
                description:
                    'Search, open, and use a tool immediately without installs, extensions, or account-heavy setup.'
            },
            {
                title: 'Privacy-conscious by design',
                description:
                    'Most tools run entirely on the user device, with analytics enabled only when explicitly accepted.'
            },
            {
                title: 'Strong embedded coverage',
                description:
                    'A large share of the catalog is built around embedded workflows such as CRCs, register math, timing, binary data, and firmware file inspection.'
            }
        ],
        categories: [
            'Embedded',
            'Encoding',
            'Data',
            'Network',
            'Security',
            'Text',
            'Reference',
            'Design'
        ],
        featuredTools: [
            'Bitmask Calculator for register inspection and manipulation',
            'CRC Calculator for payload checks and embedded debugging',
            'Struct Padding Visualizer for C layout and alignment checks',
            'MQTT Client for browser-based topic inspection over WebSockets',
            'JSON Diff for fast structural comparison',
            'Certificate Inspector for readable PEM and SAN inspection'
        ],
        miniature: {
            helperLabel: 'Browser-first developer utilities',
            nav: ['All tools', 'My tools', 'About'],
            searchLabel: 'Search tools',
            summaryStats: ['53 tools', '25 embedded', 'client-side only'],
            categoryPreview: ['All', 'Embedded', 'Data', 'Security', 'Text'],
            toolPreview: [
                { category: 'Embedded', name: 'Bitmask Calculator' },
                { category: 'Data', name: 'JSON Formatter' },
                { category: 'Security', name: 'Certificate Inspector' }
            ]
        },
        proof: [
            'Shows product thinking around information architecture, tool discovery, and low-friction task completion',
            'Demonstrates practical browser-side implementation for technical utilities, not only brochure-style frontend work',
            'Reflects G2Labs strengths in embedded workflows, utility software, and delivery of small but genuinely useful engineering surfaces'
        ]
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
        period: '2025-present',
        company: 'MicrOS Project',
        role: 'Creator & Maintainer',
        summary:
            'Designed and launched MicrOS as a lightweight open-source real-time operating system for microcontrollers and small systems, built around clarity, public learning, and practical experimentation.',
        highlights: [
            'MIT-licensed project with public docs, contribution flow, and governance pages',
            'Build flow centered on CMake, Ninja, QEMU, and board-oriented configuration',
            'Growing toward scheduler, drivers, multitasking demos, and broader ARM Cortex-M, POSIX, and RISC-V support'
        ]
    },
    {
        period: '2023-present',
        company: 'Sigma Software Group',
        role: 'Senior Software Developer',
        summary:
            'Worked in client-facing embedded product delivery where implementation work and execution planning had to stay closely aligned.',
        highlights: [
            'Embedded product-program delivery in a consulting environment',
            'Implementation work on delivery-critical product slices',
            'Technical risk kept visible in planning and cross-team execution'
        ]
    },
    {
        period: '2018-present',
        company: 'G2Labs Grzegorz Grzęda',
        role: 'Independent Business Owner',
        summary:
            'Runs G2Labs as an independent engineering practice delivering embedded systems, IoT solutions, utility software, and software planning for client work.',
        highlights: [
            'Complete embedded software solutions for client products including medical robotics work',
            'Software project management, planning, and practical delivery support',
            'Embedded, desktop, and utility software in C, C++, Qt, and adjacent tooling'
        ]
    },
    {
        period: '2021-2023',
        company: 'Baracoda Group',
        role: 'Senior Embedded Software Engineer',
        summary:
            'Worked on connected embedded product delivery in the Baracoda environment, focused on dependable device behavior and product-side integration.',
        highlights: [
            'Senior embedded ownership in a connected-product setting',
            'Device-side implementation under real product constraints',
            'Embedded delivery tied to broader product behavior and field reliability'
        ]
    },
    {
        period: '2021-2023',
        company: 'Alsoft, a Baracoda company',
        role: 'Senior Embedded Software Engineer',
        summary:
            'Parallel role context listed in the profile for the same Baracoda delivery period, reflecting the company structure around the work.',
        highlights: [
            'Senior embedded role in the same delivery window as Baracoda',
            'Connected-device implementation and product integration context',
            'Part of the product environment behind the Baracoda work period'
        ]
    },
    {
        period: '2021-2021',
        company: 'Softwarely',
        role: 'Team Leader',
        summary:
            'Led the embedded team while delivering BLE Mesh sensoring solutions in a short but management-heavy delivery period.',
        highlights: [
            'Embedded team leadership',
            'Delivery ownership for BLE Mesh sensoring work',
            'Hands-on technical leadership rather than coordination-only management'
        ]
    },
    {
        period: '2020-2021',
        company: 'Softwarely',
        role: 'Senior Embedded Software Engineer',
        summary:
            'Worked as a senior embedded engineer in the same Softwarely period, contributing directly to delivery while moving into team leadership.',
        highlights: [
            'Senior embedded implementation role',
            'Overlap between direct engineering and team leadership responsibilities',
            'Delivery in wireless and sensor-oriented embedded work'
        ]
    },
    {
        period: '2021-2021',
        company: 'SeaChange Poland',
        role: 'Client Roku Developer',
        summary:
            'Developed client application software for the Roku platform in a production media environment serving large subscriber bases.',
        highlights: [
            'Roku client software in BrightScript',
            'Consumer-facing client behavior in production platforms',
            'Work shaped by platform constraints and live product expectations'
        ]
    },
    {
        period: '2020-2021',
        company: 'SeaChange Poland',
        role: 'Client Legacy Embedded Engineer',
        summary:
            'Developed software for legacy Motorola set-top-box platforms together with supporting utility software.',
        highlights: [
            'Client application development in C for legacy embedded platforms',
            'Python utility software around product delivery',
            'Production maintenance and evolution under legacy constraints'
        ]
    },
    {
        period: '2019-2020',
        company: 'DisplayLink',
        role: 'Senior Embedded Development Engineer',
        summary:
            'Short senior embedded engineering period at DisplayLink in late 2019 and early 2020.',
        highlights: [
            'Senior embedded development role',
            'Experience inside an established embedded engineering organization',
            'Worked in a specialist product-development environment'
        ]
    },
    {
        period: '2018-2019',
        company: 'M2MTeam Sp. z o.o.',
        role: 'Senior Software Developer',
        summary:
            'Led teams and delivered software solutions for the medical field, including medical robotics and sensing-related systems.',
        highlights: [
            'Custom embedded solutions for medical robotics',
            'Environment sensing and data collection through a web application',
            'Human and equipment indoor localization work'
        ]
    },
    {
        period: '2017-2018',
        company: 'JM-TRONIK',
        role: 'Software Developer',
        summary:
            'Developed embedded software and related support systems for smart-grid solutions.',
        highlights: [
            'Low-level embedded drivers in an RT environment',
            'Backend server work for user web accessibility',
            'Qt-based utility software around the embedded product'
        ]
    },
    {
        period: '2017-2017',
        company: 'M2MTeam Sp. z o.o.',
        role: 'Embedded Software Developer',
        summary:
            'Worked on embedded environmental measurement solutions with BLE and LoRa connectivity.',
        highlights: [
            'Architectural work for BLE temperature and humidity sensors',
            'Custom communication protocol for low-throughput links',
            'Custom bootloader and OTAU solutions'
        ]
    },
    {
        period: '2015-2017',
        company: 'Military University of Technology',
        role: 'Scientific Researcher',
        summary:
            'Conducted lab classes and research around picosecond-precision time measurements, FPGA systems, and measurement-device software.',
        highlights: [
            'Teaching materials for integrated-circuit lab classes',
            'GUI software for dedicated time-measurement devices',
            'Precise time-measurement sensors implemented in Xilinx FPGAs'
        ]
    },
    {
        period: '2015-2015',
        company: 'SiDLY sp. z o.o.',
        role: 'Embedded Software Developer',
        summary:
            'Worked on an embedded BLE platform with communication, RTOS-oriented refactoring, and production programming support.',
        highlights: [
            'BLE communication link between host and onboard MCU',
            'Software architecture refactoring for RTOS adoption',
            'Custom bootloader and production-bench software support'
        ]
    },
    {
        period: '2011-2011',
        company: 'E3 Technology sp. z o. o.',
        role: 'Embedded Measurement Systems Designer',
        summary:
            'Designed and updated software and PCB designs for embedded measurement systems using analog and mixed-signal acquisition paths.',
        highlights: [
            'Embedded measurement-system design',
            'Software and PCB updates in the same engineering scope',
            'Analog and mixed-signal measurement channels with basic DSP'
        ]
    }
];

export const caseStudies = [
    {
        title: 'Python logging utility turned into a reusable public product',
        client: 'G2Labs',
        period: '2026-present',
        context:
            'A repeated internal tooling problem: console logs were useful but slower to scan than they should be during development, debugging, and small-service work.',
        challenge:
            'The goal was to improve day-to-day Python logging without creating another heavyweight abstraction or private one-off helper that would be hard to reuse later.',
        ownership:
            'Defined the package scope, shaped the thin API, implemented the formatter and helper layer, and published the result as a reusable Python package with public documentation and distribution.',
        work: [
            'Designed the package around the standard logging module instead of replacing it wholesale',
            'Implemented VT100-colored console formatting, convenience helpers, and optional file logging',
            'Published the package to PyPI and backed it with a public GitHub repository for inspection and reuse'
        ],
        proofPoints: [
            'Useful for clients who need small internal tools and utilities treated with product discipline rather than left as disposable scripts',
            'Shows that G2Labs can package and publish practical Python tooling, not only firmware and browser-side utilities',
            'Relevant when the right answer is a thin, well-shaped developer product instead of a larger platform investment'
        ],
        stack: ['Python', 'logging', 'PyPI packaging', 'developer tooling'],
        outcome:
            'Turned a recurring engineering pain point into a small public product that is installable, inspectable, and reusable across future tooling work.'
    },
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
            'Used in embedded delivery, device bring-up, firmware implementation, RTOS-oriented work, and hardware-adjacent product development.',
        items: ['C', 'C++', 'ESP32', 'STM32', 'nRF52', 'AVR', 'MSP430', 'ZephyrOS', 'RTOS kernels', 'bootloaders', 'FOTA'],
        examples: [
            'Baracoda: ESP32 firmware and field update behavior for an intelligent weight scale',
            'M2MTeam: embedded software in medical robotics work',
            'MicrOS: lightweight RTOS work across startup code, linker flow, kernel surfaces, and board bring-up',
            'Profile-backed experience across bare-metal and OS-driven embedded implementation'
        ]
    },
    {
        area: 'Connectivity and product integration',
        summary:
            'Used where device behavior has to connect reliably to the rest of the product and survive real deployment conditions.',
        items: ['Wi-Fi', 'BLE', 'MQTT', 'CoAP', 'OpenThread', 'UART', 'SPI', 'I2C', 'REST APIs', 'device-to-cloud integration'],
        examples: [
            'Baracoda: Wi-Fi connectivity and update flows around the product boundary',
            'Connected-product consulting: firmware, payloads, tooling, and backend touchpoints kept in one thread',
            'Earlier telemetry-oriented work: hardware interfaces and connected-system integration',
            'Profile-based experience explicitly covering MQTT, CoAP, OpenThread, and custom APIs'
        ]
    },
    {
        area: 'Software, tooling, and data',
        summary:
            'Used for backend integrations, internal tools, delivery support software, web integrations, and product-facing utilities around the device.',
        items: ['Python', 'Node.js', 'MongoDB', 'desktop tooling', 'web tooling', 'automation scripts', 'WordPress', 'cloud services', 'Qt', 'QEMU'],
        examples: [
            'G2Labs delivery work: utility software and web-adjacent tooling around embedded products',
            'SeaChange: software around a production media platform with integration constraints',
            'Internal and client tooling: Python and Node.js where they shortened delivery loops',
            'Profile-backed range including WordPress and cloud-connected integrations for modern hardware platforms',
            'MicrOS: simulator-backed iteration and sample execution through QEMU'
        ]
    },
    {
        area: 'Workflow and engineering environment',
        summary:
            'Used in daily delivery, debugging, collaboration, and implementation flow across client, product, and open-source work.',
        items: ['GitHub', 'GitLab', 'VS Code', 'Eclipse', 'CMake', 'Ninja', 'Linux (Ubuntu)', 'CI workflows'],
        examples: [
            'Client delivery across established teams: GitHub and GitLab workflows',
            'Embedded development: VS Code, Eclipse, and Linux (Ubuntu) in day-to-day implementation',
            'Consulting and product work: CI-backed iteration and handover support',
            'MicrOS: public build flow and contributor-facing tooling around CMake and Ninja',
            'Profile-listed workflow depth including CMake and open-source developer tooling'
        ]
    }
];

export const education = [
    {
        institution: 'Military University of Technology in Warsaw',
        degree: 'Doctor of Philosophy [paused], Electronics',
        period: '2015-2017'
    },
    {
        institution: 'Military University of Technology in Warsaw',
        degree: 'Master of Science in Electronics, Telecommunication Systems',
        period: '2014-2015'
    },
    {
        institution: 'Military University of Technology in Warsaw',
        degree: 'Electronics Engineer, Electronics and Telecommunication',
        period: '2010-2014'
    }
];

export const awards = [
    'Rector’s Award of the Military University of Technology for the ZTC WEL team',
    'Diploma for the best thesis',
    'Recognition diploma for distinction in the Dean’s competition for the best thesis',
    'Recognition diploma for academic achievement'
];

export const publications = [
    'Diagnostic and control software for an interpolating time counter in a programmable device',
    'Interpolating time counter with multi-edge coding',
    'Time interval measurement module implemented in SoC FPGA device',
    'Microcontroller based impedance meter with host computer control',
    'Direct time-to-digital converter with multi-edge coding'
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
