import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="bg-blue-500 flex h-20 shrink-0 items-end rounded-lg p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="bg-gray-50 flex flex-col justify-center gap-6 rounded-lg px-6 py-10 md:w-2/5 md:px-20">
          <div className={styles.shape} />

          {/* <div className="border-b-black border-1-transparent border-r-transparent h-3 w-0 border-b-[30px] border-l-[20px] border-r-[20px]" />


          <button className="w-6/12 transform transition-transform duration-300 ease-in-out  hover:resize bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Button</button>
 */}

          <p
            className={`${lusitana.className} text-gray-800 text-xl md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to Acme.!</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="bg-blue-500 text-white hover:bg-blue-400 flex items-center gap-5 self-start rounded-lg px-6 py-3 text-sm font-medium transition-colors md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            className="hidden md:block"
            width={1000}
            height={760}
            alt={''}
          />

          <Image
            src="/hero-mobile.png"
            className="block md:hidden"
            width={560}
            height={620}
            alt={''}
          />
        </div>
      </div>
    </main>
  );
}
