import { createContext, useContext, useState, useEffect, useCallback } from "react";

const RouterContext = createContext();

export function Router({ children }) {
  const getPath = () => window.location.pathname || "/";
  const [path, setPath] = useState(getPath);

  useEffect(() => {
    const onPop = () => setPath(getPath());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const navigate = useCallback((to) => {
    window.history.pushState({}, "", to);
    setPath(to);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}

export function Link({ to, children, className, onClick, style }) {
  const { navigate } = useRouter();
  return (
    <a
      href={to}
      className={className}
      style={style}
      onClick={(e) => {
        e.preventDefault();
        if (onClick) onClick();
        navigate(to);
      }}
    >
      {children}
    </a>
  );
}

export function useLocation() {
  const { path } = useRouter();
  return { pathname: path };
}

export function Routes({ children }) {
  const { path } = useRouter();
  const arr = Array.isArray(children) ? children : [children];
  const match = arr.find((c) => c.props.path === path) || arr.find((c) => c.props.path === "*");
  return match ? match.props.element : null;
}

export function Route({ path, element }) {
  return null;
}