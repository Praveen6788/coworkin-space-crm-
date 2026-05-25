import { useState } from "react";

import {
  User2,
  Phone,
  Mail,
  Building2,
  Users,
  CircleDollarSign,
  Calendar,
  MapPin,
  Briefcase,
  CheckCircle2
} from "lucide-react";

import { saveLead } from "../../data/leadsStore";

import { branches } from "../../data/branches";

function AddLead() {

  const [formData, setFormData] = useState({

    name: "",

    phone: "",

    email: "",

    company: "",

    workspace: "Private Cabin",

    seats: 4,

    branch: branches[0]?.name || "",

    budget: "",

    moveIn: "",

    priority: "Medium"

  });



  const [success, setSuccess] =
    useState(false);



  /* ----------------------------------------
     HANDLE INPUT
  ---------------------------------------- */

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  };



  /* ----------------------------------------
     ADD LEAD
  ---------------------------------------- */

  const handleSubmit = (e) => {

    e.preventDefault();



    const newLead = {

      id: Date.now(),

      ...formData,



      stage: "new"

    };



    saveLead(newLead);



    setSuccess(true);



    setFormData({

      name: "",

      phone: "",

      email: "",

      company: "",

      workspace: "Private Cabin",

      seats: 4,

      branch: branches[0]?.name || "",

      budget: "",

      moveIn: "",

      priority: "Medium"

    });



    setTimeout(() => {

      setSuccess(false);

    }, 3000);

  };



  return (

    <div className="min-h-screen bg-[#020617] p-7">

      {/* HEADER */}

      <div className="mb-8">

        <p className="text-sky-400 text-[11px] uppercase tracking-[0.3em] font-medium mb-3">

          CRM Lead Management

        </p>



        <h1 className="text-[42px] font-semibold text-white leading-tight mb-3">

          Add New Workspace Lead

        </h1>



        <p className="text-slate-400 text-[15px] leading-[1.8] max-w-2xl">

          Create and manage incoming coworking enquiries,
          workspace bookings and enterprise leads.

        </p>

      </div>



      {/* SUCCESS */}

      {success && (

        <div className="mb-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-4 flex items-center gap-3">

          <CheckCircle2
            size={20}
            className="text-emerald-400"
          />



          <p className="text-emerald-300 text-sm font-medium">

            Lead added successfully

          </p>

        </div>

      )}



      {/* FORM */}

      <div className="bg-[#0F172A] border border-white/10 rounded-[32px] p-8">

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >

          {/* NAME */}

          <div>

            <label className="text-slate-300 text-sm mb-3 block">

              Full Name

            </label>



            <div className="flex items-center gap-3 h-14 px-5 rounded-2xl bg-white/[0.03] border border-white/10">

              <User2
                size={18}
                className="text-slate-500"
              />



              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter full name"
                required
                className="w-full bg-transparent outline-none text-white text-sm"
              />

            </div>

          </div>



          {/* PHONE */}

          <div>

            <label className="text-slate-300 text-sm mb-3 block">

              Phone Number

            </label>



            <div className="flex items-center gap-3 h-14 px-5 rounded-2xl bg-white/[0.03] border border-white/10">

              <Phone
                size={18}
                className="text-slate-500"
              />



              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                required
                className="w-full bg-transparent outline-none text-white text-sm"
              />

            </div>

          </div>



          {/* EMAIL */}

          <div>

            <label className="text-slate-300 text-sm mb-3 block">

              Email Address

            </label>



            <div className="flex items-center gap-3 h-14 px-5 rounded-2xl bg-white/[0.03] border border-white/10">

              <Mail
                size={18}
                className="text-slate-500"
              />



              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                className="w-full bg-transparent outline-none text-white text-sm"
              />

            </div>

          </div>



          {/* COMPANY */}

          <div>

            <label className="text-slate-300 text-sm mb-3 block">

              Company Name

            </label>



            <div className="flex items-center gap-3 h-14 px-5 rounded-2xl bg-white/[0.03] border border-white/10">

              <Building2
                size={18}
                className="text-slate-500"
              />



              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Enter company"
                className="w-full bg-transparent outline-none text-white text-sm"
              />

            </div>

          </div>



          {/* WORKSPACE */}

          <div>

            <label className="text-slate-300 text-sm mb-3 block">

              Workspace Type

            </label>



            <div className="flex items-center gap-3 h-14 px-5 rounded-2xl bg-white/[0.03] border border-white/10">

              <Briefcase
                size={18}
                className="text-slate-500"
              />



              <select
                name="workspace"
                value={formData.workspace}
                onChange={handleChange}
                className="w-full bg-transparent outline-none text-white text-sm"
              >

                <option
                  value="Private Cabin"
                  className="bg-slate-900"
                >

                  Private Cabin

                </option>

                <option
                  value="Meeting Room"
                  className="bg-slate-900"
                >

                  Meeting Room

                </option>

                <option
                  value="Hot Desks"
                  className="bg-slate-900"
                >

                  Hot Desks

                </option>

                <option
                  value="Day Pass"
                  className="bg-slate-900"
                >

                  Day Pass

                </option>

                <option
                  value="Event Space"
                  className="bg-slate-900"
                >

                  Event Space

                </option>

              </select>

            </div>

          </div>



          {/* SEATS */}

          <div>

            <label className="text-slate-300 text-sm mb-3 block">

              Number Of Seats

            </label>



            <div className="flex items-center gap-3 h-14 px-5 rounded-2xl bg-white/[0.03] border border-white/10">

              <Users
                size={18}
                className="text-slate-500"
              />



              <input
                type="number"
                name="seats"
                value={formData.seats}
                onChange={handleChange}
                min="1"
                className="w-full bg-transparent outline-none text-white text-sm"
              />

            </div>

          </div>



          {/* BRANCH */}

          <div>

            <label className="text-slate-300 text-sm mb-3 block">

              Branch

            </label>



            <div className="flex items-center gap-3 h-14 px-5 rounded-2xl bg-white/[0.03] border border-white/10">

              <MapPin
                size={18}
                className="text-slate-500"
              />



              <select
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                className="w-full bg-transparent outline-none text-white text-sm"
              >

                {branches.map((branch) => (

                  <option
                    key={branch.id}
                    value={branch.name}
                    className="bg-slate-900"
                  >

                    {branch.name}

                  </option>

                ))}

              </select>

            </div>

          </div>



          {/* BUDGET */}

          <div>

            <label className="text-slate-300 text-sm mb-3 block">

              Budget

            </label>



            <div className="flex items-center gap-3 h-14 px-5 rounded-2xl bg-white/[0.03] border border-white/10">

              <CircleDollarSign
                size={18}
                className="text-slate-500"
              />



              <input
                type="text"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                placeholder="₹50K / month"
                className="w-full bg-transparent outline-none text-white text-sm"
              />

            </div>

          </div>



          {/* MOVE IN */}

          <div>

            <label className="text-slate-300 text-sm mb-3 block">

              Move In Date

            </label>



            <div className="flex items-center gap-3 h-14 px-5 rounded-2xl bg-white/[0.03] border border-white/10">

              <Calendar
                size={18}
                className="text-slate-500"
              />



              <input
                type="date"
                name="moveIn"
                value={formData.moveIn}
                onChange={handleChange}
                className="w-full bg-transparent outline-none text-white text-sm"
              />

            </div>

          </div>



          {/* PRIORITY */}

          <div>

            <label className="text-slate-300 text-sm mb-3 block">

              Priority

            </label>



            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="w-full h-14 px-5 rounded-2xl bg-white/[0.03] border border-white/10 outline-none text-white text-sm"
            >

              <option
                value="High"
                className="bg-slate-900"
              >

                High

              </option>

              <option
                value="Medium"
                className="bg-slate-900"
              >

                Medium

              </option>

              <option
                value="Low"
                className="bg-slate-900"
              >

                Low

              </option>

            </select>

          </div>



          {/* BUTTON */}

          <div className="md:col-span-2 pt-3">

            <button
              type="submit"
              className="w-full h-14 rounded-2xl bg-sky-500 hover:bg-sky-600 transition text-white text-sm font-semibold"
            >

              Add Lead To Pipeline

            </button>

          </div>

        </form>

      </div>

    </div>

  );
}

export default AddLead;