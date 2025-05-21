/**
 * Animation utility constants for consistent transition durations and easing
 * To be used throughout the application for a unified motion experience
 */

// Transition durations (in milliseconds)
export const DURATION = {
	FAST: 200,
	DEFAULT: 300,
	SLOW: 500,
	VERY_SLOW: 800,
};

// Cubic bezier easing functions
export const EASING = {
	// Standard easing
	DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",

	// Ease in - starts slow, accelerates
	EASE_IN: "cubic-bezier(0.4, 0, 1, 1)",

	// Ease out - starts fast, decelerates
	EASE_OUT: "cubic-bezier(0, 0, 0.2, 1)",

	// Ease in-out - starts and ends slow, fast in the middle
	EASE_IN_OUT: "cubic-bezier(0.4, 0, 0.2, 1)",

	// Emphasize motion at the end
	EMPHASIZE: "cubic-bezier(0.2, 0.8, 0.2, 1)",
};

// Animation properties to animate
export const PROPERTIES = {
	ALL: "all",
	TRANSFORM: "transform",
	OPACITY: "opacity",
	BACKGROUND: "background",
	COLOR: "color",
	SHADOW: "box-shadow",
};

// Helper function to generate CSS transition string
export const createTransition = (property = PROPERTIES.ALL, duration = DURATION.DEFAULT, easing = EASING.DEFAULT, delay = 0) => {
	return `${property} ${duration}ms ${easing} ${delay}ms`;
};

// Common animations as CSS classes for Tailwind
export const ANIMATIONS = {
	HOVER_LIFT: "transition-transform duration-300 transform hover:-translate-y-1",
	HOVER_SCALE: "transition-transform duration-300 transform hover:scale-105",
	FADE_IN: "transition-opacity duration-500 ease-in-out",
	PULSE: "animate-pulse",
	SPIN: "animate-spin",
	BOUNCE: "animate-bounce",
	PING: "animate-ping",
};

// Keyframe animations for more complex motion
export const KEYFRAMES = {
	fadeIn: `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `,
	slideUp: `
    @keyframes slideUp {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
  `,
	slideIn: `
    @keyframes slideIn {
      from { transform: translateX(-20px); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
  `,
};

// Export CSS classes that can be added to globals.css
export const animationClasses = `
  .animate-fade-in {
    animation: fadeIn 0.5s ease-in-out forwards;
  }
  
  .animate-slide-up {
    animation: slideUp 0.5s ease-out forwards;
  }
  
  .animate-slide-in {
    animation: slideIn 0.3s ease-out forwards;
  }
  
  .animate-stagger-delay-1 {
    animation-delay: 100ms;
  }
  
  .animate-stagger-delay-2 {
    animation-delay: 200ms;
  }
  
  .animate-stagger-delay-3 {
    animation-delay: 300ms;
  }
  
  ${KEYFRAMES.fadeIn}
  ${KEYFRAMES.slideUp}
  ${KEYFRAMES.slideIn}
`;
