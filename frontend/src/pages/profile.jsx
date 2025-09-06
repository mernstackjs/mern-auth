import { useAuthContext } from "../content/authcontext";

export default function Profile() {
  const { authUser, logout } = useAuthContext();

  if (!authUser) return <p>Loading...</p>;
  return (
    <div className="min-h-screen bg-gray-50 py-4 lg:py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-sm border p-4 lg:p-8 mb-4 lg:mb-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 lg:gap-6">
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl lg:text-2xl font-bold flex-shrink-0">
              {authUser?.name?.charAt(0)?.toUpperCase() || "U"}
            </div>

            {/* User Info */}
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">
                {authUser?.name || "User"}
              </h1>
              <p className="text-gray-500 text-base lg:text-lg break-all">
                {authUser?.email}
              </p>
              <div className="mt-2 text-sm text-gray-400">
                Member since{" "}
                {authUser?.createdAt
                  ? new Date(authUser.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "N/A"}
              </div>
              <button
                onClick={logout}
                className="bg-red-500 text-white p-2 mt-3 cursor-pointer rounded-md"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Profile Settings */}
        <div className="bg-white rounded-2xl shadow-sm border p-4 lg:p-8">
          <div className="mb-4 lg:mb-6">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-800">
              Profile Settings
            </h2>
            <p className="text-gray-500 mt-1 text-sm lg:text-base">
              Update your personal information
            </p>
          </div>

          <form className="space-y-4 lg:space-y-6">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm lg:text-base">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full p-3 lg:p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm lg:text-base"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm lg:text-base">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 lg:p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm lg:text-base"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
