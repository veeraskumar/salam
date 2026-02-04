import type { ReactNode } from "react";

type linkType = {
  child: ReactNode;
  href: string;
  style?: string;
};

export default function Info() {
  const links: linkType[] = [
    {
      child: (
        <>
          LinkedIn{" "}
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            height="30"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
          </svg>
        </>
      ),
      href: "https://www.linkedin.com/in/abdul-salam-h-m-236629221",
      style: "rounded-tr-md",
    },
    {
      child: (
        <>
          Email{" "}
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
            height="30"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
        </>
      ),
      href: "mailto:abdulsalam250502@gmail.com",
    },
    {
      child: (
        <>
          Behance{" "}
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            height="30"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M186.5 293c0 19.3-14 25.4-31.2 25.4h-45.1v-52.9h46c18.6.1 30.3 7.8 30.3 27.5zm-7.7-82.3c0-17.7-13.7-21.9-28.9-21.9h-39.6v44.8H153c15.1 0 25.8-6.6 25.8-22.9zm132.3 23.2c-18.3 0-30.5 11.4-31.7 29.7h62.2c-1.7-18.5-11.3-29.7-30.5-29.7zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zM271.7 185h77.8v-18.9h-77.8V185zm-43 110.3c0-24.1-11.4-44.9-35-51.6 17.2-8.2 26.2-17.7 26.2-37 0-38.2-28.5-47.5-61.4-47.5H68v192h93.1c34.9-.2 67.6-16.9 67.6-55.9zM380 280.5c0-41.1-24.1-75.4-67.6-75.4-42.4 0-71.1 31.8-71.1 73.6 0 43.3 27.3 73 71.1 73 33.2 0 54.7-14.9 65.1-46.8h-33.7c-3.7 11.9-18.6 18.1-30.2 18.1-22.4 0-34.1-13.1-34.1-35.3h100.2c.1-2.3.3-4.8.3-7.2z"></path>
          </svg>
        </>
      ),
      href: "https://www.behance.net/salamsalam40",
      style: "rounded-br-md",
    },
  ];
  return (
    <aside className={"not-sm:hidden lg:flex flex-col top-[35%] left-0 fixed"}>
      <ul>
        {links.map((list, i) => (
          <li
            className={
              "flex justify-between items-center w-40 h-14 px-4 bg-black ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 hover:bg-gray-700" +
              " " +
              list.style
            }
            key={i}
          >
            <a
              href={list.href}
              className="flex justify-between items-center text-white w-full"
              target="_blank"
              rel="noreferrer"
            >
              {list.child}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
