/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1.25rem', // 20px mobile
				sm: '2.5rem',       // 40px tablet
				lg: '5rem',         // 80px desktop (Linear style)
			},
			screens: {
				'2xl': '1200px',    // Linear max-width
			},
		},
		extend: {
			colors: {
				// Linear.app Design System Colors
				background: '#0A0A0B',
				card: {
					DEFAULT: '#161617',
					hover: '#1C1C1D',
				},
				text: {
					primary: '#FFFFFF',
					secondary: '#A1A1AA',
					muted: '#71717A',
				},
				primary: {
					DEFAULT: '#F72960',  // Linear pink CTA
					hover: '#E01B51',
				},
				secondary: {
					DEFAULT: '#0D9488',  // Linear teal
					hover: '#0F766E',
				},
				border: {
					DEFAULT: '#27272A',
					subtle: 'rgba(39, 39, 42, 0.3)',
				},
				// Keep compatibility with template
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				foreground: 'hsl(var(--foreground))',
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
			fontSize: {
				'hero': ['60px', { lineHeight: '1.1', fontWeight: '700' }],
				'h1': ['48px', { lineHeight: '1.2', fontWeight: '600' }],
				'h2': ['32px', { lineHeight: '1.3', fontWeight: '600' }],
				'h3': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
				'body': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
				'nav': ['16px', { lineHeight: '1.5', fontWeight: '500' }],
			},
			borderRadius: {
				'linear': '8px',  // Linear standard radius
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
			},
			animation: {
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
			transitionDuration: {
				'linear': '200ms',  // Linear standard transition
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}
