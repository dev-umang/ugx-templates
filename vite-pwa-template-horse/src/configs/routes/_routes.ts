// List of URL paths that our application supports.
export const Paths = [
  // Root
  "/",
  "/dashboard",
] as const;

export type Path = (typeof Paths)[number]; // Exported type of Paths for auto completion.
