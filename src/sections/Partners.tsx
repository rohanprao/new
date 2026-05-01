import { motion } from 'framer-motion';
import {
    Building2,
    Factory,
    Settings2,
    Zap,
    ShieldCheck,
    Globe2
} from 'lucide-react';

const partners = [
    { name: 'Global Industrial', icon: Building2 },
    { name: 'TechManufacture', icon: Factory },
    { name: 'PureSystems', icon: Settings2 },
    { name: 'EnergyCorp', icon: Zap },
    { name: 'SafeBuild', icon: ShieldCheck },
    { name: 'WorldLogistics', icon: Globe2 },
];

export default function Partners() {
    return (
        <div className="w-full py-12 border-y border-white/5 bg-black/20 backdrop-blur-sm">
            <div className="container mx-auto px-4">
                <p className="text-center text-white/40 text-sm font-medium mb-8 tracking-widest uppercase">
                    Empowering the World's Leading Manufacturers
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-3 group cursor-default"
                        >
                            <partner.icon className="w-6 h-6 text-white group-hover:text-cyan-400 transition-colors" />
                            <span className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors tracking-tight">
                                {partner.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
