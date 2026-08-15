/**
 * Ziwei Doushu 排盘 — 客户端实现
 * 基于 iztro + lunar-javascript
 */

import { astro as iztro } from 'iztro';
// lunar-javascript 没有官方类型声明，简化处理
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { Solar } = require('lunar-javascript') as any;

export const MAIN_STARS_EN: Record<string, { name: string; nature: string }> = {
  '紫微': { name: 'Ziwei', nature: 'Emperor Star — authority, leadership, nobility' },
  '天机': { name: 'Tianji', nature: 'Advisor Star — intellect, strategy, planning' },
  '太阳': { name: 'Sun', nature: 'Father Star — brightness, generosity, public life' },
  '武曲': { name: 'Wuqu', nature: 'General Star — decisiveness, wealth, metal energy' },
  '天同': { name: 'Tiantong', nature: 'Joyful Star — harmony, contentment, childlike nature' },
  '廉贞': { name: 'Lianzheng', nature: 'Deputy Star — passion, transformation, complexity' },
  '天府': { name: 'Tianfu', nature: 'Treasury Star — stability, wealth storage, refinement' },
  '太阴': { name: 'Moon', nature: 'Mother Star — intuition, nurturing, inner life' },
  '贪狼': { name: 'Tanlang', nature: 'Wolf Star — ambition, desire, multi-talented' },
  '巨门': { name: 'Jumen', nature: 'Gate Star — eloquence, controversy, investigation' },
  '天相': { name: 'Tianxiang', nature: 'Minister Star — support, aesthetics, diplomacy' },
  '天梁': { name: 'Tianliang', nature: 'Elder Star — protection, wisdom, longevity' },
  '七杀': { name: 'Qisha', nature: 'Seven Killings — military prowess, independence, courage' },
  '破军': { name: 'Pojun', nature: 'Army Breaker — innovation, destruction-rebirth, unpredictability' },
};

export const PALACES_EN: Record<string, string> = {
  '命宫': 'Life Palace',
  '兄弟': 'Siblings Palace',
  '夫妻': 'Spouse Palace',
  '子女': 'Children Palace',
  '财帛': 'Wealth Palace',
  '疾厄': 'Health Palace',
  '迁移': 'Travel Palace',
  '奴仆': 'Friends Palace',
  '官禄': 'Career Palace',
  '田宅': 'Property Palace',
  '福德': 'Fortune Palace',
  '父母': 'Parents Palace',
};

export interface ChartInput {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute?: number;
  gender: 'M' | 'F';
  city?: string;
}

export interface PalaceData {
  index: number;
  palaceNameCN: string;
  palaceNameEN: string;
  earthlyBranch: string;
  heavenlyStem: string;
  mainStars: { nameCN: string; nameEN: string; nature: string }[];
  minorStars: string[];
  sihua: { star: string; type: 'Lu' | 'Quan' | 'Ke' | 'Ji' }[];
}

export interface ChartResult {
  id: string;
  input: ChartInput;
  solarDate: string;
  lunarDate: string;
  chineseZodiac: string;
  fiveElementClass: string;
  destinyPalaceBranch: string;
  palaces: PalaceData[];
  currentYear: number;
  annualBranch: string;
  summary: { dominantStars: string[]; keyPatterns: string[] };
}

// 城市经纬度（用于真太阳时校正）
const CITY_LONGITUDES: Record<string, number> = {
  beijing: 116.4, shanghai: 121.5, guangzhou: 113.3, shenzhen: 114.1,
  hongkong: 114.2, taipei: 121.6, newyork: -74.0, losangeles: -118.2,
  london: -0.1, paris: 2.3, sydney: 151.2, tokyo: 139.7, singapore: 103.8,
  berlin: 13.4, toronto: -79.4, vancouver: -123.1, sanfrancisco: -122.4,
  chicago: -87.6, mumbai: 72.9, dubai: 55.3, bangkok: 100.5,
  kualalumpur: 101.7, jakarta: 106.8, manila: 121.0, seoul: 127.0,
  melbourne: 144.9, auckland: 174.8, moscow: 37.6, rome: 12.5,
};

function correctSolarTime(input: ChartInput): Date {
  const baseDate = new Date(input.year, input.month - 1, input.day, input.hour, input.minute || 0);
  if (!input.city) return baseDate;
  const cityKey = input.city.toLowerCase().replace(/\s+/g, '');
  const longitude = CITY_LONGITUDES[cityKey];
  if (longitude === undefined) return baseDate;
  const offsetMinutes = (longitude - 120) * 4;
  return new Date(baseDate.getTime() + offsetMinutes * 60 * 1000);
}

function generateChartId(): string {
  return crypto.randomUUID().split('-').slice(0, 2).join('');
}

/**
 * 主排盘函数（客户端运行）
 */
export function generateChart(input: ChartInput): ChartResult {
  const correctedDate = correctSolarTime(input);
  const hour = correctedDate.getHours();
  const dateStr = `${correctedDate.getFullYear()}-${String(correctedDate.getMonth() + 1).padStart(2, '0')}-${String(correctedDate.getDate()).padStart(2, '0')}`;

  // iztro 排盘（en = 英文输出）
  const gender = input.gender === 'M' ? 'male' : 'female';
  const astrolabe = iztro.bySolar(dateStr, hour, gender, true, 'en');

  const palaces: PalaceData[] = (astrolabe as any).palaces.map((p: any, idx: number) => ({
    index: idx,
    palaceNameCN: p.name,
    palaceNameEN: PALACES_EN[p.name] || p.name,
    earthlyBranch: p.earthlyBranch || '',
    heavenlyStem: p.heavenlyStem || '',
    mainStars: (p.majorStars || []).map((star: any) => ({
      nameCN: star.name,
      nameEN: MAIN_STARS_EN[star.name]?.name || star.name,
      nature: MAIN_STARS_EN[star.name]?.nature || '',
    })),
    minorStars: (p.minorStars || []).map((s: any) => s.name || s),
    sihua: (p.sihua || []).map((s: any) => ({
      star: MAIN_STARS_EN[s.name]?.name || s.name,
      type: s.type,
    })),
  }));

  const fiveElementClass = (astrolabe as any).fiveElementClass?.name || 'Unknown';
  const destinyPalaceBranch = (astrolabe as any).destinyPalace?.earthlyBranch || '';

  const solar = Solar.fromDate(correctedDate);
  const lunar = solar.getLunar();
  const lunarDate = `${lunar.getYearInChinese()}年${lunar.getMonthInChinese()}月${lunar.getDayInChinese()}`;

  const dominantStars: string[] = [];
  const lifePalace = palaces.find(p => p.palaceNameCN === '命宫');
  if (lifePalace) dominantStars.push(...lifePalace.mainStars.map(s => s.nameEN));

  const keyPatterns: string[] = [];
  const ziwei = palaces.find(p => p.mainStars.some(s => s.nameCN === '紫微'));
  const tianfu = palaces.find(p => p.mainStars.some(s => s.nameCN === '天府'));
  if (ziwei && tianfu && ziwei.earthlyBranch === tianfu.earthlyBranch) {
    keyPatterns.push('Zi Fu Tong Gong (Purple Star & Treasury in same palace) — imperial pattern');
  }

  return {
    id: generateChartId(),
    input,
    solarDate: dateStr,
    lunarDate,
    chineseZodiac: lunar.getYearShengXiao(),
    fiveElementClass,
    destinyPalaceBranch,
    palaces,
    currentYear: new Date().getFullYear(),
    annualBranch: hourToZhi(new Date().getFullYear() % 12),
    summary: { dominantStars, keyPatterns },
  };
}

function hourToZhi(hour: number): string {
  const zhis = ['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'];
  return zhis[Math.floor((hour + 1) / 2) % 12];
}

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'https://api.purplestar.cc';

/**
 * 把 chart 存到 Workers D1（让付费时后端能读到）
 */
export async function saveChartToServer(chart: ChartResult): Promise<void> {
  try {
    const r = await fetch(`${API_BASE}/api/chart/save`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: chart.id, chart }),
    });
    if (!r.ok) console.warn(`Chart save failed: ${r.status}`);
  } catch (err) {
    // 静默失败 — 不影响主流程
    console.warn('Chart save failed:', err);
  }
}
