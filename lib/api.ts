const API_BASE_URL = process.env.REACT_APP_API_URL;

export type AboutMe = {
  response: string;
};

export type ApiProject = {
  _id: string;
  title: string;
  description: string;
  image: string;
  url: string;
};

async function fetchJson<T>(path: string, fallback: T): Promise<T> {
  try {
    const res = await fetch(`${API_BASE_URL}${path}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error(`${path} responded ${res.status}`);
    return (await res.json()) as T;
  } catch (error) {
    console.error(`[api] falling back for ${path}:`, error);
    return fallback;
  }
}

export function getAboutMe() {
  return fetchJson<AboutMe>("about-me", { response: "" });
}

export function getProjects() {
  return fetchJson<ApiProject[]>("projects", []);
}
