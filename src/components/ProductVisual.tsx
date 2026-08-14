import React from 'react';

interface ProductVisualProps {
  productId: string;
  viewIndex: number;
  className?: string;
}

export const ProductVisual: React.FC<ProductVisualProps> = ({
  productId,
  viewIndex,
  className = 'w-full h-full',
}) => {
  if (productId === 'glass-tube') {
    switch (viewIndex) {
      case 1:
        // Scale & Float Close-up
        return (
          <svg viewBox="0 0 400 400" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="400" fill="#F8FAFC" />
            <rect x="130" y="30" width="140" height="340" rx="6" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="2" />
            <rect x="150" y="50" width="100" height="300" rx="4" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
            
            {/* Graduated Scale markings */}
            <line x1="165" y1="70" x2="200" y2="70" stroke="#0F172A" strokeWidth="2" />
            <text x="210" y="74" fill="#0F172A" fontSize="11" fontFamily="monospace" fontWeight="500">1000 LPH</text>
            <line x1="175" y1="95" x2="195" y2="95" stroke="#64748B" strokeWidth="1.5" />
            <line x1="170" y1="120" x2="200" y2="120" stroke="#0F172A" strokeWidth="2" />
            <text x="210" y="124" fill="#0F172A" fontSize="11" fontFamily="monospace" fontWeight="500">800 LPH</text>
            <line x1="175" y1="145" x2="195" y2="145" stroke="#64748B" strokeWidth="1.5" />
            <line x1="170" y1="170" x2="200" y2="170" stroke="#0F172A" strokeWidth="2" />
            <text x="210" y="174" fill="#0F172A" fontSize="11" fontFamily="monospace" fontWeight="500">600 LPH</text>
            <line x1="175" y1="195" x2="195" y2="195" stroke="#64748B" strokeWidth="1.5" />
            <line x1="170" y1="220" x2="200" y2="220" stroke="#0F172A" strokeWidth="2" />
            <text x="210" y="224" fill="#0F172A" fontSize="11" fontFamily="monospace" fontWeight="500">400 LPH</text>
            <line x1="175" y1="245" x2="195" y2="245" stroke="#64748B" strokeWidth="1.5" />
            <line x1="170" y1="270" x2="200" y2="270" stroke="#0F172A" strokeWidth="2" />
            <text x="210" y="274" fill="#0F172A" fontSize="11" fontFamily="monospace" fontWeight="500">200 LPH</text>
            <line x1="175" y1="295" x2="195" y2="295" stroke="#64748B" strokeWidth="1.5" />
            <line x1="165" y1="320" x2="200" y2="320" stroke="#0F172A" strokeWidth="2" />
            <text x="210" y="324" fill="#0F172A" fontSize="11" fontFamily="monospace" fontWeight="500">100 LPH</text>

            {/* Float at 600 LPH reading */}
            <polygon points="175,170 195,160 195,180" fill="#334155" />
            <rect x="180" y="165" width="22" height="12" rx="2" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
            <circle cx="191" cy="171" r="3" fill="#94A3B8" />

            {/* Guide Wire */}
            <line x1="191" y1="50" x2="191" y2="350" stroke="#94A3B8" strokeWidth="1" strokeDasharray="4 2" />
            
            {/* Technical Stamp */}
            <rect x="145" y="338" width="110" height="18" rx="2" fill="#E2E8F0" />
            <text x="200" y="350" textAnchor="middle" fill="#475569" fontSize="9" fontFamily="sans-serif">BOROSILICATE GLASS</text>
          </svg>
        );
      case 2:
        // Process End Connections & O-Ring
        return (
          <svg viewBox="0 0 400 400" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="400" fill="#F8FAFC" />
            {/* Top Flange / Connection Block */}
            <rect x="110" y="60" width="180" height="45" rx="4" fill="#334155" stroke="#1E293B" strokeWidth="2" />
            <rect x="140" y="30" width="120" height="30" rx="3" fill="#475569" stroke="#1E293B" strokeWidth="2" />
            <circle cx="130" cy="82" r="7" fill="#F8FAFC" stroke="#1E293B" strokeWidth="2" />
            <circle cx="270" cy="82" r="7" fill="#F8FAFC" stroke="#1E293B" strokeWidth="2" />
            <line x1="170" y1="45" x2="230" y2="45" stroke="#94A3B8" strokeWidth="3" />

            {/* Gland Seal & O-Ring Assembly */}
            <rect x="135" y="105" width="130" height="24" rx="2" fill="#64748B" />
            <rect x="145" y="129" width="110" height="12" rx="6" fill="#0F172A" />
            <text x="200" y="138" textAnchor="middle" fill="#F8FAFC" fontSize="8" fontFamily="sans-serif">O-RING SEAL</text>

            {/* Glass Tube Transition */}
            <path d="M145 141 L145 270 L255 270 L255 141 Z" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
            <line x1="160" y1="160" x2="160" y2="250" stroke="#E2E8F0" strokeWidth="2" />
            <line x1="240" y1="160" x2="240" y2="250" stroke="#E2E8F0" strokeWidth="2" />

            {/* Bottom Flange Assembly */}
            <rect x="145" y="270" width="110" height="12" rx="6" fill="#0F172A" />
            <rect x="135" y="282" width="130" height="24" rx="2" fill="#64748B" />
            <rect x="110" y="306" width="180" height="45" rx="4" fill="#334155" stroke="#1E293B" strokeWidth="2" />
            <rect x="140" y="351" width="120" height="25" rx="3" fill="#475569" stroke="#1E293B" strokeWidth="2" />
            <circle cx="130" cy="328" r="7" fill="#F8FAFC" stroke="#1E293B" strokeWidth="2" />
            <circle cx="270" cy="328" r="7" fill="#F8FAFC" stroke="#1E293B" strokeWidth="2" />

            <text x="200" y="210" textAnchor="middle" fill="#64748B" fontSize="11" fontFamily="sans-serif" fontWeight="500">
              316 SS END FITTINGS
            </text>
          </svg>
        );
      case 3:
        // Alternate View / Heavy Enclosure
        return (
          <svg viewBox="0 0 400 400" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="400" fill="#F8FAFC" />
            {/* Outer Armor Frame */}
            <rect x="100" y="40" width="200" height="320" rx="8" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
            <rect x="125" y="70" width="150" height="260" rx="4" fill="#F1F5F9" />
            {/* Acrylic Window */}
            <rect x="140" y="85" width="120" height="230" rx="4" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1.5" />
            
            {/* Glass Tube Inside */}
            <polygon points="175,95 225,95 220,305 180,305" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="1.5" />
            
            {/* Float */}
            <polygon points="190,200 210,200 205,215 195,215" fill="#0F172A" />
            
            {/* Bolts on Armor Frame */}
            <circle cx="112" cy="55" r="4" fill="#94A3B8" />
            <circle cx="288" cy="55" r="4" fill="#94A3B8" />
            <circle cx="112" cy="345" r="4" fill="#94A3B8" />
            <circle cx="288" cy="345" r="4" fill="#94A3B8" />

            <text x="200" y="380" textAnchor="middle" fill="#64748B" fontSize="11" fontFamily="sans-serif">
              ENCLOSED PROTECTIVE SHIELD
            </text>
          </svg>
        );
      default:
        // Primary Product View
        return (
          <svg viewBox="0 0 400 400" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="400" fill="#F8FAFC" />
            
            {/* Top Process Fitting */}
            <rect x="130" y="35" width="140" height="30" rx="3" fill="#334155" stroke="#1E293B" strokeWidth="2" />
            <rect x="150" y="15" width="100" height="20" rx="2" fill="#475569" stroke="#1E293B" strokeWidth="1.5" />
            <circle cx="145" cy="50" r="5" fill="#E2E8F0" />
            <circle cx="255" cy="50" r="5" fill="#E2E8F0" />

            {/* Side Structural Tie Rods */}
            <rect x="120" y="65" width="8" height="270" rx="4" fill="#94A3B8" stroke="#64748B" strokeWidth="1" />
            <rect x="272" y="65" width="8" height="270" rx="4" fill="#94A3B8" stroke="#64748B" strokeWidth="1" />

            {/* Borosilicate Glass Tapered Tube */}
            <polygon points="160,75 240,75 230,315 170,315" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="2" />
            <polygon points="162,77 238,77 228,313 172,313" fill="#F8FAFC" />

            {/* Scale Markings */}
            <line x1="172" y1="100" x2="190" y2="100" stroke="#0F172A" strokeWidth="1.5" />
            <line x1="172" y1="130" x2="185" y2="130" stroke="#64748B" strokeWidth="1" />
            <line x1="172" y1="160" x2="190" y2="160" stroke="#0F172A" strokeWidth="1.5" />
            <line x1="172" y1="190" x2="185" y2="190" stroke="#64748B" strokeWidth="1" />
            <line x1="172" y1="220" x2="190" y2="220" stroke="#0F172A" strokeWidth="1.5" />
            <line x1="172" y1="250" x2="185" y2="250" stroke="#64748B" strokeWidth="1" />
            <line x1="172" y1="280" x2="190" y2="280" stroke="#0F172A" strokeWidth="1.5" />

            {/* Float */}
            <polygon points="186,180 214,180 208,202 192,202" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
            <circle cx="200" cy="188" r="3" fill="#94A3B8" />

            {/* Bottom Process Fitting */}
            <rect x="130" y="335" width="140" height="30" rx="3" fill="#334155" stroke="#1E293B" strokeWidth="2" />
            <rect x="150" y="365" width="100" height="20" rx="2" fill="#475569" stroke="#1E293B" strokeWidth="1.5" />
            <circle cx="145" cy="350" r="5" fill="#E2E8F0" />
            <circle cx="255" cy="350" r="5" fill="#E2E8F0" />

            {/* Khemas Engineers Label */}
            <rect x="175" y="70" width="50" height="12" rx="2" fill="#0F172A" />
            <text x="200" y="79" textAnchor="middle" fill="#F8FAFC" fontSize="7" fontFamily="sans-serif" fontWeight="500">
              KHEMAS
            </text>
          </svg>
        );
    }
  }

  if (productId === 'metal-tube') {
    switch (viewIndex) {
      case 1:
        // 90° Dial Indicator & Scale
        return (
          <svg viewBox="0 0 400 400" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="400" fill="#F8FAFC" />
            {/* Indicator Round Enclosure */}
            <circle cx="200" cy="200" r="140" fill="#1E293B" stroke="#0F172A" strokeWidth="3" />
            <circle cx="200" cy="200" r="125" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
            <circle cx="200" cy="200" r="118" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />

            {/* 90° Arc Scale (from top-left to top-right / 45° to 135°) */}
            <path d="M 115 180 A 100 100 0 0 1 285 180" stroke="#0F172A" strokeWidth="3" fill="none" />
            
            {/* Scale Ticks */}
            <line x1="120" y1="180" x2="132" y2="180" stroke="#0F172A" strokeWidth="2" />
            <text x="125" y="196" fill="#0F172A" fontSize="10" fontFamily="sans-serif">0%</text>

            <line x1="140" y1="135" x2="150" y2="142" stroke="#0F172A" strokeWidth="2" />
            <text x="135" y="125" fill="#0F172A" fontSize="10" fontFamily="sans-serif">25%</text>

            <line x1="200" y1="100" x2="200" y2="115" stroke="#0F172A" strokeWidth="2.5" />
            <text x="200" y="90" textAnchor="middle" fill="#0F172A" fontSize="11" fontFamily="sans-serif" fontWeight="500">50%</text>

            <line x1="260" y1="135" x2="250" y2="142" stroke="#0F172A" strokeWidth="2" />
            <text x="265" y="125" fill="#0F172A" fontSize="10" fontFamily="sans-serif">75%</text>

            <line x1="280" y1="180" x2="268" y2="180" stroke="#0F172A" strokeWidth="2" />
            <text x="265" y="196" fill="#0F172A" fontSize="10" fontFamily="sans-serif">100%</text>

            {/* Pointer Pivot & Needle */}
            <circle cx="200" cy="220" r="14" fill="#0F172A" stroke="#475569" strokeWidth="2" />
            <polygon points="198,220 202,220 236,120 234,120" fill="#DC2626" />
            <circle cx="200" cy="220" r="5" fill="#F8FAFC" />

            {/* Dial Labels */}
            <text x="200" y="255" textAnchor="middle" fill="#0F172A" fontSize="11" fontFamily="sans-serif" fontWeight="600">
              FLOW RATE (m³/hr)
            </text>
            <text x="200" y="272" textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="sans-serif">
              MAGNETIC COUPLING • ACCURACY ±2%
            </text>
          </svg>
        );
      case 2:
        // Flange & 316 SS Construction
        return (
          <svg viewBox="0 0 400 400" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="400" fill="#F8FAFC" />
            
            {/* Top Flange */}
            <rect x="80" y="40" width="240" height="40" rx="4" fill="#475569" stroke="#1E293B" strokeWidth="2" />
            <circle cx="110" cy="60" r="8" fill="#F8FAFC" stroke="#1E293B" strokeWidth="2" />
            <circle cx="150" cy="60" r="8" fill="#F8FAFC" stroke="#1E293B" strokeWidth="2" />
            <circle cx="250" cy="60" r="8" fill="#F8FAFC" stroke="#1E293B" strokeWidth="2" />
            <circle cx="290" cy="60" r="8" fill="#F8FAFC" stroke="#1E293B" strokeWidth="2" />

            {/* Heavy 316 SS Body Tube */}
            <rect x="140" y="80" width="120" height="240" fill="#334155" stroke="#1E293B" strokeWidth="2" />
            <line x1="160" y1="80" x2="160" y2="320" stroke="#64748B" strokeWidth="2" />
            <line x1="240" y1="80" x2="240" y2="320" stroke="#475569" strokeWidth="2" />

            {/* PTFE Internal Liner highlight */}
            <rect x="165" y="100" width="70" height="200" rx="2" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="1" />
            <text x="200" y="195" textAnchor="middle" fill="#0F172A" fontSize="10" fontFamily="sans-serif" fontWeight="500">
              316 SS WETTED
            </text>
            <text x="200" y="215" textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="sans-serif">
              OPTIONAL PTFE LINED
            </text>

            {/* Bottom Flange */}
            <rect x="80" y="320" width="240" height="40" rx="4" fill="#475569" stroke="#1E293B" strokeWidth="2" />
            <circle cx="110" cy="340" r="8" fill="#F8FAFC" stroke="#1E293B" strokeWidth="2" />
            <circle cx="150" cy="340" r="8" fill="#F8FAFC" stroke="#1E293B" strokeWidth="2" />
            <circle cx="250" cy="340" r="8" fill="#F8FAFC" stroke="#1E293B" strokeWidth="2" />
            <circle cx="290" cy="340" r="8" fill="#F8FAFC" stroke="#1E293B" strokeWidth="2" />

            <text x="200" y="380" textAnchor="middle" fill="#64748B" fontSize="10" fontFamily="sans-serif">
              16–40 BAR RATED • -20°C TO +250°C
            </text>
          </svg>
        );
      case 3:
        // Transmitter & Alarms Housing
        return (
          <svg viewBox="0 0 400 400" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="400" fill="#F8FAFC" />
            {/* Tube Body */}
            <rect x="90" y="30" width="70" height="340" rx="2" fill="#334155" stroke="#1E293B" strokeWidth="2" />
            
            {/* Electronic Indicator & Transmitter Enclosure */}
            <rect x="160" y="110" width="160" height="180" rx="10" fill="#1E293B" stroke="#0F172A" strokeWidth="2.5" />
            
            {/* Digital LCD screen */}
            <rect x="180" y="130" width="120" height="45" rx="4" fill="#0284C7" stroke="#0369A1" strokeWidth="1.5" />
            <text x="190" y="152" fill="#F0F9FF" fontSize="14" fontFamily="monospace" fontWeight="600">42.80 m³/h</text>
            <text x="190" y="167" fill="#BAE6FD" fontSize="9" fontFamily="monospace">TOTAL: 18450 m³</text>

            {/* Dial scale underneath LCD */}
            <circle cx="240" cy="235" r="40" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
            <line x1="240" y1="235" x2="265" y2="215" stroke="#DC2626" strokeWidth="2" />
            <circle cx="240" cy="235" r="4" fill="#0F172A" />

            {/* Cable Glands for 4-20mA & Alarms */}
            <rect x="220" y="290" width="20" height="25" fill="#64748B" />
            <rect x="260" y="290" width="20" height="25" fill="#64748B" />
            <text x="240" y="340" textAnchor="middle" fill="#475569" fontSize="10" fontFamily="sans-serif">
              4-20mA / MIN-MAX ALARMS
            </text>
          </svg>
        );
      default:
        // Primary Metal Tube Rotameter View
        return (
          <svg viewBox="0 0 400 400" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="400" fill="#F8FAFC" />
            
            {/* Top Process Flange */}
            <rect x="70" y="30" width="140" height="28" rx="3" fill="#334155" stroke="#1E293B" strokeWidth="2" />
            <circle cx="90" cy="44" r="5" fill="#E2E8F0" />
            <circle cx="190" cy="44" r="5" fill="#E2E8F0" />

            {/* Vertical 316 SS Metal Metering Tube */}
            <rect x="105" y="58" width="70" height="284" fill="#475569" stroke="#1E293B" strokeWidth="2" />
            <line x1="120" y1="58" x2="120" y2="342" stroke="#64748B" strokeWidth="2" />

            {/* Dial Housing Mounted to the Right */}
            <rect x="175" y="130" width="25" height="140" fill="#334155" stroke="#1E293B" strokeWidth="1.5" />
            <circle cx="255" cy="200" r="75" fill="#1E293B" stroke="#0F172A" strokeWidth="2.5" />
            <circle cx="255" cy="200" r="65" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />

            {/* Dial Arc & Needle */}
            <path d="M 210 190 A 50 50 0 0 1 300 190" stroke="#0F172A" strokeWidth="2" fill="none" />
            <line x1="255" y1="200" x2="280" y2="175" stroke="#DC2626" strokeWidth="2.5" />
            <circle cx="255" cy="200" r="5" fill="#0F172A" />
            
            <text x="255" y="222" textAnchor="middle" fill="#0F172A" fontSize="9" fontFamily="sans-serif" fontWeight="600">
              KHEMAS
            </text>
            <text x="255" y="235" textAnchor="middle" fill="#64748B" fontSize="7" fontFamily="sans-serif">
              316 SS ALL-METAL
            </text>

            {/* Bottom Process Flange */}
            <rect x="70" y="342" width="140" height="28" rx="3" fill="#334155" stroke="#1E293B" strokeWidth="2" />
            <circle cx="90" cy="356" r="5" fill="#E2E8F0" />
            <circle cx="190" cy="356" r="5" fill="#E2E8F0" />
          </svg>
        );
    }
  }

  if (productId === 'bypass') {
    switch (viewIndex) {
      case 1:
        // Secondary Metering Unit
        return (
          <svg viewBox="0 0 400 400" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="400" fill="#F8FAFC" />
            <rect x="140" y="50" width="120" height="300" rx="6" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="2" />
            
            {/* Secondary Glass Tube */}
            <rect x="165" y="80" width="70" height="240" rx="3" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1.5" />
            
            {/* Direct reading pipeline scale */}
            <line x1="180" y1="100" x2="200" y2="100" stroke="#0F172A" strokeWidth="1.5" />
            <text x="205" y="104" fill="#0F172A" fontSize="10" fontFamily="sans-serif">500 m³/h</text>
            <line x1="180" y1="140" x2="200" y2="140" stroke="#0F172A" strokeWidth="1.5" />
            <text x="205" y="144" fill="#0F172A" fontSize="10" fontFamily="sans-serif">350 m³/h</text>
            <line x1="180" y1="180" x2="200" y2="180" stroke="#0F172A" strokeWidth="1.5" />
            <text x="205" y="184" fill="#0F172A" fontSize="10" fontFamily="sans-serif">200 m³/h</text>
            <line x1="180" y1="220" x2="200" y2="220" stroke="#0F172A" strokeWidth="1.5" />
            <text x="205" y="224" fill="#0F172A" fontSize="10" fontFamily="sans-serif">100 m³/h</text>
            
            {/* Float */}
            <polygon points="185,150 205,150 200,165 190,165" fill="#1E293B" />

            {/* Title */}
            <text x="200" y="370" textAnchor="middle" fill="#64748B" fontSize="11" fontFamily="sans-serif">
              SECONDARY PROPORTIONAL INDICATOR
            </text>
          </svg>
        );
      case 2:
        // Orifice Flange Detail
        return (
          <svg viewBox="0 0 400 400" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="400" fill="#F8FAFC" />
            {/* Pipeline Flanges with Orifice plate between */}
            <rect x="60" y="120" width="100" height="160" fill="#475569" stroke="#1E293B" strokeWidth="2" />
            <rect x="160" y="90" width="20" height="220" fill="#0F172A" />
            <rect x="180" y="120" width="100" height="160" fill="#475569" stroke="#1E293B" strokeWidth="2" />
            
            {/* Orifice Plate Bore */}
            <rect x="160" y="170" width="20" height="60" fill="#F8FAFC" />
            <text x="170" y="160" textAnchor="middle" fill="#DC2626" fontSize="9" fontFamily="sans-serif" fontWeight="600">
              ORIFICE
            </text>

            {/* Impulse Line Taps */}
            <path d="M110 120 L110 70 L250 70 L250 120" stroke="#0284C7" strokeWidth="4" fill="none" />
            <circle cx="110" cy="120" r="4" fill="#0284C7" />
            <circle cx="250" cy="120" r="4" fill="#0284C7" />

            <text x="200" y="360" textAnchor="middle" fill="#64748B" fontSize="11" fontFamily="sans-serif">
              CARRIER RING & DIFFERENTIAL TAPS
            </text>
          </svg>
        );
      case 3:
        // Pipeline Installation Profile
        return (
          <svg viewBox="0 0 400 400" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="400" fill="#F8FAFC" />
            {/* Main horizontal pipeline */}
            <rect x="20" y="240" width="360" height="60" fill="#64748B" stroke="#334155" strokeWidth="2" />
            <line x1="20" y1="270" x2="380" y2="270" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="6 4" />

            {/* Carrier Plate */}
            <rect x="190" y="230" width="20" height="80" fill="#1E293B" />

            {/* Impulse Piping loop to Top Rotameter */}
            <path d="M140 240 L140 100 L260 100 L260 240" stroke="#334155" strokeWidth="3" fill="none" />

            {/* Small Rotameter in loop */}
            <rect x="180" y="70" width="40" height="90" rx="3" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
            <line x1="200" y1="80" x2="200" y2="150" stroke="#0284C7" strokeWidth="2" />

            <text x="200" y="350" textAnchor="middle" fill="#475569" fontSize="11" fontFamily="sans-serif" fontWeight="500">
              LARGE DIAMETER LINE INSTALLATION
            </text>
          </svg>
        );
      default:
        // Primary Bypass Assembly
        return (
          <svg viewBox="0 0 400 400" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="400" fill="#F8FAFC" />
            
            {/* Main Line Pipe section */}
            <rect x="40" y="260" width="320" height="60" rx="3" fill="#475569" stroke="#1E293B" strokeWidth="2" />
            <rect x="185" y="245" width="30" height="90" rx="2" fill="#1E293B" />
            <circle cx="200" cy="290" r="14" fill="#F8FAFC" />

            {/* Left & Right Bypass Impulse Tubes */}
            <path d="M120 260 L120 120 L160 120" stroke="#334155" strokeWidth="3.5" fill="none" />
            <path d="M280 260 L280 120 L240 120" stroke="#334155" strokeWidth="3.5" fill="none" />

            {/* Isolation Valves on Impulse Lines */}
            <circle cx="120" cy="180" r="8" fill="#DC2626" />
            <circle cx="280" cy="180" r="8" fill="#DC2626" />

            {/* Secondary Rotameter Unit */}
            <rect x="160" y="60" width="80" height="150" rx="4" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
            <rect x="175" y="80" width="50" height="110" rx="2" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" />
            <line x1="185" y1="100" x2="200" y2="100" stroke="#0F172A" strokeWidth="1.5" />
            <line x1="185" y1="130" x2="200" y2="130" stroke="#0F172A" strokeWidth="1.5" />
            <line x1="185" y1="160" x2="200" y2="160" stroke="#0F172A" strokeWidth="1.5" />

            <polygon points="195,120 205,120 202,130 198,130" fill="#0F172A" />

            <text x="200" y="375" textAnchor="middle" fill="#64748B" fontSize="10" fontFamily="sans-serif">
              BYPASS ORIFICE & ROTAMETER SYSTEM
            </text>
          </svg>
        );
    }
  }

  if (productId === 'purge-type') {
    switch (viewIndex) {
      case 1:
        // Needle Control Valve Close-up
        return (
          <svg viewBox="0 0 400 400" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="400" fill="#F8FAFC" />
            
            {/* Valve Body */}
            <rect x="120" y="160" width="160" height="80" rx="4" fill="#334155" stroke="#1E293B" strokeWidth="2" />
            
            {/* Knurled Adjustment Knob */}
            <rect x="170" y="240" width="60" height="40" rx="3" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
            <line x1="180" y1="240" x2="180" y2="280" stroke="#64748B" strokeWidth="2" />
            <line x1="190" y1="240" x2="190" y2="280" stroke="#64748B" strokeWidth="2" />
            <line x1="200" y1="240" x2="200" y2="280" stroke="#64748B" strokeWidth="2" />
            <line x1="210" y1="240" x2="210" y2="280" stroke="#64748B" strokeWidth="2" />
            <line x1="220" y1="240" x2="220" y2="280" stroke="#64748B" strokeWidth="2" />

            {/* Needle Orifice */}
            <polygon points="190,160 210,160 200,120" fill="#F59E0B" stroke="#D97706" strokeWidth="1.5" />

            {/* Tube Inlet */}
            <rect x="180" y="70" width="40" height="60" rx="2" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1.5" />
            <circle cx="200" cy="100" r="5" fill="#334155" />

            <text x="200" y="320" textAnchor="middle" fill="#0F172A" fontSize="11" fontFamily="sans-serif" fontWeight="500">
              PRECISION NEEDLE VALVE
            </text>
            <text x="200" y="340" textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="sans-serif">
              FINE LOW-FLOW CONTROL & ADJUSTMENT
            </text>
          </svg>
        );
      case 2:
        // DP Regulator Assembly
        return (
          <svg viewBox="0 0 400 400" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="400" fill="#F8FAFC" />
            
            {/* DP Regulator Housing */}
            <circle cx="200" cy="200" r="90" fill="#334155" stroke="#1E293B" strokeWidth="2" />
            <circle cx="200" cy="200" r="75" fill="#475569" stroke="#1E293B" strokeWidth="1.5" />
            
            {/* Internal Diaphragm Line */}
            <line x1="125" y1="200" x2="275" y2="200" stroke="#F59E0B" strokeWidth="3" />
            
            {/* Inlet/Outlet ports */}
            <rect x="80" y="190" width="45" height="20" fill="#1E293B" />
            <rect x="275" y="190" width="45" height="20" fill="#1E293B" />

            {/* Spring Assembly */}
            <path d="M190 140 L210 150 L190 160 L210 170 L190 180 L210 190" stroke="#CBD5E1" strokeWidth="2.5" fill="none" />

            <text x="200" y="330" textAnchor="middle" fill="#0F172A" fontSize="11" fontFamily="sans-serif" fontWeight="500">
              DIFFERENTIAL PRESSURE REGULATOR
            </text>
            <text x="200" y="350" textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="sans-serif">
              CONSTANT FLOW UNDER FLUCTUATING PRESSURE
            </text>
          </svg>
        );
      case 3:
        // Metal Tube Purge Option
        return (
          <svg viewBox="0 0 400 400" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="400" fill="#F8FAFC" />
            
            {/* Armored Metal Purge Body */}
            <rect x="130" y="50" width="60" height="280" rx="3" fill="#334155" stroke="#1E293B" strokeWidth="2" />
            
            {/* Magnetic Follower Capsule */}
            <rect x="190" y="120" width="80" height="120" rx="4" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
            <rect x="205" y="135" width="50" height="90" rx="2" fill="#FFFFFF" />
            <line x1="215" y1="150" x2="235" y2="150" stroke="#0F172A" strokeWidth="1.5" />
            <line x1="215" y1="180" x2="235" y2="180" stroke="#0F172A" strokeWidth="1.5" />
            <line x1="215" y1="210" x2="235" y2="210" stroke="#0F172A" strokeWidth="1.5" />

            <polygon points="220,175 235,175 230,185 225,185" fill="#DC2626" />

            {/* Bottom Needle Valve */}
            <rect x="145" y="330" width="30" height="30" rx="2" fill="#1E293B" />

            <text x="200" y="380" textAnchor="middle" fill="#64748B" fontSize="10" fontFamily="sans-serif">
              METAL TUBE LOW-FLOW CONFIGURATION
            </text>
          </svg>
        );
      default:
        // Primary Purge-Type Rotameter View
        return (
          <svg viewBox="0 0 400 400" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="400" fill="#F8FAFC" />
            
            {/* Top Block */}
            <rect x="140" y="40" width="120" height="30" rx="3" fill="#334155" stroke="#1E293B" strokeWidth="2" />
            <rect x="230" y="47" width="20" height="16" fill="#64748B" />

            {/* Transparent Acrylic Front / Glass Tube */}
            <rect x="140" y="70" width="120" height="220" rx="4" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="2" />
            <polygon points="180,80 220,80 215,270 185,270" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1.5" />

            {/* Low-Flow Graduations */}
            <line x1="190" y1="100" x2="202" y2="100" stroke="#0F172A" strokeWidth="1.5" />
            <line x1="190" y1="130" x2="200" y2="130" stroke="#64748B" strokeWidth="1" />
            <line x1="190" y1="160" x2="202" y2="160" stroke="#0F172A" strokeWidth="1.5" />
            <line x1="190" y1="190" x2="200" y2="190" stroke="#64748B" strokeWidth="1" />
            <line x1="190" y1="220" x2="202" y2="220" stroke="#0F172A" strokeWidth="1.5" />
            <line x1="190" y1="250" x2="200" y2="250" stroke="#64748B" strokeWidth="1" />

            {/* Precision Ball Float */}
            <circle cx="200" cy="180" r="5" fill="#1E293B" stroke="#0F172A" strokeWidth="1" />

            {/* Bottom Block with Needle Valve Assembly */}
            <rect x="140" y="290" width="120" height="40" rx="3" fill="#334155" stroke="#1E293B" strokeWidth="2" />
            <rect x="230" y="300" width="20" height="20" fill="#64748B" />

            {/* Knurled Adjustment Knob */}
            <rect x="180" y="330" width="40" height="25" rx="2" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
            <line x1="190" y1="330" x2="190" y2="355" stroke="#64748B" strokeWidth="1.5" />
            <line x1="200" y1="330" x2="200" y2="355" stroke="#64748B" strokeWidth="1.5" />
            <line x1="210" y1="330" x2="210" y2="355" stroke="#64748B" strokeWidth="1.5" />

            <text x="200" y="380" textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="sans-serif" fontWeight="500">
              INTEGRAL NEEDLE CONTROL VALVE
            </text>
          </svg>
        );
    }
  }

  return <div className="w-full h-full bg-neutral-100" />;
};
