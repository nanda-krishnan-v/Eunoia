# Happiness Meter 🌟

A cheerful, responsive, single-page React application that measures your happiness score based on answers to randomized lifestyle and mood questions.

## ✨ Features

- **Welcome Screen**: Beautiful animated welcome page with floating emojis
- **Randomized Questions**: 5 questions randomly selected from a pool of 20 happiness-related questions
- **Interactive Quiz**: Smooth animations and transitions between questions
- **Progress Tracking**: Visual progress bar and happiness meter
- **Keyboard Support**: Press Enter to quickly select "Medium" answer
- **Success Sound**: Subtle chime sound when quiz completes
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Beautiful Results**: Animated result screen with personalized messages

## 🎨 Design Features

- **Cheerful UI**: Warm, pastel colors with gradients
- **Smooth Animations**: Powered by Framer Motion
- **Floating Elements**: Animated background emojis
- **Modern Typography**: Poppins and Quicksand fonts
- **Mobile-First**: Responsive design that works on all devices

## 🚀 Quick Start

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone or download the project**
   ```bash
   # If you have the files locally, navigate to the project directory
   cd happiness-meter
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the app in action!

## 📁 Project Structure

```
happiness-meter/
├── src/
│   ├── components/
│   │   ├── WelcomeScreen.jsx    # Welcome page with animations
│   │   ├── QuestionCard.jsx     # Quiz question interface
│   │   └── ResultScreen.jsx     # Results display
│   ├── data/
│   │   └── questions.json       # Happiness questions (editable)
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # App entry point
│   └── index.css                # Global styles and animations
├── index.html                   # HTML template
├── package.json                 # Dependencies and scripts
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
└── vite.config.js              # Vite configuration
```

## 🎯 How It Works

1. **Welcome Screen**: Users see a cheerful welcome page with animated elements
2. **Question Selection**: 5 questions are randomly selected from the questions pool
3. **Quiz Flow**: Users answer each question using the 5-point scale
4. **Score Calculation**: Average score is calculated from all answers
5. **Results**: Personalized result message based on happiness level

## 📊 Scoring System

- **4.0-5.0**: 🌟 "Hey, you're super happy! Keep shining!"
- **3.0-3.9**: 😊 "You're doing okay, but treat yourself to something nice today."
- **2.0-2.9**: 😐 "Not the happiest day, but tomorrow's a fresh start."
- **Below 2.0**: 💙 "You seem low today — maybe talk to a friend or do something you love."

## 🛠️ Customization

### Adding New Questions
Edit `src/data/questions.json` to add, remove, or modify questions. The app will automatically use the updated questions.

### Modifying Colors
Update the color scheme in `tailwind.config.js` under the `colors` section.

### Changing Animations
Modify animation settings in `src/index.css` and component files.

## 🎵 Audio Features

The app includes a subtle success chime when the quiz completes. This uses the Web Audio API and will work in most modern browsers.

## ⌨️ Keyboard Support

- **Enter Key**: Quickly select "Medium" answer during the quiz
- **Tab Navigation**: Full keyboard accessibility

## 📱 Responsive Design

The app is fully responsive and optimized for:
- Mobile phones (320px+)
- Tablets (768px+)
- Desktop computers (1024px+)

## 🚀 Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

## 🧪 Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🎨 Technologies Used

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

## 🌟 Special Features

- **Floating Emojis**: Animated background elements
- **Progress Visualization**: Happiness meter that fills as you progress
- **Smooth Transitions**: Beautiful animations between screens
- **Success Feedback**: Audio and visual feedback on completion
- **Accessibility**: Keyboard navigation and screen reader friendly

## 📄 License

This project is open source and available under the MIT License.

---

**Made with ❤️ and lots of happiness!** 😊
