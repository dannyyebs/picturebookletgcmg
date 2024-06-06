import Image from "next/image";
import { Button } from "./ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";

const BookPageComponent = () => {
  return (
    <div>
      {/* Image from the Book */}

      <div>
        <Image
          src={"/book-pictures/2.webp"}
          alt="Logo"
          width={400}
          height={400}
          className="rounded-xl p-2"
        />
      </div>

      {/* Quotations as Button with Outline variant */}

      <div className="px-2 flex justify-between items-center">
        <AlertDialog>
          <Button asChild variant="outline">
            <AlertDialogTrigger>Genesis 2:7</AlertDialogTrigger>
          </Button>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Genesis 2:7</AlertDialogTitle>
              <AlertDialogDescription>
                7 Then the LORD God formed a man from the dust of the ground and
                breathed into his nostrils the breath of life, and the man
                became a living being.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Close</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <Button variant="outline">Genesis 2:7</Button>
        <Button variant="outline">Genesis 2:7</Button>
      </div>

      {/* Button for next */}
    </div>
  );
};

export default BookPageComponent;
