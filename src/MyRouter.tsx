import {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

const RouterContext = createContext(
  {} as { currentPath: string; setCurrentPath: Dispatch<SetStateAction<string>> },
);

type Route = ReactElement & { props: { path: string; component: ReactNode } };

export const Router = ({ children }: { children: Route | Route[] }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const nodes = children instanceof Array ? [...children] : [children];

  return (
    <RouterContext.Provider value={{ currentPath, setCurrentPath }}>
      {nodes.find((child) => child.props.path === currentPath)}
    </RouterContext.Provider>
  );
};

export const Route = (props: { path: string; component: ReactNode }) => (
  <>{props.component}</>
);

export const useRouter = () => {
  const { setCurrentPath } = useContext(RouterContext);
  const push = (newPath: string) => {
    window.history.pushState({}, '', newPath);
    setCurrentPath(newPath);
  };
  return { push };
};
