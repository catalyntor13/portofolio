"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ProductCardProps {
  icon: string;
  title: string;
  price: string;
  description: string;
  chartData: number[];
  demoUrl?: string;
  tags?: string[];
}

export default function ProductCard({
  icon,
  title,
  price,
  description,
  chartData,
  demoUrl,
  tags = [],
}: ProductCardProps) {
  // Calculate min and max for scaling
  const min = Math.min(...chartData);
  const max = Math.max(...chartData);
  const range = max - min || 1;

  // Create SVG path for the chart
  const width = 160;
  const height = 60;
  const padding = 5;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  const points = chartData
    .map((value, index) => {
      const x = (index / (chartData.length - 1)) * chartWidth + padding;
      const y = height - ((value - min) / range) * chartHeight - padding;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      className="group bg-white/5 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-emerald-500/30 transition-all duration-300"
    >
      {/* Header with Icon and Price */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="text-3xl">{icon}</div>
          <div>
            <h3 className="font-bold text-white text-sm group-hover:text-emerald-400 transition-colors">
              {title}
            </h3>
            <p className="text-xs text-slate-400">{price}</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-xs text-slate-400 mb-4 leading-relaxed">
        {description}
      </p>

      {/* Chart */}
      <div className="mb-4 h-16 flex items-center justify-center bg-gradient-to-r from-emerald-500/5 via-transparent to-cyan-500/5 rounded-lg border border-slate-700/50 p-2">
        <svg width={width} height={height} className="w-full h-full">
          {/* Grid lines */}
          <line
            x1={padding}
            y1={height / 2}
            x2={width - padding}
            y2={height / 2}
            stroke="#334155"
            strokeWidth="0.5"
            opacity="0.3"
          />

          {/* Fill area under curve */}
          <polyline
            points={`${padding},${height - padding} ${points} ${width - padding},${height - padding}`}
            fill="url(#chartGradient)"
            opacity="0.3"
          />

          {/* Chart line */}
          <polyline
            points={points}
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Gradients */}
          <defs>
            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-emerald-500/10 text-emerald-300 rounded-full border border-emerald-500/20"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Link */}
      {demoUrl && (
        <Link
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group/link"
        >
          View Project
          <ArrowUpRight
            size={14}
            className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
          />
        </Link>
      )}
    </motion.div>
  );
}
