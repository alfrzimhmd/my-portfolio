// src/components/StudyMatePreview/StudyMatePreview.tsx
import { useState } from 'react';
import { Calendar, CheckCircle2, Clock, BookOpen, Target, Sparkles, Zap, Brain, Coffee } from 'lucide-react';

export default function StudyMatePreview() {
  const [activeTab, setActiveTab] = useState<'schedule' | 'tasks' | 'focus'>('schedule');

  return (
    <div className="w-full h-full min-h-[400px] rounded-xl bg-[#0A0C10] border border-[#1E222B] p-5 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#1E222B] pb-3 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
            <BookOpen className="w-4 h-4 text-cyan-400" />
          </div>
          <div>
            <span className="font-mono text-sm font-bold text-cyan-400">StudyMate</span>
            <span className="ml-2 text-[10px] font-mono text-gray-500">v3.2.0</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[9px] font-mono text-emerald-400">SYNCED</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-[#12151B] rounded-lg p-0.5 mb-4">
        <button
          onClick={() => setActiveTab('schedule')}
          className={`flex-1 px-3 py-1.5 rounded text-[10px] font-mono transition-all ${
            activeTab === 'schedule'
              ? 'bg-cyan-500/20 text-cyan-400'
              : 'text-gray-500 hover:text-gray-300'
          }`}
        >
          <span className="flex items-center justify-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            Schedule
          </span>
        </button>
        <button
          onClick={() => setActiveTab('tasks')}
          className={`flex-1 px-3 py-1.5 rounded text-[10px] font-mono transition-all ${
            activeTab === 'tasks'
              ? 'bg-cyan-500/20 text-cyan-400'
              : 'text-gray-500 hover:text-gray-300'
          }`}
        >
          <span className="flex items-center justify-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Tasks
          </span>
        </button>
        <button
          onClick={() => setActiveTab('focus')}
          className={`flex-1 px-3 py-1.5 rounded text-[10px] font-mono transition-all ${
            activeTab === 'focus'
              ? 'bg-cyan-500/20 text-cyan-400'
              : 'text-gray-500 hover:text-gray-300'
          }`}
        >
          <span className="flex items-center justify-center gap-1.5">
            <Target className="w-3.5 h-3.5" />
            Focus
          </span>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 space-y-3">
        {activeTab === 'schedule' && (
          <div className="space-y-2.5">
            <div className="flex items-center justify-between text-[11px] font-mono">
              <span className="text-gray-400">Today's Classes</span>
              <span className="text-cyan-400">4 sessions</span>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#12151B] border border-[#1E222B]">
                <div className="flex items-center gap-2.5">
                  <div className="w-1 h-8 rounded-full bg-cyan-400" />
                  <div>
                    <p className="text-xs font-medium text-white">Operating Systems</p>
                    <p className="text-[10px] font-mono text-gray-500">Lab Building 3 • 10:30 AM</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-amber-400">IN 45M</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#12151B] border border-[#1E222B]">
                <div className="flex items-center gap-2.5">
                  <div className="w-1 h-8 rounded-full bg-purple-400" />
                  <div>
                    <p className="text-xs font-medium text-white">Data Structures</p>
                    <p className="text-[10px] font-mono text-gray-500">Room 201 • 01:00 PM</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-emerald-400">✓ COMPLETED</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#12151B] border border-[#1E222B] opacity-60">
                <div className="flex items-center gap-2.5">
                  <div className="w-1 h-8 rounded-full bg-blue-400" />
                  <div>
                    <p className="text-xs font-medium text-white">Machine Learning</p>
                    <p className="text-[10px] font-mono text-gray-500">Room 305 • 03:30 PM</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-gray-500">UPCOMING</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tasks' && (
          <div className="space-y-2.5">
            <div className="flex items-center justify-between text-[11px] font-mono">
              <span className="text-gray-400">Pending Tasks</span>
              <span className="text-emerald-400">3/8 done</span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#12151B] border border-[#1E222B]">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <div className="flex-1">
                  <p className="text-xs text-white line-through opacity-60">Dynamic Programming Practice</p>
                  <p className="text-[9px] font-mono text-gray-500">Completed • 2h ago</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#12151B] border border-[#1E222B]">
                <div className="w-4 h-4 rounded-full border-2 border-cyan-400" />
                <div className="flex-1">
                  <p className="text-xs text-white">System Architecture Notes</p>
                  <p className="text-[9px] font-mono text-gray-500">Due: Today, 11:59 PM</p>
                </div>
                <span className="text-[9px] font-mono text-amber-400">HIGH</span>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#12151B] border border-[#1E222B]">
                <div className="w-4 h-4 rounded-full border-2 border-gray-500" />
                <div className="flex-1">
                  <p className="text-xs text-white">Review AI Research Paper</p>
                  <p className="text-[9px] font-mono text-gray-500">Due: Tomorrow, 11:59 PM</p>
                </div>
                <span className="text-[9px] font-mono text-gray-500">MEDIUM</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'focus' && (
          <div className="space-y-3">
            <div className="text-center py-3">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono text-cyan-400">POMODORO FOCUS</span>
              </div>
            </div>

            <div className="text-center py-4">
              <span className="text-5xl font-mono font-bold text-white tracking-wider">21:15</span>
              <p className="text-[11px] text-gray-400 mt-1">Focus: Software Reverse Engineering</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-[10px] font-mono text-gray-500">
                <span>Progress</span>
                <span className="text-cyan-400">3/4 intervals</span>
              </div>
              <div className="w-full h-1.5 bg-[#1C222E] rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full" />
              </div>
            </div>

            <div className="flex items-center justify-between pt-1 text-[10px] font-mono text-gray-500">
              <div className="flex items-center gap-1.5">
                <Brain className="w-3.5 h-3.5 text-purple-400" />
                <span>Focus Score: 92%</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Coffee className="w-3.5 h-3.5 text-amber-400" />
                <span>Break in 8:45</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-[#1E222B] pt-3 mt-3 flex items-center justify-between">
        <span className="text-[8px] font-mono text-gray-500">OFFLINE-FIRST ENGINE // SQLITE</span>
        <div className="flex items-center gap-2">
          <span className="w-1 h-1 rounded-full bg-emerald-400" />
          <span className="text-[8px] font-mono text-emerald-400">LOCAL SYNC</span>
          <span className="text-[8px] font-mono text-gray-500">•</span>
          <span className="text-[8px] font-mono text-gray-500">DRIVE BACKUP</span>
        </div>
      </div>
    </div>
  );
}