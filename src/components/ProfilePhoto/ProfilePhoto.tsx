import { useState, useRef, ChangeEvent } from 'react';
import ProfileFrame from '../ProfileFrame/ProfileFrame';
import { Camera, Upload, User, Sparkles } from 'lucide-react';

export interface ProfilePhotoProps {
  key?: string;
  image?: string;
  name?: string;
  role?: string;
  year?: string;
}

export default function ProfilePhoto({
  image = '/assets/profile.jpg',
  name = 'Muhammad Alfarizi',
  role = 'DEVELOPER',
  year = '2026'
}: ProfilePhotoProps) {
  const [imgSrc, setImgSrc] = useState<string>(image);
  const [imgError, setImgError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImgSrc(previewUrl);
      setImgError(false);
    }
  };

  return (
    <div
      id="profile-photo-container"
      className="w-full max-w-md mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ProfileFrame isHovered={isHovered} role={role} year={year}>
        <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full bg-[#0d0f14] flex flex-col items-center justify-center overflow-hidden group">
          {/* Subtle laboratory grid background inside frame */}
          <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

          {/* Subtle scanning line effect on hover */}
          {isHovered && (
            <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-75 animate-scanline z-20 pointer-events-none" />
          )}

          {/* Photo Render or Fallback */}
          {!imgError ? (
            <img
              src={imgSrc}
              alt={name}
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className={`w-full h-full object-cover transition-transform duration-500 ease-out select-none ${
                isHovered ? 'scale-[1.02]' : 'scale-100'
              }`}
            />
          ) : (
            /* Elegant Fallback for [ YOUR PHOTO ] */
            <div className="relative z-10 p-6 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-20 h-20 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 flex items-center justify-center text-cyan-400 shadow-inner group-hover:border-cyan-400/60 transition-colors">
                <User className="w-10 h-10 stroke-[1.5]" />
              </div>

              <div className="space-y-1">
                <div className="font-mono text-sm font-bold tracking-widest text-[var(--text-primary)]">
                  [ YOUR PHOTO ]
                </div>
                <p className="font-mono text-xs text-cyan-400 font-medium">
                  {name} &middot; {role}
                </p>
                <p className="text-[11px] text-[var(--text-secondary)] max-w-xs font-mono pt-1">
                  Replace with your profile image:
                </p>
                <code className="text-[10px] font-mono px-2 py-1 rounded bg-black/40 text-cyan-300 border border-cyan-500/20 inline-block">
                  src/assets/profile.jpg
                </code>
              </div>

              {/* Quick preview tester button */}
              <div className="pt-2">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-cyan-500/40 bg-cyan-500/15 text-cyan-300 hover:bg-cyan-500/25 transition-all text-xs font-mono cursor-pointer"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Upload Local Preview</span>
                </button>
              </div>
            </div>
          )}

          {/* Overlay Status Bar */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3 pt-6 flex items-center justify-between z-10">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="font-mono text-[10px] text-gray-300 tracking-wider">
                FRAME // 01
              </span>
            </div>
            <div className="font-mono text-[10px] text-cyan-400/90 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              <span>LAB CALIBRATED</span>
            </div>
          </div>
        </div>
      </ProfileFrame>
    </div>
  );
}
