import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { type Path } from "@configs/routes";

type URLProps = {
  slug?: (string | number | undefined | null)[]; // appends the slug path in the given url
  params?: (string | number | undefined | null)[]; // appends the search params in the URL
  replace?: boolean; // replaces the url from stack
  state?: Record<string, unknown>;
};

const useNav = () => {
  const navigate = useNavigate();

  // Returns the URL with extra slug and params if available
  const getUrl = (path: Path, props?: URLProps) => {
    let url = path;
    for (const s of props?.slug ?? []) url += `/${s}`; // Append slug such as /first/second/third
    if (props?.params) {
      url += "?";
      for (const p of props.params) url += `${p}&`; // Append the search params such as ?first=value&second=value&
    }
    return url; // URL to navigate
  };

  // Actual navigation method which takes PreDefined Path name as argument and other props
  const nav = useCallback(
    (path: Path, props?: URLProps) =>
      navigate(getUrl(path, props), {
        replace: props?.replace ?? false,
        state: props?.state,
      }), // navigate to the generated url
    [navigate]
  );

  return nav;
};

export default useNav;
