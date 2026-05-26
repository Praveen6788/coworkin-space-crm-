import { useMemo } from "react";

import { branches } from "../../data/branches";

import {
  Monitor,
  Coffee,
  DoorOpen,
  Wifi,
  CheckCircle2,
  Users,
  Building2,
  Presentation,
  Armchair
} from "lucide-react";

function FloorMap() {

  /* ---------------------------------------------
     TEMP ACTIVE BRANCH
  --------------------------------------------- */

  const branch = branches[0];



  /* ---------------------------------------------
     SAFE FALLBACK
  --------------------------------------------- */

  if (!branch) {

    return (

      <div className="bg-[#020617] border border-white/10 rounded-[32px] p-10 min-h-[500px] flex items-center justify-center ">

        <div className="text-center">

          <h3 className="text-[24px] font-semibold text-white mb-3">

            No Branch Selected

          </h3>



          <p className="text-slate-400 text-sm">

            Please select a branch to view floor analytics.

          </p>

        </div>

      </div>

    );

  }



  /* ---------------------------------------------
     DYNAMIC DATA
  --------------------------------------------- */

  const floorData = useMemo(() => {

    const totalSeats = branch.totalSeats || 100;

    const occupiedSeats =
      Math.floor((branch.occupancy / 100) * totalSeats);

    const availableSeats =
      totalSeats - occupiedSeats;



    return {

      occupiedSeats,

      availableSeats,



      cabins: [

        {
          name: "Cabin A1",
          seats: 4,
          occupied: true
        },

        {
          name: "Cabin A2",
          seats: 6,
          occupied: true
        },

        {
          name: "Cabin B1",
          seats: 8,
          occupied: false
        },

        {
          name: "Cabin B2",
          seats: 10,
          occupied: false
        }

      ],



      meetingRooms: [

        {
          name: "Orion Room",
          capacity: 8,
          available: true
        },

        {
          name: "Zenith Room",
          capacity: 12,
          available: false
        }

      ]

    };

  }, [branch]);



  return (

    <div className="bg-[#020617] border border-white/10  p-7 mt-15">

      {/* HEADER */}

      <div className="flex items-start justify-between mb-8">

        <div>

          <p className="text-sky-400 text-[11px] tracking-[0.25em] uppercase font-medium mb-3">

            Workspace Layout

          </p>



          <h2 className="text-[34px] leading-tight font-semibold text-white mb-2">

            {branch.name} Floor Map

          </h2>



          <p className="text-slate-400 text-[14px] max-w-xl leading-[1.8]">

            Real-time workspace occupancy,
            cabin utilization and desk analytics.

          </p>

        </div>



        <div className="flex items-center gap-2 px-4 h-11 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">

          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>

          <span className="text-[13px] font-medium text-emerald-300">

            Live Data

          </span>

        </div>

      </div>



      {/* KPI STATS */}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

          <p className="text-slate-500 text-[11px] uppercase tracking-[0.18em] mb-2">

            Total Seats

          </p>



          <h3 className="text-[30px] font-semibold text-white">

            {branch.totalSeats}

          </h3>

        </div>



        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5">

          <p className="text-emerald-300 text-[11px] uppercase tracking-[0.18em] mb-2">

            Occupied

          </p>



          <h3 className="text-[30px] font-semibold text-emerald-200">

            {floorData.occupiedSeats}

          </h3>

        </div>



        <div className="rounded-2xl border border-sky-500/20 bg-sky-500/10 p-5">

          <p className="text-sky-300 text-[11px] uppercase tracking-[0.18em] mb-2">

            Available

          </p>



          <h3 className="text-[30px] font-semibold text-sky-200">

            {floorData.availableSeats}

          </h3>

        </div>



        <div className="rounded-2xl border border-violet-500/20 bg-violet-500/10 p-5">

          <p className="text-violet-300 text-[11px] uppercase tracking-[0.18em] mb-2">

            Occupancy

          </p>



          <h3 className="text-[30px] font-semibold text-violet-200">

            {branch.occupancy}%

          </h3>

        </div>

      </div>



      {/* FLOOR MAP */}

      <div className="bg-[#0F172A] border border-white/10 rounded-[30px] p-7">

        {/* TOP */}

        <div className="flex items-center justify-between mb-7">

          <h3 className="text-[22px] font-semibold text-white">

            Interactive Workspace Layout

          </h3>



          {/* LEGENDS */}

          <div className="flex flex-wrap items-center gap-5 text-[13px]">

            <div className="flex items-center gap-2 text-slate-300">

              <div className="w-3 h-3 rounded-full bg-sky-500"></div>

              Private Cabins

            </div>



            <div className="flex items-center gap-2 text-slate-300">

              <div className="w-3 h-3 rounded-full bg-violet-500"></div>

              Meeting Rooms

            </div>



            <div className="flex items-center gap-2 text-slate-300">

              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>

              Hot Desks

            </div>



            <div className="flex items-center gap-2 text-slate-300">

              <div className="w-3 h-3 rounded-full bg-amber-500"></div>

              Lounge Area

            </div>

          </div>

        </div>



        {/* MAP GRID */}

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

          {/* LEFT MAP */}

          <div className="xl:col-span-2">

            <div className="relative bg-[#020617] border border-white/10 rounded-[32px] p-8 h-[650px] overflow-hidden">

              {/* RECEPTION */}

              <div className="absolute top-6 left-6 w-[190px] h-[100px] rounded-[28px] bg-slate-900 border border-white/10 flex flex-col items-center justify-center">

                <DoorOpen size={24} className="text-white mb-2" />



                <span className="text-sm font-medium text-white">

                  Reception

                </span>

              </div>



              {/* LOUNGE */}

              <div className="absolute top-6 right-6 w-[180px] h-[100px] rounded-[28px] bg-amber-500/10 border border-amber-500/20 flex flex-col items-center justify-center">

                <Coffee size={22} className="text-amber-300 mb-2" />



                <span className="text-sm font-medium text-amber-200">

                  Lounge Area

                </span>

              </div>



              {/* PRIVATE CABINS */}

              <div className="absolute top-[170px] left-6 grid grid-cols-2 gap-5">

                {floorData.cabins.map((cabin, index) => (

                  <div
                    key={index}
                    className={`w-[190px] h-[130px] rounded-[30px] border flex flex-col items-center justify-center transition ${cabin.occupied
                        ? "bg-sky-500/10 border-sky-500/20"
                        : "bg-sky-500/5 border-sky-500/10"
                      }`}
                  >

                    <Building2
                      size={24}
                      className="text-sky-300"
                    />



                    <h4 className="mt-3 text-[16px] font-semibold text-white">

                      {cabin.name}

                    </h4>



                    <p className="text-[12px] text-slate-400 mt-1">

                      {cabin.seats} Seats

                    </p>

                  </div>

                ))}

              </div>



              {/* MEETING ROOM */}

              <div className="absolute top-[470px] left-6 w-[400px] h-[140px] rounded-[32px] bg-violet-500/10 border border-violet-500/20 flex flex-col items-center justify-center">

                <Presentation
                  size={28}
                  className="text-violet-300 mb-3"
                />



                <h3 className="text-[18px] font-semibold text-white mb-1">

                  Meeting Zone

                </h3>



                <p className="text-[13px] text-slate-400">

                  2 Conference Rooms

                </p>

              </div>



              {/* HOT DESK */}

              <div className="absolute top-[170px] right-6 w-[260px] h-[440px] rounded-[32px] bg-emerald-500/10 border border-emerald-500/20 p-5">

                <div className="flex items-center justify-between mb-5">

                  <div>

                    <h3 className="text-[18px] font-semibold text-white">

                      Hot Desk Area

                    </h3>



                    <p className="text-[12px] text-slate-400">

                      Flexible Seating

                    </p>

                  </div>



                  <Wifi
                    size={20}
                    className="text-emerald-300"
                  />

                </div>



                <div className="grid grid-cols-4 gap-3">

                  {Array.from({ length: 24 }).map((_, index) => {

                    const occupied =
                      index <
                      floorData.occupiedSeats / 5;



                    return (

                      <div
                        key={index}
                        className={`h-12 rounded-xl flex items-center justify-center ${occupied
                            ? "bg-emerald-500"
                            : "bg-emerald-500/20 border border-emerald-500/20"
                          }`}
                      >

                        <Armchair
                          size={16}
                          className="text-white"
                        />

                      </div>

                    );

                  })}

                </div>

              </div>

            </div>

          </div>



          {/* RIGHT SIDEBAR */}

          <div className="space-y-5">

            {/* MEETING ROOMS */}

            <div className="bg-[#020617] border border-white/10 rounded-[28px] p-6">

              <h3 className="text-[20px] font-semibold text-white mb-5">

                Meeting Rooms

              </h3>



              <div className="space-y-4">

                {floorData.meetingRooms.map((room, index) => (

                  <div
                    key={index}
                    className="flex items-center justify-between border border-white/5 bg-white/[0.03] rounded-2xl p-4"
                  >

                    <div>

                      <h4 className="text-[15px] font-medium text-white mb-1">

                        {room.name}

                      </h4>



                      <p className="text-[12px] text-slate-400">

                        Capacity {room.capacity}

                      </p>

                    </div>



                    <div
                      className={`px-3 h-9 rounded-full flex items-center text-[12px] font-medium ${room.available
                          ? "bg-sky-500/10 text-sky-300"
                          : "bg-emerald-500/10 text-emerald-300"
                        }`}
                    >

                      {room.available
                        ? "Available"
                        : "Occupied"}

                    </div>

                  </div>

                ))}

              </div>

            </div>



            {/* INSIGHTS */}

            <div className="bg-gradient-to-br from-sky-500/10 to-violet-500/10 border border-white/10 rounded-[28px] p-6">

              <h3 className="text-[22px] font-semibold text-white mb-6">

                Workspace Insights

              </h3>



              <div className="space-y-5">

                <div className="flex items-center justify-between">

                  <span className="text-slate-400 text-sm">

                    Active Clients

                  </span>



                  <span className="text-lg font-semibold text-white">

                    {branch.activeClients}

                  </span>

                </div>



                <div className="flex items-center justify-between">

                  <span className="text-slate-400 text-sm">

                    Available Seats

                  </span>



                  <span className="text-lg font-semibold text-white">

                    {branch.availableSeats}

                  </span>

                </div>



                <div className="flex items-center justify-between">

                  <span className="text-slate-400 text-sm">

                    Renewals Due

                  </span>



                  <span className="text-lg font-semibold text-white">

                    {branch.renewalsDue}

                  </span>

                </div>



                <div className="pt-5 border-t border-white/10">

                  <div className="flex items-center gap-3">

                    <CheckCircle2
                      size={20}
                      className="text-emerald-400"
                    />



                    <span className="text-sm text-slate-300">

                      Real-time branch monitoring enabled

                    </span>

                  </div>

                </div>

              </div>

            </div>



            {/* UTILIZATION */}

            <div className="bg-[#020617] border border-white/10 rounded-[28px] p-6">

              <div className="flex items-center gap-3 mb-5">

                <Users size={22} className="text-sky-400" />



                <h3 className="text-[18px] font-semibold text-white">

                  Space Utilization

                </h3>

              </div>



              <div className="space-y-5">

                <div>

                  <div className="flex items-center justify-between mb-2">

                    <span className="text-[13px] text-slate-400">

                      Private Cabins

                    </span>



                    <span className="text-[13px] text-white">

                      82%

                    </span>

                  </div>



                  <div className="h-2 rounded-full bg-white/5 overflow-hidden">

                    <div className="w-[82%] h-full bg-sky-500 rounded-full"></div>

                  </div>

                </div>



                <div>

                  <div className="flex items-center justify-between mb-2">

                    <span className="text-[13px] text-slate-400">

                      Meeting Rooms

                    </span>



                    <span className="text-[13px] text-white">

                      64%

                    </span>

                  </div>



                  <div className="h-2 rounded-full bg-white/5 overflow-hidden">

                    <div className="w-[64%] h-full bg-violet-500 rounded-full"></div>

                  </div>

                </div>



                <div>

                  <div className="flex items-center justify-between mb-2">

                    <span className="text-[13px] text-slate-400">

                      Hot Desks

                    </span>



                    <span className="text-[13px] text-white">

                      91%

                    </span>

                  </div>



                  <div className="h-2 rounded-full bg-white/5 overflow-hidden">

                    <div className="w-[91%] h-full bg-emerald-500 rounded-full"></div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default FloorMap;