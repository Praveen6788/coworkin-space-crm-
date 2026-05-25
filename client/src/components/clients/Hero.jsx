import React from 'react'

const Hero = () => {
  return (
    <section className="relative h-[78vh] min-h-[620px] overflow-hidden">

  {/* BACKGROUND IMAGE */}

  <img
    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1800&auto=format&fit=crop"
    alt="Coworking Space"
    className="absolute inset-0 w-full h-full object-cover"
  />



  {/* OVERLAY */}

  <div className="absolute inset-0 bg-black/45"></div>

  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>



  {/* CONTENT */}

  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 h-full flex items-center">

    <div className="max-w-3xl">

      {/* BADGE */}

      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-medium mb-6">

        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>

        Flexible Workspace Booking Platform

      </div>



      {/* TITLE */}

      <h1 className="text-[46px] lg:text-[68px] leading-[1] tracking-[-0.04em] font-semibold text-white mb-6">

        Flexible workspaces
        for every way you work.

      </h1>



      {/* SUBTITLE */}

      <p className="text-[18px] leading-[1.7] text-white/80 max-w-2xl mb-10">

        Book office spaces, private cabins,
        open desks and meeting rooms —
        by the hour or day.

      </p>



      {/* BUTTONS */}

      <div className="flex flex-wrap items-center gap-4">

        <button className="h-13 px-7 rounded-2xl bg-sky-500 hover:bg-sky-600 transition text-white text-sm font-medium shadow-lg shadow-sky-500/20">

          Explore Spaces

        </button>


        <button className="h-13 px-7 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md text-white text-sm font-medium hover:bg-white/15 transition">

          ▶ Watch Video

        </button>

      </div>

    </div>

  </div>



  {/* SEARCH BAR */}

  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 w-full max-w-6xl px-6 my--20">

    <div className="bg-white rounded-[28px] shadow-[0_20px_80px_rgba(15,23,42,0.18)] border border-white/40 p-5">

      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 items-end">

        {/* LOCATION */}

        <div>

          <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-3">

            Location

          </p>

          <input
            type="text"
            placeholder="Search city or area"
            className="w-full text-[15px] outline-none placeholder:text-slate-400"
          />

        </div>



        {/* DATE */}

        <div>

          <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-3">

            Date

          </p>

          <input
            type="date"
            className="w-full text-[15px] outline-none"
          />

        </div>



        {/* TIME */}

        <div>

          <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-3">

            Time

          </p>

          <input
            type="time"
            className="w-full text-[15px] outline-none"
          />

        </div>



        {/* PEOPLE */}

        <div>

          <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-3">

            People

          </p>

          <select className="w-full text-[15px] outline-none bg-transparent">

            <option>1 Person</option>
            <option>2 People</option>
            <option>5 People</option>
            <option>10+ People</option>

          </select>

        </div>



        {/* BUTTON */}

        <button className="h-14 rounded-2xl bg-sky-500 hover:bg-sky-600 transition text-white text-sm font-medium">

          Search Spaces

        </button>

      </div>

    </div>

  </div>

</section>
  )
}

export default Hero