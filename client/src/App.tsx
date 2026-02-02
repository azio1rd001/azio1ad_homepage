import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";
import Advertiser from "./pages/Advertiser";
import MediaOwner from "./pages/MediaOwner";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Features from "./pages/Features";
import CaseStudies from "./pages/CaseStudies";
import GetStarted from "./pages/GetStarted";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/solutions/advertiser"} component={Advertiser} />
      <Route path={"/solutions/media-owner"} component={MediaOwner} />
      <Route path={"/pricing"} component={Pricing} />
      <Route path={"/about"} component={About} />
      <Route path={"/features"} component={Features} />
      <Route path={"/case-studies"} component={CaseStudies} />
      <Route path={"/get-started"} component={GetStarted} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
