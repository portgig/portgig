import { JobBoardActions } from '@/components/export_components'
import React from 'react'

const JobDasboardlayout = ({children}:{ children: React.ReactNode }) => {
  return (
    <main className="bodyMargin text-textColor flex flex-col gap-5 my-5 md:pt-5">
      {" "}
      <div className=" lg:hidden ">
        <JobBoardActions />
      </div>
      <div className="flex  ">
        <div className="flex-2/12 max-lg:hidden ">
          <JobBoardActions />
        </div>
        <div className="flex-10/12  lg:mx-5">{children}</div>
      </div>
    </main>
  );
}

export default JobDasboardlayout

