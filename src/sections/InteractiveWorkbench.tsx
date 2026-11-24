import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ClipboardCheck,
  Activity,
  AlertOctagon,
  Zap,
  CheckCircle2,
  RefreshCw,
  Wrench,
  Smartphone
} from 'lucide-react';

interface InspectionStep {
  id: number;
  title: string;
  target: string;
  reading: string;
  status: 'passed' | 'warning' | 'pending';
  aiNotes: string;
}

export default function InteractiveWorkbench() {
  const [activeTab, setActiveTab] = useState<'inspect' | 'oee' | 'energy'>('inspect');
  const [simulatingLeak, setSimulatingLeak] = useState(false);

  const [steps, setSteps] = useState<InspectionStep[]>([
    {
      id: 1,
      title: 'Compressor Discharge Pressure',
      target: '7.0 – 7.5 bar',
      reading: '7.42 bar',
      status: 'passed',
      aiNotes: 'Pressure stability steady. No manifold throttling detected.'
    },
    {
      id: 2,
      title: 'Ultrasonic Air Line Leak Scan',
      target: '< 0.05 CFM',
      reading: '0.01 CFM',
      status: 'passed',
      aiNotes: 'Ultrasonic signature matches zero-leak baseline.'
    },
    {
      id: 3,
      title: 'Drive Motor Harmonic Distortion',
      target: '< 3.0% THD',
      reading: '2.4% THD',
      status: 'passed',
      aiNotes: 'VFD switching frequency optimal. Inverter ripple normal.'
    },
    {
      id: 4,
      title: 'Bearing Vibration Peak Velocity',
      target: '< 1.8 mm/s',
      reading: '1.2 mm/s',
      status: 'passed',
      aiNotes: 'Inner race harmonic clean. Next lube interval: 420 hrs.'
    }
  ]);

  const toggleSimulateAnomaly = () => {
    if (!simulatingLeak) {
      setSimulatingLeak(true);
      setSteps(prev => [
        prev[0],
        {
          id: 2,
          title: 'Ultrasonic Air Line Leak Scan',
          target: '< 0.05 CFM',
          reading: '0.38 CFM ⚠️',
          status: 'warning',
          aiNotes: 'ANOMALY DETECTED: Micro-fissure at Flange Coupling B-3. 18% energy waste!'
        },
        ...prev.slice(2)
      ]);
    } else {
      setSimulatingLeak(false);
      setSteps(prev => [
        prev[0],
        {
          id: 2,
          title: 'Ultrasonic Air Line Leak Scan',
          target: '< 0.05 CFM',
          reading: '0.01 CFM',
          status: 'passed',
          aiNotes: 'Corrective torque applied. Flange seal re-calibrated successfully.'
        },
        ...prev.slice(2)
      ]);
    }
  };

  return (
    <section className="relative w-full py-28 bg-[#090B10] text-white overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#00B4D8] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Smartphone className="w-3.5 h-3.5" />
            OPERATOR FRONTLINE TERMINAL
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Interactive Shop-Floor{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0062FF] via-[#00B4D8] to-[#10B981]">
              Operations Studio
            </span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg mt-4 leading-relaxed">
            Experience our frontline app in action. Test live workflows, simulate equipment anomalies, and watch AI trigger automated work orders.
          </p>

          <div className="inline-flex p-1.5 mt-8 bg-[#121224] border border-slate-800 rounded-2xl shadow-xl">
            <button
              onClick={() => setActiveTab('inspect')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all ${
                activeTab === 'inspect'
                  ? 'bg-[#0062FF] text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <ClipboardCheck className="w-4 h-4" />
              Digital Operator SOPs
            </button>
            <button
              onClick={() => setActiveTab('oee')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all ${
                activeTab === 'oee'
                  ? 'bg-[#0062FF] text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Activity className="w-4 h-4" />
              Automated Root-Cause Triage
            </button>
            <button
              onClick={() => setActiveTab('energy')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all ${
                activeTab === 'energy'
                  ? 'bg-[#0062FF] text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Zap className="w-4 h-4" />
              Peak-Demand Load Shaving
            </button>
          </div>
        </div>

        {/* Terminal Frame */}
        <div className="relative mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-[#0d0d1c] p-6 lg:p-10 shadow-2xl backdrop-blur-2xl">
          <div className="flex flex-wrap items-center justify-between pb-6 mb-8 border-b border-slate-800 gap-4">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs font-mono text-slate-400 ml-2">
                TERMINAL-v4.8 • ASSEMBLY-BAY-04
              </span>
            </div>

            <button
              onClick={toggleSimulateAnomaly}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md ${
                simulatingLeak
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30'
                  : 'bg-blue-600/30 text-blue-300 border border-blue-500/40 hover:bg-blue-600/50'
              }`}
            >
              <RefreshCw className={`w-3.5 h-3.5 ${simulatingLeak ? 'animate-spin' : ''}`} />
              {simulatingLeak ? 'Reset Baseline' : '⚡ Simulate Pressure Leak'}
            </button>
          </div>

          {activeTab === 'inspect' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 space-y-4">
                {steps.map((step) => (
                  <div
                    key={step.id}
                    className={`p-4 rounded-2xl border transition-all duration-300 ${
                      step.status === 'warning'
                        ? 'bg-amber-950/20 border-amber-500/50 shadow-lg'
                        : 'bg-[#121226]/80 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <div className={`mt-0.5 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                          step.status === 'warning'
                            ? 'bg-amber-500/20 text-amber-400'
                            : 'bg-emerald-500/20 text-emerald-400'
                        }`}>
                          {step.status === 'warning' ? (
                            <AlertOctagon className="w-3.5 h-3.5" />
                          ) : (
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          )}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white">{step.title}</h4>
                          <p className="text-xs text-slate-400 mt-0.5">
                            Target: <span className="font-mono text-slate-300">{step.target}</span>
                          </p>
                          <p className={`text-xs mt-2 font-medium ${
                            step.status === 'warning' ? 'text-amber-300' : 'text-slate-400'
                          }`}>
                            AI Analysis: {step.aiNotes}
                          </p>
                        </div>
                      </div>
                      <span className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold ${
                        step.status === 'warning'
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                          : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      }`}>
                        {step.reading}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between bg-[#111124] rounded-2xl border border-slate-800 p-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#00B4D8] mb-3">
                    Automated Work-Order Copilot
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {simulatingLeak ? 'Active Incident Ticket #T-882' : 'Workcell Health: 99.4%'}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {simulatingLeak
                      ? 'Continuous ultrasonic acoustics detected air pressure degradation. Dispatching automated work order with torque specs.'
                      : 'All baseline operating parameters within ±1.5% of ISO 50001 energy efficiency standards.'}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-black/40 text-xs">
                      <span className="text-slate-400">Assigned Tech</span>
                      <span className="font-bold text-white">Alex Chen (Shift A)</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-black/40 text-xs">
                      <span className="text-slate-400">Triage Speed</span>
                      <span className="font-bold text-emerald-400">12 Seconds (Auto)</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-black/40 text-xs">
                      <span className="text-slate-400">Cost Impact</span>
                      <span className="font-bold text-[#00B4D8]">
                        {simulatingLeak ? '-$14.20 / hr (Unchecked)' : '$0.00 Anomaly Cost'}
                      </span>
                    </div>
                  </div>
                </div>

                <button className="w-full py-3 px-4 rounded-xl bg-[#0062FF] hover:bg-[#0052CC] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2">
                  <Wrench className="w-4 h-4" />
                  {simulatingLeak ? 'Acknowledge & Deploy Fix' : 'Export Shift Verification Report'}
                </button>
              </div>
            </div>
          )}

          {activeTab === 'oee' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#111124] border border-slate-800">
                <div className="text-xs text-slate-400 font-bold uppercase mb-2">Availability</div>
                <div className="text-3xl font-black text-emerald-400 font-mono">98.6%</div>
                <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                  Only 14 mins of scheduled preventive maintenance over past 30 days.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-[#111124] border border-slate-800">
                <div className="text-xs text-slate-400 font-bold uppercase mb-2">Performance</div>
                <div className="text-3xl font-black text-[#00B4D8] font-mono">96.2%</div>
                <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                  Dual-stage screws operating strictly within rated continuous CFM curves.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-[#111124] border border-slate-800">
                <div className="text-xs text-slate-400 font-bold uppercase mb-2">Quality Yield</div>
                <div className="text-3xl font-black text-[#0062FF] font-mono">99.8%</div>
                <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                  Zero line pressure sags across critical robotic welding cells.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'energy' && (
            <div className="p-6 rounded-2xl bg-[#111124] border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h4 className="text-lg font-bold text-white mb-2">
                  AI Dynamic Peak-Shaving Active
                </h4>
                <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
                  FactoryOps continuously interfaces with your utility tariff structure. High-load compressor cycling is automatically staggered away from 2:00 PM – 6:00 PM peak penalty windows, saving an average of 22% on total utility bills.
                </p>
              </div>
              <div className="text-center md:text-right flex-shrink-0">
                <div className="text-3xl font-black text-emerald-400 font-mono">
                  -22.4% kW Peak
                </div>
                <div className="text-xs text-slate-400 mt-1">Utility Demand Charge Slashed</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

