import { useState } from "react";

import {
  Link,
  useSearchParams,
  useNavigate
} from "react-router-dom";

import {
  MapPin,
  Users,
  ArrowRight,
  Search,
  Phone,
  User
} from "lucide-react";

import { branches } from "../../data/branches";

import { createLead } from "../../Api/lead";

function BookingsPage() {

  const [searchParams] =
    useSearchParams();



  const navigate =
    useNavigate();



  const initialWorkspace =
    searchParams.get("workspace") || "";



  const [workspaceType, setWorkspaceType] =
    useState(initialWorkspace);



  const [search, setSearch] =
    useState("");



  const [formData, setFormData] =
    useState({

      name: "",

      phone: "",

      workspace:
        initialWorkspace ||
        "Private Cabin"

    });



  /* ------------------------------------------
     HANDLE INPUT
  ------------------------------------------ */

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value

    });

  };



  /* ------------------------------------------
     FILTER BRANCHES
  ------------------------------------------ */

  const filteredBranches =
    branches.filter((branch) => {

      const matchesSearch =
        branch.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );



      const matchesWorkspace =
        workspaceType

          ? branch.pricing.some(
              (item) =>
                item.category ===
                workspaceType
            )

          : true;



      return (
        matchesSearch &&
        matchesWorkspace
      );

    });



  /* ------------------------------------------
     BOOK NOW
  ------------------------------------------ */

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

        };



        console.log(
          "Creating Lead:",
          newLead
        );



        await createLead(newLead);



        alert(
          `${branch.name} booking added successfully`
        );



        setFormData({

          name: "",

          phone: "",

          workspace:
            workspaceType ||
            "Private Cabin"

        });



        /* REDIRECT */

        navigate(
          `/bookings/${branch.slug}`
        );

      } catch (error) {

        console.log(error);



        alert(
          "Failed to create booking"
        );

      }

    };



  return (

    <div className="bg-[#FAFAFA] min-h-screen">

      {/* HERO */}

      <section className="bg-white border-b border-slate-100 pt-28 pb-16">

        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="max-w-3xl">

            <p className="text-sky-500 text-[11px] tracking-[0.25em] uppercase font-medium mb-5">

              Workspace Booking

            </p>



            <h1 className="text-[54px] leading-[1] tracking-[-0.05em] font-semibold text-[#0F172A] mb-6">

              {workspaceType

                ? `${workspaceType} Workspaces`

                : "Find your perfect coworking workspace."}

            </h1>



            <p className="text-slate-500 text-[16px] leading-[1.9] max-w-2xl">

              Discover premium coworking spaces across Hyderabad.

            </p>

          </div>



          {/* FILTERS */}

          <div className="mt-10 bg-white border border-slate-200 rounded-[28px] p-4">

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">

              {/* SEARCH */}

              <div className="flex items-center gap-3 h-13 px-5 rounded-2xl bg-slate-50 border border-slate-100">

                <Search
                  size={18}
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
                  className="w-full bg-transparent outline-none text-[14px]"
                />

              </div>



              {/* TYPE */}

              <select
                value={workspaceType}
                onChange={(e) => {

                  setWorkspaceType(
                    e.target.value
                  );



                  setFormData({

                    ...formData,

                    workspace:
                      e.target.value

                  });

                }}
                className="h-13 px-5 rounded-2xl border border-slate-200 outline-none text-[14px]"
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

              <div className="flex items-center gap-3 h-13 px-5 rounded-2xl bg-slate-50 border border-slate-100">

                <User
                  size={18}
                  className="text-slate-400"
                />



                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none text-[14px]"
                />

              </div>



              {/* PHONE */}

              <div className="flex items-center gap-3 h-13 px-5 rounded-2xl bg-slate-50 border border-slate-100">

                <Phone
                  size={18}
                  className="text-slate-400"
                />



                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none text-[14px]"
                />

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* GRID */}

      <section className="py-14">

        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

            {filteredBranches.map((branch) => {

              const selectedPlan =
                workspaceType

                  ? branch.pricing.find(
                      (item) =>
                        item.category ===
                        workspaceType
                    )

                  : branch.pricing[0];



              return (

                <div
                  key={branch.id}
                  className="bg-white border border-slate-200 rounded-[28px] overflow-hidden hover:shadow-[0_16px_40px_rgba(15,23,42,0.05)] transition duration-300"
                >

                  {/* IMAGE */}

                  <div className="relative h-[220px] overflow-hidden">

                    <img
                      src={branch.image}
                      alt={branch.name}
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    />



                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent"></div>



                    <div className="absolute bottom-4 left-4">

                      <p className="text-white/70 text-[11px] mb-1 flex items-center gap-2">

                        <MapPin size={12} />

                        Hyderabad

                      </p>



                      <h3 className="text-[26px] leading-tight font-semibold text-white">

                        {branch.name}

                      </h3>

                    </div>

                  </div>



                  {/* CONTENT */}

                  <div className="p-5">

                    <p className="text-slate-500 text-[13px] leading-[1.7] mb-5 line-clamp-2">

                      {branch.address}

                    </p>



                    {/* PRICE */}

                    <div className="grid grid-cols-2 gap-3 mb-5">

                      <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">

                        <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400 mb-2">

                          {selectedPlan?.category}

                        </p>



                        <h3 className="text-[20px] font-semibold text-[#0F172A]">

                          {selectedPlan?.price}

                        </h3>

                      </div>



                      <div className="bg-sky-50 rounded-2xl p-4 border border-sky-100">

                        <p className="text-[10px] uppercase tracking-[0.18em] text-sky-500 mb-2">

                          Occupancy

                        </p>



                        <h3 className="text-[20px] font-semibold text-sky-600">

                          {branch.occupancy}%

                        </h3>

                      </div>

                    </div>



                    {/* STATS */}

                    <div className="flex items-center justify-between text-[13px] text-slate-500 mb-6">

                      <div className="flex items-center gap-2">

                        <Users size={15} />

                        {branch.availableSeats} Seats Left

                      </div>



                      <div className="text-emerald-500 font-medium">

                        {branch.activeClients}+ Clients

                      </div>

                    </div>



                    {/* BUTTONS */}

                    <div className="flex items-center gap-3">

                      <Link
                        // onClick={() =>
                        //   handleBooking(branch)
                        // }
                         to={`/bookings/${branch.slug}`}
                        className="flex-1 h-11 rounded-2xl bg-sky-500 hover:bg-sky-600 transition text-white text-[13px] font-medium flex items-center justify-center gap-2"
                      >

                        Book Now

                        <ArrowRight size={15} />

                      </Link>



                      <Link
                        to={`/bookings/${branch.slug}`}
                        className="h-11 px-4 rounded-2xl border border-slate-200 hover:border-sky-200 hover:bg-sky-50 transition text-[13px] font-medium text-[#0F172A] flex items-center justify-center"
                      >

                        Details

                      </Link>

                    </div>

                  </div>

                </div>

              );

            })}

          </div>

        </div>

      </section>

    </div>

  );

}

export default BookingsPage;