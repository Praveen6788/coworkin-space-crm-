import {

  useEffect,

  useState

} from "react";



import {

  useParams

} from "react-router-dom";



import { fetchLeadById } from "../../Api/lead";



function ClientBillingPage() {



  const { id } = useParams();



  const [lead, setLead] =
    useState(null);



  const [paymentDone,
    setPaymentDone] =
    useState(false);



  useEffect(() => {

    const loadLead =
      async () => {

        try {

          const data =
            await fetchLeadById(
              id
            );



          setLead(data);

        } catch (error) {

          console.log(error);

        }

      };



    loadLead();

  }, [id]);



  if (!lead) {

    return (

      <div className="min-h-screen bg-[#020617] flex items-center justify-center text-white">

        Loading Billing...

      </div>

    );

  }



  return (

    <div className="min-h-screen bg-[#020617] p-7">



      {/* HEADER */}



      <div className="mb-8">

        <h1 className="text-[40px] font-semibold text-white mb-3">

          {lead.name}

        </h1>



        <p className="text-slate-400 text-sm">

          {lead.branch} • {lead.workspace}

        </p>

      </div>



      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">



        {/* DETAILS */}



        <div className="lg:col-span-2 bg-[#0F172A] border border-white/10 rounded-[28px] p-5">

          <h2 className="text-white text-[20px] font-semibold mb-6">

            Booking & Billing

          </h2>



          <div className="space-y-5">

            <div className="flex justify-between">

              <p className="text-slate-400">

                Workspace

              </p>



              <h3 className="text-white">

                {lead.workspace}

              </h3>

            </div>



            <div className="flex justify-between">

              <p className="text-slate-400">

                Branch

              </p>



              <h3 className="text-white">

                {lead.branch}

              </h3>

            </div>



            <div className="flex justify-between">

              <p className="text-slate-400">

                Seats

              </p>



              <h3 className="text-white">

                {lead.seats}

              </h3>

            </div>



            <div className="flex justify-between">

              <p className="text-slate-400">

                Final Amount

              </p>



              <h3 className="text-sky-400 text-xl font-semibold">

                {lead.finalAmount || "₹60,000"}

              </h3>

            </div>

          </div>

        </div>



        {/* PAYMENT */}



        <div className="bg-[#0F172A] border border-white/10 rounded-[28px] p-5">

          {!paymentDone ? (

            <>

              <div className="bg-white/[0.03] rounded-2xl p-5 mb-5">

                <p className="text-slate-400 text-sm mb-2">

                  Invoice Status

                </p>



                <h3 className="text-white font-semibold">

                  Payment Pending

                </h3>

              </div>



              <button
                onClick={() =>
                  setPaymentDone(true)
                }
                className="w-full h-12 rounded-2xl bg-sky-500 hover:bg-sky-600 transition text-white text-sm font-medium"
              >

                Pay Now

              </button>

            </>

          ) : (

            <>

              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5 mb-5">

                <h3 className="text-emerald-300 font-semibold mb-2">

                  Payment Successful

                </h3>



                <p className="text-emerald-200 text-sm">

                  Workspace booking confirmed.

                </p>

              </div>



              <button className="w-full h-12 rounded-2xl border border-white/10 hover:bg-white/[0.03] transition text-white text-sm font-medium">

                Download Invoice

              </button>

            </>

          )}

        </div>

      </div>

    </div>

  );

}



export default ClientBillingPage;