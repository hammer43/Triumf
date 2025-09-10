# Triumf - Excelo Manufacturing Dashboard

An interactive manufacturing analytics dashboard built with React, TypeScript, and Tailwind CSS. Features real-time KPI tracking, AI agent monitoring, and PNG export functionality.

![Excelo Dashboard](https://img.shields.io/badge/Status-Active-brightgreen) ![React](https://img.shields.io/badge/React-18.2.0-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-4.0.0--alpha-06B6D4)

## 🚀 Features

- **📊 Interactive Dashboard**: Real-time manufacturing analytics with comprehensive KPI metrics
- **🧭 Tab Navigation**: Seamless navigation between Home, Data, Reports, and Settings
- **📸 PNG Export**: High-quality dashboard screenshot export with html2canvas
- **📱 Responsive Design**: Mobile-first approach with full desktop support
- **🤖 AI Agent Cards**: Monitor and track various AI components and their performance
- **🔔 Toast Notifications**: Real-time user feedback for all interactions
- **🎨 Dark Theme**: Manufacturing-optimized UI with teal accent colors

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS V4 with custom design tokens
- **Export**: html2canvas for PNG generation
- **Icons**: Lucide React icon library
- **Notifications**: Sonner toast library
- **Components**: ShadCN/UI component library
- **Build Tool**: Vite for fast development and building

## 📱 Dashboard Sections

### Home
- Scrap reduction: **38% improvement**
- Inspection time: **42% reduction** 
- Data volume: **93% optimization**
- Cascade loss prevention: **€8k saved**

### Data
- Processing **2.3M data points**
- **99.3% accuracy** maintained
- **45ms** average processing speed
- **67%** storage utilization

### Reports
- **142 reports** generated automatically
- **18h additional** time saved this month
- **98.7% accuracy** in reporting
- **3 active alerts** requiring attention

### Settings
- **6 active agents** running smoothly
- **99.9% uptime** maintained
- **12ms** average response time
- **43% memory usage**

## 🏗️ Project Structure

```
Triumf/
├── App.tsx                          # Main application entry point
├── components/
│   ├── InteractiveDashboard.tsx     # Main dashboard wrapper with state
│   ├── NavigationBar.tsx            # Bottom navigation component
│   ├── AgentCard.tsx                # Reusable AI agent cards
│   ├── DashboardStats.tsx           # Statistics display cards
│   ├── figma/                       # Figma-specific components
│   └── ui/                          # ShadCN/UI component library
├── imports/
│   ├── StitchDesign.tsx             # Original Figma imported design
│   └── svg-ae4io.tsx               # Navigation and UI icons
├── styles/
│   └── globals.css                  # Tailwind V4 configuration
├── package.json                     # Project dependencies
└── README.md                        # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hammer43/Triumf.git
   cd Triumf
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

## 📊 Key Metrics Tracked

| Metric | Current Value | Improvement |
|--------|---------------|-------------|
| Scrap Reduction | 38% ↓ | -38% |
| Inspection Time | 42% ↓ | -42% |
| Data Volume Optimization | 93% ↓ | -93% |
| Cascade Loss Prevention | €8k | +€8k |
| Processing Speed | 45ms | -23% |
| System Uptime | 99.9% | +0.1% |

## 🎨 Design Philosophy

**"Excellence in Every Cut"** - The Excelo dashboard embodies manufacturing precision through:

- **Dark Theme**: Optimized for industrial environments and extended use
- **Teal Accents**: Strategic color usage for important metrics and actions
- **Mobile-First**: Designed for on-the-floor manufacturing environments
- **Data-Dense**: Maximum information density without overwhelming users
- **Export-Ready**: Professional PNG exports for reports and presentations

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for custom configuration:

```env
# Optional: Custom API endpoints
VITE_API_URL=your_api_endpoint
VITE_EXPORT_QUALITY=0.95
```

### Customization
- **Colors**: Modify CSS variables in `styles/globals.css`
- **Metrics**: Update mock data in `components/InteractiveDashboard.tsx`
- **Navigation**: Edit navigation items in `components/NavigationBar.tsx`

## 📸 Screenshots

The dashboard automatically exports high-quality PNG screenshots with:
- **2x scale** for crisp resolution
- **Professional formatting** with hidden UI controls
- **Automatic filename** with current date
- **Optimized file size** (95% quality)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Figma**: Original design source and inspiration
- **ShadCN/UI**: Comprehensive component library
- **Tailwind CSS**: Utility-first styling framework
- **React Community**: Ongoing support and excellent documentation

## 📞 Support

For questions, issues, or suggestions:
- 📧 Create an issue on GitHub
- 💬 Check existing discussions
- 📚 Review documentation

---

**Built with ❤️ for manufacturing excellence**