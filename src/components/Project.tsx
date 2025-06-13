// src/components/Project.tsx
import React, { useEffect, useState } from "react";
import { useThemeContext } from "../hooks/useThemeContext";

interface Repo {
  id: number;
  name: string;
  html_url: string;
}

const Project: React.FC = () => {
  const { isLight } = useThemeContext();
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [timestamp, setTimestamp] = useState(Date.now());

  const github_username = "prayogabrd";

  useEffect(() => {
    setTimestamp(Date.now());
  }, [isLight]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://api.github.com/users/${github_username}/repos?per_page=10&sort=pushed&direction=desc`
        );

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.statusText}`);
        }

        const data: Repo[] = await response.json();
        const filteredRepos = data.filter(repo => !repo.fork);

        setRepos(filteredRepos);
      } catch (err: unknown) {
        console.error("Failed to fetch repos:", err);

        if (err instanceof Error) {
          setError(`Error: ${err.message}`);
        } else {
          setError("An unknown error occurred :(");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section className="relative mt-16 text-black dark:text-fuchsia-50 overflow-x-clip transition-cinematic pb-10">
      <div className="mx-8 md:container md:mx-auto">
        <h1 className="text-center text-5xl roboto-semibold opacity-20 mb-10">
          Project
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 lg:gap-x-20">
          <div className="md:bg-gray-400 md:dark:bg-[#111111] md:rounded md:border md:border-[#111111] md:dark:border-purple-50 md:p-5 lg:10 max-h-fit">
            <iframe
              className="w-full aspect-video mb-5"
              src="https://www.youtube-nocookie.com/embed/z8C0dHHWKpk?si=6HPEVPSOsWORCgtN&start=1750&end=2350"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <span className="font-light opacity-30 font-mono ml-1">
              - Date: 24 December 2022
            </span>
          </div>
          <div className="grid grid-cols-1 gap-y-5">
            {loading && <p className="text-center text-lg">Loading...</p>}
            {error && (
              <p className="text-center text-lg text-red-500">{error}</p>
            )}{" "}
            {!loading && !error && repos.length === 0 && (
              <p className="text-center text-lg">No repositories found.</p>
            )}
            {!loading && !error && repos.length > 0 && (
              <>
                {repos.map(repo => (
                  <a
                    key={repo.id}
                    className="block"
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="inline-block w-full"
                      src={`https://github-readme-stats.vercel.app/api/pin/?username=${github_username}&show_owner=true&repo=${repo.name}${!isLight ? "&theme=tokyonight" : ""}&t=${timestamp}`}
                      alt={repo.name}
                    />
                  </a>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
