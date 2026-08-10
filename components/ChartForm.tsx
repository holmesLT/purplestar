'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { generateChart, saveChartToServer, type ChartInput } from '@/lib/ziwei';

export default function ChartForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const input: ChartInput = {
      year: Number(formData.get('year')),
      month: Number(formData.get('month')),
      day: Number(formData.get('day')),
      hour: Number(formData.get('hour')),
      minute: Number(formData.get('minute')) || 0,
      gender: formData.get('gender') as 'M' | 'F',
      city: String(formData.get('city') || '').trim(),
    };

    try {
      // 客户端排盘（无需服务端）
      const chart = generateChart(input);

      // 异步存到服务器（用于后续 Stripe 支付时能查到）
      saveChartToServer(chart);

      // 通过 URL hash 传递 chart 数据到详情页（query string + hash 避免动态路由）
      const encoded = btoa(encodeURIComponent(JSON.stringify(chart)));
      router.push(`/chart?id=${chart.id}#${encoded}`);
    } catch (err: any) {
      setError(err.message || 'Failed to generate chart');
      setLoading(false);
    }
  }

  const currentYear = new Date().getFullYear();

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto purple-card rounded-2xl p-8 backdrop-blur"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        <div>
          <label className="block text-xs text-imperial-gold mb-1">Year</label>
          <input
            name="year"
            type="number"
            min="1900"
            max={currentYear}
            defaultValue="1990"
            required
            className="w-full bg-imperial-ink border border-imperial-gold/30 rounded px-3 py-2 text-imperial-parchment focus:outline-none focus:border-imperial-gold"
          />
        </div>
        <div>
          <label className="block text-xs text-imperial-gold mb-1">Month</label>
          <input
            name="month"
            type="number"
            min="1"
            max="12"
            defaultValue="1"
            required
            className="w-full bg-imperial-ink border border-imperial-gold/30 rounded px-3 py-2 text-imperial-parchment focus:outline-none focus:border-imperial-gold"
          />
        </div>
        <div>
          <label className="block text-xs text-imperial-gold mb-1">Day</label>
          <input
            name="day"
            type="number"
            min="1"
            max="31"
            defaultValue="1"
            required
            className="w-full bg-imperial-ink border border-imperial-gold/30 rounded px-3 py-2 text-imperial-parchment focus:outline-none focus:border-imperial-gold"
          />
        </div>
        <div>
          <label className="block text-xs text-imperial-gold mb-1">Gender</label>
          <select
            name="gender"
            defaultValue="M"
            className="w-full bg-imperial-ink border border-imperial-gold/30 rounded px-3 py-2 text-imperial-parchment focus:outline-none focus:border-imperial-gold"
          >
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-xs text-imperial-gold mb-1">Hour (0-23)</label>
          <input
            name="hour"
            type="number"
            min="0"
            max="23"
            defaultValue="12"
            required
            className="w-full bg-imperial-ink border border-imperial-gold/30 rounded px-3 py-2 text-imperial-parchment focus:outline-none focus:border-imperial-gold"
          />
        </div>
        <div>
          <label className="block text-xs text-imperial-gold mb-1">Minute</label>
          <input
            name="minute"
            type="number"
            min="0"
            max="59"
            defaultValue="0"
            className="w-full bg-imperial-ink border border-imperial-gold/30 rounded px-3 py-2 text-imperial-parchment focus:outline-none focus:border-imperial-gold"
          />
        </div>
        <div>
          <label className="block text-xs text-imperial-gold mb-1">Birth City</label>
          <input
            name="city"
            type="text"
            placeholder="e.g. New York"
            className="w-full bg-imperial-ink border border-imperial-gold/30 rounded px-3 py-2 text-imperial-parchment focus:outline-none focus:border-imperial-gold placeholder:text-imperial-parchment/30"
          />
        </div>
      </div>

      {error && (
        <div className="mb-4 p-3 rounded bg-red-900/30 border border-red-500/50 text-sm text-red-200">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="gold-btn w-full text-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Calculating your destiny…' : 'Reveal My Destiny Chart'}
      </button>

      <p className="text-xs text-imperial-parchment/40 mt-3 text-center">
        100% Free · No signup required · Instant calculation
      </p>
    </form>
  );
}
