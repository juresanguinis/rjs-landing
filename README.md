# **Jure Sanguinis Landing Page**

[![Test Build](https://github.com/juresanguinis/rjs-landing/actions/workflows/node.js.yml/badge.svg)](https://github.com/juresanguinis/rjs-landing/actions/workflows/node.js.yml)  
[![PageSpeed Insights - Mobile](https://img.shields.io/badge/Google%20Pagespeed-Mobile-blue)](https://pagespeed.web.dev/analysis/https-www-rjuresanguinis-com/eca0mq4onz?form_factor=mobile)  
[![PageSpeed Insights - Desktop](https://img.shields.io/badge/Google%20Pagespeed-Desktop-green)](https://pagespeed.web.dev/analysis/https-www-rjuresanguinis-com/eca0mq4onz?form_factor=desktop)

> **Production URL**: [rjuresanguinis.com](https://www.rjuresanguinis.com/)  
> **Repository**: [GitHub](https://github.com/juresanguinis/rjs-landing)  
> **Deployment**: AWS Amplify  
> **Contact**: Moderators Team of [r/juresanguinis](https://www.reddit.com/r/juresanguinis/)  

## **About This Project**
This is the official landing page for the **Jure Sanguinis subreddit**, a community that helps individuals obtain **Italian citizenship by descent**. The website is designed for accessibility, interactivity, and **SEO optimization**, ensuring a smooth user experience while providing essential resources and guidance.

## **🚀 Getting Started**
### **Development Setup**
To run the project locally:

```bash
npm install
npm run dev
```

Then visit **`http://localhost:3000`** in your browser.

### **Build for Production**
```bash
npm run build
```

## **🔹 Tech Stack**
- **Framework**: Next.js 14
- **Styling**: Tailwind CSS + ShadCN
- **Animations**: Framer Motion
- **State Management**: React Hook State
- **Authentication**: NextAuth.js (if applicable)
- **Deployment**: AWS Amplify
- **CI/CD**: GitHub Actions

---

## **📁 Project File Structure**
A **general overview** of the project’s structure:

```
/public              → Public assets (icons, images, etc.)
/src
  ├── /app          → App folder containing routes & pages
  │   ├── /about-js → About page
  │   ├── /community → Community discussions
  │   ├── /faq      → FAQ section
  │   ├── /help     → Help page
  │   ├── /news     → News & Updates
  │   ├── /resources → Useful tools & guides
  │   ├── /tracker  → Jure Sanguinis tracker (WIP)
  ├── /assets       → Private assets for UI components
  ├── /components   → Reusable UI components
  │   ├── /navbar   → Desktop & mobile navigation
  │   ├── /footer   → Footer component
  │   ├── /reddit   → Embeds for Reddit posts
  │   ├── /skeleton → Loading placeholders using ShadCN
  ├── /pages-sections → Sections for each route
  ├── /lib          → Utility functions & middleware
  ├── /types        → TypeScript interfaces
  ├── /utils
  │   ├── /constants → Global constants
  │   ├── /__api__   → API calls (if applicable)
```

---

## **📊 Performance & SEO Tracking**
### **Google PageSpeed Insights**
🚀 **We actively monitor our page speed performance** for both **Mobile** and **Desktop**.  

- **Mobile**: [View Performance Report](https://pagespeed.web.dev/analysis/https-www-rjuresanguinis-com/eca0mq4onz?form_factor=mobile)  
- **Desktop**: [View Performance Report](https://pagespeed.web.dev/analysis/https-www-rjuresanguinis-com/eca0mq4onz?form_factor=desktop)

---

## **✅ GitHub Actions (CI/CD)**
This repository has a **GitHub Action** that runs automated tests and build verification on every:
- **Commit to `main` and `develop`**
- **Pull Request to `main` and `develop`**

**Test Build Action Status:**  
[![Test Build](https://github.com/juresanguinis/rjs-landing/actions/workflows/node.js.yml/badge.svg)](https://github.com/juresanguinis/rjs-landing/actions/workflows/node.js.yml)  

---

## **🛠️ Work In Progress (WIP)**
These are the **features currently under development**:

- **📰 Finish the News Section** - Implement structured content for community updates.
- **📊 Develop the Tracker App** - Build a tool to track Jure Sanguinis application progress.

---

## **🗓️ Monthly Maintenance**
Keep the site current with the checklist in [THINGS_TO_UPDATE_EVERY_MONTH.md](THINGS_TO_UPDATE_EVERY_MONTH.md).

---

## **📜 License**
This project is **open-source** and follows an appropriate license for contribution. See the `LICENSE` file for more details.

---

### **💡 Want to Contribute?**
We welcome contributions! If you have suggestions or want to improve the project:
1. Fork the repository
2. Create a new branch (`feature/new-feature`)
3. Commit your changes
4. Open a **Pull Request**

For questions or discussions, contact the **Moderators Team** at [r/juresanguinis](https://www.reddit.com/r/juresanguinis/).

---

### **🔹 Summary of Improvements**
✅ **Better Introduction** - Describes the purpose of the project.  
✅ **Project Structure Overview** - Gives clarity without listing every file.  
✅ **Performance Tracking** - Displays Google PageSpeed Insights reports.  
✅ **CI/CD Information** - Shows GitHub Actions build status.  
✅ **Work In Progress Features** - Keeps track of ongoing developments.  
