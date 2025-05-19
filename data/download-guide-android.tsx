import Image from "next/image";

export const data = [
  {
    title: "Step 01: Visit the ph365 Download Page",
    content: (
      <>
        <p className="pb-2">
          Visit the official ph365 Download Page using Chrome or any other
          browser on your Android device. The Android APK's most recent 2025
          version is on this page.
        </p>
        <div className="aspect-square w-full h-[150px] lg:h-[285px] mx-auto lg:border-3 lg:border-white/80 overflow-hidden lg:shadow-lg rounded-xs">
          <Image
            src="/img/download/android/Step 01 Visit the ph365 Download Page For Android Users.webp"
            width={700}
            height={300}
            alt="Visit the ph365 Download Page For Android Users"
          />
        </div>
      </>
    ),
  },
  {
    title: "Step 02: Get the Android App",
    content: (
      <>
        <p className="pb-2">
          For Android, use the "Download Here" button. This will start
          downloading the latest APK version of the program, modified for
          enhanced speed and functionality.
        </p>
        <div className="aspect-square w-full h-[150px] lg:h-[285px] mx-auto lg:border-3 lg:border-white/80 overflow-hidden lg:shadow-lg rounded-xs">
          <Image
            src="/img/download/android/Step 02 Get the Android App For Android Users.webp"
            width={700}
            height={300}
            alt="Get the Android App For Android Users"
          />
        </div>
      </>
    ),
  },
  {
    title: "Step 03: Allow Unknown Sources",
    content: (
      <>
        <p className="pb-2">
          Your phone must first install applications from outside the Google
          Play Store before installation. Here is how:
        </p>
        <ul className="list-disc pb-2">
          <li>Open Settings</li>
          <li>Press Security</li>
          <li>Press Device Management</li>
          <li>Look for the Install Unknown Apps or Unknown Sources choice</li>
          <li>Turn it on for your browser (e.g., Chrome or Firefox)</li>
        </ul>
        <p className="pb-2">
          This will allow your iPhone to run and install non-App Store
          applications.
        </p>
        <div className="aspect-square w-full h-[150px] lg:h-[285px] mx-auto lg:border-3 lg:border-white/80 overflow-hidden lg:shadow-lg rounded-xs">
          <Image
            src="/img/download/android/Step 03 Allow Unknown Sources For Android Users.webp"
            width={700}
            height={300}
            alt="Allow Unknown Sources For Android Users"
          />
        </div>
      </>
    ),
  },
  {
    title: "Step 04: Install the app",
    content: (
      <>
        <p className="pb-3 font-bold">
          This option lets you securely install APK files.
        </p>
        <p className="pb-2">
          Open your Downloads folder to locate the APK file you just downloaded.
          To begin the installation, tap on it. A prompt will show up; simply
          press "Install" to go on.
        </p>
        <p className="pb-2">
          It's a good idea to return to Settings &gt; Security and switch off
          the "Install Unknown Apps" option once the program is installed to
          maintain your phone security.
        </p>
        <div className="aspect-square w-full h-[150px] lg:h-[285px] mx-auto lg:border-3 lg:border-white/80 overflow-hidden lg:shadow-lg rounded-xs">
          <Image
            src="/img/download/android/Step 04 Install the app For Android Users.webp"
            width={700}
            height={300}
            alt="Install the app For Android Users"
          />
        </div>
      </>
    ),
  },
  {
    title: "Step 05: Open the app",
    content: (
      <>
        <p className="pb-3 font-bold">
          This option lets you securely install APK files.
        </p>
        <p className="pb-2">
          Look for the ph365 app on your Home Screen or App Drawer. Touch to
          access it. If you're only joining, log in using your account or set up
          a new one.
        </p>
        <div className="aspect-square w-full h-[150px] lg:h-[285px] mx-auto lg:border-3 lg:border-white/80 overflow-hidden lg:shadow-lg rounded-xs">
          <Image
            src="/img/download/android/Step 05 Open the app For Android Users.webp"
            width={700}
            height={300}
            alt="Open the app For Android Users"
          />
        </div>
      </>
    ),
  },
];
