import { ArrowDown } from "lucide-react"

export default function LeadershipTimeline() {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Leadership Timeline</h2>

      {/* Faculty Section */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Faculty Advisor</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Dr. Garima Thakur</p>
                <p className="text-sm text-gray-600">June 2024 – January 2025</p>
              </div>
            </div>
            <div className="border-l-2 border-blue-300 h-6 ml-1.5"></div>
            <div className="flex items-start">
              <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Dr. Puneet Kumar</p>
                <p className="text-sm text-gray-600">January 2025 – Present</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Faculty Co-Advisor</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Er. Himanshi</p>
                <p className="text-sm text-gray-600">June 2024 – Present</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center my-6">
        <ArrowDown className="text-blue-500 h-10 w-10" />
      </div>

      {/* Secretary Section */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 shadow-sm mb-8 max-w-md mx-auto">
        <h3 className="text-xl font-semibold text-indigo-800 mb-4">Secretary</h3>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="w-3 h-3 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <div>
              <p className="font-medium">Sarthak Kumar Thakur</p>
              <p className="text-sm text-gray-600">August 2024 – Present</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center my-6">
        <ArrowDown className="text-indigo-500 h-10 w-10" />
      </div>

      {/* Joint Secretaries Section */}
      <h3 className="text-xl font-semibold text-center text-purple-800 mb-6">Joint Secretaries</h3>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-purple-300"></div>

        <div className="space-y-8 relative">
          {/* June 2024 */}
          <div className="flex items-center justify-center mb-4">
            <div className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full z-10">
              June 2024
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="md:col-start-1 flex justify-end">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 shadow-sm w-full max-w-xs">
                <p className="font-medium">Barenya Behra</p>
                <p className="text-sm text-gray-600">June 2024 – January 2025</p>
              </div>
            </div>
            <div className="md:col-start-2"></div>
          </div>

          {/* August 2024 */}
          <div className="flex items-center justify-center mb-4">
            <div className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full z-10">
              August 2024
            </div>
          </div>

          {/* December 2024 */}
          <div className="flex items-center justify-center mb-4">
            <div className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full z-10">
              December 2024
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="md:col-start-1"></div>
            <div className="md:col-start-2">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 shadow-sm w-full max-w-xs">
                <p className="font-medium">Lavanya Sood</p>
                <p className="text-sm text-gray-600">December 2024 – Present</p>
              </div>
            </div>
          </div>

          {/* January 2025 */}
          <div className="flex items-center justify-center mb-4">
            <div className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full z-10">
              January 2025
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="md:col-start-1">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 shadow-sm w-full max-w-xs ml-auto">
                <p className="font-medium">Anirudh Vikalp</p>
                <p className="text-sm text-gray-600">January 2025 – Present</p>
              </div>
            </div>
            <div className="md:col-start-2"></div>
          </div>

          {/* February 2025 */}
          <div className="flex items-center justify-center mb-4">
            <div className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full z-10">
              February 2025
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="md:col-start-1"></div>
            <div className="md:col-start-2">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 shadow-sm w-full max-w-xs">
                <p className="font-medium">Mehak</p>
                <p className="text-sm text-gray-600">February 2025 – Present</p>
              </div>
            </div>
          </div>

          {/* Present */}
          <div className="flex items-center justify-center">
            <div className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full z-10">Present</div>
          </div>
        </div>
      </div>
    </div>
  )
}
