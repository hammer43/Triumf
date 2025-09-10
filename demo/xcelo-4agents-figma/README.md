# Xcelo – 4 Super-Agents + Figma Prototype Demo

This is a **zero-dependency static demo** that combines the **Excelo Figma prototype** with a lightweight simulation of the **4 RAG-enhanced super-agents** and the **Orchestrator**.

## What’s Included
- **Left side:** Live Figma embed of the Excelo UI  
- **Right side:** Interactive agent cards that update when you run the orchestrator  

Agents simulated:
- **Context Agent** – interprets natural language input, retrieves manual/history data  
- **Prediction Agent** – assigns a quality score, highlights risks, suggests fixes  
- **Optimization Agent** – recommends inspection order, saves time and cost  
- **Network Agent** – shows collective learning: patterns shared + hours saved  

Additional cards show:
- NC Plan rationale  
- Optimized sensor policy (Balluff sensors mock)  
- Cascade risk prevention (€8k save demo)  

## How to Run
1. Open the repo locally  
   ```bash
   cd Triumf/demo/xcelo-4agents-figma
   ```
2. Double-click `index.html` (or right-click → **Open With** → Chrome/Edge).  
3. Enter a prompt (e.g., *“Mill 80×40×20 mm titanium bracket, Ra ≤16”*) in the input box.  
4. Click **Run Orchestrator** and watch the agent outputs update.

## Repository Structure
```
xcelo-4agents-figma/
  index.html        # Main demo UI (Figma embed + agents)
  data/
    manuals.json    # Mock machine manuals
    jobs.json       # Mock shop job history
    patterns.json   # Mock network patterns
  README.md         # This file
```

## Notes
- This is a **UX + logic mock**, not a production system.  
- The JSON mocks simulate real-world sensor/inspection data.  
- The demo shows how Excelo agents would work with real shop data and Balluff/OPC-UA buses later.  
- To deploy online, you can serve this folder via **GitHub Pages** or any static web host.  
