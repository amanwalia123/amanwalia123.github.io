export const siteConfig = {
    name: "Amanpreet S. Walia",
    title: "Computer Vision Research Engineer",
    description:
        "On-device imaging (HDR / Super-Resolution) • Model optimization • Qualcomm SNPE/DLC • Quantization (AIMET)",
    accentColor: "#1d4ed8",

    social: {
        email: "amanpreetwalia278@gmail.com",
        linkedin: "https://www.linkedin.com/in/amanpreetwalia/",
        // twitter is optional; remove if you don't want it
        // twitter: "https://x.com/yourhandle",
        github: "https://github.com/amanwalia123",
    },

    aboutMe:
        "Computer Vision Research Engineer focused on on-device image enhancement (HDR / Super-Resolution), model optimization, and deployment to Qualcomm platforms (SNPE/DLC, quantization). Experienced in local LLM deployment using Ollama and llama.cpp for edge AI applications. M.Sc. (Thesis) in Computer Science from McGill University and B.Eng. in Computer Engineering from York University.",

    metadata: {
        title: "Amanpreet S. Walia | CV Research Engineer",
        description: "Specializing in HDR, Super-Resolution, and on-device model optimization for Qualcomm SNPE/DLC.",
        url: "https://amanwalia123.github.io",
        image: "/profile.jpg",
    },

    skills: [
        {
            category: "Core AI & CV",
            items: ["PyTorch", "TensorFlow", "Keras", "OpenCV", "Super-Resolution", "HDR Imaging", "Self-Supervised Learning", "Depth Estimation"]
        },
        {
            category: "Optim & Deployment",
            items: ["Qualcomm SNPE/DLC", "AIMET", "Model Quantization", "LLM Deployment (Ollama, llama.cpp, GGUF)", "Model Compression", "NPU Optimization"]
        },
        {
            category: "Languages & Tools",
            items: ["Python", "C++", "C", "Java", "MATLAB", "SQL", "Git", "LaTeX"]
        },
        {
            category: "Hardware",
            items: ["Qualcomm Snapdragon", "Nvidia Jetson", "Huawei Atlas", "Raspberry Pi"]
        }
    ],

    // Separate academic research from technical side projects
    research: [
        {
            name: "Face2Scene — CVPR 2026 (Accepted)",
            description:
                "Face2Scene: Using Facial Degradation as an Oracle for Diffusion-Based Scene Restoration.",
            link: "https://www.linkedin.com/posts/alex-levinshtein_two-papers-on-image-restoration-got-accepted-activity-7431040298492854273-etdW",
            skills: ["CVPR 2026", "Diffusion", "Restoration"],
        },
        {
            name: "Gated Stereo — CVPR 2023",
            description:
                "Gated Stereo: Joint Depth Estimation from Gated and Wide-Baseline Active Stereo Cues. arXiv:2305.12955",
            link: "https://light.princeton.edu/publication/gatedstereo/",
            skills: ["CVPR 2023", "Depth", "Gated Imaging"],
        },
        {
            name: "Gated2Gated — CVPR 2022",
            description:
                "Gated2Gated: Self-Supervised Depth Estimation from Gated Images. arXiv:2112.02416",
            link: "https://light.princeton.edu/publication/gated2gated/",
            skills: ["CVPR 2022", "Self-supervised", "Depth"],
        },
        {
            name: "Patent — Burst Denoising/Deblurring (2024)",
            description:
                "Dual-camera Joint Denoising-Deblurring using Burst of Short and Long Exposure Images. US20240311968A1.",
            link: "https://patents.google.com/patent/US20240311968A1/en",
            skills: ["Computational Photography", "Burst", "Patent"],
        },
    ],

    experience: [
        {
            company: "Samsung Research America",
            title: "Computer Vision Research Engineer",
            dateRange: "Dec 2022 - Present",
            bullets: [
                "Deployed image enhancement models to Qualcomm devices by converting pipelines to SNPE/DLC and resolving operator/runtime constraints for production inference.",
                "Built and optimized Super-Resolution and HDR components focusing on on-device quality stability (artifact control, consistency across scenes) and runtime efficiency.",
                "Improved latency and memory footprint through deployment-oriented architecture changes and quantization workflows (AIMET).",
            ],
        },
        {
            company: "Algolux",
            title: "Computer Vision Researcher",
            dateRange: "Aug 2021 - Dec 2022",
            bullets: [
                "Developed a self-supervised depth estimation approach for gated imaging that improved generalization and closed the gap with prior supervised baselines under real capture conditions.",
            ],
        },
        {
            company: "Huawei Canada",
            title: "Machine Learning Engineer (Contract)",
            dateRange: "Mar 2021 - Aug 2021",
            bullets: [
                "Ported low-rank decomposed GPT-2/CPM-style models to Huawei NPU execution constraints; validated accuracy/performance trade-offs and integration readiness.",
            ],
        },
    ],

    education: [
        {
            school: "McGill University",
            degree: "M.Sc. (Thesis), Computer Science",
            dateRange: "2018 - 2021",
            achievements: ["GPA: 3.90/4.00"],
        },
        {
            school: "York University",
            degree: "B.Eng., Computer Engineering",
            dateRange: "2013 - 2018",
            achievements: ["GPA: 7.9/9.0"],
        },
    ],
};