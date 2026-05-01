---
title: "Product Brief Distillate: Polyglot Cards"
type: llm-distillate
source: "product-brief-Polyglot-Cards.md"
created: "2026-05-02T00:25:00Z"
purpose: "Token-efficient context for downstream PRD creation"
---

# Detail Pack: Polyglot Cards

## Requirements Hints & Core Logic
*   **Multi-Language Cycling Mechanism:**
    *   Front: Universal trigger (Image or Keyword in a "Base" language).
    *   Back: Sequential display. Each interaction (click/tap) cycles to the next configured target language.
    *   Logic must handle N languages without UI clutter.
*   **AI Auto-Generation:**
    *   Input: Single keyword, phrase, or topic.
    *   Output: Image (AI-generated or stock search), high-quality native audio, definition, and contextual example for ALL target languages in the set.
*   **AI Visual Mnemonics:**
    *   Must generate a cross-language association story.
    *   Example: Linking English "Bread", Spanish "Pan", and Vietnamese "Bánh mì" through a shared historical or visual concept.
*   **Adaptive Learning Paths:**
    *   AI assesses current level via initial diagnostic or ongoing performance.
    *   Generates a structured "path" (e.g., Travel Basics -> Daily Interaction -> Business Professional).

## User Scenarios
*   **The Polyglot Enthusiast:** Learning Spanish and Italian simultaneously. Uses "Laddering" mode to learn Italian using Spanish as the reference language to leverage Latin similarities.
*   **The Casual Traveler:** Needs quick vocabulary for a trip to Japan. Uses AI to generate a set from a "Restaurant" topic and focuses on visual recognition cards.
*   **The Student:** Migrating from Quizlet due to paywalls. Needs a seamless import or quick regeneration of existing sets using AI.

## Technical Context & Constraints
*   **Platform:** Responsive Web Application (optimized for PC functional depth and Mobile gesture-based interaction).
*   **Business Model:** SaaS (Subscription-based). Requires a secure billing/subscription management layer.
*   **AI Stack:** Needs LLM (for text/mnemonics), Image Gen (for visual cards), and TTS (for native audio).
*   **Design Trend:** Meaningful Minimalism, 3D/Morphic depth, gesture-driven (swipes for pass/fail, taps for cycle).

## Competitive Intelligence
*   **Anki:** High retention but steep learning curve and lacks native AI creation.
*   **Quizlet:** Massive library but becoming increasingly paywalled and generic.
*   **Knowt/StudyGlen:** Strong on AI creation from documents; Polyglot Cards differentiates by focusing on *simultaneous* multi-language mastery.

## Scope Signals
*   **In-Scope (MVP):** Keyword-to-Flashcard AI, Click-to-cycle back face, Top 10 languages support, Basic AI Pathing.
*   **Out-of-Scope (Phase 1):** Video-to-card generation, Real-time social competitive modes, Complex community sharing.

## Open Questions for PRD Phase
*   Which AI models will be prioritized for Image Generation (DALL-E, Midjourney API, etc.)?
*   Will the "Laddering" mode be a toggle or a separate deck type?
*   What specific payment gateway is preferred for the SaaS model?
*   How will "Interference" be tracked or measured?
