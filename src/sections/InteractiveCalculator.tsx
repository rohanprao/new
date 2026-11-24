import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Calculator,
  Leaf,
  Clock,
  ShieldCheck,
  Download,
  ArrowRight
} from 'lucide-react';

export default function InteractiveCalculator() {
  const [compressorKw, setCompressorKw] = useState(150);
  const [hoursPerYear, setHoursPerYear] = useState(6200);
  const [ratePerKwh, setRatePerKwh] = useState(0.14);

  const metrics = useMemo(() => {
    const annualKwh = compressorKw * hoursPerYear;
    const currentAnnualCost = annualKwh * ratePerKwh;
    const savingsPercent = 0.19; 
    const annualSavingsDollar = currentAnnualCost * savingsPercent;
    const newAnnualCost = currentAnnualCost - annualSavingsDollar;
    const kwhSaved = annualKwh * savingsPercent;
    const co2TonsSaved = Math.round(kwhSaved * 0.0003855);
    const paybackMonths = 2.4;

    return {
      currentAnnualCost: Math.round(currentAnnualCost),
      newAnnualCost: Math.round(newAnnualCost),
      annualSavingsDollar: Math.round(annualSavingsDollar),
      co2TonsSaved,
      paybackMonths,
      kwhSaved: Math.round(kwhSaved)
    };
  }, [compressorKw, hoursPerYear, ratePerKwh]);

  return (
    <section className="relative w-full py-28 bg-[#07070e] text-white overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            OPERATIONAL ROI MODELER
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Calculate Your Plant's{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-[#0062FF]">
              Projected Energy Savings
            </span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg mt-4 leading-relaxed">
            Adjust your plant's equipment capacity and operating profile to see projected kilowatt-hour reductions, utility savings, and carbon offset.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Sliders Column (7 Cols) */}
          <div className="lg:col-span-7 bg-[#0d0d1a] border border-slate-800 rounded-3xl p-6 lg:p-10 shadow-2xl flex flex-col justify-between">
            <div className="space-y-8">
              <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-4">
                Facility Operating Parameters
              </h3>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-slate-300">
                    Connected Compressor / Motor Load
                  </label>
                  <span className="text-lg font-mono font-bold text-[#00B4D8] bg-slate-900 border border-slate-700 px-3 py-1 rounded-xl">
                    {compressorKw} kW
                  </span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="600"
                  step="10"
                  value={compressorKw}
                  onChange={(e) => setCompressorKw(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#00B4D8] focus:outline-none"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-2 font-mono">
                  <span>30 kW (Small Shop)</span>
                  <span>300 kW (Medium Assembly)</span>
                  <span>600 kW (Heavy Plant)</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-slate-300">
                    Annual Operational Runtime
                  </label>
                  <span className="text-lg font-mono font-bold text-white bg-slate-900 border border-slate-700 px-3 py-1 rounded-xl">
                    {hoursPerYear.toLocaleString()} hrs / yr
                  </span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="8760"
                  step="200"
                  value={hoursPerYear}
                  onChange={(e) => setHoursPerYear(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#0062FF] focus:outline-none"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-2 font-mono">
                  <span>2,000 hrs (1 Shift)</span>
                  <span>4,500 hrs (2 Shifts)</span>
                  <span>8,760 hrs (24/7 Continuous)</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-slate-300">
                    Industrial Electric Tariff
                  </label>
                  <span className="text-lg font-mono font-bold text-emerald-400 bg-slate-900 border border-slate-700 px-3 py-1 rounded-xl">
                    ${ratePerKwh.toFixed(2)} / kWh
                  </span>
                </div>
                <input
                  type="range"
                  min="0.08"
                  max="0.32"
                  step="0.01"
                  value={ratePerKwh}
                  onChange={(e) => setRatePerKwh(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400 focus:outline-none"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-2 font-mono">
                  <span>$0.08 (Low Tariff)</span>
                  <span>$0.18 (National Avg)</span>
                  <span>$0.32 (Peak Surcharge)</span>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-800">
              <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
                Projected Annual Energy Bill
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs mb-1 text-slate-400">
                    <span>Baseline Electricity Spend</span>
                    <span className="font-mono font-bold text-white">${metrics.currentAnnualCost.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-slate-800 h-3.5 rounded-full overflow-hidden">
                    <div className="bg-red-500/70 h-full rounded-full w-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1 text-slate-400">
                    <span className="text-emerald-400 font-semibold">
                      With FactoryOps AI Optimization (-19%)
                    </span>
                    <span className="font-mono font-bold text-emerald-400">${metrics.newAnnualCost.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-slate-800 h-3.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-500 to-[#00B4D8] h-full rounded-full w-[81%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Column (5 Cols) */}
          <div className="lg:col-span-5 bg-[#0F121C] border border-slate-800 rounded-3xl p-6 lg:p-10 shadow-2xl flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-2 block">
                Estimated Annual Net Value
              </span>
              <div className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-[#00B4D8] mb-2 font-mono">
                ${metrics.annualSavingsDollar.toLocaleString()}
              </div>
              <p className="text-xs text-slate-400 mb-8">
                Empirically verified bottom-line savings through leak elimination, idle load sequencing, and pressure optimization.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-black/40 border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 text-emerald-400">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white font-mono">
                      {metrics.co2TonsSaved.toLocaleString()} Metric Tons
                    </div>
                    <div className="text-xs text-slate-400">Avoided Annual CO₂ Emissions</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-2xl bg-black/40 border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center flex-shrink-0 text-[#0062FF]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white font-mono">
                      &lt; {metrics.paybackMonths} Months
                    </div>
                    <div className="text-xs text-slate-400">Typical Complete Capital Payback</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-2xl bg-black/40 border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 text-[#00B4D8]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white font-mono">
                      {metrics.kwhSaved.toLocaleString()} kWh
                    </div>
                    <div className="text-xs text-slate-400">Electricity Saved Annually</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <button className="w-full py-4 px-6 rounded-xl bg-[#0062FF] hover:bg-[#0052CC] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2">
                <Download className="w-4 h-4" />
                Generate Plant Energy Audit Proposal
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

