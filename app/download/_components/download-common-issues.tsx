import { CheckCircle, AlertTriangle, Download, Smartphone } from "lucide-react";

export default function CommonIssues() {
  return (
    <section>
      <div className="max-w-[1200px] mx-auto  text-white">
        <h2 className="text-[30px] font-bold text-center my-2 lg:my-3">
          Common Issues with Installation Functions and Their Remedies
        </h2>
        <p className="mt-2 mb-5">
          Although downloading and installing our programs is easy, here are
          some typical problems and answers to guarantee a trouble-free
          experience:
        </p>

        <div className="grid gap-8">
          <div className="bg-[linear-gradient(90deg,#0c3782_0%,#2853ed_100%)] shadow-xl rounded-2xl p-6 flex items-start gap-4 border border-gray-100">
            <Download className="text-red-500 w-8 h-8 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold mb-2 text-white">
                1. Problems with Downloading
              </h2>
              <p className="text-white mb-1">
                <span className="font-bold">Problem:</span> Can&apos;t download
                the APK.
              </p>
              <p className="text-white">
                <span className="font-bold">Solution:</span> Ensure a stable
                internet connection. Try another browser or device.
              </p>
            </div>
          </div>

          <div className="bg-[linear-gradient(90deg,#0c3782_0%,#2853ed_100%)] shadow-xl rounded-2xl p-6 flex items-start gap-4 border border-gray-100">
            <AlertTriangle className="text-yellow-500 w-8 h-8 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                2. Installation Blocked
              </h2>
              <p className="text-white mb-1">
                <span className="font-bold">Problem:</span> Device prevents the
                installation.
              </p>
              <p className="text-white">
                <span className="font-bold">Solution:</span> Allow installation
                from unknown sources in device settings (check Android
                instructions).
              </p>
            </div>
          </div>

          <div className="bg-[linear-gradient(90deg,#0c3782_0%,#2853ed_100%)] shadow-xl rounded-2xl p-6 flex items-start gap-4 border border-gray-100">
            <Smartphone className="text-purple-500 w-8 h-8 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                3. App Not Opening
              </h2>
              <p className="text-white mb-1">
                <span className="font-bold">Problem:</span> App crashes or
                doesn&apos;t open after installation.
              </p>
              <p className="text-white">
                <span className="font-bold">Solution:</span> Confirm your device
                meets system requirements. Restart your device and try again.
              </p>
            </div>
          </div>

          <div className="bg-[linear-gradient(90deg,#0c3782_0%,#2853ed_100%)] shadow-xl rounded-2xl p-6 flex items-start gap-4 border border-gray-100">
            <CheckCircle className="text-green-500 w-8 h-8 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                4. iOS Trust Profile
              </h2>
              <p className="text-white mb-1">
                <span className="font-bold">Problem:</span> iOS app cannot be
                trusted.
              </p>
              <p className="text-white">
                <span className="font-bold">Solution:</span> Go to{" "}
                <span className="italic">
                  Settings &gt; General &gt; Device Management
                </span>
                , select <span className="font-semibold">ph365</span> and trust
                the profile.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-10 text-gray-500">
          Should you need further help, visit the Help Center or get in touch
          with our support team.
        </div>
      </div>
    </section>
  );
}
