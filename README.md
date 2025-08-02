# WealthBridge Financial Consulting

A modern, responsive React application for WealthBridge Financial Consulting services, built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **TypeScript** - Full type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **React Router** - Client-side routing for seamless navigation
- **Component-Based Architecture** - Modular and maintainable code structure

## 📁 Project Structure

```
my-react-app/
├── public/
│   ├── vite.svg
│   └── index.html
├── src/
│   ├── assets/
│   │   └── logo.svg
│   ├── components/
│   │   ├── Header.tsx          # Main navigation component
│   │   └── ContactForm.tsx     # Contact form with phone input
│   ├── pages/
│   │   ├── Home.tsx            # Landing page
│   │   ├── Blog.tsx            # Blog articles listing
│   │   ├── Contacts.tsx        # Contact information and form
│   │   ├── FAQ.tsx             # Frequently asked questions
│   │   ├── AboutUs.tsx         # Company information
│   │   └── ThankYou.tsx        # Success page after form submission
│   ├── App.tsx                 # Main application component
│   ├── App.css                 # Application styles
│   ├── index.css               # Global styles with Tailwind directives
│   ├── main.jsx                # Application entry point
│   └── vite-env.d.ts           # Vite environment types
├── package.json                # Dependencies and scripts
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── vite.config.js              # Vite build configuration
└── eslint.config.js            # ESLint configuration
```

## 🛠️ Technologies Used

### Core Technologies

- **React 19.1.0** - Modern React with latest features
- **TypeScript** - Type-safe JavaScript development
- **Vite 7.0.4** - Fast build tool and development server

### Styling & UI

- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **PostCSS 8.5.6** - CSS processing
- **Autoprefixer 10.4.21** - CSS vendor prefixing

### Routing & Navigation

- **React Router DOM 7.7.1** - Client-side routing

### Form Handling

- **React Phone Number Input 3.4.12** - International phone number input component

### Development Tools

- **ESLint 9.30.1** - Code linting and quality
- **@types/react** - TypeScript definitions for React

## 🎨 Design System

### Color Palette

- **Primary Blue**: `#2563eb` (blue-600)
- **Secondary Blue**: `#1d4ed8` (blue-700)
- **Success Green**: `#16a34a` (green-600)
- **Gray Scale**: Various gray shades for text and backgrounds

### Typography

- **Font Family**: 'Poppins', sans-serif
- **Headings**: Bold weights with responsive sizing
- **Body Text**: Regular weight with good readability

### Components

- **Cards**: Rounded corners with subtle shadows
- **Buttons**: Consistent styling with hover effects
- **Forms**: Clean inputs with focus states
- **Navigation**: Responsive header with mobile menu

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Responsive Features

- Mobile-first design approach
- Collapsible navigation menu
- Flexible grid layouts
- Optimized touch targets
- Responsive typography

## 🔧 Configuration Files

### Tailwind CSS Configuration (`tailwind.config.js`)

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### PostCSS Configuration (`postcss.config.js`)

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### Vite Configuration (`vite.config.js`)

- React plugin for JSX support
- Development server configuration
- Build optimization settings

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd my-react-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 Page Descriptions

### Home Page (`/`)

- Hero section with call-to-action
- Services overview with icons
- Company benefits
- Blog preview section

### Blog Page (`/blog`)

- Searchable blog articles
- Category filtering
- Article cards with images
- Newsletter signup

### Contacts Page (`/contacts`)

- Team member profiles
- Office locations
- Contact form with validation
- Business hours and contact info

### FAQ Page (`/faq`)

- Expandable FAQ items
- Search functionality
- Category filtering
- Contact call-to-action

### About Us Page (`/about-us`)

- Company story and mission
- Team member details
- Company values
- Service highlights

### Thank You Page (`/thank-you`)

- Success confirmation
- Next steps information
- Contact alternatives
- Resource links

## 🎯 Key Features Implementation

### Search Functionality

- Real-time search in Blog and FAQ pages
- Category-based filtering
- Responsive search interface

### Form Handling

- Contact form with validation
- Phone number input with international support
- Form submission simulation
- Success page redirection

### Navigation

- Responsive header with mobile menu
- Active page highlighting
- Smooth transitions

### Interactive Elements

- Expandable FAQ items
- Hover effects on buttons and cards
- Loading states for form submissions
- Smooth animations

## 🔒 Type Safety

The application uses TypeScript for enhanced type safety:

### Interfaces

```typescript
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
}

interface TeamMember {
  id: number;
  name: string;
  position: string;
  email: string;
  phone: string;
  image: string;
  specialties: string[];
}
```

### Component Props

All components have properly typed props for better development experience and error prevention.

## 🎨 Styling Methodology

### Tailwind CSS Classes

The application uses Tailwind CSS utility classes for styling:

```jsx
// Example of Tailwind classes used
className =
  "bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300";
```

### Custom CSS

Minimal custom CSS is used for specific styling needs:

- Global font family
- Custom container widths
- Legacy menu styles

### Responsive Design

Tailwind's responsive prefixes are used extensively:

- `md:` for tablet breakpoints
- `lg:` for desktop breakpoints
- `sm:` for small screen optimizations

## 🚀 Performance Optimizations

- **Code Splitting**: React Router enables automatic code splitting
- **Lazy Loading**: Images and components load as needed
- **Optimized Builds**: Vite provides fast builds and hot module replacement
- **CSS Purge**: Tailwind CSS purges unused styles in production

## 🔧 Development Workflow

1. **Component Development**: Create reusable components with TypeScript
2. **Styling**: Use Tailwind CSS utility classes
3. **Testing**: Manual testing across different screen sizes
4. **Linting**: ESLint ensures code quality
5. **Building**: Vite handles the build process

## 📦 Build and Deployment

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Deployment

The application can be deployed to any static hosting service:

- Vercel
- Netlify
- GitHub Pages
- AWS S3

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions, please contact:

- Email: info@wealthbridge.com
- Phone: +44 20 7123 4567

---

**WealthBridge Financial Consulting** - Building bridges to financial success.
