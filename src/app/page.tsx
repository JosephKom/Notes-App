import Image from "next/image";
import Link from "next/link";
import Card from "../../components/Card";
import { title } from "process";
import HomeButton from "../../components/HomeButton";

export default function Home() {
  const source1:string = "/images/messynotes.jpg"
  const para1:string = "Get rid of your messy notes and organize your thoughts with Leira List."
  const title1:string = "Organize"

  const source2:string = "/images/organizedspace.jpg"
  const para2:string = "Keep your workspace clean and free of clutter"
  const title2:string = "Clean Workspace"

  const source3:string = "/images/clickKeyboard.jpg"
  const para3:string = "Click Below and Join our Community of avid note takers"
  const title3:string = "Start With One Click"



  return (
    <>
    <div className="flex flex-col gap-6 flex-wrap m-5 justify-around">
      <div className="flex flex-col font-serif gap-10">
        <h1 className="m-1.5 font-bold text-center text-xl">Experience The World's Premier Note taking App</h1>
        <Card source={source1} para={para1} title={title1} />
        <Card source={source2} para={para2} title={title2} />
        <Card source={source3} para={para3} title={title3} />
        
      </div>
    
    <div className="flex items-end justify-center">
      <HomeButton />
    </div>
    </div>


    </>
  );
}
