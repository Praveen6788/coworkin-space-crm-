function WorkflowManual() {

  const crmStages = [
    "NEW LEAD",
    "CONTACTED",
    "PROPOSAL",
    "PAYMENT",
    "MOVE-IN"
  ];



  const financeFlow = [
    "Quotation",
    "Invoice",
    "Payment",
    "Invoice Shared",
    "Move-In"
  ];



  const modules = [

    {
      title: "Client Portal",
      desc: "Bookings & billing"
    },

    {
      title: "CRM Pipeline",
      desc: "Lead workflow"
    },

    {
      title: "Finance ERP",
      desc: "Invoices & payments"
    },

    {
      title: "Admin Dashboard",
      desc: "Alerts & monitoring"
    }

  ];



  return (

    <div className="min-h-screen bg-[#020617] text-white px-5 lg:px-10 py-10">



      {/* HEADER */}



      <div className="max-w-6xl mx-auto mb-10">

        <p className="text-sky-400 text-[10px] uppercase tracking-[0.28em] mb-3">

          Documentation

        </p>



        <h1 className="text-4xl lg:text-6xl font-semibold mb-4">

          Workflow Manual

        </h1>



        <p className="text-slate-400 text-sm lg:text-base max-w-3xl leading-relaxed">

          Unified OS for Coworking Spaces —
          CRM, ERP, Finance, Billing and
          Workspace Operations Workflow.

        </p>

      </div>



      {/* OVERVIEW */}



      <section className="max-w-6xl mx-auto mb-8">

        <div className="bg-[#0F172A] border border-white/10 rounded-3xl p-5">

          <h2 className="text-2xl font-semibold mb-3">

            📌 Overview

          </h2>



          <p className="text-slate-400 text-sm leading-relaxed">

            Centralized SaaS platform for
            managing coworking enquiries,
            onboarding, finance workflows,
            invoices and workspace operations.

          </p>

        </div>

      </section>



      {/* CRM */}



      <section className="max-w-6xl mx-auto mb-8">

        <div className="flex items-center justify-between mb-5">

          <div>

            <p className="text-sky-400 text-[10px] uppercase tracking-[0.2em] mb-2">

              CRM WORKFLOW

            </p>



            <h2 className="text-3xl font-semibold">

              Lead Pipeline

            </h2>

          </div>

        </div>



        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">

          {crmStages.map((stage, index) => (

            <div
              key={index}
              className="bg-[#0F172A] border border-white/10 rounded-2xl p-4 text-center hover:border-sky-500/20 transition"
            >

              <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mx-auto mb-3 text-sky-400 text-sm">

                {index + 1}

              </div>



              <h3 className="text-sm font-medium">

                {stage}

              </h3>

            </div>

          ))}

        </div>

      </section>



      {/* FINANCE */}



      <section className="max-w-6xl mx-auto mb-8">

        <div className="flex items-center justify-between mb-5">

          <div>

            <p className="text-emerald-400 text-[10px] uppercase tracking-[0.2em] mb-2">

              ERP FINANCE

            </p>



            <h2 className="text-3xl font-semibold">

              Billing Workflow

            </h2>

          </div>

        </div>



        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">

          {financeFlow.map((item, index) => (

            <div
              key={index}
              className="bg-[#0F172A] border border-white/10 rounded-2xl p-4 hover:border-emerald-500/20 transition"
            >

              <div className="flex items-center justify-between mb-3">

                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs">

                  {index + 1}

                </div>



                <div className="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-300 text-[10px]">

                  Active

                </div>

              </div>



              <h3 className="text-sm font-medium leading-relaxed">

                {item}

              </h3>

            </div>

          ))}

        </div>

      </section>



      {/* MODULES */}



      <section className="max-w-6xl mx-auto mb-8">

        <div className="flex items-center justify-between mb-5">

          <div>

            <p className="text-violet-400 text-[10px] uppercase tracking-[0.2em] mb-2">

              SYSTEM MODULES

            </p>



            <h2 className="text-3xl font-semibold">

              Core Modules

            </h2>

          </div>

        </div>



        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">

          {modules.map((module, index) => (

            <div
              key={index}
              className="bg-[#0F172A] border border-white/10 rounded-2xl p-5 hover:border-violet-500/20 transition"
            >

              <h3 className="text-base font-semibold mb-2">

                {module.title}

              </h3>



              <p className="text-slate-400 text-sm leading-relaxed">

                {module.desc}

              </p>

            </div>

          ))}

        </div>

      </section>



      {/* ARCHITECTURE */}



      <section className="max-w-6xl mx-auto mb-8">

        <div className="bg-[#0F172A] border border-white/10 rounded-3xl p-5">

          <div className="mb-5">

            <p className="text-amber-400 text-[10px] uppercase tracking-[0.2em] mb-2">

              ARCHITECTURE

            </p>



            <h2 className="text-3xl font-semibold">

              System Flow

            </h2>

          </div>



          <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-5 overflow-x-auto">

            <pre className="text-slate-300 text-xs leading-relaxed">

{`
 Client UI (React + Vite)
            ↓
 Express REST APIs
            ↓
 MongoDB Atlas
`}

            </pre>

          </div>

        </div>

      </section>



      {/* TECH STACK */}



      <section className="max-w-6xl mx-auto mb-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">



          <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-5">

            <h3 className="text-lg font-semibold mb-4">

              Frontend

            </h3>



            <div className="space-y-2 text-sm text-slate-400">

              <p>React.js</p>

              <p>Vite</p>

              <p>Tailwind CSS</p>

              <p>Axios</p>

            </div>

          </div>



          <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-5">

            <h3 className="text-lg font-semibold mb-4">

              Backend

            </h3>



            <div className="space-y-2 text-sm text-slate-400">

              <p>Node.js</p>

              <p>Express.js</p>

              <p>MongoDB</p>

              <p>Mongoose</p>

            </div>

          </div>



          <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-5">

            <h3 className="text-lg font-semibold mb-4">

              Deployment

            </h3>



            <div className="space-y-2 text-sm text-slate-400">

              <p>Vercel</p>

              <p>Render</p>

              <p>MongoDB Atlas</p>

            </div>

          </div>

        </div>

      </section>



      {/* FOOTER */}



      <section className="max-w-6xl mx-auto">

        <div className="bg-gradient-to-br from-sky-500/10 via-violet-500/5 to-emerald-500/10 border border-white/10 rounded-3xl p-8 text-center">

          <h2 className="text-3xl font-semibold mb-4">

            🎯 Unified OS for Coworking Spaces

          </h2>



          <p className="text-slate-400 text-sm lg:text-base leading-relaxed max-w-3xl mx-auto">

            Centralized CRM + ERP platform
            combining workspace operations,
            finance workflows, billing,
            onboarding and branch management
            into one scalable SaaS ecosystem.

          </p>

        </div>

      </section>

    </div>

  );

}



export default WorkflowManual;