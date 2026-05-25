import GlassCard from "../ui/GlassCard";

function ResourceCalendar({
  selectedBranch
}) {

  const bookingsData = {

    Madhapur: [

      {
        title: "Morning Standup",
        room: "Room 1",
        user: "TechNova",
        time: "09:00",
        position: "top-16 left-40"
      },

      {
        title: "Investor Meeting",
        room: "Room 2",
        user: "ScaleX",
        time: "11:30",
        position: "top-24 left-[260px]"
      },

      {
        title: "Design Review",
        room: "Desk Area",
        user: "CloudMint",
        time: "03:00",
        position: "top-36 left-[420px]"
      }

    ],

    Gachibowli: [

      {
        title: "Client Demo",
        room: "Room 1",
        user: "ByteBridge",
        time: "10:00",
        position: "top-20 left-[220px]"
      },

      {
        title: "Sales Sync",
        room: "Room 2",
        user: "PixelCraft",
        time: "01:00",
        position: "top-36 left-[400px]"
      }

    ],

    KPHB: [

      {
        title: "Renewal Meeting",
        room: "Room 1",
        user: "NovaEdge",
        time: "09:30",
        position: "top-24 left-[180px]"
      },

      {
        title: "Planning Session",
        room: "Desk Area",
        user: "CloudPeak",
        time: "04:00",
        position: "top-44 left-[360px]"
      }

    ],

    Kondapur: [

      {
        title: "UI Sprint",
        room: "Room 2",
        user: "ScaleX",
        time: "12:00",
        position: "top-24 left-[250px]"
      },

      {
        title: "Workspace Audit",
        room: "Desk Area",
        user: "TechNova",
        time: "05:00",
        position: "top-40 left-[430px]"
      }

    ],

    Himayathnagar: [

      {
        title: "Operations Sync",
        room: "Room 1",
        user: "CloudMint",
        time: "10:30",
        position: "top-24 left-[220px]"
      }

    ]

  };


  const bookings =
    bookingsData[selectedBranch] || [];


  return (

    <GlassCard className="p-5">

      {/* HEADER */}

      <div className="flex items-center justify-between mb-5">

        <div>

          <h2 className="text-lg font-semibold mb-1">

            Workspace Schedule

          </h2>

          <p className="text-gray-400 text-sm">

            Live booking intelligence

          </p>

        </div>


        <button className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/10 text-cyan-400 text-sm">

          Quick Book

        </button>

      </div>



      {/* CALENDAR */}

      <div className="relative h-[340px] rounded-2xl border border-white/5 bg-[#020617] overflow-hidden">

        {/* GRID */}

        <div className="grid grid-cols-6 h-[340px]">

          {/* LEFT LABELS */}

          <div className="border-r border-white/5">

            {["Room 1", "Room 2", "Desk Area"].map((item, index) => (

              <div
                key={index}
                className="h-1/3 border-b border-white/5 flex items-center justify-center text-sm text-gray-400"
              >

                {item}

              </div>

            ))}

          </div>



          {/* DAYS */}

          {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day, index) => (

            <div
              key={index}
              className="border-r border-white/5 relative"
            >

              <div className="h-12 border-b border-white/5 flex items-center justify-center text-xs text-gray-500">

                {day}

              </div>

            </div>

          ))}

        </div>



        {/* BOOKINGS */}

        {bookings.map((booking, index) => (

          <div
            key={index}
            className={`absolute ${booking.position} w-36 rounded-xl bg-cyan-500/10 border border-cyan-500/10 p-3 backdrop-blur-xl`}
          >

            <div className="flex items-center justify-between mb-1">

              <h3 className="text-xs font-medium text-cyan-400 truncate">

                {booking.title}

              </h3>

              <span className="text-[10px] text-gray-400">

                {booking.time}

              </span>

            </div>


            <p className="text-[11px] text-gray-300 mb-1">

              {booking.room}

            </p>

            <p className="text-[10px] text-gray-500 truncate">

              {booking.user}

            </p>

          </div>

        ))}

      </div>

    </GlassCard>

  );
}

export default ResourceCalendar;