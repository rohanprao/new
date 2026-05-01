import { motion } from 'framer-motion';

const posts = [
  {
    title: 'The Future of Real-Time Edge Computing',
    desc: 'Exploring how processing data at the source is revolutionizing factory automation.',
    date: 'Oct 12, 2023',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tag: 'Technology'
  },
  {
    title: 'Why Data Silos are Killing Productivity',
    desc: 'Breaking down the barriers between IT and OT to achieve a unified view of your operations.',
    date: 'Sep 28, 2023',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tag: 'Insights'
  },
  {
    title: '5 Ways to Improve Shop Floor Morale',
    desc: 'How better data visibility can empower workers and reduce turnover.',
    date: 'Sep 15, 2023',
    img: 'https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tag: 'Culture'
  }
];

export default function Blog() {
  return (
    <section id="blog" className="w-full min-h-screen pt-32 pb-24 relative z-10 flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-6 w-full text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 mb-6"
        >
          Our Blog
        </motion.h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-12">
          Latest insights, product updates, and thought leadership from our engineering team.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {posts.map((post, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-video w-full rounded-2xl overflow-hidden mb-6 relative border border-slate-800">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4 bg-purple-500 text-white text-[10px] font-black uppercase tracking-tighter px-2 py-1 rounded">
                  {post.tag}
                </div>
              </div>
              <div className="px-1">
                <p className="text-slate-500 text-sm mb-2">{post.date}</p>
                <h3 className="text-xl font-bold text-slate-200 mb-3 group-hover:text-purple-400 transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {post.desc}
                </p>
                <span className="text-purple-400 text-sm font-semibold inline-flex items-center group-hover:underline">
                  Read Article <span className="ml-1 tracking-normal transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
