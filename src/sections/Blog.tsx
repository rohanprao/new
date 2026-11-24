import { useState } from 'react';
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

const categories = ['All', 'Technology', 'Insights', 'Culture'];

export default function Blog() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredPosts = activeFilter === 'All'
    ? posts
    : posts.filter((p) => p.tag === activeFilter);

  return (
    <section
      id="blog"
      className="w-full bg-white dark:bg-[#080810] pt-32 pb-24 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Overline + Heading */}
        <div className="text-center mb-10">
          <span className="label-overline">Latest Insights</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 mt-3 mb-4"
          >
            Our Blog
          </motion.h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Latest insights, product updates, and thought leadership from our engineering team.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20'
                  : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPosts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer bg-white dark:bg-[#0f1120] rounded-2xl border border-slate-200 dark:border-purple-900/20 shadow-sm hover:-translate-y-2 hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category chip */}
                <span className="inline-block bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full mb-4">
                  {post.tag}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors leading-tight mb-3">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-2 mb-6">
                  {post.desc}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-purple-900/20">
                  <span className="text-slate-500 dark:text-slate-500 text-xs">{post.date}</span>
                  <span className="text-purple-600 dark:text-purple-400 text-sm font-semibold inline-flex items-center group-hover:gap-2 transition-all">
                    Read Article <span className="ml-1 group-hover:translate-x-1 transition-transform inline-block">→</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
