'use client';

import type { ChartResult, PalaceData } from '@/lib/ziwei';

interface Props {
  chart: ChartResult;
}

/**
 * 12宫位命盘方格 — 经典紫微斗数布局
 * 4×4 网格：中间 4 格空，外围 12 个宫位
 */
export default function ChartGrid({ chart }: Props) {
  // 经典紫微斗数布局索引（从命宫起，按地支顺序）
  const layout: (number | null)[] = [
    8,  9, 10, 11,   // 上排：福德、官禄、迁移、疾厄
    7, null, null, 12,  // 左中、右中
    6, null, null, 1,   // 左下、右下
    5,  4,  3,  2,    // 下排：田宅、兄弟、夫妻、子女
  ];

  return (
    <div className="parchment-bg rounded-xl p-4 md:p-6 shadow-2xl border-4 border-imperial-gold/40 max-w-3xl mx-auto">
      {/* 头部信息 */}
      <div className="text-center mb-4 pb-4 border-b border-imperial-purple/30">
        <div className="font-display text-2xl text-imperial-purple font-bold">
          {chart.fiveElementClass}局
        </div>
        <div className="text-sm text-imperial-purple/70 mt-1">
          生年 {chart.input.year} · {chart.chineseZodiac}年 ·{' '}
          命宫 {chart.destinyPalaceBranch}
        </div>
        <div className="text-xs text-imperial-purple/50 mt-1">
          Solar: {chart.solarDate} · Lunar: {chart.lunarDate}
        </div>
      </div>

      {/* 4×4 命盘方格 */}
      <div className="grid grid-cols-4 gap-1">
        {layout.map((palaceIdx, gridIdx) => (
          <div
            key={gridIdx}
            className={`aspect-square border-2 border-imperial-purple/40 rounded ${
              palaceIdx === null ? 'bg-imperial-purple/5' : 'bg-imperial-parchment'
            }`}
          >
            {palaceIdx !== null && chart.palaces[palaceIdx] && (
              <PalaceCell palace={chart.palaces[palaceIdx]} isDestiny={palaceIdx === 0} />
            )}
          </div>
        ))}
      </div>

      {/* 主导星曜 */}
      <div className="mt-6 pt-4 border-t border-imperial-purple/30 text-center">
        <div className="text-sm text-imperial-purple/70">
          Dominant Stars:{' '}
          <span className="text-imperial-purple font-semibold">
            {chart.summary.dominantStars.join(', ') || '—'}
          </span>
        </div>
        {chart.summary.keyPatterns.length > 0 && (
          <div className="mt-2 text-xs text-imperial-gold">
            ⭐ {chart.summary.keyPatterns.join('; ')}
          </div>
        )}
      </div>
    </div>
  );
}

function PalaceCell({ palace, isDestiny }: { palace: PalaceData; isDestiny: boolean }) {
  return (
    <div className={`h-full p-1.5 flex flex-col ${isDestiny ? 'bg-imperial-gold/10' : ''}`}>
      {/* 宫位名 */}
      <div className="flex justify-between items-start mb-1">
        <span className="text-[10px] font-bold text-imperial-purple">
          {palace.palaceNameCN}
        </span>
        <span className="text-[10px] text-imperial-purple/50">
          {palace.earthlyBranch}
        </span>
      </div>

      {/* 主星 */}
      <div className="flex-1 space-y-0.5">
        {palace.mainStars.map((star, i) => (
          <div
            key={i}
            className={`text-[11px] leading-tight ${
              ['紫微', '天府', '太阳', '太阴'].includes(star.nameCN)
                ? 'text-imperial-purple font-bold'
                : 'text-imperial-purple/80'
            }`}
          >
            {star.nameCN}
            {palace.sihua.find(s => s.star === star.nameEN) && (
              <span className="ml-0.5 text-imperial-gold">
                {palace.sihua.find(s => s.star === star.nameEN)?.type}
              </span>
            )}
          </div>
        ))}
        {palace.minorStars.slice(0, 2).map((star, i) => (
          <div key={i} className="text-[9px] text-imperial-purple/40">
            {star}
          </div>
        ))}
      </div>
    </div>
  );
}
