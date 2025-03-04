export const applyTheme = () => {
    const isDark = localStorage.getItem("darkMode") === "true";
    document.documentElement.classList.toggle("dark", isDark);
  };
  
  export const toggleTheme = () => {
    localStorage.setItem("darkMode", localStorage.getItem("darkMode") !== "true");
    applyTheme();
  };
  