// src/components/NexusTracePreview/NexusTracePreview.tsx
import { useState } from 'react';
import { Shield, FileCode, Binary, Cpu, ShieldCheck, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function NexusTracePreview() {
  const [activeTab, setActiveTab] = useState<'manifest' | 'dex' | 'native'>('manifest');

  return (
    <div className="w-full h-full min-h-[280px] rounded-xl bg-[#0A0C10] border border-[#1E222B] p-4 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#1E222B] pb-2 mb-3">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-purple-400" />
          <span className="font-mono text-[11px] font-semibold text-purple-400">NexusTrace</span>
          <span className="text-[9px] font-mono text-gray-500">v2.1.0</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[9px] font-mono text-gray-500">ANALYZING</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-[#12151B] rounded-lg p-0.5 mb-3">
        <button
          onClick={() => setActiveTab('manifest')}
          className={`flex-1 px-2 py-1 rounded text-[10px] font-mono transition-all ${
            activeTab === 'manifest'
              ? 'bg-purple-500/20 text-purple-400'
              : 'text-gray-500 hover:text-gray-300'
          }`}
        >
          <span className="flex items-center justify-center gap-1">
            <FileCode className="w-3 h-3" />
            Manifest
          </span>
        </button>
        <button
          onClick={() => setActiveTab('dex')}
          className={`flex-1 px-2 py-1 rounded text-[10px] font-mono transition-all ${
            activeTab === 'dex'
              ? 'bg-purple-500/20 text-purple-400'
              : 'text-gray-500 hover:text-gray-300'
          }`}
        >
          <span className="flex items-center justify-center gap-1">
            <Binary className="w-3 h-3" />
            DEX
          </span>
        </button>
        <button
          onClick={() => setActiveTab('native')}
          className={`flex-1 px-2 py-1 rounded text-[10px] font-mono transition-all ${
            activeTab === 'native'
              ? 'bg-purple-500/20 text-purple-400'
              : 'text-gray-500 hover:text-gray-300'
          }`}
        >
          <span className="flex items-center justify-center gap-1">
            <Cpu className="w-3 h-3" />
            Native
          </span>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 space-y-2">
        {activeTab === 'manifest' && (
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[10px] font-mono">
              <span className="text-gray-400">Package</span>
              <span className="text-emerald-400">com.example.app</span>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono">
              <span className="text-gray-400">Permissions</span>
              <div className="flex gap-1">
                <span className="text-emerald-400 text-[9px] px-1.5 py-0.5 bg-emerald-500/10 rounded">✓ INTERNET</span>
                <span className="text-emerald-400 text-[9px] px-1.5 py-0.5 bg-emerald-500/10 rounded">✓ STORAGE</span>
                <span className="text-rose-400 text-[9px] px-1.5 py-0.5 bg-rose-500/10 rounded">⚠ CAMERA</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono">
              <span className="text-gray-400">Target SDK</span>
              <span className="text-cyan-400">API 34 (Android 14)</span>
            </div>
            <div className="mt-2 p-2 rounded bg-[#12151B] border border-[#1E222B]">
              <div className="flex items-center gap-1.5 text-[9px] font-mono text-emerald-400">
                <CheckCircle2 className="w-3 h-3" />
                <span>No suspicious permissions detected</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'dex' && (
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[10px] font-mono">
              <span className="text-gray-400">Classes</span>
              <span className="text-cyan-400">2,847</span>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono">
              <span className="text-gray-400">Methods</span>
              <span className="text-cyan-400">14,231</span>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono">
              <span className="text-gray-400">Strings</span>
              <span className="text-cyan-400">8,912</span>
            </div>
            <div className="mt-2 p-2 rounded bg-[#12151B] border border-[#1E222B]">
              <div className="flex items-center gap-1.5 text-[9px] font-mono text-amber-400">
                <AlertTriangle className="w-3 h-3" />
                <span>2 obfuscated string patterns detected</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'native' && (
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[10px] font-mono">
              <span className="text-gray-400">Libraries</span>
              <span className="text-cyan-400">3 .so files</span>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono">
              <span className="text-gray-400">Symbols</span>
              <span className="text-cyan-400">1,234</span>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono">
              <span className="text-gray-400">Exports</span>
              <span className="text-emerald-400">87</span>
            </div>
            <div className="mt-2 p-2 rounded bg-[#12151B] border border-[#1E222B]">
              <div className="flex items-center gap-1.5 text-[9px] font-mono text-emerald-400">
                <ShieldCheck className="w-3 h-3" />
                <span>No unresolved imports found</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-[#1E222B] pt-2 mt-2 flex items-center justify-between">
        <span className="text-[8px] font-mono text-gray-500">STATIC ANALYSIS // RUST ENGINE</span>
        <div className="flex items-center gap-1">
          <span className="w-1 h-1 rounded-full bg-emerald-400" />
          <span className="text-[8px] font-mono text-emerald-400">PASSED</span>
        </div>
      </div>
    </div>
  );
}