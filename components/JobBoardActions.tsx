"use client";
import Link from "next/link";
import React from "react";
import { Buttons } from "./export_components";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";
const JobBoardActions = () => {
  const navigate = useRouter();
  const pathname = usePathname();
  const [showSidebar, setShowSidebar] = React.useState(false);

  const DashboardHeadings = [
    {
      label: "Profile & Account",
      link: "",
      items: [],
    },
    {
      label: "Job Posting",
      link: "",
      items: [
        { itemLabel: "Graphic Design", path: "/${itemLabel}" },
        { itemLabel: "Social Media Manager", path: "/${itemLabel}" },
        { itemLabel: "Video Editor", path: "/${itemLabel}b" },
      ],
    },
    {
      label: "Job Posted",
      link: "",
      items: [
        { itemLabel: "Create new job", path: "/post-new-job" },
        { itemLabel: "Active jobs", path: "/active-jobs" },
      ],
    },
    {
      label: "Applicants",
      link: "",
      items: [
        {
          itemLabel: "Shortlisted candidates",
          path: "/shortlisted-candidate",
        },
        {
          itemLabel: "Selected candidates",
          path: "/selected-candidate",
        },
      ],
    },
    {
      label: "Analytic & Merics",
      link: "",
      items: [
        {
          itemLabel: "New Applicants",
          path: "/new-applicant",
        },
        {
          itemLabel: "Job Performance",
          path: "/job-performance",
        },
      ],
    },
    {
      label: "Message",
      link: "",
      items: [],
    },
    {
      label: "Help & Support",
      link: "",
      items: [],
    },
  ];

  return (
    <main className="relative flex  min-h-screen flex-col ">
      <div className="relative min-h-screen">
        <Buttons
          label="Menu"
          className="lg:hidden text-xl  w-fit p-2 text-white !bg-primary "
          onClick={() => setShowSidebar((prev) => !prev)}
        />
        <aside
          className={`bg-primary h-full fixed top-0 left-0 w-64 transform transition-transform duration-300 z-50 text-white p-4 flex-col gap-5
          ${showSidebar ? "translate-x-0 fixed" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:flex lg:w-full lg:h-full`}>
          {DashboardHeadings.map((heading, index) => (
            <div key={index} className="">
              <Link href={""}>
                <h2 className="text-center font-bold text-sm   ">
                  {heading.label}
                </h2>
              </Link>
              <hr className="border-t border-white mx-3 " />
              <ul className="space-y-[2px]">
                {heading.items.map((item, index) => (
                  <li key={index} className="text-center">
                    {" "}
                    <Buttons
                      label={item.itemLabel}
                      className={clsx(
                        "!bg-primary text-[10px] !rounded-none",
                        pathname === item.path && "!bg-secondary"
                      )}
                      onClick={() => {
                        navigate.push(item.path);
                        setShowSidebar((prev) => !prev);
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>
        {showSidebar && (
          <div
            className="fixed inset-0 z-40  bg-opacity-30 lg:hidden"
            onClick={() => setShowSidebar(false)}
          />
        )}
      </div>
    </main>
  );
};

export default JobBoardActions;
