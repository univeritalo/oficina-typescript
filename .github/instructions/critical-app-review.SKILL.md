# Critical App Review

## Description
Perform a thorough, critical dogfooding review of an app or game, analyzing its code structure, running tests, simulating user interactions, and providing balanced feedback on fun, usability, and overall experience. This skill is ideal for developers testing their own products or reviewing projects in a workshop setting, with a focus on interactive applications like games or social tools.

## Workflow Steps
1. **Codebase Analysis**: Read and understand key files including main app component, hooks, components, data sources, and utility logic to grasp the app's functionality and architecture.
2. **App State Check**: Verify if the development server is running; retrieve task output to ensure the app is operational. If not running, suggest starting it.
3. **Test Execution**: Run automated tests to confirm functionality and identify any issues that could affect user experience.
4. **Browser Launch**: Open the app in the default browser using $BROWSER to observe real behavior, UI responsiveness, and initial impressions.
5. **Usage Simulation**: Based on code inspection and browser observation, simulate gameplay or user interactions, noting pain points and engaging elements.
6. **Structured Feedback**: Provide comprehensive feedback including positives, critical negatives, overall rating (1-10), and actionable improvement suggestions, covering fun, usability, performance, and accessibility.

## Decision Points and Branching Logic
- **If tests fail**: Include test failures in the feedback, noting potential bugs or incomplete features that affect usability or fun.
- **If app not running**: Start the development server using appropriate commands (e.g., npm run dev) and proceed.
- **If app is social/multiplayer-dependent**: Emphasize context limitations in feedback, as solo testing may not capture full fun potential; suggest testing in group settings.
- **If code analysis reveals issues**: Prioritize technical problems (e.g., performance bottlenecks, accessibility barriers) alongside subjective fun elements.
- **If browser launch fails**: Fall back to code-based simulation and note environmental limitations.

## Quality Criteria and Completion Checks
- **Comprehensive Analysis**: Cover all major code components, user flows, and runtime behavior.
- **Balanced Feedback**: Include both positive aspects (what works well) and critical negatives (what hinders fun/usability).
- **Actionable Suggestions**: Provide specific, implementable ideas for improvement, prioritized by impact.
- **Rating Scale**: Use a clear 1-10 scale with detailed justification based on multiple criteria (fun, usability, technical quality).
- **Context Awareness**: Acknowledge app's intended use case (e.g., social game vs. solo experience) and testing limitations.

## Example Usage
- "Test this bingo app as a critical dogfooder, giving feedback on how fun it is."
- "Review this React game for UX issues and engagement potential."
- "Dogfood this social app and provide critical feedback on usability."

## Related Skills
- Code review and analysis
- Usability testing methodologies
- Game design evaluation
- Performance profiling