export interface StatItem {
  value: string;
  label: string;
  detail?: string;
}

export interface HomeContent {
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    ctaPrimary: { text: string; href: string };
    ctaSecondary: { text: string };
    stats: StatItem[];
  };
  trustBar: {
    title: string;
    logos: { name: string; sector: string }[];
  };
  outcomesBySolution: {
    tag: string;
    headline: string;
    subheadline: string;
    tabs: {
      id: string;
      label: string;
      headline: string;
      description: string;
      bullets: string[];
      mockupMetric: string;
      mockupSub: string;
      accent: string;
    }[];
  };
  platformPillars: {
    tag: string;
    headline: string;
    subheadline: string;
    pillars: {
      id: string;
      title: string;
      description: string;
      href: string;
      badge: string;
    }[];
  };
  howItWorks: {
    tag: string;
    headline: string;
    subheadline: string;
    steps: {
      number: string;
      title: string;
      subtitle: string;
      description: string;
      specs: { label: string; value: string }[];
    }[];
  };
  results: {
    tag: string;
    headline: string;
    subheadline: string;
    metrics: {
      value: string;
      label: string;
      sub: string;
      verified: string;
    }[];
  };
  integrations: {
    tag: string;
    headline: string;
    subheadline: string;
    protocols: string[];
  };
  caseStudies: {
    tag: string;
    headline: string;
    subheadline: string;
    items: {
      company: string;
      sector: string;
      metric: string;
      metricLabel: string;
      quote: string;
      author: string;
      href: string;
    }[];
  };
  security: {
    headline: string;
    subheadline: string;
    badges: { title: string; desc: string }[];
  };
  resources: {
    tag: string;
    headline: string;
    items: {
      category: string;
      title: string;
      readTime: string;
      href: string;
    }[];
  };
  finalCta: {
    headline: string;
    subheadline: string;
    formTitle: string;
  };
}

export const homeContent: HomeContent = {
  hero: {
    badge: "AI-POWERED INDUSTRIAL INTELLIGENCE • IEC 62443 COMPLIANT",
    headline: "Transform your production line with AI",
    subheadline: "Continuous, non-intrusive monitoring that eliminates mechanical downtime and cuts compressed air utility costs across your manufacturing plant.",
    ctaPrimary: {
      text: "Book a Demo",
      href: "/book-a-demo"
    },
    ctaSecondary: {
      text: "Watch 2-Min Demo"
    },
    stats: [
      { value: "482+", label: "Assets Monitored [REPLACE]", detail: "Live shop-floor telemetry" },
      { value: "1.4B", label: "Data Points Processed [REPLACE]", detail: "Sub-second 25.6 kHz sampling" },
      { value: "99.9%", label: "Verified System Uptime [REPLACE]", detail: "Zero production line halts" },
      { value: "0", label: "Unplanned Outages Prevented [REPLACE]", detail: "14-day early warning" }
    ]
  },
  trustBar: {
    title: "TRUSTED ACROSS GLOBAL MANUFACTURING & TIER-1 SITES [REPLACE]",
    logos: [
      { name: "Precision Industrial Corp [REPLACE]", sector: "Automotive Stamping" },
      { name: "Apex Transmissions [REPLACE]", sector: "Tier-1 Powertrain" },
      { name: "Nordic Cleanfab [REPLACE]", sector: "Semiconductor Fab" },
      { name: "PureFlow Dairy [REPLACE]", sector: "Food & Beverage" },
      { name: "HeavyMach Global [REPLACE]", sector: "CNC Precision Metal" },
      { name: "AeroDynamics Ltd [REPLACE]", sector: "Aerospace Machining" }
    ]
  },
  outcomesBySolution: {
    tag: "OUTCOMES BY SOLUTION",
    headline: "Engineered to deliver rapid, verified shop-floor returns",
    subheadline: "Select an operational challenge below to see how FactoryOps AI deploys on your line without engineering disruption.",
    tabs: [
      {
        id: "predictive-maintenance",
        label: "Predictive Maintenance",
        headline: "Predict mechanical bearing and motor failures 14 days before breakdown",
        description: "High-frequency 25.6 kHz vibration spectral analysis identifies inner-race spalls, harmonic unbalance, and lubrication dry-outs before line halts occur.",
        bullets: [
          "Eliminate catastrophic rotary screw compressor and spindle burnouts",
          "Automated ISO 10816 vibration severity compliance grading",
          "Cut emergency weekend overhaul costs by up to 35% [REPLACE]"
        ],
        mockupMetric: "14 Days",
        mockupSub: "Average advance notice before mechanical seizure",
        accent: "#0062FF"
      },
      {
        id: "real-time-monitoring",
        label: "Real-Time Monitoring",
        headline: "Sub-second telemetry for all legacy and modern machines",
        description: "Plug-and-play non-intrusive clip-on sensors stream electrical current waveforms, pressure deltas, and thermal gradients to a unified plant console.",
        bullets: [
          "Zero PLC re-wiring; installs on live machinery in under 15 minutes",
          "Hardware-agnostic protocol harmonization (Modbus, OPC-UA, 4G)",
          "Instant mobile notifications and webhook dispatches to shift technicians"
        ],
        mockupMetric: "< 15 ms",
        mockupSub: "Edge-to-dashboard telemetry streaming latency",
        accent: "#06B6D4"
      },
      {
        id: "production-optimization",
        label: "Production Optimization",
        headline: "Automate root-cause bottleneck classification to lift OEE",
        description: "Replace subjective manual whiteboard logs with empirical machine data. Separate equipment micro-stops from operator changeover delays.",
        bullets: [
          "Direct +4.8% to +8.2% boost in overall equipment availability [REPLACE]",
          "Pinpoint micro-stoppages under 60 seconds that escape manual logs",
          "Native bidirectional integration with SAP PM and IBM Maximo"
        ],
        mockupMetric: "+6.4%",
        mockupSub: "Typical line availability and throughput improvement [REPLACE]",
        accent: "#10B981"
      },
      {
        id: "quality-detection",
        label: "Quality & Anomaly Detection",
        headline: "Stop pneumatic pressure sags before quality yield drops",
        description: "Continuous ultrasonic 40 kHz acoustic scanning detects pressure line drops and micro-fissure leaks that compromise robotic welding and stamping precision.",
        bullets: [
          "Detect air line micro-leaks down to 0.4 mm orifice diameter",
          "Maintain critical tool-point pressure tolerances within ±0.05 bar",
          "Prevent scrap part production spikes during high-demand shifts"
        ],
        mockupMetric: "99.8%",
        mockupSub: "Pneumatic line pressure stability compliance",
        accent: "#F59E0B"
      }
    ]
  },
  platformPillars: {
    tag: "THE FACTORYOPS PLATFORM",
    headline: "Six core pillars engineered for industrial resilience",
    subheadline: "A modular, enterprise-grade architecture connecting physical machinery to plant-wide intelligence.",
    pillars: [
      {
        id: "monitor",
        title: "Monitor",
        description: "Continuous electrical, acoustic, and vibration sensing across 100% of critical equipment.",
        href: "/platform#monitor",
        badge: "Edge Sensing"
      },
      {
        id: "analyze",
        title: "Analyze",
        description: "Automated Fast Fourier Transform (FFT) analysis and spectral enveloping in real time.",
        href: "/platform#analyze",
        badge: "Neural Edge"
      },
      {
        id: "predict",
        title: "Predict",
        description: "Machine learning models forecasting remaining useful life (RUL) and component degradation.",
        href: "/platform#predict",
        badge: "Predictive ML"
      },
      {
        id: "optimize",
        title: "Optimize",
        description: "Dynamic utility peak-demand load shedding and compressor sequencing to cut power bills.",
        href: "/platform#optimize",
        badge: "ISO 50001"
      },
      {
        id: "integrate",
        title: "Integrate",
        description: "Unified Modbus RTU/TCP, OPC-UA, REST API, and native SAP/Maximo connectors.",
        href: "/platform#integrate",
        badge: "Open Protocol"
      },
      {
        id: "secure",
        title: "Secure",
        description: "Hardware TPM 2.0, zero inbound firewall ports, and full IEC 62443 cyber-compliance.",
        href: "/platform#secure",
        badge: "Air-Gapped"
      }
    ]
  },
  howItWorks: {
    tag: "HOW IT WORKS",
    headline: "From sensor clip to live intelligence in four stages",
    subheadline: "A frictionless engineering journey requiring zero production downtime and zero warranty voids.",
    steps: [
      {
        number: "01",
        title: "Connect",
        subtitle: "15-minute non-intrusive sensor installation",
        description: "Clip split-core current transformers and magnetic tri-axial vibration pucks onto your machines. No electrical rewiring or machine line shutoff needed.",
        specs: [
          { label: "Deployment Downtime", value: "0.0 Hours" },
          { label: "Legacy Machine Support", value: "99.4%" }
        ]
      },
      {
        number: "02",
        title: "Learn",
        subtitle: "72-hour autonomous baseline calibration",
        description: "The Edge-Sentinel gateway ingests operational telemetry, training local models on the specific mechanical and thermal fingerprints of your line.",
        specs: [
          { label: "Baseline Period", value: "72 Hours" },
          { label: "Sampling Resolution", value: "25.6 kHz" }
        ]
      },
      {
        number: "03",
        title: "Predict",
        subtitle: "Real-time FFT harmonics & acoustic leak scanning",
        description: "Proprietary algorithms continuously cross-reference current, pressure, and vibration signals against ISO 10816 standards, identifying anomalies days in advance.",
        specs: [
          { label: "Detection Accuracy", value: "99.4% [REPLACE]" },
          { label: "Advance Warning", value: "10–14 Days" }
        ]
      },
      {
        number: "04",
        title: "Act",
        subtitle: "Automated work-order dispatch & power optimization",
        description: "Technicians receive precise fault diagnosis with recommended torque and lubrication specs; utility management algorithms stagger heavy motor cycles.",
        specs: [
          { label: "Average Payback", value: "< 90 Days [REPLACE]" },
          { label: "Energy Cut", value: "18%–22% [REPLACE]" }
        ]
      }
    ]
  },
  results: {
    tag: "VERIFIED INDUSTRIAL IMPACT",
    headline: "Proven returns verified by independent power meters",
    subheadline: "We measure success in saved line hours, reduced utility spend, and eliminated scrap parts.",
    metrics: [
      {
        value: "40%",
        label: "Downtime Reduction [REPLACE]",
        sub: "Measured on Tier-1 automotive transmission stamping cells",
        verified: "Verified by Plant Maintenance Log"
      },
      {
        value: "18%–22%",
        label: "Utility Spend Saved [REPLACE]",
        sub: "Elimination of unloaded compressor idling & compressed air leaks",
        verified: "Verified with 3-Phase Power Loggers"
      },
      {
        value: "< 90 Days",
        label: "Full Capital Payback [REPLACE]",
        sub: "Hardware, gateway, software, and deployment costs fully amortized",
        verified: "Audited Financial Return"
      },
      {
        value: "0.0 hrs",
        label: "Deployment Downtime",
        sub: "Non-intrusive magnetic and clamp-on installation",
        verified: "Zero PLC Reprogramming"
      }
    ]
  },
  integrations: {
    tag: "INTEROPERABILITY",
    headline: "Connects with your existing industrial ecosystem",
    subheadline: "FactoryOps works with your legacy PLCs, modern SCADA, and enterprise ERP systems without vendor lock-in.",
    protocols: [
      "Modbus RTU (RS-485)",
      "Modbus TCP",
      "OPC-UA Server/Client",
      "Ethernet/IP",
      "MQTT / Sparkplug B",
      "SAP PM / S4HANA",
      "IBM Maximo",
      "RESTful Webhooks"
    ]
  },
  caseStudies: {
    tag: "CASE STUDIES",
    headline: "How plant leaders rely on Cittagent",
    subheadline: "Real deployment reports across automotive, semiconductor, and heavy manufacturing.",
    items: [
      {
        company: "Global Tier-1 Automotive Supplier [REPLACE]",
        sector: "Automotive Stamping & Welding",
        metric: "40% Downtime Cut",
        metricLabel: "Saved $340k annually in emergency line shutdowns [REPLACE]",
        quote: "FactoryOps identified 12 persistent compressed air leaks in 48 hours. After adjusting compressor sequencing, our idle power draw dropped by 22%.",
        author: "Plant Maintenance Manager, Tier-1 Powertrain Plant [REPLACE]",
        href: "/resources/case-studies"
      },
      {
        company: "Precision Cleanroom Fab [REPLACE]",
        sector: "Semiconductor Cleanrooms",
        metric: "Zero Outages",
        metricLabel: "Maintained 18 continuous months of zero downtime [REPLACE]",
        quote: "The FFT acoustic monitoring alerted us to an inner-race bearing spall 11 days before failure, saving an entire cleanroom production batch.",
        author: "Plant Engineering Manager, Electronics Facility [REPLACE]",
        href: "/resources/case-studies"
      },
      {
        company: "Commercial Food & Dairy Processor [REPLACE]",
        sector: "Food & Beverage Processing",
        metric: "$180k+ Saved",
        metricLabel: "14.8% net utility reduction on refrigeration compressors [REPLACE]",
        quote: "The automated load-shifting algorithm keeps our chillers away from peak tariff penalty hours without impacting cooling safety thresholds.",
        author: "Corporate Energy Director, Commercial Dairy Group [REPLACE]",
        href: "/resources/case-studies"
      }
    ]
  },
  security: {
    headline: "Enterprise cybersecurity built into the hardware layer",
    subheadline: "Designed for strict air-gapped industrial facilities. Cittagent meets IEC 62443 zero-trust standards with zero inbound firewall holes.",
    badges: [
      { title: "IEC 62443 Certified Boundary [REPLACE]", desc: "Hardware TPM 2.0 cryptographic isolation between OT and IT subnets." },
      { title: "Zero Inbound Firewall Ports", desc: "Outbound TLS 1.3 telemetry only via isolated cellular 4G or dedicated VLAN." },
      { title: "ISO 50001 Energy Compliant [REPLACE]", desc: "Auditable electrical energy consumption and Scope 1 & 2 carbon records." },
      { title: "SOC 2 Type II Cloud Ready [REPLACE]", desc: "Annual third-party audited cloud security and continuous vulnerability testing." }
    ]
  },
  resources: {
    tag: "TECHNICAL PUBLICATIONS",
    headline: "Latest industrial engineering whitepapers",
    items: [
      {
        category: "TECHNICAL WHITEPAPER",
        title: "FFT Acoustic Leak Detection: Isolating 40 kHz Turbulent Orifice Noise in High-Vibration Plants",
        readTime: "12 min read",
        href: "/resources/whitepapers"
      },
      {
        category: "OPERATIONAL PLAYBOOK",
        title: "ISO 50001 Implementation: Deploying Continuous Electrical Current Transformers",
        readTime: "9 min read",
        href: "/resources/whitepapers"
      },
      {
        category: "CASE REPORT",
        title: "Predictive Bearing Failure Lead Time: An Empirical Study of 124 Rotary Screw Compressors",
        readTime: "15 min read",
        href: "/resources/case-studies"
      }
    ]
  },
  finalCta: {
    headline: "Reimagine your operations with FactoryOps AI",
    subheadline: "Schedule a non-intrusive 48-hour baseline audit on your production line. We provide equipment telemetry, leak analysis, and a verified ROI projection.",
    formTitle: "Request an On-Site Plant Evaluation"
  }
};
