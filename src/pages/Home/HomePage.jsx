import ContenuDashboard from "components/Dashboard/ContenuDashboard"
import UserCard from "components/Dashboard/UserCard"
import React from "react"

function HomePage() {
  return (
    <div>
      <div className="">
        <ContenuDashboard />
      </div>
      <div className="mt-5">
        <UserCard />
      </div>
    </div>
  )
}

export default HomePage