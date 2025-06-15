// src/components/Project.tsx
import React, { useEffect, useState } from "react";
import { useThemeContext } from "../hooks/useThemeContext";
import FontAwesomeIcon from "../assets/fontawesome@6.7.2/";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
}

const Project: React.FC = () => {
  const { isLight } = useThemeContext();
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const github_username = "prayogabrd";

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
  }, [isLight, github_username]);

  return (
    <section className="relative mt-16 py-10 px-4 md:px-0 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="md:container md:mx-auto">
        <h1 className="text-center text-4xl md:text-5xl font-extrabold mb-12 text-gray-900 dark:text-gray-100 opacity-90">
          PROJECTS
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14">
          {/* YouTube Video Section */}
          <div className="flex flex-col bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Featured Showcase
            </h2>
            <div className="relative w-full aspect-video mb-4 rounded-md overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/z8C0dHHWKpk?si=6HPEVPSOsWORCgtN&start=1750&end=2350"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">
              - Date: 24 December 2022
            </p>
            <p className="text-base mt-2 text-gray-700 dark:text-gray-300">
              An older project showcasing specific skills or a significant
              milestone. Provides a quick visual overview of past work.
            </p>
          </div>

          {/* GitHub Repositories Section */}
          <div className="grid grid-cols-1 gap-6">
            {loading && (
              <p className="text-center text-lg text-gray-700 dark:text-gray-300">
                Loading repositories...
              </p>
            )}
            {error && (
              <p className="text-center text-lg text-red-500 dark:text-red-400">
                {error}
              </p>
            )}{" "}
            {!loading && !error && repos.length === 0 && (
              <p className="text-center text-lg text-gray-700 dark:text-gray-300">
                No public repositories found.
              </p>
            )}
            {!loading && !error && repos.length > 0 && (
              <>
                {repos.map(repo => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl dark:hover:shadow-2xl hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-200 p-4 md:p-5 flex flex-col gap-y-2"
                  >
                    <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400">
                      {repo.name.replace(/-/g, " ")}{" "}
                      {/* Optional: Make names more readable */}
                    </h3>
                    {repo.description && (
                      <p className="text-sm text-gray-700 dark:text-gray-300 flex-grow">
                        {repo.description}
                      </p>
                    )}
                    <div className="flex items-center text-xs text-gray-600 dark:text-gray-400 mt-2">
                      {repo.language && (
                        <span className="mr-3 flex items-center">
                          <FontAwesomeIcon
                            icon="fa-solid fa-code mr-1 text-base"
                          />{" "}
                          {repo.language}
                        </span>
                      )}
                      <span className="mr-3 flex items-center">
                        <FontAwesomeIcon
                          icon="fa-solid fa-star mr-1 text-base"
                        />{" "}
                        {repo.stargazers_count}
                      </span>
                      <span className="flex items-center">
                        <FontAwesomeIcon
                          icon="fa-solid fa-code-fork mr-1 text-base"
                        />{" "}
                        {repo.forks_count}
                      </span>
                    </div>
                  </a>
                ))}
              </>
            )}
            {/* Link to all GitHub repos */}
            {!loading && !error && (
              <div className="text-center mt-8">
                <a
                  href={`https://github.com/${github_username}?tab=repositories`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 shadow-sm transition-colors duration-200"
                >
                  View All GitHub Repositories
                  <FontAwesomeIcon
                    icon="fa-solid fa-arrow-right ml-2 mr-1"
                  />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
