import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* This is an Image */}
      <div className="p-2">
        <Image
          src="/book-pictures/1.webp"
          alt="Logo"
          width={400}
          height={400}
          className="rounded-xl"
        />
      </div>

      {/* Book Titke */}
      <h2 className="text-2xl font-bold text-center">The Picture Booklet</h2>
      {/* Button to Get Started*/}
      <div className="p-2">
        <Button asChild className="w-full">
          <Link href="/page1">Open the Booklet</Link>
        </Button>
      </div>
      {/* Contact Information */}
      <div className="p-2">
        <p className="text-sm font-bold">For hard copies and further information, contact the Great Commission Movement of Ghana</p>
        <div>

        </div>
      </div>
    </div>
  );
}

// export default function Home() {
//   return (
//     <main className="w-full items-center justify-center bg-slate-500 h-screen flex">
//       <div className="bg-slate-200 w-96 h-screen p-4 flex flex-col gap-4 justify-center items-center">
//         <div>
//           <Image
//             src="/book-pictures/1.webp"
//             alt="Logo"
//             width={400}
//             height={400}
//             className="rounded-xl"
//           />
//         </div>

//         <h2 className="text-2xl font-bold text-slate-900 text-center">
//           The Picture Booklet
//         </h2>
//         <p className="text-sm px-4 text-center">
//           This is a book from the Great Commission Movement of Ghana
//         </p>

//         <Button asChild className="w-full">
//           <Link href="/page1">Open the Booklet</Link>
//         </Button>
//       </div>
//     </main>
//   );
// }
