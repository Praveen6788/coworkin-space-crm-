import { useApp }
from "../../context/AppContext";

function NotificationCenter() {

  const {
    notifications
  } = useApp();


  return (

    <div className="space-y-3">

      {notifications
        .slice(0, 4)
        .map((notification) => (

          <div
            key={notification.id}
            className="bg-white/5 border border-white/5 rounded-xl p-4"
          >

            <p className="text-sm text-gray-300">

              {notification.message}

            </p>

          </div>

        ))}

    </div>

  );
}

export default NotificationCenter;
