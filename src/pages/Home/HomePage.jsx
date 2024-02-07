import ContenuDashboard from "components/Dashboard/ContenuDashboard"
import Footer from "components/Dashboard/Footer"
import UserCard from "components/Dashboard/UserCard"
import React from "react"

function HomePage() {
  return (
    <div className="p-4">
      <div className="">
        <ContenuDashboard />
      </div>
      <div className="mt-5">
        <UserCard />
        <div className="mt-5">
        <Footer />
      </div>
      </div>
    </div>
  )
}

export default HomePage