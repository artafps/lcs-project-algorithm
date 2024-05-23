'use client'
import { Button } from "@/components/ui/button"
import { Link } from "lucide-react";
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { Fragment, useState } from "react";
import { lcs, lcsBruteForce } from "./Utils/LCS";

export default function Home() {
  const [DNA1, setDNA1] = useState('');
  const [DNA2, setDNA2] = useState('');
  const [Selected, SetSelected] = useState('Recursive');
  const [Result, SetResult] = useState('Recursive');
  const [Getdp, Setdp] = useState([]);
  const [Getdirection, Setdirection] = useState([]);
  const { toast } = useToast()
  const getDNA1 = (e) => {
    if (e.trim() === '') {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Please enter the amount of DNA 1.",
        action: <ToastAction altText="Try again">Oky</ToastAction>,
      })
      setDNA1(e)
    } else {
      setDNA1(e)
    }

  }

  const getDNA2 = (e) => {
    if (e.trim() === '') {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Please enter the amount of DNA 2.",
        action: <ToastAction altText="Try again">Oky</ToastAction>,
      })
      setDNA2(e)
    } else {
      setDNA2(e)
    }

  }
  const handleMatrix = () => {
    if (DNA1.trim() === '') {
      return toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Please enter the amount of DNA 1.",
        action: <ToastAction altText="Try again">Oky</ToastAction>,
      })
    }
    if (DNA2.trim() === '') {
      return toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Please enter the amount of DNA 2.",
        action: <ToastAction altText="Try again">Oky</ToastAction>,
      })
    }
    if (Selected === 'Recursive') {
      const { lengthOfLCS, lcsStr, dp, direction } = lcs(DNA1, DNA2)
      console.log(lengthOfLCS, lcsStr, dp, direction)
      Setdp(dp)
      Setdirection(direction)
      SetResult("number : " + lengthOfLCS + " / Result : " + lcsStr)
    } else if (Selected === 'Brute') {
      const Result = lcsBruteForce(DNA1, DNA2, 1000)
      SetResult(Result)
      if (Result === 'not found') {
        return toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "You cannot solve the problem with brute force method, it takes more time",
          action: <ToastAction altText="Try again">Oky</ToastAction>,
        })
      }

    }

  }

  return (
    <div >
      <div >
        <main className="flex  flex-col items-center justify-between p-24">
          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
              git clone &nbsp;
              <code className="font-mono font-bold">https://github.com/artafps/lcs-project-algorithm.git</code>
            </p>
            <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
              <a href="https://github.com/artafps/lcs-project-algorithm/fork"><Button>fork</Button></a>
            </div>
          </div>
          <br />
          <div className="z-10 max-w-5xl w-full  justify-between font-mono text-sm lg:flex">
            <div className=" w-full max-w-sm items-center ">
              <Input value={DNA1} onChangeFunc={getDNA1} type="text" placeholder="Type DNA 1" />
              <br />
              <Input value={DNA2} onChangeFunc={getDNA2} type="text" placeholder="Type DNA 2" />
              <br />
              <Select defaultValue={Selected} onValueChange={e => SetSelected(e)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent >
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="Recursive">LCS Recursive</SelectItem>
                    <SelectItem value="Brute">LCS Brute Force</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select><br />
              <Button onClick={handleMatrix} type="submit">Submit</Button>
            </div>
            <br/>
            <br/>
            <br/>
            <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
              <div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium leading-none">Result Matrix</h4>
                  <p>{Result}</p>
                </div>
                <Separator className="my-4" />
                
                  {Selected !== 'Brute' ? (
                    <Fragment>
                      <div className="flex h-5 items-center space-x-4 text-sm">
                      <div>End</div>
                      <Separator orientation="" />
                      {('e'+DNA2).split('').map((item,i) =>{
                        return(
                          <Fragment>
                          {i===0?<div>End</div>:<div>{item}&nbsp;</div>}
                          <Separator orientation="" />
                          </Fragment>
                        )
                      })}
                      </div>
                      <Separator className="my-4" />
                      
                      
                     {('e'+DNA1).split('').map((item,i) =>{
                        return(
                          <div>
                          <div className="flex h-5 items-center space-x-4 text-sm">
                            {i===0?<div>End</div>:<div>{item} &nbsp;</div>}
                            
                            <Separator orientation="" />
                             {Getdp.length===('e'+DNA1).split('').length?(Getdp[i].map((sitem , j )=>{
                              return(
                                <Fragment>
                               <div>{Getdirection[i][j]===''?"-":Getdirection[i][j]} {+" "+sitem}</div>
                               <Separator orientation="" />
                                </Fragment>
                              )
                            })):null} 
                          </div>
                          <Separator className="my-4" />
                          </div>
                        )
                      })}
                      
                    </Fragment>
                  ) : (<div>Result :{ Result}</div>)}                
              </div>
            </div>
          </div>
        </main>
      </div >
    </div >
  );
}
