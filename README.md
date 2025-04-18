# ⚔️ Simbian Comparison Page – Frontend Assignment

An interactive, animated webpage built with **Next.js**, **Tailwind CSS**, and **Framer Motion** to showcase the dramatic contrast between security operations **with** and **without** Simbian.

## 🧠 Thought Process

The UI is split into two major sections:

- **Without Simbian**: Simulates a chaotic SOC environment. Alert counts increase in real-time, and alerts drop in periodically with animations to reflect operational overload.
- **With Simbian**: Communicates automation and efficiency. Uses horizontal step-by-step animations to guide the user through a calm, streamlined workflow ending in zero unresolved threats.

I focused on:

- Clear contrast between the two states
- Real-time feel through animated dummy data
- Responsive layout across devices

## 🎞️ Animation Choices

- **Framer Motion** was chosen for its clean API and tight integration with React.
- Used:
  - Count animations (`scale`, `pulse`)
  - Entry transitions (`fade`, `slide`, `scale`) for alert messages and cards
  - Step-by-step horizontal progression in the "With Simbian" section
  - Staggered transitions to enhance narrative flow

## ⚠️ Limitations & Future Enhancements

- All data is randomized client-side; no real backend/API integration
- No persistent state – everything resets on page reload
- Could enhance interactivity with:
  - Toggle switch to flip views
  - User-controlled alert speed or severity
  - Sound effects or haptic feedback
