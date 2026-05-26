import { useState } from "react"

import {
  Link,
  useSearchParams,
  useNavigate
} from "react-router-dom"

import {
  MapPin,
  Users,
  ArrowRight,
  Search,
  Phone,
  User,
  Building2
} from "lucide-react"

import { branches } from "../../data/branches"

import { createLead } from "../../Api/lead"

import AnimatedContent from "../../../reactbits/Animate"

function BookingsPage() {

  const [searchParams] =
    useSearchParams()

  const navigate =
    useNavigate()

  const initialWorkspace =
    searchParams.get("workspace") || ""

  const [workspaceType, setWorkspaceType] =
    useState(initialWorkspace)

  const [search, setSearch] =
    useState("")

  const [formData, setFormData] =
    useState({

      name: "",

      phone: "",

      workspace:
        initialWorkspace ||
        "Private Cabin"

    })


  /* HANDLE INPUT */

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value

    })

  }


  /* FILTER */

  const filteredBranches =
    branches.filter((branch) => {

      const matchesSearch =
        branch.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )

      const matchesWorkspace =
        workspaceType

          ? branch.pricing.some(
            (item) =>
              item.category ===
              workspaceType
          )

          : true

      return (
        matchesSearch &&
        matchesWorkspace
      )

    })


  /* BOOK */

  const handleBooking =
    async (branch) => {

      try {

        const newLead = {

          name: formData.name,

          phone: formData.phone,

          company:
            "Direct Booking",

          email:
            "Not Provided",

          workspace:
            formData.workspace,

          seats: 4,

          branch:
            branch.name,

          budget:
            "₹50K / month",

          moveIn:
            "Immediate",

          stage: "new",

          priority:
            "Medium"

        }

        await createLead(newLead)

        alert(
          `${branch.name} booking added successfully`
        )

        setFormData({

          name: "",

          phone: "",

          workspace:
            workspaceType ||
            "Private Cabin"

        })

        navigate(
          `/bookings/${branch.slug}`
        )

      } catch (error) {

        console.log(error)

        alert(
          "Failed to create booking"
        )

      }

    }


  return (

    <div className="min-h-screen bg-[#F8FAFC] mt-15">

      {/* HERO */}

      <section className="
        h-[35vh]
        min-h-[320px]

        bg-gradient-to-br
        from-sky-50
        via-white
        to-blue-50

        border-b border-slate-200

        flex items-center
      ">

        <div className="
          max-w-7xl
          mx-auto

          w-full

          px-6 lg:px-12
        ">

          <AnimatedContent
            distance={20}
            duration={0.5}
          >

            <div className="
              max-w-4xl
            ">

              {/* TOP */}

              <div className="
                flex
                flex-col
                lg:flex-row

                lg:items-end
                lg:justify-between

                gap-6
              ">

                {/* LEFT */}

                <div>

                  <div className="
                    inline-flex items-center gap-2

                    px-4 py-2

                    rounded-full

                    bg-white

                    border border-slate-200

                    text-sky-600
                    text-xs
                    font-medium

                    shadow-sm

                    mb-4
                  ">

                    <Building2 size={14} />

                    Workspace Booking

                  </div>


                  <h1 className="
                    text-3xl
                    sm:text-4xl
                    lg:text-5xl

                    leading-[1]

                    tracking-[-0.05em]

                    font-semibold

                    text-[#0F172A]

                    mb-4
                  ">

                    {workspaceType

                      ? `${workspaceType} Workspaces`

                      : "Find your perfect workspace"}

                  </h1>


                  <p className="
                    text-slate-500

                    text-[14px]

                    leading-[1.8]

                    max-w-2xl
                  ">

                    Discover premium coworking spaces
                    for startups, creators,
                    remote teams and modern businesses.

                  </p>

                </div>



                {/* STATS */}

                <div className="
                  flex items-center gap-3
                ">

                  <div className="
                    px-4 py-3

                    rounded-2xl

                    bg-white

                    border border-slate-200

                    shadow-sm
                  ">

                    <p className="
                      text-[10px]

                      uppercase

                      tracking-[0.15em]

                      text-slate-400

                      mb-1
                    ">

                      Locations

                    </p>

                    <h3 className="
                      text-lg

                      font-semibold

                      text-[#0F172A]
                    ">

                      {filteredBranches.length}

                    </h3>

                  </div>



                  <div className="
                    px-4 py-3

                    rounded-2xl

                    bg-white

                    border border-slate-200

                    shadow-sm
                  ">

                    <p className="
                      text-[10px]

                      uppercase

                      tracking-[0.15em]

                      text-slate-400

                      mb-1
                    ">

                      Available

                    </p>

                    <h3 className="
                      text-lg

                      font-semibold

                      text-emerald-600
                    ">

                      Open

                    </h3>

                  </div>

                </div>

              </div>

            </div>

          </AnimatedContent>



          {/* FILTERS */}

          <div className="
            mt-6

            bg-white/90

            backdrop-blur-xl

            border border-slate-200

            rounded-2xl

            shadow-lg

            p-3
          ">

            <div className="
              grid
              grid-cols-1
              lg:grid-cols-4

              gap-3
            ">

              {/* SEARCH */}

              <div className="
                flex items-center gap-3

                h-11

                px-4

                rounded-xl

                bg-slate-50

                border border-slate-100
              ">

                <Search
                  size={15}
                  className="text-slate-400"
                />

                <input
                  type="text"
                  placeholder="Search workspace"
                  value={search}
                  onChange={(e) =>
                    setSearch(
                      e.target.value
                    )
                  }
                  className="
                    w-full

                    bg-transparent

                    outline-none

                    text-[13px]
                  "
                />

              </div>



              {/* TYPE */}

              <select
                value={workspaceType}
                onChange={(e) => {

                  setWorkspaceType(
                    e.target.value
                  )

                  setFormData({

                    ...formData,

                    workspace:
                      e.target.value

                  })

                }}
                className="
                  h-11

                  px-4

                  rounded-xl

                  border border-slate-200

                  outline-none

                  text-[13px]

                  bg-white
                "
              >

                <option value="">
                  Workspace Type
                </option>

                <option value="Private Cabin">
                  Private Cabin
                </option>

                <option value="Meeting Room">
                  Meeting Room
                </option>

                <option value="Day Pass">
                  Day Pass
                </option>

                <option value="Hot Desks">
                  Hot Desks
                </option>

                <option value="Event Space">
                  Event Space
                </option>

              </select>



              {/* NAME */}

              <div className="
                flex items-center gap-3

                h-11

                px-4

                rounded-xl

                bg-slate-50

                border border-slate-100
              ">

                <User
                  size={15}
                  className="text-slate-400"
                />

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="
                    w-full

                    bg-transparent

                    outline-none

                    text-[13px]
                  "
                />

              </div>



              {/* PHONE */}

              <div className="
                flex items-center gap-3

                h-11

                px-4

                rounded-xl

                bg-slate-50

                border border-slate-100
              ">

                <Phone
                  size={15}
                  className="text-slate-400"
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="
                    w-full

                    bg-transparent

                    outline-none

                    text-[13px]
                  "
                />

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* LISTINGS */}

      <section className="py-8">

  <div className="
    max-w-7xl
    mx-auto

    px-6 lg:px-12
  ">

    <div className="
      grid
      grid-cols-1
      sm:grid-cols-2
      xl:grid-cols-3

      gap-4
    ">

      {filteredBranches.map((branch, index) => {

        const selectedPlan =
          workspaceType

            ? branch.pricing.find(
                (item) =>
                  item.category ===
                  workspaceType
              )

            : branch.pricing[0]

        return (

          <AnimatedContent
            key={branch.id}
            distance={15}
            duration={0.45}
            delay={index * 0.03}
          >

            <div
              className="
                group

                bg-white

                border border-slate-200

                rounded-2xl

                overflow-hidden

                transition-all duration-300

                hover:shadow-lg
                hover:border-slate-300
                hover:-translate-y-1
              "
            >

              {/* IMAGE */}

              <div className="
                relative

                h-[190px]

                overflow-hidden
              ">

                <img
                  src={branch.image}
                  alt={branch.name}
                  className="
                    w-full h-full

                    object-cover

                    transition-transform duration-500

                    group-hover:scale-105
                  "
                />


                {/* Overlay */}

                <div className="
                  absolute inset-0

                  bg-gradient-to-t
                  from-black/60
                  via-transparent
                  to-transparent
                "></div>


                {/* Badge */}

                <div className="
                  absolute
                  top-3 left-3

                  px-2.5 py-1

                  rounded-full

                  bg-white/10

                  backdrop-blur-sm

                  text-white
                  text-[10px]
                  font-medium
                ">

                  Premium Workspace

                </div>


                {/* Occupancy */}

                <div className="
                  absolute
                  top-3 right-3

                  px-2.5 py-1

                  rounded-full

                  bg-emerald-500

                  text-white
                  text-[10px]
                  font-medium
                ">

                  {branch.occupancy}% Occupied

                </div>


                {/* Bottom */}

                <div className="
                  absolute
                  bottom-3 left-3 right-3
                ">

                  <h3 className="
                    text-[20px]

                    leading-tight

                    font-semibold

                    text-white

                    mb-1
                  ">

                    {branch.name}

                  </h3>


                  <div className="
                    flex items-center gap-1.5

                    text-white/70
                    text-[11px]
                  ">

                    <MapPin size={12} />

                    Hyderabad

                  </div>

                </div>

              </div>



              {/* CONTENT */}

              <div className="p-4">

                {/* ADDRESS */}

                <p className="
                  text-slate-500

                  text-[13px]

                  leading-[1.6]

                  line-clamp-2

                  min-h-[42px]

                  mb-4
                ">

                  {branch.address}

                </p>



                {/* Amenities */}

                <div className="
                  flex flex-wrap

                  gap-2

                  mb-4
                ">

                  {[
                    "Wifi",
                    "24×7",
                    "Parking",
                  ].map((item, i) => (

                    <div
                      key={i}
                      className="
                        px-2.5 py-1

                        rounded-full

                        bg-slate-100

                        text-[11px]
                        font-medium

                        text-slate-600
                      "
                    >

                      {item}

                    </div>

                  ))}

                </div>



                {/* PRICE */}

                <div className="
                  flex items-end justify-between

                  mb-4
                ">

                  <div>

                    <p className="
                      text-[10px]

                      uppercase

                      tracking-[0.15em]

                      text-slate-400

                      mb-1
                    ">

                      {selectedPlan?.category}

                    </p>

                    <h3 className="
                      text-[22px]

                      font-semibold

                      text-[#0F172A]
                    ">

                      {selectedPlan?.price}

                    </h3>

                  </div>


                  <div className="
                    flex items-center gap-1.5

                    text-[12px]

                    text-slate-500
                  ">

                    <Users size={13} />

                    {branch.availableSeats} Seats

                  </div>

                </div>



                {/* CTA */}

                <Link
                  to={`/bookings/${branch.slug}`}
                  className="
                    h-10

                    w-full

                    rounded-xl

                    bg-sky-500
                    hover:bg-sky-600

                    transition-all duration-300

                    text-white
                    text-[13px]
                    font-medium

                    flex items-center justify-center gap-2
                  "
                >

                  View Workspace

                  <ArrowRight size={14} />

                </Link>

              </div>

            </div>

          </AnimatedContent>

        )

      })}

    </div>

  </div>

</section>

    </div>

  )

}

export default BookingsPage